import { _decorator, Component, Node, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('resultView')
export class resultView extends Component {
    start() {

    }

    private playAgain(){
        this.node.active=false;
        //重新开始游戏
        director.loadScene("game");
    }

    update(deltaTime: number) {
        
    }
}

