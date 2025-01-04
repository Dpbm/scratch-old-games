import { Request, Response } from 'express';

export default function Play(request: Request, response: Response) {
	
    const { id } = request.params;

    const links = ['https://scratch.mit.edu/projects/444721986', 'https://scratch.mit.edu/projects/448564181', 'https://scratch.mit.edu/projects/447784810'];

    return response.json({link:links[parseInt(id)]});

}