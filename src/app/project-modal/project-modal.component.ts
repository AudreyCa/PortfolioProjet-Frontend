import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Projet } from '../_models/Projet';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss']
})
export class ProjectModalComponent {

  projet = {} as Projet;


  constructor(public bsModalRef: BsModalRef) {

  }
}
