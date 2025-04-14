import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableSimpleComponent } from './forms/table-simple/table-simple.component';
import { TableOption2Component } from './forms/table-option2/table-option2.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TableSimpleComponent,TableOption2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-forms';
}
