import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  percentage = 50;

  getColorForPercentage(percentage: number) {
    percentage = percentage / 100;
    const baseColors = [
      { percentage: 0, color: { r: 0xff, g: 0x00, b: 0 } },
      { percentage: 0.5, color: { r: 0xff, g: 0xff, b: 0 } },
      { percentage: 1.0, color: { r: 0x00, g: 0xff, b: 0 } }];

    let i = 1;
    for (i = 1; i < baseColors.length - 1; i++) {
      if (percentage < baseColors[i].percentage) {
        break;
      }
    }

    const lower = baseColors[i - 1];
    const upper = baseColors[i];

    const range = upper.percentage - lower.percentage;
    const rangePct = (percentage - lower.percentage) / range;
    const pctLower = 1 - rangePct;
    const pctUpper = rangePct;

    const color = {
      r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
      g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
      b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper)
    };
    return 'rgb(' + [color.r, color.g, color.b].join(',') + ')';
  }

}
