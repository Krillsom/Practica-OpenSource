import { Component } from '@angular/core';
import {MatAnchor} from '@angular/material/button';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {MatToolbar, MatToolbarRow} from '@angular/material/toolbar';

@Component({
  selector: 'app-toolbar',
  imports: [
    MatAnchor,
    RouterLinkActive,
    RouterLink,
    MatToolbar,
    MatToolbarRow
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})


export class ToolbarComponent {
  options = [
    {link: '/home', label: 'Home'},
    {link: '/rating', label: 'Rating'}

  ]
}
