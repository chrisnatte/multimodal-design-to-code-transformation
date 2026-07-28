<template>
  <main class="min-h-[498px] w-full bg-white px-6 pt-6 text-slate-700">
    <Tabs v-model:value="activeTab" class="w-full max-w-[512px]">
      <TabList>
        <Tab value="profile">
          <i class="pi pi-user-edit mr-2 text-sm"></i>
          <span>Profil &amp; Konto</span>
        </Tab>
        <Tab value="security">
          <i class="pi pi-shield mr-2 text-sm"></i>
          <span>Sicherheit &amp; Präferenzen</span>
        </Tab>
      </TabList>
    </Tabs>

    <section class="ml-4 mt-6 flex flex-col items-start">
      <div class="relative">
        <Avatar label="P" shape="square" class="h-14 w-14 !bg-slate-200 !text-2xl !text-slate-600" />
        <Button
          label="Edit"
          severity="success"
          size="small"
          class="absolute -right-6 -top-3 !h-6 !px-2 !text-xs"
        />
      </div>

      <div class="mt-5 flex w-64 flex-col">
        <label for="username" class="mb-2 text-sm">Benutzername</label>
        <InputText
          id="username"
          v-model="username"
          placeholder="Benutzername eingeben"
          size="small"
          class="w-full"
        />
      </div>

      <Textarea
        v-model="about"
        placeholder="Informationen über dich...."
        rows="4"
        class="mt-5 h-[100px] w-64 resize-none"
      />

      <div class="mt-5 flex items-center gap-3">
        <ToggleSwitch v-model="isPublic" />
        <label for="visibility" class="text-sm">Öffentlich sichtbar</label>
      </div>

      <Button label="Speichern" severity="success" size="small" class="mt-5" />
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Tabs from 'primevue/tabs'
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import Textarea from 'primevue/textarea'
import ToggleSwitch from 'primevue/toggleswitch'

const activeTab = ref('profile')
const username = ref('')
const about = ref('')
const isPublic = ref(false)
</script>