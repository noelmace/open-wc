!function() {
  function e(e, o) {
    return new Promise((function(t, n) {
      document.head.appendChild(Object.assign(
          document.createElement("script"), {src : e, onload : t, onerror : n},
          o ? {type : "module"} : void 0))
    }))
  }
  var o = [];
  function t() {
    "noModule" in HTMLScriptElement.prototype
        ? e("./app.3a93364ee90208c7ab18.js")
        : e("./legacy/app.dc126e48488aa981a60a.js")
  }
  (!("attachShadow" in Element.prototype) ||
   !("getRootNode" in Element.prototype) ||
   window.ShadyDOM && window.ShadyDOM.force) &&
      o.push(
          e("polyfills/webcomponents.d67d6757b8cd44bc35b021ee0b71d197.js", !1)),
      !("noModule" in HTMLScriptElement.prototype) &&
          "getRootNode" in Element.prototype &&
          o.push(e(
              "polyfills/custom-elements-es5-adapter.84b300ee818dce8b351c7cc7c100bcf7.js",
              !1)),
      o.length ? Promise.all(o).then(t) : t()
}();