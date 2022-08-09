import { _decorator, Component, Node, tween, v3, Tween, easing } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('RoleItem')
export class RoleItem extends Component {

    //点击特效
    playClickEffect(){
        tween(this.node)
            .to(1,{scale:v3(1,0.01,1)}) 
            .start()
    }

    //松手特效
    playClickOutEffect(){
        Tween.stopAllByTarget(this.node)
        tween(this.node)
            .to(0.3,{scale:v3(1,1.5,1)},{easing:"backInOut"})
            .start()
    }

    //复原
    reEffect(){
        Tween.stopAllByTarget(this.node)
        tween(this.node)
            .to(1,{scale:v3(1,1.0,1)},{easing:"backInOut"})
            .start()
    }

    start() {

    }

    update(deltaTime: number) {
        
    }
}

