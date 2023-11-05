 
// let a=[1,2,3,4,5,6,7,8,9,10];
// let res= a.map((ele)=>{
// ele*4
// })
// console.log(res);
// let res2 = a.filter(ele=> ele>5 && ele%2===0 ) 
// console.log(res2);

// let pro = new Promise(async (res,rej)=>{
// let api = await fetch("https://api.github.com/users")
// res(api)
// }).then((data)=>{
//     console.log(data);
// })

let body = document.querySelector("body");

let input1= document.createElement("input");
body.appendChild(input1);
let button1 = document.createElement("button");
body.appendChild(button1);
button1.innerText="add";
button1.addEventListener(`click`,()=>{
    let div1= document.createElement("div");
    let h1 = document.createElement("h1");
    h1.innerText=input1.value;
    console.log(input1.value);

    div1.appendChild(h1)
    div1.style.backgroundColor="red"
    div1.style.paddingBottom="25px";
    div1.style.textAlign="center";
    div1.style.height="200px"
    div1.style.width="300px"
    div1.style.border="2px"
    body.appendChild(div1)
})
