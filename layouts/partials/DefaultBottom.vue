<template>
  <v-footer padless>
    <v-card flat tile class="lighten-1 col-md-12 text-center pt-0">
      <v-divider></v-divider>

      <v-card-text>
        {{ new Date().getFullYear() }} —
        <strong
          ><a href="https://github.com/hakkisabah/nuxt-serverless-blog"
            >Nuxt Serverless</a
          ></strong
        >
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  name: 'DefaultBottom',
}
</script>
