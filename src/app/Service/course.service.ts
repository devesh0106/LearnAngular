import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
getCourse(){
  return ["course 1","course 2","course 3"];
}
onKeyUp($event:any){
  if($event.keyCode===13)
  console.log($event.target.value); //value is printed in console
}
  constructor() { }
}
