const button = document.getElementById('button');
const localStorageKey = 'inputData';

let table = document.getElementById('table');
let row;

let firstName = document.getElementById('validationCustom01');
let lastName = document.getElementById('validationCustom02');
let address  = document.getElementById('validationCustom03');
let birthday = document.getElementById('birthday');
let gender = document.getElementById('validationCustom04');
let notes = document.getElementById('floatingTextarea2');
let modal = document.querySelector('.modal');
let savedForms = JSON.parse(localStorage.getItem("forms"));
let index = savedForms === null ? 0 : Number(localStorage.index);
let submitedForms = savedForms === null ? [] : savedForms;


const inputArr = [firstName, lastName, address, birthday, gender, notes]
button.addEventListener('click', (e) => {
    e.preventDefault();

    const filledArr = inputArr.filter((input) => input.value.trim() !== "");
    
    if (!/^[A-z]+$/.test(firstName.value)) {
      firstName.style.border = '2px solid red'
      return;
    }
  
    if (!/^[A-z]+$/.test(lastName.value)) {
      lastName.style.border = '2px solid red'
      return;
    }
    if (filledArr){
      index ++;
      submitedForms.push({
        index,
        form: {
          firstName: firstName.value,
          lastName: lastName.value,
          adress: address.value,
          date: birthday.value,
          gender: gender.value,
          note: notes.value,
        },
      })};

    localStorage.setItem('forms', JSON.stringify(submitedForms));
    localStorage.setItem('index', JSON.stringify(index));

    row++;
    firstName.value = '';
    lastName.value = '';
    address.value = '';
    birthday.value = '';
    gender.value = '';
    notes.value = '';
    location.reload();
});


const deletebtn = document.createElement('div');
deletebtn.textContent = 'X';
deletebtn.style.backgroundColor = 'red';
deletebtn.style.color = 'white';
deletebtn.style.padding = '0.25rem';
deletebtn.style.textAlign = 'center';

let close = document.querySelector('.close');
close.addEventListener('click', ()  => {
  modal.style.display = 'none';
  document.getElementById('myForm').style.opacity = 1;
});



savedForms.forEach((item) => {
  let newRow = table.insertRow(row);
      
  let cellOne = newRow.insertCell(0);
  let cellTwo = newRow.insertCell(1);
  let cellThree = newRow.insertCell(2);
  let cellFour = newRow.insertCell(3);
  let cellFive = newRow.insertCell(4);
  let cellSix = newRow.insertCell(5);
  let cellSeven = newRow.insertCell(6);
  let modalText = document.getElementById('modal-text');

  cellOne.innerHTML = item.index;
  cellTwo.innerHTML = item.form.firstName;
  cellThree.innerHTML =  item.form.lastName;
  cellFour.innerHTML =  item.form.adress;
  cellFive.innerHTML =  item.form.firstName.date;
  cellSix.innerHTML =  item.form.gender;
  modalText .textContent = item.form.note
      
  const deletebtn = document.createElement('div');
  deletebtn.textContent = 'X';
  deletebtn.style.backgroundColor = 'red';
  deletebtn.style.color = 'white';
  deletebtn.style.padding = '0.25rem';
  deletebtn.style.textAlign = 'center';
  deletebtn.style.cursor = 'pointer';

  cellSeven.append(deletebtn);


  deletebtn.addEventListener('click', (e) => {
  e.preventDefault();
  submitedForms.splice(item.id-1,1);
  localStorage.setItem('forms', JSON.stringify(submitedForms));  
  cellOne.remove();
  cellTwo.remove();
  cellThree.remove();
  cellFour.remove();
  cellFive.remove();
  cellSix.remove();
  cellSeven.remove();
  index--;
  localStorage.setItem('index', JSON.stringify(index));
});
  newRow.addEventListener('click', () => {
    if (event.target.innerHTML !== 'X') {
      modal.style.display = 'block';
      modal.style.marginTop = '10vh';
      document.getElementById('myForm').style.opacity = 0.3;
    }
  });
})
