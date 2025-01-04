import { Router } from 'express';
import Games from './games';
import All from './all';
import Play from './Play';

const routes = Router();

routes.get('/game/:id', Games);
routes.get('/all', All);
routes.get('/play/:id', Play);



export default routes;