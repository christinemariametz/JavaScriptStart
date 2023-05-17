/////////     JS - Tag 05      ////////////     17.05.2023


//    Du erstellst eine Todo-App für das Terminal.

// 1. Die Todos werden in einem Array todos gespeichert:

const todos = [

    { description: "CSS lernen",
    done: false },

    { description: "JS lernen",
    done: false }
];



// 2. Erstelle eine Funktion listTodos(), die alle Todos nacheinander in der Konsole auflistet:

function listTodos() {
    for (const todo of todos) {
       if (todo.done === false) {
        console.log("[ ]" + " " + todo.description);
       } else {
        console.log("[X] " + todo.description);
       }
    }
}


// 3. Erstelle eine Funktion addTodo(todo), die einen Parameter besitzt, über den ein neues Todo in das todos-Array hinzugefügt werden kann.
////////  3.1 Stelle sicher, dass kein leeres Todo oder "undefined" hinzugefügt wird


function addTodo(todo) {
    todos.push(todo);
    return "Todo hinzugefügt";
     }

////////                Bonus                 ///////

// 1. Erstelle eine Funktion deleteTodo(todo), mit der über einen reingegebenen Parameter ein Todo gelöscht werden kann

function deleteTodo(todo) {
    todos.pop(todo);
    return "Todo erledigt";
    }


// 2. Die Funktion listTodos() listet weiterhin alle Todos auf, aber ein einzelnes Todo wird nach der Struktur "[ ] CSS lernen" auf, wenn es noch nicht fertig ist (done: false) und [X] JS lernen, wenn es fertig ist (done: true) angezeigt


// 3. Erstelle eine Funktion doneTodo(todo), mit der über einen Parameter ein Todo angegeben werden kann, dessen done-Status sich von false zu true ändert

function doneTodo(description) {
    for (const todo of todos) {
    if (todo.description === description) {
        todo.done = true
        }
    }
}

// doneTodo("JS lernen")

// 4. Erstelle eine Funktion showOpenTodos(), die nur unfertige (done: false) Todos auflistet


// 5. Erstelle eine Funktion deleteDoneTodos(), die alle fertigen (done: true) Todos aus dem Array todos löscht

