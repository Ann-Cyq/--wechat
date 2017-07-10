// 详情页
var common = require("../../common/common.js");
var detailUrl = "goods/inqGoodsByTypeBrand";
Page({
    data: {
        list: []
    },
    onLoad: function (options) {
        console.log(options);
        var that = this;
        var brand = options.brand;
        var typeid = options.typeid; 
        wx.request({
            url: common.COMMON + detailUrl + "?brand=" + brand + "&typeid=" + typeid,
            success: function (res) {
                that.setData({
                    list: res.data.data
                });
            }
        })
    }
});