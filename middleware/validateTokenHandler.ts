import asynchandler from "express-async-handler";
import jwt from "jsonwebtoken";

const validateToken = asynchandler(async (req, res ,next) => {
  let token;
  let authHeader:any = req.headers.Authorization || req.headers.authorization;
  if(authHeader && authHeader.startsWith("Bearer")){
    token = authHeader.split(" ")[1];
    jwt.verify(token,process.env.SECRET_KEY as string,(err:any,decoded:any) => {
        if(err) res.status(401).json("user not authorized");
    req.user = decoded.user;
    next(); 
    })
  }

  if(!token) res.status(401).json("user not authorized or token is expired")
});

export default validateToken;