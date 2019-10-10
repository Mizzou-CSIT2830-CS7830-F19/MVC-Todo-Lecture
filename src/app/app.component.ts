import { Component } from "@angular/core";

// code before class October 8, 2019

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "todo-app";

  todoArray = [];

  addTodo(value) {
    if (value !== "") {
      this.todoArray.push(value);
      console.log(this.todoArray);
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
  }

  todoSubmit(value: any) {
    if (value !== "") {
      this.todoArray.push(value.todo);
    } else {
      alert("Field Required");
    }
  }
}
