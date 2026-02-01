
import type { GameActiveProps } from '../game/types';
import { EVENTS } from './events/events'
import { randomEvent } from './events/selectEvents';

const THRESHOLDS = {
    military: 0,
    population: 0,
    money: 0
} 

function rollVariable(){
    return Math.floor(Math.random() * 100)
}

export function createNewGame(): GameActiveProps {
    return {
        stats: {
            military: rollVariable(),
            money: rollVariable(),
            population: rollVariable(),
            years: 0
        },
        stage: "prompt",
        message: EVENTS[0].prompt,
        choices: EVENTS[0].choices,
        currentEventId: EVENTS[0].id,
    }
}



export function isGameOver(stats: typeof THRESHOLDS){
    return(
        stats.military < THRESHOLDS.military ||
        stats.money < THRESHOLDS.money ||
        stats.population < THRESHOLDS.population
    )
        
    
}



export function applyChoice(state: GameActiveProps, choiceId: string): GameActiveProps{
    if(state.currentEventId === "event_0"){
        const nextEvent = randomEvent(); 

        return {
            ...state,
            currentEventId: nextEvent.id,
            message: nextEvent.prompt,
            choices: nextEvent.choices,
        };
    }



    const currentEvent = EVENTS.find(e => e.id === state.currentEventId)
    if(!currentEvent) return state



    const choice = currentEvent.choices.find(c => c.id === choiceId)
    if(!choice) return state

    const newStats = {
        military: state.stats.military + choice.effects.military,
        population: state.stats.population + choice.effects.population,
        money: state.stats.money + choice.effects.money,
        years: state.stats.years++
    }

    if(isGameOver(newStats)){
        return{
            ...state,
            stats: newStats,
            message: `Game Over. You reigned for ${state.stats.years--} years`,
            currentEventId: "game_over",
            choices: [],
            stage: "game_over"
        }
    }

    const nextEvent = randomEvent()


    return{
        ...state,
        stats: newStats,
        message: nextEvent.prompt,
        currentEventId: nextEvent.id,
        choices: nextEvent.choices
    }
}