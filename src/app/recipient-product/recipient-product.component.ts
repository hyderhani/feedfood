import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-recipient-product',
  templateUrl: './recipient-product.component.html',
  styleUrls: ['./recipient-product.component.css']
})
export class RecipientProductComponent implements OnInit {

  closeResult: string;

  constructor(private modalService: NgbModal) {}


  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  ngOnInit(): void {
  }

}
