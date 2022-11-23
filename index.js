const { Random } =  require("random-js");

const random = new Random();

let password = []
const upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const lower =  ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const number = [0,1,2,3,4,5,6,7,8,9]
const symbols = ['!','@','#','$','%','&','*','(',')','?','°','/','|','=','+','-','_',',','.',':',':','{','}','[',']']
const c = 15

while (c > password.length){

    let i = random.integer(0,3)
    console.log(i)
    if(i === 0){
        i = random.integer(0,25)
        password.push(upper[i])
        console.log(upper[i])
    }else if( i === 1){
        i = random.integer(0,25)
        password.push(lower[i])
        console.log(lower[i])
    }else if(i === 2){
        i = random.integer(0,9)
        password.push(number[i])
        console.log(number[i])
    }else if(i === 3){
        i = random.integer(0,24)
        password.push(symbols[i])
        console.log(i)
        console.log(symbols[i])
    }
}
console.log(password)