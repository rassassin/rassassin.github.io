import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { ProjectspageComponent } from './projectspage/projectspage.component';
import { WorkpageComponent } from './workpage/workpage.component';


export const routes: Routes = [
    {
        path: '',
        component: HomepageComponent,
        title: 'Home',
        pathMatch: 'full',
    },
    {
        path: 'Work',
        component: WorkpageComponent,
        title: 'Work',
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
