
class Gamer {

    name  = 'Мне нужно ИМЯ!!' 
    score = 0

    constructor(name, score) {
        if (score != undefined) {
            this.score = score
        }
        this.name = name
    }

    print() {
        console.log('Gamer '+this.name+ " score " +this.score)
    }
    reset() {
        this.score = 0
    }
}

var data = [
    ['Andrey',    0],
    ['TTTT'  , 9990],
    ['XXX'   ,   10]
]
var gamers = []
for(var g of data){
    var gamer = new Gamer(g[0], g[1])
    gamers.push(gamer)
}

debugger

var not_zero = gamers.filter(function (gamer) { return gamer.score != 0 })

var not_zero2 = []
for(var gamer of gamers){
    var check = function (gamer) { return gamer.score != 0 }
    if (check(gamer)) {
        not_zero2.push(gamer)
    }
}
debugger

var is_zero  = gamers.filter(function (gamer) { return gamer.score == 0 })



// printGamer(gamer_a)
// printGamer(gamer_b)
// printGamer(gamer_c)