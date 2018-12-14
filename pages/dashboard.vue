<template>
  <div class="screen-container">
    <div class="app-nav e-flex e-flex--justify-content--space-between">
      <div class="app-nav__menu-trigger">
        <AppNav></AppNav>
      </div>
    </div>
    <div class="app-content">
      <AppHeader></AppHeader>
      <AppCards :list="list"></AppCards>
      <AppItems :items="items"></AppItems>
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
  import AppNav from '~/components/Nav.vue'
  import AppCards from '~/components/Cards.vue'
  import AppItems from '~/components/Items.vue'
  import AppButtons from '~/components/Buttons.vue'

  export default {
    data() {
      return {
        list: [1, 2, 3, 4],
        items: [
          { name: 'xxx1', progress: 10, used: '100M', total: '1G' },
          { name: 'xxx2', progress: 10, used: '100M', total: '1G' },
          { name: 'xxx3', progress: 10, used: '100M', total: '1G' },
          { name: 'xxx4', progress: 10, used: '100M', total: '1G' },
          { name: 'xxx5', progress: 10, used: '100M', total: '1G' },
          { name: 'xxx6', progress: 10, used: '100M', total: '1G' },
          { name: 'xxx7', progress: 10, used: '100M', total: '1G' },
          { name: 'xxx8', progress: 10, used: '100M', total: '1G' },
          { name: 'xxx9', progress: 10, used: '100M', total: '1G' },
          { name: 'xxx10', progress: 10, used: '100M', total: '1G' }
        ]
      }
    },
    components: {
      AppHeader,
      AppNav,
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
