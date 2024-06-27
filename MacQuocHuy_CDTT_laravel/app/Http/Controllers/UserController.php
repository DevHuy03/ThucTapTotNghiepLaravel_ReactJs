<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function index($status, $page = 1)
    {
        $users = User::where([['status','!=',0],['roles','!=',0]])
        ->orderBy('created_at','DESC')
        ->select('id', 'name', 'username', 'gender', 'phone', 'email','address', 'status')
        ->get();
        $total = User::count();
        $result = [
            'status' => true,
            'users' => $users,
            'message' => 'Tải dữ liệu thành công',
            'total' => $total
        ];
        return response()->json($result, 200);
    }
    public function store(Request $request)
    {
        $user = new User();
        $user->name = $request->name; //form
        $user->username = $request->username; //form
        $user->password = $request->password; //form
        $user->gender = $request->gender; //form
        $user->email = $request->email; //form
        $user->address = $request->address; //form
        $user->phone = $request->phone; //form
        $user->roles = 1; //form
        $user->created_at = date('Y-m-d H:i:s');
        $user->created_by = 1;
        $user->status = $request->status; //form
        if ($user->save()) {
            $result = [
                'status' => true,
                'user' => $user,
                'message' => 'Thêm dữ liệu thành công',
            ];
            return response()->json($result, 200);
        }
        //
        $result = [
            'status' => false,
            'user' => null,
            'message' => 'Không thể thêm dữ liệu',
        ];
        return response()->json($result, 200);

    }
    public function show($id)
    {
        $user = User::find($id);
        if ($user == null) {
            $result = [
                'status' => false,
                'user' => null,
                'message' => 'Không tìm thấy dữ liệu ',

            ];
            return response()->json($result, 404);
        }
        $result = [
            'status' => true,
            'user' => $user,
            'message' => 'Tải dữ liệu thành công',

        ];
        return response()->json($result, 200);

    }
    function update(Request $request, $id)
    {
        $user = User::find($id);
        if ($user == null) {
            $result = [
                'status' => false,
                'user' => null,
                'message' => 'Không tìm thấy dữ liệu',
            ];
            return response()->json($result, 404);
        }
        $user->name = $request->name; //form
        $user->username = $request->username; //form
        $user->password = $request->password; //form
        $user->gender = $request->gender; //form
        $user->email = $request->email; //form
        $user->address = $request->address; //form
        $user->phone = $request->phone; //form
        $user->roles = 1; //form
        $user->updated_at = date('Y-m-d H:i:s');
        $user->updated_by = 1; //tam
        $user->status = $request->status; //reactjs
        if ($user->save()) {
            $result = [
                'status' => true,
                'user' => $user,
                'message' => 'Cập nhật dữ liệu thành công',
            ];
            return response()->json($result, 200);
        }
        //
        $result = [
            'status' => false,
            'user' => null,
            'message' => 'Không thể cập nhật dữ liệu',
        ];
        return response()->json($result, 200);
    }
    public function destroy($id)
    {
        $user = User::find($id);
        if ($user == null) {
            $result = [
                'status' => false,
                'user' => null,
                'message' => 'Không tìm thấy dữ liệu',
            ];
            return response()->json($result, 404);
        }
        if ($user->delete()) {
            $result = [
                'status' => true,
                'user' => $user,
                'message' => 'Xóa dữ liệu thành công',
            ];
            return response()->json($result, 200);
        }
        $result = [
            'status' => false,
            'user' => null,
            'message' => 'Không thể xóa dữ liệu',
        ];
        return response()->json($result, 200);
    }
    public function trash($status, $page = 1)
    {
        $user = User::where('status', '==', 0)
            ->orderBy('created_at', 'desc')
            ->select('id', 'name', 'username', 'status', 'phone', 'email', 'gender')
            ->get();
        $total = User::count();
        $result = [
            'status' => true,
            'users' => $user,
            'message' => 'Tải dữ liệu thành công',
            'total' => $total
        ];
        return response()->json($result, 200);
    }
    public function delete($id)
    {
        $user = User::find($id);
        if ($user == null) {
            $result = [
                'status' => false,
                'user' => null,
                'message' => 'Không tìm thấy dữ liệu ',

            ];
            return response()->json($result, 404);
        }
        $user->updated_at = date('Y-m-d H:i:s');
        $user->updated_by = 1; //tam
        $user->status = 0; //reactjs
        if ($user->save()) {
            $result = [
                'status' => true,
                'user' => $user,
                'message' => 'Xóa dữ liệu thành công',

            ];
            return response()->json($result, 200);
        }
    }
    //Khôi phục dữ liệu
    public function restore($id)
    {
        $user = User::find($id);
        if ($user == null) {
            $result = [
                'status' => false,
                'user' => null,
                'message' => 'Không tìm thấy dữ liệu ',

            ];
            return response()->json($result, 404);
        }
        $user->updated_at = date('Y-m-d H:i:s');
        $user->updated_by = 1; //tam
        $user->status = 1; //
        if ($user->save()) {
            $result = [
                'status' => true,
                'user' => $user,
                'message' => 'Khôi phục dữ liệu thành công',

            ];
            return response()->json($result, 200);
        }
    }
    //Thay đổi trạng thái
    public function status($id)
    {
        $user = User::find($id);
        if ($user == null) {
            $result = [
                'status' => false,
                'user' => null,
                'message' => 'Không cập nhật được trạng thái',

            ];
            return response()->json($result, 404);
        }
        $user->updated_at = date('Y-m-d H:i:s');
        $user->updated_by = 1; //tam
        $user->status = ($user->status == 1) ? 2 : 1; //reactjs
        if ($user->save()) {
            $result = [
                'status' => true,
                'user' => $user,
                'message' => 'Cập nhật trạng thái thành công !',

            ];
            return response()->json($result, 200);
        }

        $result = [
            'status' => false,
            'user' => null,
            'message' => 'Không thể cập nhật trạng thái',

        ];
        return response()->json($result, 200);

    }
    //Login
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token = $user->createToken('accessToken')->accessToken;
            return response()->json(
                [
                    'status' => true,
                    'message' => 'Đăng nhập thành công !',
                    'user' => $user,
                    "access_token" => $token
                ],
                200
            );
        } else {
            return response()->json([
                'status' => false,
                'message' => ' Sai mật khẩu hoặc password',
                'user' => null,
                'access token' => null
            ], 401);
        }
    }

    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        return response()->json(['message' => 'Successfully logged out']);
    }
}
