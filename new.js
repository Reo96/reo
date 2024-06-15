// BUBBLING :-
let fun = document.getElementById("female");
fun.addEventListener("mouseenter",()=>{
  fun.innerText="Gay";
})
fun.addEventListener("mouseleave",()=>{
  fun.innerText="Female";
})
let c=document.querySelectorAll(".clas");
let inner = document.getElementById("inner");
let middle = document.getElementById("middle");
let outer = document.getElementById("outer");
//-------------------------------------------------------------------------------------
// EVENTS :-
inner.addEventListener("click",(e)=>{
  e.stopImmediatePropagation();
  alert("inner box was clicked !!");
  
})
middle.addEventListener("click",(e)=>{
  alert("middle box was clicked !!");
})
outer.addEventListener("click",(e)=>{
  e.stopImmediatePropagation();
  alert("outer box was clicked !!");
})
let r=0 ;let g=0 ;let b=0;

setInterval(()=>{
  r+=5;g+=10;b+=15;
  r%=250;g%=250;b%=250;
  document.getElementById("middle").style.backgroundColor= `rgb( ${r}, ${g}, ${b} )`
},100);

// ------------------------------------------------------------------------------------
// PROMISE
let prm =new Promise((resolve,reject)=>{
  let check =Math.random();
  if(check<0.5){
    reject("Nahh ur not good enough");
  }
  else {
    setTimeout(() => {
      console.log('DONE ');
      resolve("Yeahh its in !!");
    }, 2000);
  }
})
prm.then((a)=>{
  console.log(a);
}).catch((err)=>{console.log(err);
})


// ------------------------------------------------------------
// ASYNC AND AWAIT
async function func(){

    let temp = new Promise ((resolve,reject)=>{
      setTimeout(() => {
        resolve("35 deg");        
      }, 2500);
    })
    let humidity = new Promise ((resolve,reject)=>{
      setTimeout(() => {
        resolve("60%");
      }, 6000);
    })
    
    // temp.then(alert);
    // humidity.then(alert);
    console.log(alert('calculaing JATAULI temperature...'));    
    let T = await temp;
    console.log(alert('JATAULI temperature : '+T));
    console.log(alert('calculaing JATAULI humidity...'));
    let H = await humidity;
    console.log(alert('JATAULI humidity : '+H));
    return [T,H];
}
let whether = func();
// console.log(alert('!!!!!!!!'+whether));
let other =new Promise((resolve,reject)=>{ 
  alert('I will not wait');
})

async function main(){
  func();
}



