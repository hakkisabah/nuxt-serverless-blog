<template>
  <v-col cols="12" sm="2">
    <Player></Player>
  </v-col>
</template>

<script>
import Player from '~/components/Player'
export default {
  name: 'DefaultLeft',
  components: {
    Player,
  },
}
</script>

<style scoped></style>
