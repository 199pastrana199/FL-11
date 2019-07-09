let email = 6;
let password = 5;


let mail = prompt('Please enter your email to proceed!');
let key;


if (mail === '' || key === '') {
  alert('Canceled');
} if (mail === null || key === null) {
  alert('Canceled');
} if (mail !== null){
  while (mail.length < email) {
    alert('I dont know any emails having name length less than 6 symbols');
    break;
  }
} if (mail === 'user@gmail.com' || mail === 'admin@gmail.com') {
    key = prompt('enter your password');
} else{
  alert('I don’t know you');
} if (mail === 'admin@gmail.com' &&  key === 'AdminPass') {
  alert('Hello Admin');
} else if (mail === 'user@gmail.com' && key === 'UserPass') {
  alert('Hello User');
} else if (mail === 'admin@gmail.com' && key !== 'AdminPass' || mail === 'user@gmail.com' && key !== 'UserPass') {
  alert('Wrong password')
} 

let nPrompt;
let repeat;

if (mail === 'admin@gmail.com'|| mail=== 'user@gmail.com') {
  if (confirm('Do you want to change your password?') === false) {
    alert('You have failed the change')
  } else {
    let enterPass = prompt('Enter Old Password');
    if (enterPass === '' || enterPass === null || enterPass != key) {
      alert('Canceled');
    } if (enterPass === key) {
       nPrompt = prompt('Enter new password');
    } if (nPrompt.length < password) {
      alert('It’s too short password. Sorry');
    } else {
        repeat = prompt('enter it again');
    } if (nPrompt !== repeat) {
      alert('You wrote the wrong password');
    } else {
      alert('You have successfully changed your password');
    }
  }
}