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
        for (let j = 0; j < ar.length; j++) {
            if (ar[i] + ar[j] === an) {
                kosong.push([ar[i], ar[j]])
            }   
        }
    }
    return kosong
    
}

q = jumlah([1, 5 , 6 ,2], 7)
console.log(q)


