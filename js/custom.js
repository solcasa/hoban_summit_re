$(function () {

    $('#Main__content').fullpage({
        anchors: ['mv', 'mp', 'md', 'ms', 'ft'],
        navigation: false,
        // 네비게이션 점박이 없애기
        css3: false,
        responsiveWidth: 768,
        //반응형에서 fullpage 안하기.

        afterRender: function () {
            $('#Main__content .section').eq(0).addClass('on');
        },
        afterLoad: function (lnk, idx) {
            console.log(lnk, idx);
            $('#Main__content .section').eq(idx - 1).addClass('on').siblings().removeClass('on');
            if (idx == 1) {
                $('#header').removeClass('on')
            } else {
                $('#header').addClass('on')
            }
        },
        onLeave: function (idx, nidx, dir) {
            $('.gnb li').eq(nidx - 1).addClass('on').siblings().removeClass('on');
            console.log(idx, nidx, dir);
            // up,down 도 같이 찍힘.
        }
    });

    //clone menu
    const NB = $('.gnb .nb').clone();
    console.log(NB);
    //clone 한 것을 넣기

    $('.all__nb').append(NB);

    $('.all__nb--btn').on('click', function () {
        $('.all__nb .nb').toggleClass('on');
    });

    // 메인비주얼슬라이드
    $('.visual__slide').slick({
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
    });

    $('.visual__slide').on('init afterChange', function (e, s, idx) {
        const current = $('.visual__slide .slick-current');
        current.addClass('on').siblings().removeClass('on');
        $('.main__visual .dots__').addClass('on');
        $('.main__visual .dots__ span').text(idx ? "0" + (idx + 1) : "01");
        $('.main__visual .dots__ strong').text("0" + s.slideCount);
    });

    $('.visual__slide').on('beforeChange', function () {
        $('.main__visual .dots__').removeClass('on');
    });


    // 프리미엄 슬라이드
    $('.premium__slide').on('init afterChange', function (e, s, idx) {
        const current = $('.premium__slide .slick-current');
        current.addClass('on').siblings().removeClass('on');
    });
    //얘가 기본 슬릭슬라이드보다 상위에 있어야됨.

    $('.premium__slide').slick({
        arrows: false,
        slidesToShow: 4,
    });

    $('.main__premium .arrows .left__arrow').on('click', function () {
        $('.premium__slide').slick('slickPrev')
    });
    $('.main__premium .arrows .right__arrow').on('click', function () {
        $('.premium__slide').slick('slickNext')
    });

});