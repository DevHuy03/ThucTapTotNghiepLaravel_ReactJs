<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Orderdetail;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index($status, $page = 1)
    {
        $orders = Order::where('status', '!=', 0)
            ->orderBy('created_at', 'desc')
            ->select('id', 'delivery_name', 'delivery_phone', 'status', 'delivery_email', 'created_at')
            ->get();
        $total = Order::count();
        $result = [
            'status' => true,
            'orders' => $orders,
            'message' => 'Tải dữ liệu thành công',
            'total' => $total
        ];
        return response()->json($result, 200);
    }
    public function store(Request $request)
    {
        $order = new Order();
        $order->user_id = $request->user_id; //form
        $order->delivery_name = $request->delivery_name; //form
        $order->delivery_gender = $request->delivery_gender; //form
        $order->delivery_email = $request->delivery_email; //form
        $order->delivery_phone = $request->delivery_phone; //form
        $order->delivery_address = $request->delivery_address; //form
        $order->note = $request->note; //form
        $order->created_at = date('Y-m-d H:i:s');
        $order->created_by = 1;
        $order->status = $request->status; //form
        if ($order->save()) {
            $result = [
                'status' => true,
                'order' => $order,
                'message' => 'Thêm dữ liệu thành công',
            ];
            return response()->json($result, 200);
        }
        //
        $result = [
            'status' => false,
            'order' => null,
            'message' => 'Không thể thêm dữ liệu',
        ];
        return response()->json($result, 200);

    }

    public function show($id)
    {
        $order = Order::find($id);
        if ($order == null) {
            $result = [
                'status' => false,
                'order' => null,
                'message' => 'Không tìm thấy dữ liệu ',

            ];
            return response()->json($result, 404);
        }
        $result = [
            'status' => true,
            'order' => $order,
            'message' => 'Tải dữ liệu thành công',

        ];
        return response()->json($result, 200);

    }
    function update(Request $request, $id)
    {
        $order = Order::find($id);
        if ($order == null) {
            $result = [
                'status' => false,
                'order' => null,
                'message' => 'Không tìm thấy dữ liệu',
            ];
            return response()->json($result, 404);
        }
        $order->user_id = $request->user_id; //form
        $order->delivery_name = $request->delivery_name; //form
        $order->delivery_gender = $request->delivery_gender; //form
        $order->delivery_email = $request->delivery_email; //form
        $order->delivery_phone = $request->delivery_phone; //form
        $order->delivery_address = $request->delivery_address; //form
        $order->note = $request->note; //form
        $order->updated_at = date('Y-m-d H:i:s');
        $order->updated_by = 1; //tam
        $order->status = $request->status; //reactjs
        if ($order->save()) {
            $result = [
                'status' => true,
                'order' => $order,
                'message' => 'Cập nhật dữ liệu thành công',
            ];
            return response()->json($result, 200);
        }
        //
        $result = [
            'status' => false,
            'order' => null,
            'message' => 'Không thể cập nhật dữ liệu',
        ];
        return response()->json($result, 200);
    }
    public function destroy($id)
    {
        $order = Order::find($id);
        if ($order == null) {
            $result = [
                'status' => false,
                'order' => null,
                'message' => 'Không tìm thấy dữ liệu',
            ];
            return response()->json($result, 404);
        }
        
        $orderdetail = Orderdetail::where('order_id', '=', $id);

        if ($order->delete() && $orderdetail->delete()) {
            $result = [
                'status' => true,
                'order' => $order,
                'message' => 'Xóa dữ liệu thành công',
            ];
            return response()->json($result, 200);
        }
        $result = [
            'status' => false,
            'order' => null,
            'message' => 'Xóa dữ liệu thành công',
        ];
        return response()->json($result, 200);
    }
    //Thay đổi trạng thái
    public function status($id)
    {
        $order = Order::find($id);
        if ($order == null) {
            $result = [
                'status' => false,
                'order' => null,
                'message' => 'Không tìm thấy dữ liệu ',

            ];
            return response()->json($result, 404);
        }
        $order->updated_at = date('Y-m-d H:i:s');
        $order->updated_by = 1; //tam
        $order->status = ($order->status == 1) ? 2 : 1; //reactjs
        if ($order->save()) {
            $result = [
                'status' => true,
                'order' => $order,
                'message' => 'Đổi trạng thái thành công',

            ];
            return response()->json($result, 200);
        }

        $result = [
            'status' => false,
            'order' => null,
            'message' => 'Không thể cập nhật trạng thái',

        ];
        return response()->json($result, 200);

    }
}
