
import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon.component';

@Component({
  selector: 'houston-calculator-icon',
  template: `
    <houston-icon 
      [iconName]="'calculator'" 
      [size]="size" 
      [variants]="variants" 
      [type]="type" 
      [color]="color">
    </houston-icon>
  `,
})
export class CalculatorIconComponent {
  @Input() size: number = 24;
  @Input() variants: 'stroke' | 'solid' | 'bulk' | 'duotone' | 'twotone' = 'stroke';
  @Input() type: 'sharp' | 'rounded' | 'standard' = 'standard';
  @Input() color: string = '#000000';
}
