# GrokonezDragdrop

- ## Install dependenies
  - ```
    npm install @angular/material @angular/cdk
    ng update @angular/core @angular/cli
    ng update @angular/material
    ```
- ## AppModule
 ```
 import { DragDropModule } from '@angular/cdk/drag-drop';
 imports: [DragDropModule]
 ```
- ## AppComponent HTML
  ```
  <div cdkDrag (cdkDragStarted)="onStarted($event)" (cdkDragEnded)="onEnded($event)" (cdkDragMoved)="onMoved($event)">
    Drag Me
  </div>
  {{state}}
  {{position}}
  <div cdkDrag cdkDragLockAxis="x">
  Only Horizontal Drag
  </div>
  <div cdkDrag cdkDragLockAxis="y">
  Only Vertical Drag
  </div>
  ```
- ## AppComponent
  ```
  state ='';
  position='';
  onStarted(event: CDKDragStart) {
   this.state ='started';
  }
  onEnded(event: CDKDragEnd) {
   this.state ='ended';
  }
  onMoved(event: CDKDragMove) {
   this.state ='moving';
   this.position= `X:${event.pointerPosition.x}, Y: ${event.pointerPosition.y}`;
  }
  ```
