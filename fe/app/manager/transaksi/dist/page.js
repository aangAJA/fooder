"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_chartjs_2_1 = require("react-chartjs-2");
var chart_js_1 = require("chart.js");
chart_js_1.Chart.register(chart_js_1.CategoryScale, chart_js_1.LinearScale, chart_js_1.PointElement, chart_js_1.LineElement, chart_js_1.Title, chart_js_1.Tooltip, chart_js_1.Legend);
var TransactionChart = function () {
    // Contoh data transaksi
    var data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'Transactions',
                data: [65, 59, 80, 73, 40, 55, 40, 65, 59, 75, 73, 47],
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)'
            },
        ]
    };
    var options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Monthly Transactions'
            }
        }
    };
    return react_1["default"].createElement(react_chartjs_2_1.Line, { data: data, options: options });
};
var Page = function () {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("h1", null, "Transaction Page"),
        react_1["default"].createElement(TransactionChart, null)));
};
exports["default"] = Page;
