import { Component } from '@angular/core';
import { SharedModule } from "../../_metronic/shared/shared.module";

@Component({
  selector: 'app-incident-list',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './incident-list.component.html',
  styleUrl: './incident-list.component.scss'
})
export class IncidentListComponent {

}
