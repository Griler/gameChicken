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
        mLabel: cc.Label,
        _coolDown: 0,
        _count: 0.1,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    onEnable() {
        this._coolDown = 4
        console.log(this.node.name === 'hinh xanh')
    },

    update(dt) {
        this._coolDown -= dt;
        this._count -= dt;
        if (this.checkNameNodeGreen(this.node.name)) {
            this.mLabel.node.active = true;
            if (this._coolDown < 1) this.mLabel.string = '0';
            else this.mLabel.string = `${parseInt(this._coolDown)}`;
        }
        else if (this._coolDown < 3) {
            if (this._count < 0) {
                console.log(this._count)
                this.node.opacity = 0
                this._count = 0.4;
            } else {
                this.node.opacity = 255;
            }
        }
        if (this._coolDown < 1) {
            if (this.node.name === "hinh xanh") {
            } else {
                this.node.active = false;
            }
        }

    },
    checkNameNodeGreen: function (name) {
        if (name === "hinh xanh") {
            return true;
        }
        return false;
    }
});
