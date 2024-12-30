import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AboutcomponentComponent } from './aboutcomponent/aboutcomponent.component';
import { EducationComponentComponent } from './education-component/education-component.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ClientComponent } from './client/client.component';
import { ContactmeComponent } from './contactme/contactme.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HomeComponentComponent,AboutcomponentComponent,EducationComponentComponent,SkillsComponent,ExperienceComponent,ProfilesComponent,PortfolioComponent,ClientComponent,ContactmeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Travel';
}
