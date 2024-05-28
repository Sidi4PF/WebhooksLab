const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json()); 

app.post('/webhook', (req, res) => {
    const event = req.body;
    console.log('Received event:', event);

    if (event.event === 'user.signup') {
        console.log('New user signup:', event.data);
    } else if (event.event === 'order.placed') {
        console.log('Order placed:', event.data);
    }
 
    res.status(200).send('Event received');
});

app.post('/', (req, res) => {
    const event = req.body;
    console.log('Received event:', event);
    res.status(200).send('Event received');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
