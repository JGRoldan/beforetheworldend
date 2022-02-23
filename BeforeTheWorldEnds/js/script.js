const button=document.querySelector('.textArea button'),
    textArea=document.querySelector('.textArea textarea'),
    flex=document.querySelector('.flexContainer');

const insertar = () =>{
    const newContainer=document.createElement('div')
    newContainer.innerHTML = `${textArea.value}`
    flex.insertAdjacentElement("afterbegin",newContainer)
    saveLocalTodo(textArea.value)
    textArea.value = ''
}

const saveLocalTodo = todo =>{
    let todos;
    if(localStorage.getItem('todos') === null){
        todos=[]
    }else{
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.push(todo)
    localStorage.setItem('todos', JSON.stringify(todos))
}

const getTodo = ()=>{
    let todos;
    if(localStorage.getItem('todos') === null){
        todos=[]
    }else{
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.forEach(todo=>{
        const newContainer=document.createElement('div')
        newContainer.innerHTML = todo
        flex.insertAdjacentElement("afterbegin",newContainer)
    });
}

button.addEventListener('click', ()=>{
    if(textArea.value != '') insertar()
    else alert('Debe ingresar un texto')
})

textArea.addEventListener('keyup', e=>{if(e.keyCode === 13) insertar()})
document.addEventListener('DOMContentLoaded',getTodo)

