<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\TodoItem;

class TodoController extends Controller
{
    public function index()
    {
        $items = TodoItem::get();
        return view("index", ["items" => $items]);
    }

    public function add(Request $request)
    {
        $validator = Validator::make($request->all(), 
        [
            'title' => 'required',
            'body' => 'required',
            'date' => 'required',
        ]);

        if (!$validator->fails())
        {
            $item = new TodoItem();

            $item->title = $request->title;
            $item->body = $request->body;
            $item->date = $request->date;

            $item->save();
        }
        return response()->json(["title" => $item->title, "body" => $item->body, "date" => $item->date]);
    }

    public function delete(Request $request)
    {
        TodoItem::destroy($request->id);
        return response()->json(["id" => $request->id]);
    }
}
