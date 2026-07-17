function bubbleSort(arr){
    let n = arr.length;

    for(let i=0;i<n-1;i++){
        for(let j =0;j<n-i-1;j++){
            if(arr[j] > arr[j+1]){
            let tmp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = tmp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([4,1,2,9,2,0,7]));