// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        speed:50,
        speedDuration:0.2,
        _coldDown:3
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
    },

    start () {
    },

    update (dt) {
        this._coldDown -=dt;
        if(this._coldDown<0)
            this.setMoveAction(dt);
    },
    setMoveAction: function (dt) {
        this.node.x -= this.speed*dt;
    },
});
