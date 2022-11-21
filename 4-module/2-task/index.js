function makeDiagonalRed(table) {
 let rowLength = table.rows.length

 for (let i = 0; i < rowLength; i++)  {
    table.rows[i].cells[i].style.backgroundColor = 'red';
  }

  return table;
}
