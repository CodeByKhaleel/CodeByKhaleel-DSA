function sortedSquared(array){
    const newArray = new Array(array.length).fill(0)
    let leftPointer = 0
    let rightPointer = array.length-1;
    for(let i =array.length-1;i>=0;i--){
        const leftSquared = Math.pow(array[leftPointer],2);
        const rightSquared = Math.pow(array[rightPointer],2);
        if(leftSquared>rightSquared){
            newArray[i]= leftSquared;
            leftPointer++;
        } else{
            newArray[i]= rightSquared;
            rightPointer--;
        }
    }
    return newArray
}

console.log(sortedSquared([-8,4,8,9]))