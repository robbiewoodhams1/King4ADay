
export type StatKey = { military: number, money: number, population: number, years: number }

export type GameActiveProps = { 
        stats: StatKey,
        stage: "prompt" | "outcome" | "game_over",
        message: string ,
        choices: Choice[],
        currentEventId: string
    }

export type GameState = null | GameActiveProps

export type Mode = 'game' | 'menu'


export type Choice = {
    id: string,
    text: string,
    effects: StatKey
}

export type GameEvent = {
    id: string,
    title: string,
    prompt: string,
    choices: Choice[],
    recurring: boolean
}