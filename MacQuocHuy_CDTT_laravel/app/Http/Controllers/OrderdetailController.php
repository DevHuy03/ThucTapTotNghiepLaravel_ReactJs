<?php

namespace App\Http\Controllers;

use App\Models\Orderdetail;
use Illuminate\Http\Request;

class OrderdetailController extends Controller
{
    public function index($status, $page = 1)
    {
        $orderdetails = Orderdetail::all();
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'orderdetails' => $orderdetails],
            200
        );
    }
    // public function index()
    // {
    //     $orders = Orderdetail::all()
    //         ->join('product', 'product.id', '=', 'orderdetail.product_id')
    //         ->orderBy('orderdetail.id', 'desc')
    //         ->select('orderdetail.id','orderdetail.order_id', 'orderdetail.price','product.name as proname','product.image as proimage', 'orderdetail.qty', 'orderdetail.amount')
    //         ->get();
    //     $total = Orderdetail::count();
    //     $result = [
    //         'status' => true,
    //         'orders' => $orders,
    //         'message' => 'Tải dữ liệu thành công',
    //         'total' => $total
    //     ];
    //     return response()->json($result, 200);
    // }
    public function store(Request $request)
    {
        $orderdetail = new Orderdetail();
        $orderdetail->order_id = $request->order_id; //form
        $orderdetail->product_id = $request->product_id; //form
        $orderdetail->price = $request->price; //form
        $orderdetail->qty = $request->qty; //form
        $orderdetail->discount = $request->discount; //form
        $orderdetail->amount = $request->amount; //form
        if ($orderdetail->save()) {
            $result = [
                'status' => true,
                'orderdetail' => $orderdetail,
                'message' => 'Thêm dữ liệu thành công',
            ];
            return response()->json($result, 200);
        }
        //
        $result = [
            'status' => false,
            'orderdetail' => null,
            'message' => 'Không thể thêm dữ liệu',
        ];
        return response()->json($result, 200);

    }
    public function showOrder_id($order_id)
    {
        $orderdetail = Orderdetail::where('orderdetail.order_id', '=', $order_id)
            ->join('product', 'product.id', '=', 'orderdetail.product_id')
            ->orderBy('orderdetail.id', 'desc')
            ->select('orderdetail.id','orderdetail.order_id', 'orderdetail.price','product.name as proname','product.image as proimage', 'orderdetail.qty', 'orderdetail.amount')
            ->get();
        $result = [
            'status' => true,
            'orderdetails' => $orderdetail,
            'message' => 'Tải dữ liệu thành công',
        ];
        return response()->json($result, 200);
    }
    public function show($id)
    {
        $orderdetail = Orderdetail::find($id);
        if ($orderdetail == null) {
            $result = [
                'status' => false,
                'orderdetail' => null,
                'message' => 'Không tìm thấy dữ liệu ',

            ];
            return response()->json($result, 404);
        }
        $result = [
            'status' => true,
            'orderdetail' => $orderdetail,
            'message' => 'Tải dữ liệu thành công',

        ];
        return response()->json($result, 200);

    }
    function update(Request $request, $id)
    {
        $orderdetail = Orderdetail::find($id);
        if ($orderdetail == null) {
            $result = [
                'status' => false,
                'orderdetail' => null,
                'message' => 'Không tìm thấy dữ liệu',
            ];
            return response()->json($result, 404);
        }
        $orderdetail->order_id = $request->order_id; //form
        $orderdetail->product_id = $request->product_id; //form
        $orderdetail->price = $request->price; //form
        $orderdetail->qty = $request->qty; //form
        $orderdetail->discount = $request->discount; //form
        $orderdetail->amount = $request->amount; //form
        if ($orderdetail->save()) {
            $result = [
                'status' => true,
                'orderdetail' => $orderdetail,
                'message' => 'Cập nhật dữ liệu thành công',
            ];
            return response()->json($result, 200);
        }
        //
        $result = [
            'status' => false,
            'orderdetail' => null,
            'message' => 'Không thể cập nhật dữ liệu',
        ];
        return response()->json($result, 200);
    }
    public function destroy($id)
    {
        $orderdetail = Orderdetail::find($id);
        if ($orderdetail == null) {
            $result = [
                'status' => false,
                'orderdetail' => null,
                'message' => 'Không tìm thấy dữ liệu',
            ];
            return response()->json($result, 404);
        }
        if ($orderdetail->delete()) {
            $result = [
                'status' => true,
                'orderdetail' => $orderdetail,
                'message' => 'Xóa dữ liệu thành công',
            ];
            return response()->json($result, 200);
        }
        $result = [
            'status' => false,
            'orderdetail' => null,
            'message' => 'Không thể xóa dữ liệu',
        ];
        return response()->json($result, 200);
    }
}
