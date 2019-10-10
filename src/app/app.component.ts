import { Component } from "@angular/core";

// this code is after class on October 10, 2019

export interface Todo {
  text: string;
  done: boolean;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "todo-app";

  todoArray = [];

  constructor() {
    this.todoArray =
      localStorage.getItem("todos") !== null
        ? JSON.parse(localStorage.getItem("todos"))
        : [];
  }

  addTodo(value) {
    if (value !== "") {
      let dataObject: Todo = {
        text: value,
        done: false
      };

      this.todoArray.push(dataObject);
      console.log(this.todoArray);

      localStorage.setItem("todos", JSON.stringify(this.todoArray));
    } else {
      alert("Field required!");
    }
  }

  deleteItem(todo) {
    for (let i = 0; i < this.todoArray.length; i++) {
      if (todo == this.todoArray[i]) {
        this.todoArray.splice(i, 1);
        console.log("delete item");
      }
    }

    localStorage.setItem("todos", JSON.stringify(this.todoArray));
  }

  todoSubmit(value: any) {
    if (value !== "") {
      console.log(value);
      let dataObject: Todo = {
        text: value,
        done: false
      };
      this.todoArray.push(dataObject);

      localStorage.setItem("todos", JSON.stringify(this.todoArray));
    } else {
      alert("Field Required");
    }
  }

  remaining() {
    let count = 0;

    for (let todo of this.todoArray) {
      count += todo.done ? 0 : 1;
    }

    return count;
  }

  archive() {
    let oldTodos = this.todoArray;

    this.todoArray = [];

    for (let todo of oldTodos) {
      if (!todo.done) this.todoArray.push(todo);
    }

    localStorage.setItem("todos", JSON.stringify(this.todoArray));
  }

  refresh(checked) {
    let tempTodos = JSON.parse(localStorage.getItem("todos"));

    for (let todo of tempTodos) {
      if (checked.text === todo.text) {
        todo.done = !todo.done;

        localStorage.setItem("todos", JSON.stringify(tempTodos));

        this.todoArray = tempTodos;
      }
    }
  }
}
