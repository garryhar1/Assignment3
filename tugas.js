function DG(ar) {
    let n = 1;
    for (let i = 0; i < ar.length-1; i++) {
      if (i === 0) n = ar[i+1] - ar[i];
      if (i !== ar.length-1 && n !== ar[i+1] - ar[i]) return false;
    }
    return true
  }
  
console.log(DG([1, 3, 5, 7]))
console.log(DG([1, 3, 5, 6, 7, 9]))

function AB(kata) {
    for (let i = 0; i < kata.length; i++) {
      if (kata[i] === "a" && kata[i + 4] === "b") {
        return true;
      } else if (kata[i] === "b" && kata[i + 4] === "a") {
        return true;
      }
    }
    return false;
  }

console.log(AB('lane borrowed'));

function jumlah(ar, an) {
    let nilai = an
    let kosong =[];
    for (let i = 0; i < ar.length; i++) {
        for (let j = i+1; j < ar.length; j++) {
            if (ar[i] + ar[j] === an) {
                kosong.push([ar[i], ar[j]])
            }   
        }
    }
    return kosong
    
}

q = jumlah([2, 1 , 4 ,3], 5)
console.log(q)


function max(arr) {
    let maxSum= arr[0];
    let cSum = arr[0];
    let sI = 0;
    let eI = 0;
    let CSI = 0;

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        
        if(cSum + num > num){
            cSum += num;
        } else {
            cSum = num
            CSI = i
        }

        if(cSum >maxSum){
            maxSum = cSum;
            sI =CSI;
            eI=i
        }
    }

    return [arr.slice(sI, eI +1), maxSum]
}

let iA= [-2,3,4,-1,-2,1,5,3,-10, 5];
let out = max(iA)
console.log(out)



