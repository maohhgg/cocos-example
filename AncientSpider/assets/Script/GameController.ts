import GameDatabase from "./Data/GameDatabase";
import Poker from "./Model/Poker";
import GameView from "./Prefab/GameView";

const {ccclass, property} = cc._decorator;

@ccclass('GameController')
export default class GameController {

    @property({type: [Poker]}) 
    private poker: Poker[] = [];
    
    @property(GameView) 
    private gameView: GameView = null;

    @property(GameDatabase)
    private database: GameDatabase = null;


    public init(view: GameView) {
        this.database = GameDatabase.Create()
        this.gameView = view;
    }

    public start() {
        this.gameView.displayPoker(this.database.getPokers())
    }

}
