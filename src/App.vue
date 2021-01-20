<template>
  <v-app>
    <div class="row">
      <v-app-bar class="col-lg-12 col-md-12">
      <!-- <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon> -->
      <div class="contatiner">
        <v-toolbar-title>Payments Profiles</v-toolbar-title>
      </div>
    </v-app-bar>
    </div>
    <v-main>
      <div class="container">
        <Home/>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Home from './components/Home.vue';
export default {
  name: 'App',

  components: {
    Home
  },

  data: () => ({
    //
  }),
};
</script>
