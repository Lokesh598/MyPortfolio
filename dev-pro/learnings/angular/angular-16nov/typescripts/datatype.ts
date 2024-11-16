let lname = 'lokesh';

console.log(lname); // lokesh

/**
 * data types
 * 1. string
 * 2. number
 * 3. boolean
 * 4. array
 * 5. tuple
 * 6. enum
 * 7. any
 * 8. void
 * 9. null
 * 10. undefined
 * 11. never
 * 12. object
 * 13. unknown
 * 14. union
 * 15. intersection
 * 16. literal
 * 17. type assertions
 * 18. type guards
 * 19. type aliases
 * 20. type inference
 * 21. type compatibility
 * 22. type erasure
 * 23. type widening
 * 24. type narrowing
 * 25. type query
 * 26. type reflection
 * 27. type composition
 * 28. type manipulation
 */

let fname : string;

let age : number; 

age = 30;
age = 30.5;

let result = parseInt('10');
age = age + result;


let isUpdated : boolean = false; // default value is undefined

console.log(isUpdated); // undefined

//array

let names : string[] = ['lokesh', 'suresh', 'ramesh'];


let numList : Array<number>;

numList = [10, 20, 30];

let res = numList.filter((num) => num > 10).map((num) => num * 2).forEach((num) => console.log(num));

let num = numList.find((num) => num === 10);

console.log(num);

//tuple
//tuple is an array with fixed number of elements with fixed data types.
let numTuple : [number, number];

function swapNumber(num3:number, num4:number) : [number, number] {
    return [num4, num3];
}


console.log(swapNumber(10, 20));

//enum

const enum Color { //use of const here is to avoid the creation of object for enum
    RED = 'red',
    GREEN = 'green',
    BLUE = 'blue'
}

let color : Color = Color.RED;

//any

let department; //default type is any, it can be an issue in production code

department = 'IT';
department = 10;

function add(num1:any, num2:any) : any {
    return num1 + num2;
}

let newsum = add(10, 20);

//void

function greet() : void {
    console.log('hello');
}

