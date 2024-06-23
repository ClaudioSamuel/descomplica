import { express } from "express"
import { pkg } from "body-parser"
import {router} from "./routes/router.mjs"

const app = express();
const { json, urlendcoded } = pkg;

app.listen(3000, function() {
    console.log('Servidor iniciado...');
});

app.use("/", router);