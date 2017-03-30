import { Routes }     from '@angular/router';
import { Home }       from './home';
import { Contact }    from './contact';
import { About }      from './about';
import { AuthGuard }  from './common/auth.guard';

export const routes: Routes = [
  { path: '',       component: Home },
  { path: 'contact',  component: Contact },
  { path: 'about',  component: About },
  { path: '**',     component: Home },
];
