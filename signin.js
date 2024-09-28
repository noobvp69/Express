const cookieParser = require('cookie-parser');
const express = require('express');
const session = require('express-session');
const app = express();
const port = 3000;
const path = require('path');
app.use(express.urlencoded())
app.use(cookieParser())
app.use(session({
    secret:'mysecretkey',
    resave: false,
    saveUninitialized: true,
    cookie:{ secure: false}
}));
app.post('/login',(req,res)=>{
    const {username, password}=req.body;
    if(username==='admin' && password==='admin'){
        req.session.isLoggedIn = true;
        res.redirect('/dashboard');
    }else{
        res.send('Invalid Credentials. Please try again.')
    }
   

});

app.get('/logout',(req,res)=>{
    req.session.destroy((err)=>{
        if (err){
            console.log(err);
        }else{
            res.clearCookie('role');
            res.send('You are now logged out!');
        }
    });
});
// app.get('/destroysession',(req,res)=>{
//     req.session.destroy((err)=>{
//         if (err){
//             return res.send('Error destroying session');
//         }res.send('Session destroyed');
//     });
   
// });
app.get('/dashboard',(req,res)=>{
    if(req.session.isLoggedIn){
        if(req.cookies.role==='admin'){
            res.send('Hi Admin!! Welcome to the dashboard!');
        }else{
            res.send(' Welcome to the dashboard!');
        }
    }else{res.send('Access denied. Please login first!');

    }
});
app.get('/setcookie',(req,res)=>{
    res.cookie('role','admin',{maxAge:900000, httpOnly: true})
    res.send('Cookie has been set!');

});
app.get('/signin', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});
 //start the server

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})