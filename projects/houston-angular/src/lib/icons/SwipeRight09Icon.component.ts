
import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon.component';

@Component({
  selector: 'houston-swipe-right-09-icon',
  template: `
    <houston-icon 
      [iconName]="'swipe-right-09'" 
      [size]="size" 
      [variants]="variants" 
      [type]="type" 
      [color]="color">
    </houston-icon>
  `,
})
export class SwipeRight09IconComponent {
  @Input() size: number = 24;
  @Input() variants: 'stroke' | 'solid' | 'bulk' | 'duotone' | 'twotone' = 'stroke';
  @Input() type: 'sharp' | 'rounded' | 'standard' = 'standard';
  @Input() color: string = '#000000';
}
