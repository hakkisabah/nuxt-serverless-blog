<template>
  <v-col cols="12" sm="2">
    <Socialcard></Socialcard>
  </v-col>
</template>

<script>
import Socialcard from '~/components/Socialcard'
export default {
  components: {
    Socialcard,
  },
  name: 'DefaultLeft',
}
</script>

<style scoped></style>
