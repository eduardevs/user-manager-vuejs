<template>
    <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3">View User</p>
        <p>View user !</p>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <img src="" alt=""/>
      </div>
      <div class="col-md-6">
        <ul class="list-group">
                  <li class="list-group-item">Name : <span class="fw-bold">Name</span></li>
                  <li class="list-group-item">Email: <span class="fw-bold">email</span></li>
                  <li class="list-group-item">Mobile : <span class="fw-bold">Mobile</span></li>
                  <li class="list-group-item">Website : <span class="fw-bold">Name</span></li>
                
                </ul>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <router-link to="/" class="btn btn-success"><i class="fa fa-arrow-alt-circle-left"></i> Back</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
  },
  props: {
  },
  name: 'ViewUser',
 
}
</script>

<style scoped>

</style>
