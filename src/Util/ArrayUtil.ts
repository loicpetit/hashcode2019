export function merge<T>(array1: Array<T>, array2: Array<T>): Array<T> {
    let arr = Object.assign([], array1)
    for(let value2 of array2){
        if(!arr.includes(value2)){
            arr.push(value2)
        }
    }
    return arr
}

export function common<T>(array1: Array<T>, array2: Array<T>): Array<T> {
    let arr: Array<T> = []
    for(let value2 of array2){
        if(array1.includes(value2)){
            arr.push(value2)
        }
    }
    return arr
}