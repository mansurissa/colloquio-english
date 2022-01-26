const inputName = document.querySelector('#name');
const sendBtn = document.querySelector('.sendBtn');
const resetBtn = document.querySelector('.resetBtn');
const textArea = document.querySelector('.msg');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const company = document.querySelector('#company');
const nameLabel = document.querySelector('#nameLabel');
const emailLabel = document.querySelector('#emailLabel');
const phoneLabel = document.querySelector('#phoneLabel');
const companyLabel = document.querySelector('#companyLabel');
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

phone.addEventListener('keypress', (e) => {
    if (!phone.value.match(/^\d{7,9}$/)) {
        phone.style.borderColor = 'red';
        phoneLabel.textContent = 'Phone number must have between 8 and 10 digits';
        phoneLabel.style.color = 'red';
    }
});

const validator =((inputItem, labelName,errorMsg)=>{
    if (inputItem.value.length < 1) {
        labelName.textContent = errorMsg;
        inputItem.style.borderColor = 'red';
        labelName.style.color = 'red';
    }
})

sendBtn.addEventListener('click', (e) => {
    e.preventDefault()

    if (email.value.length < 1 || !email.value.match(emailRegex)){
        emailLabel.textContent = 'Write an email(example@example.com)'
        email.style.borderColor = 'red';
        emailLabel.style.color = 'red';
    }
    validator(inputName,nameLabel,'Write your name and surname')
    validator(phone,phoneLabel,'Write your phone number')
    validator(company,companyLabel,'Write your company name')
    validator(textArea,textArea,'Write your message')

    if(nameLabel.style.color !=="red" && emailLabel.style.color!=="red" && companyLabel.style.color!=="red" && phoneLabel.style.color!=="red" && textArea.style.color!=="red"){
   console.log("Sending request to Backendy")
    }
});

resetBtn.addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelectorAll('input').forEach((input) => {
        input.style.borderColor = 'black';
        textArea.style.borderColor = 'black';
        textArea.style.color = 'black';
        input.value = '';
        textArea.value = ''
    });
    document.querySelectorAll('label').forEach((label) => label.style.color = 'black')
    nameLabel.textContent = 'Name';
    companyLabel.textContent = 'Company';
    textArea.style.borderColor = 'black';
    emailLabel.textContent = 'Email';
    phoneLabel.textContent = 'Phone';
    textArea.style.color = 'black';
    textArea.textContent= '';
});

const removeError = (inputName, labelName) => {
    const actualLabel = labelName.textContent
    inputName.addEventListener('keydown', () => {
        inputName.style.borderColor =  'black';
        labelName.textContent = actualLabel;
       labelName.style.color =  'black';
    })
}

removeError(inputName, nameLabel)
removeError(phone, phoneLabel)
removeError(company, companyLabel)
removeError(email, emailLabel)
removeError(textArea, textArea)