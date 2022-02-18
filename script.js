const section = document.querySelector("section")
const slider = document.querySelector(".slider")
const root = document.documentElement
const nextbtn = document.querySelector(".next-btn")
const prevbtn = document.querySelector(".prev-btn")

/*section.addEventListener("mousedown",dragstart)
document.addEventListener("mouseup",dragend)*/
nextbtn.addEventListener("click", next)
  
prevbtn.addEventListener("click", prev)

function next(event){
  ++index
  addClassOnDrag()
  event.stopPropagation()
}

function prev(){
  --index
  addClassOnDrag()
}

var initDrag = {}
var index = 0
var dragDistance = 0

function dragstart(e){
  initDrag.startDragPosX = e.screenX
  initDrag.startDragMargin = Number(getComputedStyle(slider).getPropertyValue('margin-left').replace("px","")) 
  console.log(getComputedStyle(slider).getPropertyValue('margin-left'));
  document.addEventListener("mousemove",drag)
  
}

function dragend(e){
  document.removeEventListener("mousemove",drag)
  if (dragDistance > 0)
  {
    index--
  }
  else if (dragDistance < 0)
  {
    index++
  }
  slider.style.marginLeft = ""
  addClassOnDrag()
}

function drag(e){
  let x = e.screenX
  dragDistance = 3 *(x - initDrag.startDragPosX)
  let dragpx = initDrag.startDragMargin + dragDistance
  slider.style.marginLeft = `${dragpx}px`
  slider.classList.remove("active")
}

function addClassOnDrag(){
  root.style.setProperty('--index', index);
  slider.classList.add("active")
}