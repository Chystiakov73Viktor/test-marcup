!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){r[e]=t},t.parcelRequired7c6=a);var c=a("bpxeT"),i=a("2TvXO"),o=a("bgKxi"),u=(0,(o=a("bgKxi")).getrefs)(),s={},l=document.getElementById("fetchButton"),d=document.getElementById("error-message"),f={currentPage:1},p={query:""};function g(){return h.apply(this,arguments)}function h(){return(h=e(c)(e(i).mark((function t(){var n,r;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(o.BASE_URL,"cocktails/search/"),r={f:p.query,page:f.currentPage},(0,o.clearResults)(u.listCoctails),e.next=5,(0,o.fetchData)(n,r,s,f,"",p.query,u,o.renderCardsCocktails,u.listCoctails);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}g(),document.getElementById("pagination-elements").addEventListener("click",(function(e){return(0,o.handlePaginationClick)(e,g,f)})),l.addEventListener("click",e(c)(e(i).mark((function t(){return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.handleFetchButtonClick)(g,p,f,d,"cocktails");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),t)}))))}();
//# sourceMappingURL=cocktails.725e0f4a.js.map