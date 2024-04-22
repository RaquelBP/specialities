const express = require("express")
const app = express()

const usersData = [
    { id: 1, name: 'Alice', age: 28, specialty: 'marketing' },
    { id: 2, name: 'Bob', age: 35, specialty: 'developers' },
    { id: 3, name: 'Charlie', age: 30, specialty: 'developers' },
    { id: 4, name: 'David', age: 25, specialty: 'QAs' },
    { id: 5, name: 'Emma', age: 32, specialty: 'ventas' },
    { id: 6, name: 'Frank', age: 28, specialty: 'marketing' },
    { id: 7, name: 'Grace', age: 34, specialty: 'developers' },
    { id: 8, name: 'Hank', age: 27, specialty: 'QAs' },
    { id: 9, name: 'Ivy', age: 31, specialty: 'ventas' },
    { id: 10, name: 'Jack', age: 29, specialty: 'marketing' },
    { id: 11, name: 'Karen', age: 36, specialty: 'developers' },
    { id: 12, name: 'Leo', age: 26, specialty: 'QAs' },
    { id: 13, name: 'Mia', age: 33, specialty: 'ventas' },
    { id: 14, name: 'Nathan', age: 30, specialty: 'marketing' },
    { id: 15, name: 'Olivia', age: 37, specialty: 'developers' },
    { id: 16, name: 'Paul', age: 24, specialty: 'QAs' },
    { id: 17, name: 'Quinn', age: 32, specialty: 'ventas' },
    { id: 18, name: 'Ryan', age: 28, specialty: 'marketing' },
    { id: 19, name: 'Sara', age: 35, specialty: 'developers' },
    { id: 20, name: 'Tom', age: 29, specialty: 'QAs' },
    { id: 21, name: 'Uma', age: 30, specialty: 'ventas' },
    { id: 22, name: 'Victor', age: 27, specialty: 'marketing' },
    { id: 23, name: 'Wendy', age: 34, specialty: 'developers' },
    { id: 24, name: 'Xander', age: 31, specialty: 'QAs' },
    { id: 25, name: 'Yara', age: 33, specialty: 'ventas' },
    { id: 26, name: 'Zack', age: 28, specialty: 'marketing' },
    { id: 27, name: 'Ava', age: 36, specialty: 'developers' },
    { id: 28, name: 'Bryan', age: 26, specialty: 'QAs' },
    { id: 29, name: 'Cynthia', age: 32, specialty: 'ventas' },
    { id: 30, name: 'Derek', age: 30, specialty: 'marketing' },
  ];
  
const specialties = []
let homePages = ""
//Crea los elementos para las páginas
usersData.forEach(element => {
    if(!specialties.includes(element.specialty)){
        specialties.push(element.specialty)
        const stringA = `<a href="/${toUpperCase(element.specialty)}"> ${toUpperCase(element.specialty)} </a>`
        homePages += stringA
    }
})

//Función que pone la primera letra en mayuscula
function toUpperCase(element){
    const string = String(element)
    const upper = string.charAt(0).toUpperCase() + string.slice(1)
    return upper
}

//Crea el filtro de las personas por especialidad y saca los datos de las personas en párrafos
function filter(array, specialty){
    let count = 0
    let dataP = ""

    array.forEach(element => {
        if(element.specialty===specialty){
            count += 1
            dataP += `<li><b>Name: </b>${element.name} <b>Age:</b> ${element.age} <b>ID:</b> ${element.id}</li>`
        }
    })
    return [count, dataP]
}

//Estructura de la HOME PAGE
app.get(`/`, (req, res) =>{
    res.send(
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home Page</title>
</head>
<body>
    <header>
        <nav>${homePages}</nav>
    </header>
    <main>
        <h1>Home Page</h1>
        <p>Selecciona una especialidad para continuar</p>
    </main>    
</body>
</html>`)
})

//Esctructura de las ESPECIALIDADES
specialties.forEach(element => {
    app.get(`/${element}`, (req, res) =>{
        res.send(
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${toUpperCase(element)} Page</title>
</head>
<body>
    <header>
        <nav><a href="/">Home </a>${homePages}</nav>
    </header>
    <main>
        <h1>${toUpperCase(element)} Page</h1>
        <p>Hay ${filter(usersData, `${element}`)[0]} personas de ${element}</p>
        <ul>${filter(usersData, `${element}`)[1]}</ul>
    </main>    
</body>
</html>`)
    })
})

//Estructura página no encontrada
app.use((req, res) => {
    res.status(404).send(`<h1>Página no encontrada</h1><a href="/">Home Page</a>`)
})

app.listen(3000, ()=>{
    console.log("Node.js está escuchando en el puerto 3000")
})

