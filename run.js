var game = function(name) {

var user = prompt("Welcome to 'The Heights' " + name + "!" + "\n" + "Do you want to go to YU, GOLAN, or just JOG?").toLowerCase();

switch(user) {
    case "yu" :
        var id = prompt("Do you have a student id, YES or NO?").toLowerCase();
        var libr = prompt("Are you here for the library?").toLowerCase();
        if (libr === "yes") {
            libr = true;
            }
        else {
            libr = false;
            }
        if (yesNo(id) || libr) {
            console.log("Welcome to YU " + name);
            }
        else {
            console.log("Only students may enter!");
            }
        break;
    case "golan" :
        var order = prompt("Welcome to the grubbiest fast food in all the heights!" + "\n" + "What would you like to order?");
        var pay = prompt("Do you have money to pay, YES or NO?").toLowerCase();
        if (yesNo(pay) && order !== null) {
            console.log("One " + order + " coming right up!");
            }
        else {
            console.log("Come back when you figure things out");
            }
        break;
    case "jog":
        console.log("Follow the hudson river to the GW bridge for the jog of your life!");
        break;
    default :
        console.log("Well go for it, but your on your own!");
    }
}

var yesNo = function(ans) {
    if (ans === "yes") {
        return true;
        }
    else {
        return false;
        }
    };

var name = prompt("What's your name?");
game(name);
