import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../icon.component";
export class LiftTruckIconComponent {
    size = 24;
    variants = 'stroke';
    type = 'standard';
    color = '#000000';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: LiftTruckIconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.5", type: LiftTruckIconComponent, selector: "houston-lift-truck-icon", inputs: { size: "size", variants: "variants", type: "type", color: "color" }, ngImport: i0, template: `
    <houston-icon 
      [iconName]="'lift-truck'" 
      [size]="size" 
      [variants]="variants" 
      [type]="type" 
      [color]="color">
    </houston-icon>
  `, isInline: true, dependencies: [{ kind: "component", type: i1.IconComponent, selector: "houston-icon", inputs: ["iconName", "size", "variants", "type", "color"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: LiftTruckIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'houston-lift-truck-icon',
                    template: `
    <houston-icon 
      [iconName]="'lift-truck'" 
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlmdFRydWNrSWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9ob3VzdG9uLWFuZ3VsYXIvc3JjL2xpYi9pY29ucy9MaWZ0VHJ1Y2tJY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBZWpELE1BQU0sT0FBTyxzQkFBc0I7SUFDeEIsSUFBSSxHQUFXLEVBQUUsQ0FBQztJQUNsQixRQUFRLEdBQXdELFFBQVEsQ0FBQztJQUN6RSxJQUFJLEdBQXFDLFVBQVUsQ0FBQztJQUNwRCxLQUFLLEdBQVcsU0FBUyxDQUFDO3VHQUp4QixzQkFBc0I7MkZBQXRCLHNCQUFzQiw2SUFWdkI7Ozs7Ozs7O0dBUVQ7OzJGQUVVLHNCQUFzQjtrQkFabEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxRQUFRLEVBQUU7Ozs7Ozs7O0dBUVQ7aUJBQ0Y7OEJBRVUsSUFBSTtzQkFBWixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWNvbkNvbXBvbmVudCB9IGZyb20gJy4uL2ljb24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaG91c3Rvbi1saWZ0LXRydWNrLWljb24nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxob3VzdG9uLWljb24gXG4gICAgICBbaWNvbk5hbWVdPVwiJ2xpZnQtdHJ1Y2snXCIgXG4gICAgICBbc2l6ZV09XCJzaXplXCIgXG4gICAgICBbdmFyaWFudHNdPVwidmFyaWFudHNcIiBcbiAgICAgIFt0eXBlXT1cInR5cGVcIiBcbiAgICAgIFtjb2xvcl09XCJjb2xvclwiPlxuICAgIDwvaG91c3Rvbi1pY29uPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBMaWZ0VHJ1Y2tJY29uQ29tcG9uZW50IHtcbiAgQElucHV0KCkgc2l6ZTogbnVtYmVyID0gMjQ7XG4gIEBJbnB1dCgpIHZhcmlhbnRzOiAnc3Ryb2tlJyB8ICdzb2xpZCcgfCAnYnVsaycgfCAnZHVvdG9uZScgfCAndHdvdG9uZScgPSAnc3Ryb2tlJztcbiAgQElucHV0KCkgdHlwZTogJ3NoYXJwJyB8ICdyb3VuZGVkJyB8ICdzdGFuZGFyZCcgPSAnc3RhbmRhcmQnO1xuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nID0gJyMwMDAwMDAnO1xufVxuIl19