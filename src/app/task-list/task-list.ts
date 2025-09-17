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
mensajeError: string = '';

agregarTarea() {
  if (this.nuevaTarea.trim() === '') {
    this.mensajeError = 'La tarea no puede estar vacía.';
    return; // <--- Agrega este `return`
  }

  const tareaExistente = this.listadeTareas.find(
    (tarea) => tarea.toLowerCase() === this.nuevaTarea.toLowerCase()
  );

  if (tareaExistente) {
    this.mensajeError = '¡Esta tarea ya existe!';
    return;
  }

  this.listadeTareas.push(this.nuevaTarea);
  this.nuevaTarea = '';
  this.mensajeError = ''; // <--- Borra el mensaje de error si todo es correcto
}
  
eliminarTarea(indice: number) {
  this.listadeTareas.splice(indice, 1);
}
}