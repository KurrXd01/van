"use strict";

const { webp2mp4File, mp42mp3 } = require('./converter')
const { tiktokdownload, tiktokstalk } = require('./tiktok')
const { yta, ytv, ytsr } = require('./ytdll')
const remote = require("remote-file-size");
const { facebook } = require('./facebook')
const speed = require("performance-now");
const { Grid } = require("minesweeperjs");
const emoji = require("node-emoji");

function sizer(bytes) {
     var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
     if (bytes == 0) return '0 Byte';
     var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
     return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
}


module.exports = { Grid, webp2mp4File, mp42mp3, tiktokdownload, tiktokstalk, yta, ytv, ytsr, remote, sizer, facebook, speed, emoji}