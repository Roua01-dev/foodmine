import express from "express";
import cors from "cors";
import { sample_foods, sample_tags, sample_users } from "./data";
import jwt from "jsonwebtoken"
const app=express();
app.use(express.json());


/**  Le middleware CORS est utilisé pour 
 * permettre à des ressources provenant de différents 
 * domaines d'être accessibles à partir d'un serveur.
 

"app.use()" est utilisée pour
 définir l'utilisation de ce middleware 
 dans l'application Express.



 * "credentials": Cela permet à l'application 
 * de partager les cookies et les informations
 *  d'identification entre différents domaines.
 * 
 * 
 *  l'URL "http://localhost:4200" est autorisée 
 * à accéder aux ressources de l'application. 
 * Si cette option est définie sur "*", 
 * tous les domaines seront autorisés à accéder 
 * aux ressources, ce qui n'est généralement
 *  pas recommandé pour des raisons de sécurité.
 * 
 * */
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

/**La route est définie comme "/api/foods",
 *  ce qui signifie que cette route est accessible 
 * via l'URL http://[nom du domaine]/api/foods.

 */

app.get("/api/foods",(req,res)=>{
  //  http://localhost:5000/api/foods tatla3 jomla heki
    res.send(sample_foods);
})
//lazemna njibou api lkol l 3malnehom f frontend

app.get("/api/foods/search/:searchTerm",(req,res)=>{
    const searchTerm=req.params.searchTerm;
    const foods=sample_foods.filter(food=>food.name.toLowerCase().includes(searchTerm.toLowerCase()));
    res.send(foods);

})

app.get("/api/foods/tags",(req,res)=>{
    res.send(sample_tags)
})

app.get("/api/foods/tags/:tagName",(req,res)=>{
    const tagName=req.params.tagName;
    const  foods=sample_foods.filter(food => food.tags?.includes(tagName));
    res.send(foods);
})


app.get("/api/foods/:foodId",(req,res)=>{
    const foodId=req.params.foodId;
    const  food=sample_foods.find(food=>food.id==foodId);
    res.send(food);
})

/**La fonction "app.listen()" est utilisée pour 
 * lancer le serveur et écouter les demandes entrantes 
 * sur le port défini. La fonction prend deux paramètres 
 * : le premier paramètre est le numéro de port sur 
 * lequel le serveur doit écouter, et le deuxième paramètre est une fonction de rappel qui est exécutée une fois 
 * que le serveur est lancé avec succès. */
const port=5000;
app.listen(port,()=>{
    //lena k ta3ml npm start wen 7atina    
    // "start": "cd src && nodemon server.ts",fel package.json
    //tatla3 jomla heki l hatineha f console

    console.log("Website served on http://localhost: "+port);
})

app.post("/api/users/login",(req,res)=>{
    const {email,password}=req.body;
    const user=sample_users.find(user=>user.email===email && user.password===password)
    if(user){
        res.send(generateTokenResponse(user));
    }
    else {
        res.status(400).send("User name or password is not valid!")
    }
})
/**La réponse de la route d'API dépend du résultat de la recherche d'utilisateur.
 *  Si un utilisateur correspondant est trouvé, la réponse renvoie l'objet d'utilisateur 
 * avec le jeton JWT en utilisant la fonction generateTokenResponse().
 *  Sinon, une réponse d'erreur avec un code de statut HTTP 400 est renvoyée avec un message d'erreur */

const generateTokenResponse=(user:any)=>{
    //lena mchena 9bal instalina jsonwebtoken w 3malna import
    const token=jwt.sign({
        email:user.email,isAdmin:user.isAdmin

    },"SomeRandomText",{
        expiresIn:"30d"
    })
user.token=token;
return user;
}