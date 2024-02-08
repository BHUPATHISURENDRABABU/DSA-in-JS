function maxSubarraySum(arr,n) {
    if(n > arr.length){
        return false;
    }
    let sum = 0;
    for(let i=0; i<n; i++){
        sum += arr[i];
    }
    let maxSum = sum;
    for(let i=1; i<arr.length-n; i++){
        sum = sum - arr[i-1] + arr[i+n-1];
        if(sum > maxSum){
            maxSum = sum;
        }
    }
    return maxSum;
}


arr = [3,9,9,3,8,4,9,3,4,7,8,2,3,7]

console.log(maxSubarraySum(arr,2))

