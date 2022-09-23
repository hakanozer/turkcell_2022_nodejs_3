import events from 'events'
export const eventEmitter = new events.EventEmitter()

export enum EventEnum {
    fncEventOne = 'fncEventOne',
    fncEventTwo = 'fncEventTwo'
}

const fncEventOne = (args:any) => {
    console.log("fncEventOne Call", args);
}

const fncEventTwo = (args:any) => {
    console.log("fncEventOne Call", args);
}

eventEmitter.on(EventEnum.fncEventOne, fncEventOne)
eventEmitter.on(EventEnum.fncEventTwo, fncEventTwo)

