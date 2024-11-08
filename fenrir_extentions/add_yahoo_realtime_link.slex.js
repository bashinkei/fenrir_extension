// ==UserScript==
// @name            Add Yahoo Realtime Link
// @name:ja         ヤフーリアルタイムのリンク追加
// @author          bashinkei
// @description     Add a link to Yahoo! Realtime to Sleipnir Start.
// @description:ja  Sleipnir StartにYahoo!リアルタイムへのリンクを追加します。
// @icon            http://extensions.fenrir-inc.com/sample/icon.png
// @include         https://search.fenrir-inc.com/*
// @version         0.0.1
// @history         0.0.1   Initial version.
// @history:ja      0.0.1   最初のバージョン。
// @require         jquery
// ==/UserScript==

function getSearchStr() {
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    return params.get('q');
}

var title = "Y!リアルタイム";
const searchStr = getSearchStr();
const realtimeLink = `<li><a href="https://search.yahoo.co.jp/realtime/search?p=${searchStr}">${title}</a></li>`;
$("ul#menu_main li:first").after(realtimeLink);
$('#menu .section.service_sec').css('width', '760px');
