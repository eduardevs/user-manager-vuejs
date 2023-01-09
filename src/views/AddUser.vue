<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3">Add User</p>
        <p>Add an user !</p>
      </div>
    </div>
  </div>
<!-- <pre>{{ user }}</pre> -->
<div class="alert alert-success ml-3" v-if="message">
      {{ message }}
  </div>
  <div class="alert alert-danger ml-3" v-else-if="errorMessage">
    {{ errorMessage }}
  </div>

    <div class="container mt-3">
    <div class="row">
      <div class="col-md-3">
        
        <form @submit.prevent="inputdata()">
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
            <button @click="inputdata" type="submit" class="btn btn-submit btn-success" value="Create" >Add User</button>
          </div>
        </form>
      </div>
    </div>
    <!-- <div class="row mt-3">
      <div class="col">
        <router-link to="/" class="btn btn-success"><i class="fa fa-arrow-alt-circle-left"></i> Back</router-link>
      </div>
    </div> -->
  </div>
  
</template>

<script>
// import { UserService } from '@/services/UserService';
// import axios from "axios"
export default {
  

  name: 'AddUser',
  data : function() {
    return {
      errorMessage: "",
      message: "",
      user : {
        id : '',
        name : '',
        username : '',
        website : '',
        email : '',
        phone : '',
        address : {
          street : '',
          suite: "",
          city: "",
          zipcode: "",
          geo: {
            lat: "",
            lng: ""
          }
        },
        company : {
          name: "",
          catchPhrase: "",
          bs: ""
        }
      },
    }
  },
  emits: ['handledata'],
  created() {
    this.$emit('handledata', this.user)
  },
  methods : {
    submitCreate : async function () {
    
      // axios
      //   .post('https://jsonplaceholder.typicode.com/posts', {
      //       body: JSON.stringify(this.user),
      //   })
      //   .then(response => {
      //       console.log(response)
    
      //       if(response.status === 201) {
      //         this.message = "The user was created succesfully ! ";
      //       } else {
      //         this.errorMessage = "Oops! The user was not created"
      //       }
      //   })
      //   .catch(err => console.error(err));
    },
    inputdata () {
      this.$emit("handledata", this.user )

    }
  }
}
</script>

<style scoped>

</style>
