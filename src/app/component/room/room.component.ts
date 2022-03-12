import { Component, OnInit } from '@angular/core';
import { RoomModel } from '../../model/room-model';
import { CommonService } from '../../service/common.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  constructor(
    private commonService: CommonService

  ) { }

  ngOnInit(): void {
    this.findAllRoom();
  }
  roomModel = new RoomModel();
  addRoom() {
    this.commonService.addRoom(this.roomModel).subscribe((res: any) => {
      if (res.status && res.message != '') {
        alert(res.message);
      }
    });
    console.log(this.roomModel);
    this.findAllRoom();
  }

   roomList:any;
  findAllRoom() {
    this.commonService.findAllRoom().subscribe((res : any) =>{
      if(res.status && res.data != null){
        this.roomList = res.data;
      }
      console.log(res.data);
      console.log(this.roomList);
    });
}
}
