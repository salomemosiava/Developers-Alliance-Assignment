(() => {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('change', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })
  })()
const button = document.getElementById('button');
const localStorageKey = 'inputData';

let table = document.getElementById('table');
let row = 1;
let index = 1;

let firstName = document.getElementById('validationCustom01');
let lastName = document.getElementById('validationCustom02');
let address  = document.getElementById('validationCustom03');
let birthday = document.getElementById('birthday');
let gender = document.getElementById('validationCustom04');
let notes = document.getElementById('floatingTextarea2');
let modal = document.querySelector('.modal');

const sendStorage = (item) => {
  item.addEventListener('change', () => {
    localStorage.setItem(`${item.id}`, item.value);
  });
 };
 sendStorage(firstName);
 sendStorage(lastName);
 sendStorage(address);
 sendStorage(birthday);
 sendStorage(gender);
 sendStorage(notes);

 firstName.value = localStorage.getItem('validationCustom01');
 lastName.value = localStorage.getItem('validationCustom02');
 address.value = localStorage.getItem('validationCustom03');
 birthday.value = localStorage.getItem('birthday');
 gender.value = localStorage.getItem('validationCustom04');
 notes.textContent = localStorage.getItem('floatingTextarea2');





button.addEventListener('click', (e) => {
  
    e.preventDefault();

    const deletebtn = document.createElement('div');
    deletebtn.textContent = 'X';
    deletebtn.style.backgroundColor = 'red';
    deletebtn.style.color = 'white';
    deletebtn.style.padding = '0.25rem';
    deletebtn.style.textAlign = 'center';


    let newRow = table.insertRow(row);


    if (!firstName.value || !lastName.value || !address.value) {
        event.preventDefault();
    }
    else {
      
        let cellOne = newRow.insertCell(0);
        let cellTwo = newRow.insertCell(1);
        let cellThree = newRow.insertCell(2);
        let cellFour = newRow.insertCell(3);
        let cellFive = newRow.insertCell(4);
        let cellSix = newRow.insertCell(5);
        let cellSeven = newRow.insertCell(6);
        let modalText = document.getElementById('modal-text');

        cellOne.innerHTML = index;
        cellTwo.innerHTML = localStorage.getItem('validationCustom01');
        cellThree.innerHTML = localStorage.getItem('validationCustom02');
        cellFour.innerHTML = localStorage.getItem('validationCustom03');
        cellFive.innerHTML = localStorage.getItem('birthday');
        cellSix.innerHTML = localStorage.getItem('validationCustom04');
        cellSeven.append(deletebtn);
        modalText .textContent = localStorage.getItem('floatingTextarea2');
        index++;

        newRow.addEventListener('click', () => {
          if (event.target.innerHTML !== 'X') {
            modal.style.display = 'block';
            modal.style.top = '80vh';
          }
        });

        deletebtn.addEventListener('click', (e) => {
          e.preventDefault();
          cellOne.remove();
          cellTwo.remove();
          cellThree.remove();
          cellFour.remove();
          cellFive.remove();
          cellSix.remove();
          cellSeven.remove();
          index--;
      });
    }


    row++;
    firstName.value = '';
    lastName.value = '';
    address.value = '';
    birthday.value = '';
    gender.value = '';
    notes.value = '';
});

let close = document.querySelector('.close');
close.addEventListener('click', ()  => {
  modal.style.display = 'none';
});