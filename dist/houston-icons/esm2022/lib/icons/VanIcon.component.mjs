import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../icon.component";
export class VanIconComponent {
    size = 24;
    variants = 'stroke';
    type = 'standard';
    color = '#000000';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: VanIconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.5", type: VanIconComponent, selector: "houston-van-icon", inputs: { size: "size", variants: "variants", type: "type", color: "color" }, ngImport: i0, template: `
    <houston-icon 
      [iconName]="'van'" 
      [size]="size" 
      [variants]="variants" 
      [type]="type" 
      [color]="color">
    </houston-icon>
  `, isInline: true, dependencies: [{ kind: "component", type: i1.IconComponent, selector: "houston-icon", inputs: ["iconName", "size", "variants", "type", "color"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: VanIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'houston-van-icon',
                    template: `
    <houston-icon 
      [iconName]="'van'" 
      [size]="size" 
      [variants]="variants" 
      [type]="type" 
      [color]="color">
    </houston-icon>
  `,
                }]
        }], propDecorators: { size: [{
                type: Input
            }], variants: [{
                type: Input
            }], type: [{
                type: Input
            }], color: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFuSWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9ob3VzdG9uLWFuZ3VsYXIvc3JjL2xpYi9pY29ucy9WYW5JY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBZWpELE1BQU0sT0FBTyxnQkFBZ0I7SUFDbEIsSUFBSSxHQUFXLEVBQUUsQ0FBQztJQUNsQixRQUFRLEdBQXdELFFBQVEsQ0FBQztJQUN6RSxJQUFJLEdBQXFDLFVBQVUsQ0FBQztJQUNwRCxLQUFLLEdBQVcsU0FBUyxDQUFDO3VHQUp4QixnQkFBZ0I7MkZBQWhCLGdCQUFnQixzSUFWakI7Ozs7Ozs7O0dBUVQ7OzJGQUVVLGdCQUFnQjtrQkFaNUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixRQUFRLEVBQUU7Ozs7Ozs7O0dBUVQ7aUJBQ0Y7OEJBRVUsSUFBSTtzQkFBWixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWNvbkNvbXBvbmVudCB9IGZyb20gJy4uL2ljb24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaG91c3Rvbi12YW4taWNvbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGhvdXN0b24taWNvbiBcbiAgICAgIFtpY29uTmFtZV09XCIndmFuJ1wiIFxuICAgICAgW3NpemVdPVwic2l6ZVwiIFxuICAgICAgW3ZhcmlhbnRzXT1cInZhcmlhbnRzXCIgXG4gICAgICBbdHlwZV09XCJ0eXBlXCIgXG4gICAgICBbY29sb3JdPVwiY29sb3JcIj5cbiAgICA8L2hvdXN0b24taWNvbj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgVmFuSWNvbkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHNpemU6IG51bWJlciA9IDI0O1xuICBASW5wdXQoKSB2YXJpYW50czogJ3N0cm9rZScgfCAnc29saWQnIHwgJ2J1bGsnIHwgJ2R1b3RvbmUnIHwgJ3R3b3RvbmUnID0gJ3N0cm9rZSc7XG4gIEBJbnB1dCgpIHR5cGU6ICdzaGFycCcgfCAncm91bmRlZCcgfCAnc3RhbmRhcmQnID0gJ3N0YW5kYXJkJztcbiAgQElucHV0KCkgY29sb3I6IHN0cmluZyA9ICcjMDAwMDAwJztcbn1cbiJdfQ==