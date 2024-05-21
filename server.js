require("dotenv").config();
const http = require("http");
const port = process.env.PORT || 8080;
const host = "localhost";

// BONUS

const frasiMotivazionali = [
    "Non smettere mai di credere in te stesso.",
    "Ogni giorno e' una nuova opportunita' per migliorare.",
    "Il successo e' la somma di piccoli sforzi ripetuti giorno dopo giorno.",
    "Non arrenderti, il meglio deve ancora venire.",
    "La tua unica limitazione e' la tua immaginazione.",
    "Le sfide sono cio' che rendono la vita interessante.",
    "Non sognare la tua vita, vivi i tuoi sogni.",
    "L'unico modo per fare un ottimo lavoro e' amare cio' che fai.",
    "Credi in te stesso e tutto sara' possibile.",
    "Il fallimento e' il primo passo verso il successo."
];

function randNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randPhrase(){
    return frasiMotivazionali[randNumber(0,frasiMotivazionali.length-1)]
}



//BASE

const server = http.createServer((req, res) => {
    console.log(`${req.method} -> ${req.url} effettuata`);
    if (req.url === "/favicon.ico"){
        res.writeHead(404);
        res.end();
        return;
    }
    res.writeHead(200, {"Content-Type" : "text/html"});
    res.end(`
        <h2> ${process.env.RESPONSE} </h2>
        <h1> ${randPhrase()} </h1>
    `)
})

server.listen(port, host, ()=>{
    console.log(`Server avviato -> http://${host}:${port}`)
})