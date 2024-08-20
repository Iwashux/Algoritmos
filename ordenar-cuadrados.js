function orderNumber(A){
    let B = []; // [16, 1, 0, 4, 9]
    let C = [];

    B = A.map(a => a * a);

    let right = B.length-1; // 4
    let left = 0; // 0
    while(right >= left){
        if(B[left]>B[right]){
            C.push(B[left]);
            left++;
        }else{
            C.push(B[right]);
            right--;
        }
    }

    return C;
}

const A = [-4, -1, 0, 2, 3, 6];
console.log(orderNumber(A));
