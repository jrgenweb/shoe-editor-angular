import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import {
  IColor,
  IProperty,
  ISelectedProperty,
} from '../../../shared/interfaces/iproduct';
import { Color } from '../../../components/customer/color/color';

@Component({
  selector: 'app-custom-property-select',
  imports: [Color],
  templateUrl: './custom-property-select.html',
  styleUrl: './custom-property-select.scss',
})
export class CustomPropertySelect implements AfterViewInit {
  @Input() properties!: IProperty[];
  @Output() propertyChangeEvt = new EventEmitter<ISelectedProperty[]>();
  currentProp = 0;
  currentColors: IColor[] = [];
  selectedProperties: ISelectedProperty[] = []; //{  }

  ngAfterViewInit(): void {
    this.currentColors = this.properties[this.currentProp].colors;
  }
  previousProp() {
    if (this.currentProp > 0) {
      this.currentProp--;
      this.currentColors = [...this.properties[this.currentProp].colors];
    }
  }

  nextProp() {
    if (this.currentProp < this.properties.length - 1) {
      this.currentProp++;
      this.currentColors = this.properties[this.currentProp].colors;
    }
  }

  onChange(pathId: string, color: string) {
    if (color === 'transparent') {
      this.selectedProperties = this.selectedProperties.filter(
        (prop) => prop.pathId !== pathId
      );
      this.propertyChangeEvt.emit(this.selectedProperties);
      return;
    }
    const result = this.selectedProperties.findIndex(
      (prop) => prop.pathId === pathId
    );
    if (result !== -1) {
      this.selectedProperties[result].color = color;
    } else {
      this.selectedProperties.push({
        pathId,
        title: this.properties[this.currentProp].title,
        color,
      });
    }
    this.propertyChangeEvt.emit(this.selectedProperties);
    console.log(this.selectedProperties);
  }
}
