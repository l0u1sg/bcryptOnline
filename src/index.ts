import express from 'express'
import path from "path";

const app = express()
const port = 8000

app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "ejs" );

app.get('/', (req, res) => {
    res.render( "index" );
})

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`bcryptOnline started at http://localhost:${ port }`)
})