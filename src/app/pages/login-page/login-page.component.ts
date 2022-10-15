import { Component, OnInit , Output , EventEmitter} from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPAgeComponent implements OnInit  {
    
    token : string | null = null;
  

  constructor(private router : Router , private authService : AuthService) { }

  ngOnInit(): void {
   
   this.token = sessionStorage.getItem('token');
  if(this.token) this.router.navigate(['home'])
  }
  
  
   loginUser(value : any){
    let {email , password} = value
   this.authService.login(email , password).subscribe(
    (response) => {
      if(response){
        console.log(response)
        let tokenStr : string = JSON.stringify(response)
        sessionStorage.setItem('token',tokenStr.substring(10,tokenStr.length - 2))
        location.reload()
        this.router.navigate(['home'])
      }
    },
    (error) => console.error("se ha producido un error: " + error),
    () =>  console.info("petición de login terminada")
   )
    console.log(sessionStorage.getItem('token'))
    
    
  }
}
