const c=document.getElementById('graph');
const ctx=c.getContext('2d');
function draw(){
 let day=+document.getElementById('day').value;
 document.getElementById('d').textContent=day;
 document.getElementById('formula').textContent=
 'Day '+day+': 2^('+(day-1)+') = '+Math.pow(2,day-1)+' lotus flowers';
 ctx.clearRect(0,0,c.width,c.height);
 ctx.beginPath();
 ctx.moveTo(40,320);
 ctx.lineTo(660,320);
 ctx.moveTo(40,320);
 ctx.lineTo(40,20);
 ctx.stroke();
 ctx.beginPath();
 for(let i=1;i<=10;i++){
   let x=40+i*55;
   let y=320-Math.pow(2,i-1)*2;
   if(i==1)ctx.moveTo(x,y);
   else ctx.lineTo(x,y);
   ctx.fillText(i,x-3,338);
   ctx.beginPath();
   ctx.arc(x,y,3,0,Math.PI*2);
   ctx.fill();
   ctx.beginPath();
   if(i>1){
      let py=320-Math.pow(2,i-2)*2;
      let px=40+(i-1)*55;
      ctx.moveTo(px,py);
      ctx.lineTo(x,y);
      ctx.stroke();
   }
 }
}
function check(v){
 document.getElementById('result').textContent=
 v===32?'✅ Correct! Day 6 = 2⁵ = 32':'❌ Try again.';
}
draw();