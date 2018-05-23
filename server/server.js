import express from 'express';
import React from 'react';
import App from '../src/App';
import { StaticRouter } from 'react-router-dom';
import ReactDomServer from 'react-dom/server';

const server  = express();

server.set('view engine','ejs');
server.use(express.static('public'));

server.get('*',(req,res)=>{
  const context = {};
  const appwithrouter = (
    <StaticRouter location={req.url} context={context}>
      <App initialData={true}/>
    </StaticRouter>
  );
  res.render('index',{
    initialData:true,
    content:ReactDomServer.renderToString(<appwithrouter />)
  });
});


server.listen(8000,()=>console.log('listening at localhost:8000'));
