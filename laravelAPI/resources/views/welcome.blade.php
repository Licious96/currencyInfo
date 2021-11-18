@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Currency</th>
                    <th scope="col">Rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{{$dataArray['query']['base_currency']}}/ZAR</td>
                    <td>{{$dataArray['data']['ZAR']}}</td>
                  </tr>
                  <tr>
                    <td>{{$dataArray['query']['base_currency']}}/BDT</td>
                    <td>{{$dataArray['data']['BDT']}}</td>
                  </tr>
                  <tr>
                    <td>{{$dataArray['query']['base_currency']}}/PKR</td>
                    <td>{{$dataArray['data']['PKR']}}</td>
                  </tr>
                  <tr>
                    <td>{{$dataArray['query']['base_currency']}}/INR</td>
                    <td>{{$dataArray['data']['INR']}}</td>
                  </tr>
                </tbody>
                <tr>
                    <td><a href="/" class="btn btn-primary"><i class="bi bi-arrow-counterclockwise"></i> refresh</a></td>
                </tr>
              </table>
        </div>
    </div>
</div>
@endsection
