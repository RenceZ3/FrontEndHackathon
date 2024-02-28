import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'base64ToImage'
})
export class Base64ToImagePipe implements PipeTransform {
    constructor(private domSanitizer: DomSanitizer) {}

    public transform(value: any, contentType: string): any {
        var base64Content = `data:${contentType};base64,${value}`;
        return base64Content;
    }
}