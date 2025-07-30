"use client";
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var server_cookies_1 = require("../../../lib/server-cookies");
var global_1 = require("@/global");
var api_bridge_1 = require("@/lib/api-bridge");
var alert_1 = require("@/components/alert");
var image_1 = require("next/image");
var search_1 = require("./search");
var MenuPage = function (_a) {
    var searchParams = _a.searchParams;
    return __awaiter(void 0, void 0, void 0, function () {
        var _b, menu, setMenu, _c, loading, setLoading, category;
        return __generator(this, function (_d) {
            _b = react_1.useState([]), menu = _b[0], setMenu = _b[1];
            _c = react_1.useState(true), loading = _c[0], setLoading = _c[1];
            react_1.useEffect(function () {
                var fetchMenu = function () { return __awaiter(void 0, void 0, void 0, function () {
                    var TOKEN, search, url, data, error_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 3, 4, 5]);
                                return [4 /*yield*/, server_cookies_1.getCookies("token")];
                            case 1:
                                TOKEN = _a.sent();
                                search = searchParams.search ? searchParams.search.toString() : "";
                                url = global_1.BASE_API_URL + "/menu?search=" + search;
                                return [4 /*yield*/, api_bridge_1.get(url, TOKEN)];
                            case 2:
                                data = (_a.sent()).data;
                                if (data === null || data === void 0 ? void 0 : data.status) {
                                    setMenu(data.data);
                                }
                                return [3 /*break*/, 5];
                            case 3:
                                error_1 = _a.sent();
                                console.log(error_1);
                                return [3 /*break*/, 5];
                            case 4:
                                setLoading(false);
                                return [7 /*endfinally*/];
                            case 5: return [2 /*return*/];
                        }
                    });
                }); };
                fetchMenu();
            }, [searchParams]);
            category = function (cat) {
                if (cat === "TANK") {
                    return (React.createElement("span", { className: "bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300" }, "Tank"));
                }
                if (cat === "Jet") {
                    return (React.createElement("span", { className: "bg-indigo-100 text-indigo-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300" }, "Jet"));
                }
                return (React.createElement("span", { className: "bg-purple-100 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300" }, "Drink"));
            };
            return [2 /*return*/, (React.createElement("div", null,
                    React.createElement("div", { className: "m-2 bg-white rounded-lg p-3 border-t-4 border-t-primary shadow-md" },
                        React.createElement("h4", { className: "text-xl font-bold mb-2 text-gray-500" }, "Menu Data"),
                        React.createElement("p", { className: "text-sm text-secondary mb-4 text-black" }, "This page displays menu data, allowing menus to view details, search, and manage menu items by adding, editing, or deleting them."),
                        React.createElement("div", { className: "flex justify-between items-center mb-4" },
                            React.createElement("div", { className: "flex items-center w-full max-w-md flex-grow" },
                                React.createElement(search_1["default"], { url: "/manager/menu", search: Array.isArray(searchParams.search) ? searchParams.search.join(',') : searchParams.search }))),
                        loading ? (React.createElement("p", null, "Loading...")) : menu.length === 0 ? (React.createElement(alert_1.AlertInfo, { title: "informasi" }, "No data Available")) : (React.createElement("div", { className: "m-2" }, menu.map(function (data, index) { return (React.createElement("div", { key: "keyPrestasi" + index, className: "flex flex-wrap shadow m-2" },
                            React.createElement("div", { className: "w-full md:w-1/12 p-2" },
                                React.createElement("small", { className: "text-sm font-bold text-primary" }, "Picture"),
                                React.createElement("br", null),
                                React.createElement(image_1["default"], { width: 40, height: 40, src: global_1.BASE_IMAGE_MENU + "/" + data.picture, className: "rounded-sm overflow-hidden", alt: "preview", unoptimized: true })),
                            React.createElement("div", { className: "w-full md:w-2/12 p-2" },
                                React.createElement("small", { className: "text-sm font-bold text-primary" }, "Name"),
                                " ",
                                React.createElement("br", null),
                                data.name),
                            React.createElement("div", { className: "w-full md:w-1/12 p-2" },
                                React.createElement("small", { className: "text-sm font-bold text-primary" }, "Price"),
                                " ",
                                React.createElement("br", null),
                                data.price),
                            React.createElement("div", { className: "w-full md:w-5/12 p-2" },
                                React.createElement("small", { className: "text-sm font-bold text-primary" }, "Description"),
                                " ",
                                React.createElement("br", null),
                                data.description),
                            React.createElement("div", { className: "w-full md:w-1/12 p-2" },
                                React.createElement("small", { className: "text-sm font-bold text-primary" }, "Category"),
                                " ",
                                React.createElement("br", null),
                                category(data.category)),
                            React.createElement("div", { className: "w-full md:w-2/12 p-2" },
                                React.createElement("small", { className: "text-sm font-bold text-primary" }, "Action"),
                                React.createElement("br", null)))); }))))))];
        });
    });
};
exports["default"] = MenuPage;
