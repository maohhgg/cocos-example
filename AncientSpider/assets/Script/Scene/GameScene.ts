import GameController from "../GameController";
import GameView from "../Prefab/GameView";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameScene extends cc.Component {
    @property({type: cc.Prefab}) 
    public gameViewPrefab: cc.Prefab = null;

    @property({type: GameController})
    private _gameController: GameController = null;
    @property(GameView)
    private _gameView: GameView = null;

    start() {
        this._gameView = cc.instantiate(this.gameViewPrefab).getComponent(GameView);
        this.node.addChild(this._gameView.node);

        this._gameController = new GameController();
        this._gameController.init(this._gameView);
        this._gameController.start();
    }
}
