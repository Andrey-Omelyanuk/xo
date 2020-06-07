let game = {
    gamers: {
        o: {
            name: 'Andrey',
            score: 0
        },
        x: {
            name: 'Superman',
            score: 0
        }
    },
    field: [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ],
    state: 'x',
    // прочерк это ничья
    winner: '',
    // какой шаблон выиграл
    win_template: null,
    
    win_templates: [
        [
            ['1', '', ''],
            [ '','1', ''],
            [ '', '','1']
        ],
        [
            [ '', '','1'],
            [ '','1', ''],
            ['1', '', '']
        ],
        [
            ['1','1','1'],
            [ '', '', ''],
            [ '', '', '']
        ],
        [
            [ '', '', ''],
            ['1','1','1'],
            [ '', '', '']
        ],
        [
            [ '', '', ''],
            [ '', '', ''],
            ['1','1','1']
        ],
        [
            ['1', '', ''],
            ['1', '', ''],
            ['1', '', '']
        ],
        [
            [ '','1', ''],
            [ '','1', ''],
            [ '','1', '']
        ],
        [
            [ '', '','1'],
            [ '', '','1'],
            [ '', '','1']
        ],
    ],
    match_template: function(template, player) {
        for(var y = 0; y < this.field.length; y++) {
            for(var x = 0; x < this.field[y].length; x++) {
                if (template[y][x] == '1') {
                    if(this.field[y][x] != player) {
                        return false 
                    }
                }
            }
        }
        return true
    },
    check_winner: function() {
        for(var template of this.win_templates) {
            if (this.match_template(template, 'o')) {
                (<any>this.win_template) = template
                this.winner = 'o'
                this.gamers.o.score++
                return
            }
            if (this.match_template(template, 'x')) {
                (<any>this.win_template) = template
                this.winner = 'x'
                this.gamers.x.score++
                return
            }
        }
        // ничья
        for(var y = 0; y < this.field.length; y++) {
            for(var x = 0; x < this.field[y].length; x++) {
                if (this.field[y][x] == ''){
                    return
                }
            }
        }
        this.winner = '-'
    },
    
    do: function(coordinates) {
        if(this.winner != '')
            return
            
        let x = coordinates[0]
        let y = coordinates[1]
        
        if (this.field[y][x] == '') {
            this.field[y][x] = this.state 
            this.check_winner()         
            this.state = this.state == 'x' ? 'o' : 'x'
        }
    },
    reset: function() {
        var gamer_o = this.gamers.o
        this.gamers.o = this.gamers.x
        this.gamers.x = gamer_o
        this.field = [
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
        ]
        this.state = 'x'
        this.winner = ''
    }
}

export default game