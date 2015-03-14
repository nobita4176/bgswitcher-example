# bgswitcherの振る舞いを確かめるためのお試し

## 実行
[./index.html](./index.html)を開く

## わかったこと

### js
+ ボタン追加は簡単,要素指定して `$e.bgswitcher('select', 2)` とかするだけ
    + next, prev, select(n)
+ selectだけちょっと面倒
    + nを知る必要がある
    + bgswitcherは要素が何個あるか教えてくれない
    + ついでに言うとjQueryも `$e.on(event, fn)` で何番目クリックしたか教えてくれない
        + 本当は要素数取得して `.bg-select` を動的に追加したかった
+ bgswitcherはcssのbackgroundを継承するっぽい
    + `$e.bgswitcher({opt});` の `$e` が現在どうなってるかを見る
    + `background-repeat: no-repeat;` や `background-size: cover;` は有用

### css
+ 要素重ねるの面倒
    + `position: absolute;` すると親に重なる
        + でも要素自身の場所を定められない
            + `top / left / right / bottom` いずれかを指定すると 画面全体基準になる
        + 親要素基準にしたいなら `relative` だと思ったけど 兄弟が共に `relative` だと重ねられない
+ 垂直方向中央揃え面倒
    + `display: table-cell;` + `vertical-align: center;` した
        + `vertical-align` は インライン要素かテーブル要素にしか適用されない なんでや
+ 垂直方向下揃えはもっと面倒 マジ無理
    + `display: table-cell;` + `vertical-align: bottom;` でなんとか出来なくはない
        + 要素重ね順の問題で どっちかのボタンが死ぬ
+ flexbox便利
    + 左右のボタンを一発で左右に貼り付けられた

## リンク
+ [github:rewish/jquery-bgswitcher](https://github.com/rewish/jquery-bgswitcher)
    + bgswitcher配布元
+ [LIG inc. - Flexboxの図解](http://liginc.co.jp/web/html-css/css/21024)
    + cssのflexboxの指定各種がわかりやすく図解されてる
+ [lorempixel](http://lorempixel.com/)
    + 仮置き用画像配布サイト ネコネコカワイイヤッター!!
    + ![cats](http://lorempixel.com/200/150/cats)
