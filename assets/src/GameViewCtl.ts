import { _decorator, Component, Node, Prefab, instantiate, game, Label } from 'cc';
import { EnumEventDefine } from './EventDefine';
const { ccclass, property } = _decorator;

@ccclass('NewComponent')
export class GameViewCtl extends Component {

    @property(Prefab)
    resultViewPrefab:Prefab=null!
    @property(Label)
    lb_score:Label=null!
    @property(Node)
    gameview:Node=null!
    @property(Node)
    resultView:Node=null!

    private _score:number=0;
    set score(score:number){
        this.lb_score.string=`${score}`;
        this._score=score;
    }
    get score(){
        return this._score;
    }

    start() {
        this.resultView=instantiate(this.resultViewPrefab);
        this.resultView.active=false;
        this.gameview.addChild(this.resultView);
        game.on(EnumEventDefine.openResultView,this.openResultView,this);
    }

    onDestory(){
        game.targetOff(this);
    }

    openResultView(){
        this.resultView.active=true;
    }

    playAgain(){
        this.resultView.active=false;
    }

    update(deltaTime: number) {
        
    }
}

