<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class CustomerController extends Controller
{
    public function index($status, $page = 1)
    {
        $user = User::where([['status','!=',0],['roles','=',0]])
            ->orderBy('created_at','DESC')
            ->select('id', 'name', 'username', 'gender', 'phone', 'email','address', 'status')
            ->get();
        $total = User::count();
        $result = [
            'status' => true,
            'customers' => $user,
            'message' => 'Tải dữ liệu thành công',
            'total' => $total
        ];
        return response()->json($result, 200);
    }
    public function store(Request $request)
    {
        $customer = new User();
        $customer->name = $request->name; //form
        $customer->username = $request->username; //form
        // $customer->password = $request->password; //form
        $customer->password = Hash::make($request->password); // Mã hóa mật khẩu
        $customer->gender = $request->gender; //form
        $customer->email = $request->email; //form
        $customer->address = $request->address; //form
        $customer->phone = $request->phone; //form
        $customer->roles = 0; //form
        $customer->created_at = date('Y-m-d H:i:s');
        $customer->created_by = 1;
        $customer->status = $request->status; //form
        if ($customer->save()) {
            $result = [
                'status' => true,
                'customer' => $customer,
                'message' => 'Đăng ký tài khoản thành công.',
            ];
            return response()->json($result);
        }
        //
        $result = [
            'status' => false,
            'customer' => null,
            'message' => 'Điền đầy đủ thông tin !',
        ];
        return response()->json($result);
    }
    public function show($id)
    {
        $customer = User::where('id', $id)
                        ->where('roles', 0)
                        ->first();    
        if ($customer == null) {
            $result = [
                'status' => false,
                'customer' => null,
                'message' => 'Không tìm thấy dữ liệu ',
            ];
            return response()->json($result, 404);
        }    
        $result = [
            'status' => true,
            'customer' => $customer,
            'message' => 'Tải dữ liệu thành công',
        ];
    
        return response()->json($result, 200);
    }
    function update(Request $request, $id)
    {
        $customer = User::find($id);
        if ($customer == null) {
            $result = [
                'status' => false,
                'user' => null,
                'message' => 'Không tìm thấy dữ liệu',
            ];
            return response()->json($result, 404);
        }
        $customer->name = $request->name; //form
        $customer->username = $request->username; //form
        $customer->password = $request->password; //form
        $customer->gender = $request->gender; //form
        $customer->email = $request->email; //form
        $customer->address = $request->address; //form
        $customer->phone = $request->phone; //form
        $customer->roles = 0;
        $customer->updated_at = date('Y-m-d H:i:s');
        $customer->updated_by = 1; //tam
        $customer->status = $request->status; //reactjs
        if ($customer->save()) {
            $result = [
                'status' => true,
                'customer' => $customer,
                'message' => 'Cập nhật dữ liệu thành công',
            ];
            return response()->json($result, 200);
        }
        //
        $result = [
            'status' => false,
            'customer' => null,
            'message' => 'Không thể cập nhật dữ liệu',
        ];
        return response()->json($result, 200);
    }

    public function destroy($id)
    {
        $customer = User::find($id);
        if ($customer == null) {
            $result = [
                'status' => false,
                'customer' => null,
                'message' => 'Không tìm thấy dữ liệu',
            ];
            return response()->json($result, 404);
        }
        if ($customer->delete()) {
            $result = [
                'status' => true,
                'customer' => $customer,
                'message' => 'Xóa dữ liệu thành công',
            ];
            return response()->json($result, 200);
        }
        $result = [
            'status' => false,
            'customer' => null,
            'message' => 'Không thể xóa dữ liệu',
        ];
        return response()->json($result, 200);
    }
    public function trash($status, $page = 1)
    {
        $customer = User::where('status', '==', 0)
            ->orderBy('created_at', 'desc')
            ->select('id', 'name', 'username', 'status', 'phone', 'email', 'gender')
            ->get();
        $total = User::count();
        $result = [
            'status' => true,
            'customers' => $customer,
            'message' => 'Tải dữ liệu thành công',
            'total' => $total
        ];
        return response()->json($result, 200);
    }
    public function delete($id)
    {
        $customer = User::find($id);
        if ($customer == null) {
            $result = [
                'status' => false,
                'customer' => null,
                'message' => 'Không tìm thấy dữ liệu ',

            ];
            return response()->json($result, 404);
        }
        $customer->updated_at = date('Y-m-d H:i:s');
        $customer->updated_by = 1; //tam
        $customer->status = 0; //reactjs
        if ($customer->save()) {
            $result = [
                'status' => true,
                'customer' => $customer,
                'message' => 'Xóa dữ liệu thành công',

            ];
            return response()->json($result, 200);
        }
    }
    //Khôi phục dữ liệu
    public function restore($id)
    {
        $customer = User::find($id);
        if ($customer == null) {
            $result = [
                'status' => false,
                'customer' => null,
                'message' => 'Không tìm thấy dữ liệu ',

            ];
            return response()->json($result, 404);
        }
        $customer->updated_at = date('Y-m-d H:i:s');
        $customer->updated_by = 1; //tam
        $customer->status = 1; //
        if ($customer->save()) {
            $result = [
                'status' => true,
                'customer' => $customer,
                'message' => 'Khôi phục dữ liệu thành công',

            ];
            return response()->json($result, 200);
        }
    }
    //Thay đổi trạng thái
    public function status($id)
    {
        $customer = User::find($id);
        if ($customer == null) {
            $result = [
                'status' => false,
                'customer' => null,
                'message' => 'Không cập nhật được trạng thái',

            ];
            return response()->json($result, 404);
        }
        $customer->updated_at = date('Y-m-d H:i:s');
        $customer->updated_by = 1; //tam
        $customer->status = ($customer->status == 1) ? 2 : 1; //reactjs
        if ($customer->save()) {
            $result = [
                'status' => true,
                'customer' => $customer,
                'message' => 'Cập nhật trạng thái thành công !',

            ];
            return response()->json($result, 200);
        }

        $result = [
            'status' => false,
            'customer' => null,
            'message' => 'Không thể cập nhật trạng thái',

        ];
        return response()->json($result, 200);

    }
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        $user = User::where('email', $request->email)->first();

        if ($user && Hash::check($request->password, $user->password)) {
            // Đăng nhập thành công
            Auth::login($user);
            return response()->json(['message' => 'Đăng nhập thành công !']);
        }

        return response()->json(['message' => 'Sai mật khẩu hoặc password']);
    }
    // public function login(Request $request)
    // {
    //     $credentials = $request->only('email', 'password');
    //     if (Auth::attempt($credentials)) {
    //         $user = Auth::user();
    //         $token = $user->createToken('accessToken')->accessToken;
    //         return response()->json(
    //             [
    //                 'status' => true,
    //                 'message' => 'Đăng nhập thành công !',
    //                 'user' => $user,
    //                 "access_token" => $token
    //             ],
    //             200
    //         );
    //     } else {
    //         return response()->json([
    //             'status' => false,
    //             'message' => ' Sai mật khẩu hoặc password',
    //             'user' => null,
    //             'access token' => null
    //         ], 401);
    //     }
    // }
}
