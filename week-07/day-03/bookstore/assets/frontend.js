const host = 'http://localhost:3000';
const xhr = new XMLHttpRequest;



xhr.onload = () => {
  if (xhr.status === 200 && xhr.readystate === 4) {
    console.log('#', xhr.response)
  }
};

xhr.open('GET', `${host}/api`);
xhr.send(null);