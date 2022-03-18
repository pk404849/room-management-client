import { Component, OnInit } from '@angular/core';
import { ResidentModel } from 'src/app/model/resident-model';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-resident',
  templateUrl: './resident.component.html',
  styleUrls: ['./resident.component.css']
})
export class ResidentComponent implements OnInit {

  constructor(
    private commonService: CommonService

  ) { }

  ngOnInit(): void {
    this.findAllWithoutBookedRoom();
    this.findAllResident();
  }
  residentModel = new ResidentModel();
  addResident() {
    this.commonService.addResident(this.residentModel).subscribe((res: any) => {
      if (res.status && res.message != '') {
        alert(res.message);
        this.residentModel = new ResidentModel();
        this.findAllResident();
      }
    });
    console.log(this.residentModel);
  }

  withoutBookedRoomList: any;
  findAllWithoutBookedRoom() {
    this.commonService.findAllWithoutBookedRoom().subscribe((res: any) => {
      if (res.status && res.data != null) {
        this.withoutBookedRoomList = res.data;
      }
      console.log(res.data);
      console.log(this.withoutBookedRoomList);
    });
  }
  residentList: any;
  findAllResident() {
    this.commonService.findAllResident().subscribe((res: any) => {
      if (res.status && res.data != null) {
        this.residentList = res.data;
      }
      console.log(this.residentList);
    });
  }
  checkOutResident(residentId:number){
    this.commonService.checkOutResident(residentId).subscribe((res:any)=>{
      if(res.status && res.message != null && res.message !=''){
        alert(res.message);
      }
    })
  }

}
