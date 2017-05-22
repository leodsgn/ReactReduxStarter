require("babel-register");

const express = require("express");
const Pusher = require("pusher");

const app = express();

app.get("/", function(req, res){
    var pusher = new Pusher({
        appId: '339707',
        key: 'f594b950efe0422551af',
        secret: 'cd6587dfe11d4ca45ef6',
        cluster: 'us2',
        encrypted: true
    });

    pusher.trigger('my-channel', 'my-event', {
        "message": "hello world"
    });
});

app.listen(3000, "localhost", function(){
    console.log("listening to port 3000");
});