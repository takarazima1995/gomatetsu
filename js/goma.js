$(function(){


//Skipperの初期化
$("document").ready(function() {
    $("#theTarget").skippr();
});
// オプションを指定してSkipperの実行
$("#theTarget").skippr({
    // スライドショーの変化 ("fade" or "slide")
    transition : 'slide',
    // 変化に係る時間(ミリ秒)
    speed : 1000,
    // easingの種類
    easing : 'easeOutQuart',
    // ナビゲーションの形("block" or "bubble")
    navType : 'bubble',
    // 子要素の種類("div" or "img")
    childrenElementType : 'div',
    // ナビゲーション矢印の表示(trueで表示)
    arrows : true,
    // スライドショーの自動再生(falseで自動再生なし)
    autoPlay : true,
    // 自動再生時のスライド切替間隔(ミリ秒)
    autoPlayDuration : 4000,
    // キーボードの矢印キーによるスライド送りの設定(trueで有効)
    keyboardOnAlways : true,
    // 一枚目のスライド表示時に戻る矢印を表示するかどうか(falseで非表示)
    hidePrevious : false
});



// $("a").lightbox();

$(".boxer").boxer({
    // mobile: true
});


    // .tabクラスの子要素の<li>タグがクリックされたら、
    $('.tab li').on('click',function(){

        var count = $('.tab li').index(this);
        // .tabクラスの中にある<li>タグのクラスを全て外す
        $('.tab li').removeClass('select');
        // クリックしたタブに背景色を変えるクラスを追加する
        $(this).addClass('select');
        // クリックした番号(0~)を取得し、変数countに代入する
        // .tab-contentクラスの<li>のクラスを全て外す
        $('.tab-content li').removeClass('select');
        // クリックした番号が入ったcountを.eq()メソッドに入れて、
        // クリックしたタブに連動するテキストを表示するクラスを追加する
        $('.tab-content li').eq(count - 6).addClass('select');
    });


// $('.tab li').click(function(){
//     var index = $('.tab li').index(this);

//     $('.tab-content li').css('display','none');

//     $('.tab-content li').eq(index).css('display','block');

//     $('.tab li').removeClass('select');

//     $(this).addClass('select')
// });




});







