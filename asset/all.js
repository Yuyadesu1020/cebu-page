// スクロールすると、pagetopボタンのフェードイン、フェードアウト
document.addEventListener("DOMContentLoaded", function(){
    // 変数名scrollButtonにclass名(.scroll)を一致させる↓
    var scrollButton = document.querySelector('.scroll');

    //スクロールイベントを投入
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            //スクロール量が指定より以上場合、visibleクラスを追加
            scrollButton.classList.add('visible');
        } else {
            //スクロール量が指定より以下だった場合、visibleクラスを削除
            scrollButton.classList.remove('visible');
        }
    });
});

//メニューボタントーグル
$(document).ready(function () {
    $(".openbtn").click(function () {
        $(this).toggleClass('active');
        $("nav").toggleClass('active');
    });

    $("#removeActiveButton").click(function () {
        $(".openbtn").removeClass('active');
        $("nav").removeClass('active');
    });
});


//HTML文書が読み込まれたときにこの機能が発動する
document.addEventListener("DOMContentLoaded", function () {
    //変数名にid名topを取得し、格納する
    var pagetopButton = document.getElementById("top");

    pagetopButton.addEventListener("click", function (event) {
        //元々の機能を停止する
        event.preventDefault();

        // Scroll to the top of the page smoothly
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});


//スライドショー/フェードインアウト
document.addEventListener("DOMContentLoaded", function() {
    var images = [
        "img/hero_image.jpg",
        "img/hero_image2.jpg",
        "img/hero_image3.jpg"
        // 追加の画像パスを必要に応じて追加
    ];
    var currentImageIndex = 0;
    var imageElement = document.querySelector('.hero-image');
    
    function changeImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        imageElement.style.opacity = 0;
        setTimeout(function() {
            imageElement.src = images[currentImageIndex];
            imageElement.style.opacity = 1;
        }, 1000); // フェードアウト後1秒後に画像を切り替えてフェードイン
    }

    // 初回実行
    changeImage();

    // 3秒ごとに画像を切り替える（任意の間隔で実行）
    setInterval(changeImage, 4000);
});


//一定スクロールすると、表示
window.addEventListener('scroll', function() {
    var fixedHeader = document.getElementById('fixed-header');
    var scrollPosition = window.scrollY || window.pageYOffset;
    var triggerHeight = 400; // トリガーとなるスクロールの高さ（例として200px）

    if (scrollPosition > triggerHeight) {
        fixedHeader.classList.add('active');
    } else {
        fixedHeader.classList.remove('active');
    }
});

//スライドショー/矢印移動
$('.slider').slick({
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    speed: 400,//スライドのスピード。初期値は300。
    slidesToShow: 3,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    centerMode: true,//要素を中央ぞろえにする
    variableWidth: true,//幅の違う画像の高さを揃えて表示
    dots: true,//下部ドットナビゲーションの表示
});

