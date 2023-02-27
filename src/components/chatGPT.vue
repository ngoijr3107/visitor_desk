<template>
    <form>
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name">
      
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email">
      
      <button @click.prevent="submit">Next</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: ''
      };
    },
    methods: {
      submit() {
        this.$router.push('/next-page', { name: this.name, email: this.email });
      }
    }
  };
  </script>



<template>
    <div>
      <p>Name: {{ $route.params.name }}</p>
      <p>Email: {{ $route.params.email }}</p>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      console.log(this.$route.params); // { name: '...', email: '...' }
    }
  };
  </script>
  