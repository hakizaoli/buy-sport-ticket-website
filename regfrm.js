var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var usenameError = document.getElementById('user-error');
var regError = document.getElementById('reg-error');
var idError = document.getElementById('id-error');


function registrateName(){
  var name = document.getElementById('name-js').value;

  if(name.length == 0){
    nameError.innerHTML = 'Name is required';
    return false;
  }
  if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML = 'Write a full name';
    return false;
  }
  nameError.innerHTML ='valid';
  return true;
}
function registrateUname(){
  var uname = document.getElementById('user-js').value;

  if(uname.length == 0){
    usenameError.innerHTML = 'UserName is required';
    return false;
  }
  if(!uname.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    usenameError.innerHTML = 'Write a user name';
    return false;
  }
  usenameError.innerHTML ='valid';
  return true;
}
function registrateEmail(){
  var email = document.getElementById('mail-js').value;

  if(email.length == 0){
    emailError.innerHTML = 'Email is required';
    return false;
  }
  if(!email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    emailError.innerHTML = 'Email is invalid';
    return false;
  }
  emailError.innerHTML ='valid';
  return true;
}
function registratePhone(){
  var phone = document.getElementById('nums-js').value;

  if(phone.length == 0){
   phoneError.innerHTML= 'Phone No is required';
   return false;
  }
  if(phone.length !== 10){
   phoneError.innerHTML= 'Phone No should be 10 digits';
   return false;
  }
  if(!phone.match(/^[0-9]{10}$/)){
   phoneError.innerHTML= 'Only digits please!';
   return false;
  }
  phoneError.innerHTML = 'valid'
  return true;
}
function registrateCard(){
  var card = document.getElementById('number-js').value;

  if(card.length == 0){
   idError.innerHTML= 'Id card No is required';
   return false;
  }
  if(card.length !== 16){
   idError.innerHTML= 'Id card No should be 16 digits';
   return false;
  }
  if(!card.match(/^[0-9]{16}$/)){
   idError.innerHTML= 'Only digits please!';
   return false;
  }
  idError.innerHTML = 'valid'
  return true;
}