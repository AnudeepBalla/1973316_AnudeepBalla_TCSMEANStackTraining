import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../quiz.model';
import { QuizService } from '../quiz.service';




@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(public service:QuizService,public router:Router) { }
  questionsData:Array<Question>=[];
  msgArray:Array<string>=[];
  correctQuestionCounter:number=0;
  resultMessage:string="";

  ngOnInit(): void {
    this.service.loadQuestionDetails().subscribe(data=>this.questionsData=data);

  }
  answers(){
    this.service.loadQuestionDetails().subscribe(data=>this.questionsData=data);
    console.log(this.questionsData);
    for(let i=0;i<10;i++)
    {
      let msg:string="";
      let form=document.getElementById((i+1).toString());
    
      let answer = <HTMLInputElement>form?.querySelector('input[name=option]:checked');          
      
      if(answer.value==this.questionsData[i].correctoption)
      {
       msg=(i+1)+"."+" "+" Your Answer is right.";
       this.correctQuestionCounter=this.correctQuestionCounter+1;
      }
      else{
        msg=(i+1)+"."+" "+"The right Answer is"+" "+this.questionsData[i].correctoption+".";
      }
      this.msgArray.push(msg);
    }


    if(this.correctQuestionCounter>=7)
    {
      this.resultMessage=this.correctQuestionCounter+"/10"+" "+"You have Passed";
    }
    else
    {
      this.resultMessage=this.correctQuestionCounter+"/10"+" "+"You have Failed";
    }
  }
  
  quitTest(){
    this.router.navigateByUrl('home');
  }
  loop_data(){
    
  }
}


