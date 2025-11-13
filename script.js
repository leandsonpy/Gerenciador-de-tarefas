const apiUrl = 'httpp://localhost:3000/tasks';

const form = document.getElementById('task-form');
const taskList = document.getElementById ('task-list');

form.addEventListener('submit',async (e) =>{
e.preventDefault();

form.addEventListener('submit', async (e)=>{
e.preventDefault();
})

const title = document.getElementById('title').value;
const description = document.getElementById('description').value;

try{
    const res = await fetch(apiUrl,{
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({title, description})
    })

}catch (error){

}
})