// your javascript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);


const con = document.querySelector('#container');
const conn = document.createElement('p');
conn.classList.add('content');
conn.style.color = "red";
conn.textContent = 'Hey I\’m red!';
container.appendChild(conn);


const conBlue = document.querySelector('#container');
const connBlue = document.createElement('h3');
conn.classList.add('content');
connBlue.style.color = "blue";
connBlue.textContent = 'I\’m a blue h3!';
container.appendChild(connBlue);



const conDiv = document.querySelector('#container');
const connDiv = document.createElement('div');
connDiv.classList.add('content');
connDiv.style.border = 10;
connDiv.style.borderStyle = "solid";
connDiv.style.backgroundColor = "pink";
connDiv.textContent = 'I\’m a blue h3!';
container.appendChild(connDiv);



const newH = document.querySelector('#container');
const newH1 = document.createElement('h1');
newH1.classList.add('content');
newH1.textContent = 'I\’m in a div';
connDiv.appendChild(newH1);




const newH2 = document.querySelector('#container');
const newH12 = document.createElement('h1');
newH12.classList.add('content');
newH12.textContent = 'ME TOO';
connDiv.appendChild(newH12);