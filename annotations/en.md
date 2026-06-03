#### npm
- npm init -y (create a project without asking questions. This results in generating a package named "package.json", in there you can add informations about your package such as description, author name and version of the package)
-npm view <package> (you can get informations about package downloadable from npm repositories)

#### javascript
- about callbacks, sync, async: https://www.youtube.com/watch?v=6lbBaM18X3g (portuguese)
- about async/await and promises: https://www.youtube.com/watch?v=q28lfkBd9F4 (portuguese)


#### express and a bit of js learning along the way
- when following the [Tarefas api](https://medium.com/@habbema/node-js-apis-0e3544877f43), the api functions were created using const and arrow function like: const createTask (req, res) => {}
1. the use of const is to avoid that other function be created with the same name and overwrite it, thus providing immutability when using const.
2. another advantage is that the function can only be used after the declaration point. When using "function" javascript take then to the beginning of file and you can call then before their declaration

- module.exports allows to the things inside the archive be usable to whatever other archive that import them. Then we have "const tarefaController = require('../controllers/tarefaController');" line in tarefaRouters.js to use the fucntions

- { id } = req.params and { descricao } = req.body uses destructuring to take the id and the descricao from the request sent, will search for the id property and descricao property

- about app.js:
1. // Global: Make the API understand JSON on all routes
app.use(express.json()); 

2. // Defines a routes file and a specific prefix
app.use('/api', tarefaRoutes); 

