// //let s = { 
//     name: 'sai', age: 18
//  }; 
// //console.log(s.name);
// s.city = "vij";

// //console.log(s.city);
// delete s.city;
// //console.log(s.city);
// s.age = 19;
// console.log(s.age);


// let s={
//     name:'sai',
//     age:18,
//     city:'vij',
//     study(){
//         console.log('HAII');
//     }
// };
// s.study();

let s={
    name:'sai',
    age:18,
address:{
    city:'vij',
    state:'ap'
}};
// console.log(s.address);
// console.log(s.address.city);
for(let key in s){
    if(typeof s[key] === 'object'){
        for(let key1 in s[key]){
            console.log(key1,s[key][key1]);
        }
}
else{
    console.log(key,s[key]);
}
}