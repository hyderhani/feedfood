import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../shared-services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userItems=[];

  constructor(public profileService: ProfileService) { }

  ngOnInit(): void {
    this.getUserItems()
  }
  getUserItems(){
    this.profileService.getItems().subscribe(response=>{
      this.userItems= response
      console.log('User Items', this.userItems);
    });
  }

}
