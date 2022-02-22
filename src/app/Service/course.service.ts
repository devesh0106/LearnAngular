import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
getCourse(){
  return [
    {id: 1 , name: "course 1"},
    {id: 2 , name: "course 2"},
    {id: 3 , name: "course 3"}];
}
  constructor() { }
}
