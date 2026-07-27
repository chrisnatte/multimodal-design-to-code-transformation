<template>
  <div class="flex flex-col justify-between items-center gap-6 p-6" style="background-color: rgb(226, 232, 240); width: 240px; height: 512px;">
    <div class="flex flex-col items-center gap-6 w-full">
      <span class="text-2xl">Emails</span>
      <div class="flex flex-col gap-4 w-full">
        <Button
          label="Postfach"
          icon="pi pi-inbox"
          severity="secondary"
          variant="outlined"
          class="w-full"
        />
        <Button
          label="Ordner"
          icon="pi pi-folder"
          severity="secondary"
          variant="outlined"
          class="w-full"
        />
        <Button
          label="Konto"
          icon="pi pi-user"
          severity="secondary"
          variant="outlined"
          class="w-full"
        />
      </div>
    </div>

    <div class="flex flex-col items-center w-full">
      <Divider layout="horizontal" type="solid" />
      <div class="flex items-center gap-4">
        <Avatar :label="avatarLabel" size="large" shape="circle" />
        <span class="text-base">{{ username }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import Avatar from 'primevue/avatar';

const avatarLabel = ref('B');
const username = ref('Benutzername');
</script>