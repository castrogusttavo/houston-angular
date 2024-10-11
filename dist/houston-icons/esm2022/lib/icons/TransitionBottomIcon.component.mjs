import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../icon.component";
export class TransitionBottomIconComponent {
    size = 24;
    variants = 'stroke';
    type = 'standard';
    color = '#000000';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: TransitionBottomIconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.5", type: TransitionBottomIconComponent, selector: "houston-transition-bottom-icon", inputs: { size: "size", variants: "variants", type: "type", color: "color" }, ngImport: i0, template: `
    <houston-icon 
      [iconName]="'transition-bottom'" 
      [size]="size" 
      [variants]="variants" 
      [type]="type" 
      [color]="color">
    </houston-icon>
  `, isInline: true, dependencies: [{ kind: "component", type: i1.IconComponent, selector: "houston-icon", inputs: ["iconName", "size", "variants", "type", "color"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: TransitionBottomIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'houston-transition-bottom-icon',
                    template: `
    <houston-icon 
      [iconName]="'transition-bottom'" 
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJhbnNpdGlvbkJvdHRvbUljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaG91c3Rvbi1hbmd1bGFyL3NyYy9saWIvaWNvbnMvVHJhbnNpdGlvbkJvdHRvbUljb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFlakQsTUFBTSxPQUFPLDZCQUE2QjtJQUMvQixJQUFJLEdBQVcsRUFBRSxDQUFDO0lBQ2xCLFFBQVEsR0FBd0QsUUFBUSxDQUFDO0lBQ3pFLElBQUksR0FBcUMsVUFBVSxDQUFDO0lBQ3BELEtBQUssR0FBVyxTQUFTLENBQUM7dUdBSnhCLDZCQUE2QjsyRkFBN0IsNkJBQTZCLG9KQVY5Qjs7Ozs7Ozs7R0FRVDs7MkZBRVUsNkJBQTZCO2tCQVp6QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxnQ0FBZ0M7b0JBQzFDLFFBQVEsRUFBRTs7Ozs7Ozs7R0FRVDtpQkFDRjs4QkFFVSxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJY29uQ29tcG9uZW50IH0gZnJvbSAnLi4vaWNvbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdob3VzdG9uLXRyYW5zaXRpb24tYm90dG9tLWljb24nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxob3VzdG9uLWljb24gXG4gICAgICBbaWNvbk5hbWVdPVwiJ3RyYW5zaXRpb24tYm90dG9tJ1wiIFxuICAgICAgW3NpemVdPVwic2l6ZVwiIFxuICAgICAgW3ZhcmlhbnRzXT1cInZhcmlhbnRzXCIgXG4gICAgICBbdHlwZV09XCJ0eXBlXCIgXG4gICAgICBbY29sb3JdPVwiY29sb3JcIj5cbiAgICA8L2hvdXN0b24taWNvbj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgVHJhbnNpdGlvbkJvdHRvbUljb25Db21wb25lbnQge1xuICBASW5wdXQoKSBzaXplOiBudW1iZXIgPSAyNDtcbiAgQElucHV0KCkgdmFyaWFudHM6ICdzdHJva2UnIHwgJ3NvbGlkJyB8ICdidWxrJyB8ICdkdW90b25lJyB8ICd0d290b25lJyA9ICdzdHJva2UnO1xuICBASW5wdXQoKSB0eXBlOiAnc2hhcnAnIHwgJ3JvdW5kZWQnIHwgJ3N0YW5kYXJkJyA9ICdzdGFuZGFyZCc7XG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmcgPSAnIzAwMDAwMCc7XG59XG4iXX0=