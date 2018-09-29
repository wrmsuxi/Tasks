var cityData = ['北京|beijing|bj','上海|shanghai|sh', '重庆|chongqing|cq', '天津|tianjin|tj', '深圳|shenzhen|sz', '广州|guangzhou|gz', '杭州|hangzhou|hz',
    '南京|nanjing|nj', '苏州|shuzhou|sz', '扬州|yangzhou|yz','徐州|xuzhou|xz','无锡|wuxi|wx', '盐城|yancheng|yc','淮安|huaian|ha',
    '常州|changzhou|cz','镇江|zhenjiang|zj','泰州|taizhou|tz',
    '成都|chengdu|cd', '南昌|nanchang|nc', '三亚|sanya|sy','青岛|qingdao|qd',
    '厦门|xiamen|xm', '西安|xian|xa','长沙|changsha|cs','合肥|hefei|hf','西藏|xizang|xz', '内蒙古|neimenggu|nmg', '安庆|anqing|aq', '阿泰勒|ataile|atl', '安康|ankang|ak',
    '阿克苏|akesu|aks', '包头|baotou|bt', '北海|beihai|bh', '百色|baise|bs','保山|baoshan|bs', '长治|changzhi|cz', '长春|changchun|cc',  '昌都|changdu|cd',
    '朝阳|chaoyang|cy', '常德|changde|cd', '长白山|changbaishan|cbs', '赤峰|chifeng|cf',
    '大同|datong|dt', '大连|dalian|dl', '达县|daxian|dx', '东营|dongying|dy', '大庆|daqing|dq', '丹东|dandong|dd',
    '大理|dali|dl', '敦煌|dunhuang|dh', '鄂尔多斯|eerduosi|eeds', '恩施|enshi|es', '福州|fuzhou|fz', '阜阳|fuyang|fy', '贵阳|guiyang|gy',
    '桂林|guilin|gl', '广元|guangyuan|gy', '格尔木|geermu|gem', '呼和浩特|huhehaote|hhht', '哈密|hami|hm',
    '黑河|heihe|hh', '海拉尔|hailaer|hle', '哈尔滨|haerbin|heb', '海口|haikou|hk', '黄山|huangshan|hs', '邯郸|handan|hd',
    '汉中|hanzhong|hz', '和田|hetian|ht', '晋江|jinjiang|jj', '锦州|jinzhou|jz', '景德镇|jingdezhen|jdz',
    '嘉峪关|jiayuguan|jyg', '井冈山|jinggangshan|jgs', '济宁|jining|jn', '九江|jiujiang|jj', '佳木斯|jiamusi|jms', '济南|jinan|jn',
    '喀什|kashi|ks', '昆明|kunming|km', '康定|kangding|kd', '克拉玛依|kelamayi|klmy', '库尔勒|kuerle|kel', '库车|kuche|kc', '兰州|lanzhou|lz',
    '洛阳|luoyang|ly', '丽江|lijiang|lj', '林芝|linzhi|lz', '柳州|liuzhou|lz', '泸州|luzhou|lz', '连云港|lianyungang|lyg', '黎平|liping|lp',
    '连成|liancheng|lc', '拉萨|lasa|ls', '临沧|lincang|lc', '临沂|linyi|ly', '芒市|mangshi|ms', '牡丹江|mudanjiang|mdj', '满洲里|manzhouli|mzl', '绵阳|mianyang|my',
    '梅县|meixian|mx', '漠河|mohe|mh', '南充|nanchong|nc', '南宁|nanning|nn', '南阳|nanyang|ny', '南通|nantong|nt', '那拉提|nalati|nlt',
    '宁波|ningbo|nb', '攀枝花|panzhihua|pzh', '衢州|quzhou|qz', '秦皇岛|qinhuangdao|qhd', '庆阳|qingyang|qy', '齐齐哈尔|qiqihaer|qqhe',
    '石家庄|shijiazhuang|sjz',  '沈阳|shenyang|sy', '思茅|simao|sm', '铜仁|tongren|tr', '塔城|tacheng|tc', '腾冲|tengchong|tc', '台州|taizhou|tz',
    '通辽|tongliao|tl', '太原|taiyuan|ty', '威海|weihai|wh', '梧州|wuzhou|wz', '文山|wenshan|ws', '潍坊|weifang|wf', '武夷山|wuyishan|wys', '乌兰浩特|wulanhaote|wlht',
    '温州|wenzhou|wz', '乌鲁木齐|wulumuqi|wlmq', '万州|wanzhou|wz', '乌海|wuhai|wh', '兴义|xingyi|xy', '西昌|xichang|xc',  '襄樊|xiangfan|xf',
    '西宁|xining|xn', '锡林浩特|xilinhaote|xlht', '西双版纳|xishuangbanna|xsbn', '义乌|yiwu|yw', '永州|yongzhou|yz', '榆林|yulin|yl', '延安|yanan|ya', '运城|yuncheng|yc',
    '烟台|yantai|yt', '银川|yinchuan|yc', '宜昌|yichang|yc', '宜宾|yibin|yb',  '延吉|yanji|yj', '玉树|yushu|ys', '伊宁|yining|yn', '珠海|zhuhai|zh', '昭通|zhaotong|zt',
    '张家界|zhangjiajie|zjj', '舟山|zhoushan|zs', '郑州|zhengzhou|zz', '中卫|zhongwei|zw', '芷江|zhijiang|zj', '湛江|zhanjiang|zj'];




var $input=$('#cityInput');
var $chooseBox=$('.chooseBox');
var $tempPanelLis=$('.tempPanel>li');
var $loadMoreNews=$('.loadMoreNews');
var $loadMoreImgs=$('.loadMoreImgs');

var baseHeight=120;
var rowMaxWidth=0;
var $imgCon=$('.imgCon');
var imgConWidth=$imgCon.width()-10;
var rowList=[];

var isImgOver=false;
var isNewsOver=false;

var curImgIndex=1;
var isImgArrived=false;

var curIndex=1;
var isNewsArrived=false;

getWeather('北京');//初始化天气数据

getNews();//页面首次加载新闻

$('.newsContainer').on('scroll',function () {
    console.log("scroll");
    checkNews();
});

getImgs();//页面首次加载图片

$imgCon.on('scroll',function () {
    checkBottom();
})


$input.on('input',function () {
    var reg = new RegExp("^" + $input.val() + "|\\|" + $input.val(), 'gi');
    if($input.val()!=="") {
        var lis = [];
        for (var i in cityData) {
            if (reg.test(cityData[i])) {
                var cityName = cityData[i].split("|");
                var str = "<li>" + cityName[0] + "</li>";
                lis.push(str);
            }
        }
        console.log(lis);
        if (lis.length > 0) {
            $chooseBox.html(lis.join(""));
        }else{
            $chooseBox.html('');
        }
    }else{
        $chooseBox.html('');
    }
})

$chooseBox.on('click',function (e) {
    var target=e.target;
    if(target.tagName.toLowerCase()==='li'){
        $input.val('');
        $chooseBox.html('');

        getWeather(target.innerText);

        isImgOver=false;
        curImgIndex=1;
        $('.imgCon>figure').remove();
        getImgs();
    }
})

//获取天气数据
function getWeather(cityName) {
    $('.localCityName').text(cityName);
    $.ajax({
        method:'get',
        url:'http://wthrcdn.etouch.cn/weather_mini?city='+cityName
    })
        .done(function (result) {
            weather(result);
        })
}

//设置天气
function weather(result) {
    var result=JSON.parse(result);
    var weatherFore=result.data.forecast;

    var temp=weatherFore[0].high.substr(3,2);
    var fengli=weatherFore[0].fengli.substring(9,weatherFore[0].fengli.length-3);
    var liDetail=$tempPanelLis.eq(0).children();
    var leftPar=liDetail.eq(0).children();
    var rightPar=liDetail.eq(1).children();
    leftPar.eq(0).text(temp);
    leftPar.eq(1).html(getDate(weatherFore[0].date));
    rightPar.eq(0).html('<span class="iconfont bigIcon">'+getWeaIcon(weatherFore[0].type)+'</span>');
    rightPar.eq(1).text(weatherFore[0].fengxiang+' / '+fengli);

    for(var i=1;i<$tempPanelLis.length;i++){
        var dayZh=weatherFore[i].date.substr(weatherFore[i].date.length-1,1);
        var liInner=$tempPanelLis.eq(i).children();
        var tempH=weatherFore[i].high.substr(3,2);
        var tempL=weatherFore[i].low.substr(3,2);
        liInner.eq(0).text(getDayEng(dayZh));
        liInner.eq(1).html('<p class="iconfont weaIcon">'+getWeaIcon(weatherFore[i].type)+'</p>');
        liInner.eq(2).html('<span class="temp">'+tempL+'</span>~<span class="temp">'+tempH+'</span>');
    }
}


$('.navBar>li').on('click',function () {
    var $li=$(this);
    var index=$li.index();
    $li.addClass('active');
    if($li.siblings().hasClass('active')){
        $li.siblings().removeClass('active');
    }
    $li.parents('.detail').find('.content').hide();
    $li.parents('.detail').find('.content').eq(index).show();

})

//测试图片是否加载完成
function checkBottom() {
    if(isVisible($loadMoreImgs,$imgCon,192) && !isImgOver && isImgArrived){
        getImgs();
    }
}


//返回星期+日期
function getDate(dateStr){
    var result='';
    switch (dateStr.substr(dateStr.length-1,1)){
        case '一':result='MONDAY ';
            break;
        case '二':result='TUESDAY ';
            break;
        case '三':result='WEDNESDAY ';
            break;
        case '四':result='THURSDAY ';
            break;
        case '五':result='FRIDAY ';
            break;
        case '六':result='SATURDAY ';
            break;
        case '天':result='SUNDAY ';
            break;
    }
    return result+parseInt(dateStr)+'<sup>th</sup>';
}

//返回星期的缩写
function getDayEng(zh) {
    var result='';
    switch(zh){
        case '一':result='MON';
            break;
        case '二':result='TUES';
            break;
        case '三':result='WED';
            break;
        case '四':result='THUR';
            break;
        case '五':result='FRI';
            break;
        case '六':result='SAT';
            break;
        case '天':result='SUN';
            break;
    }
    return result;
}

//返回天气对应的图标
function getWeaIcon(weaType) {
    var result='';
    switch (weaType){
        case '晴' : result='&#xe61b;';
            break;
        case '多云':result='&#xe61c;';
            break;
        case '小雨':result='&#xe623;';
            break;
        case '中雨':result='&#xe627;';
            break;
        case '大雨':result='&#xe617;';
            break;
        case '暴雨':result='&#xe616;';
            break;
        case '小到中雨':result='&#xe623;';
            break;
        case '阴':result='&#xe626;';
            break;
        case '小雪':result='&#xe624;';
            break;
        case '中雪':result='&#xe628;';
            break;
        case '大雪':result='&#xe61d;';
            break;
        case '阵雨':result='&#xe618;';
            break;
        case '雷阵雨':result='&#xe618;';
            break;
        case '暴雪':result='&#xe61a;';
            break;
        case '冰雹':result='&#xe619;';
            break;
        case '雨夹雪':result='&#xe625;';
            break;
    }
    return result;
}


//判断是否继续加载新闻
function checkNews() {
    if(isVisible($('.loadMoreNews'),$('.newsContainer'),192)&& isNewsArrived){
        getNews();
    }
}

//获取新闻数据
function getNews() {
    isNewsArrived=false;
    $.ajax({
        type: 'get',
        url: 'http://route.showapi.com/109-35',
        dataType: 'json',
        data: {
            "showapi_timestamp": formatterDateTime(),
            "showapi_appid": '75855', //这里需要改成自己的appid
            "showapi_sign": '3e84e59cde67496fb2d24a03ff102a4c', //这里需要改成自己的应用的密钥secret
            "channelId":"",
            "channelName":"",
            "title":"天气",
            "page":curIndex,
            "needContent":"0",
            "needHtml":"0",
            "needAllList":"0",
            "maxResult":"10",
            "id":""
        },

        error: function(XmlHttpRequest, textStatus, errorThrown) {
            alert("操作失败!");
        },
        success: function(result) {
            curIndex++;
            isNewsArrived=true
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
        isNewsOver = true;
        if($('.newsContainer>.notice').length===0){
            $('<p class="notice">没有更多新闻了~</p>').insertBefore($('.loadMoreNews'))
        }
        return;
    }

    var html='';
    $.each(newsList,function () {
        var imgObj=this.imageurls[0];
        html+='<div class="newsCard">';
        html+='<a href="'+this.link+'" class="clearfix">';
        if(this.imageurls.length>0){
            html+='<img src="'+this.imageurls[0].url+'">';
        }else{
            html+='<img src="bf.jpg">';
        }
        html+='<div class="summary">';
        html+='<h3>'+this.title+'</h3>';
        html+='<p>'+this.desc+'</p></div></a></div>';
    })
    $(html).insertBefore($loadMoreNews);
}



//判断元素是否出现在页面上
function isVisible($img,$parent,height) {
    var offset=$img.position().top;
    var parentOffset=$parent.position().top;
    if(offset-parentOffset<height){
       return true;
    }
    return false;
}


//获取图片数据
function getImgs() {
    isNewsArrived=false;
    $.ajax({
        type:"get",
        url:'https://pixabay.com/api',
        dataType:'json',
        data:{
            "key":"10205368-9d425e0cd87e8fed05003d4aa",
            "q":$('.localCityName').text(),
            "image_type":"photo",
            "page":curImgIndex,
            "per_page":5
        }
    }).done(function (result) {
        console.log(result);
        curImgIndex++;
        render(result.hits);
        isImgArrived=true;
        checkBottom();

    })
}

//渲染图片结构
function render(imgLists) {
    if(imgLists.length<1){
        isImgOver=true;
        if($('.notice').length===0){
            $('<p class="notice">没有更多图片了~~</p>').insertBefore($loadMoreImgs);
        }
    }else {
        $.each(imgLists,function (value) {
            $('.imgCon>.notice').remove();
            this.radio=this.webformatWidth/this.webformatHeight;
            this.imgWidthAfter=this.radio*baseHeight;

            if(rowMaxWidth+this.imgWidthAfter>imgConWidth){
                var rowHeight=baseHeight*(imgConWidth/rowMaxWidth);
                layout(rowList,rowHeight);
                rowList=[this];
                rowMaxWidth=this.imgWidthAfter;
            }else {
                rowList.push(this);
                rowMaxWidth+=this.imgWidthAfter;
            }
        })
    }
}

//加载图片控件
function layout(rowList,baseH) {
    $.each(rowList,function () {
        var $fig=$('<figure></figure>');
        var $img=$('<img src="'+this.webformatURL+'"></img>')

        $fig.width(this.radio*baseH);
        $fig.height(baseH);
        $fig.append($img);
        console.log($fig);
        $fig.insertBefore($loadMoreImgs);
    })
}