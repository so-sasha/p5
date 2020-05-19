document.getElementById('menu').onclick = e => {
  e.target.style.display = 'none';
  document.getElementById('technology').style.display = 'block';
  document.getElementById('works').style.display = 'block';
}

document.getElementById('burger').onclick = e => {
  e.target.style.display = 'none';
  document.getElementById('technology').style.display = 'block';
  document.getElementById('works').style.display = 'block';
}

// let myCanvas = createCanvas(windowWidth, windowHeight);
// // прикрепляем канвас в заранее созданный элемент
// myCanvas.parent("canvas");
//
// function windowResized() {
// resizeCanvas(windowWidth, windowHeight);
// }
