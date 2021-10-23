const express = require ('express');
const cors = require('cors');
 const app = express();
 app.use(cors());
 app.use(express.json());



 const port = 33000;

 app.get('/',(req,res) =>{
     res.send('hello mamun ffghjj hhhh ggg');

 });

 const users = [
     {id:0,name:'Mamun',email:'mamun@gmail.con',phone:'01734434783i'},
     {id:1,name:'Maisa',email:'mamun@gmail.con',phone:'01734434783i'},
     {id:2,name:'Masila',email:'mamun@gmail.con',phone:'01734434783i'},
     {id:3,name:'Sailara',email:'mamun@gmail.con',phone:'01734434783i'},
     {id:4,name:'Shakiba',email:'mamun@gmail.con',phone:'01734434783i'},
     {id:5,name:'Bahmuba',email:'mamun@gmail.con',phone:'01734434783i'},
     {id:6,name:'Laksuba',email:'mamun@gmail.con',phone:'01734434783i'},

 ]

  //use query parameter

 app.get('/users', (req,res) =>{
 const search = req.query.search;

     if(search){
        const searchResult = users.filter(user => user.name.toLocaleUpperCase().includes(search));
         res.send(searchResult);
     }
     else{
        res.send(users)
    }
});

//app.method
 app.post('/users',(req,res) =>{
     const newUser = req.body;
     newUser.id = users.length;
     users.push(newUser);
     console.log('hitting the post',req.body)
    //  res.send('post got hitted');
    res.json(newUser)
 })



//dynamic api
 app.get('/users/:id',(req,res) =>{
     const id = req.params.id;
     const user = users[id];
     res.send(user);
 });

 app.get('/fruits',(req,res) =>{
     res.send(['mango','oranges','banana','apple']);

 });
 app.get('/fruits/mangoes/fazli',(req,res)=>{
     res.send('Yammy yammy tok mitha mango')
 });
 app.listen(port, ()=>{
     console.log('Lisiting to port',port);
 })