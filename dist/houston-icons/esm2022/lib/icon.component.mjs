import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "@angular/common/http";
export class IconComponent {
    sanitizer;
    http;
    iconName = 'default-icon';
    size = 24;
    variants = 'stroke';
    type = 'rounded';
    color = '#000000';
    svgElement = null;
    constructor(sanitizer, http) {
        this.sanitizer = sanitizer;
        this.http = http;
    }
    ngOnInit() {
        this.loadSvg();
    }
    loadSvg() {
        const iconUrl = `https://cdn.hugeicons.com/icons/${this.iconName}-${this.variants}-${this.type}.svg`;
        this.http.get(iconUrl, { responseType: 'text' }).subscribe((svgText) => {
            const parser = new DOMParser();
            const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');
            const svgNode = svgDoc.documentElement;
            svgNode.setAttribute('width', this.size.toString());
            svgNode.setAttribute('height', this.size.toString());
            svgNode.setAttribute('color', this.color);
            svgNode.querySelectorAll('*').forEach((element) => {
                if (element.hasAttribute('fill')) {
                    element.setAttribute('fill', 'currentColor');
                }
                if (element.hasAttribute('stroke')) {
                    element.setAttribute('stroke', 'currentColor');
                }
            });
            this.svgElement = this.sanitizer.bypassSecurityTrustHtml(svgNode.outerHTML);
        }, (error) => {
            console.error('Erro ao carregar o SVG:', error);
            this.svgElement = null;
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: IconComponent, deps: [{ token: i1.DomSanitizer }, { token: i2.HttpClient }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.5", type: IconComponent, selector: "houston-icon", inputs: { iconName: "iconName", size: "size", variants: "variants", type: "type", color: "color" }, ngImport: i0, template: `
    <div [innerHtml]="svgElement" 
         [style.width.px]="size" 
         [style.height.px]="size" 
         [style.color]="color"></div>
  `, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: IconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'houston-icon',
                    template: `
    <div [innerHtml]="svgElement" 
         [style.width.px]="size" 
         [style.height.px]="size" 
         [style.color]="color"></div>
  `,
                }]
        }], ctorParameters: () => [{ type: i1.DomSanitizer }, { type: i2.HttpClient }], propDecorators: { iconName: [{
                type: Input
            }], size: [{
                type: Input
            }], variants: [{
                type: Input
            }], type: [{
                type: Input
            }], color: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9ob3VzdG9uLWFuZ3VsYXIvc3JjL2xpYi9pY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQzs7OztBQWF6RCxNQUFNLE9BQU8sYUFBYTtJQVNKO0lBQWlDO0lBUjVDLFFBQVEsR0FBVyxjQUFjLENBQUM7SUFDbEMsSUFBSSxHQUFXLEVBQUUsQ0FBQztJQUNsQixRQUFRLEdBQXdELFFBQVEsQ0FBQztJQUN6RSxJQUFJLEdBQXFDLFNBQVMsQ0FBQztJQUNuRCxLQUFLLEdBQVcsU0FBUyxDQUFDO0lBRW5DLFVBQVUsR0FBb0IsSUFBSSxDQUFDO0lBRW5DLFlBQW9CLFNBQXVCLEVBQVUsSUFBZ0I7UUFBakQsY0FBUyxHQUFULFNBQVMsQ0FBYztRQUFVLFNBQUksR0FBSixJQUFJLENBQVk7SUFBRyxDQUFDO0lBRXpFLFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELE9BQU87UUFDTCxNQUFNLE9BQU8sR0FBRyxtQ0FBbUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQztRQUVyRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQ3hELENBQUMsT0FBZSxFQUFFLEVBQUU7WUFDbEIsTUFBTSxNQUFNLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztZQUMvQixNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUMsQ0FBQztZQUNoRSxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDO1lBRXZDLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUNwRCxPQUFPLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFDckQsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRTFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtnQkFDaEQsSUFBSSxPQUFPLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7b0JBQ2pDLE9BQU8sQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDO2dCQUMvQyxDQUFDO2dCQUNELElBQUksT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO29CQUNuQyxPQUFPLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxjQUFjLENBQUMsQ0FBQztnQkFDakQsQ0FBQztZQUNILENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM5RSxDQUFDLEVBQ0QsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNSLE9BQU8sQ0FBQyxLQUFLLENBQUMseUJBQXlCLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDaEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDekIsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO3VHQTVDVSxhQUFhOzJGQUFiLGFBQWEsd0pBUGQ7Ozs7O0dBS1Q7OzJGQUVVLGFBQWE7a0JBVHpCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRTs7Ozs7R0FLVDtpQkFDRjswR0FFVSxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdob3VzdG9uLWljb24nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IFtpbm5lckh0bWxdPVwic3ZnRWxlbWVudFwiIFxyXG4gICAgICAgICBbc3R5bGUud2lkdGgucHhdPVwic2l6ZVwiIFxyXG4gICAgICAgICBbc3R5bGUuaGVpZ2h0LnB4XT1cInNpemVcIiBcclxuICAgICAgICAgW3N0eWxlLmNvbG9yXT1cImNvbG9yXCI+PC9kaXY+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEljb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGljb25OYW1lOiBzdHJpbmcgPSAnZGVmYXVsdC1pY29uJztcclxuICBASW5wdXQoKSBzaXplOiBudW1iZXIgPSAyNDtcclxuICBASW5wdXQoKSB2YXJpYW50czogJ3N0cm9rZScgfCAnc29saWQnIHwgJ2J1bGsnIHwgJ2R1b3RvbmUnIHwgJ3R3b3RvbmUnID0gJ3N0cm9rZSc7XHJcbiAgQElucHV0KCkgdHlwZTogJ3NoYXJwJyB8ICdyb3VuZGVkJyB8ICdzdGFuZGFyZCcgPSAncm91bmRlZCc7XHJcbiAgQElucHV0KCkgY29sb3I6IHN0cmluZyA9ICcjMDAwMDAwJztcclxuXHJcbiAgc3ZnRWxlbWVudDogU2FmZUh0bWwgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplciwgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMubG9hZFN2ZygpO1xyXG4gIH1cclxuXHJcbiAgbG9hZFN2ZygpOiB2b2lkIHtcclxuICAgIGNvbnN0IGljb25VcmwgPSBgaHR0cHM6Ly9jZG4uaHVnZWljb25zLmNvbS9pY29ucy8ke3RoaXMuaWNvbk5hbWV9LSR7dGhpcy52YXJpYW50c30tJHt0aGlzLnR5cGV9LnN2Z2A7XHJcblxyXG4gICAgdGhpcy5odHRwLmdldChpY29uVXJsLCB7IHJlc3BvbnNlVHlwZTogJ3RleHQnIH0pLnN1YnNjcmliZShcclxuICAgICAgKHN2Z1RleHQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcclxuICAgICAgICBjb25zdCBzdmdEb2MgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHN2Z1RleHQsICdpbWFnZS9zdmcreG1sJyk7XHJcbiAgICAgICAgY29uc3Qgc3ZnTm9kZSA9IHN2Z0RvYy5kb2N1bWVudEVsZW1lbnQ7XHJcblxyXG4gICAgICAgIHN2Z05vZGUuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHRoaXMuc2l6ZS50b1N0cmluZygpKTtcclxuICAgICAgICBzdmdOb2RlLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgdGhpcy5zaXplLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIHN2Z05vZGUuc2V0QXR0cmlidXRlKCdjb2xvcicsIHRoaXMuY29sb3IpO1xyXG5cclxuICAgICAgICBzdmdOb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2ZpbGwnKSkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZmlsbCcsICdjdXJyZW50Q29sb3InKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnc3Ryb2tlJykpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsICdjdXJyZW50Q29sb3InKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zdmdFbGVtZW50ID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoc3ZnTm9kZS5vdXRlckhUTUwpO1xyXG4gICAgICB9LFxyXG4gICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGFvIGNhcnJlZ2FyIG8gU1ZHOicsIGVycm9yKTtcclxuICAgICAgICB0aGlzLnN2Z0VsZW1lbnQgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=