var cityData = ['北京|beijing|bj','上海|shanghai|sh', '重庆|chongqing|cq',  '深圳|shenzhen|sz', '广州|guangzhou|gz', '杭州|hangzhou|hz',
    '南京|nanjing|nj', '苏州|shuzhou|sz', '天津|tianjin|tj', '成都|chengdu|cd', '南昌|nanchang|nc', '三亚|sanya|sy','青岛|qingdao|qd',
    '厦门|xiamen|xm', '西安|xian|xa','长沙|changsha|cs','合肥|hefei|hf','西藏|xizang|xz', '内蒙古|neimenggu|nmg', '安庆|anqing|aq', '阿泰勒|ataile|atl', '安康|ankang|ak',
    '阿克苏|akesu|aks', '包头|baotou|bt', '北海|beihai|bh', '百色|baise|bs','保山|baoshan|bs', '长治|changzhi|cz', '长春|changchun|cc', '常州|changzhou|cz', '昌都|changdu|cd',
    '朝阳|chaoyang|cy', '常德|changde|cd', '长白山|changbaishan|cbs', '赤峰|chifeng|cf', '大同|datong|dt', '大连|dalian|dl', '达县|daxian|dx', '东营|dongying|dy', '大庆|daqing|dq', '丹东|dandong|dd',
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
    '通辽|tongliao|tl', '太原|taiyuan|ty', '威海|weihai|wh', '梧州|wuzhou|wz', '文山|wenshan|ws', '无锡|wuxi|wx', '潍坊|weifang|wf', '武夷山|wuyishan|wys', '乌兰浩特|wulanhaote|wlht',
    '温州|wenzhou|wz', '乌鲁木齐|wulumuqi|wlmq', '万州|wanzhou|wz', '乌海|wuhai|wh', '兴义|xingyi|xy', '西昌|xichang|xc',  '襄樊|xiangfan|xf',
    '西宁|xining|xn', '锡林浩特|xilinhaote|xlht', '西双版纳|xishuangbanna|xsbn', '徐州|xuzhou|xz', '义乌|yiwu|yw', '永州|yongzhou|yz', '榆林|yulin|yl', '延安|yanan|ya', '运城|yuncheng|yc',
    '烟台|yantai|yt', '银川|yinchuan|yc', '宜昌|yichang|yc', '宜宾|yibin|yb', '盐城|yancheng|yc', '延吉|yanji|yj', '玉树|yushu|ys', '伊宁|yining|yn', '珠海|zhuhai|zh', '昭通|zhaotong|zt',
    '张家界|zhangjiajie|zjj', '舟山|zhoushan|zs', '郑州|zhengzhou|zz', '中卫|zhongwei|zw', '芷江|zhijiang|zj', '湛江|zhanjiang|zj'];




var input=document.querySelector('#cityInput');
var chooseBox=document.querySelector('.chooseBox');
var localName=document.querySelector('.localCityName');
var navBar=document.querySelector('.navBar');
var navBarLis=document.querySelectorAll('.navBar>li');
var contents=document.querySelector('.contents');

var newsCon=document.querySelector('.newsContainer');
var loadMoreNews=document.querySelector('.loadMoreNews');

var curIndex=1;

input.addEventListener('input',function () {
    var reg = new RegExp("^" + input.value + "|\\|" + input.value, 'gi');
    if(input.value!=="") {
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
            chooseBox.innerHTML = lis.join("")
        }else{
            chooseBox.innerHTML='';
        }
    }else{
        chooseBox.innerHTML='';
    }
    },false)

chooseBox.addEventListener('click',function (e) {
    var target=e.target;
    if(target.tagName.toLowerCase()==='li'){
        console.log(target.innerText);
        localName.innerText=target.innerText;
        input.value='';
        chooseBox.innerHTML='';

        var xhr=new XMLHttpRequest();
        var tempPanelLis=document.querySelectorAll('.tempPanel>li')
        xhr.onreadystatechange=function () {
            if(xhr.readyState===4 && (xhr.status===200||xhr.status===304)){
                var result=JSON.parse(xhr.responseText);
                console.log(result);
                var weatherFore=result.data.forecast;

                var temp=weatherFore[0].high.substr(3,2);
                var fengli=weatherFore[0].fengli.substring(9,weatherFore[0].fengli.length-3);
                var liDetail=tempPanelLis[0].children;
                var leftPar=liDetail[0].children;
                var rightPar=liDetail[1].children;
                leftPar[0].innerText=temp;
                leftPar[1].innerHTML=getDate(weatherFore[0].date);
                rightPar[0].innerHTML='<span class="iconfont bigIcon">'+getWeaIcon(weatherFore[0].type)+'</span>';
                rightPar[1].innerText=weatherFore[0].fengxiang+' / '+fengli;

                for(var i=1;i<tempPanelLis.length;i++){
                    var dayZh=weatherFore[i].date.substr(weatherFore[i].date.length-1,1);
                    var liInner=tempPanelLis[i].children;
                    var tempH=weatherFore[i].high.substr(3,2);
                    var tempL=weatherFore[i].low.substr(3,2);
                    liInner[0].innerText=getDayEng(dayZh);
                    liInner[1].innerHTML='<p class="iconfont weaIcon">'+getWeaIcon(weatherFore[i].type)+'</p>';
                    liInner[2].innerHTML='<span class="temp">'+tempL+'</span>~<span class="temp">'+tempH+'</span>';
                }
            }


        }
        xhr.open('get','http://wthrcdn.etouch.cn/weather_mini?city='+target.innerText);
        xhr.send();
    }
})

navBar.addEventListener('click',function (e) {
    var target=e.target;
    if(target.tagName.toLowerCase()==='li'){
        for(var i=0;i<navBarLis.length;i++){
            navBarLis[i].index=i;
            if(navBarLis[i].classList.contains('active')){
                navBarLis[i].classList.remove('active');
            }
        }
        target.classList.add('active');
        console.log(target.index)
        contents.style.marginLeft=-1020*target.index+'px';
    }
})


getNews();//页面首次加载内容

newsCon.addEventListener('scroll',function () {
    console.log("scroll");
    checkNews();

});


// var xhr=new XMLHttpRequest();
// var tempPanelLis=document.querySelectorAll('.tempPanel>li')
// xhr.onreadystatechange=function () {
//     if(xhr.readyState===4 && (xhr.status===200||xhr.status===304)){
//         var result=JSON.parse(xhr.responseText);
//         console.log(result);
//         var weatherFore=result.data.forecast;
//
//         var temp=weatherFore[0].high.substr(3,2);
//         var fengli=weatherFore[0].fengli.substring(9,weatherFore[0].fengli.length-3);
//         var liDetail=tempPanelLis[0].children;
//         var leftPar=liDetail[0].children;
//         var rightPar=liDetail[1].children;
//         leftPar[0].innerText=temp;
//         leftPar[1].innerHTML=getDate(weatherFore[0].date);
//         rightPar[0].innerHTML='<span class="iconfont bigIcon">'+getWeaIcon(weatherFore[0].type)+'</span>';
//         rightPar[1].innerText=weatherFore[0].fengxiang+' / '+fengli;
//
//         for(var i=1;i<tempPanelLis.length;i++){
//             var dayZh=weatherFore[i].date.substr(weatherFore[i].date.length-1,1);
//             var liInner=tempPanelLis[i].children;
//             var tempH=weatherFore[i].high.substr(3,2);
//             var tempL=weatherFore[i].low.substr(3,2);
//             liInner[0].innerText=getDayEng(dayZh);
//             liInner[1].innerHTML='<p class="iconfont weaIcon">'+getWeaIcon(weatherFore[i].type)+'</p>';
//             liInner[2].innerHTML='<span class="temp">'+tempL+'</span>~<span class="temp">'+tempH+'</span>';
//         }
//     }
//
//
// }
// xhr.open('get','http://wthrcdn.etouch.cn/weather_mini?city=南京');
// //xhr.open('get','http://wthrcdn.etouch.cn/weather_mini?citykey=101010100')
// xhr.send();


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

var jsonData={
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
        "maxResult":"5"
    ,
        "id":""
}

function urlCombine(url,data) {
    var result=url+"?";
    for(var key in data){
        result+=key+'='+data[key]+'&';
    }
    return result.substring(0,result.length-1);
}

console.log(urlCombine('http://route.showapi.com/109-35',jsonData));

//判断是否继续加载新闻
function checkNews() {
    console.log('check');
    if(isVisible(loadMoreNews)&& isNewsArrived){
        getNews();
    }
}

//获取数据
function getNews() {
    isNewsArrived=false;
    var xhrNews=new XMLHttpRequest();
    xhrNews.onreadystatechange=function () {
        if(xhrNews.readyState===4 && (xhrNews.status===200||xhrNews.status===304)){
            var result=JSON.parse(xhrNews.responseText);
            curIndex++;
            isNewsArrived=true
            console.log(result); //console变量在ie低版本下不能用
            appendHtml(result.showapi_res_body.pagebean.contentlist)
            checkNews();
        }
    };
    //xhrNews.open('post',urlCombine('http://route.showapi.com/109-35',jsonData));
    //xhrNews.open('post','http://route.showapi.com/109-35?showapi_timestamp='+formatterDateTime()+'&showapi_appid=75855&showapi_sign=f7ba46ba964f4d2b9ae1596f6be5e8b9&channelId=&channelName=&title=%E5%A4%A9%E6%B0%94&page=1&maxResult=3')
    var url=urlCombine('http://route.showapi.com/109-35',jsonData);
    xhrNews.open('get',url);
    xhrNews.send();
    // $.ajax({
    //     type: 'post',
    //     url: 'http://route.showapi.com/109-35',
    //     dataType: 'json',
    //     data: {
    //         "showapi_timestamp": formatterDateTime(),
    //         "showapi_appid": '75855', //这里需要改成自己的appid
    //         "showapi_sign": 'f7ba46ba964f4d2b9ae1596f6be5e8b9',  //这里需要改成自己的应用的密钥secret
    //         "channelId":"",
    //         "channelName":"",
    //         "title":"天气",
    //         "page":curIndex,
    //         "needContent":"0",
    //         "needHtml":"0",
    //         "needAllList":"0",
    //         "maxResult":"3",
    //         "id":""
    //     },
    //     error: function(XmlHttpRequest, textStatus, errorThrown) {
    //         alert("操作失败!");
    //     },
    //     success: function(result) {
    //         curIndex++;
    //         isNewsArrived=true
    //         console.log(result) //console变量在ie低版本下不能用
    //         appendHtml(result.showapi_res_body.pagebean.contentlist)
    //         checkNews();
    //     }
    // });
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
    for(var i=0;i<newsList.length;i++){
        var newNode=getNode(newsList[i]);
        newsCon.append(newNode);
    }
}

//组装DOM
function getNode(item) {
    var html='';
    var imgObj=item.imageurls[0];
    html+='<a href="'+item.link+'">';
    if(item.imageurls.length>0){
        html+='<img src="'+item.imageurls[0].url+'">';
    }else{
        html+='<img src="bf.jpg">';
    }
    html+='<div class="summary">';
    html+='<h3>'+item.title+'</h3>';
    html+='<p>'+item.desc+'</p></div></a>';


    var newLi=document.createElement('li');
    //newLi.classList.add('newsCard');
    newLi.innerHTML=html;

    return newLi;

}

//判断元素是否出现在页面上
function isVisible(node) {
    var windowHeight=node.style.height;//窗口的高度
    var scrollTop=newsCon.offsetTop;//滚动的距离
    var offset=node.offsetTop;//元素到顶部的距离
    var imgHeight=node.style.outerHeight;//元素高度
    if(offset<windowHeight+scrollTop && scrollTop<offset+imgHeight){
        return true;
    }
    return false;
}