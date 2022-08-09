import { _decorator, Component, Node, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GoToscene')
export class GoToscene extends Component {

    private gotoscene(event:Event,CustomEventData:string) {
        director.loadScene(CustomEventData);
    }

    start() {
        
    }

    update(deltaTime: number) {
        
    }
}

