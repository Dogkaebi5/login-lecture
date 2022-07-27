"use strict";

const UserStorage = require("./UserStorage");
class User {
    constructor(body) {
        this.body = body;
    }

    login() {
        const body = this.body;
        const { id, pw } = UserStorage.getUsersInfo(body.id);
        
        if (id) {
            if (id === body.id && pw === body.pw) {
                return { success : true };
            }
            return { success : false, msg: "비번 틀림"};
        }
        return { success : false, msg: "아이디가 존재하지 않음"};
    }
}

module.exports = User;