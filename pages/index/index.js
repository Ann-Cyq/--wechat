// 快速免税
var common = require("../../common/common.js");
var logosUrl = "slider/list";
var themesUrl = "venues/venuesList";
var choosesUrl = "goods/choiceList";
Page({
    data:{
        logos:[],
        themes:[],
        chooses:[]
    },
    onLoad:function(options){
        wx.showLoading({
            title: '加载中...',
        })
        var that = this;
        //logo广告图
        wx.request({
            url: common.COMMON + logosUrl,
            success:function(res){
                that.setData({
                    logos: res.data
                });
                setTimeout(function(){
                    wx.hideLoading();
                },1500);
            }
        })
        //theme主题小图
        wx.request({
            url: common.COMMON + themesUrl,
            success: function (res) {
                that.setData({
                    themes: res.data.data
                })
            }
        })
        //chooses选择图
        wx.request({
            url: common.COMMON + choosesUrl ,
            success: function (res) {
                that.setData({
                    chooses: res.data.data.dataList
                })
            }
        })
    },
    onPullDownRefresh:function(){     
        wx.showNavigationBarLoading();
        setTimeout(function(){
            wx.hideNavigationBarLoading();
            wx.stopPullDownRefresh();
        },1500);
    },
    onShareAppMessage:function(){

    }
});