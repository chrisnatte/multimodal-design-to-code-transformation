<template>
  <div
    class="flex flex-col justify-between p-6 gap-6"
    style="background-color: #e2e8f0; width: 240px; height: 512px;"
  >
    <div class="flex flex-col items-center gap-6 w-full">
      <span class="text-2xl font-normal">Emails</span>

      <div class="flex flex-col gap-4 w-full">
        <Button
          label="Postfach"
          icon="pi pi-inbox"
          severity="secondary"
          variant="outlined"
          class="w-full justify-start"
          style="background-color: #f1f5f9;"
        />
        <Button
          label="Ordner"
          icon="pi pi-folder"
          severity="secondary"
          variant="outlined"
          class="w-full justify-start"
        />
        <Button
          label="Konto"
          icon="pi pi-user"
          severity="secondary"
          variant="outlined"
          class="w-full justify-start"
        />
      </div>
    </div>

    <div class="flex flex-col items-center w-full">
      <Divider />
      <div class="flex items-center gap-4 w-full px-2">
        <Avatar :label="userInitial" size="large" shape="circle" style="background-color: #64748b; color: #fff;" />
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

const username = ref('Benutzername');
const userInitial = ref('B');
</script>