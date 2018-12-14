<template>
  <div class="app-content__header e-flex e-flex--justify-content--space-between">
    <div class="app-content__header__title">
      <h1 class="nav-header">{{title}}</h1>
    </div>
    <div class="app-content__header__action">
      <span class="large material-icons">add</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    props: ['title'],
    data() {
      return {}
    },
    methods: {},
    created() { },
    mounted() { }
  }
</script>