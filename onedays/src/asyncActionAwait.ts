const fnc1 = () => {
    return new Promise( (resolve, reject ) => { 
        setTimeout(() => {
            console.log("Call - 1");
            resolve("123412312")
        }, 3000);
    })
}

const fnc2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Call - 2");
            resolve("Ali Bilmem")
        }, 1000);
    })
}

const fnc3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Call - 3");
            resolve("İşlem Tamamlandı")
        }, 2000);
    })
}

export const allCallAwait = async () => {
    const obj1 = await fnc1()
    const obj2 = await fnc2()
    const obj3 = await fnc3()
}
