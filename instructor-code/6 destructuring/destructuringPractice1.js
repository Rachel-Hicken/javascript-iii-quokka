let yessa = {
    name: "Yessa Helpa",
    race: "Gungan",
    favoritePhrase: "Yessa",
    skills: ["Jumping", "talking", "talking more", "'helping'"],
    planet: "Binksia",
    friends: ["Obi Han", "Princess Leiadalla", "Chewywok"]
}

//Get yessa's name and favoritePhrase

function describePerson( { name, skills, planet } ){
    console.log(`${name} likes ${skills[0]} on planet ${planet}.`)
}

describePerson( yessa );

//Instead of person, pick off the parameters: name, planet, skills
//on the first line of the function
function logPerson(person){

}

logPerson(yessa)

//pick off the parameters: name, friends, race
//instead of the parameter
function friendPerson(person){

}

logPerson(yessa)