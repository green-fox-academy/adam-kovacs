'use strict'
let responseData = [];
let httpRequest = new XMLHttpRequest;

let table = document.querySelector('#main-table');

httpRequest.onload = () => {
  if (httpRequest.readyState === 4 && httpRequest.status === 200) {
    responseData = JSON.parse(httpRequest.responseText).response.docs;
    responseData.forEach(element => {
      let newRow = document.createElement('tr');
      let newChild = document.createElement('td');
      newRow.appendChild(newChild);
      let date = `${element.pub_date.slice(0, 4)}.${element.pub_date.slice(5, 7)}.${element.pub_date.slice(8, 10)}., ${element.pub_date.slice(11, 19)}`;
      newChild.innerHTML = `<h1>${element.headline.main}</h1>${element.snippet}<h2>${date}</h2>`;
      table.appendChild(newRow);
    });

    document.querySelectorAll('h1').forEach((header, i) => {
        header.addEventListener('click', () => {
          window.open(responseData[i].web_url);
        });
    })
  }
};

httpRequest.open('GET', 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=apollo+11+moon+landing+1969&api-key=eedae8997ebb4f41a817a7359c23150f', true);
httpRequest.send(null);