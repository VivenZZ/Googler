let obj = {a: 1,b: 2}
function objToMap(obj){
    let map = new Map()
    for (let key of Object.keys(obj)) {
        map.set(key, obj[key])
    }
    return map
}

console.log(objToMap(obj)) // Map(2) { 'a' => 1, 'b' => 2 }