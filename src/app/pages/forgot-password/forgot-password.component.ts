import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FooterService } from '../../services/footer.service';
import { HeaderService } from '../../services/header.service';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FormsModule, RouterLink],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  constructor(private HeaderService: HeaderService, private FooterService: FooterService) { }

  ngOnInit() {
    this.HeaderService.updateHeader({
      showLogin: true,
      showRegister: true,
      showNavigation: false
    })

    this.FooterService.updateFooter({
      showGoTop: false
    });
  }
}
