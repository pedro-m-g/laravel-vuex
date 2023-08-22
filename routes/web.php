<?php

use Illuminate\Support\Facades\Route;

/**
 * Define route mappings
 */
Route::get('/', function () {
    return view('welcome');
});
