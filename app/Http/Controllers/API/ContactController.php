<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    public function post(Request $request)
    {
        Log::debug($request);

        $validator = Validator::make($request->all(), [
                'email' => 'email',
                'body' => 'required'
            ]);

        if($validator->fails()){
            return response()->json(['status' => 'error', 'desc' => 'Validation Error']);
        }

        return response()->json(['status' => 'success', 'desc' => '']);
    }
}
