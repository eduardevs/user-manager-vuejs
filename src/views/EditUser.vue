<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3">Edit User</p>
        <p>Edit user !</p>
      </div>
    </div>
  </div>
  <div class="container mt-3">
      <div class="alert alert-success ml-3" v-if="message">
      {{ message }}
  </div>
  <div class="alert alert-danger ml-3" v-else-if="errorMessage">
    {{ errorMessage }}
  </div>

    <div class="row" v-if="user">
      <div class="col-md-3">
        <form @submit.prevent="submitUpdate()">
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
            <input v-model="user.phone" type="text" class="form-control" placeholder="Phone">
          </div>
          <div class="mb-2">
            <input v-model="user.website" type="text" class="form-control" placeholder="Website">
          </div>
          <div class="mb-2 mt-4 mb-4">
            <h5>Address</h5>
           
            <input v-model="user.address.street"  type="text" class="form-control mb-2" placeholder="Rue de JS">
            <input v-model="user.address.suite"  type="text" class="form-control mb-2" placeholder="suite Apt. Vue">
            <input v-model="user.address.city"  type="text" class="form-control mb-2" placeholder="Springfield">
            <input v-model="user.address.zipcode"  type="text" class="form-control mb-2" placeholder="010101">
            <input v-model="user.address.geo.lat"  type="hidden">
            <input v-model="user.address.geo.lng"  type="hidden" >
          </div>
          <div class="mb-2 mt-4 mb-4">
            <h5>Company Info</h5>
            <input v-model="user.company.name"  type="text" class="form-control mb-2" placeholder="Name">
            <input v-model="user.company.catchPhrase"  type="text" class="form-control mb-2" placeholder="Catch phrase">
            <input v-model="user.company.bs"  type="text" class="form-control mb-2" placeholder="bs">
             <!--{ name, catchPhrase, bs } -->
          </div>
          <div class="mb-2">
            <input type="submit" class="btn btn-submit btn-success" value="Update" />
             <!--{ name, catchPhrase, bs } -->
          </div>
        </form>
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
import { UserService } from '@/services/UserService';
// import axios from 'axios';

export default {
  name: 'EditUser',
  data : function() {
    return {
      userId :this.$route.params.userId,
      loading: false,
      user : {},
      errorMessage: "",
      message: ""
    }
  },
  created: async function () {
    try {
      this.loading = true;
      let response = await UserService.getUser(this.userId)
      this.user = response.data;
      if(response.status === 201) {
        this.message = "The user was updated successfully !"
      }
      this.loading = false;
    }
    catch (error) {
      this.errorMessage = error;
      this.loading = false;
    }
  },
  methods : {
    submitUpdate : async function () {
      try {
        let response = await UserService.updateUser(this.user, this.userId);

        if(response) {
          if(response.status === 201 || response.status === 200) {
              this.message = "The user was updated ! ";
            } else {
              console.log(response.status)
              this.errorMessage = "Oops! The user was not updated"
            }
          // return this.$router.push(`/users/edit/${this.userId}`)
        } else {
          // return this.$router.push('/');
        }
      }
        catch (error) {
          console.log(error)
        }
      }
  }
}
</script>

<style scoped>

</style>
