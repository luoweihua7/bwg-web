<template>
  <div class="button-container" :class="{'button-active': isActive}">
    <div class="hamburger" @click="isActive=!isActive">
      <div class="dots">
        <span class="first"></span>
        <span class="second"></span>
        <span class="third"></span>
      </div>
    </div>
    <div class="action-items-bar">
      <div class="action-items">
        <span class="first-item">
          <i class="material-icons">
            favorite
          </i>
        </span>
        <span class="second-item">
          <i class="material-icons">
            chat
          </i>
        </span>
        <span class="third-item">
          <i class="material-icons">
            get-app
          </i>
        </span>
        <span class="fourth-item">
          <i class="material-icons">
            share
          </i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isActive: false
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Pacifico|Roboto:300');

  .material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 32px;
    /* Preferred icon size */
    display: inline-block;
    color: #fff;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;
    /* Support for all WebKit browsers. */
    -webkit-font-smoothing: antialiased;
    /* Support for Safari and Chrome. */
    text-rendering: optimizeLegibility;
    /* Support for Firefox. */
    -moz-osx-font-smoothing: grayscale;
    /* Support for IE. */
    font-feature-settings: 'liga';
  }

  .button-container {
    position: fixed;
    left: 0;
    bottom: 0;
    margin: 0 auto;
    width: 100%;
    height: 80px;
  }

  .hamburger {
    position: absolute;
    top: 0%;
    left: 50%;
    margin-left: -30px;
    width: 60px;
    height: 60px;
    background-color: #E84F3E;
    border-radius: 100%;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);
    z-index: 10;
    cursor: pointer;
  }

  .dots span {
    position: absolute;
    top: 45%;
    width: 8px;
    height: 8px;
    border-radius: 8px;
    background: #fff;
    z-index: 20;
    transition: all .3s ease-in-out;
  }

  .first {
    margin-left: 0.65em;
  }

  .second {
    margin-left: 1.65em;
  }

  .third {
    margin-left: 2.6em;
  }

  .action-items-bar {
    position: absolute;
    top: 10%;
    left: 5%;
    width: 90%;
    height: 40px;
    background-color: #E84F3E;
    border-radius: 60px;
    box-shadow: 0px 5px 20px #F19181;
    z-index: 5;
    /* animation-name: expand-the-bar;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  */
    transform: scaleX(0);
    transition: all .3s ease-in-out;
  }

  .action-items span {
    position: absolute;
    top: 25%;
    width: 20px;
    padding-left: 35px;
    opacity: 0;
    transition: all .2s ease-in-out;
    cursor: pointer;
  }

  .first-item {
    left: 0%;
  }

  .second-item {
    left: 15%;
  }

  .third-item {
    left: 55%;
  }

  .fourth-item {
    left: 70%;
  }

  /* active */
  .button-active .hamburger .dots .first {
    top: 16px;
    height: 42px;
    transform-origin: top;
    transform: rotate(-45deg);
    transition: all .3s ease-in-out;
  }

  .button-active .hamburger .dots .third {
    top: 16px;
    height: 42px;
    transform-origin: top;
    transform: rotate(45deg);
    transition: all .3s ease-in-out;
  }

  .button-active .action-items-bar {
    transform: scaleX(1);
  }

  .button-active .action-items-bar .action-items .first-item {
    opacity: 1;
    transition-delay: .45s;
  }

  .button-active .action-items-bar .action-items .second-item {
    opacity: 1;
    transition-delay: .40s;
  }

  .button-active .action-items-bar .action-items .third-item {
    opacity: 1;
    transition-delay: .40s;
  }

  .button-active .action-items-bar .action-items .fourth-item {
    opacity: 1;
    transition-delay: .45s;
  }
</style>
