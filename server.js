const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`
    ----------------------------
    Server started on port ${PORT}
    ----------------------------
    `);
});

// SECTION Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));

app.get('/', (req, res) => {
	res.json({ message: 'Welcome to the ContactKeeper API!' });
});
