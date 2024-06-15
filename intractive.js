
console.log("script file")
// let a=prompt("enter your age");
// console.log("your age is"+a);
// let want_to_stay=confirm("are u sure u want to leave ??");
// if(want_to_stay){
//     alert("Battery is low")
// }
let person ={
    "Name":"Rachit",
    "Roll no.":21,
    college:"IIT-P"
}
let k=person.Name;
console.log(k);
k+='ff';
person.college = "passed";
person.Name+=person.college;
console.log(person.Name.toUpperCase());
console.log(person);
let arr=['a','b','c'];
// push(), pop(), shift()(agee se nikalta),unshift()(agee lagaana);
// .tostring()(string conversion) 
// .join("and")
console.log(arr.join(" "));
// function fun(a){
//     let k=a-1;
//     while(k>0){
//         a*=k;
//         k--;
//     }
//     return (a>0)?(a):(1);
// }
document.title="Social Media";
// document.body.style.backgroundColor="green";
function fun(a){
    if(a==0)return 1;
    return a*fun(a-1);
}
let head = document.body.children[0];
console.log(fun(1),fun(2),fun(0),fun(5));
let lists = document.getElementsByClassName("list");
let lis = document.querySelectorAll(".list");
let lili =document.getElementsByTagName("li");
// lis.forEach(e=>{
//     e.style.backgroundColor="green";
// })
// lili.forEach(e=>{
//     e.style.backgroundColor="red";
// })
let navi =document.body.children[0].children[1].children[1];
console.log(lis);
console.log(lili);
console.log(lis[0].innerHTML);
console.log(lis[2].innerText);
console.log(lis[0].outerHTML);
// lis[1].hidden=true;
// lis[1].remove();
// lis[1].innerHTML="1234";
console.log(lis.parentElement);
let nev = document.querySelector(".nav");
// navi.setAttribute("style", "display:block");
console.log(navi.getAttribute("style"));
console.log(nev.getAttribute("style"));
navi.append(d);

let d=document.createElement("div");
d.setAttribute("class","ball");
navi.append(d);
document.getElementsByClassName(".ball").style.backgroundColor="red"; 
// d.innerText="abcabc";

