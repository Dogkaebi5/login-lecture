"use strict";

//모듈
const express = require("express");
const bodyPaser = require("body-parser");
const app = express();

//라우팅
const home = require("./src/routes/home");

//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyPaser.json());
//url 통해 한글, 공백 인식 문제 해결
app.use(bodyPaser.urlencoded({ extended: true}));

app.use("/", home); // 미들웨어 등록 메서드

module.exports = app;