import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'  
})
export class HeaderComponent {
esAdmin:boolean = true;
onLogout: any;

abrirModal() {
  Swal.fire({
    title: "Enter your IP address",
    input: "text",
    inputLabel: "Your IP address",
    inputValue: "",
    showCancelButton: true,
  }).then((result) => {
    console.log(result);
  }) 
}

 // Inyectamos AuthService y Router en el constructor para usarlos en el componente
 constructor(private authService: AuthService, private router: Router) {}

 // Método para cerrar sesión
 cerrarSesion() {
   this.authService.logOut(); // Llama al método de cerrar sesión en el AuthService
   this.router.navigate(['/login']); // Redirige al usuario a la página de login
 }
}