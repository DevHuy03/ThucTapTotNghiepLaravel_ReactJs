<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use App\Http\Controllers\Controller;
use Illuminate\Support\Str;

class CategoryController extends Controller
{
    public function index($status, $page = 1)
    {
        $categorys = Category::where('status', '!=', 0)
            ->orderBy('created_at', 'desc')
            ->select('id', 'name', 'slug', 'status', 'image')
            ->get();
        $total = Category::count();
        $result = [
            'status' => true,
            'categorys' => $categorys,
            'message' => 'Tải dữ liệu thành công',
            'total' => $total
        ];
        return response()->json($result, 200);
    }
    public function store(Request $request)
    {
        $category = new Category();
        $category->name = $request->name; //reactjs
        $category->slug = Str::of($request->name)->slug('-');
        $image = $request->image;
        if ($image != null) {
            $extension = $image->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $fileName = date('YmdHis') . '.' . $extension;
                $image->move(public_path('images/category'), $fileName);
                $category->image = $fileName;
            }
        }
        $category->parent_id = $request->parent_id; //form
        $category->sort_order = $request->sort_order; //form
        $category->description = $request->description; //form
        $category->created_at = date('Y-m-d H:i:s');
        $category->created_by = 1;
        $category->status = $request->status; //form
        if ($category->save()) {
            $result = [
                'status' => true,
                'category' => $category,
                'message' => 'Thêm dữ liệu thành công',
            ];
            return response()->json($result, 200);
        }
        //
        $result = [
            'status' => false,
            'category' => null,
            'message' => 'Không thể thêm dữ liệu',
        ];
        return response()->json($result, 200);

    }
    function update(Request $request, $id)
    {
        $category = Category::find($id);
        if ($category == null) {
            $result = [
                'status' => false,
                'category' => null,
                'message' => 'Không tìm thấy dữ liệu',
            ];
            return response()->json($result, 404);
        }
        $category->name = $request->name; //form
        $category->slug = Str::of($request->name)->slug('-');
        //upload file reactjs
        $image = $request->image;
        if ($image != null) {
            $extension = $image->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $fileName = date('YmdHis') . '.' . $extension;
                $image->move(public_path('images/category'), $fileName);
                $category->image = $fileName;
            }
        }
        $category->parent_id = $request->parent_id; //form
        $category->sort_order = $request->sort_order; //form
        $category->description = $request->description; //form
        $category->created_at = date('Y-m-d H:i:s');
        $category->created_by = 1;
        $category->updated_by = 1; //tam
        $category->status = $request->status; //form
        if ($category->save()) {
            $result = [
                'status' => true,
                'category' => $category,
                'message' => 'Cập nhật dữ liệu thành công',
            ];
            return response()->json($result, 200);
        }
        //
        $result = [
            'status' => false,
            'category' => null,
            'message' => 'Không thể cập nhật',
        ];
        return response()->json($result, 200);
    }
    public function show($id)
    {
        if(is_numeric($id))
        {
            $category = Category::find($id);
        }
        else
        {
            $category = Category::where('slug',$id)->first();
        }
        if ($category == null) {
            $result = [
                'status' => false,
                'category' => null,
                'message' => 'Không tìm thấy dữ liệu ',

            ];
            return response()->json($result, 404);
        }
        $result = [
            'status' => true,
            'category' => $category,
            'message' => 'Tải dữ liệu thành công',

        ];
        return response()->json($result, 200);

    }
    public function destroy($id)
    {
        $category = Category::find($id);
        if ($category == null) {
            $result = [
                'status' => false,
                'category' => null,
                'message' => 'Không tìm thấy dữ liệu',
            ];
            return response()->json($result, 404);
        }
        if ($category->delete()) {
            $result = [
                'status' => true,
                'category' => $category,
                'message' => 'Xóa dữ liệu thành công',
            ];
            return response()->json($result, 200);
        }
        $result = [
            'status' => false,
            'category' => null,
            'message' => 'Không thể xóa dữ liệu',
        ];
        return response()->json($result, 200);
    }
    //Thùng rác
    public function trash($status, $page = 1)
    {
        $category = Category::where('status', '==', 0)
            ->orderBy('created_at', 'desc')
            ->select('id', 'name', 'slug', 'status', 'image')
            ->get();
        $total = Category::count();
        $result = [
            'status' => true,
            'categorys' => $category,
            'message' => 'Tải dữ liệu thành công',
            'total' => $total
        ];
        return response()->json($result, 200);
    }
    public function delete($id)
    {
        $category = Category::find($id);
        if ($category == null) {
            $result = [
                'status' => false,
                'category' => null,
                'message' => 'Không tìm thấy dữ liệu ',

            ];
            return response()->json($result, 404);
        }
        $category->updated_at = date('Y-m-d H:i:s');
        $category->updated_by = 1; //tam
        $category->status = 0; //reactjs
        if ($category->save()) {
            $result = [
                'status' => true,
                'category' => $category,
                'message' => 'Xóa dữ liệu thành công',

            ];
            return response()->json($result, 200);
        }
    }
    //Khôi phục dữ liệu
    public function restore($id)
    {
        $category = Category::find($id);
        if ($category == null) {
            $result = [
                'status' => false,
                'category' => null,
                'message' => 'Không tìm thấy dữ liệu ',

            ];
            return response()->json($result, 404);
        }
        $category->updated_at = date('Y-m-d H:i:s');
        $category->updated_by = 1; //tam
        $category->status = 1; //
        if ($category->save()) {
            $result = [
                'status' => true,
                'category' => $category,
                'message' => 'Khôi phục dữ liệu thành công',

            ];
            return response()->json($result, 200);
        }
    }
    //Thay đổi trạng thái
    public function status($id)
    {
        $category = Category::find($id);
        if ($category == null) {
            $result = [
                'status' => false,
                'category' => null,
                'message' => 'Không tìm thấy dữ liệu ',

            ];
            return response()->json($result, 404);
        }
        $category->updated_at = date('Y-m-d H:i:s');
        $category->updated_by = 1; //tam
        $category->status = ($category->status == 1) ? 2 : 1; //reactjs
        if ($category->save()) {
            $result = [
                'status' => true,
                'category' => $category,
                'message' => 'Tải dữ liệu thành công',

            ];
            return response()->json($result, 200);
        }

        $result = [
            'status' => false,
            'category' => null,
            'message' => 'Không thể cập nhật dữ liệu',

        ];
        return response()->json($result, 200);

    }

    //frontend
    public function category_list($parent_id = 0)
    {
        $args = [
            ['parent_id', '=', $parent_id],
            ['status', '=', 1]
        ];
        $categorys = Category::where($args)
            ->orderBy('sort_order', 'ASC')
            ->get();
        return response()->json(
            [
                'success' => true,
                'message' => 'Tải dữ liệu thành công',
                'categorys' => $categorys
            ],
            200
        );
    }

    public function category_all($limit, $page = 1)
    {
        $offset = ($page - 1) * $limit;
        $categorys = Category::where('status', '=', 1)
            ->orderBy('created_at', 'DESC')
            ->offset($offset)
            ->limit($limit)
            ->get();
        return response()->json(
            [
                'success' => true,
                'message' => 'Tải dữ liệu thành công',
                'categorys' => $categorys
            ],
            200
        );

    }
}
