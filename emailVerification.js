const form = document.querySelector(`#getEmail`);
const errorMessage = document.querySelector(`span`)
const inputBox = document.querySelector(`#email`)
const button = document.querySelector(`button`)

const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

form.addEventListener(`submit`, function(event){
    event.preventDefault();

    const emailInput = document.querySelector(`#email`).value;
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(pattern.test(emailInput)){
        
        sessionStorage.setItem('userEmail', emailInput);
        console.log(sessionStorage.getItem('userEmail'));
        window.location.href = `success.html`;
    }else{
        errorMessage.style.visibility = `visible`;
        inputBox.style.color = `hsl(4, 100%, 67%)`;
        inputBox.style.border = `1px solid hsl(4, 100%, 67%)`
        inputBox.style.backgroundColor = `hsla(4, 100%, 67%, 0.164)`
        
    }
});

inputBox.addEventListener('focus', function() {
    inputBox.style.color = 'hsl(231, 7%, 60%)';
    inputBox.style.border = '1px solid hsl(231, 7%, 60%)';
    inputBox.style.backgroundColor = 'white';
    errorMessage.style.visibility = `hidden`;
});
