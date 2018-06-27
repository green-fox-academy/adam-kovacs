const host = 'http://localhost:3000';
const xhr = new XMLHttpRequest;

xhr.onload = () => {
  if (xhr.status == 200 && xhr.readyState == 4) {
    createList(JSON.parse(xhr.response));
  }
};

let createList = (responseObject) => {
  let table = document.querySelector('table');
  responseObject.forEach(book => {
    book = convertToArray(book);
    let newRow = document.createElement('tr');
    table.appendChild(newRow);
    book.forEach(element => {
      let newCell = document.createElement('td');
      newCell.textContent = element;
      newRow.appendChild(newCell);
    });
  });
};

let convertToArray = (book) => {
  return [
    book.book_name,
    book.aut_name,
    book.cate_descrip,
    book.pub_name,
    book.book_price
  ]
}

xhr.open('GET', `${host}/api`);
xhr.send(null);