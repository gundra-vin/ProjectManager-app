import { Component, OnInit } from '@angular/core';
import { PmserviceService } from 'src/app/pmservice.service';
import { Usersio } from 'src/app/usersio';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  sucessmsg = '';
  actbtn = 'Add';
  usr: Usersio = new Usersio();
  users: Usersio[] = [];
  constructor(private pmService: PmserviceService) {
    this.pmService.getallUsers().subscribe(usersop => {
      this.users = usersop;
      console.log(this.users);
    });
  }

  ngOnInit() {
  }
  getallUsers() {
    this.pmService.getallUsers().subscribe(usersop => {
      this.users = usersop;
    });
  }
  addUser() {
    this.pmService.addUser(this.usr)
      .subscribe(msg => {
        console.log(msg);
        this.sucessmsg = 'User Id: ' + msg.userid + ' is successfully inserted with new User';
      });
      this.getallUsers();
  }
  updUser(usrs) {
    this.actbtn = 'Update';
    this.usr=usrs;
    //this.updet = tsk;
  }
  delTask(usrs: Usersio) {
    //console.log(deltask);
    /*this.todoService.delTask(deltask).subscribe(res => {
    console.log(res);
    this.taskdets = res;
    });*/
  }

  usrreset() {
    this.usr = new Usersio();
    this.actbtn = 'Add';
    this.sucessmsg = '';
  }

}
