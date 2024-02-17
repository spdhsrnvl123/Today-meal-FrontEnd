import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit{
  now = new Date();
  dday = new Date(2024, 0o2,18,16, 0o0, 0o0);

  hours:any;
  min:any;
  second:any;

  ngOnInit() {
    this.getTime()
  }

  getTime() {
    let dday = new Date(2024, 2, 16, 16, 16, 0);

    setInterval(() => {
      let now = new Date(); //현재 날짜 및 시간
      // 원하는 날짜, 시간 정확하게 초단위까지 기입.
      // @ts-ignore
      let days = (dday - now) / 1000 / 60 / 60 / 24;
      let daysRound = Math.floor(days);
      // @ts-ignore
      let hours = (dday - now) / 1000 / 60 / 60 - (24 * daysRound);
      let hoursRound = Math.floor(hours);
      // @ts-ignore
      let minutes = (dday - now) / 1000 /60 - (24 * 60 * daysRound) - (60 * hoursRound);
      let minutesRound = Math.floor(minutes);
      // @ts-ignore
      let seconds = (dday - now) / 1000 - (24 * 60 * 60 * daysRound) - (60 * 60 * hoursRound) - (60 * minutesRound);
      let secondsRound = Math.round(seconds);


      this.hours = hoursRound;
      this.min = minutesRound;
      this.second = secondsRound;

    }, 1000);
  }
}
