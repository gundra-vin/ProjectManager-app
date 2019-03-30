import { Component, OnInit } from '@angular/core';
import { Taskinput } from 'src/app/taskinput';
import { PmserviceService } from 'src/app/pmservice.service';


@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']  
})
export class AddtaskComponent implements OnInit {
  sucessmsg = '';
  actbtn = 'Add';
  checked = false;

  tsk: Taskinput = new Taskinput();
  constructor(private pmService: PmserviceService) {
    this.tsk = this.pmService.getTaskData();
 
  }

  ngOnInit() {
  }


  addTask() {
    console.log(this.checked);
    if(this.checked === false){
    this.pmService.addTask(this.tsk)
      .subscribe(msg => {
        console.log(msg);
        this.sucessmsg = 'Task Id: ' + msg.tid + ' is successfully inserted with new Task';
      });
    }else{
      this.pmService.addParentTask(this.tsk.task)
      .subscribe(msg => {
        console.log(msg);
        this.sucessmsg = 'Parent Id: ' + msg.pid + ' is successfully inserted with new Parent Task';
      });
    }

    
  }
  tskreset() {
    this.sucessmsg = '';
    this.actbtn = 'Add';
    this.tsk = new Taskinput();  
    this.checked = false;
  }
}
