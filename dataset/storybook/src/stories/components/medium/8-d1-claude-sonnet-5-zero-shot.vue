<template>
  <div
    class="flex flex-col justify-between items-center p-6 gap-6 bg-slate-200"
    style="width: 240px; height: 512px;"
  >
    <!-- Top section -->
    <div class="flex flex-col items-center gap-6 w-full">
      <span class="text-2xl">Emails</span>

      <div class="flex flex-col gap-4 w-full">
        <Button
          label="Postfach"
          icon="pi pi-inbox"
          severity="secondary"
          outlined
          class="w-full justify-start"
          :class="{ 'bg-slate-100': activeItem === 'postfach' }"
          @click="activeItem = 'postfach'"
        />
        <Button
          label="Ordner"
          icon="pi pi-folder"
          severity="secondary"
          outlined
          class="w-full justify-start"
          :class="{ 'bg-slate-100': activeItem === 'ordner' }"
          @click="activeItem = 'ordner'"
        />
        <Button
          label="Konto"
          icon="pi pi-user"
          severity="secondary"
          outlined
          class="w-full justify-start"
          :class="{ 'bg-slate-100': activeItem === 'konto' }"
          @click="activeItem = 'konto'"
        />
      </div>
    </div>

    <!-- Bottom section -->
    <div class="flex flex-col items-center w-full">
      <Divider class="w-full" />
      <div class="flex items-center gap-4 w-full px-2">
        <Avatar
          :label="userInitial"
          size="large"
          shape="circle"
          style="background-color: #64748b; color: #fff;"
        />
        <span class="text-base">{{ username }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import Avatar from 'primevue/avatar'

const activeItem = ref('postfach')
const username = ref('Benutzername')
const userInitial = ref('B')
</script>