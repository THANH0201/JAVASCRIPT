'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

//const target = document.querySelector('#target');
// ad select
const select = document.createElement('select');
select.id = 'target';
//ad label for select
const label = document.createElement('label');
label.innerText = `The student's name:`;
label.htmlFor = 'target';

document.body.appendChild(label);
document.body.appendChild(select);

//get name from array
for (const student of students) {
  const option = document.createElement('option');
  option.value = student.id;
  option.innerText = student.name;
  target.appendChild(option);
}

