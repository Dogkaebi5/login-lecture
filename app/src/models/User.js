"use strict";

const UserStorage = require("./UserStorage");
class User {
    constructor(body) {
        this.body = body;
    }

    async login() {
        const client = this.body;
        const { id, pw } = await UserStorage.getUsersInfo(client.id);
        
        if (id) {
            if (id === client.id && pw === client.pw) {
                return { success : true };
            }
            return { success : false, msg: "비번 틀림"};
        }
        return { success : false, msg: "아이디가 존재하지 않음"};
    }

    register() {
        const client = this.body;
        const response = UserStorage.save(client);
        return response;
    }
}

module.exports = User;