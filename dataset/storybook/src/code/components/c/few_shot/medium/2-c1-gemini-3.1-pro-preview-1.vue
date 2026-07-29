<template>
  <div class="flex flex-col gap-6 p-6 max-w-2xl">
    <TabMenu :model="items" />

    <div class="flex flex-col gap-6 mt-4">
      <div class="relative inline-block w-fit">
        <Avatar label="P" size="xlarge" shape="square" class="w-16 h-16 text-2xl bg-slate-200 text-slate-700 rounded-lg" />
        <Badge value="Edit" severity="success" class="absolute -top-2 -right-4" />
      </div>

      <div class="flex flex-col gap-2 max-w-md">
        <label for="username" class="text-slate-700">Benutzername</label>
        <InputText id="username" v-model="username" placeholder="Benutzername eingeben" class="w-full bg-slate-50" />
      </div>

      <div class="flex flex-col gap-2 max-w-md">
        <Textarea v-model="bio" placeholder="Informationen über dich...." rows="5" class="w-full bg-slate-50" />
      </div>

      <div class="flex items-center gap-3">
        <ToggleSwitch v-model="isPublic" inputId="public-switch" />
        <label for="public-switch" class="text-slate-700">Öffentlich sichtbar</label>
      </div>

      <div>
        <Button label="Speichern" severity="success" class="bg-emerald-400 border-emerald-400 hover:bg-emerald-500 hover:border-emerald-500" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TabMenu from 'primevue/tabmenu'
import Avatar from 'primevue/avatar'
import Badge from 'primevue/badge'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import ToggleSwitch from 'primevue/toggleswitch'
import Button from 'primevue/button'

const items = ref([
  { label: 'Profil & Konto', icon: 'pi pi-user-edit' },
  { label: 'Sicherheit & Präferenzen', icon: 'pi pi-shield' }
])

const username = ref('')
const bio = ref('')
const isPublic = ref(false)
</script>