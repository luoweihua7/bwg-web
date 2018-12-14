<template>
  <div class="multi-action">
    <button class="action-button" @click="isActive=!isActive" :class="{active: isActive}">
      <span class="fa fa-plus"></span>
    </button>
    <ul class="actions">
      <!-- <li v-for="item in buttons" @click="$emit(item.event)"><a><span class="fa"></span></a></li> -->


      <li><a><span class="fa fa-google-plus"></span></a></li>
      <li><a><span class="fa fa-facebook"></span></a></li>
      <li><a><span class="fa fa-twitter"></span></a></li>
      <li><a><span class="fa fa-delicious"></span></a></li>
      <li><a><span class="fa fa-reddit"></span></a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Button',
    data() {
      return {
        isActive: false,
        buttons: [
          { name: '添加', icon: 'fa-google-plus', event: 'add' }
        ]
      }
    },
    methods: {},
    created() { },
    mounted() { }
  }
</script>

<style>
  .multi-action {
    display: inline-block;
    position: fixed;
    width: 56px;
    height: 56px;
    margin: 0px 0 10px -28px;
    right: 5%;
    bottom: 2%;
  }

  .action-button {
    position: absolute;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: 0;
    outline: 0;
    background: #f44336;
    font-size: 24px;
    color: white;
    z-index: 2;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.16), 0 2px 5px 0 rgba(0, 0, 0, 0.26);
    transition: all 0.3s;
  }

  .actions {
    position: absolute;
    list-style: none inside none;
    margin: 0 0 0 0;
    padding: 0;
    width: auto;
    float: left;
    background-color: transparent;
    top: 8px;
    left: 8px;
    z-index: 1;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .actions li {
    position: absolute;
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.16), 0 2px 5px 0 rgba(0, 0, 0, 0.26);
    margin: 0;
    background: #212121;
    color: #ffffff;
    transition: all 0.3s;
    -webkit-transform: scale(0.3);
    transform: scale(0.3);
  }

  .actions li:nth-child(1) {
    background: #ff9800;
  }

  .actions li:nth-child(2) {
    background: #2196F3;
  }

  .actions li:nth-child(3) {
    background: #FFEB3B;
  }

  .actions li:nth-child(4) {
    background: #E91E63;
  }

  .actions li:nth-child(5) {
    background: #4CAF50;
  }

  .actions li a {
    background: inherit;
    color: inherit;
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    line-height: 40px;
    text-align: center;
  }

  .actions li:active {
    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19), 0 8px 17px 0 rgba(0, 0, 0, 0.2);
  }

  .action-button.active {
    box-shadow: 0 17px 50px 0 rgba(0, 0, 0, 0.19), 0 12px 15px 0 rgba(0, 0, 0, 0.24);
  }

  .action-button.active~.actions li {
    transition: all 0.3s;
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  .action-button.active~.actions li:nth-child(1) {
    margin-top: -56px;
  }

  .action-button.active~.actions li:nth-child(2) {
    margin-top: -104px;
  }

  .action-button.active~.actions li:nth-child(3) {
    margin-top: -152px;
  }

  .action-button.active~.actions li:nth-child(4) {
    margin-top: -200px;
  }

  .action-button.active~.actions li:nth-child(5) {
    margin-top: -248px;
  }

  .action-button span {
    transition: all 0.3s;
  }

  .action-button.active:not(.no-rotate) span {
    -webkit-transform: scale(1.5) rotate(-45deg);
    transform: scale(1.5) rotate(-45deg);
  }
</style>
