// Build a class for an american ninja warrior
// Properties to track : Name, best time, farthest difficulty
// Add a method to update the best time
// Add a method to update the farthest difficulty
// Add a method to return the best time and farthest difficulty on an object

class Ninja{
    constructor(name, bestTime, farthest){
        //this= {}
        //this.prototype = Ninja
        this.name = name;
        this.bestTime = bestTime;
        this.farthest = farthest;
        //return this
    }
    updateTime(newTime){
        if(this.bestTime>newTime){
            this.bestTime = newTime;
        }
    }
    updateDifficulty(newDifficulty){
        this.farthest++;
    }
    display(){
        return `The amazing ninja ${this.name} completed the course in ${this.bestTime} seconds.
        With a difficulty of ${this.farthest} `
    }
}
let brack = new Ninja('Brack', 500, 600)
let liFung = new Ninja('Li Fung', 1000, 50)
brack.updateTime