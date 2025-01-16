import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mp-modal',
  templateUrl: './mp-modal.component.html',
  styleUrls: ['./mp-modal.component.css']
})
export class MpModalComponent implements OnInit {

  closeResult = '';
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
