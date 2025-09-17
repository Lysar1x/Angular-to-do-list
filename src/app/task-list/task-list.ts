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
  if (this.nuevaTarea.trim() !== '') {
    // 1. Verificamos si la tarea ya existe en la lista
    const tareaExistente = this.listadeTareas.find(tarea => tarea.toLowerCase() === this.nuevaTarea.toLowerCase());

    // 2. Si no existe, la agregamos
    if (!tareaExistente) {
      this.listadeTareas.push(this.nuevaTarea);
      this.nuevaTarea = ''; // Limpiamos el campo
    } else {
      // Opcional: Podrías mostrar un mensaje de error aquí
      alert('¡Esta tarea ya existe!');
    }
  }
}

eliminarTarea(indice: number) {
  this.listadeTareas.splice(indice, 1);
}
}