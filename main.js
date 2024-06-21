////// Խնդիր 2: Հատկությունների քանակի հաշվարկ
// Նկարագրություն: Գրել ֆունկցիա, որը կհաշվարկի տրված օբյեկտի հատկությունների քանակը։
//  let obj= {
//     name:"Levon",
//     age:18,
//     addres:"Gyumri",
//     email:"Levon.@gmail.com",
//     ["phone Number"]:"+374856213"
// }
// function hatkutyun(){
//     let count = 0;
//   for(let i in obj){
//   count++
// }
// return count
// }
// console.log(hatkutyun(obj))

// / Խնդիր 4: Օբյեկտի պատճենում
// // Նկարագրություն: Գրել ֆունկցիա, որը կվերադարձնի նոր օբյեկտ, որը պատճեն է տրված օբյեկտի։

//  let obj= {
//     name:"Levon",
//     age:18,
//     addres:"Gyumri",
//     email:"Levon.@gmail.com",
//     ["phone Number"]:"+374856213"
// }
// function copy(){
//     let obj1={};
//     for(let i in obj){
//       obj1[i] = obj[i];
//     }
//     return  obj1 
// }

// console.log(copy(obj))
// console.log(obj)

// / Խնդիր 5: Նոր հատկության ավելացում
// // Նկարագրություն: Գրել ֆունկցիա, որը կավելացնի նոր հատկություն տրված օբյեկտին։

//  let obj= {
//     name:"Levon",
//     age:18,
//     email:"Levon.@gmail.com",
//     ["phone Number"]:"+374856213"
// }
// function avelacum(obj, key, value){
//     obj[key] = value
//     return obj
// }
// console.log(avelacum(obj, "town", "baxramyan"))