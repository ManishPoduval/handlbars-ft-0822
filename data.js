//-----------------------------------
// DO NOT MAKE CHANGES TO THIS FILE
//-----------------------------------

//-----------------------------------
// PLEASE ONLY READ THE COMMENTS
//-----------------------------------

// Just a simple array of objects
let students = [
    {
        name: 'Joe',
        id: 9132,
        city: 'Miami',
    },
    {
        name: 'John',
        id: 2342,
        city: 'London',
    },
    {
        name: 'James',
        id: 34867,
        city: 'Berlin',
    },
    {
        name: 'Javier',
        id: 234,
        city: 'Liverpool',
    }
]

// Just a simple array of objects
let instructors = [
    {
        name: 'Gerrard',
        city: 'Madrid',
        id: 56756,
    },
    {
        name: 'Gerry',
        city: 'Turin',
        id: 12534,
    },
    {
        name: 'George',
        city: 'Lisbon',
        id: 45645,
    },
]

// This function returns a promise.
// Assume we fetch this data somewhere from the internet and it takes 2 seconds
function getStudents(){
    let myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            // assume we fetch the students from somehwere
            // we resolve the promise and pass the `students` declared at the top of the file
            resolve(students)
            // reject()
        }, 2000)
    })
    return myPromise
}

// This function returns a promise.
// Assume we fetch this data somewhere from the internet and it takes 1 second
function getTeachers(){
    let myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            // assume we fetch the teahers from somehwere
            // we resolve the promise and pass the `instructors` declared at the top of the file
            resolve(instructors)
        }, 1000)
    })
    return myPromise
}

// EXPORTING things out of this file to that other files may `require` it
module.exports = {
    getStudents, // we are exporting a function here
    getTeachers, // we are exporting a function here
    students,    // we are exporting an array of objects here
    instructors  // we are exporting an array of objects here
}
