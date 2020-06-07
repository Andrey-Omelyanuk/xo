<template>
    <div id="app-xo">
        <div id="dashboard" ></div>
        <div id="container" >
            <div class="header" >
                <div class="user" >
                    <div class="user-name" >
                        <div class="user-type" >
                            <div> O </div>
                        </div>
                        <div class="name name_o"> {{ game.gamers.o.name }} </div>
                    </div>
                    <div class="score score_o"> {{ game.gamers.o.score }}</div>
                </div>
                <div class="user" >
                    <div class="user-name" >
                        <div class="user-type" >
                            <div> X </div>
                        </div>
                        <div class="name name_x" >{{ game.gamers.x.name }}</div>
                    </div>
                    <div class="score score_x"> {{ game.gamers.x.score }}</div>
                </div>
            </div>
            <div class="field">
                <div v-for="(row, y) of game.field" :key="row" class="row">
                    <div v-for="(cell, x) of row" :key="cell" class="cell"
                        :class="{
                            'cell-winner': isCellWinner(x,y), 
                            'cell-other' : isCellNotWinner(x,y) 
                        }"
                        @mouseover="mouseOver" 
                        @mouseout="mouseOut" 
                        @click="nextStep"
                        :x="x"
                        :y="y"
                    >{{cell}}</div>
                </div>
            </div>
            <div class="footer" >            
                <div v-if     ="game.winner ==  ''" class="state"> Ход {{game.state}}</div>
                <div v-else-if="game.winner == '-'" class="state"> Ничья </div>
                <div v-else                         class="state"> Выиграл {{game.winner}}</div>

                <div v-if="game.winner != ''"><button @click="game.reset()" class="reset"> Заново </button></div>
            </div>
        </div>
        <div id="chat" ></div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import game from '../game'
import { $ } from 'jquery'


export default Vue.extend({
    data: () => { 
        return {
            game: game
        }
    },
    methods: {
        mouseOver: function(event) { $(event.currentTarget).addClass('hover') },
        mouseOut : function(event) { $(event.currentTarget).removeClass('hover') },
        nextStep: function(event) {
            game.do([
                event.currentTarget.attributes.x.value,
                event.currentTarget.attributes.y.value
            ])
        },
        isCellWinner: function(x,y) { 
            return (this.game.winner == 'x' || this.game.winner == 'o') && (<any>this.game.win_template)[y][x] == '1'
        },
        isCellNotWinner: function(x,y) { 
            // TODO: 
        },
    }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
</style>
