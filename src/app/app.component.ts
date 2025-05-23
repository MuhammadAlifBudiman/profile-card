// Importing Component decorator from Angular core
import { Component } from '@angular/core';
// Importing FormsModule for template-driven forms support
import { FormsModule } from '@angular/forms';

/**
 * AppComponent is the root component of the Angular application.
 * It defines the main structure and data for the profile card.
 */
@Component({
  // The selector used to identify this component in HTML
  selector: 'app-root',
  // Importing FormsModule for use in this component
  imports: [FormsModule],
  // Path to the HTML template for this component
  templateUrl: './app.component.html',
  // Path to the SCSS stylesheet for this component
  styleUrl: './app.component.scss',
})
export class AppComponent {
  /**
   * The title of the application.
   * @type {string}
   */
  title = 'profile-card';

  /**
   * The name displayed on the profile card.
   * @type {string}
   */
  name: string = 'John Doe';

  /**
   * The age displayed on the profile card.
   * @type {number}
   */
  age: number = 30;

  /**
   * The description or bio for the profile card.
   * @type {string}
   */
  description: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
}
