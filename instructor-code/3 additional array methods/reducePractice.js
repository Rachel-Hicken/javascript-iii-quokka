var roundScores = [36, 39, 44, 49, 45, 48, 52]

//Use reduce to get a sum

var sum = roundScores.reduce( (total, score) => total+score, 0)
sum
//Use the sum to get an average
var avg = sum/roundScores.length;
avg

//Handicap is 4
//Use a map to reduce all scores by 4
//Use a reduce to get a sum
//Use the sum to get an average

var handicapAverage = roundScores.map(score=>score-4)
                        .reduce( (total, score) => total+score, 0)
                        /roundScores.length
handicapAverage

var lyricWords = ["Hello, ", "from ", "the ", "other ", "side ", "/r/n"]

//Use reduce to go through the lyricWords and concatenate them together

var song = lyricWords.reduce( (song, word) => `${song} ${song} ${word}` , '');
song

var join = lyricWords.join(' ');
join

let scores = [[4,7],[7,2],[4,7],[5,5], [5,1], [7,3]];

let scoreBoard = scores.reduce( (scoreBoard, game)=>{
    if (game[0]>game[1]){
        scoreBoard.wins++;
    } else if(game[1]>game[0]){
        scoreBoard.loses++;
    }else{
        scoreBoard.ties++;
    }
    return scoreBoard
}, {wins:0, loses:0, ties:0})

let bands = ['a','b','c','d','e','a','a','b','d','e','s','d'];

let tally = bands.reduce((tally, band)=>{
    tally[band] = tally[band]? tally[band] + 1 : 1
    return tally;
}, {})
tally
scoreBoard