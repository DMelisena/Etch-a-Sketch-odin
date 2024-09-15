const drawingPad =document.querySelector(".drawing-pad")
var grid=16
for (let i = 0;i<grid;i++){//first loop determines pixel number on y axis
  //console.log("loop working",i)
  let drawPixelVer= document.createElement("div")
  drawPixelVer.classList.add("pixelVer")
  for (let l = 0;l<grid;l++){
   // console.log("drawPixelHor",i,l)
    let drawPixel= document.createElement("div")
    drawPixel.classList.add("pixel")
    drawPixel.addEventListener("mouseover",()=> {
 //     drawPixel.setAttribute("style","colors:red; background:blue;");
      drawPixel.style.backgroundColor = "blue";
    })
    drawPixelVer.appendChild(drawPixel);
  }
  drawingPad.appendChild(drawPixelVer);
}
const reset=document.querySelector(".resetButton")

