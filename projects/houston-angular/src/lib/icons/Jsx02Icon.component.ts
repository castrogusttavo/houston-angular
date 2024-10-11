
import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon.component';

@Component({
  selector: 'houston-jsx-02-icon',
  template: `
    <houston-icon 
      [iconName]="'jsx-02'" 
      [size]="size" 
      [variant]="variant" 
      [type]="type" 
      [color]="color">
    </houston-icon>
  `,
})
export class Jsx02IconComponent {
  @Input() size: number = 24;
  @Input() variant: 'stroke' | 'solid' | 'bulk' | 'duotone' | 'twotone' = 'stroke';
  @Input() type: 'sharp' | 'rounded' | 'standard' = 'standard';
  @Input() color: string = '#000000';
}
