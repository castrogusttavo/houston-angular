
import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon.component';

@Component({
  selector: 'houston-row-insert-icon',
  template: `
    <houston-icon 
      [iconName]="'row-insert'" 
      [size]="size" 
      [variant]="variant" 
      [type]="type" 
      [color]="color">
    </houston-icon>
  `,
})
export class RowInsertIconComponent {
  @Input() size: number = 24;
  @Input() variant: 'stroke' | 'solid' | 'bulk' | 'duotone' | 'twotone' = 'stroke';
  @Input() type: 'sharp' | 'rounded' | 'standard' = 'standard';
  @Input() color: string = '#000000';
}
