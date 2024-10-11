import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'houston-icon',
  template: `
    <div [innerHtml]="svgElement" 
         [style.width.px]="size" 
         [style.height.px]="size" 
         [style.color]="color"></div>
  `,
})
export class IconComponent implements OnInit {
  @Input() iconName: string = 'default-icon';
  @Input() size: number = 24;
  @Input() variant: 'stroke' | 'solid' | 'bulk' | 'duotone' | 'twotone' = 'stroke';
  @Input() type: 'sharp' | 'rounded' | 'standard' = 'rounded';
  @Input() color: string = '#000000';

  svgElement: SafeHtml | null = null;

  constructor(private sanitizer: DomSanitizer, private http: HttpClient) {}

  ngOnInit(): void {
    this.loadSvg();
  }

  loadSvg(): void {
    const iconUrl = `https://cdn.hugeicons.com/icons/${this.iconName}-${this.variant}-${this.type}.svg`;

    this.http.get(iconUrl, { responseType: 'text' }).subscribe(
      (svgText: string) => {
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
      },
      (error) => {
        console.error('Erro ao carregar o SVG:', error);
        this.svgElement = null;
      }
    );
  }
}
