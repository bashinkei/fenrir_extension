// ==UserScript==
// @name            Sample extension
// @name:ja         サンプルエクステンション
// @author          fenrir_dev
// @description     This is a sample extension.
// @description     Inserts current date to fenrir-inc.com pages.
// @description:ja  サンプルエクステンションです。
// @description:ja  日付をfenrir-inc.comのページに挿入します。
// @icon            http://extensions.fenrir-inc.com/sample/icon.png
// @include         http://*.fenrir-inc.com/*
// @exclude         http://*.fenrir-inc.com/*/dev/*
// @exclude         http://*.fenrir-inc.com/*/admin/*
// @version         0.2.1
// @history         0.2.1 Fixed some bugs.
// @history:ja      0.2.1 いくつかバグ修正。
// @history         0.2   Improved something.
// @history:ja      0.2   なにか改善。
// @history         0.2   Fixed something.
// @history:ja      0.2   なにか修正。
// @history         0.1   Initial version.
// @history:ja      0.1   最初のバージョン。
// @require         jquery
// ==/UserScript==

var str_date = " Date: ";
switch(SLEX_locale) {
  case "ja":
    str_date = " 日付: ";
    break;
}

$("body").prepend('<div style="position:absolute;z-index:9999;top:0;left:0;">' + str_date + new Date() + '</div>');