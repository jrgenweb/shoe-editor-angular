import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-color',
  imports: [],
  templateUrl: './color.html',
  styleUrl: './color.scss',
})
export class Color implements AfterViewInit {
  @ViewChild('colorRef') colorRef!: ElementRef<HTMLElement>;
  @Input() color: string = 'red';
  @Input() title: string = 'Tooltip on top';
  ngAfterViewInit(): void {
    this.colorRef.nativeElement.setAttribute('background-color', this.color);
    this.colorRef.nativeElement.style.backgroundColor = this.color;
  }
}
