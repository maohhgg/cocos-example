import Poker from "../Model/Poker";

const {ccclass, property} = cc._decorator;

@ccclass('GameDatabase')
export default class GameDatabase {
    private static instant:GameDatabase = null;

    private pokers: Poker[] = [];
    
    public static Create() {
        if(!GameDatabase.instant) {
            GameDatabase.instant = new GameDatabase();
        }
        return GameDatabase.instant;
    }

    constructor() {
        for (let i = 1; i <= 13; i++) {
            for (let v = 0; v < 4; v++) {
                this.pokers.push(new Poker(i, v))
            }
        }
    }

    public getPokers() {
        return this.pokers;
    }

}
