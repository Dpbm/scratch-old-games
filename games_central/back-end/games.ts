import { Request, Response } from 'express';
import GetWikipediaData from './getWikipediaData';

export default function Games(request: Request, response: Response) {
	
	const { id } = request.params;
	
	if (parseInt(id) < 0 || parseInt(id) > 2 ){
		return response.json({ text: 'not found' });

	}
	
	const data = GetWikipediaData(parseInt(id));
	return response.json(data);
}