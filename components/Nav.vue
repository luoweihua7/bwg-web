<template>
  <div>
    <div>
      <div class="menu-icon" :class="{'menu-icon-activers': isActive}" @click="isActive = !isActive">
        <span></span><span></span><span></span>
      </div>
    </div>
    <div class="menu-links" :class="{'menu-active': isActive}">
      <ul>
        <li>Menu item here!</li>
        <li>Menu item here!</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isActive: false
      }
    },
    methods: {},
    created() { },
    mounted() { }
  }
</script>

<style>
  .menu-icon {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 30px;
    right: auto;
    bottom: auto;
    left: 30px;
    z-index: 3;
    cursor: pointer;
    transition: top .1s ease-in-out;
  }

  .menu-icon span {
    display: block;
    width: 100%;
    height: 5px;
    background: #F1F1F1;
    margin: 0 0 5px 0;
    transition: all .2s ease-in-out;
    position: absolute;
  }

  .menu-icon span:first-child {
    top: 0;
    left: 0;
  }

  .menu-icon span:nth-child(2) {
    top: 10px;
    left: 0;
  }

  .menu-icon span:last-child {
    top: 20px;
    left: 0;
  }

  .menu-icon.menu-icon-active {
    top: 40px;
  }

  .menu-icon.menu-icon-active span:first-child {
    transform: rotate(45deg);
  }

  .menu-icon.menu-icon-active span:nth-child(2) {
    transform: rotate(-45deg);
    top: 0;
  }

  .menu-icon.menu-icon-active span:last-child {
    transform: rotate(45deg);
    top: 0;
  }

  .menu-links {
    background: rgba(0, 0, 0, 0.85);
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: none;
    z-index: 2;
  }

  .menu-active {
    display: block;
  }

  .menu-links ul {
    list-style-type: none;
    padding: 0;
    left: 0;
    width: 250px;
    text-align: center;
    position: absolute;
    top: 50%;
    right: auto;
    bottom: auto;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  }

  .menu-links ul li {
    font-family: 'Slabo 13px', serif;
    color: white;
    font-size: 24px;
    padding: 10px 0;
  }
</style>
