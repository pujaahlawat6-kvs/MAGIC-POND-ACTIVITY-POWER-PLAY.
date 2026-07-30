const qs=[
{d:'Day 1',a:1},
{d:'Day 2',a:2},
{d:'Day 3',a:4},
{d:'Day 4',a:8},
{d:'Day 5',a:16}
];
let i=0,s=0;
const prompt=document.getElementById('prompt');
function show(){
 if(i>=qs.length){
   prompt.textContent='🎉 Excellent! Module Complete.';
   status.textContent='Final Score: '+s+'/5';
   return;
 }
 prompt.textContent='How many lotus flowers on '+qs[i].d+'?';
 status.textContent='';
}
function guess(v){
 if(i>=qs.length)return;
 if(v===qs[i].a){
   s++;
   status.textContent='✅ Correct!';
 }else{
   status.textContent='❌ Correct answer: '+qs[i].a;
 }
 score.textContent=s;
 i++;
 setTimeout(show,700);
}
show();
