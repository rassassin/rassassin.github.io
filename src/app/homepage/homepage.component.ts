import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { getRandomFloat } from '../../utilities';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {
  canvas: HTMLCanvasElement;
  view: CanvasRenderingContext2D;
  balls: Ball[] = [];
  ballSize = 4;
  animationDelay = [];
  lettersOfName = [];

  constructor() {}

  keepOriginalOrder = () => 0;

  ngOnInit(): void {
    console.log('Starting. . .');

    this.lettersOfName = [
      'R',
      'e',
      'e',
      'c',
      'e',
      ' ',
      'T',
      'h',
      'a',
      'n',
      'd',
      'i',
    ];
    let counter = 0.3;
    for (let i = 0; i < this.lettersOfName.length; i++) {
      if(this.lettersOfName[i].trim() === "") this.animationDelay.push(0)
      this.animationDelay.push((counter += 0.1));
    }
  }

  ngAfterViewInit(): void {
    this.canvas = document.querySelector('canvas');
    this.view = this.canvas.getContext('2d');

    this.setCanvasSize();
    this.initializeBalls();
    this.animate();
  }

  @HostListener('window:resize')
  onResize() {
    this.setCanvasSize();
  }

  setCanvasSize(): void {
    this.canvas.height = window.screen.availHeight;
    this.canvas.width = window.innerWidth;
    this.view.fillStyle = 'white';
    this.view.strokeStyle = 'white';
  }

  initializeBalls(): void {
    for (let i = 0; i <= 35; i++) {
      this.balls.push(new Ball(this.canvas, this.view, this.ballSize));
    }
  }

  animate(): void {
    this.view.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.balls.forEach((ball) => {
      ball.update();
    });

    for (let i = 0; i < this.balls.length; i++) {
      const b1 = this.balls[i];
      for (let j = i + 1; j < this.balls.length; j++) {
        const b2 = this.balls[j];
        this.dist(b1, b2);
      }
    }

    requestAnimationFrame(() => this.animate());
  }

  dist(b1: Ball, b2: Ball): void {
    const xDiff = (b1.x - b2.x) ** 2;
    const yDiff = (b1.y - b2.y) ** 2;
    const lineDistance = 200 - Math.sqrt(xDiff + yDiff);
    if (lineDistance <= 200) {
      const colourDist = 255 - (lineDistance / 200) * 255;
      const strokeStyle = `rgba(255, ${colourDist}, ${colourDist}, ${
        lineDistance / 80
      })`;
      this.view.strokeStyle = strokeStyle;

      this.view.beginPath();
      this.view.moveTo(b1.x, b1.y);
      this.view.lineTo(b2.x, b2.y);
      this.view.stroke();
    }
  }
}

class Ball {
  x: number;
  y: number;
  dx: number;
  dy: number;
  dmax = 2;
  width: number;
  height: number;
  canvas: HTMLCanvasElement;
  view: CanvasRenderingContext2D;

  constructor(
    canvas: HTMLCanvasElement,
    view: CanvasRenderingContext2D,
    ballSize: number
  ) {
    this.canvas = canvas;
    this.view = view;
    this.width = ballSize;
    this.height = ballSize;

    this.x = Math.random() * this.canvas.width;
    this.y = Math.random() * this.canvas.height;
    this.dx = Math.random() * this.dmax - 1.5;
    this.dy = Math.random() * this.dmax - 1.5;
  }

  update(): void {
    if (this.x < 0 || this.x > this.canvas.width) this.dx = -this.dx;
    if (this.y < 0 || this.y > this.canvas.height) this.dy = -this.dy;

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }

  draw(): void {
    this.view.beginPath();
    this.view.arc(this.x, this.y, this.height, 0, 2 * Math.PI);
    this.view.fill();
  }
}
