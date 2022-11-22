const columns = document.querySelectorAll(".column");
var crt, xI, yI;

document.addEventListener("dragstart", (e) => {

  xI = e.clientX - e.target.offsetLeft;
  yI = e.clientY - e.target.offsetTop;
    
  crt = e.target.cloneNode(true);
  crt.classList.add('drag_image');
  document.body.appendChild(crt);

  e.target.classList.add("dragging");
});

document.addEventListener("dragend", (e) => {
  e.target.classList.remove("dragging");
  const img_drag = document.getElementsByClassName('drag_image')[0];

  document.body.removeChild(img_drag);
});

columns.forEach((item) => {
  item.addEventListener("dragover", (e) => {
    const dragging = document.querySelector(".dragging");
    const applyAfter = getNewPosition(item, e.clientY);

    if (applyAfter) {
      applyAfter.insertAdjacentElement("afterend", dragging);
    } else {
      item.prepend(dragging);
    }
  });
});

function getNewPosition(column, posY) {
  const cards = column.querySelectorAll(".item:not(.dragging)");
  let result;
  
  for (let refer_card of cards) {
    const box = refer_card.getBoundingClientRect();
    const boxCenterY = box.y + box.height / 2;

    if (posY >= boxCenterY) {
        result = refer_card;
    }
    
  }
  
  return result;
}



document.addEventListener('drag', (e)=>{
    let x = e.clientX - xI;
    let y = e.clientY - yI;

    console.log(x, y)
    
    crt.style.left = `${x}px`;
    crt.style.top = `${y}px`;
    crt.style.display = "initial";
})