<template>
  <div class="hello">
    <h1>{{ count }}</h1>
    <input type="text" v-model="value" />
    <button v-on:click="changeInput">click</button>
    <h2>{{value}}</h2>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      count: 0,
      value: String,
    };
  },
  methods: {
    changeInput: function () {
      this.count++
      console.log(this.value)
    },
  },
};
</script>