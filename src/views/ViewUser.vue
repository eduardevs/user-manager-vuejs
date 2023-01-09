<template>
    <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3">View User</p>
        <p>View user !</p>
      </div>
    </div>
  </div>

  <div class="container" v-if="!loading">
    <div class="row">
      <div class="col-md-4">
        <img src="" alt=""/>
      </div>
      <div class="col-md-6">
        <ul class="list-group">
          <li class="list-group-item">Name : <span class="fw-bold">{{ user.name }}</span></li>
          <li class="list-group-item">Username : <span class="fw-bold">{{ user.username }}</span></li>
                  <li class="list-group-item">Email: <span class="fw-bold">{{ user.email }}</span></li>
                  <li class="list-group-item">Phone number : <span class="fw-bold">{{ user.phone }}</span></li>
                  <li class="list-group-item">Website : <span class="fw-bold">{{ user.website }}</span></li>
                  <li class="list-group-item">Street : <span class="fw-bold">{{ user.address.street }}</span></li>
                  <li class="list-group-item">Suite: <span class="fw-bold">{{ user.address.suite }}</span></li>
                  <li class="list-group-item">City: <span class="fw-bold">{{ user.address.city }}</span></li>
                  <li class="list-group-item">ZIPCODE : <span class="fw-bold">{{ user.address.zipcode }}</span></li>
                  <li class="list-group-item">Company Name : <span class="fw-bold">{{ user.company.name }}</span></li>
                  <li class="list-group-item">catch phrase : <span class="fw-bold">{{ user.company.catchPhrase }}</span></li>
                  <li class="list-group-item">bs : <span class="fw-bold">{{ user.company.bs }}</span></li>
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
import { UserService } from '@/services/UserService';

export default {
  methods: {
  },
  props: {
  },
  name: 'ViewUser',
  data : function() {
    return {
      userId : this.$route.params.userId,
      loading: false,
      user: {},
      errorMessage : null
    }
  },
  created: async function () {
    try {
      this.loading = true;
      let response = await UserService.getUser(this.userId);
      this.user = response.data;
      this.loading = false;
    }
    catch (error) {
      this.errorMessage = error;
      this.loading = false;
    }
  }
}
</script>

<style scoped>

</style>
