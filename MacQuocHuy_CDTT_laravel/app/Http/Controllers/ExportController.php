<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Orderdetail;
use App\Models\Product;
use App\Models\User;
use App\Models\ProductStore;

use Illuminate\Http\Request;
use App\Libraries\Mycart;
class ExportController extends Controller
{
    function index ()
    {
        $customers = User::Where('product.status', '!=' , 0)
        ->select('id', 'name', 'username', 'status', 'image', 'phone', 'email')
        ->orderBy('created_at')
        ->get();
        $products = Product::where('product.status', '!=', 0)
        ->join('category', 'category.id', '=', 'product.category_id')
        ->join('brand', 'brand.id', '=', 'product.brand_id')
        ->orderBy('product.created_at', 'desc')
        ->select('product.id', 'product.name', 'product.slug', 'category.name as catname', 'brand.name as brname','product.status', 'product.image')
        ->get();
        // $cart_content = MyCart::getConTent('carts');
        // $result = [
        //     'status' => true,
        //     'message' => "Tải dữu liệu thành công !",
        //     'brands' => $brands,
        //     'count_all' => $count_all,
        //     'count_trash' => $count_trash
        // ];
        // return response() -> json($result, 200);
    }
    public function store(Request $request)
    {
        $listcart = $request->listcart;
        $user_id = $request->user_id;
        $user = User::find($user_id);
        $order = new Order();
        $order->user_id = $user_id; //form
        $order->delivery_name = $user->name; //
        $order->delivery_gender = $user->gender; //form
        $order->delivery_email = $user->email; //form
        $order->delivery_phone = $user->phone; //form
        $order->delivery_address = $user->address; //form
        $order->note = 'Mua tại quầy';
        $order->created_at = date('Y-m-d H:i:s');
        $order->created_by = 1;
        $order->status = 1; //form
        if($order->save())
        {
            foreach ($listcart as $cart){
               $product = Product::find($cart['id']);
               $orderdetail = new Orderdetail();
               $orderdetail->order_id = $order->id; 
               $orderdetail->product_id = $cart['id']; //form
               $orderdetail->price = $product->price; //form
               $orderdetail->qty = $cart['qty'];
               $orderdetail->discount = 0;
               $orderdetail->amount = $product->price * $cart['qty'];
               $orderdetail->save();
            }
        } 

    }

    public function storeonline(Request $request)
    {
       
        $listcart = $request->listcart;
        $user_id = $request->user_id;
        $order = new Order();
        $order->user_id = $user_id;
        $order->delivery_name = $request->delivery_name;
        $order->delivery_gender = $request->delivery_gender;
        $order->delivery_email = $request->delivery_email;
        $order->delivery_phone = $request->delivery_phone;
        $order->delivery_address = $request->delivery_address;
        $order->note = 'Mua online';
        $order->created_at = date('Y-m-d H:i:s');
        $order->created_by = 1;
        $order->status = $request->status;
        if ($order->save()) {
            foreach ($listcart as $cart) {
                $product = Product::find($cart['id']);              
                $orderdetail = new Orderdetail();
                $orderdetail->order_id = $order->id;
                $orderdetail->product_id = $cart['id'];
                $orderdetail->price = $product->price;
                $orderdetail->qty = $cart['qty'];
                $orderdetail->discount = 0;
                $orderdetail->amount = $product->price * $cart['qty'];
                $orderdetail->save();
                // Giảm số lượng sản phẩm trong bảng productstore
                $productStore = ProductStore::where('product_id', $cart['id'])->first();
                if ($productStore) {
                    $productStore->qty -= $cart['qty'];
                    if ($productStore->qty < 0) {
                        throw new \Exception('Số lượng sản phẩm trong kho không đủ');
                    }
                    $productStore->save();
                } else {
                    throw new \Exception('Sản phẩm không tồn tại trong kho');
                }
     
            }
        }
    }

}
