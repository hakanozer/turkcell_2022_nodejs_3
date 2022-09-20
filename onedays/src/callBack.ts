import { ICallBackModel } from "./models/ICallBackModel";

export const callBackFnc = ( item:ICallBackModel ) => {
    item.start("CallBack Start")
    console.log('This Line Call')
    item.end('CallBack End')
}

export const actionFnc = () : ICallBackModel => {
    const item: ICallBackModel = {
        start: (params:string) => {
            console.log(params);
        },
        end: (params:string) => {
            console.log(params);
        }
    }
    return item
}
