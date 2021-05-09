<template>
  <v-main class="black darken-2">
    <v-container>
      <v-row>
        <v-col cols="12" sm="12" class="text-center">
          <v-progress-circular
            :dense="$vuetify.breakpoint.smAndDown"
            color="red"
            indeterminate
          ></v-progress-circular>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: 'Firstload',
}
</script>

<style scoped></style>
