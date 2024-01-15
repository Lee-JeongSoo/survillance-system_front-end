const express = require('express');
const app = express();

const server = app.listen(4001,() =>{
    console.log('Start Server : localhost:4001')
});

app.get('/api/users/:type', async(req,res)=>{
    let{
        type
    } = req.params;

    console.log(type);
    if(type =='seoul'){
        let data = [
            {name:"홍길동",city:"seoul"},
            {name:"홍길은",city:"seoul"},
        ];
        res.send(data);
    }else if(type =='jeju'){
        let data = [
            {name:"이지은",city:"jeju"},
            {name:"이지금",city:"jeju"},
        ]
        res.send(data);
    }else{
        res.send('Type is not correct.');
    }
});
