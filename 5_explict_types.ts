// explict values

let username: string;
let age: number;
let isLoggedIn: boolean;

age = 45
// age = 'tsdf'

console.log(isLoggedIn, username, age)


//arrays
let ninja: string[] = [];

ninja[0] = 'sdxv'
ninja.push('erfgd')

console.log(ninja)

//union types
let mixed: (string | number)[] = [];

mixed.push('dergv')
mixed.push(25)
// mixed.push(false)





// objects

let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 35}

ninjaOne = { name: 'yoshi', age: 35, skills: ['fighting']}

// ninjaOne.skills
console.log(ninjaOne)

let ninjaTwo: {
    name: string,
    age: number,
    beltColor: string
}

ninjaTwo = {
    name: 'Own',
    age: 14,
    beltColor: 'Black'
}
// ninjaTwo = {
//     name: 'Own',
//     age: 14,
// }

console.log(ninjaTwo.name)