var curIndex=1;
var isOver=false;
var isNewsArrived=true;

var Len=parseInt($('.newsCon').width()/$('.newsCard').width());
var rowMaxHeight=[];
for(var i=0;i<Len;i++){
    rowMaxHeight[i]=0;
}


checkNews();//页面首次加载内容

$(window).on('scroll',checkNews)

$(window).on('resize',function () {
    reWaterFall();//重新布局
})

//页面缩放时，重新布局
function reWaterFall() {
    var isFirst=true;
    Len=parseInt($('.newsCon').width()/$('.newsCard').width());
    rowMaxHeight=[];
    for(var i=0;i<Len;i++){
        rowMaxHeight[i]=0;
    }
    $('.newsCard').each(function (value) {
        if(isFirst) {
            isFirst=false;
            return;
        }
        waterFall($(this));
    })
}

//瀑布流布局函数
function waterFall($node) {
    var minValue=Math.min.apply(null,rowMaxHeight);
    var minIndex=rowMaxHeight.indexOf(minValue);
    $node.css({
        top:minValue,
        left:$node.outerWidth(true) * minIndex
    })
    rowMaxHeight[minIndex]+=$node.outerHeight(true);
    $('.newsCon').height(Math.max.apply(null,rowMaxHeight));
}

//判断是否继续加载新闻
function checkNews() {
    if(isVisible($('.loadMore'))&& !isOver && isNewsArrived){
        getNews();
    }
}

//获取数据
function getNews() {
    isNewsArrived=false;
    $.ajax({
        type: 'post',
        url: 'https://route.showapi.com/109-35',
        dataType: 'json',
        data: {
            "showapi_timestamp": formatterDateTime(),
            "showapi_appid": '75855', //这里需要改成自己的appid
            "showapi_sign": '3e84e59cde67496fb2d24a03ff102a4c',  //这里需要改成自己的应用的密钥secret
            "channelId":"",
            "channelName":"",
            "title":"科技",
            "page":curIndex,
            "needContent":"0",
            "needHtml":"0",
            "needAllList":"0",
            "maxResult":"3",
            "id":""
        },
        error: function(XmlHttpRequest, textStatus, errorThrown) {
            alert("操作失败!");
        },
        success: function(result) {
            curIndex++;
            isNewsArrived=true
            console.log(result) //console变量在ie低版本下不能用
            appendHtml(result.showapi_res_body.pagebean.contentlist)
            checkNews();
        }
    });
}

//拼接当前日期
function formatterDateTime() {
    var date=new Date()
    var month=date.getMonth() + 1
    var datetime = date.getFullYear()
        + ""// "年"
        + (month >= 10 ? month : "0"+ month)
        + ""// "月"
        + (date.getDate() < 10 ? "0" + date.getDate() : date
            .getDate())
        + ""
        + (date.getHours() < 10 ? "0" + date.getHours() : date
            .getHours())
        + ""
        + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
            .getMinutes())
        + ""
        + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
            .getSeconds());
    return datetime;
}

//加载节点
function appendHtml(newsList) {
    if(newsList.length === 0){
        isOver = true;
        $('#content').append('<p>没有更多数据了~</p>')
        return;
    }

    $.each(newsList,function (idx,news) {
        var $node=getNode(news);
        $node.find('img').on("load",function () {
            $('.newsCon').append($node);
            waterFall($node);
        })
    })

}

//组装DOM
function getNode(item) {
    var html='';
    var imgObj=item.imageurls[0];
    html+='<div class="newsCard">';
    html+='<a href="'+item.link+'">';
    if(item.imageurls.length>0){
        html+='<img src="'+item.imageurls[0].url+'">';
    }else{
        html+='<img src="bf.jpg">';
    }
    html+='<h3>'+item.title+'</h3>';
    html+='<p>'+item.desc+'</p></a></div>';
    return $(html);
}

//判断元素是否出现在页面上
function isVisible($img) {
    var windowHeight=$(window).height();//窗口的高度
    var scrollTop=$(window).scrollTop();//滚动的距离
    var offset=$img.offset().top;//元素到顶部的距离
    var imgHeight=$img.outerHeight();//元素高度
    if(offset<windowHeight+scrollTop && scrollTop<offset+imgHeight){
        return true;
    }
    return false;
}