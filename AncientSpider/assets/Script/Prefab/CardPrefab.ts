import Poker from "../Model/Poker";

const { ccclass, property } = cc._decorator;

@ccclass
export default class CardPrefab extends cc.Component {

    @property(cc.Label) private point: cc.Label = null;

    @property(cc.Sprite) private suit: cc.Sprite = null;

    @property(cc.Sprite) private mainPic: cc.Sprite = null;

    @property private _redTextColor = cc.color(184, 24, 55);
    @property private _blackTextColor = cc.Color.BLACK;

    @property({ type: [cc.SpriteFrame] })
    private cardSuitBig: cc.SpriteFrame[] = []

    @property({ type: [cc.SpriteFrame] })
    private cardSuitSmall: cc.SpriteFrame[] = []

    @property({ type: [cc.SpriteFrame] })
    private cardFaces: cc.SpriteFrame[] = []


    public init(poker: Poker) {
 
        if (poker.point > 10) {
            this.mainPic.spriteFrame = this.cardFaces[poker.point - 11];
        } else {
            this.mainPic.spriteFrame = this.cardSuitBig[poker.suit];
        }

        this.suit.spriteFrame = this.cardSuitSmall[poker.suit];
        this.point.string = poker.pointName;
    
        this.point.node.color = poker.isRed ? this._redTextColor : this._blackTextColor;
    }
}
