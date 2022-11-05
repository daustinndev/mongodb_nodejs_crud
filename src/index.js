import app from "./app";
import './database/'
import "./config"
import { PORT } from "./config";

app.listen(PORT);
console.log("server on port", PORT);
