import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../icon.component";
export class SourceCodeSquareIconComponent {
    size = 24;
    variants = 'stroke';
    type = 'standard';
    color = '#000000';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: SourceCodeSquareIconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.5", type: SourceCodeSquareIconComponent, selector: "houston-source-code-square-icon", inputs: { size: "size", variants: "variants", type: "type", color: "color" }, ngImport: i0, template: `
    <houston-icon 
      [iconName]="'source-code-square'" 
      [size]="size" 
      [variants]="variants" 
      [type]="type" 
      [color]="color">
    </houston-icon>
  `, isInline: true, dependencies: [{ kind: "component", type: i1.IconComponent, selector: "houston-icon", inputs: ["iconName", "size", "variants", "type", "color"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: SourceCodeSquareIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'houston-source-code-square-icon',
                    template: `
    <houston-icon 
      [iconName]="'source-code-square'" 
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU291cmNlQ29kZVNxdWFyZUljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaG91c3Rvbi1hbmd1bGFyL3NyYy9saWIvaWNvbnMvU291cmNlQ29kZVNxdWFyZUljb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFlakQsTUFBTSxPQUFPLDZCQUE2QjtJQUMvQixJQUFJLEdBQVcsRUFBRSxDQUFDO0lBQ2xCLFFBQVEsR0FBd0QsUUFBUSxDQUFDO0lBQ3pFLElBQUksR0FBcUMsVUFBVSxDQUFDO0lBQ3BELEtBQUssR0FBVyxTQUFTLENBQUM7dUdBSnhCLDZCQUE2QjsyRkFBN0IsNkJBQTZCLHFKQVY5Qjs7Ozs7Ozs7R0FRVDs7MkZBRVUsNkJBQTZCO2tCQVp6QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxpQ0FBaUM7b0JBQzNDLFFBQVEsRUFBRTs7Ozs7Ozs7R0FRVDtpQkFDRjs4QkFFVSxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJY29uQ29tcG9uZW50IH0gZnJvbSAnLi4vaWNvbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdob3VzdG9uLXNvdXJjZS1jb2RlLXNxdWFyZS1pY29uJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aG91c3Rvbi1pY29uIFxuICAgICAgW2ljb25OYW1lXT1cIidzb3VyY2UtY29kZS1zcXVhcmUnXCIgXG4gICAgICBbc2l6ZV09XCJzaXplXCIgXG4gICAgICBbdmFyaWFudHNdPVwidmFyaWFudHNcIiBcbiAgICAgIFt0eXBlXT1cInR5cGVcIiBcbiAgICAgIFtjb2xvcl09XCJjb2xvclwiPlxuICAgIDwvaG91c3Rvbi1pY29uPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBTb3VyY2VDb2RlU3F1YXJlSWNvbkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHNpemU6IG51bWJlciA9IDI0O1xuICBASW5wdXQoKSB2YXJpYW50czogJ3N0cm9rZScgfCAnc29saWQnIHwgJ2J1bGsnIHwgJ2R1b3RvbmUnIHwgJ3R3b3RvbmUnID0gJ3N0cm9rZSc7XG4gIEBJbnB1dCgpIHR5cGU6ICdzaGFycCcgfCAncm91bmRlZCcgfCAnc3RhbmRhcmQnID0gJ3N0YW5kYXJkJztcbiAgQElucHV0KCkgY29sb3I6IHN0cmluZyA9ICcjMDAwMDAwJztcbn1cbiJdfQ==