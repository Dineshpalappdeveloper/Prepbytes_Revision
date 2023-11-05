// q1
// let a =10;
// let b="10";
// // equeality operator 
// if(a==b){
//   console.log("True ==");
// }
// else{
//   console.log("False ===");
// }
// if(a===b){
//   console.log("True ===");
// }else{
//   console.log("False ====");
// }
// q2
// let arr=[2,5,8];
// let arr2=[5,8,9]
// let c=[...arr,5885,...arr2]
// console.log(c);

// q3
// var have Reinitialization and redeclaration 

// var a=10;
// var a=20; // Reinitialization and redeclaration  
// console.log(b);
// var b; // hoisting
// function abc(){
//    {
//         var c=10;
//     }
   
//     console.log(c); // function scope
// }
// abc()

// let 

// let a=10;
// // let a;// not Redeclaration
// a=30; // but reinitialization 

// // console.log(b); // give TDZ
// let b=20;
// function bca(){
//     {
//         let d=10;
//         console.log(d);
//     }
//     console.log(d); // Block scope
// }
// bca()
// const 

// const a=10;
// // let a;// not Redeclaration
// // a=30; // not reinitialization 

// // console.log(b); // give TDZ
// const b=20;
// function bca(){
//     {
//         const d=10;
//         console.log(d);
//     }
//     console.log(d); // Block scope
// }
// bca()
// q3 Hosting

// console.log(c);
// var c=10

// q4 TDZ

// console.log(d);
//  let d;
// q5 first class function

// let b= function abc(){
//     console.log("hello dinesh");
// }
// b()

// q6 pure function 
// function b(a,b){
//     return a+b;
// } 

// console.log(b(5,40));

// q7 execution context 
// q8 setTimeout 

// setTimeout(()=>{
//     console.log("after 3s");
// },3000)
// q9 setInterval

// setInterval(() => {
//     console.log("after 1s pring again and again");
// }, 1000);

// q10 callBack function 


// function callBack(dk){
//     console.log("hello",dk);
// }
// function outer(callBack){
//    let name= "dinesh"
//     callBack(name);
// }
// outer(callBack);

// q11 callBack hell 

// function num1(){
//     let promise = new Promise((res,rej)=>{
//         if(true){
//            res(
//             setTimeout(() => {
//                 // console.log(1);
//                 setTimeout(() => {
//                     console.log(2);
//                     setTimeout(() => {
//                         console.log(3);
//                         setTimeout(() => {
//                             console.log(4);
//                             setTimeout(() => {
//                                 console.log(5);
//                                 setTimeout(() => {
//                                     console.log(6);
//                                     setTimeout(() => {
//                                         console.log(7);
//                                         console.log("finished");
//                                     },7000);
//                                 },6000);
//                             },5000);
//                         },4000);
//                     },3000);
//                 },2000);
//             },1000)
//            )
//         }
//     })
//     promise.then((b)=>{
//         console.log(b);
//     }).catch((e)=>{
//         console.log(e);
//     })
// }
// num1()


// // promise 
// function abc (){

//     let promise = new Promise((res,rej)=>{
//         if(true){
//             res(
//                 setTimeout(() => {
                 
//                     setTimeout(() => {
//                         console.log(2);
//                         setTimeout(() => {
//                             console.log(3);
//                             setTimeout(() => {
//                                 console.log(4);
//                                 setTimeout(() => {
//                                     console.log(5);
//                                     setTimeout(() => {
//                                         console.log(6);
//                                         setTimeout(() => {
//                                             console.log(7);
//                                         console.log("finish");
//                                         }, 7000)
//                                     }, 6000)
//                                 }, 5000)
//                             }, 4000)
//                         }, 3000)
//                     }, 2000)
//                 }, 1000)
//             )
//         }
//     })
//     promise.then((d)=>{
//         console.log(d);
//     })
// }
// abc()

// // q12 undefine NaN not define 
// let a;
// console.log(a); // not declear means undefine
// // console.log(b); // not declear means not define
// let b=10;
// console.log(b-"c");


// q12A Promise 

// let promise = new Promise((res,rej)=>{
//     let a ="dinesh";
//     let b="dinesh";
//     if(a==b){
//         res()
//     }else{
//         rej()
//     }

// })
// promise.then((data)=>{
//     console.log("welcome Dinesh");
// }).catch(()=>{
//     console.log("Denide");
// })
// promise all

// let promise1 = new Promise(()=>{
//     setTimeout(() => {
//         console.log(1);
//     }, 1000);
// })

// let promise2 = new Promise(()=>{
//     setTimeout(() => {
//         console.log(2);
//     }, 2000);
// })

// let promise3 = new Promise(()=>{
//     setTimeout(() => {
//         console.log(3);
//     }, 3000);
// })
// Promise.all([promise1,promise2,promise3]).then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log("err");
// })

// promise chaining

// function display(numbers,timeout){
//    return promise1 = new Promise((res,rej)=>{
//     setTimeout(() => {
//         console.log(numbers);
//         res()
//     }, timeout);
//    })
// }
// display(1,1000).then(()=>display(2,2000)).then(()=>display(3,3000))

// Closure

// function outer(){
//     let a=10;
//     return function inner(){
//         console.log(a);
//     }
// }

// outer()()


 // type of operator
// Assigment
// airthmatic
// bitwise 
// logical
// comparition
// typeOf
// ternary 
// object
// let obj1 ={
//     name:"dinesh"
//     ,
//     ghar:"bihar"
// }
// console.log(obj1);

// function constuctor
// function obj1(name,home,roll){
//     this.name = name,
//     this.home=home,
//     this.roll=roll
// }

// obj1 = new obj1("diensh","is",25)
// console.log(obj1);
// let obj2 =obj1

// obj1.add="home"
// console.log(obj1);
// console.log(obj2);
// console.log("api");
// console.log("api se data lana hai");


// async function data(){
//    let api =  await fetch("https://github.com/api/users")
//    console.log(api);
// }
// data()

// prototype

// function Persion(){
//     this.name="dinesh",
//     this.id=25
// }
// const persion1 = new Persion();
// const persion2 = new Persion();
// Persion.prototype.gender="male";
// console.log(persion2.gender);

// call back hell 

//  function demo(sample1){
// console.log(1);
//  sample1();
// }
//  function demo1(sample1){
// console.log(2);
//  sample1();
// } function demo2(sample1){
// console.log(3);
//  sample1();
// } function demo3(sample1){
// console.log(4);

// }
// function main(demo){
//     console.log("start");
//     demo();
// }
// main(()=>{
//     demo1(()=>{
//         demo2(()=>{
//             demo3()
//         })
//     })
// })
// promiss chaining

// function promise1(num ,timeout){
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             console.log(num);
//             res()
//         }, timeout);
//     })
// }
// promise1(1,1000)
// .then(()=>promise1(2,1000))
// .then(()=>promise1(3,1000))
// .then(()=>promise1(4,1000))
// .then(()=>promise1(5,1000))

// promise all 

// let pro1 = new Promise((res,rej)=>{
//     setTimeout(() => {
//         console.log(1);
//     }, 1000);
// })
// let pro2 = new Promise((res,rej)=>{
//     setTimeout(() => {
//         console.log(2);
//     }, 1000);
// })
// let pro3 = new Promise((res,rej)=>{
//     setTimeout(() => {
//         console.log(3);
//     }, 1000);
// })
// Promise.all([pro1,pro2,pro3]).then((data)=>{
//     console.log(data);
// })
// object

// obj1={
//  nameofBrother:"munna bhai",
//  nameofGang:"davail"
// }
// console.log(obj1);

//  function constructor 

// function hello(name,add,num){
//     this.name=name,
//     this.add=add,
//     this.num=num
// }

// let hello3 = new hello("dinesh","ghar",5521523252);

// hello3.home="gaya";
// console.log(hello3);
// console.log(hello3.home);

// call apply bind 

//  hello={
//    name:"dinesh",
//    vill:"ismailpur",
//    ps: "gurua"
// }

// function bolo(home){
//   console.log( `${this.name} : ${this.vill} : ${this.ps} : ${home}`);
// }
// bolo.call(hello,"home")
// bolo.apply(hello,["mumbai"])
// let binmdr = bolo.bind(hello,"gaua")
// binmdr()

// async function data(){
//     let api =  await fetch("https://api.github.com/users")
//     console.log(api);
//  }
//  data()

//  let  promise1 ;
//    promise1 = new Promise ( async (res,rej)=>{
//       let api =  await fetch("https://api.github.com/users")  
//       console.log(api);
//  })


//  let  promise1 ;
//    promise1 = new Promise ( (res,rej)=>{
//       let api =  fetch("https://api.github.com/users")  
//     //  api ?? "pending "

//     res(api);
//     console.log("done");

//  })
// promise1.then((data)=>{
//     console.log(data);
// })

// function data(){
//     this.name="dinesh",
//     this.home="ghar"
// }
// const obj2 = new data();
// const obj3= new data();

// data.prototype.vill="ismailpur";

// console.log(obj2.vill);
// console.log(obj2);
// console.log(obj3);



// fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(data =>{
//         user = document.getElementById("parent");
//            data.map((e)=>{
//             const li = document.createElement('li');
//             li.textContent=e.name;
//             user.appendChild(li);
//            })
//       }).catch((err)=>{
//         console.log(err);
//       })



// fetch('https://api.github.com/users')
//       .then(response => response.json())
//       .then(data =>{
//         user = document.getElementById("parent");
//            data.map((e)=>{
//             const li = document.createElement('li');
//             li.textContent=e.login;
//             user.appendChild(li);
//            })
//       }).catch((err)=>{
//         console.log(err);
//       })

// fetch("https://api.github.com/users")
// .then(Response=> Response.json())
// .then(data=>{
//  let  body = document.querySelector("ol");
   
//    data.map((ele)=>{
//     let li = document.createElement("li")
//     li.innerText = ele.login;
//     console.log(ele.login);
//     body.appendChild(li)
//    })
// }).catch((error)=>{
//   console.log(error);
// })

// fetch("https://api.github.com/users")
// .then((resolve)=>resolve.json())
// .then((data)=>{
//   let body = document.querySelector("ol");
//   data.map((ele)=>{
//     let li = document.createElement("li");
//     li.innerText=ele.login;
//     body.appendChild(li)
//   })
// })

// let person = {
//   name:"dinesh",
//   state:"bihar"
// }

// function display(roll,id){
//   console.log(`${this.name} : ${this.state } : ${roll} : ${id}` );
// }
// display.call(person,"a23",51)
// display.apply(person,["bca",5258])
// let result = display.bind(person,"bind",12)
// result();

// function abc(name,home,id){
//   this.name= name,
//   this.home=home,
//   this.id=id
// }
// let persion2= new abc("dinesh","gaya",25)
// let persion1=new abc("rakesh","gurua",255)

// abc.prototype.state= "bihar";

// console.log(persion1.state);

 function outer(callBack){
  console.log("start");
  callBack()
 }

function demo(callBack){
  console.log("1");
  callBack()
}


function demo2(callBack){
  console.log("2");
  callBack()
}


function demo3(callBack){
  console.log("3");
  callBack()
}




// outer=>{
//   demo1=>{
//     demo2()=>{
//       demo3()
//     }
//   }
// }

// fetch("https://api.github.com/users")
// .then((res)=>res.json())
// .then((data)=>{
//   let body = document.querySelector("ol")
//   data.map((ele)=>{
//     let li = document.createElement("li")
//     li.innerText=ele.login;
//     body.appendChild(li)

// })
// })

// fetch(`https://jsonplaceholder.typicode.com/users`)
// .then((res)=>res.json())
// .then((data)=>{
//   let body = document.querySelector("tbody");
//   data.map((ele)=>{
//     let tr = document.createElement("tr")
//     let id = document.createElement("td")
//     let name= document.createElement("td")
//     let userName = document.createElement("td")
//     let email = document.createElement("td")

//     id.innerText = ele.id;
//     name.innerText = ele.name;
//     userName.innerText = ele.username;
//     email.innerText = ele.email;

 
//     tr.appendChild(id)
//     tr.appendChild(name)
//     tr.appendChild(userName)
//     tr.appendChild(email)
//     body.appendChild(tr)
//   })
// })

// Promise use 


//  let promise = new Promise((res,rej)=>{
// let api =fetch(`https://jsonplaceholder.typicode.com/users`)
// res(api)
//  })


// promise
// .then((res)=>res.json())
// .then((data)=>{
//   let body = document.querySelector("tbody");
//   data.map((ele)=>{
//     let tr = document.createElement("tr")
//     let id = document.createElement("td")
//     let name= document.createElement("td")
//     let userName = document.createElement("td")
//     let email = document.createElement("td")

//     id.innerText = ele.id;
//     name.innerText = ele.name;
//     userName.innerText = ele.username;
//     email.innerText = ele.email;

 
//     tr.appendChild(id)
//     tr.appendChild(name)
//     tr.appendChild(userName)
//     tr.appendChild(email)
//     body.appendChild(tr)
//   })
// })

// sync await 

//  let promise = new Promise( async(res,rej)=>{
// let api = await fetch(`https://jsonplaceholder.typicode.com/users`)
// res(api)
//  })


// promise
// .then((res)=>res.json())
// .then((data)=>{
//   let body = document.querySelector("tbody");
//   data.map((ele)=>{
//     let tr = document.createElement("tr")
//     let id = document.createElement("td")
//     let name= document.createElement("td")
//     let userName = document.createElement("td")
//     let email = document.createElement("td")

//     id.innerText = ele.id;
//     name.innerText = ele.name;
//     userName.innerText = ele.username;
//     email.innerText = ele.email;

 
//     tr.appendChild(id)
//     tr.appendChild(name)
//     tr.appendChild(userName)
//     tr.appendChild(email)
//     body.appendChild(tr)
//   })
// })


//  async function fun(){
//   let api = await fetch(`https://api.github.com/users`)
//   .then(data1=>data1.json())
//   .then(data=>{
//     let body = document.querySelector("tbody");
//       data.map((ele)=>{
//         let tr = document.createElement("tr")
//         let id = document.createElement("td")
//         let name= document.createElement("td")
   
    
//         id.innerText = ele.id;
//         name.innerText = ele.login;
       
    
     
//         tr.appendChild(id)
//         tr.appendChild(name)
      
//         body.appendChild(tr)
//   })

 
//   })
// }
// fun();

//  print 1 to 5 using Promise each one second 

//   function display(num,timeout){
//   return new Promise((res)=>{
//     setTimeout(() => {
//       res()
//       console.log(num);
//     }, timeout);
//   })
// } 
// display(1,1000).then(()=>{
//   display(2,2000)
// }).then(()=>{
//   display(3,3000)
// })
// .then(()=>{
//   display(4,4000)
// })
// .then(()=>{
//   display(5,5000)
// })
// .then(()=>{
//   display(6,6000)
// })

// // using promise 


//   let pro1= new Promise((res)=>{

//     for(let i=1;i<=5;i++){
//       setTimeout(() => {
//        console.log(i);
//        res(i)
//       }, 1000*i);
//     }
  
//   })

//   pro1.then(()=>{

// })

// let pro = new Promise((res,rej)=>{
//   let std ="prepbytes"
//   let std2= "prepwbytes";
//   if(std==std2){
//     res()
//   }else{
//     rej()
//   }
// }).then(()=>{
//   console.log("yes you are from prepbytes");
// }).catch(()=>{
//   console.log("No you are from prepbytes");
// })


// let pro = new Promise((res,rej)=>{
//   setTimeout(() => {
//     res()
//     console.log(1);
//   }, 1000);
// })
// let pro2 = new Promise((res,rej)=>{
//   setTimeout(() => {
//     res()
//     console.log(2);
//   }, 2000);
// })
// let pro3 = new Promise((res,rej)=>{
//   setTimeout(() => {
//     res()
//     console.log(3);
//   }, 3000);
// })

// Promise.all([pro,pro2,pro3]).then((data)=>{
// // console.log(data);
// }).catch(()=>{
//   console.log("error");
// })


// function ouetr(){
//   let a =10;
//  return function inner(){
//     console.log(a);
//   }
// }
// ouetr()()
// // let func = ouetr();
// // func()

// let obj1= {
//   name:"dinesh",
//   title:"pal"
// }
// console.log(obj1);

// function abc(name,title){
//      this.title=title,
//      this.name=name
// }
// let persion1= new abc("dinesh","pal")

// persion1.add="gaya"

// console.log(persion1);

// let obj = {
//   name:"dinesh",
//   id: 25
// }
// function diensh12(title,roll){
//   console.log(`Name : ${this.name} , id : ${this.id} , 
//   Title : ${title} , Roll : ${roll}
//   `);
// }
// diensh12.call(obj,"pal","02")
// diensh12.apply(obj,["roy","25"])
// let dk1 = diensh12.bind(obj,"pal","02")
// dk1()

// function abc(name,title){
//   this.name=name,
//   this.title=title
// }
// let persion1 = new abc("dinesh","pal");
// let persion2 = new abc("rajesh","roy");

// abc.prototype.id="25";
// console.log(persion2.id);
// console.log(persion1);
// console.log(persion2);

// let parent = {
//   name:"dinesh",
//   sayhello:function(){
//     console.log(`hello : ${this.name}`);
//   }
// }
// let child = Object.create(parent);
// child.name="Ganesh"
// child.sayhello()


// console.log("ganesh");
// obj={
//   name:"dk",
//   id:15,
//   home:"rajsthan"
// }
// for( variable in obj ){
//   console.log(variable);
//   console.log(obj);
// }

// let c= b=>{
// console.log("dk");
// }
// c()

// rest operator spread operator

// let a=[5,5,5];
// console.log(5,...a,554,5451);

// function dk(a,s,d,k,e,r){
// console.log(a+s+d+k+e+r);
// }
// dk(...a,5,5,5)

// function abc(name,title){
//   this.name=name,
//   this.title=title
// }
// function display(name,title,id){
//   abc.call(this,name,title);
//   this.id=id;
// }
// let persion1=new display("dinesh","pal",25);
// let persion2 =new abc("ganesh","God")
// console.log(persion2);
// console.log(persion1);

// let a= 10;
// let b;
//  b=a;
//  a=20;
//  console.log(a,b);

//  const obj1={
//   name:"dinesh"
//  }
// let obj2;
// obj2=obj1;
// obj1.name="ganesh"
// console.log(obj1);
// console.log(obj2);

// tdz 



// console.log(b); // TDZ
// // let b;


// const obj1 = {
//   name:"dinesh",
//   roll:"252"
// }
// const obj2 = {
//   CALSS:"ea23",
//   ...obj1
// }
// console.log(obj1);
// console.log(obj2);


// let ab1=[5,6,8]
// function dk(a,b,c){
// console.log(a+b+c);
// }
// dk(...ab1)

//  function* func1(){
//   yield 1;
//   yield 2;
//   yield 3;
// }
// let func = func1();
// console.log(func.next().value);
// console.log(func.next().value);
// console.log(func.next().value);

//  map vs filter 

let ar =[5,6,8,2,1,10]
// let d=[]

//  let c= ar.map((ele,index,arr)=>
// {
//   return ele*3
//   // let z = ele>8 ?? ""
//   // return z
// // if(ele>5){
// //   console.log(ele,`at index`,index,"in array",arr);
// // }
// }


// )
// console.log(c);
// console.log("filter");

// let f= ar.filter((ele)=>
// {
//   return ele>5
// // if(ele>5){
// //   console.log(ele,`at index`,index,"in array",arr);
// // }
// }


// )

// console.log(f);

// // reduce 
// let ar1 =[80,5,6,8,2,1,10]
// let abc = ar1.reduce((first,ele,index,array)=>{
 
//   return first+ele

// })
// console.log("total",abc);

//   let a = function abc(a,b){
//   return a+b;

//  }
//  console.log(a(50,40));
// pass by value vs refrence 

// let a =10;
// let b;
// b=a;
// a=525;
// console.log(a,b);
// let obj1 ={
//   name:"dinesh"
// }

// let obj2 ;
// obj2=obj1;
// obj1.name="ganesh"
// console.log(obj1);
// console.log(obj2);

// let str = "dinesh"
// let arr =str.split("");
// let count=0;
// arr.map((ele)=>{
//   if(ele==="a" || ele==="e" ||ele==="i" ||ele==="o" ||ele==="u" ){
//     count++
//   }
// })
// console.log(count);



// let arr =[1,2,3,4,5];
// let even=0;
// let odd=0;
// arr.map((ele)=>{
//   if(ele%2===0){
//     even++
//   }else{
//     odd++
//   }
// })
// console.log("even",even , "odd: ",odd);

// create heading q1
// let body = document.querySelector("body");
// let button = document.createElement("button");
// button.innerText= "Create Heading";
// body.appendChild(button);
// button.addEventListener(`click`,()=>{
//     let h1=document.createElement("h1");
//     h1.innerText="MERN Stack";
//     body.appendChild(h1);
// })

//  h1= document.querySelector("h1");
// //  console.log(h1);

// let body = document.querySelector("body")
// let button = document.createElement("button");
// let h1 =document.querySelector("h1")
// body.appendChild(button)
// button.innerText="start clock";
// button.addEventListener(`click`,()=>{

//    setInterval(() => {
//     let time =new Date();

//     h1.innerText= time.toLocaleTimeString();

//    }, 1000);
// })

// let pro1= new Promise((res,rej)=>{
//     let api1  = fetch(`https://api.github.com/users`)
//     res(api1)
// }).then(data=>data.json()).then(data=>{
//     data.map((ele)=>{
//                 console.log(ele.login);
//             })
// })

//  return await fetch(`https://api.github.com/users`)
// .then(res=>res.json())
// .then(dta=>{
//     dta.map((ele)=>{
//         console.log(ele.login);
//     })
// })
// }
// pro1()

// let body = document.querySelector("body")
// let h1= document.createElement("h1")
// h1.innerText="Hello world"
// body.appendChild(h1);
// let button =document.createElement("button")
// button.innerText="Replce Text"
// body.appendChild(button)
// let count =0;
// button.addEventListener(`click`,()=>{
//   if(count===0){
//     h1.innerText="Welcome to elevation Academy"
//     count++;
//   }else{
//     h1.innerText="Hello world"
//     count--;
//   }
// })

// let body = document.querySelector("body")
// let h1= document.createElement("h1");
// let button = document.createElement("button")
// button.innerText="Hide Text"
// h1.innerText="Hello World"
// body.appendChild(h1)
// body.appendChild(button)
// let count =0;
// button.addEventListener(`click`,()=>{
//     if(count%2===0){
//         h1.style.visibility="hidden";
//         button.innerText="UnHide Text"
//         count++
//     }else{
//         h1.style.visibility="visible";
//         button.innerText="Hide Text"
//         count--
//     }

// })

// let arr = [2,5,6,8,9,10]
// let res = arr.map((ele)=> ele>5)
// console.log(res);
// let res2 = arr.filter((ele)=> ele<5)
// console.log(res2);
// spread and rest operator

// let abc= [4,4,4];
// let ab = [4,4,4];
// console.log(...ab,...abc);
// function ak(a,b,c,d,e,f){
//     console.log(a+b+c+d+e+f);
// }
// let d =ak(...ab,...abc);

//  function carry(a){
//       return function carry2(b){
// return function carry3(c){
//  return a+b+c
// }
//       }
// }
// let abc=carry(5)(10)(15);
// console.log(abc);

// let b=10;
// console.log(b??"left value is null or undefine");

// function outerFunc(callBack1){
//     let name="dinesh";
//     callBack1(name)
// }
// function callBack(user){
//    console.log("hello",user);
// }

// outerFunc(callBack);

//  let a =10;
//  let b= "10";
// a==b ? console.log("true") : console.log("false")
// a===b ? console.log("true") : console.log("false")

// var a =10;
// var a; // redeclaration
//  a=20; // reinitialzation
//  console.log(d); // hoisting
//  var d =10;
// var having function scope
//  let a=10;
//   a =10; //  reinitialzation
// //   let a; //  not  redeclaration
//  console.log(b);
//  let b=10;
// let haveing block scope

//  const a =10;
// //  a=20;
// //  console.log(a); // not  reinitialzation
// //  const a; // not  redeclaration
//  console.log(c);
//  const c=10;
//  // const haveing block scope

// let ab = function abc(){
//     console.log("done");
// }
// ab()

//  function outer(){
//     let outervar =10;
//   return function abc(){
//         console.log(outervar);
//     }
//  }
//  outer()()

// let persion ={
//     name:"dinesh",
//     roll:252
// }

// function developer(id,home){
//     console.log("Name :",this.name,"roll :",this.roll,"id: ",id,"home:",home);
// }
// developer.call(persion,"1451","gaya")
// developer.apply(persion,[1254,"jabalpur"])
// let res11 = developer.bind(persion,"1451","gaya");
// res11()

//  function* func(){
//   yield 1,
//   yield 2,
//   yield 3
// }
// let gen = func();
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

//  function abc(name,id){
//   this.name=name,
//   this.id=id

//  }
//  function abc2(name,id,home,roll){
//    abc.call(this,name,id)
//    this.home= home,
//    this.roll =roll
//  }
//  let persion = new abc("dinesh",202);
//  let persion2 = new abc2("ganesh",208,"kelash shikhar",1)
//  console.log(persion2);
//  console.log(persion);

// let obj1={
//   name:"dinesh",
//   sayHello:function (){
//     console.log("hello:",this.name);
//   }
// }

// let new1 = Object.create(obj1)
// new1.name="Ganesh"
// new1.sayHello();

// function persion(name,title){
//     this.name=name,
//     this.title=title
// }
// let persion1= new persion("dinesh","pal")
// persion.prototype.add="gaya"
// console.log(persion1.add);

// function persion(name,title){
//     this.name=name,
//     this.title=title
// }

// let persion1= new persion("dinesh","pal")
// persion1.add="gaya"
// console.log(persion1);

// let bode = document.querySelector("ol");
// let pro = new Promise( async (res,rej)=>{
//  await fetch("https://api.github.com/users")
//   .then(res => res.json())
//   .then(data=>{
//     res(data)
//   })
// }).then(data=>{
//   data.map(ele=>{
//     let li = document.createElement("li")
//     li.innerText=ele.login;
//     bode.appendChild(li)
//   })
// }).catch(err=>{
//   console.log(err);
// })

// let promise1 = new Promise((res,rej)=>{
//   res(5)
// }).then((num)=>{
// for(let i=1;i<=num;i++){
//   console.log(i);
// }
// })

// let pro = function abc(num, time) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log(num);

//     }, time);
//     res()
//   })
// }

// pro(1,1000).then(()=>{
//   pro(2,3000)
// }).then(()=>{
//   pro(3,6000)
// }).then(()=>{
//   pro(4,10000)
// }).then(()=>{
//   pro(5,15000)
// })


// function outer(back) {
//   console.log("start");
//   back();
// }
// function callback(back) {
//   console.log(1);
//   back();
// }
// function callback2(back) {
//   console.log(2);
//   back();
// }
// function callback3(back) {
//   console.log(3);
//   back();
// }
// function callback4(back) {
//   console.log(4);
// }

// outer(() => {
//   callback(() => {
//     callback2(() => {
//       callback3(() => {
//         callback4();
//  });
//     });
//   });
// });


// let arr =[1,2,0,4,0];
// let zeros=0;
// let ones=0;
// arr.map((ele)=>{
//   if(ele===0){
//     zeros++
//   }else if(ele===1){
//     ones++
//   }
// })
// console.log("zeros",zeros , "ones: ",ones);