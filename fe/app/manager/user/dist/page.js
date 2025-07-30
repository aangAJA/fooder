'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var users = [
    { name: 'Alice', role: 'user' },
    { name: 'Bob', role: 'manager' },
    { name: 'Charlie', role: 'user' },
    { name: 'David', role: 'user' },
    { name: 'Eve', role: 'admin' },
    { name: 'Fiona', role: 'admin' },
    { name: 'Gerald', role: 'user' },
    { name: 'Hannah', role: 'admin' },
    { name: 'Ivan', role: 'user' },
];
var UserPage = function () {
    var _a = react_1.useState('all'), selectedRole = _a[0], setSelectedRole = _a[1];
    var renderContent = function (role) {
        switch (role) {
            case 'admin':
                return react_1["default"].createElement("p", null, "Welcome, Admin! You have full access to the system.");
            case 'user':
                return react_1["default"].createElement("p", null, "Welcome, User! You have limited access to the system.");
            case 'manager':
                return react_1["default"].createElement("p", null, "Welcome, Manager! You can manage user accounts.");
            default:
                return react_1["default"].createElement("p", null, "Welcome! Please select a role.");
        }
    };
    var filteredUsers = selectedRole === 'all' ? users : users.filter(function (user) { return user.role === selectedRole; });
    return (react_1["default"].createElement("div", { className: "flex flex-col min-h-screen bg-gray-500 p-4" },
        react_1["default"].createElement("h1", null, "Profile"),
        react_1["default"].createElement("div", { className: "mb-4" },
            react_1["default"].createElement("button", { onClick: function () { return setSelectedRole('all'); }, className: "mr-2 p-2 bg-blue-500 text-white hover:bg-blue-700 transition-colors duration-300" }, "All"),
            react_1["default"].createElement("button", { onClick: function () { return setSelectedRole('admin'); }, className: "mr-2 p-2 bg-blue-500 text-white hover:bg-blue-700 transition-colors duration-300" }, "Admin"),
            react_1["default"].createElement("button", { onClick: function () { return setSelectedRole('user'); }, className: "mr-2 p-2 bg-blue-500 text-white hover:bg-blue-700 transition-colors duration-300" }, "User"),
            react_1["default"].createElement("button", { onClick: function () { return setSelectedRole('manager'); }, className: "p-2 bg-blue-500 text-white hover:bg-blue-700 transition-colors duration-300" }, "Manager")),
        filteredUsers.map(function (user, index) { return (react_1["default"].createElement("div", { key: index, className: "p-4 m-2 bg-gray shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300" },
            react_1["default"].createElement("h2", null, user.name),
            renderContent(user.role))); })));
};
exports["default"] = UserPage;
