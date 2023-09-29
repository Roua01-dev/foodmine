## Lessons
1. Introduction to the course
2. Install development tools
3. Create Angular App
    1. Create project's folder(mkdir foodmine)
    2. Install @angular/cli (npm install -g @angular/cli)
    3. Create App as frontend(ng new frontend --skip-tests )
    4. run notre application(ng serve –o)
    5. supprimer dossier .git(rm -rf .git)
    6. hatina application f guithub
4. Add Header 
    1. Generate Component(pour generer new component (ng g c components/partials/header))
    2. Add Html
    3. Add Css(css lel page lkol esmha style.css w css lel header)
5. List Foods 
    1. Create Food model(3malna new 2folder(shared/models)w 3malna filee esmou(food.ts)w hatina fih les parametre w type mta3 food lkol)
    2. create data.ts
        1. add sample foods
    3. add images to assets
    4. Create Food Service
    5. Create Home component 
        1. Add ts 
        2. Add html
        3. Add css

6. Search 
    1. Add methode to Food service
    2. Add search route
    3. Show search result in home compnenet 
    4. Generate search component
        1. Add to home component
        2. Add ts
        3. Add html 
        4. Add css 
7. Tags Bar
    1. Create Tag Model
    2. Add sample tags to data.ts
    3. Food service
        1. Add get all tags method
        2. Add get all foods by tag method
    4. Add tags route
    5. Show tag result in home component
    6. Generate tags component
        1. Add to home component
        2. Add ts
        3. Add html
        4. Add css
8. Food Page 
    1. Add methode to food service 
    2. Generate Food page component
        1. Add Route
        2. Add ts 
        3. Add Html
        4. Add css 
9. Cart Page
    1. Create CartItem Model
    2. Create Cart Model
    3. Generate Cart service
    4. Add to Cart Button in Food Page
    5. Generate Cart page component
        1. Add Route
        2. Add ts 
        3. Add html
        4. Add css
10. Not Found !
    1. Generate Component
        1.  Add ts 
        2. Add html
        3. Add css
    2. Add to Pages
        1. Home Page
        2. Food Page
        3. Cart Page
/////////////////////////////
za8ret tw backend :3
(run lel backend b npm start)
11. Connet To Backend
    1. Create backend folder
    2. npm init(npm init -y)ya3mli fichier package.json f wost dossier backend
    3. npm install typescript (npm install typescript)
    4. Create tsconfig.json
    5. Create .gitignore
    6. copy data.ts to backend/src
    7. npm install express cors
    8. Create server.ts
        1. install @types
        2. add Apis
    9. npm install nodemon ts-node --save-dev/npm install nodemon --save-dev
    (utilite de nodemon:Nodemon est un utilitaire de ligne de commande pour Node.js qui permet de surveiller les modifications de fichiers dans une application Node.js et de redémarrer automatiquement le serveur chaque fois que des modifications sont détectées.
    Cela peut vous faire gagner beaucoup de temps et vous permettre de vous concentrer sur le développement de votre application plutôt que sur la gestion du serveur.)

    ("ts-node" est un package Node.js qui permet d'exécuter des fichiers TypeScript directement dans Node.js, sans avoir besoin de les compiler en JavaScript au préalable.)
    10. Add urs.ts to frontend
    11. Add HttpClient module
    12. Update food service
12. Login Page
    1. Generate Component 
        1. Add to routes
        2. Add ts
        3. Add html 
            1. Import Reactive Forms Module
        4. Add css
    2. Add Login Api 
        1. Use Json
        2. Add jsonwebtoken
        3. Test Using Postman
    3. Generate User Service
        1. Generate User model
        2. Add User Subject 
        3. Add Login Method
            1. Add User Urls
            2. Generate IUser Login interface
            3. Add ngx-toastr
                1. Import Module 
                2. Import BrowserAnimationModule
                3. Add styles in angular.json
            4. Add to header
        1. Add Local Storage methods 
        2. Add Logout Method
            1. Add to header

13. Make components for Login page
    1. Input Container 
    2. Input Validation
    3. Text Input
    4. Default Button

14. Connect Login API To MongoDB Atlas
    1. Moving Api into routers
    2. Create MongoDB Atlas
    3. Create .env file
    4. Install
        1. mongoose
        2. dotenv
        3. bcryptjs
        4. jsonwebtoken
        5. express-async-handler
        (npm install mongoose dotenv bcryptjs express-async-handler)
    5. Connect to MongoDB Atlas
    6. Use MongoDB instead of data.ts in apis
15. Register User 
    1. Add Register api
    2. Add Register service method
    3. Add Register link
    4. Add Register Component
16. Loading!
    1. Add Image
    2. Add Component
    3. Add Service 
    4. Add Interceptor

17. Checkout Page
    1. Create Order Model
    2. Create Checkout Page Component
        1. Add To Router
    3. Add User to User Service
    4. Add Cart to Cart Service 
    5. Create Order Items List Component
    6. Adding Map to the checkout page
        1. Add Leaflet npm package
            1. Add @types/leafleft
            2. Add css to angular0json
        2. Add AddressLatLng to Order Model
        3. Create Map component
            1. Add to checkout page
            2. Add TS
                1. change app-mao selector to map
             3. add to html
             4. add css
         4. add auth Guard
    7. save Order
        1. Add Order Model
        2. Add Order Status Enum
        3. Add Auth Middleware
        4. Add Order Router
            1. Add create API
        5. Add Order Urls to urls.ts
        6. Add Order Service
            1. Add carte Method
        8. Add Auth Interceptor


18. Payment page 
    1. Generate component
    2. add 'getOrderForCurrentUser' api
    3. Add Order Service method
    4. Connect Component to service
    5. Make the map Component readonly


19. Adding Paypal
    1. Generate Component
        1. Add to payment page
    2. Get paypal client Id
    3. Add Paypal client Id
    4. set up paypal button 
    5. Add pay 