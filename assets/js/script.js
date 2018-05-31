/**
 * Coin Slider - Unique jQuery Image Slider
 * @version: 1.0 - (2010/04/04)
 * @requires jQuery v1.2.2 or later
 * @author Ivan Lazarevic
 * Examples and documentation at: http://workshop.rs/projects/coin-slider/
 
 * Licensed under MIT licence:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * ! modified by wowslider.com:
 * use image instance insted of src property (need for use preloader)
 * use additional container insted of image container
 * resposible
 *
 * Changed background images to <img>
**/
jQuery.fn.coinslider || function (t) { var e = new Array, a = new Array, n = new Array, s = new Array, d = new Array, r = new Array, o = new Array, c = new Array, f = new Array, p = new Array, h = new Array, u = new Array; t.fn.coinslider = t.fn.CoinSlider = function (l) { init = function (o) { for (a[o.id] = new Array, n[o.id] = new Array, s[o.id] = new Array, d[o.id] = new Array, r[o.id] = new Array, c[o.id] = l.startSlide || 0, p[o.id] = 0, h[o.id] = 1, u[o.id] = o, e[o.id] = t.extend({}, t.fn.coinslider.defaults, l), t.each(t("#" + o.id + " img"), function (i, e) { n[o.id][i] = e, s[o.id][i] = t(e).parent().is("a") ? t(e).parent().attr("href") : "", d[o.id][i] = t(e).parent().is("a") ? t(e).parent().attr("target") : "", r[o.id][i] = t(e).next().is("span") ? t(e).next().html() : ""; }), u[o.id] = t("<div class='coin-slider' id='coin-slider-" + o.id + "' />").css({ "background-image": "url(" + n[o.id][l.startSlide || 0].src + ")", "-o-background-size": "100%", "-webkit-background-size": "100%", "-moz-background-size": "100%", "background-size": "100%", width: "100%", height: "100%", position: "relative", "background-position": "top left" }).appendTo(t(o).parent().parent()), i = 1; i <= e[o.id].sph; i++)
    for (j = 1; j <= e[o.id].spw; j++)
        t(e[o.id].links ? "<a href='" + s[o.id][0] + "'></a>" : "<div></div>").css({ "float": "left", position: "absolute", overflow: "hidden" }).append(t("<img>")).appendTo(u[o.id]).attr("id", "cs-" + o.id + i + j); u[o.id].append("<div class='cs-title' id='cs-title-" + o.id + "' style='position: absolute; bottom:0; left: 0; z-index: 1000;'></div>"), e[o.id].navigation && t.setNavigation(o); }, t.setFields = function (s) { var d = u[s.id].width(), r = u[s.id].height(); for (tWidth = sWidth = parseInt(d / e[s.id].spw), tHeight = sHeight = parseInt(r / e[s.id].sph), counter = sLeft = sTop = 0, tgapx = gapx = e[s.id].width - e[s.id].spw * sWidth, tgapy = gapy = e[s.id].height - e[s.id].sph * sHeight, imgParams = t(n[s.id][l.startSlide || 0]), imgParams = { width: imgParams.width(), height: imgParams.height(), marginTop: parseFloat(imgParams.css("marginTop")), marginLeft: parseFloat(imgParams.css("marginLeft")) }, i = 1; i <= e[s.id].sph; i++) {
    for (gapx = tgapx, gapy > 0 ? (gapy--, sHeight = tHeight + 1) : sHeight = tHeight, j = 1; j <= e[s.id].spw; j++)
        gapx > 0 ? (gapx--, sWidth = tWidth + 1) : sWidth = tWidth, a[s.id][counter] = i + "" + j, counter++, t("#cs-" + s.id + i + j).css({ width: sWidth + "px", height: sHeight + "px", overflow: "hidden", left: sLeft, top: sTop }).addClass("cs-" + s.id).find("img").css({ width: imgParams.width, height: imgParams.height, marginTop: imgParams.marginTop - sTop, marginLeft: imgParams.marginLeft - sLeft }), sLeft += sWidth;
    sTop += sHeight, sLeft = 0;
} t(".cs-" + s.id).mouseover(function () { t("#cs-navigation-" + s.id).show(); }), t(".cs-" + s.id).mouseout(function () { t("#cs-navigation-" + s.id).hide(); }), t("#cs-title-" + s.id).mouseover(function () { t("#cs-navigation-" + s.id).show(); }), t("#cs-title-" + s.id).mouseout(function () { t("#cs-navigation-" + s.id).hide(); }), e[s.id].hoverPause && (t(".cs-" + s.id).mouseover(function () { e[s.id].pause = !0; }), t(".cs-" + s.id).mouseout(function () { e[s.id].pause = !1; }), t("#cs-title-" + s.id).mouseover(function () { e[s.id].pause = !0; }), t("#cs-title-" + s.id).mouseout(function () { e[s.id].pause = !1; })); }, t.transitionCall = function (i) { e[i.id].delay < 0 || (clearInterval(o[i.id]), delay = e[i.id].delay + e[i.id].spw * e[i.id].sph * e[i.id].sDelay, o[i.id] = setInterval(function () { t.transition(i); }, delay)); }, t.transition = function (i, s) { 1 != e[i.id].pause && (t.setFields(i), t.effect(i), p[i.id] = 0, f[i.id] = setInterval(function () { t.appereance(i, a[i.id][p[i.id]]); }, e[i.id].sDelay), t(u[i.id]).find("img").attr("src", n[i.id][c[i.id]].src), "undefined" == typeof s ? c[i.id]++ : "prev" == s ? c[i.id]-- : c[i.id] = s, c[i.id] == n[i.id].length && (c[i.id] = 0), -1 == c[i.id] && (c[i.id] = n[i.id].length - 1), t(".cs-button-" + i.id).removeClass("cs-active"), t("#cs-button-" + i.id + "-" + (c[i.id] + 1)).addClass("cs-active"), r[i.id][c[i.id]] ? (t("#cs-title-" + i.id).css({ opacity: 0 }).animate({ opacity: e[i.id].opacity }, e[i.id].titleSpeed), t("#cs-title-" + i.id).html(r[i.id][c[i.id]])) : t("#cs-title-" + i.id).css("opacity", 0)); }, t.appereance = function (i, a) { return t(".cs-" + i.id).attr("href", s[i.id][c[i.id]]).attr("target", d[i.id][c[i.id]]), p[i.id] == e[i.id].spw * e[i.id].sph ? (clearInterval(f[i.id]), void setTimeout(function () { t(i).trigger("cs:animFinished"); }, 300)) : (t("#cs-" + i.id + a).find("img").css("opacity", 0).attr("src", n[i.id][c[i.id]].src).animate({ opacity: 1 }, 300), void p[i.id]++); }, t.setNavigation = function (i) { for (t(u[i.id]).append("<div id='cs-navigation-" + i.id + "'></div>"), t("#cs-navigation-" + i.id).hide(), t("#cs-navigation-" + i.id).append("<a href='#' id='cs-prev-" + i.id + "' class='cs-prev'>prev</a>"), t("#cs-navigation-" + i.id).append("<a href='#' id='cs-next-" + i.id + "' class='cs-next'>next</a>"), t("#cs-prev-" + i.id).css({ position: "absolute", top: e[i.id].height / 2 - 15, left: 0, "z-index": 1001, "line-height": "30px", opacity: e[i.id].opacity }).click(function (e) { e.preventDefault(), t.transition(i, "prev"), t.transitionCall(i); }).mouseover(function () { t("#cs-navigation-" + i.id).show(); }), t("#cs-next-" + i.id).css({ position: "absolute", top: e[i.id].height / 2 - 15, right: 0, "z-index": 1001, "line-height": "30px", opacity: e[i.id].opacity }).click(function (e) { e.preventDefault(), t.transition(i), t.transitionCall(i); }).mouseover(function () { t("#cs-navigation-" + i.id).show(); }), t("<div id='cs-buttons-" + i.id + "' class='cs-buttons'></div>").appendTo(t("#coin-slider-" + i.id)), k = 1; k < n[i.id].length + 1; k++)
    t("#cs-buttons-" + i.id).append("<a href='#' class='cs-button-" + i.id + "' id='cs-button-" + i.id + "-" + k + "'>" + k + "</a>"); t.each(t(".cs-button-" + i.id), function (e, a) { t(a).click(function (a) { t(".cs-button-" + i.id).removeClass("cs-active"), t(this).addClass("cs-active"), a.preventDefault(), t.transition(i, e), t.transitionCall(i); }); }), t("#cs-navigation-" + i.id + " a").mouseout(function () { t("#cs-navigation-" + i.id).hide(), e[i.id].pause = !1; }), t("#cs-buttons-" + i.id).css({ left: "50%", "margin-left": 15 * -n[i.id].length / 2 - 5, position: "relative" }); }, t.effect = function (n) { if (effA = ["random", "swirl", "rain", "straight", "snakeV", "rainV"], eff = "" == e[n.id].effect ? effA[Math.floor(Math.random() * effA.length)] : e[n.id].effect, a[n.id] = new Array, "random" == eff) {
    for (counter = 0, i = 1; i <= e[n.id].sph; i++)
        for (j = 1; j <= e[n.id].spw; j++)
            a[n.id][counter] = i + "" + j, counter++;
    t.random(a[n.id]);
} /rain|swirl|straight|snakeV|rainV/.test(eff) && t[eff](n), h[n.id] *= -1, h[n.id] > 0 && a[n.id].reverse(); }, t.random = function (i) { var t = i.length; if (0 == t)
    return !1; for (; --t;) {
    var e = Math.floor(Math.random() * (t + 1)), a = i[t], n = i[e];
    i[t] = n, i[e] = a;
} }, t.swirl = function (n) { for (var s = e[n.id].sph, d = e[n.id].spw, r = 1, o = 1, c = 0, f = 0, p = 0, h = !0; h;) {
    for (f = 0 == c || 2 == c ? d : s, i = 1; f >= i; i++)
        if (a[n.id][p] = r + "" + o, p++, i != f)
            switch (c) {
                case 0:
                    o++;
                    break;
                case 1:
                    r++;
                    break;
                case 2:
                    o--;
                    break;
                case 3: r--;
            }
    switch (c = (c + 1) % 4) {
        case 0:
            d--, o++;
            break;
        case 1:
            s--, r++;
            break;
        case 2:
            d--, o--;
            break;
        case 3: s--, r--;
    }
    check = t.max(s, d) - t.min(s, d), check >= d && check >= s && (h = !1);
} }, t.rain = function (t) { for (var n = e[t.id].sph, s = e[t.id].spw, d = 0, r = to2 = from = 1, o = !0; o;) {
    for (i = from; r >= i; i++)
        a[t.id][d] = i + "" + parseInt(to2 - i + 1), d++;
    to2++, n > r && s > to2 && s > n && r++, n > r && n >= s && r++, to2 > s && from++, from > r && (o = !1);
} }, t.rainV = function (i) { for (var t = e[i.id], n = 0, s = 1; s <= t.sph; s++)
    for (var d = 1; d <= t.spw; d++)
        a[i.id][n] = s + "" + d, n++; }, t.snakeV = function (i) { for (var t = e[i.id], n = 0, s = 1; s <= t.sph; s++)
    for (var d = 1; d <= t.spw; d++)
        a[i.id][n] = s + "" + (s % 2 ? d : t.spw + 1 - d), n++; }, t.straight = function (t) { for (counter = 0, i = 1; i <= e[t.id].sph; i++)
    for (j = 1; j <= e[t.id].spw; j++)
        a[t.id][counter] = i + "" + j, counter++; }, t.min = function (i, t) { return i > t ? t : i; }, t.max = function (i, t) { return t > i ? t : i; }, this.each(function () { init(this); }); }, t.fn.coinslider.defaults = { width: 565, height: 290, spw: 7, sph: 5, delay: 3e3, sDelay: 30, opacity: .7, titleSpeed: 500, effect: "", navigation: !0, links: !0, hoverPause: !0 }; }(jQuery); // -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.8
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_squares(i, h, b) { var e = jQuery; var g = e(this); var f = b.find("ul").get(0); f.id = "wowslider_tmp" + Math.round(Math.random() * 99999); var c = 0; e(f).coinslider({ hoverPause: false, startSlide: i.startSlide, navigation: 0, delay: -1, effect: i.type, width: i.width, height: i.height, sDelay: i.duration / (7 * 5) }); var d = e("#coin-slider-" + f.id).addClass("ws_effect ws_squares").css({ position: "absolute", display: "none", left: 0, top: 0, "z-index": 8, transform: "translate3d(0,0,0)" }); var a = i.startSlide; e(f).bind("cs:animFinished", function () { g.trigger("effectEnd"); if (c < 2) {
    c = 0;
    d.hide();
} }); this.go = function (j) { c++; d.show(); a = j; e.transition(f, j); d.css("background", "none"); if (i.fadeOut) {
    e(f).fadeOut(i.duration);
} }; }
; // -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.8
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
