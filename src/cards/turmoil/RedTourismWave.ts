import {IProjectCard} from '../IProjectCard';
import {Tags} from '../../common/cards/Tags';
import {CardName} from '../../common/cards/CardName';
import {CardType} from '../../common/cards/CardType';
import {Player} from '../../Player';
import {PartyName} from '../../common/turmoil/PartyName';
import {Resources} from '../../common/Resources';
import {CardRequirements} from '../CardRequirements';
import {CardRenderer} from '../render/CardRenderer';
import {Size} from '../../common/cards/render/Size';
import {Card} from '../Card';

export class RedTourismWave extends Card implements IProjectCard {
  constructor() {
    super({
      cost: 3,
      tags: [Tags.EARTH],
      name: CardName.RED_TOURISM_WAVE,
      cardType: CardType.EVENT,

      requirements: CardRequirements.builder((b) => b.party(PartyName.REDS)),
      metadata: {
        cardNumber: 'T12',
        renderData: CardRenderer.builder((b) => {
          b.megacredits(1).slash().emptyTile('normal', {size: Size.SMALL}).asterix();
        }),
        description: 'Requires that Reds are ruling or that you have 2 delegates there. Gain 1 M€ from each EMPTY AREA ADJACENT TO YOUR TILES',
      },
    });
  }

  public play(player: Player) {
    const amount = player.game.board.getEmptySpaces().filter((space) =>
      player.game.board.getAdjacentSpaces(space).some((adj) =>
        adj.tile !== undefined && adj.player === player,
      ),
    ).length;
    player.addResource(Resources.MEGACREDITS, amount);
    return undefined;
  }
}
