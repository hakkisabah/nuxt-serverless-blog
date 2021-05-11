<template>
  <v-sheet rounded="lg">
    <v-responsive rounded="rounded" :aspect-ratio="16 / 9">
      <iframe
        style="border-radius: 5px"
        :src="getPlayerLink"
        height="100%"
        width="100%"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </v-responsive>
  </v-sheet>
</template>

<script>
export default {
  name: 'Player',
  props: {
    selectedPlaylist: {
      default: 'spotify',
      type: String,
    },
  },
  data() {
    return {
      playlistLinks: require('../mocks/player.json'),
    }
  },
  computed: {
    getPlayerLink() {
      return this.playlistLinks[this.selectedPlaylist]
    },
  },
}
</script>

<style scoped></style>
