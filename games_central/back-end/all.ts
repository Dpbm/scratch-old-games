import { Request, Response } from 'express';

export default function All(request: Request, response: Response) {
	const data = [
		{
			name: 'Pong',
			img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Signed_Pong_Cabinet.jpg/220px-Signed_Pong_Cabinet.jpg',
		},
		{
			name: 'Space Invaders',
			img: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/Space_Invaders_flyer%2C_1978.jpg/220px-Space_Invaders_flyer%2C_1978.jpg',
		},
		{
			name: 'Breakout',
			img: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Breakout_game_screenshot.png/220px-Breakout_game_screenshot.png',
		},
	];
	return response.json(data);
}
