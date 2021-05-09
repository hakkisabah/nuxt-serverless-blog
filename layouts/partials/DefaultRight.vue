<template>
  <v-col cols="12" sm="2">
    <Socialcard></Socialcard>
  </v-col>
</template>

<script>
import Socialcard from '~/components/Socialcard'
export default {
  name: 'DefaultLeft',
  components: {
    Socialcard,
  },
}
</script>

<style scoped></style>
