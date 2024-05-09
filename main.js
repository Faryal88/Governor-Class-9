// Functions:
function add(digit, digitTwo) {
    console.log(digit + digitTwo);
}
add(10, 56);
function Google_Map(to, from) {
    console.log("".concat(to, " ").concat(from));
}
Google_Map("Governor House", "Home");
// Defult Parameter:
function Marriage(choice) {
    if (choice === void 0) { choice = "	Ammi ki Choice"; }
    console.log(choice);
}
Marriage();
Marriage("Meri Choice");
function Game(username) {
    if (username === void 0) { username = "Guest123"; }
    console.log(username);
}
Game();
Game("Faryal");
// Function Logic:
function Add(dig, digTwo) {
    if (dig === void 0) { dig = 5; }
    if (digTwo === void 0) { digTwo = 2; }
    console.log(dig + digTwo);
}
Add();
Add(10, 12);
Add(10);
// Return Statement:
function CookMeal(type, dishName) {
    return "".concat(type, " ").concat(dishName);
}
console.log(CookMeal("Chicken", "Biryani"));
function Addition(dig, digitTwo) {
    return "".concat(dig, " ").concat(digitTwo);
}
console.log(Addition("Addition", "Subtraction"));
// New Return Function
function Country() {
    return "Pakistan";
}
console.log(Country());
function Name(d, dTwo) {
    return 4 * 4;
}
console.log(Name());
function New_Name(name) {
    var Info = "".concat(name, " ").concat("age");
    return Info;
}
console.log("Faryal", "18");
