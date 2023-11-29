const express = require('express');
const bodyParser = require('body-parser');
const { OpenAIAPI } = require('openai');

require('dotenv').config(); // Agrega esta línea para cargar las variables de entorno desde el archivo .env

const app = express();
const port = 8081;

const openai = new OpenAIAPI({ key: process.env.OPENAI_API_KEY });

app.use(bodyParser.json());

app.post('/generar-question', async (req, res) => {
  try {
    const prompt = 'Générer une question de culture générale.';
    
    const response = await openai.createCompletion({
      engine: 'text-davinci-003',
      prompt,
      max_tokens: 100,
    });

    const question = response.choices[0].text.trim();
    const opciones = genererOpciones(); // Implementa esta función según tus necesidades

    res.json({ question, opciones });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al generar la question.' });
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://192.168.1.71:8081`);
});
