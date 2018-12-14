<template>
  <div class="carousel e-flex" :style="{width: width + '%'}">
    <div v-for="(item,index) in list" :key="item.name" class="card" :class="{'card--active': index==0}">
      <div class="info-widget">
        <div class="info-details">
          <div class="info-title">20°</div>
          <div class="info-summary">
            <p class="info-summary-text">Mostly Cloudy</p>
          </div>
          <div class="info-ext-info">Precipitation: 20%</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Cards',
    props: ['list'],
    data() {
      return {}
    },
    computed: {
      width() {
        let list = this.list || [];
        return Math.max(100, list.length * 100);
      }
    },
    methods: {},
    created() { },
    mounted() { }
  }
</script>

<style>
  /* card */
  .e-flex {
    display: flex;
  }

  .e-flex--justify-content--space-between {
    justify-content: space-between;
  }

  body {
    color: #FFF;
    background: #3c3e4b;
  }

  .screen-container {
    overflow: hidden;
    margin: 0 auto;
    height: 100%;
    padding: 15px;
  }

  .screen__nav {
    padding-bottom: 20px;
    color: #858894;
  }

  .app-nav {
    color: #858894;
    padding-bottom: 25px;
  }

  .app-nav__trigger {
    padding-top: 5px;
    color: #c3c3cc;
  }

  .app-content__header {
    margin-bottom: 50px;
  }

  .nav-header {
    font-size: 32px;
  }

  .carousel {
    width: auto;
  }

  .card {
    width: 100%;
    height: 175px;
    background: #565965;
    margin: 10px 5px;
    border-radius: 5px;
  }

  .card--active {
    height: 200px;
    margin-top: -5px;
    background: #7e8291;
  }

  /* info */
  .info-widget {
    background: linear-gradient(to bottom right, #3cc0fe 20%, #0066ff);
    width: 100%;
    height: 100%;
    border-radius: 6px;
    box-shadow: 0px 60px 80px -20px rgba(39, 165, 253, 0.4);
    position: relative;
    overflow: hidden;
  }

  .info-details {
    font-family: Roboto, sans-serif;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    margin-left: 30px;
  }

  .info-title {
    color: white;
    font-size: 5em;
    font-weight: 300;
  }

  .info-summary {
    color: #d2e9fa;
    font-size: 1em;
    font-weight: 300;
    width: 260px;
    padding-bottom: 16px;
    border-bottom: 2px solid #9cd0ff;
    margin-left: 8px;
  }

  .info-summary-text {
    margin: 0;
  }

  .info-ext-info {
    color: #d2e9fa;
    font-size: 1em;
    font-weight: 300;
    margin-left: 8px;
    margin-top: 16px;
  }
</style>
