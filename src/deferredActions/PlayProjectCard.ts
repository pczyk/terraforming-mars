import {Player} from '../Player';
import {DeferredAction, Priority} from './DeferredAction';

export class PlayProjectCard extends DeferredAction {
  constructor(player: Player) {
    super(player, Priority.DEFAULT);
  }

  public execute() {
    if (this.player.getPlayableCards().length === 0) {
      return undefined;
    }
    return this.player.playProjectCard();
  }
}
