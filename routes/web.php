<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BukuController;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Route::get('/buku/create', [BukuController::class, 'create'])->name('buku.create')->middleware('admin');
// Route::get('/buku',[BukuController::class, 'index'])->name('buku');

Route::group(['middleware'=>['auth']], function () {

Route::get('/buku/create', [BukuController::class, 'create'])->name('buku.create')->middleware('admin');
Route::get('/buku',[BukuController::class, 'index'])->name('buku');


Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');


    Route::group(['middleware' => ['admin']], function() {
        Route::get('/buku/{buku}', [BukuController::class, 'show'])->name('buku.show');
        Route::post('/buku', [BukuController::class, 'store'])->name('buku.store');
        Route::get('/buku/page', [BukuController::class, 'search'])->name('buku.search');
        Route::get('/buku/{buku}/edit', [BukuController::class, 'edit'])->name('buku.edit');
        Route::put('/buku/{buku}/edit', [BukuController::class, 'update'])->name('buku.update');
        Route::delete('/buku/{buku}', [BukuController::class, 'destroy'])->name('buku.destroy');

    });

});






require __DIR__.'/auth.php';
