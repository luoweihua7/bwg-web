<template>
  <div class="screen-container">
    <div class="app-nav e-flex e-flex--justify-content--space-between">
      <div class="app-nav__menu-trigger">
        <span class="large material-icons app-nav__trigger">menu</span>
      </div>
    </div>
    <div class="app-content">
      <AppHeader></AppHeader>
      <AppCards :list="list"></AppCards>
      <AppItems></AppItems>
      <AppButtons></AppButtons>
      <footer>
        <p>Copyright <a href="http://www.v2rome.com">&copy; Larify</a></p>
      </footer>
    </div>
  </div>
</template>
<script>
  import '~/assets/css/reset.min.css'

  import AppHeader from '~/components/Header.vue'
  import AppCards from '~/components/Cards.vue'
  import AppItems from '~/components/Items.vue'
  import AppButtons from '~/components/Buttons.vue'

  export default {
    data() {
      return {
        list: [1, 2, 3, 4]
      }
    },
    components: {
      AppHeader,
      AppCards,
      AppItems,
      AppButtons
    }
  }
</script>

<style>
  footer {
    display: block;
    text-align: center;
    margin: 10px auto;
    color: #a6a9b0;
    font-size: 10px;
  }

  footer a,
  footer a:link {
    color: #a6a9b0;
    text-decoration: none;
  }
</style>
