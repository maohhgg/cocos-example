const {ccclass, property} = cc._decorator;

@ccclass
export default class Menu extends cc.Component {

    startGame() {
        cc.director.loadScene('GameScene')
    }
}
