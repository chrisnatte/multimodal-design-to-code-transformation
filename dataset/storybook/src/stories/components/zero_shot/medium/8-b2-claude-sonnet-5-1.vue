<template>
  <div class="p-6 bg-white inline-block">
    <div class="flex flex-col justify-between bg-[#e2e8f0] gap-6 p-6 w-60">
      <div class="flex flex-col items-center gap-6 w-full">
        <span class="text-2xl font-normal">Emails</span>
        <div class="flex flex-col gap-4 w-full">
          <Button
            label="Postfach"
            icon="pi pi-inbox"
            severity="secondary"
            variant="outlined"
            class="w-full justify-start"
            @click="onPostfachClick"
          />
          <Button
            label="Ordner"
            icon="pi pi-folder"
            severity="secondary"
            variant="outlined"
            class="w-full justify-start"
            @click="onOrdnerClick"
          />
          <Button
            label="Konto"
            icon="pi pi-user"
            severity="secondary"
            variant="outlined"
            class="w-full justify-start"
            @click="onKontoClick"
          />
        </div>
      </div>

      <div class="flex flex-col items-center w-full">
        <Divider layout="horizontal" type="solid" class="w-full" />
        <div class="flex items-center gap-4 w-full">
          <Avatar :label="userInitial" size="large" shape="circle" style="background-color: #64748b; color: #ffffff" />
          <span class="text-base">{{ userName }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Avatar from 'primevue/avatar';
import Divider from 'primevue/divider';

const userInitial = ref('B');
const userName = ref('Benutzername');

const onPostfachClick = () => {
  // Handle Postfach navigation
};

const onOrdnerClick = () => {
  // Handle Ordner navigation
};

const onKontoClick = () => {
  // Handle Konto navigation
};
</script>