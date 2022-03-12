import { Component, OnInit } from '@angular/core';
import { FacilityModel } from 'src/app/model/facility-model';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {

  constructor(
    private commonService: CommonService,
  ) { }

  ngOnInit(): void {
    this.findAllFacility();
    this.findAllRoomWithNullFacility();
  }


  nullFacilityRoomList:any;
  findAllRoomWithNullFacility() {
    this.commonService.findAllRoomWithNullFacility().subscribe((res: any) => {
      if (res.status && res.data != null) {
          this.nullFacilityRoomList = res.data;
          console.log('facility component : ',this.nullFacilityRoomList)
      }
    });
  }

  facilityList:any;
  findAllFacility(){
    this.commonService.findAllFacility().subscribe((res:any)=>{
      if(res.status && res.data != null){
        this.facilityList = res.data;
      }
    });
  }

  facilityModel = new FacilityModel();
  addFacility(){
    this.commonService.addFacility(this.facilityModel).subscribe((res:any)=>{
      if(res.status){
        alert(res.message);
        this.facilityModel = new FacilityModel();
        this.findAllFacility();
      }
    });
    
    console.log('addfacility : '+this.facilityList);
  }
}
