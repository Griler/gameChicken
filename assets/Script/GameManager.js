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
        video:cc.VideoPlayer,
        car:cc.Sprite,
        car2:cc.Sprite,
        chicken:cc.Sprite,
        die:cc.Sprite,
        mRed: cc.Sprite,
        mYellow: cc.Sprite,
        mBlue: cc.Sprite,
        _checkTime: 0,
        flag: true,
        _coolDown: 3.1,
        _diffVector:cc.v2,
        skillCount:1,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
    },
    update(dt) {
        this._checkTime += dt;
        if (0 < this._checkTime && this._checkTime < 3) {
            this.mRed.node.color = new cc.Color(255, 0, 0, 255)
            this.mRed.node.active = true;
        } else if (3 < this._checkTime && this._checkTime < 6) {
            this.mYellow.node.color = new cc.Color(255, 255, 0, 255);
            this.mYellow.node.active = true;
        } else if (6 < this._checkTime && this._checkTime < 9) {
            this.chicken.node.active = true;
            this.car.node.active = true;
            this.mBlue.node.active = true;
            this.mBlue.node.color = new cc.Color(0, 255, 0, 255);}
        this.playClip(this.takeDistance(this.chicken.node.position,this.car.node.position))
        if(this.takeDistance(this.chicken.node.position,this.car2.node.position)<70
            && this.skillCount === 0){
            this.chicken.node.active = false;
            this.die.node.active = true;
        }

    },
    takeDistance:function(vecA, vecB) {
        this._diffVector = vecA.sub(vecB);
        return this._diffVector.mag();
    },
    playClip:function(distance){
        if(distance<80 && this.skillCount === 1){
            //this.video.node.active = true;
            this.chicken.node.x = 100;
            this.chicken.node.y =-78;
            this.skillCount = 0;
            this.car2.node.active = true;
        }
    },
});
