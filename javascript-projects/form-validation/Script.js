const form=document.getElementById('registration-form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password =document.getElementById('password');
const confirmPassword=document.getElementById('confirmPassword');

form.addEventListener('submit',function(event){
    event.preventDefault();
    validateForm();
});

function validation(){
    //clear previous error messages
    const errorMessages=document.querySelectorAll('error-message');
    errorMessages.forEach((msg)=> msg.computedStyleMap.display='none');

    //validate username
    if(username.Value.trim()===''){
        showError(username,'Username is required');


    }
    // Validate email
    if(email.value.trim()===''){
        showError(email,'email is required');
    }
    // validate password
    if(password.value.trim()===''){
        showError(password,"password is rewuired");
    }
    // validate conform password
    if(confirmPassword.value.trim()===''){
        showError(confirmPassword,"confirm Password is required");
    }
    else if(password.value.trim()!==confirmPassword.value.trim()){
        showError(confirmPassword,"Password do not match");

    }
    
}
function showError(input,message){
    const formGroup=input.parentElement;
    const errorMessage=formGroup.querySelector('.error-message');
    errorMessage.textContent=message;
    errorMessage.style.display='block';
}
function isValidEmail(email){
    const re=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return re.test(String(email).toLowerCase());
}