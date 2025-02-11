import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';

type Link = {
  href: string;
  label: string;
};

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  headerlinks: Link[] = [
    { href: '#home', label: 'Home' },
    { href: '#doctor', label: 'Find a doctor' },
    { href: '#apps', label: 'Apps' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#about', label: 'About us' }
  ];

  activeLink: number | null = null;

  constructor(private location: Location) {}

  scrollToSection(sectionId: string, index: number) {
    console.log(sectionId, index);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });

      this.location.replaceState(sectionId);

      this.activeLink = index;
      console.log(this.activeLink);
    }
  }
}
