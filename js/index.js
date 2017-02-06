$(function () {
    var banner=new Swiper ('.banner', {
        direction: 'horizontal',
        loop: true,
        autoplay:5000,
        speed:300,
        grabCurson:true,
        preventClicksPropagation:true,//阻止click冒泡
        // 如果需要分页器
        pagination: '.swiper-pagination'
//        // 如果需要前进后退按钮
//        nextButton: '.swiper-button-next',
//        prevButton: '.swiper-button-prev',//
//        // 如果需要滚动条
//        scrollbar: '.swiper-scrollbar',
    });
    var news=new Swiper ('.news', {
        direction: 'vertical',
        autoplay:3000,
        speed:300,
        grabCurson:true,

        loop: true        
//        scrollbar: '.swiper-scrollbar',
    })
    var card=new Swiper ('.card', {
        direction: 'horizontal',
        grabCurson:true,
        setWrapperSize:true,
        watchSlidesProgress:true,
        watchSlidesVisibility:true,
        slidesPreview:2,
        spaceBetween:2,
        
        loop: true
//        scrollbar: '.swiper-scrollbar',
    })
    var header=$('.header');
    var hflag=true;
    // var s=0;
    $(document).on('scroll',function () {
        var top=$('body').scrollTop();

        if(top>500&&hflag){
            // s+=1;
            // document.title=s;
            header.css('background','red');
            hflag=false
        }
        if(top<500&&(!hflag)){
            // s+=1;
            // document.title=s;
            header.css('background','');
            hflag=true
        }
    })//tou yanse

    var  car=$('.card-box .container .swiper-container .swiper-wrapper');
    var left;
    // car.on('touchstart',function (e) {
    //     left=e.originalEvent.changedTouches[0].pageX;
    // })
    // car.on('touchmove',function (e) {
    //     var n=e.originalEvent.changedTouches[0].pageX;
    //     // $(this).css('transition','.5s ease');
    //     $(this).css('transform','translate3d('+(n-left)+'px,0,0)')
    // })
    // car.on('touchend',function (e) {
    //     var x=e.originalEvent.changedTouches[0].pageX;
    //     $(this).css('transition','.5s ease');
    //     $(this).css('transform','translate3d(0,0,0)')
    // })

    var menu=$('.header .menu');
    var home=$('.home');
    menu.on('click',function () {
        $('.slide-box').css('transform','translate3d(0,0,0)');
        $('.back-mask').css({'transform':'translate3d(0,0,0)','opacity':1})
        home.height('100vh').css('overflow','hidden')
    })
    var back=$('.back-mask .back');
    back.on('click',function () {
        $('.slide-box').css('transform','translate3d(-100%,0,0)');
        $('.back-mask').delay(100).queue(function () {
            $(this).css({'transform':'translate3d(-100%,0,0)','opacity':0}).dequeue();
        })

        home.height('auto').css('overflow','auto')
    })
    var litem=$('.back-mask .slide-box .left .tab-list .item');
    var ritem=$('.back-mask .slide-box .right .tab-content')
   litem .on('click',function () {
        var index=$(this).index();
        litem.each(function (i,v) {
            $(this).removeClass('active');

        })
       litem.eq(index).addClass('active');

       ritem.each(function (i,v) {
           $(this).removeClass('active');


       })
        ritem.eq(index).addClass('active');
    })

})


