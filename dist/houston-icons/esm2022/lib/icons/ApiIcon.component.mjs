import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../icon.component";
export class ApiIconComponent {
    size = 24;
    variant = 'stroke';
    type = 'standard';
    color = '#000000';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: ApiIconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.5", type: ApiIconComponent, selector: "houston-api-icon", inputs: { size: "size", variant: "variant", type: "type", color: "color" }, ngImport: i0, template: `
    <houston-icon 
      [iconName]="'api'" 
      [size]="size" 
      [variant]="variant" 
      [type]="type" 
      [color]="color">
    </houston-icon>
  `, isInline: true, dependencies: [{ kind: "component", type: i1.IconComponent, selector: "houston-icon", inputs: ["iconName", "size", "variant", "type", "color"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: ApiIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'houston-api-icon',
                    template: `
    <houston-icon 
      [iconName]="'api'" 
      [size]="size" 
      [variant]="variant" 
      [type]="type" 
      [color]="color">
    </houston-icon>
  `,
                }]
        }], propDecorators: { size: [{
                type: Input
            }], variant: [{
                type: Input
            }], type: [{
                type: Input
            }], color: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBpSWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9ob3VzdG9uLWFuZ3VsYXIvc3JjL2xpYi9pY29ucy9BcGlJY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBZWpELE1BQU0sT0FBTyxnQkFBZ0I7SUFDbEIsSUFBSSxHQUFXLEVBQUUsQ0FBQztJQUNsQixPQUFPLEdBQXdELFFBQVEsQ0FBQztJQUN4RSxJQUFJLEdBQXFDLFVBQVUsQ0FBQztJQUNwRCxLQUFLLEdBQVcsU0FBUyxDQUFDO3VHQUp4QixnQkFBZ0I7MkZBQWhCLGdCQUFnQixvSUFWakI7Ozs7Ozs7O0dBUVQ7OzJGQUVVLGdCQUFnQjtrQkFaNUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixRQUFRLEVBQUU7Ozs7Ozs7O0dBUVQ7aUJBQ0Y7OEJBRVUsSUFBSTtzQkFBWixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJY29uQ29tcG9uZW50IH0gZnJvbSAnLi4vaWNvbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdob3VzdG9uLWFwaS1pY29uJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aG91c3Rvbi1pY29uIFxuICAgICAgW2ljb25OYW1lXT1cIidhcGknXCIgXG4gICAgICBbc2l6ZV09XCJzaXplXCIgXG4gICAgICBbdmFyaWFudF09XCJ2YXJpYW50XCIgXG4gICAgICBbdHlwZV09XCJ0eXBlXCIgXG4gICAgICBbY29sb3JdPVwiY29sb3JcIj5cbiAgICA8L2hvdXN0b24taWNvbj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgQXBpSWNvbkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHNpemU6IG51bWJlciA9IDI0O1xuICBASW5wdXQoKSB2YXJpYW50OiAnc3Ryb2tlJyB8ICdzb2xpZCcgfCAnYnVsaycgfCAnZHVvdG9uZScgfCAndHdvdG9uZScgPSAnc3Ryb2tlJztcbiAgQElucHV0KCkgdHlwZTogJ3NoYXJwJyB8ICdyb3VuZGVkJyB8ICdzdGFuZGFyZCcgPSAnc3RhbmRhcmQnO1xuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nID0gJyMwMDAwMDAnO1xufVxuIl19