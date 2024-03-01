let counter = 0;
let input = document.getElementById('taskInput');
let all = document.querySelector('#all');
let done = document.querySelector('#done');
let pending =document.querySelector("#pending");
function createTask() {
    if (  input.value == ""  || input.value.length < 10 ) {
        alert( "Please enter task" );
    }
    else{
        
        let ul = document.getElementById('tasks');
        const li = document.createElement('li');
        li.textContent = input.value;
        counter++;
        localStorage.setItem(`task${counter}`, input.value);
        let btn = document.createElement('button');
        btn.textContent = 'Delete';
        li.appendChild(btn);
        btn.addEventListener("click", function () {
            localStorage.removeItem(`task${counter}`);
            counter--;
            ul.removeChild(li);
        });
        li.onclick=function () {
            li.classList.toggle('done')
            done.textContent =document.querySelectorAll('.done').length;
        }
        ul.appendChild(li);
        input.value = ''; 
    }
        all.textContent =localStorage.length;
        pending.textContent =all.textContent -done.textContent
}

window.onload = function () {
    for (let i = 1; i <= localStorage.length; i++) {
        let key = localStorage.key(i - 1);
        if (key.startsWith('task')) {
            let task = localStorage.getItem(key);
            let li = document.createElement('li');
            li.textContent = task;
            let btn = document.createElement('button');
            btn.textContent = 'Delete';
            btn.addEventListener('click', function () {
                localStorage.removeItem(key);
                li.remove();
                
            });
            li.appendChild(btn);
            li.onclick=function () {
                li.classList.toggle('done')
                
                done.textContent =document.querySelectorAll('.done').length;
            }
            document.getElementById('tasks').appendChild(li);
            counter++;
        }
    }
    all.textContent =localStorage.length;
    pending.textContent =all.textContent -done.textContent
};
