<template>
  <v-container class="fill-height justify-center">
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-radio-group inline v-model="$i18n.locale">
          <v-radio label="Français" value="fr"></v-radio>
          <v-radio label="English" value="en"></v-radio>
          <v-radio label="العربية" value="ar"></v-radio>
        </v-radio-group>
        <v-sheet elevation="8" rounded class="pa-12">
          <h1 class="text-center">{{ days }}</h1>
          <h3 class="text-center">{{ $t('message.hello') }}</h3>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

const days = ref(0)

const getDelta = () => {
  const startDate = new Date("2025-07-21")
  const today = new Date()
  const diffTime = Math.abs(today - startDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  days.value = diffDays;
}

getDelta();
</script>
