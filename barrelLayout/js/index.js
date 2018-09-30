var baseHeight=200;
var curIndex=1;
var isNewsArrived=true;

var $container=$('.container');
var $input=$('.inputText');


$input.change(throttle(function () {
    imgArr=[];
    loadPage()
},200))


$(window).on('scroll',checkBottom)

function checkBottom() {
    if(isVisible($('.loadMore')) && isNewsArrived){
        getImgs();
    }
}

function loadPage() {
    $container.empty();
    rowMaxWidth=0;
    curIndex=1;
    rowList=[];
    checkBottom()
}

function getImgs() {
    isNewsArrived=false;
    $.ajax({
        type:"get",
        url:'https://pixabay.com/api',
        dataType:'json',
        data:{
            "key":"10205368-9d425e0cd87e8fed05003d4aa",
            "q":$input.val(),
            "image_type":"photo",
            "page":curIndex,
            "per_page":5

        },
        error:function (XmlHttpRequest, textStatus, errorThrown) {
            alert("操作失败!");
        },
        success: function(result) {
            console.log(result);
            isNewsArrived=true;
            curIndex++;
            layout(result.hits,baseHeight);
            checkBottom();
        }
    })
}


function layout(rowList,baseH) {
    $.each(rowList,function () {
        var $fig=$('<figure></figure>');
        var $img=$('<img src="'+this.webformatURL+'"></img>')
        this.radio=this.webformatWidth/this.webformatHeight;
        $fig.width(this.radio*baseH);
        $fig.height(baseH);
        $fig.append($img);
        $container.append($fig);
    })
}

function throttle(fn,delay) {
    var timer=null;
    return function () {
        var context=this;
        clearTimeout(timer);
        timer=setTimeout(function () {
            fn.apply(context,arguments);
        },delay)
    }
}

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