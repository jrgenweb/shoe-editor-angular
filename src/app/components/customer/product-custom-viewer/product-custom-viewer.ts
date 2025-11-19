import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ISelectedProperty } from '../../../shared/interfaces/iproduct';

@Component({
  selector: 'app-product-custom-viewer',
  imports: [],
  templateUrl: './product-custom-viewer.html',
  styleUrl: './product-custom-viewer.scss',
})
export class ProductCustomViewer implements AfterViewInit, OnInit, DoCheck {
  @Input() textureFile!: string;
  @Input() selectedProperties?: ISelectedProperty[];
  @ViewChild('viewer') viewer!: ElementRef<HTMLElement>;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log(this.textureFile);
  }

  ngAfterViewInit(): void {
    this.http
      .get(this.textureFile, { responseType: 'text' })
      .subscribe((svg) => {
        this.viewer.nativeElement.innerHTML = svg;
      });
  }
  ngDoCheck(): void {
    this.resetColors();
    this.applyChanges();
  }

  applyChanges() {
    this.resetColors();
    this.selectedProperties?.map((prop) => {
      this.changeProperty(prop.pathId, prop.color);
    });
  }
  resetColors() {
    if (!this.viewer) return;
    if (!this.viewer.nativeElement) return;
    const paths = this.viewer.nativeElement.querySelectorAll<SVGPathElement>(
      `svg path`
    ) as NodeListOf<SVGPathElement>;
    paths.forEach((p) => (p.style.fill = 'transparent'));
  }
  changeProperty(pathId: string, color: string) {
    if (!this.viewer) return;
    if (!this.viewer.nativeElement) return;
    const svgElement = this.viewer.nativeElement.querySelector(
      `svg #${pathId} path`
    ) as HTMLElement;

    svgElement.style.fill = color;
  }
}
