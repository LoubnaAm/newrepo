@extends('layouts.app')

@section('content')
    <div class="container-fluid">
        <!--just for testing-->
        <!-- Page Heading -->
        <div class="card-header d-flex align-items-center border-0">
            <h3 class="w-50 float-left card-title m-0">New Users</h3>
            <div class="dropdown dropleft text-right w-50 float-right">
                <button class="btn btn-secondary" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="material-icons">settings</i>
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <a class="dropdown-item" href="#">Add new user</a>
                    <a class="dropdown-item" href="#">View All users</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
        </div>

    </div>
@endsection
