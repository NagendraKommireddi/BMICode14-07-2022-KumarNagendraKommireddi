// set environment variables
  const http = require('http');
  const express = require('express');
  const app = express();
  const port = 3000;
  const bodyParser = require('body-parser');

 

  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
  
  
  // router path
  const menuRoute = require('./router/menu');
  
  // router
  app.use('/menu', menuRoute);
 
  app.get('/', (req, res) => {
    res.json({ message: 'Server Working!' });
  });
  
  app.use((req, res, next) => {
    const { status, data } = res.locals;
    if (data) {
      res.status(status || 200).json(data);
    } else {
      res.status(400).json({ status: 'error', message: 'No Data Found' });
    }
  });
  
  app.use((err, req, res, next) => {
    if (err) {
      console.log('err', err);
      console.error(res.locals);
  
      let data;
      if (err.message !== undefined) {
        data = { status: 'error', message: err.message };
      } else {
        data = { status: 'error', message: "Internal server error" };
      }
      res.status(res.locals.status || 404).json(data);
    } else {
      res.status(404).json({
        status: 'error',
        message: 'Unable to find the requested resource'
      });
    }
  });
  
  // create http server
  const server = http.createServer(app);
  server.listen(port, () => {
    console.log(`App listening on port ${port}`)
  });
  