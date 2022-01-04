//function definition
function search(arr, n, x){
    let i;

    for(i=0; i<n; i++){
        if(arr[i] == x){
            return i;
        }
        return -1;
    }
}

let arr = [1,2,3,4,5,6,7,8,8,9];
let n = arr.length;

//function call
let result = search(arr, n, 6);

(return == -1) ? console.log("The entered element not found") : console.log(`${x} is present at index ${result}.`)