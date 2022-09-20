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

export const allCallPromise = () => {

    fnc1().then(r1 => {
        console.log(r1);
        fnc2().then(r2 => {
            console.log(r2);
            fnc3().then(r3 => {
                console.log(r3);
                console.log("All Fnc Finish");
            })
        })
    })
    
}
