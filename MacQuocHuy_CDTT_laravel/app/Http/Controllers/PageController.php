<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Support\Str;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function index($status, $page = 1)
    {
        $pages = Post::where([['status', '!=', 0],['type', '=', 'Page']])
            ->orderBy('created_at', 'desc')
            ->select('id', 'title', 'detail', 'slug', 'status', 'image')
            ->get();
        $total = Post::count();
        $result = [
            'status' => true,
            'pages' => $pages,
            'message' => 'Tải dữ liệu thành công',
            'total' => $total
        ];
        return response()->json($result, 200);
    }
    public function store(Request $request)
    {
        $page = new Post();
        $page->topic_id = $request->topic_id;
        $page->title = $request->title; //form
        $page->slug = Str::of($request->title)->slug('-');
        $page->detail = $request->detail; //form
        $page->type = "Page";
        $page->description = $request->description; //form
        $image = $request->image;
        if ($image != null) {
            $extension = $image->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $fileName = date('YmdHis') . '.' . $extension;
                $image->move(public_path('images/page'), $fileName);
                $page->image = $fileName;
            }
        }
        $page->created_at = date('Y-m-d H:i:s');
        $page->created_by = 1;
        $page->status = $request->status; //form
        if ($page->save()) {
            $result = [
                'status' => true,
                'page' => $page,
                'message' => 'Thêm dữ liệu thành công',
            ];
            return response()->json($result, 200);
        }
        //
        $result = [
            'status' => false,
            'page' => null,
            'message' => 'Không thể thêm dữ liệu',
        ];
        return response()->json($result, 200);

    }

    public function show($id)
    {
        $page = Post::find($id);
        if ($page == null) {
            $result = [
                'status' => false,
                'page' => null,
                'message' => 'Không tìm thấy dữ liệu ',

            ];
            return response()->json($result, 404);
        }
        $result = [
            'status' => true,
            'page' => $page,
            'message' => 'Tải dữ liệu thành công',

        ];
        return response()->json($result, 200);

    }
    function update(Request $request, $id)
    {
        $page = Post::find($id);
        if ($page == null) {
            $result = [
                'status' => false,
                'page' => null,
                'message' => 'Không tìm thấy dữ liệu',
            ];
            return response()->json($result, 404);
        }
        $page->topic_id = $request->topic_id;
        $page->title = $request->title; //form
        $page->slug = Str::of($request->title)->slug('-');
        $page->detail = $request->detail; //form
        $page->type = "Page";
        $page->description = $request->description; //form
        //upload file reactjs
        $image = $request->image;
        if ($image != null) {
            $extension = $image->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'gif', 'png', 'webp', 'jpeg'])) {
                $fileName = date('YmdHis') . '.' . $extension;
                $image->move(public_path('images/page'), $fileName);
                $page->image = $fileName;
            }
        }
        $page->updated_at = date('Y-m-d H:i:s');
        $page->updated_by = 1; //tam
        $page->status = $request->status; //reactjs
        if ($page->save()) {
            $result = [
                'status' => true,
                'page' => $page,
                'message' => 'Cập nhật dữ liệu thành công',
            ];
            return response()->json($result, 200);
        }
        //
        $result = [
            'status' => false,
            'page' => null,
            'message' => 'Không thể cập nhật dữ liệu',
        ];
        return response()->json($result, 200);
    }
    public function destroy($id)
    {
        $page = Post::find($id);
        if ($page == null) {
            $result = [
                'status' => false,
                'page' => null,
                'message' => 'Không tìm thấy dữ liệu',
            ];
            return response()->json($result, 404);
        }
        if ($page->delete()) {
            $result = [
                'status' => true,
                'page' => $page,
                'message' => 'Xóa dữ liệu thành công',
            ];
            return response()->json($result, 200);
        }
        $result = [
            'status' => false,
            'page' => null,
            'message' => 'Không thể xóa dữ liệu',
        ];
        return response()->json($result, 200);
    }
    public function trash($status, $page = 1)
    {
        $page = Post::where([['status', '==', 0],['type', '=', 'Page']])
            ->orderBy('created_at', 'desc')
            ->select('id', 'title', 'slug', 'status', 'image')
            ->get();
        $total = Post::count();
        $result = [
            'status' => true,
            'pages' => $page,
            'message' => 'Tải dữ liệu thành công',
            'total' => $total
        ];
        return response()->json($result, 200);
    }
    public function delete($id)
    {
        $page = Post::find($id);
        if ($page == null) {
            $result = [
                'status' => false,
                'page' => null,
                'message' => 'Không tìm thấy dữ liệu ',

            ];
            return response()->json($result, 404);
        }
        $page->updated_at = date('Y-m-d H:i:s');
        $page->updated_by = 1; //tam
        $page->status = 0; //reactjs
        if ($page->save()) {
            $result = [
                'status' => true,
                'page' => $page,
                'message' => 'Xóa dữ liệu thành công',

            ];
            return response()->json($result, 200);
        }
    }
    //Khôi phục dữ liệu
    public function restore($id)
    {
        $page = Post::find($id);
        if ($page == null) {
            $result = [
                'status' => false,
                'page' => null,
                'message' => 'Không tìm thấy dữ liệu ',

            ];
            return response()->json($result, 404);
        }
        $page->updated_at = date('Y-m-d H:i:s');
        $page->updated_by = 1; //tam
        $page->status = 1; //
        if ($page->save()) {
            $result = [
                'status' => true,
                'customer' => $page,
                'message' => 'Khôi phục dữ liệu thành công',

            ];
            return response()->json($result, 200);
        }
    }
    //Thay đổi trạng thái
    public function status($id)
    {
        $page = Post::find($id);
        if ($page == null) {
            $result = [
                'status' => false,
                'page' => null,
                'message' => 'Không cập nhật được trạng thái',

            ];
            return response()->json($result, 404);
        }
        $page->updated_at = date('Y-m-d H:i:s');
        $page->updated_by = 1; //tam
        $page->status = ($page->status == 1) ? 2 : 1; //reactjs
        if ($page->save()) {
            $result = [
                'status' => true,
                'page' => $page,
                'message' => 'Cập nhật trạng thái thành công !',

            ];
            return response()->json($result, 200);
        }

        $result = [
            'status' => false,
            'page' => null,
            'message' => 'Không thể cập nhật trạng thái',

        ];
        return response()->json($result, 200);

    }


    public function Introduce($status, $page = 1)
    {
        $pages = Post::where([['status', '=', 2],['type', '=', 'Introduce']])
            ->orderBy('created_at', 'desc')
            ->select('id', 'title', 'detail','description', 'slug', 'status')
            ->get();
        $total = Post::count();
        $result = [
            'status' => true,
            'pages' => $pages,
            'message' => 'Tải dữ liệu thành công',
            'total' => $total
        ];
        return response()->json($result, 200);
    }
    public function Policy($status, $page = 1)
    {
        $pages = Post::where([['status', '=', 2],['type', '=', 'Policy']])
            ->orderBy('created_at', 'desc')
            ->select('id', 'title', 'detail','description', 'slug', 'status')
            ->get();
        $total = Post::count();
        $result = [
            'status' => true,
            'pages' => $pages,
            'message' => 'Tải dữ liệu thành công',
            'total' => $total
        ];
        return response()->json($result, 200);
    }
}
