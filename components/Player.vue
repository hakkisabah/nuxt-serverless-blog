<template>
  <v-sheet rounded="lg">
    <v-responsive rounded="rounded" :aspect-ratio="16 / 9">
      <iframe
        style="border-radius: 5px"
        src="https://open.spotify.com/embed/playlist/4CO4Yogfwreg7MkmIKAhUd?si=5ca69c50e37f4a8f"
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
}
</script>

<style scoped></style>
