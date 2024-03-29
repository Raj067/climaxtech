'use strict'; (function (c) {
    function d(a, b) { this.element = a; this.settings = c.extend({}, e, b); this._defaults = e; this.panelVisible = !1; this.panelCleanName = this.settings.panel.replace(/#|\.|\s/g, function (a) { return { "#": "", ".": "", " ": "-" }[a] }); this.init() } var e = { panel: "#mobile-menu", close: "", side: "right", speed: 250 }; d.prototype = {
        init: function () {
            var a = this; c(this.element).on("click", function (b) { b.preventDefault(); a.panelVisible ? a.hidePanel() : a.showPanel() }); if ("" !== a.settings.close) c(a.settings.close).on("click",
                function (b) { b.preventDefault(); a.hidePanel() }); Themify.body.addClass("sidemenu-active").on("scrollhighlightstart.themify", function () { setTimeout(function () { a.panelVisible && a.hidePanel() }, 50) }).on("sidemenushow.themify", function (b, c, d) { c !== a.settings.panel && a.hidePanel(d) })
        }, showPanel: function () {
            var a = this.settings.panel; c(a).removeClass("sidemenu-off").addClass("sidemenu-on").one("transitionend", function () { c(this).trigger("sidemenuaftershow.themify", [a]) }); Themify.body.addClass(this.panelCleanName +
                "-visible sidemenu-" + this.settings.side).triggerHandler("sidemenushow.themify", [a, this.settings.side]); this.panelVisible = !0
        }, hidePanel: function (a) { var b = this.settings.panel, d = this.panelCleanName + "-visible"; c(b).removeClass("sidemenu-on").addClass("sidemenu-off"); a !== this.settings.side && (d += " sidemenu-" + this.settings.side); Themify.body.removeClass(d).triggerHandler("sidemenuhide.themify", [b]); this.panelVisible = !1 }
    }; c.fn.themifySideMenu = function (a) {
        if ("string" === typeof a) {
            var b = c(this).data("SideMenu");
            b && ("show" == a && b.showPanel(), "hide" == a && b.hidePanel())
        } else return this.each(function () { c.data(this, "SideMenu") || c.data(this, "SideMenu", new d(this, a)) })
    }
})(jQuery);