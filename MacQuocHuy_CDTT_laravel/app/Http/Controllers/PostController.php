<?php

namespace App\Http\Controllers;
use App\Models\Topic;
use Illuminate\Support\Str;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index($status, $page = 1)
    {
        $posts = Post::where([['post.status', '!=', 0],['post.type', '=', 'Post']])
            ->join('topic', 'topic.id', '=', 'post.topic_id')
            ->orderBy('post.created_at', 'desc')
            ->select('post.id', 'post.title', 'post.detail', 'topic.name as topicname', 'post.slug', 'post.status', 'post.image')
            ->get();
        $total = Post::count();
        $result = [
            'status' => true,
            'posts' => $posts,
            'message' => 'Tải dữ liệu thành công',
            'total' => $total
        ];
        return response()->json($result, 200);
    }
    public function store(Request $request)
    {
        $post = new Post();
        $post->topic_id = $request->topic_id;
        $post->title = $request->title; //form
        $post->slug = Str::of($request->title)->slug('-');
        $post->detail = $request->detail; //form
        $post->type = "Post";
        $post->description = $request->description; //form
        $image = $request->image;
        if ($image != null) {
            $extension = $image->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $fileName = date('YmdHis') . '.' . $extension;
                $image->move(public_path('images/post'), $fileName);
                $post->image = $fileName;
            }
        }
        $post->created_at = date('Y-m-d H:i:s');
        $post->created_by = 1;
        $post->status = $request->status; //form
        if ($post->save()) {
            $result = [
                'status' => true,
                'post' => $post,
                'message' => 'Thêm dữ liệu thành công',
            ];
            return response()->json($result, 200);
        }
        //
        $result = [
            'status' => false,
            'post' => null,
            'message' => 'Không thể thêm dữ liệu',
        ];
        return response()->json($result, 200);

    }

    public function show($id)
    {
        $post = Post::find($id);
        if ($post == null) {
            $result = [
                'status' => false,
                'post' => null,
                'message' => 'Không tìm thấy dữ liệu ',

            ];
            return response()->json($result, 404);
        }
        $result = [
            'status' => true,
            'post' => $post,
            'message' => 'Tải dữ liệu thành công',

        ];
        return response()->json($result, 200);

    }
    function update(Request $request, $id)
    {
        $post = Post::find($id);
        if ($post == null) {
            $result = [
                'status' => false,
                'post' => null,
                'message' => 'Không tìm thấy dữ liệu',
            ];
            return response()->json($result, 404);
        }
        $post->topic_id = $request->topic_id;
        $post->title = $request->title; //form
        $post->slug = Str::of($request->title)->slug('-');
        $post->detail = $request->detail; //form
        $post->type = "Post";
        $post->description = $request->description; //form
        //upload file reactjs
        $image = $request->image;
        if ($image != null) {
            $extension = $image->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'gif', 'png', 'webp', 'jpeg'])) {
                $fileName = date('YmdHis') . '.' . $extension;
                $image->move(public_path('images/post'), $fileName);
                $post->image = $fileName;
            }
        }
        $post->updated_at = date('Y-m-d H:i:s');
        $post->updated_by = 1; //tam
        $post->status = $request->status; //reactjs
        if ($post->save()) {
            $result = [
                'status' => true,
                'post' => $post,
                'message' => 'Cập nhật dữ liệu thành công',
            ];
            return response()->json($result, 200);
        }
        //
        $result = [
            'status' => false,
            'post' => null,
            'message' => 'Không thể cập nhật dữ liệu',
        ];
        return response()->json($result, 200);
    }
    public function destroy($id)
    {
        $post = Post::find($id);
        if ($post == null) {
            $result = [
                'status' => false,
                'post' => null,
                'message' => 'Không tìm thấy dữ liệu',
            ];
            return response()->json($result, 404);
        }
        if ($post->delete()) {
            $result = [
                'status' => true,
                'post' => $post,
                'message' => 'Xóa dữ liệu thành công',
            ];
            return response()->json($result, 200);
        }
        $result = [
            'status' => false,
            'post' => null,
            'message' => 'Không thể xóa dữ liệu',
        ];
        return response()->json($result, 200);
    }
    public function trash($status, $page = 1)
    {
        $post = Post::where([['status', '==', 0],['type', '=', 'Post']])
            ->orderBy('created_at', 'desc')
            ->select('id', 'title', 'slug', 'status', 'image')
            ->get();
        $total = Post::count();
        $result = [
            'status' => true,
            'posts' => $post,
            'message' => 'Tải dữ liệu thành công',
            'total' => $total
        ];
        return response()->json($result, 200);
    }
    public function delete($id)
    {
        $post = Post::find($id);
        if ($post == null) {
            $result = [
                'status' => false,
                'post' => null,
                'message' => 'Không tìm thấy dữ liệu ',

            ];
            return response()->json($result, 404);
        }
        $post->updated_at = date('Y-m-d H:i:s');
        $post->updated_by = 1; //tam
        $post->status = 0; //reactjs
        if ($post->save()) {
            $result = [
                'status' => true,
                'post' => $post,
                'message' => 'Xóa dữ liệu thành công',

            ];
            return response()->json($result, 200);
        }
    }
    //Khôi phục dữ liệu
    public function restore($id)
    {
        $post = Post::find($id);
        if ($post == null) {
            $result = [
                'status' => false,
                'post' => null,
                'message' => 'Không tìm thấy dữ liệu ',

            ];
            return response()->json($result, 404);
        }
        $post->updated_at = date('Y-m-d H:i:s');
        $post->updated_by = 1; //tam
        $post->status = 1; //
        if ($post->save()) {
            $result = [
                'status' => true,
                'customer' => $post,
                'message' => 'Khôi phục dữ liệu thành công',

            ];
            return response()->json($result, 200);
        }
    }
    //Thay đổi trạng thái
    public function status($id)
    {
        $post = Post::find($id);
        if ($post == null) {
            $result = [
                'status' => false,
                'post' => null,
                'message' => 'Không cập nhật được trạng thái',

            ];
            return response()->json($result, 404);
        }
        $post->updated_at = date('Y-m-d H:i:s');
        $post->updated_by = 1; //tam
        $post->status = ($post->status == 1) ? 2 : 1; //reactjs
        if ($post->save()) {
            $result = [
                'status' => true,
                'post' => $post,
                'message' => 'Cập nhật trạng thái thành công !',

            ];
            return response()->json($result, 200);
        }

        $result = [
            'status' => false,
            'post' => null,
            'message' => 'Không thể cập nhật trạng thái',

        ];
        return response()->json($result, 200);

    }

    //frontend
    public function lastpostnew($status, $page = 1)
    {
        $posts = Post::where([['status', '!=', 0],['type', '=', 'Post']])
            ->orderBy('created_at', 'desc')
            ->select('id', 'title', 'detail', 'image')
            ->limit(1)
            ->get();
        $total = Post::count();
        $result = [
            'status' => true,
            'posts' => $posts,
            'message' => 'Tải dữ liệu thành công',
            'total' => $total
        ];
        return response()->json($result, 200);
    }

    public function lastpostlikenew($status, $page = 1)
    {
        $posts = Post::where([['status', '!=', 0],['type', '=', 'Post']])
            ->orderBy('created_at', 'asc')
            ->select('id', 'title', 'detail', 'image')
            ->limit(3)
            ->get();
        $total = Post::count();
        $result = [
            'status' => true,
            'posts' => $posts,
            'message' => 'Tải dữ liệu thành công',
            'total' => $total
        ];
        return response()->json($result, 200);
    }

    public function post_all( $limit)
    {
        $posts = Post::where([['status', '!=', 0]])
            ->orderBy('created_at', 'asc')
            ->select('id', 'title', 'detail', 'image','slug')
            ->limit($limit)
            ->get();
        $total = Post::count();
        $result = [
            'status' => true,
            'posts' => $posts,
            'message' => 'Tải dữ liệu thành công',
            'total' => $total
        ];
        return response()->json($result, 200);
    }

    public function showslug($id)
    {
        if(is_numeric($id))
        {
            $post = Post::findOrFail($id);
    
        }
        else
        {
            $post = Post::where('slug',$id)->first();
        }
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'post' => $post],
            200
        );

    }
    public function post_topic($limit, $topic_id)
    {
        $listid = array();
        array_push($listid, $topic_id + 0);
        $args_cat1 = [
            ['sort_order', '=', $topic_id + 0],
            ['status', '=', 1]
        ];
        $list_topic1 = Topic::where($args_cat1)->get();
        if (count($list_topic1) > 0) {
            foreach ($list_topic1 as $row1) {
                array_push($listid, $row1->id);
                $args_cat2 = [
                    ['sort_order', '=', $row1->id],
                    ['status', '=', 1]
                ];
                $list_topic2 = Topic::where($args_cat2)->get();
                if (count($list_topic2) > 0) {
                    foreach ($list_topic2 as $row2) {
                        array_push($listid, $row2->id);
                    }
                }
            }
        }
        $posts = Post::where('status', 1)
            ->whereIn('topic_id', $listid)
            ->orderBy('created_at', 'DESC')
            ->limit($limit)
            ->get();
        return response()->json(
            [
                'success' => true,
                'message' => 'Tải dữ liệu thành công',
                'posts' => $posts
            ],
            200
        );
    }
}
