<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3">Add User</p>
        <p>Add an user !</p>
      </div>
    </div>
  </div>
<pre>{{ user }}</pre>
    <div class="container mt-3">
    <div class="row">
      <div class="col-md-3">
        <form>
          <div class="mb-2">
            <input v-model="user.name" type="text" class="form-control" placeholder="Name">
          </div>
          <div class="mb-2">
            <input v-model="user.username" type="text" class="form-control" placeholder="Username">
          </div>
          <div class="mb-2">
            <input v-model="user.email" type="text" class="form-control" placeholder="Email">
          </div>
          <div class="mb-2">
            <!-- <input v-model="user.address" type="text" class="form-control" placeholder="Address"> -->
            <!--{ street, suite, city, zipcode, { geo } } -->
          </div>
          <div class="mb-2">
            <input v-model="user.phone" type="text" class="form-control" placeholder="Phone">
          </div>
          <div class="mb-2">
            <input v-model="user.website" type="text" class="form-control" placeholder="Website">
          </div>
          <div class="mb-2">
            <!-- <input type="text" class="form-control" placeholder="Company"> -->
             <!--{ name, catchPhrase, bs } -->
          </div>
          <div class="mb-2">
            <input type="submit" class="btn btn-submit btn-success" value="Create" />
             <!--{ name, catchPhrase, bs } -->
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddUser',
  data : function() {
    return {
      user : {
        name : '',
        username : '',
        website : '',
        email : '',
        phone : '',
      }
    }
  }
}
</script>

<style scoped>

</style>
