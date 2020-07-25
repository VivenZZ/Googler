var numbers = [1, 2, 3, 4];
var filteredNumbers = numbers.map(function(num, index) {
    if(index < 3) {
        return num;
    }
});
console.log(filteredNumbers)