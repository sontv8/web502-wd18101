// const myTeacher: Teacher = 'datlt';
// const yourTeacher: Teacher = 'sontv';

// type Teacher = string;
// type Age = number;

// type Teacher = {
//     id: number,
//     name: string,
//     age: number,
//     salary: number,
//     avatar: string
// }
// let myTeacher: Teacher = {
//     id: 1,
//     name: 'datlt',
//     age: 18,
//     salary: 1000,
//     avatar: '....'
// }

// interface Person {
//     readonly id: number,
//     username: string,
//     email?: string
// }
// const employee: Person = {
//     id: 1,
//     username: 'datlt',
//     email: '....'
// }
// const employee2: Person = {
//     id: 2,
//     username: "thienth"
// }
// employee.id = 100;
// employee.username = 'thienth';


/*
    required
    readonly
    optional ?
*/


// Union Type
// type UserId = number | string;
// interface Person {
//     readonly id: number | string | boolean,
//     username: string,
//     email?: string
// }
// let myId: UserId = true;

// type PersonalInfo = {
//     id: number,
//     name: string,
//     gender: boolean
// }
// type CompanyInfo = {
//     email: string,
//     position: string
// }

// type Info = PersonalInfo & CompanyInfo;

// const myInfo: Info = {
//     id: 1,
//     name: 'datlt',
//     gender: true,
//     email: '...',
//     position: '...'
// }

// interface Student {
//     id: number,
//     username: string,
//     roleId: number
// }
// interface Info {
//     avatar: string
// }
// interface NewStudent extends Student, Info {
//     email: string
// }
// const datlt: NewStudent = {
//     id: 1,
//     username: 'datlt',
//     roleId: 1,
//     email: '...',
//     avatar: '...'
// }


interface Student {
    readonly id: number,
    username: string,
}
interface Student {
    id: number,
    email: string,
    roleId: number | string
}

const sontv: Student = {
    id: 1,
    username: 'sontv',
    email: '...',
    roleId: 1
}