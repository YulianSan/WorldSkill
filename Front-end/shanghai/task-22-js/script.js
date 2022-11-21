const columns = document.querySelectorAll(".column");

document.addEventListener("dragstart", (e) => {
  
  var div_base = document.createElement('div');
  div_base.classList.add('img_drag');
  var crt = e.target.cloneNode(true);
  div_base.appendChild(crt);
  document.body.appendChild(div_base);
  e.dataTransfer.setDragImage(div_base, 140, 100);

  e.target.classList.add("dragging");
});

document.addEventListener("dragend", (e) => {
  e.target.classList.remove("dragging");
  const img_drag = document.getElementsByClassName('img_drag')[0];

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