const showData = document.querySelector(".list-todo")
const inputData = document.querySelector(".input")
const btnAdd = document.querySelector(".btn-add-data")

let data = []

// show data
const renderData = () => {
    let toDoList = ""

    if(data.length < 1) {
        toDoList += `
        <img class="illustration todo-illustration" src="img/todo.svg" alt="">
        `
        showData.innerHTML = toDoList
    }else {

        data.forEach((element, i) => {
            let btnDone =   `<button class="btn-done" onclick="done(${element.id})">Done</button>`
            if(element.status) {
                
                btnDone = `<img class="check-icon icon" src="img/check.png" alt="checked">`
            }

            toDoList += `
            <div class="list-item text-center mb-1">
                <span>${i+1}.</span>
                <p class="p-list">${element.description}</p>
                ${btnDone}
                <img class="icon" src="img/garbage.png" onclick="deleteData(${element.id})" alt="delete">
            </div>
            `

            showData.innerHTML = toDoList
        
        })
    }
}


// Add Data
btnAdd.addEventListener('click', () => {
    
    if(!inputData.value) {
        alert("Input cannot be empty!")
        return
    }else {
        const toDo = {
        id : Date.now(),
        description : inputData.value,
        status : false
        }

        data.push(toDo)
        inputData.value = null
        renderData()
    }

    
})

// done 

const done = (id) => {
    data.forEach(e => {
        if(e.id ==id) {
            e.status = true
        }
    })
    renderData()
}

// delete

const deleteData = (id) => {
    data.forEach((e, i) => {
        if(e.id == id) {
            data.splice(i, 1)
        }
    })
    renderData()
}

renderData()