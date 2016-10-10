/**
 * Created by pcfm on 2016/9/29.
 */
var time_duration = 1000;
var docuH = document.documentElement.clientHeight,
    allMoveBox = document.getElementsByClassName('swiper-slide');
document.getElementsByClassName('swiper-container').item(0).style.height = docuH + 'px';

/*默认显示page1*/
$(".swiper-wrapper").css({
  "top":-docuH
});

/*浏览器默认的下拉事件,如果不加会导致ios系统下的浏览器事件触发问题*/
document.addEventListener('touchmove', function (event) {
  event.preventDefault();
}, false);
page1Show();

function page1Hide(){
  var $slideInnerImg =$(".one-slide-inner.slide-inner > img"),
      $innerCenterImg =$(".one-slide-inner .inner-center > img");
  $slideInnerImg.removeClass();
  $innerCenterImg.removeClass();
}
function page1Show(){
  var $slideInnerImg =$(".one-slide-inner.slide-inner > img"),
      $innerCenterImg =$(".one-slide-inner .inner-center > img");
  var centerClassName = "one-slide-inner-center-imgShow";
  $($innerCenterImg).each(function(){
    var index = $(this).index()+1;
    $(this).addClass(centerClassName+index);
  });
}

function page2Hide(){
  var $innerUpImgWater = $(".two-inner-up > img[data-type='water']"),
      $innerUpImgWe = $(".two-inner-up > img[data-type='we']"),
      $innerUpFlowers = $(".two-inner-up > img[data-type='hua']"),
      $innerDownSave = $(".two-inner-down > img[data-type='save']"),
      $innerDownBird = $(".two-inner-down > img[data-type='bird']"),
      $innerDownWord = $(".two-inner-down > p"),
      $innerDownFlowers = $(".two-inner-down > img[data-type='huashu']");
  $innerUpImgWater.removeClass();
  $innerUpImgWe.removeClass();
  $innerDownSave.removeClass();
  $innerDownBird.removeClass();
  $innerDownWord.removeClass();
  $innerUpFlowers.removeClass();
  $innerDownFlowers.removeClass();
}
function page2Show(){
  var $innerUpImgWater = $(".two-inner-up > img[data-type='water']"),
      $innerUpImgWe = $(".two-inner-up > img[data-type='we']"),
      $innerUpFlowers = $(".two-inner-up > img[data-type='hua']"),
      $innerDownSave = $(".two-inner-down > img[data-type='save']"),
      $innerDownBird = $(".two-inner-down > img[data-type='bird']"),
      $innerDownFlowers = $(".two-inner-down > img[data-type='huashu']"),
      $innerDownWord = $(".two-inner-down > p");
  $innerUpImgWater.addClass("showWater");
  $innerUpImgWe.addClass("showWe");
  $innerUpFlowers.addClass("showFlowers");
  $innerDownSave.addClass("saveShow");
  $innerDownBird.addClass("birdShow");
  $innerDownWord.addClass("showWord");
  $innerDownFlowers.addClass("showFlowers");
  var timer1 = setTimeout(function(){
    $innerUpImgWater.removeClass().addClass("two-rotateInfinite");
    clearTimeout(timer1);
    timer1 = null;
  },3*time_duration)
}

$(".swiper-slide").css({
  "height":docuH
}).on("touchmove",function(e){
}).tap(function(e){
}).swipe(function(){
}).swipeUp(function(e){//向上滑动
  /*实际有copy1,1,2,3,4,5,copy5共七屏。视觉呈现的就5屏。由于显示1~5屏，所以对应的索引值不需要再-1。*/
  var index = $(this).index(),
      allIndex = $('.swiper-slide').length-2;
  var $wrapper = $(".swiper-wrapper");
  if(index > allIndex)return;
  if(!$wrapper.hasClass("swiper-wrapper-duration")){
    $wrapper.addClass("swiper-wrapper-duration");
  }
  $wrapper.css({
    "top":-((index+1)*docuH)
  });
  switch(index){
    case allIndex:
      window.timeOut = setTimeout(function(){
        $wrapper.removeClass("swiper-wrapper-duration");
        $wrapper.css({
          "top":-docuH
        });
        window.clearTimeout(window.timeOut);
        window.timeOut = null;
      },time_duration);
      page1Show();
      break;
    case 1:
      if(!$wrapper.hasClass("swiper-wrapper-duration")){
        $wrapper.addClass("swiper-wrapper-duration");
        $wrapper.css({
          "top":-2*docuH
        });
      }
      page1Hide();
      page2Show();
      break;
    case 2:
      page2Hide();
      break;
  }
}).swipeDown(function(e){
  console.log("Down!!!!");
  var index = $(this).index(),
      allIndex = $('.swiper-slide').length-2;
  var $wrapper = $(".swiper-wrapper");
  if(index == 0)return;
  if(!$wrapper.hasClass("swiper-wrapper-duration")){
    $wrapper.addClass("swiper-wrapper-duration");
  }
  $wrapper.css({
    "top":-(index-1)*docuH
  });
  switch(index){
    case 1:
      window.timeOut = setTimeout(function(){
        $wrapper.removeClass("swiper-wrapper-duration");
        $wrapper.css({
          "top":-allIndex*docuH
        });
        window.clearTimeout(window.timeOut);
        window.timeOut = null;
      },time_duration);
      page1Hide();
      break;
    case 2:
      page1Show();
      page2Hide();
      break;
    case 3:
      page2Show();
      //page3Hide();
      break;
    case allIndex:
      if(!$wrapper.hasClass("swiper-wrapper-duration")){
        $wrapper.addClass("swiper-wrapper-duration");
        $wrapper.css({
          "top":-(allIndex-1)*docuH
        });
      }
      break;
  }
})
