

import { EVENTS } from './events'

export function randomEvent(){
    const filteredEvents = EVENTS.filter(e => e.recurring !== false)
    const index = Math.floor(Math.random() * filteredEvents.length)
    return filteredEvents[index]
}