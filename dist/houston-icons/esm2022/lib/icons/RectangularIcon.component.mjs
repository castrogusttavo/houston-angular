import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../icon.component";
export class RectangularIconComponent {
    size = 24;
    variants = 'stroke';
    type = 'standard';
    color = '#000000';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: RectangularIconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.5", type: RectangularIconComponent, selector: "houston-rectangular-icon", inputs: { size: "size", variants: "variants", type: "type", color: "color" }, ngImport: i0, template: `
    <houston-icon 
      [iconName]="'rectangular'" 
      [size]="size" 
      [variants]="variants" 
      [type]="type" 
      [color]="color">
    </houston-icon>
  `, isInline: true, dependencies: [{ kind: "component", type: i1.IconComponent, selector: "houston-icon", inputs: ["iconName", "size", "variants", "type", "color"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: RectangularIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'houston-rectangular-icon',
                    template: `
    <houston-icon 
      [iconName]="'rectangular'" 
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVjdGFuZ3VsYXJJY29uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2hvdXN0b24tYW5ndWxhci9zcmMvbGliL2ljb25zL1JlY3Rhbmd1bGFySWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQWVqRCxNQUFNLE9BQU8sd0JBQXdCO0lBQzFCLElBQUksR0FBVyxFQUFFLENBQUM7SUFDbEIsUUFBUSxHQUF3RCxRQUFRLENBQUM7SUFDekUsSUFBSSxHQUFxQyxVQUFVLENBQUM7SUFDcEQsS0FBSyxHQUFXLFNBQVMsQ0FBQzt1R0FKeEIsd0JBQXdCOzJGQUF4Qix3QkFBd0IsOElBVnpCOzs7Ozs7OztHQVFUOzsyRkFFVSx3QkFBd0I7a0JBWnBDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsUUFBUSxFQUFFOzs7Ozs7OztHQVFUO2lCQUNGOzhCQUVVLElBQUk7c0JBQVosS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEljb25Db21wb25lbnQgfSBmcm9tICcuLi9pY29uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2hvdXN0b24tcmVjdGFuZ3VsYXItaWNvbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGhvdXN0b24taWNvbiBcbiAgICAgIFtpY29uTmFtZV09XCIncmVjdGFuZ3VsYXInXCIgXG4gICAgICBbc2l6ZV09XCJzaXplXCIgXG4gICAgICBbdmFyaWFudHNdPVwidmFyaWFudHNcIiBcbiAgICAgIFt0eXBlXT1cInR5cGVcIiBcbiAgICAgIFtjb2xvcl09XCJjb2xvclwiPlxuICAgIDwvaG91c3Rvbi1pY29uPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBSZWN0YW5ndWxhckljb25Db21wb25lbnQge1xuICBASW5wdXQoKSBzaXplOiBudW1iZXIgPSAyNDtcbiAgQElucHV0KCkgdmFyaWFudHM6ICdzdHJva2UnIHwgJ3NvbGlkJyB8ICdidWxrJyB8ICdkdW90b25lJyB8ICd0d290b25lJyA9ICdzdHJva2UnO1xuICBASW5wdXQoKSB0eXBlOiAnc2hhcnAnIHwgJ3JvdW5kZWQnIHwgJ3N0YW5kYXJkJyA9ICdzdGFuZGFyZCc7XG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmcgPSAnIzAwMDAwMCc7XG59XG4iXX0=