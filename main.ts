// Functions:
function add(digit:number , digitTwo){
	console.log(digit + digitTwo);
}
add(10 , 56)


function Google_Map(to:string , from:string){
	console.log(`${to} ${from}`);
}
Google_Map("Governor House" , "Home");


// Defult Parameter:
function Marriage(choice:string = "	Ammi ki Choice"){
	console.log(choice);
}
Marriage()
Marriage("Meri Choice")


function Game(username:string = "Guest123"){
	console.log(username);
}
Game()
Game("Faryal")


// Function Logic:
function Add(dig:number = 5 , digTwo:number = 2){
	console.log(dig + digTwo);
}
Add()
Add(10, 12)
Add(10)


// Return Statement:
function CookMeal(type , dishName){
	return`${type} ${dishName}`
}
   console.log(CookMeal("Chicken" , "Biryani"));


   function Addition(dig , digitTwo){
	return`${dig} ${digitTwo}`
}
   console.log(Addition("Addition" , "Subtraction"));
	
   
// New Return Function
function Country():string {
	return "Pakistan"
}
console.log(Country() );  


function Name(d:number , dTwo:number):number {
	return 4 * 4
}
console.log(Name() );   



function New_Name(name:string):string{
	let Info = `${name} ${age}`
	return Info
}
console.log("Faryal" , "18");