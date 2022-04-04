export {}
interface userTyped{
    name: string,
    age: number,
    role: string,
    salary: any
}


let newUser: userTyped = {
    name: "Hemant Soni",
    age: 20,
    role: "Backend Developer",
    salary: 4545
}

type myBool = true | false;

let value: myBool = true;
console.log(value);

console.log(newUser);