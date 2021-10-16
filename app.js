const aufgaben = require(__dirname + "/aufgaben.js");

let ary = [];
for (let i = 1; i < 11; i++) {
    ary.push(aufgaben.lvl_1_add_v1(i));
}
console.log(ary);