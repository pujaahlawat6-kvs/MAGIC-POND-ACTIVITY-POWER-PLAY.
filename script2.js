let timer=null;
function render(day){
document.getElementById('day').textContent=day;
let n=Math.pow(2,day-1);
document.getElementById('count').textContent='Lotus Flowers: '+n;
let pond=document.getElementById('pond');
pond.innerHTML='';
let show=Math.min(n,256);
for(let i=0;i<show;i++){
let d=document.createElement('div');
d.className='lotus';
d.textContent='🌸';
pond.appendChild(d);
}
if(n>256){
let t=document.createElement('p');
t.style.width='100%';
t.textContent='...and '+(n-256)+' more flowers!';
pond.appendChild(t);
}
}
function update(){render(+slider.value);}
function autoPlay(){
stopPlay();
let d=+slider.value;
timer=setInterval(()=>{
if(d>=10){stopPlay();return;}
d++;
slider.value=d;
render(d);
},1000);
}
function stopPlay(){if(timer)clearInterval(timer);}
function answer(x){
msg.textContent=x===29?'✅ Correct! Day 29 is half full.':'❌ Think about doubling backwards.';
}
render(1);
