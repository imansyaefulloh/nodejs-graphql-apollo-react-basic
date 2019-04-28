const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');

const schema = require('./schema/schema');

const app = express();

// allow cross-origin requests
app.use(cors());

mongoose.connect('mongodb://localhost:27017/nodejs-graphql-thenetninja', {useNewUrlParser: true});
mongoose.connection.once('open', () => console.log('connected to mongodb server'));

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

const port = 3000;
app.listen(port, () => console.log(`server running at htttp://localhost:${port}`))