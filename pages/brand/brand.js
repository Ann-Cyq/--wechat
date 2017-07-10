// 品牌页面
var common = require("../../common/common.js");
var brandUrl = "venues/getBrandAndType"
Page({
    data:{
        brands:[]
    },
    onLoad:function(options){
        var that = this;
        var id = options.id;
        wx.request({
            url: common.COMMON + brandUrl+"?id="+id ,
            success:function(res){
                console.log(res.data.data);
                that.setData({
                    brands:res.data.data.brand
                });

            }
        })
    }
});