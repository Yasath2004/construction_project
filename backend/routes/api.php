<?php

use App\Http\Controllers\admin\DashboardController;
use \App\Http\Controllers\AuthenticationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/authenticate', [AuthenticationController::class, 'authenticate']);

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::group(['middleware'=>['auth:sanctum']],function()
{
    // Routes protected by auth:sanctum middleware
    Route::post('dashboard', [DashboardController::class, 'index']);
});