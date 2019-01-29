'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

/**
 * Client Side test
 */

Route.get('/', "UserController.fetch");

/*
|--------------------------------------------------------------------------
| Document Routes
|--------------------------------------------------------------------------
|
*/

Route.get('/documents', "DocumentController.index")
Route.get("/documents/create", "DocumentController.create");
Route.get("/documents/edit", "DocumentController.edit");

Route.post("/documents", "DocumentController.store").middleware("auth");

Route.get("/documents/:id/show", "DocumentController.show");
Route.post("/documents/:id/update", "DocumentController.update").middleware("auth");
Route.post("/documents/:id/delete", "DocumentController.destroy").middleware("auth");
Route.post("/documents/truncate", "DocumentController.truncate").middleware("auth");


/*
|--------------------------------------------------------------------------
| User Routes
|--------------------------------------------------------------------------
|
*/

Route.get('/users', "UserController.fetch")
Route.get("/users/create", "UserController.create")

Route.post("/users", "UserController.store")

Route.get("/users/:id/show", "UserController.show").middleware("auth");
Route.post("/users/:id/update", "UserController.update").middleware("auth");
Route.post("/users/:id/delete", "UserController.destroy").middleware("auth");
Route.post("/users/truncate", "UserController.truncate").middleware("auth");

Route.post('/login', "UserController.login")
Route.post('/register', "UserController.register")