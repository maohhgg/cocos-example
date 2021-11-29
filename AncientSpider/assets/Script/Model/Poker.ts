const POINT_MAP ={
    "1": "A",
    "2": "2",
    "3": "3",
    "4": "4",
    "5": "5",
    "6": "6",
    "7": "7",
    "8": "8",
    "9": "9",
    "10": "10",
    "11": "J",
    "12": "Q",
    "13": "K",
}

export default class Poker {
    public point: number;
    public suit: number;
    public pointName: string;
    public isRed: boolean;

    constructor(point: number, suit: number) {
        console.log(`${point}`)
        this.point = point;
        this.suit = suit;
        this.pointName = POINT_MAP[point.toString()]
        this.isRed = (suit % 2 == 0);
    }
}