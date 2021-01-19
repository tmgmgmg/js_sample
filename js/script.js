//=====================================================
// pagetop.js
//=====================================================

$(function () {
  // 「ページトップへ」の要素を隠す　隠すときのみ
  // $('#pagetop').hide();
  // $('#pagetop').css({ 'position': 'fixed', 'bottom': '10px', 'right': '10px' });

  // 「ページトップへ」の要素を隠す
  $('#pagetop').hide();

  // スクロールした場合
  $(window).scroll(function () {
    // スクロール位置が100を超えた場合
    if ($(this).scrollTop() > 100) {
      // 「ページトップへ」をフェードイン
      $('#pagetop').fadeIn();
    }
    // スクロール位置が100以下の場合
    else {
      // 「ページトップへ」をフェードアウト
      $('#pagetop').fadeOut();
    }
  });

  // 「ページトップへ」をクリックした場合
  $('#pagetop').click(function () {
    // ページトップにスクロール
    $('html,body').animate({
      scrollTop: 0
    }, 300);
    return false;
  });
});

//=====================================================
// tel.js
//=====================================================

$(function () {
  if (!isPhone()) {
    return;
  }

  $('span[data-action=call]').each(function () {
    var $ele = $(this);
    var telorg = $(this).text();
    if (telorg == "") {
      var telorg = $(this).children('img').attr('alt');
    }
    var telfix = telorg.replace(/[^0-9]/g, '');
    $ele.wrap('<a class="ddd" href="tel:' + telfix + '"></a>');
  });
});

function isPhone() {

  // Edgeを弾く
  if (navigator.userAgent.indexOf('Edge') >= 0) {
    return false;
  }

  // Android且つMobileだった場合、電話機とみなす
  if (navigator.userAgent.indexOf('Android') >= 0 && navigator.userAgent.indexOf('Mobile') >= 0) {
    return true;
  }

  // 最後はiPhoneかどうかを判定し、結果を返す
  return (navigator.userAgent.indexOf('iPhone') >= 0);
};

//=====================================================
// not_enter.js
//=====================================================

$(document).ready(function () {
  $("form input[type!=image][type!=button][type!=submit][type!=reset],form select").keypress(function (e) {
    if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
      return false;
    } else {
      return true;
    }
  });
});

//=====================================================
// object-fit
//=====================================================
$(function () {
  objectFitImages('.photo-ofi img');
});

//=====================================================
//タブ切り替え
//=====================================================

$(function () {
  var $filters = $('.filter [data-filter]'),
    $boxes = $('.news_area [data-category]');
  // セレクタのみ変更

  $filters.on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    $filters.removeClass('active');
    $this.addClass('active');

    var $filterTime = $this.attr('data-filter');

    if ($filterTime == 'all') {
      $boxes.removeClass('is-animated')
        .fadeOut().promise().done(function () {
          $boxes.addClass('is-animated').fadeIn();
        });
    } else {
      $boxes.removeClass('is-animated')
        .fadeOut().promise().done(function () {
          $boxes.filter('[data-category~="' + $filterTime + '"]')
            .addClass('is-animated').fadeIn();
        });
    }
  });
})

//=====================================================
// ヘッダー分下げる
//=====================================================
$(function () {
  jQuery(function () {
    var windowWidth = $(window).width();
    var headerHight = 100;
    jQuery('a[href^=#]').click(function () {
      var speed = 1000;
      var href = jQuery(this).attr("href");
      var target = jQuery(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top - headerHight;
      jQuery('body,html').animate({ scrollTop: position }, speed, 'swing');
      return false;
    });
  });
});
// headerHightを変更

// 他ページからの遷移時
$(function () {
  scrollTo(0, 0);
});

$(window).on('load', function () {
  var ahash = location.hash;
  if (ahash) {
    var gotoNum = $(ahash).offset().top;
    $('html,body').animate({ scrollTop: gotoNum - 130 }, 0);
  }
  return false;
});

//=====================================================
// swiper
//=====================================================
$(function () {
  var swiper = new Swiper('.swiper-fv', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    autoplay: {
      delay: 3000, //表示時間
      disableOnInteraction: true //操作中の自動再生停止
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    speed: 1000, //切り替わる時間
    effect: 'fade',
    crossFade: true,
  });
});

// Swiper('○○',　クラス名を変更する
// 複数使う場合はSwiper('○○',　の名前を複数用意
//=====================================================
// スクロールでナビ表示
//=====================================================
$(function () {
  // スクロール途中から表示したいメニューバーを指定
  var navBox = $(".cb-header");
  // メニューバーは初期状態では消しておく
  navBox.hide();
  // 表示を開始するスクロール量を設定(px)
  var TargetPos = 190;
  // スクロールされた際に実行
  $(window).scroll(function () {
    // 現在のスクロール位置を取得
    var ScrollPos = $(window).scrollTop();
    // 現在のスクロール位置と、目的のスクロール位置を比較
    if (ScrollPos > TargetPos) {
      // 表示(フェイドイン)
      navBox.slideDown();
    } else {
      // 非表示(フェイドアウト)
      navBox.slideUp();
    }
  });
});

//=====================================================
// aos
//=====================================================

// AOS.init({
//     easing: 'easeInSine',
// });
