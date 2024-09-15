const drawingPad =document.querySelector(".drawing-pad")
var gridNum=16
function createPixels(grid,grid){
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

}
createPixels(gridNum,gridNum)

const reset=document.querySelector(".resetButton")

function resetFunction(){
  console.log("reset button is clicked");

  //delete all of the divs horizontals
  while (drawingPad.firstChild) {
    drawingPad.removeChild(drawingPad.firstChild);
  }
  
  var grid=prompt("how many grid do you want?",16)
  var correct=true
  while(correct==true){
    if(grid>0){
      correct=false
    }
    else{
      var grid=prompt("please enter positive value",16)
    }
  }
  //delete all of the divs horizontals
}
