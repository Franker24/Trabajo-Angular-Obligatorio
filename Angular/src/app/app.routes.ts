import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { DetalleComponent } from './detalle/detalle.component';

export const routes: Routes = [
  { path: "app-form", component: FormComponent},
  { path: "app-datalle", component: DetalleComponent},
];
