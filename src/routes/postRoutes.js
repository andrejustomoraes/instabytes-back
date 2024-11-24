import express from "express";
import multer from "multer";
import cors from "cors";
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost} from "../controller/postscontroller.js";

const upload = multer({dest:"./uploads"})

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
}

const routes = (app) => {

    // Middleware para parsear corpos de requisições JSON
    app.use(express.json());
    app.use(cors(corsOptions));

    // Rota para buscar todos os posts
    app.get("/posts", listarPosts);
    // Rota para criar um post
    app.post("/posts", postarNovoPost)
    app.post("/upload", upload.single("imagem"), uploadImagem)
    app.put("/upload/:id", atualizarNovoPost)
};

export default routes;