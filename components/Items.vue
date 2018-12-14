<template>
  <div class="client-wrapper">
    <section class="client" v-for="item in infos" :key="item.name">
      <h1 class="client__name">{{item.name}}</h1>
      <div class="progress-bar">
        <div class="progress-bar__mask" :style="{width: item.progress + '%'}"></div>
      </div>
      <div class="progress">
        <div class="progress__used">{{item.used}}</div>
        <div class="progress__remaining">{{item.total}}</div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'Items',
    props: ['infos'],
    data() {
      return {}
    },
    methods: {},
    created() { },
    mounted() { }
  }
</script>

<style>
  .client-wrapper {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 20px;
    padding: 1rem 0.2rem;
  }

  .client-wrapper>* {
    font-size: 65%;
    grid-column: auto / span 12;
  }

  @media (min-width: 600px) {
    .client-wrapper>* {
      grid-column: auto / span 6;
    }
  }

  @media (min-width: 800px) {
    .client-wrapper>* {
      grid-column: auto / span 4;
    }
  }

  @media (min-width: 1000px) {
    .client-wrapper>* {
      grid-column: auto / span 3;
    }
  }

  .client {
    padding: 1.5rem 1.5rem;
    border-radius: 0.5rem;
    background: #ffffff;
    background: linear-gradient(to bottom right, #f9f9f9, #e2e7ed);
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.125);
  }

  .client:hover {
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.25);
  }

  .client__name {
    font-weight: 300;
    font-size: 1rem;
    margin-bottom: 1rem;
    color: #666666;
  }

  .progress-bar {
    display: flex;
    position: relative;
    flex-grow: 1;
    border-radius: 0.4rem;
    background: linear-gradient(to right, #fa83cf, #ef44b1, #4631e4);
    height: 0.4rem;
    margin-bottom: 1rem;
  }

  .progress-bar__mask {
    background: #23294c;
    width: 100%;
    height: 100%;
    margin-left: auto;
    border-top-right-radius: 0.4rem;
    border-bottom-right-radius: 0.4rem;
    transition: width 1s ease-in-out;
  }

  .progress {
    display: flex;
  }

  .progress__used {
    color: #9b97ba;
    font-weight: 400;
    font-size: 1.1rem;
  }

  .progress__remaining {
    color: #9b97ba;
    margin-left: auto;
    font-weight: 400;
    font-size: 1.1rem;
  }
</style>
