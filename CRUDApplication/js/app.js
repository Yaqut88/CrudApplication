// Create Read Update and Delete 

let users = [];

class User  {
    constructor(id, name, surname, email){
    this.id = id;
    this.name = name;
    this.surname = surname; 
    this.email = email
    }
}

function createUser(e){
   e.preventDefault()
    let name = document.querySelector('.name').value;
    let surname = document.querySelector('.surname').value;
    let email = document.querySelector('.email').value;
    let id = users.length + 1 
    let user = new User(id, name, surname, email);
    users.push(user);
    console.table(users);
}

// show all users
function showUsers(e){
    e.preventDefault()
    let tbody = document.getElementsByTagName('tbody')[0]
    let html = ''

    for(let user of users){
    let template = `
    <tr>
       <td>${user.id}</td>
       <td>${user.name}</td>
       <td>${user.surname}</td>
       <td>${user.email}</td>
    <td>
        <a href="#" class="btn btn-primary" onclick="updateUser()">Edit</a>
        <a href="#" class="btn btn-danger" onclick="deleteUser(event)">Delete</a>
        <a href="#" class="btn btn-warning" onclick="readUser()">Show</a>
    </td>
 </tr> 
    `
    html += template ;
    tbody.innerHTML = html ;
}
}


function readUser(){
    console.log('read user')
}


function updateUser(){
    console.log('update user')
}


// Delete user
function deleteUser(e){
    e.preventDefault()

    // let tBody= document.getElementById('tbody')
    tbody.remove()
}

