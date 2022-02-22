import { Component, OnInit } from '@angular/core';
import { CourseService } from '../Service/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses;
  title="Angular Dummy Project";

  constructor(service :CourseService) { 
    this.courses = service.getCourse();

 }

 course={
   title:"Complete Angular Course",
   rating:4.9777,
   students:30023,
   price:5300,
   marks:[21,11,23,2,0]
 }

 text=`The Wonderful Parliament was a session of the English parliament held from October to November 1386 in Westminster Abbey. Called by King Richard II (pictured) to address his need for money, it attempted to reform his administration. Richard had become increasingly unpopular due to perceived extravagance towards his political favourites and the unsuccessful prosecution of war against France. Discontent climaxed when Richard requested a then-unprecedented sum to raise an army. The House of Lords and the House of Commons united against him and his unpopular chancellor, Michael de la Pole, demanding the latter's impeachment. Richard requested the Commons send a delegation to negotiate; Parliament, fearing an ambush, sent two lords instead. The lords threatened Richard with deposition`

  ngOnInit(): void { }

  onAdd(){
    this.courses.push({id:4, name:'course 4'});
  }

  onRemove(){
    this.courses.pop();
  }
  onSave(){
    console.log("Button was clicked");
  }

  name="Devesh Anand";

 onKeyUp($event:any){
  if($event.keyCode===13)
  console.log($event.target.value); //value is printed in console
}

onClick(){

}

isSelected=true;
}
