<template>
  <LazyTimeline :title-object="titleObject" />
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      titleObject: {
        // its use with mixin props for child components.
        titleTemplate: this.$t('head.titles.home.titleTemplate'),
      },
    }
  },
}
</script>
