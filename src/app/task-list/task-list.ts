import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss'
})
export class TaskList {
nuevaTarea: string = '';
listadeTareas: string[] = [];

agregarTarea() {
  if (this.nuevaTarea.trim() !== '') {
    this.listadeTareas.push(this.nuevaTarea);
    this.nuevaTarea = ''; //Limpia el campo de entrada
  }
}
}