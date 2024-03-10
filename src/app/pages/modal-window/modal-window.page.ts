import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.page.html',
  styleUrls: ['./modal-window.page.scss'],
})
export class ModalWindowPage  {

  constructor(private modalController: ModalController) { }



  closeModal() {
    // Закрыть модальное окно
    this.modalController.dismiss();
  }
}
