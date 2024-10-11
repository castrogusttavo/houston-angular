
import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon.component';

@Component({
  selector: 'houston-keyframe-icon',
  template: `
    <houston-icon 
      [iconName]="'keyframe'" 
      [size]="size" 
      [variant]="variant" 
      [type]="type" 
      [color]="color">
    </houston-icon>
  `,
})
export class KeyframeIconComponent {
  @Input() size: number = 24;
  @Input() variant: 'stroke' | 'solid' | 'bulk' | 'duotone' | 'twotone' = 'stroke';
  @Input() type: 'sharp' | 'rounded' | 'standard' = 'standard';
  @Input() color: string = '#000000';
}
