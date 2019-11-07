
console.log("\\\\\\\\\\\\\\Q1\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
var check = function(parm , num)
{ var a = 0;
    console.log(parm);
    console.log(num);


for (let i = 0; i < parm.length; i++) {
    if (parm[i]== num)
    {      console.log( "The result is True");
           console.log( "===================");

    a= 1;
         break;
    }
    else
    {  a= 0;
    }
}
if (a == 0)
{
    console.log( "The result is False");
    console.log( "===================");

}
}
check([1, 2, 3, 4, 5], 3);
check([1, 1, 2, 1, 1], 3);
check([5, 5, 5, 6], 5);
check([], 5);


//**Q2.** Write a function that takes two integers (hours, minutes) and converts them to seconds.
console.log("\\\\\\\\\\\\\\\\\\\\Q2\\\\\\\\\\\\\\\\\\\\\\");

var convertToSeconds = function(hours , minutes)
{
return (hours *60 * 60 + minutes*60)
}
console.log("*****                 Q2            *******");
console.log("convertToSeconds(1, 3) " + convertToSeconds(1, 3));
console.log("convertToSeconds(2, 0)" + convertToSeconds(2, 0));
console.log("convertToSeconds(0, 0) " + convertToSeconds(0, 0));


//****Q3.** Use the following data to solve the problems below.
console.log("\\\\\\\\\\\\\\\\\\\\Q3\\\\\\\\\\\\\\\\\\\\\\");

var  aquarium = {
    filledWithWater: true,
    capacityInGallons: 12,
    numberOfRocks: 5,
    fish: [
            {
                type: 'goldfish' ,
                size: '3.5 inches',
                color: 'golden'
            },
            {
                type: 'puffer',
                size: '4 inches',
                color: 'tan'
            },
            {
                type: 'clown',
                size: '3 inches',
                color: 'orange'
            }
        ]
}
console.log(aquarium);

//1. access the value of the `capacityInGallons` key

console.log("Q3.1 :"+ aquarium.capacityInGallons);

//2. add 2 rocks to the `numberOfRocks` in the aquarium
aquarium.numberOfRocks+=2;
console.log( "Q3.2 : " + "  aquarium.numberOfRocks = " + aquarium.numberOfRocks);

//3. access the `clown fish` and `print` the object.
console.log("Q3.3 :" + "  aquarium.fish[2]" + aquarium.fish[1]);

//4. access the `size` of the `puffer` fish.
console.log("Q3.4 : " + " aquarium.fish[1].size =  " + aquarium.fish[1].size)  ;

//5. your `goldfish` grew! Access the `size` key of goldfish and reassign it to '4 inches'.
aquarium.fish[0].size= '4 inches';

console.log("Q3.5: " + "  goldfish size =  " + aquarium.fish[0].size );


// 6. you bought a new fish! Make a new object for a '5 inch' long, blue starfish and add it to the fish array. 

let newFish= aquarium.fish.push(
                {type: 'starfish',
                size: '5 inches',
                color: 'blue'});


console.log(  "Q3.6  ");

console.log(aquarium);



