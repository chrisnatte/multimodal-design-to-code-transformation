<template>
  <div class="p-6 max-w-xl">
    <div class="flex gap-6 border-b border-gray-200 pb-3 mb-6">
      <div class="flex items-center gap-2 text-emerald-500 font-medium border-b-2 border-emerald-500 pb-2">
        <i class="pi pi-user-edit"></i>
        <span>Profil & Konto</span>
      </div>
      <div class="flex items-center gap-2 text-gray-500 pb-2">
        <i class="pi pi-shield"></i>
        <span>Sicherheit & Präferenzen</span>
      </div>
    </div>

    <div class="relative w-16 h-16 mb-6">
      <Avatar label="P" size="large" class="w-16 h-16 !text-2xl !bg-gray-100 !text-gray-600" shape="square" />
      <Tag value="Edit" severity="success" class="absolute -top-2 left-8 !text-xs !py-0.5 !px-2"></Tag>
    </div>

    <div class="flex flex-col gap-2 mb-4">
      <label for="username" class="text-sm text-gray-700">Benutzername</label>
      <InputText id="username" v-model="username" placeholder="Benutzername eingeben" class="w-full" />
    </div>

    <div class="flex flex-col gap-2 mb-4">
      <Textarea v-model="about" placeholder="Informationen über dich...." rows="4" class="w-full" />
    </div>

    <div class="flex items-center gap-2 mb-6">
      <InputSwitch v-model="publicVisible" />
      <span class="text-sm text-gray-700">Öffentlich sichtbar</span>
    </div>

    <Button label="Speichern" severity="success" class="!bg-emerald-500 !border-emerald-500" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Tag from 'primevue/tag'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import InputSwitch from 'primevue/inputswitch'
import Button from 'primevue/button'

const username = ref('')
const about = ref('')
const publicVisible = ref(false)
</script>