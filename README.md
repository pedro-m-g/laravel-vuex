# Vuex on Laravel

This is a simple TODO app showing how to get started using Vue and Vuex on Laravel.

## Project Structure
- app: Contains all the PHP backend code for the app
- bootstrap: Contains code required by Laravel to start the app
- config: Contains PHP configuration for the backend
- database: Contains database migratinos and seeds
- public: Contains processed static content (HTML, CSS, JS, images, etc.)
- resources: Contains frontend code
    - js: Contains the Vue components
    - lang: Contains translations for any extra language your app supports (defaults to english)
    - sass: Contains the styling SCSS code (before processing)
    - views: Contains all Laravel Blade views. We can use Vue components here
- routes: Contains route mappings definitions to controllers and views
- storage: Contains internal Laravel storage, logs and user uploads (in case your app supports them)
- tests: Contains unit and integration automated tests

# Run this project

You can use the following command to run the Laravel server:

```sh
php artisan serve
```

You can compile frontend resources using the following command:

```sh
npm run dev
```

You can start watch server to compile frontend resources when they change by using the following command:

```sh
npm run watch
```

# Application flow

- Browser makes an HTTP request to "/" route
- Laravel finds this route in `routes/web.php`
- Laravel renders `resources/views/welcome.blade.php` view
- In the frontend, we load processed CSS from `resources/sass/app.scss`
- We also load processed JavaScript from `resources/js/app.js`
- In `app.js`, we define our Vue components and Vuex store
- Browser renders our Vue components
