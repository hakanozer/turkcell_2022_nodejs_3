//const file = require('fs')
import * as file from 'fs'
const path = "sample.txt"


export const addDataFile = ( data: string ) => {
    const line = data+'\n'
    return new Promise( (resolve, reject) => {
        file.appendFile(path, line, () => {
            console.log("Insert Success");
            resolve("Success")
        });
    } )
    
}

export const readDataFile = () => {
    //file.readFile(path, {} ,(data) => {
      //  console.log(data);
    //})
    const datas = file.readFileSync(path, 'utf-8')
    return datas
}


