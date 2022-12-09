// No.1 Hitunglah jumlah pasang kaos kaki yang dapat dijual

function soldSocks(arr) {
    let count = 0
    let obj = {}

    for(let i = 0; i < arr.length ; i++) {
        if(!obj[arr[i]]) {
            obj[arr[i]] = 1
        } else {
            obj[arr[i]] ++
        }
    }

    for(const property in obj) {
        count = count +  Math.floor(obj[property]/2)
    }

    return count
}

console.log(soldSocks([10,20,20,10,10,30,50,10,20]))
console.log(soldSocks([6,5,2,3,5,2,2,1,1,5,1,3,3,3,5]))
console.log(soldSocks([1,1,3,1,2,1,3,3,3,3]))


//2. Hitunglah jumlah kata pada sebuah kalimat 

function wordCount (str) {
    let temp = []
    let tempStr = ''
    let specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

    for(let i = 0; i < str.length; i++) {
        if(str[i] ===' ') {
            temp.push(tempStr)
            tempStr = ''
        } else if (i === str.length - 1) {
            temp.push(tempStr)
        } else {
            tempStr += str[i]
        }
    }

    let words = temp.length
    let count = 0

    for(let j = 0; j < temp.length; j++) {
        for(let k = 0; k < temp[j].length; k++) {
            for(let l = 0; l < specialChar.length; l++) {
                if(temp[j][k] === specialChar[l]) {
                 

                    if(k === temp[j].length-1 && temp[j][k] === ',') {
                        continue
                    }

                    if(temp[j][(temp[j].length-1)/2] === '-') {
                        continue;
                    }

                    count ++
                    break;
                }
            }
        }
    }

    return words - count
}

console.log(wordCount('Saat meng*ecat tembok, Agung dib_antu oleh Raihan.'))
console.log(wordCount('Berapa u(mur minimal[ untuk !mengurus ktp?'))
console.log(wordCount('Masing-masing anak mendap(atkan uang jajan ya=ng be&rbeda.'))