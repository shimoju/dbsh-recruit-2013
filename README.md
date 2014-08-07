土橋ゼミ 2013年度リクルートサイト
==========

[Middleman](http://middlemanapp.com/jp/)で作った所属ゼミのリクルートサイト(ゼミ生募集サイト)です。
2013年3月に作ったものを[Bootstrap 3](http://getbootstrap.com/)で実装しなおしました。

実際のサイトはこちら: [土橋ゼミに潜入してきたけどなにか質問ある？|土橋ゼミナール](http://dbsh.sakura.ne.jp/recruit13/)

## セットアップ

```
git clone https://github.com/shimoju/dbsh-recruit-2013.git
cd dbsh-recruit-2013
bundle install
bundle exec middleman
```

[`http://localhost:4567/`](http://localhost:4567/)にアクセス

`bundle exec middleman build`で静的サイトが生成される
