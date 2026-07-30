function start(){
document.querySelector('.sky').style.display='none';
document.getElementById('lesson').classList.remove('hidden');
}
function check(x){
document.getElementById('msg').innerHTML=
x===8?'✅ Correct! 2×2×2 = 8':'❌ Try Again!';
}