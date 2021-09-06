let userList = JSON.parse(localStorage.getItem('userList') || '[]');

console.log(userList);

let list = document.getElementById('list');

if(localStorage.getItem('userList')) {
  let users = [];
  users = JSON.parse(localStorage.getItem('userList'));
  users.forEach(user => {
    list.innerHTML += (`
      <tr>
        <td>${user.first_name}</td>
        <td>${user.birth}</td>
        <td>${user.email}</td>
        <td>${user.gender}</td>
      </tr>
    `);
  });
}

