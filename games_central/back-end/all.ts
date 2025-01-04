import { Request, Response } from 'express';

export default function All(request: Request, response: Response){
    const data = [
        {
            name: "Pong",
            img:'https://i.guim.co.uk/img/static/sys-images/Technology/Pix/pictures/2008/04/16/Pong460x276.jpg?width=300&quality=45&auto=format&fit=max&dpr=2&s=23ab69eee3e6fe57a29a95e3da4be528',
        },
        {
            name: 'Space Invaders', 
            img:'https://s.glbimg.com/po/tt2/f/original/2016/03/02/space-invaders.jpg',   
        },
        {
            name: 'Breakout', 
            img:'https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Breakout_game_screenshot.png/220px-Breakout_game_screenshot.png', 
        }
    ]
    return response.json(data);
}