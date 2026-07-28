<template>
  <div class="w-full max-w-md p-4">
    <div class="flex gap-6 border-b border-gray-200">
      <div class="flex items-center gap-2 pb-3 border-b-2 border-emerald-500 text-emerald-500 font-medium cursor-pointer">
        <i class="pi pi-shield"></i>
        <span>Profil & Konto</span>
      </div>
      <div class="flex items-center gap-2 pb-3 text-gray-400 cursor-pointer">
        <i class="pi pi-shield"></i>
        <span>Sicherheit & Präferenzen</span>
      </div>
    </div>

    <div class="mt-6 relative w-fit">
      <Avatar label="P" size="xlarge" class="bg-gray-100 text-gray-600" />
      <Tag value="Edit" severity="success" class="absolute -top-2 left-1/2 -translate-x-1/2 text-xs"></Tag>
    </div>

    <div class="mt-6 flex flex-col gap-2">
      <label for="benutzername" class="text-sm text-gray-700">Benutzername</label>
      <InputText id="benutzername" v-model="benutzername" placeholder="Benutzername eingeben" class="w-full" />
    </div>

    <div class="mt-4 flex flex-col gap-2">
      <Textarea v-model="info" placeholder="Informationen über dich...." rows="4" class="w-full" />
    </div>

    <div class="mt-4 flex items-center gap-2">
      <InputSwitch v-model="oeffentlichSichtbar" />
      <span class="text-sm text-gray-700">Öffentlich sichtbar</span>
    </div>

    <div class="mt-6">
      <Button label="Speichern" severity="success" class="px-4" />
    </div>
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

const benutzername = ref('')
const info = ref('')
const oeffentlichSichtbar = ref(false)
</script>