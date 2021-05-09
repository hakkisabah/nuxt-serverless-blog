<template>
  <v-col cols="12" sm="2">
    <Player></Player>
  </v-col>
</template>

<script>
import Player from '~/components/Player'
export default {
  components: {
    Player,
  },
  name: 'DefaultRight',
}
</script>

<style scoped></style>
