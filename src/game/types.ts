
export type GameActiveProps = { 
        stats: { military: number, money: number, population: number },
        stage: "prompt" | "outcome",
        message: string
    }

export type GameState = null | GameActiveProps

export type Mode = 'game' | 'menu'