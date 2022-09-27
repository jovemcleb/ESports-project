import express, { Request, Response } from 'express';

const app = express();

app.get('/games', (req:Request, res:Response) => {
  return res.json([])
});

app.post('/ads', (req:Request, res:Response) => {
  return res.status(201).json([]);
});

app.get('/games/:id/ads', (req, res) => {
  const gameId = req.params.id;
})

app.get('ads/:id;discord', (req, res) => {
  
});

app.listen(3333);



