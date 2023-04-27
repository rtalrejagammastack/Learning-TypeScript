let age: any = 225;

console.log(age);

age = true;
console.log(age);

age = 'hello';
console.log(age);

age = {
    name: 'Mario'
}

age.skills = ['fighting']
console.log(age.skills);

let mixed2: any[] = [];

mixed2.push(14)
mixed2.push('mario')
mixed2.push(false)

console.log(mixed2)

let mixed1: any[] = [];
mixed1.push('mario')
mixed1.push(5)
mixed1.push(false)
mixed1.push({ hash:'ha hash hu', age: 45 })
mixed1[3].nayeproperty = false
mixed1[5] = 'dfv'
console.log(mixed1)

let ninja1: { name: any, age: any}
