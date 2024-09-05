import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';
import { graphqlProvider } from './app/graphql.provider';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatDialogModule } from '@angular/material/dialog'

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), provideHttpClient(), provideHttpClient(), graphqlProvider, provideAnimationsAsync(), MatDialogModule
  ]
})
  .catch((err) => console.error(err));
