"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var global_1 = require("@/global");
var api_bridge_1 = require("../../../lib/api-bridge");
var client_cookies_1 = require("@/lib/client-cookies");
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var react_toastify_1 = require("react-toastify");
var button_1 = require("@/components/button");
var inputComponents_1 = require("@/components/inputComponents");
var modal_1 = require("@/components/modal");
var select_1 = require("@/components/select");
var fileInput_1 = require("@/components/fileInput");
var AddMenu = function () {
    var _a = react_1.useState(false), isShow = _a[0], setIsShow = _a[1];
    var _b = react_1.useState({
        id: 0,
        uuid: "", name: "",
        price: 0,
        description: "",
        category: "", picture: "", createdAt: "", updatedAt: ""
    }), menu = _b[0], setMenu = _b[1];
    var router = navigation_1.useRouter();
    var TOKEN = client_cookies_1.getCookie("token") || "";
    var _c = react_1.useState(null), file = _c[0], setFile = _c[1];
    var formRef = react_1.useRef(null);
    var openModal = function () {
        setMenu({
            id: 0,
            uuid: "", name: "",
            price: 0,
            description: "",
            category: "", picture: "", createdAt: "", updatedAt: ""
        });
        setIsShow(true);
        if (formRef.current)
            formRef.current.reset();
    };
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var url, name, price, description, category, payload, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    e.preventDefault();
                    url = global_1.BASE_API_URL + "/menu";
                    name = menu.name, price = menu.price, description = menu.description, category = menu.category;
                    payload = new FormData();
                    payload.append("name", name || "");
                    payload.append("price", price !== undefined ? price.toString() : "0");
                    payload.append("category", category || "");
                    payload.append("description", description || "");
                    if (file !== null)
                        payload.append("picture", file || "");
                    return [4 /*yield*/, api_bridge_1.post(url, payload, TOKEN)];
                case 1:
                    data = (_a.sent()).data;
                    if (data === null || data === void 0 ? void 0 : data.status) {
                        setIsShow(false);
                        react_toastify_1.toast(data === null || data === void 0 ? void 0 : data.message, { hideProgressBar: true, containerId: "toastMenu", type: "success" });
                        setTimeout(function () { return router.refresh(); }, 1000);
                    }
                    else {
                        react_toastify_1.toast(data === null || data === void 0 ? void 0 : data.message, { hideProgressBar: true, containerId: "toastMenu", type: "warning" });
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.log(error_1);
                    react_toastify_1.toast("Something Wrong", { hideProgressBar: true, containerId: "toastMenu", type: "error" });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", null,
        React.createElement(button_1.ButtonSuccess, { type: "button", onClick: function () { return openModal(); } },
            React.createElement("div", { className: "flex items-center gap-2" },
                React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "size-6" },
                    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" })),
                "Add Menu")),
        React.createElement(modal_1["default"], { isShow: isShow, onClose: function (state) { return setIsShow(state); } },
            React.createElement("form", { onSubmit: handleSubmit },
                React.createElement("div", { className: "sticky top-0 bg-white px-5 pt-5 pb-3 shadow" },
                    React.createElement("div", { className: "w-full flex items-center" },
                        React.createElement("div", { className: "flex flex-col" },
                            React.createElement("strong", { className: "font-bold text-2xl" }, "Create New Menu"),
                            React.createElement("small", { className: "text-slate-400 text-sm" }, "Managers can create menu items on this page.")),
                        React.createElement("div", { className: "ml-auto" },
                            React.createElement("button", { type: "button", className: "text-slate-400", onClick: function () { return setIsShow(false); } },
                                React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6 h-6" },
                                    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" })))))),
                React.createElement("div", { className: "p-5" },
                    React.createElement(inputComponents_1.InputGroupComponent, { className: "text-black", id: "name", type: "text", value: menu.name, onChange: function (val) { return setMenu(__assign(__assign({}, menu), { name: val })); }, required: true, label: "Name" }),
                    React.createElement(inputComponents_1.InputGroupComponent, { className: "text-black", id: "price", type: "number", value: menu.price.toString(), onChange: function (val) { return setMenu(__assign(__assign({}, menu), { price: Number(val) })); }, required: true, label: "Price" }),
                    React.createElement(inputComponents_1.InputGroupComponent, { className: "text-black", id: "description", type: "text", value: menu.description, onChange: function (val) { return setMenu(__assign(__assign({}, menu), { description: val })); }, required: true, label: "Description" }),
                    React.createElement(select_1["default"], { className: "text-black", id: "category", value: menu.category, label: "Category", required: true, onChange: function (val) { return setMenu(__assign(__assign({}, menu), { category: val })); } },
                        React.createElement("option", { value: "" }, "--- Select Category ---"),
                        React.createElement("option", { value: "FOOD" }, "Food"),
                        React.createElement("option", { value: "SNACK" }, "Snack"),
                        React.createElement("option", { value: "DRINK" }, "Drink")),
                    React.createElement(fileInput_1["default"], { acceptTypes: ["application/pdf", "image/png", "image/jpeg", "image/jpg"], id: "profile_picture", label: "Upload Picture (Max 2MB, PDF/JPG/JPEG/PNG)", onChange: function (f) { return setFile(f); }, required: false })),
                React.createElement("div", { className: "w-full p-5 flex rounded-b-2xl shadow" },
                    React.createElement("div", { className: "flex ml-auto gap-2" },
                        React.createElement(button_1.ButtonDanger, { type: "button", onClick: function () { return setIsShow(false); } }, "Cancel"),
                        React.createElement(button_1.ButtonPrimary, { type: "submit" }, "Save")))))));
};
exports["default"] = AddMenu;
