
import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon.component';

@Component({
  selector: 'houston-coins-bitcoin-icon',
  template: `
    <houston-icon 
      [iconName]="'coins-bitcoin'" 
      [size]="size" 
      [variants]="variants" 
      [type]="type" 
      [color]="color">
    </houston-icon>
  `,
})
export class CoinsBitcoinIconComponent {
  @Input() size: number = 24;
  @Input() variants: 'stroke' | 'solid' | 'bulk' | 'duotone' | 'twotone' = 'stroke';
  @Input() type: 'sharp' | 'rounded' | 'standard' = 'standard';
  @Input() color: string = '#000000';
}
