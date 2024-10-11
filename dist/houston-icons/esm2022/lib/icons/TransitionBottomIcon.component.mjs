import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../icon.component";
export class TransitionBottomIconComponent {
    size = 24;
    variant = 'stroke';
    type = 'standard';
    color = '#000000';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: TransitionBottomIconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.5", type: TransitionBottomIconComponent, selector: "houston-transition-bottom-icon", inputs: { size: "size", variant: "variant", type: "type", color: "color" }, ngImport: i0, template: `
    <houston-icon 
      [iconName]="'transition-bottom'" 
      [size]="size" 
      [variant]="variant" 
      [type]="type" 
      [color]="color">
    </houston-icon>
  `, isInline: true, dependencies: [{ kind: "component", type: i1.IconComponent, selector: "houston-icon", inputs: ["iconName", "size", "variant", "type", "color"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: TransitionBottomIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'houston-transition-bottom-icon',
                    template: `
    <houston-icon 
      [iconName]="'transition-bottom'" 
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJhbnNpdGlvbkJvdHRvbUljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaG91c3Rvbi1hbmd1bGFyL3NyYy9saWIvaWNvbnMvVHJhbnNpdGlvbkJvdHRvbUljb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFlakQsTUFBTSxPQUFPLDZCQUE2QjtJQUMvQixJQUFJLEdBQVcsRUFBRSxDQUFDO0lBQ2xCLE9BQU8sR0FBd0QsUUFBUSxDQUFDO0lBQ3hFLElBQUksR0FBcUMsVUFBVSxDQUFDO0lBQ3BELEtBQUssR0FBVyxTQUFTLENBQUM7dUdBSnhCLDZCQUE2QjsyRkFBN0IsNkJBQTZCLGtKQVY5Qjs7Ozs7Ozs7R0FRVDs7MkZBRVUsNkJBQTZCO2tCQVp6QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxnQ0FBZ0M7b0JBQzFDLFFBQVEsRUFBRTs7Ozs7Ozs7R0FRVDtpQkFDRjs4QkFFVSxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEljb25Db21wb25lbnQgfSBmcm9tICcuLi9pY29uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2hvdXN0b24tdHJhbnNpdGlvbi1ib3R0b20taWNvbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGhvdXN0b24taWNvbiBcbiAgICAgIFtpY29uTmFtZV09XCIndHJhbnNpdGlvbi1ib3R0b20nXCIgXG4gICAgICBbc2l6ZV09XCJzaXplXCIgXG4gICAgICBbdmFyaWFudF09XCJ2YXJpYW50XCIgXG4gICAgICBbdHlwZV09XCJ0eXBlXCIgXG4gICAgICBbY29sb3JdPVwiY29sb3JcIj5cbiAgICA8L2hvdXN0b24taWNvbj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgVHJhbnNpdGlvbkJvdHRvbUljb25Db21wb25lbnQge1xuICBASW5wdXQoKSBzaXplOiBudW1iZXIgPSAyNDtcbiAgQElucHV0KCkgdmFyaWFudDogJ3N0cm9rZScgfCAnc29saWQnIHwgJ2J1bGsnIHwgJ2R1b3RvbmUnIHwgJ3R3b3RvbmUnID0gJ3N0cm9rZSc7XG4gIEBJbnB1dCgpIHR5cGU6ICdzaGFycCcgfCAncm91bmRlZCcgfCAnc3RhbmRhcmQnID0gJ3N0YW5kYXJkJztcbiAgQElucHV0KCkgY29sb3I6IHN0cmluZyA9ICcjMDAwMDAwJztcbn1cbiJdfQ==