import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../components/header/header';
import { About } from '../components/about/about';
import { Skills } from '../components/skills/skills';
import { Projects } from '../components/projects/projects';
import { Contact } from '../components/contact/contact';
import { Footer } from '../components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header,About,Skills,Projects,Contact,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Portfolio');
}
