<template>
  <div class="p-6 bg-white inline-block">
    <div class="flex flex-col justify-between items-center gap-6 p-6 bg-[#e2e8f0] w-60">
      <div class="flex flex-col items-center gap-6 w-full">
        <h2 class="text-2xl font-normal m-0">Emails</h2>
        <div class="flex flex-col gap-4 w-full">
          <Button
            label="Postfach"
            icon="pi pi-inbox"
            severity="secondary"
            variant="outlined"
            class="w-full justify-start bg-[#f1f5f9]"
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
        <Divider layout="horizontal" type="solid" />
        <div class="flex items-center gap-4 w-full px-2">
          <Avatar label="B" size="large" shape="circle" style="background-color: #64748b; color: #ffffff" />
          <span class="text-base">{{ username }}</span>
        </div>
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
</script>