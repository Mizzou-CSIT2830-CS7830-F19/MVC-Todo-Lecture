import { Component } from "@angular/core";

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
      let dataObject = {
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
      let dataObject = {
        text: value,
        done: false
      };
      this.todoArray.push(dataObject);

      localStorage.setItem("todos", JSON.stringify(this.todoArray));
    } else {
      alert("Field Required");
    }
  }
}
