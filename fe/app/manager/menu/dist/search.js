"use client";
"use strict";
exports.__esModule = true;
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var Search = function (_a) {
    var url = _a.url, search = _a.search;
    var _b = react_1.useState(search !== null && search !== void 0 ? search : ""), keyword = _b[0], setKeyword = _b[1];
    var router = navigation_1.useRouter();
    var handleSearch = function (e) {
        e.preventDefault();
        router.push(url + "?search=" + keyword);
    };
    return (React.createElement("input", { type: "text", id: "keyword", value: keyword, onChange: function (e) { return setKeyword(e.target.value); }, className: "text-sm w-full rounded-md p-2 bg-slate-50 border border-secondary focus:border-primary focus:outline-none text-black", placeholder: "Search", onKeyUp: handleSearch }));
};
exports["default"] = Search;
