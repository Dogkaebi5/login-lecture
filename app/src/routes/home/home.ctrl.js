"use strict";

const home = (req, res) => {
    res.render("home/login");
};

const login = (req, res) => {
    res.render("home/login");
};

module.exports = {
    home,
    login,
};