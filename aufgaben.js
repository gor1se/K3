exports.lvl_1_add_v1 = function(id) {
    let obj = {
        id: id,
        aufgabe: "",
        antwort: 0,
        antwort_f1: 0,
        antwort_f2: 0,
        level: 1,
        art: "Multiple Choice"
    };
    let ran_1 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    let ran_2 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    obj.aufgabe = ran_1 + " + " + ran_2;
    obj.antwort = ran_1 + ran_2;
    obj.antwort_f1 = obj.antwort + Math.floor(Math.random() * (4 - 1 + 1)) + 1;
    obj.antwort_f2 = obj.antwort - Math.floor(Math.random() * (4 - 1 + 1)) + 1;
    return obj;
};

exports.lvl_2_add_v1 = function(id) {
    let obj = {
        id: id,
        aufgabe: "",
        antwort: 0,
        antwort_f1: 0,
        antwort_f2: 0,
        level: 2,
        art: "Multiple Choice"
    };
    let ran_1 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    let ran_2 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    let ran_3 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    obj.aufgabe = ran_1 + " + " + ran_2 + " + " + ran_3;
    obj.antwort = ran_1 + ran_2 + ran_3;
    obj.antwort_f1 = obj.antwort + Math.floor(Math.random() * (4 - 1 + 1)) + 1;
    obj.antwort_f2 = obj.antwort - Math.floor(Math.random() * (4 - 1 + 1)) + 1;
    return obj;
};

// Ein Aufgabenobject sollte folgende Eigenschaften haben:
// - ID
// - Aufgabe
// - Antwort
// - Falsche Antwort 1 (opt.)
// - Falsche Antwort 2 (opt.)
// - Level
// - Art

// return Math.floor(Math.random() * (max - min +1)) + min;