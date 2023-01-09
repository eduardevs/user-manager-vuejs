<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3">Add User</p>
        <p>Add an user !</p>
      </div>
    </div>
  </div>

    <div class="container mt-3">
    <div class="row">
      <div class="col-md-3">
        <form>
          <div class="mb-2">
            <input type="text" class="form-control" placeholder="Name">
          </div>
          <div class="mb-2">
            <input type="text" class="form-control" placeholder="Username">
          </div>
          <div class="mb-2">
            <input type="text" class="form-control" placeholder="Email">
          </div>
          <div class="mb-2">
            <input type="text" class="form-control" placeholder="Address">
            <!--{ street, suite, city, zipcode, { geo } } -->
          </div>
          <div class="mb-2">
            <input type="text" class="form-control" placeholder="Phone">
          </div>
          <div class="mb-2">
            <input type="text" class="form-control" placeholder="Website">
          </div>
          <div class="mb-2">
            <input type="text" class="form-control" placeholder="Company">
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
 
}
</script>

<style scoped>

</style>
