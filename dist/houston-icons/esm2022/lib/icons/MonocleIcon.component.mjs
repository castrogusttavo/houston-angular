import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../icon.component";
export class MonocleIconComponent {
    size = 24;
    variants = 'stroke';
    type = 'standard';
    color = '#000000';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: MonocleIconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.5", type: MonocleIconComponent, selector: "houston-monocle-icon", inputs: { size: "size", variants: "variants", type: "type", color: "color" }, ngImport: i0, template: `
    <houston-icon 
      [iconName]="'monocle'" 
      [size]="size" 
      [variants]="variants" 
      [type]="type" 
      [color]="color">
    </houston-icon>
  `, isInline: true, dependencies: [{ kind: "component", type: i1.IconComponent, selector: "houston-icon", inputs: ["iconName", "size", "variants", "type", "color"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: MonocleIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'houston-monocle-icon',
                    template: `
    <houston-icon 
      [iconName]="'monocle'" 
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9ub2NsZUljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaG91c3Rvbi1hbmd1bGFyL3NyYy9saWIvaWNvbnMvTW9ub2NsZUljb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFlakQsTUFBTSxPQUFPLG9CQUFvQjtJQUN0QixJQUFJLEdBQVcsRUFBRSxDQUFDO0lBQ2xCLFFBQVEsR0FBd0QsUUFBUSxDQUFDO0lBQ3pFLElBQUksR0FBcUMsVUFBVSxDQUFDO0lBQ3BELEtBQUssR0FBVyxTQUFTLENBQUM7dUdBSnhCLG9CQUFvQjsyRkFBcEIsb0JBQW9CLDBJQVZyQjs7Ozs7Ozs7R0FRVDs7MkZBRVUsb0JBQW9CO2tCQVpoQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLFFBQVEsRUFBRTs7Ozs7Ozs7R0FRVDtpQkFDRjs4QkFFVSxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJY29uQ29tcG9uZW50IH0gZnJvbSAnLi4vaWNvbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdob3VzdG9uLW1vbm9jbGUtaWNvbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGhvdXN0b24taWNvbiBcbiAgICAgIFtpY29uTmFtZV09XCInbW9ub2NsZSdcIiBcbiAgICAgIFtzaXplXT1cInNpemVcIiBcbiAgICAgIFt2YXJpYW50c109XCJ2YXJpYW50c1wiIFxuICAgICAgW3R5cGVdPVwidHlwZVwiIFxuICAgICAgW2NvbG9yXT1cImNvbG9yXCI+XG4gICAgPC9ob3VzdG9uLWljb24+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE1vbm9jbGVJY29uQ29tcG9uZW50IHtcbiAgQElucHV0KCkgc2l6ZTogbnVtYmVyID0gMjQ7XG4gIEBJbnB1dCgpIHZhcmlhbnRzOiAnc3Ryb2tlJyB8ICdzb2xpZCcgfCAnYnVsaycgfCAnZHVvdG9uZScgfCAndHdvdG9uZScgPSAnc3Ryb2tlJztcbiAgQElucHV0KCkgdHlwZTogJ3NoYXJwJyB8ICdyb3VuZGVkJyB8ICdzdGFuZGFyZCcgPSAnc3RhbmRhcmQnO1xuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nID0gJyMwMDAwMDAnO1xufVxuIl19