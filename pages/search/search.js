var common = require("../../common/common.js");
var searchUrl = "goodstype/typebrandList";
Page({
    data:{
        navList:[],
        showList:[],
        navId:0
    },
    onLoad:function(options){
        var that = this;
        wx.request({
            url: common.COMMON + searchUrl,
            success:function(res){
                that.setData({
                    navList:res.data,
                    showList: res.data
                });
            }
        })
    },
    //点击本文改变背景颜色
    click:function(e){
        var id = e.target.dataset.id;
        this.setData({
            navId:id
        });
    }
});