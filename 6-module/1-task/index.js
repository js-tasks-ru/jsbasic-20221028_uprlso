/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */



export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.creat = this.createMain();
    this.elem;
    
  }
  createMain() {
    let body = document.createElement("table");
    
    this.createHead(body);
    this.createTbody(body);

    return this.elem = body;

    
  }
  createHead(body) {
    let headers = ["names", "age", "salary", "city"];
    let tHead = document.createElement("thead");
    let rowHeader = document.createElement("tr");
    
    
    headers.forEach(elem => {
      let cellTh = document.createElement("th");
      let textNode = document.createTextNode(elem);

      cellTh.appendChild(textNode);
      rowHeader.appendChild(cellTh);
    })
    tHead.appendChild(rowHeader);
    body.appendChild(tHead);
  }
  createTbody(body) {
    let tBody = document.createElement("tbody");

    this.rows.forEach(row => {
      let tbRow = document.createElement("tr");
      let cell = document.createElement("td");
      let buttonX = document.createElement("button");
      tbRow.classList.add("user_info");
      buttonX.classList.add("remove_but");
      buttonX.innerHTML ="X";
      buttonX.onclick = ((event) =>{
        if (event.target.className != "remove_but") return;

        let cellBut = event.target.closest(".user_info");
        cellBut.remove();
      })
      

      Object.values(row).forEach(cell =>{
        let cellTb = document.createElement("td");
        let textNode = document.createTextNode(cell);

        cellTb.appendChild(textNode);
        tbRow.appendChild(cellTb);
      })
      
      cell.appendChild(buttonX);
      tbRow.appendChild(cell);
      tBody.appendChild(tbRow);
      body.appendChild(tBody);
    })
  }
}








