json = (require('./data')); 
let jsonObj= JSON.parse(json);

console.log("/////////////////Q1///////////////////");
let logData = function() {
    console.log(jsonObj);
}
logData();

console.log("/////////////////Q2///////////////////");
let logNames = function() {
for (let i = 0; i < jsonObj.people.length; i++) {

    console.log( jsonObj.people[i].name);
    
}
}
logNames();

console.log("/////////////////Q3///////////////////");
let logNameEyes = function() {
    for (let i = 0; i < jsonObj.people.length; i++) {

        console.log( "the eye color of  "+jsonObj.people[i].name + " is : " + jsonObj.people[i].eye_color);
        
    }

}
logNameEyes();

console.log("/////////////////Q4///////////////////");
let logByMass = function() {
    for (let i = 0; i < jsonObj.people.length; i++) {
        let massn= JSON.parse(jsonObj.people[i].mass);

        if(massn > 75)
        console.log( "the mass of  "+jsonObj.people[i].name + " is : " + jsonObj.people[i].mass);
        
    }
}
logByMass();

///////////  THE END   //////////////////////////