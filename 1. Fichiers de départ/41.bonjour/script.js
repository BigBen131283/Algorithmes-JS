const people = [
    {
        name: "Karim",
        id: 1
    },
    {
        name: "Marie",
        id: 2
    },
    {
        name: "Carine",
        id: 3
    },
    {
        name: "Abdelfattah",
        id: 4
    },
    {
        name: "Famara",
        id: 5
    }
]

function sayHelloToAll (array) {
    
    return array.map(el => el.name).forEach(element => {
        console.log(`Bonjour ${element}`);
    })    

}

sayHelloToAll(people)
