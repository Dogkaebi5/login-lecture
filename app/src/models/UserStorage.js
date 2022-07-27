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
}

module.exports = UserStorage;