import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../icon.component";
export class FolderLockedIconComponent {
    size = 24;
    variant = 'stroke';
    type = 'standard';
    color = '#000000';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: FolderLockedIconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.5", type: FolderLockedIconComponent, selector: "houston-folder-locked-icon", inputs: { size: "size", variant: "variant", type: "type", color: "color" }, ngImport: i0, template: `
    <houston-icon 
      [iconName]="'folder-locked'" 
      [size]="size" 
      [variant]="variant" 
      [type]="type" 
      [color]="color">
    </houston-icon>
  `, isInline: true, dependencies: [{ kind: "component", type: i1.IconComponent, selector: "houston-icon", inputs: ["iconName", "size", "variant", "type", "color"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: FolderLockedIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'houston-folder-locked-icon',
                    template: `
    <houston-icon 
      [iconName]="'folder-locked'" 
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9sZGVyTG9ja2VkSWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9ob3VzdG9uLWFuZ3VsYXIvc3JjL2xpYi9pY29ucy9Gb2xkZXJMb2NrZWRJY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBZWpELE1BQU0sT0FBTyx5QkFBeUI7SUFDM0IsSUFBSSxHQUFXLEVBQUUsQ0FBQztJQUNsQixPQUFPLEdBQXdELFFBQVEsQ0FBQztJQUN4RSxJQUFJLEdBQXFDLFVBQVUsQ0FBQztJQUNwRCxLQUFLLEdBQVcsU0FBUyxDQUFDO3VHQUp4Qix5QkFBeUI7MkZBQXpCLHlCQUF5Qiw4SUFWMUI7Ozs7Ozs7O0dBUVQ7OzJGQUVVLHlCQUF5QjtrQkFackMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsNEJBQTRCO29CQUN0QyxRQUFRLEVBQUU7Ozs7Ozs7O0dBUVQ7aUJBQ0Y7OEJBRVUsSUFBSTtzQkFBWixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJY29uQ29tcG9uZW50IH0gZnJvbSAnLi4vaWNvbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdob3VzdG9uLWZvbGRlci1sb2NrZWQtaWNvbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGhvdXN0b24taWNvbiBcbiAgICAgIFtpY29uTmFtZV09XCInZm9sZGVyLWxvY2tlZCdcIiBcbiAgICAgIFtzaXplXT1cInNpemVcIiBcbiAgICAgIFt2YXJpYW50XT1cInZhcmlhbnRcIiBcbiAgICAgIFt0eXBlXT1cInR5cGVcIiBcbiAgICAgIFtjb2xvcl09XCJjb2xvclwiPlxuICAgIDwvaG91c3Rvbi1pY29uPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBGb2xkZXJMb2NrZWRJY29uQ29tcG9uZW50IHtcbiAgQElucHV0KCkgc2l6ZTogbnVtYmVyID0gMjQ7XG4gIEBJbnB1dCgpIHZhcmlhbnQ6ICdzdHJva2UnIHwgJ3NvbGlkJyB8ICdidWxrJyB8ICdkdW90b25lJyB8ICd0d290b25lJyA9ICdzdHJva2UnO1xuICBASW5wdXQoKSB0eXBlOiAnc2hhcnAnIHwgJ3JvdW5kZWQnIHwgJ3N0YW5kYXJkJyA9ICdzdGFuZGFyZCc7XG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmcgPSAnIzAwMDAwMCc7XG59XG4iXX0=