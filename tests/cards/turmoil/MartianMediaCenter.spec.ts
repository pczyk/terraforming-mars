import {expect} from 'chai';
import {MartianMediaCenter} from '../../../src/cards/turmoil/MartianMediaCenter';
import {Game} from '../../../src/Game';
import {Resources} from '../../../src/common/Resources';
import {PartyName} from '../../../src/common/turmoil/PartyName';
import {setCustomGameOptions} from '../../TestingUtils';
import {TestPlayers} from '../../TestPlayers';

describe('MartianMediaCenter', function() {
  it('Should play', function() {
    const card = new MartianMediaCenter();
    const player = TestPlayers.BLUE.newPlayer();

    const gameOptions = setCustomGameOptions();
    const game = Game.newInstance('foobar', [player], player, gameOptions);
    expect(player.canPlayIgnoringCost(card)).is.not.true;

    const mars = game.turmoil!.getPartyByName(PartyName.MARS)!;
    mars.delegates.push(player.id, player.id);
    expect(player.canPlayIgnoringCost(card)).is.true;

    card.play(player);
    expect(player.getProduction(Resources.MEGACREDITS)).to.eq(2);
  });
});
