
import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon.component';

@Component({
  selector: 'houston-hackerrank-icon',
  template: `
    <houston-icon 
      [iconName]="'hackerrank'" 
      [iconSize]="iconSize" 
      [fillType]="fillType" 
      [cornerStyle]="cornerStyle" 
      [color]="color">
    </houston-icon>
  `,
})
export class HackerrankIconComponent {
  @Input() iconSize: number = 24;
  @Input() fillType: 'stroke' | 'solid' | 'bulk' | 'duotone' | 'twotone' = 'stroke';
  @Input() cornerStyle: 'sharp' | 'rounded' | 'standard' = 'standard';
  @Input() color: string = '#000000';
}
