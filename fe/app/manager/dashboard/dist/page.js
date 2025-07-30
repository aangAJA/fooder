'use client';
"use strict";
exports.__esModule = true;
var fa_1 = require("react-icons/fa");
var link_1 = require("next/link");
var DashboardPage = function () {
    return (React.createElement("div", { style: {
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxu9ZlrRifXyJa1uF5dguewXvOGc1F5LrulQ&s')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh',
            position: 'relative'
        } },
        React.createElement("main", { className: "p-6 text-white" },
            React.createElement("h1", { className: "text-3xl font-bold mb-8" },
                React.createElement("b", null, "Buzzzz")),
            React.createElement("div", { className: "grid grid-cols-4 md:grid-cols-6 lg:grid-cols-4 gap-6" },
                React.createElement("div", { className: "mb-8" },
                    React.createElement("div", { className: "bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-all" },
                        React.createElement("div", { className: "flex items-center justify-between" },
                            React.createElement("div", null,
                                React.createElement("p", { className: "text-gray-200" }, "Total Users"),
                                React.createElement("h3", { className: "text-2xl font-bold" }, "1,234")),
                            React.createElement(fa_1.FaUsers, { className: "text-4xl text-blue-400" }))),
                    React.createElement("div", { className: "bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-all" },
                        React.createElement("div", { className: "flex items-center justify-between" },
                            React.createElement("div", null,
                                React.createElement("p", { className: "text-gray-200" }, "Total Orders"),
                                React.createElement("h3", { className: "text-2xl font-bold" }, "567")),
                            React.createElement(fa_1.FaClipboardList, { className: "text-4xl text-green-400" }))),
                    React.createElement("div", { className: "bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-all" },
                        React.createElement("div", { className: "flex items-center justify-between" },
                            React.createElement("div", null,
                                React.createElement("p", { className: "text-gray-200" }, "Revenue"),
                                React.createElement("h3", { className: "text-2xl font-bold" }, "$89,234")),
                            React.createElement(fa_1.FaMoneyBillWave, { className: "text-4xl text-yellow-400" }))),
                    React.createElement("div", { className: "bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-all" },
                        React.createElement("div", { className: "flex items-center justify-between" },
                            React.createElement("div", null,
                                React.createElement("p", { className: "text-gray-200" }, "Growth"),
                                React.createElement("h3", { className: "text-2xl font-bold" }, "+24%")),
                            React.createElement(fa_1.FaChartLine, { className: "text-4xl text-purple-400" }))),
                    React.createElement(link_1["default"], { href: "/manager/transaksi", className: "inline-block bg-blue-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg" }, "Go to Transaksi")),
                React.createElement("div", { className: "grid justify-center items-center " },
                    React.createElement("h1", { className: "text-6xl font-bold mb-8 text-center px-96" },
                        React.createElement("b", null, "Amba web")))))));
};
exports["default"] = DashboardPage;
