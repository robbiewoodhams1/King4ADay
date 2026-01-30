import type { GameActiveProps } from '../game/types';

function rollVariable(){
    return Math.floor(Math.random() * 100)
}

export function createNewGame(): GameActiveProps {
    return {
        stats: {
            military: rollVariable(),
            money: rollVariable(),
            population: rollVariable()
        },
        stage: "prompt",
        message: "Welcome to the game"
    }
}


export function applyChoice(){

}