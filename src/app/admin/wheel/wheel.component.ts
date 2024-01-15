import {AfterViewInit, Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-wheel',
  templateUrl: './wheel.component.html',
  styleUrls: ['./wheel.component.scss']
})
export class WheelComponent implements AfterViewInit {

@ViewChild('dealWheel') wheel:any;
@ViewChild('spinner') spinner:any;
@ViewChild('grimReaper') grimReaper:any;

public prizes = [
    {
      text: "Bonus 1",
      color: "hsl(197 30% 43%)",

    },
    {
      text: "Bonus 2",
      color: "hsl(173 58% 39%)",

    },
    {
      text: "Bonus 3",
      color: "hsl(43 74% 66%)",
    },
    {
      text: "Bonus 4",
      color: "hsl(27 87% 67%)",
    },
    {
      text: "Bonus 5",
      color: "hsl(12 76% 61%)",
    },
    {
      text: "Bonus 6",
      color: "hsl(350 60% 52%)",
    },
    {
      text: "Bonus 7",
      color: "hsl(91 43% 54%)",
    },
    {
      text: "Bonus 8",
      color: "hsl(140 36% 74%)",
    }
  ];
public prizeSlice = 360 / this.prizes.length;
public prizeOffset = Math.floor(180 / this.prizes.length);
public spinClass = "is-spinning";
public selectedClass = "selected";
public rotation = 0;
public prizeNodes!: any;

  createPrizeNodes() {
    this.prizes.forEach(({ text }, i) => {
       let rotation = ((this.prizeSlice * i) * -1) - this.prizeOffset;
      console.log(rotation)

      this.spinner.nativeElement.insertAdjacentHTML(
        "beforeend",
        `
                <li class="prize"  style="--rotate: ${rotation}deg">
                    <span class="text">${text}</span>
                </li>
              `
      );
    });
  };

  createConicGradient () {
    this.spinner.nativeElement.setAttribute(
      "style",
      `background: conic-gradient(
        from -90deg,
        ${this.prizes
        .map(({ color }, i) => `${color} 0 ${(100 / this.prizes.length) * (this.prizes.length - i)}%`)
        .reverse()
      }
      );`
    );
  };

  setupWheel() {
    this.createConicGradient();
    this.createPrizeNodes();
  };
  selectPrize() {
    const selected = Math.floor(this.rotation / this.prizeSlice);
    this.prizeNodes[selected].classList.add(this.selectedClass);
    // reaper.dataset.reaction = prizeNodes[selected].dataset.reaction;
  };
  spinertia  (min:any, max:any)  {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  ngAfterViewInit() {
    this.setupWheel();
    this.selectPrize();
  }

  rotateWheel() {
    this.rotation = Math.floor(Math.random() * 360 + this.spinertia(2000, 5000));
    console.log(this.prizeNodes)
    this.wheel.nativeElement.classList.add(this.spinClass);
    this.spinner.nativeElement.style.setProperty("--rotate", this.rotation);
  }
}
