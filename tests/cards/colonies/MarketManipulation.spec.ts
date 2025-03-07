import {SelectColony} from './../../../src/inputs/SelectColony';
import {expect} from 'chai';
import {getTestPlayer, newTestGame} from '../../TestGame';
import {Pets} from '../../../src/cards/base/Pets';
import {MarketManipulation} from '../../../src/cards/colonies/MarketManipulation';
import {Enceladus} from '../../../src/colonies/Enceladus';
import {Luna} from '../../../src/colonies/Luna';
import {Miranda} from '../../../src/colonies/Miranda';
import {Europa} from './../../../src/colonies/Europa';
import {Pluto} from '../../../src/colonies/Pluto';
import {Callisto} from '../../../src/colonies/Callisto';
import {Game} from '../../../src/Game';
import {Player} from '../../../src/Player';
import {ColonyName} from '../../../src/common/colonies/ColonyName';

describe('MarketManipulation', function() {
  let card : MarketManipulation;
  let player : Player;
  let game: Game;

  beforeEach(function() {
    card = new MarketManipulation();
    game = newTestGame(2, {
      coloniesExtension: true,
      customColoniesList: [
        ColonyName.GANYMEDE,
        ColonyName.LUNA,
        ColonyName.PLUTO,
        ColonyName.CALLISTO,
        ColonyName.EUROPA],
    });
    player = getTestPlayer(game, 0);
  });

  it('Should play', function() {
    card.play(player);
    const increaseColonyAction = game.deferredActions.pop()!.execute() as SelectColony;
    increaseColonyAction.cb(increaseColonyAction.colonies[0]);
    expect(game.colonies[0].trackPosition).to.eq(2);
    expect(game.colonies[1].trackPosition).to.eq(1);
    expect(game.colonies[2].trackPosition).to.eq(1);

    const decreaseColonyAction = game.deferredActions.pop()!.execute() as SelectColony;
    decreaseColonyAction.cb(increaseColonyAction.colonies[1]);
    expect(game.colonies[0].trackPosition).to.eq(2);
    expect(game.colonies[1].trackPosition).to.eq(0);
    expect(game.colonies[2].trackPosition).to.eq(1);
  });

  it('Should not allow increase of sole decreasable colony', function() {
    const pluto = new Pluto();
    pluto.trackPosition = 0;
    const callisto = new Callisto();
    callisto.trackPosition = 0;
    const europa = new Europa();
    europa.trackPosition = 1;

    player.game.colonies = [pluto, callisto, europa];
    player.game.gameOptions.coloniesExtension = true;
    card.play(player);
    const increaseColonyAction = game.deferredActions.pop()!.execute() as SelectColony;
    expect(increaseColonyAction.colonies.length).to.eq(2);

    increaseColonyAction.cb(increaseColonyAction.colonies[0]);
    expect(game.colonies[0].trackPosition).to.eq(1);
    expect(game.colonies[1].trackPosition).to.eq(0);
    expect(game.colonies[2].trackPosition).to.eq(1);

    const decreaseColonyAction = game.deferredActions.pop()!.execute() as SelectColony;
    expect(decreaseColonyAction.colonies.length).to.eq(1);
    decreaseColonyAction.cb(decreaseColonyAction.colonies[0]);
    expect(game.colonies[0].trackPosition).to.eq(1);
    expect(game.colonies[1].trackPosition).to.eq(0);
    expect(game.colonies[2].trackPosition).to.eq(0);
  });

  it('Can\'t play', function() {
    const enceladus = new Enceladus();
    const miranda = new Miranda();
    const luna = new Luna();

    player.game.colonies = [enceladus, miranda, luna];
    player.game.gameOptions.coloniesExtension = true;
    expect(card.canPlay(player)).is.not.true;

    player.playCard(new Pets());
    expect(card.canPlay(player)).is.true;
  });
});
