//Brute Force Method
function sortedArray(array){
    const newArray = new Array(array.length).fill(0)
    for(let i =0; i<array.length; i++){
        //Square the numbers
        // newArray[i]= Math.pow(array[i],array[i])
        newArray[i] = Math.pow(array[i],2)
    }
    //sort the numbers
    //In Javascript we need to use compare function to sort integers
    newArray.sort(function(a,b){return a-b})
    return newArray 
}

a=[1,5,7]
b=[-7,-2,3,5]
c=[]

console.log(sortedArray(a))
console.log(sortedArray(b))
console.log(sortedArray(c))

//Time Complexity  --> O(nlogn)
//Space Complexity --> 0(n)