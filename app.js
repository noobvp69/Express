const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
console.log(__dirname,__filename);
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
})
app.post('/submit',(req,res)=>{
    formData=req.body
    console.log(formData)
    Fullname=formData.name
    Phone=formData.phone
    email=formData.email
    console.log(`Full name: ${Fullname}`);
    console.log(`Phone number: ${Phone}`);
    console.log(`Email: ${email}`);
   
})
app.get('/syllabus.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'syllabus.html'));
})
app.get('/hello',(req,res)=>{
    res.send('World');
})
app.get('/news',(req,res)=>{
    res.sendFile(path.join(__dirname,'news.html'));
})
app.get('/download',(req,res)=>{
    res.download(path.join(__dirname,'public/images/p1.jpg'));
})
app.get('/downloadsyllabus',(req,res)=>{
    res.download(path.join(__dirname,'public/file/syllabus.pdf'));
})
app.put('/news',(req,res)=>{
    res.send('news put');
})
app.post('/news',(req,res)=>{
    res.send('news post');
})
app.delete('/news',(req,res)=>{
    res.send('news delete');
})
app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname,'contact.html'));
})
app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'about.html'));
})
app.get('/index',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
})
app.get('/regform.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'regform.html'));
})
app.get('/result.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'result.html'));
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
})