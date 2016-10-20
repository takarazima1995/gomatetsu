$(function(){
       // .tabクラスの子要素の<li>タグがクリックされたら、
    $('.tab li').on('click',function(){
        // .tabクラスの中にある<li>タグのクラスを全て外す
        $('.tab li').removeClass('select');
        // クリックしたタブに背景色を変えるクラスを追加する
        $(this).addClass('select');
        // クリックした番号(0~)を取得し、変数countに代入する
        var count = $('.tab li').index(this);
        // .tab-contentクラスの<li>のクラスを全て外す
        $('.tab-content li').removeClass('select');
        // クリックした番号が入ったcountを.eq()メソッドに入れて、
        // クリックしたタブに連動するテキストを表示するクラスを追加する
        $('.tab-content li').eq(count).addClass('select');
    });



});