const drawingPad =document.querySelector(".drawing-pad")

for (let i = 0;i<16;i++){
  console.log("loop working",i)
  let drawPixelVer= document.createElement("div")
  drawPixelVer.classList.add("pixelVer")
  for (let l = 0;l<16;l++){
    console.log("drawPixelHor",i,l)
    let drawPixel= document.createElement("div")
    drawPixel.classList.add("pixel")
    //drawPixel.addEventListener("mousedown",()=> {
    //drawPixel.setAttribute("style","colors:green;background:blue;")
    //})
    drawPixelVer.appendChild(drawPixel);
  }
  drawingPad.appendChild(drawPixelVer);
}
