<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
          <p class="text-success fw-bold">
            User Manager
            <router-link to="/users/add" class="btn btn-success btn-sm"
              ><i class="fa fa-plus-circle"></i> New</router-link
            >
          </p>
          <form>
            <div class="row">
            <div class="col-md-6">
              <input type="text" class="form-control" placeholder="Search Name" />
            </div>
            <div class="col">
              <input type="submit" class="btn btn-outline-dark" value="Search" />
            </div>
            </div>
          </form>
        </div>
      
      </div>
    </div>
  
  
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-6">
        <div class="card my-2 list-group item-success">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col-sm-4">
                <img src="" alt="" class=""/>
              </div>
              <div class="col-sm-7">
                <ul>
                  <li class="list-group-item">Name : <span class="fw-bold">Name</span></li>
                  <li class="list-group-item">Email: <span class="fw-bold">email</span></li>
                  <li class="list-group-item">Mobile : <span class="fw-bold">Mobile</span></li>
                </ul>

              </div>
              <div class="col-sm-1 d-flex flex-column justify-content-center align-items-center">
                <router-link to="/users/view/:userId" class="btn btn-warning my-1">
                  <i class="fa fa-eye"></i>                </router-link>
                  <router-link to="/users/edit/:userId" class="btn btn-primary my-1">
                  <i class="fa fa-pen"></i> 
                </router-link>
                <button class="btn btn-danger my-1">
                  <i class="fa fa-trash"></i> 
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserManager",
};
</script>

<style scoped></style>
