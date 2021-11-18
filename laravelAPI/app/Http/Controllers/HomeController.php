<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class HomeController extends Controller
{
    public function index()
    {
        $response = Http::get('https://freecurrencyapi.net/api/v2/latest?apikey=9f61fe30-4719-11ec-8480-653332305f67');
        $data = $response->json();
        return view('welcome', ['dataArray' => $data]);
    }

    public function rates()
    {
        $response = Http::get('https://freecurrencyapi.net/api/v2/latest?apikey=9f61fe30-4719-11ec-8480-653332305f67');
        return $response->json();
        
    }
}
