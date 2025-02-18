<?php


use App\Http\Controllers\BannerController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\BrandController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\ExportController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\OrderdetailController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\TopicController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('banner')->group(function () {
    Route::get('index', [BannerController::class, 'index']);
    Route::get('show/{id}', [BannerController::class, 'show']);
    Route::post('store', [BannerController::class, 'store']);
    Route::post('update/{id}', [BannerController::class, 'update']);
    Route::delete('destroy/{id}', [BannerController::class, 'destroy']);

    Route::get('trash', [BannerController::class, 'trash']);
    Route::get('delete/{id}', [BannerController::class, 'delete']);
    Route::get('restore/{id}', [BannerController::class, 'restore']);
    Route::get('status/{id}', [BannerController::class, 'status']);
    //frontend
    Route::get('banner_list/{position}', [BannerController::class, 'banner_list']);

});

Route::prefix('brand')->group(function () {
    Route::get('index', [BrandController::class, 'index']);
    Route::get('show/{id}', [BrandController::class, 'show']);
    Route::post('store', [BrandController::class, 'store']);
    Route::delete('destroy/{id}', [BrandController::class, 'destroy']);
    Route::post('update/{id}', [BrandController::class, 'update']);

    Route::get('trash', [BrandController::class, 'trash']);
    Route::get('delete/{id}', [BrandController::class, 'delete']);
    Route::get('restore/{id}', [BrandController::class, 'restore']);
    Route::get('status/{id}', [BrandController::class, 'status']);

});

Route::prefix('category')->group(function () {
    Route::get('index', [CategoryController::class, 'index']);
    Route::get('show/{id}', [CategoryController::class, 'show']);
    Route::post('store', [CategoryController::class, 'store']);
    Route::post('update/{id}', [CategoryController::class, 'update']);
    Route::delete('destroy/{id}', [CategoryController::class, 'destroy']);

    Route::get('trash', [CategoryController::class, 'trash']);
    Route::get('delete/{id}', [CategoryController::class, 'delete']);
    Route::get('restore/{id}', [CategoryController::class, 'restore']);
    Route::get('status/{id}', [CategoryController::class, 'status']);
    //frontend
    Route::get('category_list/{parent_id?}', [CategoryController::class, 'category_list']);
    Route::get('category_all/{limit}/{page?}', [CategoryController::class, 'category_all']);

});

Route::prefix('contact')->group(function () {
    Route::get('index', [ContactController::class, 'index']);
    Route::get('show/{id}', [ContactController::class, 'show']);
    Route::post('store', [ContactController::class, 'store']);
    Route::post('update/{id}', [ContactController::class, 'update']);
    Route::delete('destroy/{id}', [ContactController::class, 'destroy']);
    Route::post('reply/{id}', [ContactController::class, 'reply']);
    Route::get('trash', [ContactController::class, 'trash']);
    Route::get('delete/{id}', [ContactController::class, 'delete']);
    Route::get('restore/{id}', [ContactController::class, 'restore']);
    Route::get('status/{id}', [ContactController::class, 'status']);

});

Route::prefix('menu')->group(function () {
    Route::get('index/{status}', [MenuController::class, 'index']);
    Route::get('trash', [MenuController::class, 'trash']);
    Route::post('store', [MenuController::class, 'store']);
    Route::get('show/{id}', [MenuController::class, 'show']);
    Route::post('update/{id}', [MenuController::class, 'update']);
    Route::get('status/{id}', [MenuController::class, 'status']);
    Route::delete('destroy/{id}', [MenuController::class, 'destroy']);
    Route::get('restore/{id}', [MenuController::class, 'restore']);
    Route::get('delete/{id}', [MenuController::class, 'delete']);
    //frontend
    Route::get('menu_list/{position}/{parent_id?}', [MenuController::class, 'menu_list']);

});

Route::prefix('export')->group(function () {
    Route::get('/', [ExportController::class, 'index']);
    Route::get('trash', [ExportController::class, 'trash']);
    Route::post('store', [ExportController::class, 'store']);
    Route::get('show/{id}', [ExportController::class, 'show']);
    Route::post('update/{id}', [ExportController::class, 'update']);
    Route::get('status/{id}', [ExportController::class, 'status']);
    Route::get('delete/{id}', [ExportController::class, 'delete']);
    Route::get('restore/{id}', [ExportController::class, 'restore']);
    Route::delete('destroy/{id}', [ExportController::class, 'destroy']);
    Route::post('storeonline', [ExportController::class, 'storeonline']);

});

Route::prefix('order')->group(function () {
    Route::get('index', [OrderController::class, 'index']);
    Route::get('show/{id}', [OrderController::class, 'show']);
    Route::get('status/{id}', [OrderController::class, 'status']);
    Route::post('store', [OrderController::class, 'store']);
    Route::post('update/{id}', [OrderController::class, 'update']);
    Route::delete('destroy/{id}', [OrderController::class, 'destroy']);
});

Route::prefix('orderdetail')->group(function () {
    Route::get('index', [OrderdetailController::class, 'index']);
    Route::get('showOrder_id/{order_id}', [OrderdetailController::class, 'showOrder_id']);
});

Route::prefix('post')->group(function () {
    Route::get('index', [PostController::class, 'index']);
    Route::get('show/{id}', [PostController::class, 'show']);
    Route::post('store', [PostController::class, 'store']);
    Route::post('update/{id}', [PostController::class, 'update']);
    Route::delete('destroy/{id}', [PostController::class, 'destroy']);

    Route::get('trash', [PostController::class, 'trash']);
    Route::get('delete/{id}', [PostController::class, 'delete']);
    Route::get('restore/{id}', [PostController::class, 'restore']);
    Route::get('status/{id}', [PostController::class, 'status']);
    //frontend
    Route::get('lastpostnew', [PostController::class, 'lastpostnew']);
    Route::get('lastpostlikenew', [PostController::class, 'lastpostlikenew']);
    Route::get('post_all/{limit}', [PostController::class, 'post_all']);
    Route::get('showslug/{id}', [PostController::class, 'showslug']);
    Route::get('post_topic/{limit}/{topic_id}', [PostController::class, 'post_topic']);


});

Route::prefix('page')->group(function () {
    Route::get('index', [PageController::class, 'index']);
    Route::get('show/{id}', [PageController::class, 'show']);
    Route::post('store', [PageController::class, 'store']);
    Route::post('update/{id}', [PageController::class, 'update']);
    Route::delete('destroy/{id}', [PageController::class, 'destroy']);

    Route::get('trash', [PageController::class, 'trash']);
    Route::get('delete/{id}', [PageController::class, 'delete']);
    Route::get('restore/{id}', [PageController::class, 'restore']);
    Route::get('status/{id}', [PageController::class, 'status']);
    Route::get('Introduce', [PageController::class, 'Introduce']);
    Route::get('Policy', [PageController::class, 'Policy']);

});

Route::prefix('product')->group(function () {
    Route::get('index', [ProductController::class, 'index']);
    Route::post('store', [ProductController::class, 'store']);
    Route::get('import', [ProductController::class, 'import']);
    Route::post('storeimport', [ProductController::class, 'storeimport']);
    Route::get('show/{id}', [ProductController::class, 'show']);
    Route::post('update/{id}', [ProductController::class, 'update']);
    Route::get('status/{id}', [ProductController::class, 'status']);
    Route::delete('destroy/{id}', [ProductController::class, 'destroy']);
    Route::get('trash', [ProductController::class, 'trash']);
    Route::get('delete/{id}', [ProductController::class, 'delete']);
    Route::get('restore/{id}', [ProductController::class, 'restore']);

    //fontend
    Route::get('sale', [ProductController::class, 'sale']);
    Route::post('storesale', [ProductController::class, 'storesale']);
    Route::get('productnew/{limit}', [ProductController::class, 'productnew']);
    Route::get('producthotbuy/{limit}', [ProductController::class, 'producthotbuy']);
    Route::get('productsale/{limit}', [ProductController::class, 'productsale']);
    Route::get('producthotbuy/{limit}', [ProductController::class, 'producthotbuy']);
    Route::get('product_category/{category_id}/{limit}', [ProductController::class, 'product_category']);
    Route::get('product_brand/{brand_id}/{limit}', [ProductController::class, 'product_brand']);
    Route::get('product_detail/{slug}', [ProductController::class, 'product_detail']);
    Route::get('product_all/{limit}/{page?}', [ProductController::class, 'product_all']);
    Route::get('product_search/{key}', [ProductController::class, 'product_search']);
    Route::get('product_home/{limit}/{category_id?}', [ProductController::class, 'product_home']);

});

Route::prefix('topic')->group(function () {
    Route::get('index', [TopicController::class, 'index']);
    Route::get('show/{id}', [TopicController::class, 'show']);
    Route::post('store', [TopicController::class, 'store']);
    Route::post('update/{id}', [TopicController::class, 'update']);
    Route::delete('destroy/{id}', [TopicController::class, 'destroy']);

    Route::get('trash', [TopicController::class, 'trash']);
    Route::get('delete/{id}', [TopicController::class, 'delete']);
    Route::get('restore/{id}', [TopicController::class, 'restore']);
    Route::get('status/{id}', [TopicController::class, 'status']);
    //frontend
    Route::get('showslug/{id}', [TopicController::class, 'showslug']);
    Route::get('topic_list/{sort_order?}', [TopicController::class, 'topic_list']);


});

Route::prefix('user')->group(function () {
    Route::get('index', [UserController::class, 'index']);
    Route::get('show/{id}', [UserController::class, 'show']);
    Route::post('store', [UserController::class, 'store']);
    Route::post('update/{id}', [UserController::class, 'update']);
    Route::delete('destroy/{id}', [UserController::class, 'destroy']);

    Route::get('trash', [UserController::class, 'trash']);
    Route::get('delete/{id}', [UserController::class, 'delete']);
    Route::get('restore/{id}', [UserController::class, 'restore']);
    Route::get('status/{id}', [UserController::class, 'status']);

    Route::get('login', [UserController::class, 'login']);
});


Route::prefix('customer')->group(function () {
    Route::get('index', [CustomerController::class, 'index']);
    Route::get('show/{id}', [CustomerController::class, 'show']);
    Route::post('store', [CustomerController::class, 'store']);
    Route::post('update/{id}', [CustomerController::class, 'update']);
    Route::delete('destroy/{id}', [CustomerController::class, 'destroy']);

    Route::get('trash', [CustomerController::class, 'trash']);
    Route::get('delete/{id}', [CustomerController::class, 'delete']);
    Route::get('restore/{id}', [CustomerController::class, 'restore']);
    Route::get('status/{id}', [CustomerController::class, 'status']);
    Route::post('login', [CustomerController::class, 'login']);

});