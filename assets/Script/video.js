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
        test: cc.VideoPlayer,
        chicken:cc.Sprite,
        car2:cc.Sprite
    },
    onLoad() {
        // Gắn sự kiện hoàn thành cho VideoPlayer
        this.test.node.on('completed', this.onVideoCompleted, this);
    },

    start() {
        // Bắt đầu phát video
        this.test.play();
    },

    onVideoCompleted() {
 /*       this.chicken.node.x = 100;
        this.chicken.node.y =-78;*/
        this.car2.node.active = true;
        this.test.node.active = false;
    },
});