// ==UserScript==
// @name            Add Yahoo Realtime Link
// @name:ja         ヤフーリアルタイムのリンク追加
// @author          bashinkei
// @description     Add a link to Yahoo! Realtime to fenrir search.
// @description:ja  fenrir searchにYahoo!リアルタイムへのリンクを追加します。
// @icon            http://extensions.fenrir-inc.com/sample/icon.png
// @include         https://search.fenrir-inc.com/*
// @version         0.0.1
// @history         0.0.1   Initial version.
// @history:ja      0.0.1   最初のバージョン。
// @require         jquery
// ==/UserScript==

var str_date = " Date: ";
switch(SLEX_locale) {
  case "ja":
    str_date = " 日付: ";
    break;
}

$("body").prepend('<div style="position:absolute;z-index:9999;top:0;left:0;">' + str_date + new Date() + '</div>');