import  Home  from '../components/Home';
import { PaginaListas } from '../components/PaginaListas';
import { Perfil } from '../components/Perfil';
import RellenaDatos from '../components/RellenaDatos';
import PelisGhibli from '../components/PelisGhibli';
import NBAPlayers from '../components/NBAPlayers';

export const MenuItems = [
  {
    id: 1,
    path: '/',
    title: 'Home',
    component: Home,
  },
  {
    id: 2,
    path: '/listas',
    title: 'Listas de tareas',
    component: PaginaListas,
  },
  {
    id: 3,
    path: '/perfil',
    title: 'Perfil',
    component: Perfil,
  },
  {
    id: 4,
    path: '/RellenaDatos',
    title: 'RellenaDatos',
    component: RellenaDatos,
  },
  {
    id: 5,
    path: '/PelisGhibli',
    title: 'PelisGhibli',
    component: PelisGhibli,
  },
  {
    id:6,
    path:'/NBAPlayers',
    title:'NBAPlayers',
    component: NBAPlayers,
  },

];

/*
  path
  id
  title
  component
*/