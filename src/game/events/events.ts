import type { GameEvent } from '../types';

export const EVENTS: GameEvent[] = [
    {
        id: "event_0",
        title: "Introduction",
        prompt: "Welcome to the game. Press play to play",
        choices: [
            { id: "option_1", text: "Play", effects: { military: 0, money: 0, population: 0, years: 0 }},
        ],
        recurring: false
    },
    {
        id: "event_1",
        title: "Border Raid",
        prompt: "Scouts report raiders testing your border. What do you do?",
        choices: [
            { id: "option_1", text: "Send troops to crush them", effects: { military: -5, money: -10, population: +2, years: 0 }},
            { id: "option_2", text: "Pay them off quietly", effects: { military: 0, money: -15, population: 0, years: 0 }},
            { id: "option_3", text: "Do nothing", effects: { military: 0, money: -2, population: -5, years: 0 }}
        ],
        recurring: true
    },
    {
        id: "event_2",
        title: "Tax Reform",
        prompt: "Your treasury runs thin. Do you increase taxes?",
        choices: [
            { id: "option_1", text: "Raise taxes", effects: { military: +2, money: +20, population: -10, years: 0 }},
            { id: "option_2", text: "Cut spending", effects: { military: -6, money: +10, population: +8, years: 0 }},
        ],
        recurring: true
    }
]