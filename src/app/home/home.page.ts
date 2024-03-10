import {AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';

import Chart from 'chart.js/auto';
import {ModalController} from '@ionic/angular';
import { AnimationController } from '@ionic/angular';
import {ModalWindowPage} from "../pages/modal-window/modal-window.page";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {

  constructor(private modalController: ModalController,
              private animationCtrl: AnimationController) {

  }

  @ViewChild('myChart') myChartCanvas!: ElementRef;
  isModalOpenColorIcons: boolean = false;
  myChart!: Chart<"doughnut", number[], string>;
  isModalOpen = false;
  isModalAddCategory = false;
  selectedColor: string = '';
  @ViewChild('modalAddCategory') modalAddCategory: any;
  @ViewChild('modalOpenColorIcons') modalOpenColorIcons: any;
  @ViewChild('modalOpenAddCount') modalOpenAddCount: any;

  ngAfterViewInit() {
    this.chart(this.myChartCanvas.nativeElement, [], [1500, 400, 2000, 6000, 1000]);

  }

  chart(canvas: HTMLCanvasElement, tags: string[], data: number[]) {
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const chartData = {
        data: data,
        backgroundColor: [
          '#DC3545',
          '#FD7E14',
          '#FFC107',
          '#20C997',
          '#0D6EFD',
        ],
        borderColor: [
          '#DC3545',
          '#FD7E14',
          '#FFC107',
          '#20C997',
          '#0D6EFD',
        ],
        borderWidth: 1,
      };

      this.myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: tags,
          datasets: [chartData],
        },
        options: {
          animation: {
            // Отключаем встроенную анимацию
            duration: 0,

          },
          responsive: true,
          cutout: 50
        },
      });
    }
  }


  openModalAddCount() {
    this.modalOpenAddCount.present();
  }

  closeModalAddCount() {
    this.modalOpenAddCount.dismiss();
  }


  openModalColorIcons() {
    this.modalOpenColorIcons.present();
  }

  closeModalColorIcons() {
    this.modalOpenColorIcons.dismiss();
  }

  openModalAddCategory() {
    this.modalAddCategory.present();
  }
  closeModalAddCategory() {
    this.modalAddCategory.dismiss();
  }


  changeColorCategory(color: string) {
    this.selectedColor = color;
    this.modalOpenColorIcons.dismiss();
  }


  colorsForCategories = [
    {
      color: 'blue'
    }
  ]

  colorArray: string[] = [
    '#6A5ACD',
    '#000080',
    '#00FF00',
    '#DC143C',
    '#FFD700',
    '#00FFFF',
    '#7FFFD4',
    '#FF00FF',
    '#FF0000',
    '#0000CD',
    '#800080',
    '#FF4500',
    '#008B8B',
    '#C71585',
    '#FFA500',
    '#228B22'
  ];




  enterAnimation = (baseEl: HTMLElement) => {
    const root = baseEl.shadowRoot;

    if (!root) {
      return this.animationCtrl.create()
    }

    const backdropAnimation = this.animationCtrl
      .create()
      .addElement(root.querySelector('ion-backdrop')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = this.animationCtrl
      .create()
      .addElement(root.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '0', transform: 'scale(0)' },
        { offset: 1, opacity: '0.99', transform: 'scale(1)' },
      ]);

    return this.animationCtrl
      .create()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(500)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };

  leaveAnimation = (baseEl: HTMLElement) => {
    return this.enterAnimation(baseEl).direction('reverse');
  };
}
