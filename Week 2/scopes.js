// Global Scope
var festivalName = "MusicFest 2024"; // Accessible everywhere

function mainStage(artist) {
    console.log(festivalName);
    // Function Scope
    var headliner = artist + " is the headliner";

    function backstage() {
        // Lexical Scope
        var backstagePass = headliner + " - with backstage access"; // Access to 'headliner' (outer function scope)
        console.log(backstagePass); // Works fine
    }

    backstage();

    if (artist === "The Rockers") {
        // Block Scope
        let specialSong = "Rocking the Stage"; // Accessible only within this block
        var varVariable = "test";
        console.log(specialSong); // Works fine
    }

    console.log(varVariable);

    // console.log(specialSong); // ReferenceError: specialSong is not defined (outside block scope)
}

console.log(festivalName); // Accessible (global scope)
mainStage("The Rockers");
