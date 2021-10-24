// daxilinde o hərfi olan tələbələrin adlarını bir arraya yigin
let names = ['Zohrab', 'Qurbani', 'Iskender', 'Nezrin', 'Ferid', 'Huseyn']

let startsWitho = names.filter((word) => word.includes("o"));

console.log(startsWitho);




// tələbə adlarinin boyuk herfle yazilmis versiyasinin oldugu array yaradin
let string = names.toString()
console.log(string.toUpperCase());