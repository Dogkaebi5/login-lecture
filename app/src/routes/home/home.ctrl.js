"use strict";

const output = {
    home: (req, res) => {
        res.render("home/login");
    },
    login: (req, res) => {
        res.render("home/login");
    },
}

const users = {
    id: ["ironman", "captain", "thor"],
    pw: ["123", "234", "345"],
};

const process = {
    login: (req, res) => {
        const id = req.body.id,
              pw = req.body.pw;
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.pw[idx] === pw) {
                return res.json({
                    success: true,
                })
            }
        }
        return res.json({
            success: false,
            msg: "로그인 실패",
        })
    },
};

module.exports = {
    output,
    process,
};