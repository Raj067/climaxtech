'use strict'; (function (a) {
    a(function () {
        function m() {
            var b = f ? a(v + ">.module_row") : a(v + ">" + t), c = themifyScript.responsiveBreakpoints || {}, d = window.innerWidth, z = { desktop: d >= c.tablet_landscape, tablet: d < c.tablet_landscape && d >= c.mobile, mobile: d <= c.mobile }; b.each(function () { var b = a(this), c = this.classList; if (b.is(":hidden")) b.remove(); else if (c.contains("hide-desktop") || c.contains("hide-tablet") || c.contains("hide-mobile")) for (var d in z) !0 === z[d] && c.contains("hide-" + d) && b.remove() }); window.top._rowColAlign =
                "col_align_middle"
        } function x(a) { a = a.prop("class").split(" "); for (var b = /^tb_section-/i, d = null, f = 0, g = a.length; f < g; ++f)b.test(a[f]) && (d = a[f]); return null === d ? "" : d.replace("tb_section-", "") } function u() {
            var b = Themify.body, c = !1, d = a(v), z = !(!f && "" != themifyScript.hash.replace("#", "")), g = themifyScript.hash.replace("#", ""), n = b[0].classList.contains("section-scrolling-parallax-enabled"), l = document.getElementsByClassName("module_row")[0], r = null, e = ".module_row_slide".replace(".", ""), q = []; r = null; if (void 0 !==
                l) for (r = document.getElementsByClassName(e)[0], void 0 !== r && r.classList.remove(e), r = null, r = a(v + ">" + t), r.each(function () {
                    for (var b = a(this), c = document.createDocumentFragment(), d = document.createElement("div"), g = this.classList, f = "", n = g.length - 1; -1 < n; --n)if (0 === g[n].indexOf("tb_section-")) { f = x(b); break } f = "1" === b.attr("data-hide-anchor") ? "" : f; for (q.push(f); ;)if (f = b.next()[0], void 0 !== f && f.classList.contains(e)) c.appendChild(f); else break; d.className = "section-container"; for (n = g.length - 1; -1 < n; --n)"fullwidth" !==
                        g[n] && "fullcover" !== g[n] && 0 !== g[n].indexOf("module_row_") && 0 !== g[n].indexOf("tb_") && (d.className += " " + g[n]); g.add(e); this.parentNode.insertBefore(d, this); d.appendChild(this); d.appendChild(c); d.style.display = "block"
                }), r = document.getElementsByClassName(e), l = r.length - 1; -1 < l; --l) {
                    r[l].parentNode.style.display = "none"; var k = r[l].getElementsByClassName("row_inner"), h = a(r[l]), p = h.css("padding-top").replace(/%/g, "vh"); h = h.css("padding-bottom").replace(/%/g, "vh"); for (var m = k.length - 1; -1 < m; --m)k[m].style.paddingTop =
                        p, k[m].style.paddingBottom = h; r[l].style.paddingTop = r[l].style.paddingBottom = 0; r[l].parentNode.style.display = ""
                } k = document.getElementById("main-nav"); var w = a(k); if (f && null !== r && null !== k) for (l = r.length - 1; -1 < l; --l) {
                    p = null; var u = r[l].classList; h = a(r[l]); for (m = u.length - 1; -1 < m; --m)if (0 === u[m].indexOf("tb_section-")) { p = x(h); break } null === p && (p = r[l].id); p && (m = k.querySelector('a[href$="#' + p + '"]'), null !== m && (h = h.closest(".module_row").data("anchor")) && a(m).attr("href", "#" + h + "/" + p).closest("li").attr("data-menuanchor",
                        h + "/" + p))
                } d.fullpage({
                    resize: !1, sectionSelector: ".section-container", slideSelector: ".module_row_slide", anchors: q, scrollOverflow: !0, navigation: !0, lockAnchors: !0, verticalCentered: !0, autoScrolling: z, menu: null !== k ? "#" + k.id : "", scrollHorizontally: b[0].classList.contains("full-section-scrolling-single") && !b[0].classList.contains("full-section-scrolling-horizontal") ? !1 : !0, scrollHorizontallyKey: "QU5ZX1UycmMyTnliMnhzU0c5eWFYcHZiblJoYkd4NWhLbA==", slidesNavigation: !0, parallax: n, parallaxKey: "QU5ZX0FodGNHRnlZV3hzWVhnPXY1bA==",
                    parallaxOptions: { type: "reveal", percentage: 62, property: "translate" }, scrollOverflowOptions: { hideScrollbars: !0, preventDefault: !1 }, afterRender: function () {
                        function d() { a(".module_row_slide").each(function () { var b = a("<div>"); b.addClass("fp-bg").css({ "background-image": a(this).css("background-image"), "z-index": 0 }); a(this).css("background-image", "none").prepend(b) }) } z || a.fn.fullpage.setAutoScrolling(!0); var c = a(".module_row_slide.active, .section", a(".section-container.active")), g = f && c.is('[class*="tb_section-"]') ?
                            x(c) : c.prop("id"), e = w.find('a[href$="#' + g + '"]'); "undefined" !== typeof ThemifyBuilderModuleJs && "undefined" !== typeof A && null !== ThemifyBuilderModuleJs.wow && J && (ThemifyBuilderModuleJs.wow.stop(), b.triggerHandler("themify_onepage_afterload", [c, g])); if (f) { var l = a("#fp-nav").find("li").get(a(".module_row").length); "undefined" !== typeof l && l.hide() } 0 < e.length ? e.closest("li").addClass("current_page_item").siblings().removeClass("current_page_item current-menu-item") : w.find("li").removeClass("current_page_item current-menu-item");
                        b.on({ mouseenter: function () { var b = a(this).find("a").attr("href").replace("#", ""); 0 < b.length && a('<div class="multiscroll-tooltip">' + b + "</div>").hide().appendTo(a(this)).fadeIn(200) }, mouseleave: function () { a(this).find(".multiscroll-tooltip").fadeOut(200, function () { a(this).remove() }) } }, "#fp-nav li"); e = a(t).find(".fp-tableCell, .fp-scrollable, .fp-scroller").children(".builder_row_cover, .row-slider, .column-slider, .subrow-slider"); e.length && e.each(function () {
                            var b = a(this).closest(".module_row"); !b.is(".builder_row_cover, .row-slider, .column-slider, .subrow-slider") &&
                                b.prepend(this)
                        }); b.triggerHandler("themify_onepage_after_render", [c, g]); if (n) if (null !== document.querySelector(".module_row_slide[data-fullwidthvideo]")) b.one("tb_bigvideojs_loaded", d); else d()
                    }, afterLoad: function (d, n) {
                        d = a(t + ".active", a(v)); var e = f && d.is('[class*="tb_section-"]') ? x(d) : d.prop("id"); e || (e = d.data("anchor")); var l = w.find('a[href$="#' + e + '"]'); 0 === l.length && (l = w.find('a[href$="#' + e + "/" + d.find(".module_row_slide.active").data("anchor") + '"]')); "undefined" !== typeof ThemifyBuilderModuleJs &&
                            "undefined" !== typeof A && null !== ThemifyBuilderModuleJs.wow && ThemifyBuilderModuleJs.wow.stop(); 0 < l.length ? l.closest("li").addClass("current_page_item").siblings().removeClass("current_page_item current-menu-item") : w.find("li").removeClass("current_page_item current-menu-item"); e ? (l = J ? e + "/" + e : e, c && g !== e ? history.pushState(null, null, "#" + l) : history.replaceState(null, null, "#" + l)) : history.replaceState(null, null, location.pathname); c = !0; b.triggerHandler("themify_onepage_afterload", [d, e]); O && 1 != n && !K.$headerWrap.hasClass("fixed-header") &&
                                K.scrollEnabled(); d.find(".tf-video").each(function () { "function" === typeof this.play && this.play() })
                    }, onLeave: function (d, c, g) { b.removeClass("fullpagescroll-up fullpagescroll-down").addClass("fullpagescroll-" + g); if (0 < b.find("> .mfp-wrap").length) return !1; var n = f ? a(v).children(".section-container") : a(v).find(t); if (0 < n.length && 0 < d && 0 < c) if ("up" === g) for (; d >= c; d--)n.eq(d - 1).find(".module_row").css("visibility", "visible"); else for (; d <= c; d++)n.eq(d - 1).find(".module_row").css("visibility", "visible") }, afterSlideLoad: function (d,
                        c, g, n) {
                            c = w.find('a[href$="#' + d + "/" + g + '"]'); 0 === c.length && (c = w.find('a[href$="#' + g + "/" + g + '"]'), 0 === c.length && (c = w.find('a[href$="#' + g + '"]'))); 0 < c.length ? c.closest("li").addClass("current_page_item").siblings().removeClass("current_page_item current-menu-item") : w.find("li").removeClass("current_page_item current-menu-item"); "string" === typeof g ? history.replaceState(null, null, "#" + ("" !== d ? d + "/" + g : g)) : history.replaceState(null, null, location.pathname); d = a(t + ".active", a(v)); d.find(".tf-video").each(function () {
                                "function" ===
                                typeof this.play && this.play()
                            }); b.triggerHandler("themify_onepage_afterload", [d, d.data("anchor")])
                    }, onSlideLeave: function (d, c, g, n, e, f) { d = a(".section-container").find(".module_row_slide"); b.triggerHandler("themify_onepage_slide_onleave", [d.eq(e)]); if ("left" === n) for (; g > e; --g)d.eq(g - 1).css("visibility", "visible"); else if ("right" === n) for (; g < e; ++g)d.eq(g + 1).css("visibility", "visible") }
                })
        } function y(b, c) {
            Themify.infinity(b[0], {
                append: c, scrollToNewOnLoad: themifyScript.scrollToNewOnLoad, scrollThreshold: "auto" !==
                    themifyScript.autoInfinite ? !1 : a("#footerwrap").height(), history: themifyScript.infiniteURL ? "replace" : !1, button: a("#load-more a")[0]
            })
        } function h() {
            var b = a('<div class="body-overlay">'); k.append(b).on("sidemenushow.themify", function () { b.addClass("body-overlay-on") }).on("sidemenuhide.themify", function () { b.removeClass("body-overlay-on") }).on("click.themify touchend.themify", ".body-overlay", function () { L.themifySideMenu("hide"); V.themifySideMenu("hide") }); a(window).on("tfsmartresize", function () {
                a("#mobile-menu").hasClass("sidemenu-on") &&
                L.is(":visible") ? b.addClass("body-overlay-on") : b.removeClass("body-overlay-on")
            })
        } var f = !a(".type-section").length, p = !Themify.is_builder_active && themifyScript.fullPageScroll && Themify.body[0].classList.contains("full-section-scrolling"), t = ".section-post:not(.section-post-slide)", J = p && Themify.body[0].classList.contains("full-section-scrolling-horizontal"), v = "div:not(.module-layout-part) > #loops-wrapper", O = Themify.body[0].classList.contains("fixed-header"), A; p && (f && (p = 0 < a(".themify_builder").length,
            t = ".module_row:not(.module_row_slide)", v = "div:not(.module-layout-part) > .themify_builder_content:not(.not_editable_builder)"), p && m()); var K = {
                headerHeight: 0, hasHeaderSlider: !1, headerSlider: !1, $pageWrap: a("#pagewrap"), $headerWrap: a("#headerwrap"), $window: a(window), stickyHeader: themifyScript.sticky_header, init: function () {
                    if (!Themify.is_builder_active) {
                        var b = this; b.calculateHeaderHeight(); Themify.body.hasClass("revealing-header") && "undefined" !== typeof b.$headerWrap[0] && this.headerRevealing(); if (O) {
                            if (p) Themify.body.on("themify_onepage_afterload",
                                function (d, c, g) { d = 0 < a(".module_row_slide.active", a(".section-container.active")).closest(".section-container").index(); b.activate(d); d && (d = b.headerHeight, b.calculateHeaderHeight(), d != b.headerHeight && b.updatePageOffset()) }); else b.activate(!1), this.$window.on("scroll touchstart.touchScroll touchmove.touchScroll", function (a) { b.activate(!1) }); this.$window.one("load", function () { b.calculateHeaderHeight(); b.updatePageOffset(); setTimeout(function () { b.calculateHeaderHeight(); b.updatePageOffset() }, 400) }).on("tfsmartresize",
                                    function (a) { !0 !== this.loaded || Themify.w === a.w && Themify.h === a.h || setTimeout(function () { b.calculateHeaderHeight(); b.updatePageOffset() }, 400) }); 0 < a("#gallery-controller").length && (b.hasHeaderSlider = !0); if (b.stickyHeader) { var c = '<img id="sticky_header_logo" src="' + b.stickyHeader.src + '"'; c += "/>"; a("#site-logo a").prepend(c) } Themify.body.on("announcement_bar_position announcement_bar_scroll_on_after announcementBarUpdate", b.calculateHeaderHeight.bind(b))
                        }
                    }
                }, headerRevealing: function () {
                    var a = "down", c = 0, d =
                        this, e = function () { c !== window.scrollY && (a = c < window.scrollY ? "down" : "up", c = window.scrollY, "up" === a || 0 === c ? d.$headerWrap.hasClass("hidden") && d.$headerWrap.css("top", "").removeClass("hidden") : 0 < c && !d.$headerWrap.hasClass("hidden") && d.$headerWrap.css("top", -d.$headerWrap.outerHeight()).addClass("hidden")) }; this.$window.on("scroll touchstart.touchScroll touchmove.touchScroll", e); e()
                }, activate: function (a) {
                    a || this.$window.scrollTop() >= this.headerHeight ? !this.$headerWrap.hasClass("fixed-header") && this.scrollEnabled() :
                    this.$headerWrap.hasClass("fixed-header") && this.scrollDisabled()
                }, scrollDisabled: function () { this.$headerWrap.removeClass("fixed-header"); a("#header").removeClass("header-on-scroll"); Themify.body.removeClass("fixed-header-on"); this.$headerWrap.hide(); this.$headerWrap[0].offsetHeight; this.$headerWrap.show(); this.calculateHeaderHeight(); this.updatePageOffset(); this.triggerHeaderSlider() }, scrollEnabled: function () {
                    this.$headerWrap.addClass("fixed-header"); a("#header").addClass("header-on-scroll"); Themify.body.addClass("fixed-header-on");
                    this.triggerHeaderSlider(); this.updatePageOffset()
                }, triggerHeaderSlider: function () { this.hasHeaderSlider && "object" === typeof this.$headerWrap.data("backstretch") && (this.$headerWrap.data("backstretch").resize(), a("#gallery-controller .slides").trigger("next")) }, calculateHeaderHeight: function () { var b = "fixed" === this.$headerWrap.css("position") ? a("body").offset().top : ""; this.headerHeight = this.$headerWrap.outerHeight(!0) - (b ? parseInt(b) : 0); this.$headerWrap.css("margin-top", b) }, updatePageOffset: function () {
                    J ||
                    this.$pageWrap.css("paddingTop", Math.floor(this.headerHeight))
                }
            }; K.init(); var P = {
                recalcHeight: function (b, c) { var d = []; a.each(b, function () { d.push(a(this).outerHeight(!0)) }); var e = Math.max.apply(Math, d); c.closest(".carousel-wrap").find(".caroufredsel_wrapper, .slideshow").each(function () { a(this).outerHeight(e) }) }, didResize: !1, createCarousel: function (b) {
                    var c = this; b.each(function () {
                        var b = a(this), e = b.data("id"); b.carouFredSel({
                            responsive: !0, prev: "#" + e + " .carousel-prev", next: "#" + e + " .carousel-next", pagination: {
                                container: "#" +
                                    e + " .carousel-pager"
                            }, circular: !0, infinite: !0, swipe: !0, scroll: { items: b.data("scroll"), fx: "scroll", duration: parseInt(b.data("speed")) }, auto: { play: "off" !== b.data("autoplay"), timeoutDuration: "off" !== b.data("autoplay") ? parseInt(b.data("autoplay")) : 0 }, items: { visible: { min: 1, max: b.data("visible") ? parseInt(b.data("visible")) : 1 }, width: 222 }, onCreate: function (d) {
                                var g = b.closest(".slideshow-wrap"); g.css({ visibility: "visible", height: "auto" }); c.recalcHeight(d.items, b); a(window).on("tfsmartresize", function () {
                                    c.recalcHeight(d.items,
                                        b)
                                }); setTimeout(function () { g.find(".carousel-nav-wrap").css("width", 18 * parseInt(g.find(".carousel-pager").find("a").length) + "px") }, 200)
                            }
                        })
                    })
                }
            }, k = Themify.body, e = k[0].classList, Q = a("#header"), R = a(".header-icons"), L = a("#menu-icon"), V = a("#cart-icon"), M = a(".cart-icon"), E = M.clone(), q = function () {
                if (M.length) {
                    var b = null; k.is(".header-leftpane, .header-rightpane") ? b = a(".social-widget") : R.is(":visible") && (b = R); b && !E.data("icon-moved") && (k.hasClass("slide-cart") && E.themifySideMenu({ panel: "#slide-cart", close: "#cart-icon-close" }),
                        E.data("icon-moved", 1).appendTo(b)); E.toggle(!!b); M.toggle(!b)
                }
            }; q(); a(window).on("tfsmartresize orientationchange", q); q = a(".header-top-widgets .header-widget").wrap("</p>").parent().html(); void 0 != q && a(".header-top-widgets #headerwrap").prepend("<div class='header-widget-full clearfix'><div class='header-widget-inner'>" + q + "</div></div>"); q = null; Themify.isoTop(".masonry.loops-wrapper,.post-filter+.loops-wrapper"); "yes" === themifyScript.shop_masonry && (a(".woocommerce.archive #content ul.products").addClass(function (a,
                c) { return c.replace(/columns-(\d)/, "grid$1") }), Themify.isoTop(".woocommerce.archive #content ul.products", { itemSelector: ".product" })); Themify.isoTop(".packery-gallery.gallery-wrapper", { layoutMode: "packery", gutter: !1, columnWidth: !1, itemSelector: ".item" }); var B = a(".back-top"); if (0 < B.length) {
                    if (!p && B.hasClass("back-top-float")) a(window).on("scroll touchstart.touchScroll touchmove.touchScroll", function () { 10 > window.scrollY ? B.addClass("back-top-hide") : B.removeClass("back-top-hide") }); B.on("click", function (b) {
                        b.preventDefault();
                        b.stopPropagation(); p ? a("#footerwrap").toggleClass("expanded") : Themify.scrollTo()
                    })
                } (function () { var b = a(".toggle-sticky-sidebar"), c = a("#sidebar"); b.on("click", function () { b.hasClass("open-toggle-sticky-sidebar") ? (b.removeClass("open-toggle-sticky-sidebar").addClass("close-toggle-sticky-sidebar"), c.addClass("open-mobile-sticky-sidebar")) : (b.removeClass("close-toggle-sticky-sidebar").addClass("open-toggle-sticky-sidebar"), c.removeClass("open-mobile-sticky-sidebar")) }) })(); Themify.isTouch && "function" !==
                    typeof a.fn.themifyDropdown && Themify.LoadAsync(themify_vars.url + "/js/themify.dropdown.js", function () { a("#main-nav").themifyDropdown() }); q = "right"; if (e.contains("header-slide-out") || e.contains("header-rightpane") || e.contains("header-minbar") || e.contains("header-leftpane")) {
                        if (e.contains("header-leftpane") || e.contains("header-minbar")) q = "left"; (e.contains("header-leftpane") || e.contains("header-rightpane")) && h(); if (!Themify.isTouch && (Q.length || e.contains("header-slide-out"))) {
                            var C = function () {
                                var b =
                                    Q; if (e.contains("header-slide-out") || e.contains("header-minbar")) b = a("#mobile-menu"); b.niceScroll(); k.on("sidemenushow.themify", function () { setTimeout(function () { b.getNiceScroll().resize() }, 200) })
                            }; "function" !== typeof a.fn.niceScroll ? Themify.LoadAsync(themifyScript.themeURI + "/js/jquery.nicescroll.min.js", C, null, null, function () { return "undefined" !== typeof a.fn.niceScroll }) : C()
                        }
                    } else h(); L.themifySideMenu({ close: "#menu-icon-close", side: q }); e.contains("header-overlay") ? (a("#mobile-menu").wrapInner('<div class="overlay-menu-sticky"><div class="overlay-menu-sticky-inner"></div></div>'),
                        a("#main-nav a").on("click", function () { e.contains("mobile-menu-visible") && a("#menu-icon").click() })) : (q = void 0 != themifyScript.m_m_expand ? " toggle-on" : "", a("#main-nav > li.menu-item-has-children > a, #main-nav > li.page_item_has_children > a").after('<span class="child-arrow' + q + '"></span>'), a("#main-nav ul li.menu-item-has-children > a, #main-nav ul li.page_item_has_children > a").after('<span class="child-arrow"></span>'), a("#main-nav .child-arrow,#main-nav a").on("click", function (b) {
                            var c = !0, d = a(this);
                            "A" === this.tagName && (("#" === d.attr("href") || 0 < d.parent(".themify_toggle_dropdown").length) && 0 < d.next(".child-arrow").length ? d = d.next(".child-arrow") : c = !1); c && (b.preventDefault(), void 0 != themifyScript.m_m_toggle && d.closest("li").siblings().find(".toggle-on").toggleClass("toggle-on"), d.toggleClass("toggle-on"))
                        })); if (p && e.contains("query-section")) {
                            var S, T, F = function (a, c) { return /touch/.test(a.type) ? (a.originalEvent || a).changedTouches[0]["page" + c] : a["page" + c] }; k.one("themify_fullpage_afterload", function () {
                                k.on("touchstart",
                                    'a[href*="#"], area[href*="#"]', function (a) { a.stopPropagation(); S = F(a, "X"); T = F(a, "Y") }); k.on("click touchend", 'a[href*="#"]:not([href="#"])', function (b) { if (!/touch/.test(b.type) || 20 > Math.abs(F(b, "X") - S) && 20 > Math.abs(F(b, "Y") - T)) { var c = a(this).prop("hash"), d = c.replace(/#/, "").split("/"); d = d[d.length - 1]; c = a(f ? ".tb_section-" + d + ":not(" + t + ")" : c); c.length && (b.preventDefault(), b = c.index(), a.fn.fullpage.moveTo(c.closest(".section-container").index() + 1, b), c.css("visibility", "visible")) } })
                            })
                        } e.contains("header-bottom") &&
                            (a("#footer").after("<a class='footer-tab' href='#'></a>"), a(".footer-tab").click(function (b) { b.preventDefault(); a("#footerwrap").toggleClass("expanded") }), a("#footer .back-top").detach().appendTo("#pagewrap")); a('a[href="#slide-cart"]').themifySideMenu({ panel: "#slide-cart", close: "#cart-icon-close" }); a(".highlight-post:odd").addClass("odd"); if (!Themify.isTouch && 1200 < Themify.w) {
                                var N = a(".header-horizontal .header-widget, .header-top-bar .header-widget, .boxed-compact .header-widget, .header-stripe .header-widget");
                                0 < N.length && (q = function () { N.niceScroll(); N = null }, "function" !== typeof a.fn.niceScroll ? Themify.LoadAsync(themifyScript.themeURI + "/js/jquery.nicescroll.min.js", q, null, null, function () { return "undefined" !== typeof a.fn.niceScroll }) : q())
                            } var G = a(".header-horizontal, .header-top-bar, .boxed-compact, .header-stripe").find(".header-widget"); 0 < G.length && (a(".header-horizontal #main-nav, .header-top-bar #main-nav, .boxed-compact #main-nav, .header-stripe #main-nav").after(a('<a href="#" class="pull-down">')),
                                a(".pull-down").on("click", function (b) { Themify.isTouch || ("function" !== typeof a.fn.niceScroll ? Themify.LoadAsync(themifyScript.themeURI + "/js/jquery.nicescroll.min.js", function () { G.getNiceScroll().resize() }, null, null, function () { return "undefined" !== typeof a.fn.niceScroll }) : G.getNiceScroll().resize()); a("#header").toggleClass("pull-down-close"); G.slideToggle("fast", function () { a("#pagewrap").css("paddingTop", a("#headerwrap").outerHeight(!0)) }); b.preventDefault() })); k.on("click", ".loops-wrapper.grid4.polaroid .post-image + .post-content, .loops-wrapper.grid3.polaroid .post-image + .post-content, .loops-wrapper.grid2.polaroid .post-image + .post-content, .loops-wrapper.grid4.overlay .post-image + .post-content, .loops-wrapper.grid3.overlay .post-image + .post-content, .loops-wrapper.grid2.overlay .post-image + .post-content, .loops-wrapper.grid4.flip .post-image + .post-content, .loops-wrapper.grid3.flip .post-image + .post-content, .loops-wrapper.grid2.flip .post-image + .post-content",
                                    function () { var b = a(this).closest(".post").find("a[data-post-permalink]"); b.attr("href") && !b.hasClass("themify_lightbox") && (window.location = b.attr("href")) }); a(".loops-wrapper.slider").each(function (b) { var c = a(this), d = c.prop("id"); d || (d = "loops-wrapper-" + b, c.attr("id", d)); b = c.addClass("slideshow-wrap").find(".slideshow"); 0 === b.length ? c.wrapInner('<div class="slideshow" data-id="' + d + '" data-autoplay="off" data-speed="1000" data-effect="scroll" data-visible="3" />') : b.attr("data-id", d) }); var D = a(".slideshow:not(body)");
        0 < D.length && (a.fn.carouFredSel ? (P.createCarousel(D), D = null) : Themify.LoadAsync(themify_vars.url + "/js/carousel.min.js", function () { P.createCarousel(D); D = null }, null, null, function () { return "undefined" !== typeof a.fn.carouFredSel })); var H = a("#headerwrap"); k.on("announcement_bar_position announcement_bar_scroll_on_after", function (b, c) { a("#pagewrap").css("paddingTop", Math.floor(H.outerHeight(!0))) }).on("announcement_bar_position", function (b, c) {
            a(this).hasClass("header-minbar") && (b = H.width(), c.css({
                left: b - Math.abs(parseInt(H.css("left"),
                    10)), right: b - Math.abs(parseInt(H.css("right"), 10))
            }))
        }); var U = null, I = null, W = e.contains("header-top-bar") || e.contains("header-horizontal") || e.contains("header-top-widgets") || e.contains("boxed-compact") || e.contains("header-stripe") || e.contains("header-magazine"); a(window).on("tfsmartresize", function (b) {
            if (1200 > b.w && !Themify.isTouch && null !== document.querySelector(".header-horizontal .header-widget, .header-top-bar .header-widget, .boxed-compact .header-widget, .header-stripe .header-widget")) {
                var c =
                    a(".header-horizontal .header-widget, .header-top-bar .header-widget, .boxed-compact .header-widget, .header-stripe .header-widget"); "function" !== typeof a.fn.niceScroll ? Themify.LoadAsync(themifyScript.themeURI + "/js/jquery.nicescroll.min.js", function () { c.getNiceScroll().remove() }, null, null, function () { return "undefined" !== typeof a.fn.niceScroll }) : c.getNiceScroll().remove(); c.attr("style", "")
            } if (!0 === W) {
                var d = a("#main-nav li.has-mega-column > ul,#main-nav li.has-mega-sub-menu > .mega-sub-menu"); b.w > tf_mobile_menu_trigger_point ?
                    d.css("width", a("#header").width()) : d.removeAttr("style")
            } null === U && null !== I && null !== document.querySelector(".mobile_menu_active") && (U = !0, I())
        }); a(".header-overlay #main-nav li.menu-item-has-children > a, .header-overlay #main-nav li.page_item_has_children > a").after("<span class='child-arrow'></span>"); a(".header-overlay #main-nav li.menu-item-has-children > .child-arrow, .header-overlay #main-nav li.page_item_has_children > .child-arrow").on("click", function () {
            a(this).toggleClass("toggle-on").next("div, ul").toggle("fast");
            return !0
        }); !Themify.isTouch && null !== document.querySelector(".mobile_menu_active") && e.contains("header-overlay") && (I = function () { var b = function () { var b = a("#mobile-menu"); b.niceScroll(); k.on("sidemenushow.themify", function () { setTimeout(function () { b.getNiceScroll().resize() }, 200) }) }; "function" !== typeof a.fn.niceScroll ? Themify.LoadAsync(themifyScript.themeURI + "/js/jquery.nicescroll.min.js", b, null, null, function () { return "undefined" !== typeof a.fn.niceScroll }) : b() }, I()); p && "undefined" === typeof a.fn.fullpage &&
            Themify.LoadAsync(themifyScript.themeURI + "/js/jquery.fullpage.extensions.min.js", function () { k.triggerHandler("themify_fullpage_afterload") }, null, null, function () { return "undefined" !== typeof a.fn.fullpage }); if (p && k.hasClass("query-section")) {
                themifyScript.hash = window.location.hash.replace("#", "").replace("!/", ""); "undefined" !== typeof a.fn.themifyScrollHighlight && (k.on("scrollhighlight.themify", function (b, c) { "undefined" != typeof c && "" != c && a("#fp-nav").find("li").eq(a(".tb_section-" + c.replace("#", "")).index()).find("a").trigger("click") }),
                    a(window).triggerHandler("scroll")); var X = setInterval(function () { "undefined" !== typeof ThemifyBuilderModuleJs && (clearInterval(X), ThemifyBuilderModuleJs.wowInit(), A = ThemifyBuilderModuleJs.wowInit, ThemifyBuilderModuleJs.wowInit = function () { }) }, 100); k.one("themify_fullpage_afterload", function () {
                        var a = setInterval(function () {
                            "undefined" !== typeof ThemifyBuilderModuleJs && "undefined" !== typeof A && null !== ThemifyBuilderModuleJs.wow ? (clearInterval(a), ThemifyBuilderModuleJs.wow.stop(), A(), setTimeout(u, 100)) : (clearInterval(a),
                                u())
                        }, 100)
                    }); Themify.is_builder_active && "undefined" === typeof a.fn.fullpage && Themify.LoadAsync(themifyScript.themeURI + "/js/jquery.fullpage.extensions.min.js", function () { k.trigger("themify_fullpage_afterload"); a.fn.fullpage.destroy("all") }, null, null, function () { return "undefined" !== typeof a.fn.fullpage }); k.on("themify_onepage_afterload", function (b, c) {
                        var d = a(t + ".active", a(v)).find(".module_row_slide.active"); tbLocalScript && tbLocalScript.animationInviewSelectors && "undefined" !== typeof ThemifyBuilderModuleJs &&
                            ThemifyBuilderModuleJs.wow && a(tbLocalScript.animationInviewSelectors).each(function (b, c) { a(c, d).each(function () { ThemifyBuilderModuleJs.wow.show(this) }) })
                    }).on("themify_onepage_afterload themify_onepage_after_render", function (b, c, d) { a.fn.waypoint && Waypoint.refreshAll(); "undefined" !== typeof ThemifyBuilderModuleJs && null !== ThemifyBuilderModuleJs.wow && "boolean" === typeof ThemifyBuilderModuleJs.wow.scrollHandler() && ThemifyBuilderModuleJs.wow.scrollHandler() })
            } a(".loops-wrapper.overlay .post").each(function () { a(this).find(".post-image").insertBefore(a(this).find(".post-content")) });
        null !== document.querySelector(".has-mega-sub-menu") && (q = function () { a(".has-mega-sub-menu").each(function () { a(this).find("> ul").removeAttr("class").wrap('<div class="mega-sub-menu sub-menu" />').after('<div class="mega-menu-posts" />').find("li.menu-item-type-taxonomy").addClass("mega-link"); a(this).ThemifyMegaMenu({ events: themifyScript.events }) }) }, "function" !== typeof a.fn.ThemifyMegaMenu ? Themify.LoadAsync(themifyScript.themeURI + "/themify/megamenu/js/themify.mega-menu.js", q) : q()); a(window).on("tfsmartresize",
            function (b) {
                e.contains("header-menu-split") && (a("#menu-icon").is(":visible") ? 0 == a(".header-bar").find("#site-logo").length && a("#site-logo").prependTo(".header-bar") : 0 === a(".themify-logo-menu-item").find("#site-logo").length && a(".themify-logo-menu-item").append(a(".header-bar").find("#site-logo"))); b.w > tf_mobile_menu_trigger_point && (e.contains("header-magazine") && a("#headerwrap").css({ paddingBottom: a(".navbar-wrapper").outerHeight() }), e.contains("header-classic") && (a("#headerwrap").css({ paddingBottom: a(".navbar-wrapper").outerHeight() }),
                    0 == a(".navbar-wrapper").find(".navbar-wrapper-inner").length && a(".navbar-wrapper").wrapInner('<div class="navbar-wrapper-inner"></div>')))
            }).one("load", function () {
                function b() { var b = !0, c = d.hasClass("fixed-header"); c && d.removeClass("fixed-header"); e.each(function (g) { var e = a(this).data("fullwidthvideo"); e && (g = { url: e, doLoop: !0, ambient: !0, id: g }, b && c && (b = !1, g.onload = function () { d.addClass("fixed-header") }), a(this).ThemifyBgVideo(g)) }) } var c = Themify.body; themifyScript.infiniteEnable && (c.hasClass("woocommerce") &&
                    c.hasClass("archive") ? y(a("#content ul.products"), "#content .product") : y(a("#loops-wrapper"), "#loops-wrapper .post")); var d = a("#headerwrap"), e = d.find("[data-fullwidthvideo]"); d.data("fullwidthvideo") && (e = e.add(d)); 0 < e.length && (Themify.isTouch ? e.each(function (b) {
                        var c = a(this).data("fullwidthvideo"); c && 0 <= c.indexOf(".mp4") && 0 <= c.indexOf(window.location.hostname) && (a(this).addClass("themify-responsive-video-background"), a('<div class="header-video-wrap"><video class="responsive-video header-video video-' +
                            b + '" muted="true" autoplay="true" loop="true" playsinline="true" ><source src="' + c + '" type="video/mp4"></video></div>').prependTo(a(this)))
                    }) : "undefined" === typeof a.fn.ThemifyBgVideo ? Themify.LoadAsync(themify_vars.url + "/js/bigvideo.js", b, null, null, function () { return "undefined" !== typeof a.fn.ThemifyBgVideo }) : b()); a("#main-nav li:has(ul), #footer-nav li:has(ul)").on("mouseenter dropdown_open", function (b) {
                        window.clearTimeout(a(this).data("edge_menu_t")); var c = a("ul:first", this); b = c.offset().left; c = c.width();
                        var d = a(window).width(); b + c <= d || a(this).addClass("edge")
                    }).on("mouseleave dropdown_close", function () { var b = a(this), c = setTimeout(function () { b.removeClass("edge") }, 300); b.data("edge_menu_t", c) }); p && c.hasClass("query-section") && (c.on("themify_onepage_after_render", function () {
                        a.each(tbLocalScript.animationInviewSelectors, function (b, c) { a(c).css("visibility", "hidden") }); window.location.hash && setTimeout(function () {
                            var b = themifyScript.hash; b = -1 != b.indexOf("/") ? b.substring(0, b.indexOf("/")) : b; if ("" != b && "#" !=
                                b) { var c = f ? a(".tb_section-" + b) : a("#" + b); 0 < c.length && (a.fn.fullpage.moveTo(c.closest(".section-container").index() + 1, c.index()), "undefined" !== typeof ThemifyBuilderModuleJs && ThemifyBuilderModuleJs.wow && a(tbLocalScript.animationInviewSelectors).each(function (b, d) { a(d, c).addBack().each(function () { ThemifyBuilderModuleJs.wow.show(this) }) })) }
                        }, 1500)
                    }), a(".module_row").css("visibility", "visible")); a(document).on("click", ".remove-item-js", function (b) {
                        b.preventDefault(); var d = a(this); b = {
                            action: "theme_delete_cart",
                            remove_item: d.attr("data-product-key")
                        }; var e = c.find(".ajax_add_to_cart "), g = d.parent().find(".product-title a").attr("href"); d.addClass("themify_spinner"); a.post(woocommerce_params.ajax_url, b, function (b) {
                            var f = b.fragments; b = b.cart_hash; 0 === d.parent().find(".added_to_cart").length && d.addClass("added"); f && (a.each(f, function (b, c) { a(b).addClass("updating").replaceWith(c) }), a(f["#shopdock-ultra"]).find(".cart-total").length || a("#cart-icon-close").trigger("click")); e.length && e.each(function () {
                                a(this).hasClass("added") &&
                                a(this).closest(".post-content").find('[href="' + g + '"]').length && a(this).removeClass("added").siblings(".added_to_cart").remove()
                            }); c.triggerHandler("removed_from_cart", [f, b]); d.removeClass("themify_spinner")
                        })
                    })
            }); q = function () {
                var b, c = a("#footerwrap"), d = c.find("#footer"), e = c.innerHeight(), f = a("#body"), h = function () { e = c.innerHeight(); !m && c.parent().css("padding-bottom", e) }, l = function () {
                    var a = f.get(0).getBoundingClientRect(), b = window.innerHeight - a.bottom; c.toggleClass("active-revealing", 0 > a.top); 0 <=
                        b && b <= e ? d.css("opacity", b / e + .2) : b > e && d.css("opacity", 1)
                }; if (c.length || f.length) { var k = f.parents(); k.length && f.add(k).each(function () { if (!b) { var c = a(this).css("background-color"); c && "transparent" !== c && "rgba(0, 0, 0, 0)" !== c && (b = c) } }); f.css("background-color", b || "#ffffff"); var m = "sticky" === c.css("position"); Themify.body.toggleClass("no-css-sticky", !m); h(); l(); a(window).on("tfsmartresize", h).on("scroll", l) }
            }; Themify.body.hasClass("revealing-footer") && (C = a(".back-top.back-top-float"), q(), C.length && a("#footerwrap").before(C));
        a("input, textarea").on("focus", function () { a(this).parents("#commentform p").addClass("focused") }).on("blur", function () { "" == a(this).val() ? (a(this).removeClass("filled"), a(this).parents("#commentform p").removeClass("focused")) : a(this).addClass("filled") }); k.on("added_to_cart", function (b) { b = a(".cart-icon"); b.hasClass("empty-cart") && b.removeClass("empty-cart") }).on("removed_from_cart", function (b) { b = a(".cart-icon"); !b.hasClass("empty-cart") && 0 >= parseInt(a("#cart-icon span").text()) && b.addClass("empty-cart") })
    });
    a(window).one("load", function () {
        var m = a("#search-lightbox-wrap"); if (0 < m.length) {
            var x = [], u, y = m.find("#searchform input"), h = m.find(".search-results-wrap"); a(".search-button, #close-search-box").on("click", function (f) {
                f.preventDefault(); y.val().length ? m.addClass("search-active") : m.removeClass("search-active"); a(this).hasClass("search-button") ? (m.fadeIn(function () { y.focus(); Themify.body.css("overflow-y", "hidden") }), Themify.body.addClass("searchform-slidedown")) : (u && u.abort(), m.fadeOut(), Themify.body.css("overflow-y",
                    "visible").removeClass("searchform-slidedown"))
            }); h.on("click", ".search-option-tab a", function (f) { f.preventDefault(); f = a(this).attr("href").replace("#", ""); "all" === f ? f = "item" : h.find(".result-item").stop().fadeOut(); 0 < a("#result-link-" + f).length && (a(".view-all-button").hide(), a("#result-link-" + f).show()); h.find(".result-" + f).stop().fadeIn(); a(this).closest("li").addClass("active").siblings("li").removeClass("active") }); y.prop("autocomplete", "off").on("keyup", function (f) {
                function p(a) {
                    0 > a && (a = 0); h.find(".search-option-tab li").eq(a).children("a").trigger("click");
                    h.show()
                } 0 < y.val().length ? m.addClass("search-active") : m.removeClass("search-active"); if (48 <= f.keyCode && 57 >= f.keyCode || 65 <= f.keyCode && 90 >= f.keyCode || 8 === f.keyCode || 229 === f.keyCode) {
                    var t = a.trim(a(this).val()); t ? x[t] ? (f = h.find(".search-option-tab li.active").index(), h.hide().html(x[t]), p(f)) : setTimeout(function () {
                        t = a.trim(y.val()); u && u.abort(); t ? u = a.ajax({
                            url: themifyScript.ajax_url, type: "POST", data: { action: "themify_search_autocomplete", term: t }, beforeSend: function () { m.addClass("themify-loading"); h.html('<span class="themify_spinner"></span>') },
                            complete: function () { m.removeClass("themify-loading") }, success: function (a) { if (!t) h.html(""); else if (a) { var f = h.find(".search-option-tab li.active").index(); h.hide().html(a); p(f); h.find(".search-option-tab li.active"); x[t] = a } }
                        }) : h.html("")
                    }, 100) : h.html("")
                }
            })
        } if ("1" === themifyScript.pageLoaderEffect || Themify.body.hasClass("full-section-scrolling")) Themify.body.addClass("ready-view").removeClass("hidden-view"), a(".section_loader").fadeOut(500, function () {
            "undefined" !== typeof ThemifyBuilderModuleJs && "undefined" !==
                typeof ThemifyBuilderModuleJs.wowInit && ThemifyBuilderModuleJs.wowInit(!1, !0)
        }); themifyScript.onBrowseAway = function (f) { "BODY" === f.target.activeElement.tagName || "tb_toolbar" == a(f.target.activeElement).attr("id") || a(f.target.activeElement).closest("#tb_toolbar").length || (Themify.body.hasClass("ready-view") ? Themify.body.addClass("hidden-view").removeClass("ready-view") : Themify.body.addClass("hidden-view")) }; ("1" === themifyScript.pageLoaderEffect || Themify.body.hasClass("full-section-scrolling")) && window.addEventListener("beforeunload",
            themifyScript.onBrowseAway)
    })
})(jQuery);