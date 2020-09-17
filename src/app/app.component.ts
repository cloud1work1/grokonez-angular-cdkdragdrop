import { Component } from '@angular/core';
import { CdkDragStart, CdkDragEnd, CdkDragMove } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'grokonez-dragdrop';

  state = '';
  position = '';


  onStarted(event: CdkDragStart) {
    this.state = 'CdkDragStart';
  }

  onEnded(event: CdkDragEnd) {
    this.state = 'CdkDragEnd';
  }

  onMoved(event: CdkDragMove) {
    this.state = 'CdkDragMove';
    this.position = `X: ${event.pointerPosition.x}, Y: ${event.pointerPosition.y}`;
  }
}
