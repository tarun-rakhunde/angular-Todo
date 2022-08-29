import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  arr:any[]=[]
  addTodo(name:string){

this.arr.push({id:this.arr.length,title:name})
console.log(this.arr)
  }

  remove(id:number){
// console.log(id)
this.arr=this.arr.filter((e)=>e.id!==id)
  }
}
