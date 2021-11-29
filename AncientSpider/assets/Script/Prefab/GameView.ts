import Poker from "../Model/Poker";
import CardPrefab from "./CardPrefab";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameView extends cc.Component {
    @property(cc.Prefab)
    private cardPrefab:cc.Prefab = null;

    @property(cc.Node)
    private sendArea: cc.Node = null;

    public displayPoker(pokers: Poker[]) {
        pokers.forEach((poker, i) => {
            let uiPoker = this.createUIPoker(poker);
            uiPoker.node.x = (0.5 * i) - 400;
            uiPoker.node.y = (0.1 * i) - 100;
            this.sendArea.addChild(uiPoker.node)
            console.log(this.sendArea.width);
        })
    }

    private createUIPoker(poker: Poker):CardPrefab {
        let uiPoker:CardPrefab = cc.instantiate(this.cardPrefab).getComponent(CardPrefab);
        uiPoker.init(poker);
        return uiPoker;
    }
    
}
