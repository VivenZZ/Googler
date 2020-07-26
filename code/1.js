let obj = {
    '0': 1,
    '1': 2,
    '2': 3,
    length: 4,
    [Symbol.iterator]: function(){
        let index = 0
        let next = () => {
            return {
                value: this[index],
                done: this.length == ++ index
            }
        }
        return {
            next
        }
    }
}
let arr = Array.from(obj)
console.log(arr)
let arr1= [...obj]
console.log(arr1)