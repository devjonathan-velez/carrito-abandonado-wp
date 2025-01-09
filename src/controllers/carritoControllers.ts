import { Request, Response } from 'express';

export const handleWebhook = (req: Request, res: Response) => {

  console.log('Webhook recibido:', req.body);
  res.status(200).json({ message: 'Webhook recibido correctamente' });
};


export const msnPrueba = (req:Request, res:Response) => {
    res.send("Recibido")
}