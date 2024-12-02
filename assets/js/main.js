// Elementləri seçirik
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Yeni tapşırıq əlavə etmə funksiyası
function addTodo(e) {
    e.preventDefault()
    const taskText = todoInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Yeni tapşırıq elementi yaradılır
    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');

    // Mətni saxlamaq üçün span
    const span = document.createElement('span');
    span.textContent = taskText;

    // Düymələr divi
    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('buttons');

    // Tamamlama düyməsi
    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete-btn');
    completeBtn.textContent = '✔';
    completeBtn.addEventListener('click', () => {
        todoItem.classList.toggle('completed');
    });

    // Redaktə düyməsi
    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.textContent = '✏';
    editBtn.addEventListener('click', () => {
        const newTask = prompt('Edit your task:', span.textContent);
        if (newTask) {
            span.textContent = newTask.trim();
        }
    });

    // Silmə düyməsi
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = '🗑';
    deleteBtn.addEventListener('click', () => {
        todoList.removeChild(todoItem);
    });

    // Düymələr divinə əlavə olunur
    buttonsDiv.appendChild(completeBtn);
    buttonsDiv.appendChild(editBtn);
    buttonsDiv.appendChild(deleteBtn);

    // Siyahı elementinə əlavə olunur
    todoItem.appendChild(span);
    todoItem.appendChild(buttonsDiv);

    // Siyahıya əlavə olunur
    todoList.appendChild(todoItem);

    // Input təmizlənir
    todoInput.value = '';
}

// "+" düyməsinə klik funksiyası
addBtn.addEventListener('click', addTodo);

// Enter düyməsi ilə əlavə etmə
todoInput.addEventListener('keydown', (event) => {
    event.preventDefault()
    if (event.key === 'Enter') {
        addTodo();
    }
});
