const first_name = document.getElementById('first_name');
var validName = false;

const birth = document.getElementById('birth');
var validBirth = false;

const email = document.getElementById('email');
var validEmail = false;

const gender = document.getElementById('gender');
var validGender = false;

var msgError = document.getElementById('msgError');
var msgSucess = document.getElementById('msgSucess');

function more() {
  var more = document.querySelector('.disabled');
  more.classList.remove('disabled');

  var less = document.querySelector('.more-question');
  less.style.display = 'none';
}


first_name.addEventListener('keyup', () => {
  if(first_name.value.length <= 2) {
    first_name.style.borderColor = '#ff0000';
  } else {
    first_name.style.borderColor = '#00bb00';
    validName = true;
  }
});

birth.addEventListener('keyup', () => {
  if(birth.value.length <= 8) {
    birth.style.borderColor = '#ff0000';
  } else {
    birth.style.borderColor = '#00bb00';
    validBirth = true;
  }
});

email.addEventListener('keyup', () => {
  if(email.value.length <= 7) {
    email.style.borderColor = '#ff0000';
  } else {
    email.style.borderColor = '#00bb00';
    validEmail = true;
  }
});

gender.addEventListener('click', () => {
  if(gender.value == "") {
    gender.style.borderColor = '#ff0000';
  } else {
    gender.style.borderColor = '#00bb00';
    validGender = true;
  }
});

function register() {
  if(validName && validBirth && validEmail && validGender) {

    let userList = JSON.parse(localStorage.getItem('userList') || '[]');

    userList.push(
      {
        first_name: first_name.value,
        birth: birth.value,
        email: email.value,
        gender: gender.value
      }
    );

    localStorage.setItem('userList', JSON.stringify(userList));

    msgError.style.display = 'none';
    msgError.innerHTML = '';
    msgSucess.style.display = 'block';
    msgSucess.innerHTML = '<strong>Registrando usuário...</strong>';

    setTimeout(() => {
      window.location.href = 'http://127.0.0.1:5500/home.html';
    }, 2000);

  } else {
    msgSucess.style.display = 'none';
    msgSucess.innerHTML = '';
    msgError.style.display = 'block';
    msgError.innerHTML = '<strong>Preencha todos os campos</strong>';
  }
}