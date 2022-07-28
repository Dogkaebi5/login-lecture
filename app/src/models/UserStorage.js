"use strict";

class UserStorage {
    static #users = {
        id: ["ironman", "captain", "thor"],
        pw: ["123", "234", "345"],
        name: ["아이언맨", "아메리칸", "토르"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        },{});
        return newUsers;
    }

    static getUsersInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users); // =>[id,pw,name]
        const userInfo = userKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }

    static save(userInfo) {
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.pw.push(userInfo.pw);
        return { success : true };
    }
}

module.exports = UserStorage;