const path=require('path')
const express=require('express');
const app=new express();
app.use(express.static('public'))
app.get('/',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'index.html'))
})
app.get('/about',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'about.html'))
})
app.get('/contact',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'contact.html'))
})
app.listen(9001,()=>{
  console.log('listening on port 9000');
})


// // const http = require('http')

// // const server = http.createServer((request, response) => {
// //   console.log(request.url)

// //   response.end('HELLO NODE JS')
// // })

// // server.listen(3000)
// const fs=require('fs')
// const http=require('http')

// const aboutpage=fs.readFileSync('about.html',(file)=>{});
// const contactpage=fs.readFileSync('contact.html');
// const homepage=fs.readFileSync('index.html');

// const server=http.createServer((req,res)=>{

//   if(req.url==='/about'){
//     return res.end(aboutpage);
//   }
//   else if(req.url==='/contact'){
//     return res.end(contactpage);
//   }
//   else if(req.url==='/'){
//     return res.end(homepage);
//   }
//   else{
//     res.writeHead(404);

//     return res.end('fix the url');
//   }


   
    

// })
// server.listen(9000);
