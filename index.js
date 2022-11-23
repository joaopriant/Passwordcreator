const { Random } =  require("random-js");

const random = new Random();

let password;
const upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const lower =  ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const number = ['0','1','2','3','4','5','6','7','8','9']
const symbols = ['!','@','#','$','%','&','*','(',')','?','°','/','|',`'`,`"`,'=','+','-','_']

let i = random.integer(0,4)

if(i === 0){

}