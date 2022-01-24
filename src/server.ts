import "reflect-metadata"; 
import express, { request, response } from "express";
import { router } from "./routes";
import "./database";

// @types/express
const app = express();

app.use(express.json());

app.use(router);

app.get("/get", (request, response) => {
    return response.send("Olá IQEletronica")
});

app.post("/post", (resquest, response)=> {
    return response.send("Olá IQEletronica método Post")
});

app.listen(3000, () => console.log("Server is running"));

