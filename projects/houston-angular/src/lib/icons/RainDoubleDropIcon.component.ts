
import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon.component';

@Component({
  selector: 'houston-rain-double-drop-icon',
  template: `
    <houston-icon 
      [iconName]="'rain-double-drop'" 
      [size]="size" 
      [variants]="variants" 
      [type]="type" 
      [color]="color">
    </houston-icon>
  `,
})
export class RainDoubleDropIconComponent {
  @Input() size: number = 24;
  @Input() variants: 'stroke' | 'solid' | 'bulk' | 'duotone' | 'twotone' = 'stroke';
  @Input() type: 'sharp' | 'rounded' | 'standard' = 'standard';
  @Input() color: string = '#000000';
}
