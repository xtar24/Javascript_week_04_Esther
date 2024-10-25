
const users = [
  { firstName: 'John', lastName: 'Doe', complexion: 'Fair', occupation: 'Engineer' },
  { firstName: 'Jane', lastName: 'Smith', complexion: 'Dark', occupation: 'Doctor' },
  { firstName: 'Alice', lastName: 'Johnson', complexion: 'Medium', occupation: 'Artist' },
  { firstName: 'Bob', lastName: 'Brown', complexion: 'Light', occupation: 'Teacher' }
];


users.forEach(user => {

  const userDiv = document.createElement('div');


  userDiv.innerHTML = `
    <p>First Name: ${user.firstName}</p>
    <p>Last Name: ${user.lastName}</p>
    <p>Complexion: ${user.complexion}</p>
    <p>Occupation: ${user.occupation}</p>
    <hr>
  `;


  document.body.appendChild(userDiv);
});

