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
var global_1 = require("@/global");
var client_cookies_1 = require("../../lib/client-cookies");
var axios_1 = require("axios");
var image_1 = require("next/image");
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var react_toastify_1 = require("react-toastify");
var LoginPage = function () {
    var _a = react_1.useState(""), email = _a[0], setEmail = _a[1];
    var _b = react_1.useState(""), password = _b[0], setPassword = _b[1];
    var _c = react_1.useState(false), showPassword = _c[0], setShowPassword = _c[1];
    var router = navigation_1.useRouter();
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var url, payload, data, role, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    e.preventDefault();
                    url = global_1.BASE_API_URL + "/user/login";
                    payload = JSON.stringify({ email: email, password: password });
                    return [4 /*yield*/, axios_1["default"].post(url, payload, {
                            headers: { "Content-Type": "application/json" }
                        })];
                case 1:
                    data = (_a.sent()).data;
                    if (data.status == true) {
                        react_toastify_1.toast(data.message, { hideProgressBar: true, containerId: "toastLogin", type: "success", autoClose: 2000 });
                        client_cookies_1.storeCookie("token", data.token);
                        client_cookies_1.storeCookie("id", data.data.id);
                        client_cookies_1.storeCookie("name", data.data.name);
                        client_cookies_1.storeCookie("role", data.data.role);
                        role = data.data.role;
                        if (role === "MANAGER")
                            setTimeout(function () { return router.replace("/manager/dashboard"); }, 1000);
                        else if (role === "CASHIER")
                            setTimeout(function () { return router.replace("/cashier/dashboard"); }, 1000);
                    }
                    else
                        react_toastify_1.toast(data.message, { hideProgressBar: true, containerId: "toastLogin", type: "warning" });
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.log(error_1);
                    react_toastify_1.toast("Something wrong", { hideProgressBar: true, containerId: "toastLogin", type: "error" });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", { className: "w-screen h-screen bg-login bg-cover" },
        React.createElement(react_toastify_1.ToastContainer, { containerId: "toastLogin" }),
        React.createElement("div", { className: "w-full h-full bg-backdrop-login flex justify-center items-center p-5" },
            React.createElement("div", { className: "backdrop-blur-lg w-full md:w-6/12 lg:w-4/12 min-h-[600px] border rounded-xl bg- p-5 flex flex-col items-center relative" },
                React.createElement("div", { className: "absolute bottom-0 left-0 w-full py-2 text-center" },
                    React.createElement("small", { className: "text-slate-600" }, "Copyrihgt @2024")),
                React.createElement(image_1["default"], { alt: "moklet-app", width: 150, height: 100, src: "/image/restaurant.jpg", className: "h-auto my-10" }),
                React.createElement("h4", { className: "text-2xl uppercase font-semibold text-primary mb-4" }, "EWEQER"),
                React.createElement("span", { className: "text-sm text-slate-500 font-medium text-center" }, "Welcome Manager and ADMIN"),
                React.createElement("form", { onSubmit: handleSubmit, className: "w-full my-10" },
                    React.createElement("div", { className: "flex w-full my-4" },
                        React.createElement("div", { className: "bg-white rounded-l-md p-3" },
                            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "black", className: "size-4" },
                                React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" }))),
                        React.createElement("input", { type: "text", className: "border p-2 grow rounded-r-md focus:outline-none focus:ring-primary focus:border-primary text-black", value: email, onChange: function (e) { return setEmail(e.target.value); }, placeholder: "Email", id: "email" })),
                    React.createElement("div", { className: "flex w-full my-4" },
                        React.createElement("div", { className: "bg-white rounded-l-md p-3" },
                            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "black", className: "size-4" },
                                React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" }))),
                        React.createElement("input", { type: showPassword ? "text" : "password", className: "border p-2 grow focus:outline-none focus:ring-primary focus:border-primary text-black", value: password, onChange: function (e) { return setPassword(e.target.value); }, placeholder: "Password", id: "password-industri-app" }),
                        React.createElement("div", { className: "cursor-pointer bg-white rounded-r-md p-3", onClick: function () { return setShowPassword(!showPassword); } }, showPassword ?
                            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "black", className: "size-4" },
                                React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" })) :
                            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "black", className: "size-4" },
                                React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" }),
                                React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" })))),
                    React.createElement("div", { className: "my-10" },
                        React.createElement("button", { type: "submit", className: "bg-gray-500 hover:bg-primary uppercase w-full p-2 rounded-md text-white" }, "Login")))))));
};
exports["default"] = LoginPage;
