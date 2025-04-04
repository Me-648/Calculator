# 簡易的な電卓「Calculator」
簡単な四則演算ができる電卓アプリです。ボタンを押すと音が鳴る、遊び心のあるUIを目指しました。

## 機能紹介
* 四則演算（加算、減算、乗算、除算）
* クリアボタン
* イコールボタン
* ボタンを押した際のサウンドエフェクト

## 使用技術
* HTML
* CSS
* JavaScript
* サウンドエフェクト: [効果音ラボ](https://soundeffect-lab.info)

## こだわった点
* シンプルで直感的なUI
* ボタンを押した際に音が鳴る遊び心

## 苦労した点と解決策
* **JavaScriptでの計算処理の誤差:** JavaScriptの浮動小数点演算では、小数点以下の桁数が多くなると誤差が発生することがありました。`Math.floor`を使用して小数点以下を切り捨てることで、誤差を最小限に抑えました。

## 今後の課題
* より正確な計算機能の実装
* より複雑な計算機能（平方根、パーセントなど）の追加

## 作者情報
* Me-648
