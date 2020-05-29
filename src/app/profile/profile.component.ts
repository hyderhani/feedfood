import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ProfileService } from '../shared-services/profile.service';
import { NgbTypeahead, NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Observable, Subject, merge } from "rxjs";
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { AddProductComponent } from '../add-product/add-product.component';
import { SavedusersComponent } from '../savedusers/savedusers.component';
import { UserproductsComponent } from '../userproducts/userproducts.component';
import { ActiveproductsComponent } from '../activeproducts/activeproducts.component';


export class NgbdModalContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) { }
}

const states = ['Mumbai', 'Chennai', 'Goa', 'Kolkata', 'Pune',
  'Delhi', 'Nasik', 'Darjeeling', 'Jammu', 'Kashmir',
  'Leh', 'Manali'];

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})



export class ProfileComponent implements OnInit {
  userItems = [];

  model: any;

  @ViewChild('instance', { static: true }) instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();



  search = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup$ = this.click$.pipe(filter(() => this.instance && !this.instance.isPopupOpen()));
    const inputFocus$ = this.focus$;


    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map(term => (term === '' ? states
        : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))
    );
  }
  constructor(public profileService: ProfileService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getUserItems()
  }
  getUserItems() {
    this.profileService.getItems().subscribe(response => {
      this.userItems = response
      console.log('User Items', this.userItems);
    });
  }

  openAddProduct() {
    const modalRef = this.modalService.open(AddProductComponent);
  }

  openSavedUsers() {
    const modalRef = this.modalService.open(SavedusersComponent);
  }

  openUserProducts() {
    const modalRef = this.modalService.open(UserproductsComponent);
  }

  openActiveProducts() {
    const modalRef = this.modalService.open(ActiveproductsComponent);
  }

}

