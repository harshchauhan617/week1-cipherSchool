// objects
let obj = {
    name: "aryaman"
}
console.log(obj)

let person = {
    name: "aryaman",
    age: 20,
    email: 'xyz@gmail.com',
    status: 'true',
    children: {
        name: 'john',
        age: 10
    },
    hobbies: {
        h1: 'music', 
        h2: 'games'
    }
}
console.log(typeof person.name)
console.log(person.age)

console.log(person.children.name)


person[name] = 'haha';