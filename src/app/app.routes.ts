import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { ProjectspageComponent } from './projectspage/projectspage.component';


export const routes: Routes = [
    {
        path: '',
        component: HomepageComponent,
        title: 'Home',
        pathMatch: 'full',
    },
    {
        path: 'Projects',
        component: ProjectspageComponent,
        title: 'Projects',
    },
    {
        path: 'About',
        component: AboutpageComponent,
        title: 'About',
    },
];
