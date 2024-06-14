import { Component, Input } from '@angular/core';
import { Projet } from '../_models/Projet';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.scss']
})
export class CardProjectComponent {
  @Input() projet = {} as Projet;
  bsModalRef?: BsModalRef;

  constructor( private modalService: BsModalService){

  }

  OpenProjectModal() {
    const modalOptions: ModalOptions = {
      class: "modal_projet_content",
      initialState: {
        projet: this.projet
      }
    };

    this.bsModalRef = this.modalService.show(ProjectModalComponent, modalOptions);
  }
}
