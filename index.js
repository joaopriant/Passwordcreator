function gerador(){
let password = [];
const upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const lower =  ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const number = [0,1,2,3,4,5,6,7,8,9]
const symbols = ['!','@','#','$','%','&','*','(',')','?','°','/','|','=','+','-','_',',','.',':',':','{','}','[',']']
const c = 15

while (c > password.length){

    let i = Math.floor(Math.random()*4) 

    if(i === 0){
        i = Math.floor(Math.random()*26)
        password = password+upper[i]
    }
    else if( i === 1){
        i = Math.floor(Math.random()*26)
        password = password+lower[i] 
    }
    else if(i === 2){
        i = Math.floor(Math.random()*10)
        password = password+number[i]
    }
    else if(i === 3){
        i = Math.floor(Math.random()*25)
        password = password+symbols[i]
    }else{
        continue
    }
}
document.getElementById("exibir").value = password
}
document.getElementById("gerar").onclick = gerador;

