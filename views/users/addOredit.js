<h3>{{viewTitle}}</h3>

<form  method="POST" autocomplete="off">
    <input type="hidden" name="_id" value="{{Users._id}}">
    <div class="form-group">
        <label>Full Name</label>
        <input type="text" class="form-control" name="fullName" placeholder="Full Name" value="{{Users.fullName}}">
        <div class="text-danger">
            {{Users.fullNameError}}</div>
    </div>
    <div class="form-group">
        <label>Email</label>
        <input type="text" class="form-control" name="email" placeholder="Email" value="{{Users.email}}">
        <div class="text-danger">
            {{Users.emailError}}</div>
    </div>
    <div class="form-row">
        <div class="form-group col-md-6">
            <label>Mobile</label>
            <input type="text" class="form-control" name="mobile" placeholder="Mobile" value="{{Users.mobile}}">
        </div>
        <div class="form-group col-md-6">
            <label>Pet Name</label>
            <input type="text" class="form-control" name="petname" placeholder="Pet Name" value="{{Users.city}}">
        </div>
    </div>
    <div class="form-group">
        <button type="submit" class="btn btn-info"><i class="fa fa-database"></i> Submit</button>
        <a class="btn btn-secondary" href="/Users/list"><i class="fa fa-list-alt"></i> View All</a>
    </div>
</form>