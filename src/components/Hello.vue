<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <button id="change-message" @click="changeMessage">Change message</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  methods: {
    changeMessage() {
      this.msg = 'new message';
    },
  },
};
</script>
