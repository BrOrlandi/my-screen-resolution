function updateMyScreenResolution(){
  const swidth = window.screen.width;
  const sheight = window.screen.height;
  const resolution = swidth+' x '+sheight;

  document.querySelector(".size1").innerHTML = resolution;

  const vwidth = window.innerWidth;
  const vheight = window.innerHeight;
  const bresolution = vwidth+' x '+vheight;

  document.querySelector(".size2").innerHTML = bresolution;
}

updateMyScreenResolution();

window.addEventListener('resize', () => {
  console.log('object');
  updateMyScreenResolution();
});