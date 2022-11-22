let hStatAvail = (tbody => {
  let rowLength = tbody.rows.length;

  for (let i = 0; i < rowLength; i++) {
    let rowcheckAv = tbody.rows[i];
    let cellCheckAv = tbody.rows[i].cells;

    for (cell of cellCheckAv)  {
      if (cell.hasAttribute("data-available")) {
        if (cell.dataset.available === "true") {
          rowcheckAv.classList.add("available");  
        }  else  {
          rowcheckAv.classList.add("unavailable");
        }
      }
    }

    if (rowcheckAv.classList.contains("available") === false &&
        rowcheckAv.classList.contains("unavailable") === false
       ) {
        rowcheckAv.hidden = "true";
    }
  }
});

let hCheckSex = (tbody => {
  let rowLenSex = tbody.rows.length;

  for (let i = 0; i < rowLenSex; i++) {
    let rowCheckSex = tbody.rows[i];
    let cellsCheckSex = tbody.rows[i].cells;

    for (cell of cellsCheckSex) {
      if (cell.innerHTML === "m") {
        rowCheckSex.classList.add("male");
      } 
      if (cell.innerHTML === "f") {
        rowCheckSex.classList.add("female");
      }
    }
  }
});

let hlineStylAge = (tbody => {
  let rowlineLen = tbody.rows.length;
  for (let i = 0; i < rowlineLen; i++) {
    let rowLineStyl = tbody.rows[i];
    let cellsLineStyl = tbody.rows[i].cells;

    for (cell of cellsLineStyl) {
      let cellInfo = cell.innerHTML
      if (!isNaN(cellInfo) && cellInfo < 18) {
        rowLineStyl.style = "text-decoration: line-through";
      }
    }
  }
  
});

function highlight(table) {
  let tbody = table.querySelector("tbody");

  hStatAvail(tbody);
  hCheckSex(tbody);
  hlineStylAge(tbody);
}