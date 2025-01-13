import { Request, Response } from 'express';
import axios from 'axios';
import { removePlusSign } from '../utils';



export const handleWebhook = async (req: Request, res: Response) => {
  const {email,homePhone} = req.body;

 
  if (email === "jvalencias@cuerosvelez.com" && email === "soranny88@gmail.com") {
    console.log(req.body)
    if(homePhone === ''){
      res.status(200).json({
        message: 'Carrito sin telefono',
      });
      return
    }
    
   
    console.log(removePlusSign(homePhone))
    try {
      const response = await axios.post(
        'https://api.botmaker.com/v2.0/chats-actions/trigger-intent',
        {
          chat: {
            channelId: "cuerosvelez-whatsapp-573104486083",
            contactId: removePlusSign(homePhone)
          },
          intentIdOrName: "carrito_nuevo",
          variables: {
            nombre: "Jonathan"
          }
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'access-token': 'eyJhbGciOiJIUzUxMiJ9.eyJidXNpbmVzc0lkIjoiY3Vlcm9zdmVsZXoiLCJuYW1lIjoiU2FudGlhZ28gQW5kcmV1IiwiYXBpIjp0cnVlLCJpZCI6IlY2aUVCR0Y2TmljNXBpQlNERmQzSEQ5VGg0VjIiLCJleHAiOjE4ODg1ODUzNTMsImp0aSI6IlY2aUVCR0Y2TmljNXBpQlNERmQzSEQ5VGg0VjIifQ.dVpXmY-7wysGm2yGgj9GHCIZCCQ6JYSLv5nLQX2_Gmb0meTZ2uEkMyDRr7FfQi2vf8cjhd5K8Z8jmoSXBgo0ZQ'
          }
        }
      );

      console.log('Respuesta de Botmaker:', response.data);

      res.status(200).json({
        message: 'Webhook recibido y mensaje enviado correctamente',
        botmakerResponse: response.data
      });
    } catch (error:any) {
      console.error('Error al enviar la petición a Botmaker:', error.response?.data || error.message);

      res.status(500).json({
        message: 'Error al procesar el webhook',
        error: error.response?.data || error.message
      });
    }
  } else {
    res.status(400).json({ message: 'Email no autorizado' });
  }

}

export const msnPrueba = (req:Request, res:Response) => {
    res.send("Recibido")
}