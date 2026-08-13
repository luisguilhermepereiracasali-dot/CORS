const express = require('express');
const cors = require('cors');
const app = express();
const corsOptions = {
origin: 'https://seu-usuario.github.io/nome-do-repositorio', // Sua URL exata do Passo 1
methods: ['GET']
};
app.use(cors(corsOptions));
app.get('/api/cor', (req, res) => {
res.json({ cor: 'blue' }); // Retorna a cor para mudar o elemento no site

});
app.listen(3000, () => console.log('API rodando na porta 3000'));