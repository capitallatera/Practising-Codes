// an empty object is considered as true in conditions
if({}){
    console.log('Working')
}

// testing a function definition returns a true 
let y=0;
if (!function F(){})
{
y = (function F(){})
}
console.log(y);

// delete keyword can only delete object properties only
var Output = (function(x)
{
delete x.y;
return x;
})({y:10, z:10 });
console.log(Output)

// prototype properties can't be delete using object created with reference
var Employee =
{
company: 'xyz'
}
var Emp1 = Object.create(Employee);
delete Emp1.company 
console.log(Emp1.company);

// a demontration for reference Error
var Foo = function Bar()
{
return 7;
};
console.log(typeof Bar())

// Filter sample text 
const text = 'ABCD';
const filter = text.split('').filter((element)=>element !=='B' && element !== 'D' )
console.log(filter.join(''), 'filter'); // output -->  AC