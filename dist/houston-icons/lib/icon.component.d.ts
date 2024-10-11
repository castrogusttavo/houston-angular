import { OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
export declare class IconComponent implements OnInit {
    private sanitizer;
    private http;
    iconName: string;
    size: number;
    variants: 'stroke' | 'solid' | 'bulk' | 'duotone' | 'twotone';
    type: 'sharp' | 'rounded' | 'standard';
    color: string;
    svgElement: SafeHtml | null;
    constructor(sanitizer: DomSanitizer, http: HttpClient);
    ngOnInit(): void;
    loadSvg(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<IconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IconComponent, "houston-icon", never, { "iconName": { "alias": "iconName"; "required": false; }; "size": { "alias": "size"; "required": false; }; "variants": { "alias": "variants"; "required": false; }; "type": { "alias": "type"; "required": false; }; "color": { "alias": "color"; "required": false; }; }, {}, never, never, false, never>;
}
