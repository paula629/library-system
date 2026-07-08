import express from "express";

const app=express();

app.get("/", (_req, res)=>{
    res.json({
        message:"Sistema de libreria funcionando"
    });
});

export default app;