const express = require('express');
const  app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Hello World');

})

app.post('/login', (req, res) => {
    const {username, password} = req.body;

    if(!username)
{
    return res.status(400).json({message:'Username is required'});
}
if(!password){
    return res.status(400).json({message:'Password is required'});
}
if(password.length<8 || password.length > 40){
    return res.status(400).json({message:'Password must be between 8 and 40 characters'});
}
return res.status(200).json({message:'Login successful'});
})












app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})