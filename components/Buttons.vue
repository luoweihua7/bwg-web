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
            1
          </i>
        </span>
        <span class="second-item">
          <i class="material-icons">
            2
          </i>
        </span>
        <span class="third-item">
          <i class="material-icons">
            3
          </i>
        </span>
        <span class="fourth-item">
          <i class="material-icons">
            4
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
  /* cyrillic */
  @font-face {
    font-family: 'Pacifico';
    font-style: normal;
    font-weight: 400;
    src: local('Pacifico Regular'), local('Pacifico-Regular'), url(https://fonts.gstatic.com/s/pacifico/v13/FwZY7-Qmy14u9lezJ-6D6MmBp0u-zK4.woff2) format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }

  /* vietnamese */
  @font-face {
    font-family: 'Pacifico';
    font-style: normal;
    font-weight: 400;
    src: local('Pacifico Regular'), local('Pacifico-Regular'), url(https://fonts.gstatic.com/s/pacifico/v13/FwZY7-Qmy14u9lezJ-6I6MmBp0u-zK4.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
  }

  /* latin-ext */
  @font-face {
    font-family: 'Pacifico';
    font-style: normal;
    font-weight: 400;
    src: local('Pacifico Regular'), local('Pacifico-Regular'), url(https://fonts.gstatic.com/s/pacifico/v13/FwZY7-Qmy14u9lezJ-6J6MmBp0u-zK4.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }

  /* latin */
  @font-face {
    font-family: 'Pacifico';
    font-style: normal;
    font-weight: 400;
    src: local('Pacifico Regular'), local('Pacifico-Regular'), url(https://fonts.gstatic.com/s/pacifico/v13/FwZY7-Qmy14u9lezJ-6H6MmBp0u-.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  /* cyrillic-ext */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    src: local('Roboto Light'), local('Roboto-Light'), local('sans-serif-light'), url(https://fonts.gstatic.com/s/roboto/v19/KFOlCnqEu92Fr1MmSU5fCRc4AMP6lbBP.woff2) format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
  }

  /* cyrillic */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    src: local('Roboto Light'), local('Roboto-Light'), local('sans-serif-light'), url(https://fonts.gstatic.com/s/roboto/v19/KFOlCnqEu92Fr1MmSU5fABc4AMP6lbBP.woff2) format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }

  /* greek-ext */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    src: local('Roboto Light'), local('Roboto-Light'), local('sans-serif-light'), url(https://fonts.gstatic.com/s/roboto/v19/KFOlCnqEu92Fr1MmSU5fCBc4AMP6lbBP.woff2) format('woff2');
    unicode-range: U+1F00-1FFF;
  }

  /* greek */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    src: local('Roboto Light'), local('Roboto-Light'), local('sans-serif-light'), url(https://fonts.gstatic.com/s/roboto/v19/KFOlCnqEu92Fr1MmSU5fBxc4AMP6lbBP.woff2) format('woff2');
    unicode-range: U+0370-03FF;
  }

  /* vietnamese */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    src: local('Roboto Light'), local('Roboto-Light'), local('sans-serif-light'), url(https://fonts.gstatic.com/s/roboto/v19/KFOlCnqEu92Fr1MmSU5fCxc4AMP6lbBP.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
  }

  /* latin-ext */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    src: local('Roboto Light'), local('Roboto-Light'), local('sans-serif-light'), url(https://fonts.gstatic.com/s/roboto/v19/KFOlCnqEu92Fr1MmSU5fChc4AMP6lbBP.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }

  /* latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    src: local('Roboto Light'), local('Roboto-Light'), local('sans-serif-light'), url(https://fonts.gstatic.com/s/roboto/v19/KFOlCnqEu92Fr1MmSU5fBBc4AMP6lQ.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

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
    top: 15px;
    height: 44px;
    transform-origin: top;
    transform: rotate(-45deg);
    transition: all .3s ease-in-out;
  }

  .button-active .hamburger .dots .third {
    top: 15px;
    height: 44px;
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