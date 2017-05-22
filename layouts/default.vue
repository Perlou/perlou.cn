<template>
  <div id="app">
    <div id="app-main">
      <background></background>
      <layout-header></layout-header>

      <!-- main -->
      <main id="main">

        <transition name="module">
            222
        </transition>

        <div class="main-content">
          <nuxt></nuxt>
        </div>

      </main>
      <!-- end main -->

    </div>
  </div>
</template>

<script>
  import {
    Background,
    Header
  } from '~components/layout'

  export default {
    name: 'app',
    components: {
      Background,
      LayoutHeader: Header
    }
  }

</script>

<style lang="scss" scoped>
  @import '~assets/sass/mixins';
  @import '~assets/sass/variables';

  #app {

    #app-aside {
      width: 68%;
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      z-index: 9999;
      background-color: $mobile-aside-bg;
      transform: translateX(-100%);
      transition: $mobile-aisde-transition;

      &.open {
        overflow: hidden;
        transform: translateX(0);
        transition: $mobile-aisde-transition;
        -webkit-overflow-scrolling: touch;
      }
    }

    #app-main {
      transition: $mobile-aisde-transition;

      &.open {
        transition: $mobile-aisde-transition;
        transform: translateX(68%);
      }

      main {
        position: relative;

        .main-content {
          float: left;
          width: 42.5em;
          margin: 0 0 0 12.5em;
          position: relative;
          overflow: hidden;
          @include css3-prefix(transition, width .35s);

          &.full-column {
            width: 62.5em;
            @include css3-prefix(transition, width .35s);
          }

          &.error-column {
            width: 100%;
            margin: 0;
            @include css3-prefix(transition, width .35s);
          }

          &.mobile-layout {
            width: 100%;
            margin: 0;
            padding: 1rem;
            padding-top: $navbar-height + 1;
          }
        }
      }
    }
  }
</style>
