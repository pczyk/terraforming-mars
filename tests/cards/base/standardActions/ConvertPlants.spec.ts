import {expect} from 'chai';
import {ConvertPlants} from '../../../../src/cards/base/standardActions/ConvertPlants';
import {Phase} from '../../../../src/common/Phase';
import {Player} from '../../../../src/Player';
import {setCustomGameOptions} from '../../../TestingUtils';
import {TestPlayers} from '../../../TestPlayers';
import {Game} from '../../../../src/Game';
import {PoliticalAgendas} from '../../../../src/turmoil/PoliticalAgendas';
import {Reds} from '../../../../src/turmoil/parties/Reds';
import {MAX_OXYGEN_LEVEL} from '../../../../src/common/constants';

describe('ConvertPlants', function() {
  let card: ConvertPlants; let player: Player;

  beforeEach(function() {
    card = new ConvertPlants();
    player = TestPlayers.BLUE.newPlayer();
    const player2 = TestPlayers.RED.newPlayer();
    Game.newInstance('foobar', [player, player2], player, setCustomGameOptions());
  });

  it('Can not act without plants', function() {
    expect(card.canAct(player)).eq(false);
    player.plants = 7;
    expect(card.canAct(player)).eq(false);
  });

  it('Can not act with reds', function() {
    player.plants = 8;
    player.game.phase = Phase.ACTION;
    player.game.turmoil!.rulingParty = new Reds();
    PoliticalAgendas.setNextAgenda(player.game.turmoil!, player.game);
    expect(card.canAct(player)).eq(false);
    player.megaCredits = 2;
    expect(card.canAct(player)).eq(false);
    player.megaCredits = 3;
    expect(card.canAct(player)).eq(true);
  });

  it('Should play', function() {
    player.plants = 8;

    expect(card.canAct(player)).eq(true);
    const action = card.action(player);
    expect(action).not.eq(undefined);
    action.cb(action.availableSpaces[0]);

    expect(player.game.getOxygenLevel()).eq(1);
  });

  it('Can act when maximized', function() {
    player.plants = 8;
    expect(card.canAct(player)).eq(true);
    (player.game as any).oxygenLevel = MAX_OXYGEN_LEVEL;
    expect(card.canAct(player)).eq(true);
  });
});
