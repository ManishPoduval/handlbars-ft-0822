// setup for express
const express = require("express");
const res = require("express/lib/response");
const app = express();


const port = 3000;

let hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials');

// require some data form your data.js file
let {students, instructors, getStudents, getTeachers} = require('./data')

// just a simple middleware to show you how it works
// you will always see that console.log when you visit any page
app.use((req, res, next) => {
    console.log("Hello im the middleware");
    next();
});

// letting your middleware know where to find all static files
app.use(express.static(__dirname + "/public"));

// ROUTES DEFINED BELOW

// app.get("/", (req, res) => {
//     res.sendFile(__dirname + '/views/landing.html')
// });

// app.get('/about/:name/:lastname', (req, res) => {
//     let {name} = req.params
//     if (name == 'manish') {
//         res.send(`Oink ${name}`)
//     }
//     else if (name == 'levi') {
//         res.send(`mowww ${name}`)
//     }  
// })

// Activity

// app.get('/', (req, res) => {
//     res.send("Hi there, welcome to my assignment!")
// })

// app.get('/speak/:animal', (req, res) => {
//     let {animal} = req.params
//     if (animal == 'pig') {
//         res.send("The pig says 'Oink!'") 
//     }
//     else if (animal == 'cow') {
//         res.send("The cow says 'Moo'") 
//     }
//     else if (animal == 'dog') {
//         res.send("The dog says 'Woof Woof!'") 
//     }
//     else {
//         res.send("Animal unknown") 
//     }
// })

// app.get('/greet/:msg/:num', (req, res) => {
//     let {msg, num} = req.params
//     res.send( (msg + ' ').repeat(num) )
// })

// app.get('*', (req, res) => {
//     res.statusCode = 404
//     res.send('page not found')
// })

// app.use((req, res) => {
//     res.send('page not found')
// })


// ------- Handlebars -----------

app.set('view engine', 'hbs');

app.get("/", (req, res) => {
    res.render(__dirname + '/views/landing.hbs', {name: 'Manish'})
});


app.get('/students', (req, res) => {
    getStudents()
        .then((mystudents) => {
            res.render(__dirname + '/views/students.hbs', {students: mystudents})
        })
        .catch(() => {
            res.render(__dirname + '/views/students.hbs', {error: 'Cannot fetch students'})
        })
})

// app.get('/students', async (req, res) => {
//     try {
//         let mystudents = await getStudents()
//         res.render(__dirname + '/views/students.hbs', {students: mystudents})
//     }
//     catch(err){
//         res.render(__dirname + '/views/students.hbs', {error: 'Cannot fetch students'})
//     }
// })

app.get('/instructors', (req, res) => {
    getTeachers()
        .then((myinstructors) => {
            res.render(__dirname + '/views/instructors.hbs', {layout: false, instructors: myinstructors})
        })
        .catch(() => {
            res.render(__dirname + '/views/instructors.hbs', {error: 'Cannot fetch instructors'})
        })
})




// Express setup to listen for all client requests on a certain port
app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
);