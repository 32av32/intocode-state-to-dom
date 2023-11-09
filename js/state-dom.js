const taskItems = [
    {
        text: 'first task',
        done: false
    },
    {
        text: 'second task',
        done: false
    },
    {
        text: 'third task',
        done: true
    },
    {
        text: 'fourth task',
        done: false
    },
    {
        text: 'fifth task',
        done: true
    },
]

const remove = function(index) {
    taskItems.splice(index, 1)
    render(taskItems)
}

const addTodo = text => {
    taskItems.push({ text, done: false })
    render(taskItems)
}

const checkTodo = index => {
    taskItems[index].done = !taskItems[index].done
    render(taskItems)
}

const render = (items) => {
    const tasksListContainer = document.querySelector('.tasks_list__container')
    tasksListContainer.innerHTML = ''

    items.forEach((item, index) => {
        const taskItem = document.createElement('div')
        taskItem.classList.add('tasks_list__item')

        const taskCheckbox = document.createElement('input')
        taskCheckbox.type = 'checkbox'
        taskCheckbox.checked = item.done
        taskCheckbox.addEventListener('click', event => {
            checkTodo(index)
        })
        taskCheckbox.checked && taskItem.classList.add('completed_task')

        const taskText = document.createElement('p')
        taskText.innerText = item.text
        taskText.classList.add('task_item_text')

        const taskDelete = document.createElement('div')
        taskDelete.classList.add('task_item_delete')
        taskDelete.addEventListener('click', () => remove(index))

        const taskDeleteImg = document.createElement('img')
        taskDeleteImg.src = 'assets/icons8-delete-48.svg'

        taskDelete.append(taskDeleteImg)
        taskItem.append(taskCheckbox, taskText, taskDelete)

        const tasksListContainer = document.querySelector('.tasks_list__container')
        tasksListContainer.append(taskItem)
    })

}

const form = document.forms.add_task_form
form.addEventListener('submit', event => {
    event.preventDefault()
    addTodo(form.add_task_input.value)
    form.add_task_input.value = ''
})

render(taskItems)