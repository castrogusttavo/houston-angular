
import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon.component';

@Component({
  selector: 'houston-layout-2-row-icon',
  template: `
    <houston-icon 
      [iconName]="'layout-2-row'" 
      [size]="size" 
      [variants]="variants" 
      [type]="type" 
      [color]="color">
    </houston-icon>
  `,
})
export class Layout2RowIconComponent {
  @Input() size: number = 24;
  @Input() variants: 'stroke' | 'solid' | 'bulk' | 'duotone' | 'twotone' = 'stroke';
  @Input() type: 'sharp' | 'rounded' | 'standard' = 'standard';
  @Input() color: string = '#000000';
}
