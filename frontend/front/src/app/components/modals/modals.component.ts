import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ItemService } from '../../../core/item.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modals.component.html'
})
export class ModalsComponent {
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService, private item: ItemService) {}



  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
