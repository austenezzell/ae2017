export default function () {
  const introEl = document.querySelector('.hi');
  setTimeout(function(){
    introEl.style.display = 'none';
  }, 3000);
}
