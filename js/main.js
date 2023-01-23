
"use strict"

const body = document.querySelector('body')
const form = document.querySelector('.form');
const inputs = form.querySelectorAll('input');
const userName = form.querySelector('.name');
const email = form.querySelector('.email');
const phone = form.querySelector('.phone');
const btn = form.querySelector('.btn');

// Validate email
function getEmail(email) {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase())
};

// Validate phone
function getPhone(phone) {

  let re = /^\d+$/;
  return re.test(String(phone));
}

// Validate phone
function getName(name) {
  let re = /^[a-zA-Z]*$/;
  return re.test(String(name));
} 


function getClass(input) {
  input.classList.remove('good')
  input.classList.add('error')
  body.classList.add('body_style')
}



btn.addEventListener('mouseover' , () => {

  let emailValue = email.value;
  let phoneValue = phone.value.trim();
  let nameValue = userName.value


  inputs.forEach( inp => {

    // Check empty inputs
    if(inp.value == '') {
      btn.classList.add('right')
      getClass(inp)
    } else {
      inp.classList.remove('error')
      inp.classList.add('good')
      body.classList.remove('body_style')
    }

    // Check validate email
    if(!getEmail(emailValue)) {
      getClass(email)
    }

    // Check validate phone
    if(!getPhone(phoneValue) || phoneValue.length < 10) {
      getClass(phone)
    }

    
    // Check validate name
    if(!getName(nameValue)) {
      getClass(userName)
    }

  })
    
    if(nameValue && emailValue && phoneValue.length >= 10 && getPhone(phoneValue) && getEmail(emailValue) && getName(nameValue)) {
      btn.classList.remove('left')
      btn.classList.remove('right')
      body.classList.remove('body_style')
    } else {
      btn.classList.add('right')
      body.classList.add('body_style')
    }
    
  // getVecotr(btn)
  if(btn.classList.contains('left') ) {
    btn.classList.remove('left')
    btn.classList.add('right')
  } else if (btn.classList.contains('right') ) {
    btn.classList.remove('right')
    btn.classList.add('left') 
  }

})
