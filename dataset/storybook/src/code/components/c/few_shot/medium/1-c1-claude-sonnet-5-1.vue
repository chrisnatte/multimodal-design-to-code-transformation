<template>
  <Card
    :pt="{
      root: 'w-md overflow-hidden',
      body: 'flex flex-col gap-4 !p-6',
      content: 'flex flex-col gap-4',
      footer: '!p-0 flex gap-2',
    }"
  >
    <template #header>
      <div
        class="relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br from-black via-emerald-950 to-black"
      >
        <div
          class="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-emerald-700 via-emerald-900 to-black shadow-inner"
        >
          <i class="pi pi-box text-5xl text-emerald-300"></i>
        </div>
        <div
          class="absolute -right-6 -bottom-10 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-emerald-700 via-emerald-900 to-black"
        >
          <i class="pi pi-box text-3xl text-emerald-300"></i>
        </div>
      </div>
    </template>
    <template #title>Anmelden</template>
    <template #subtitle>Melde dich mit deiner E-Mail-Adresse und Passwort an.</template>
    <template #content>
      <div class="flex flex-col gap-2">
        <label for="email-input" class="text-sm">E-Mail-Adresse</label>
        <InputText v-model="email" type="email" input-id="email-input" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="password-input" class="text-sm">Passwort</label>
        <Password v-model="password" input-id="password-input" toggle-mask :feedback="false" input-class="w-full" />
      </div>
      <div class="flex items-center gap-2">
        <Checkbox v-model="stayLoggedIn" input-id="stay-logged-in" binary />
        <label for="stay-logged-in" class="text-sm">Angemeldet bleiben</label>
      </div>
    </template>
    <template #footer>
      <Button label="Save" severity="secondary" />
      <Button label="Anmelden" icon="pi pi-lock" severity="primary" />
    </template>
  </Card>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Card from 'primevue/card'
  import Button from 'primevue/button'
  import Password from 'primevue/password'
  import InputText from 'primevue/inputtext'
  import Checkbox from 'primevue/checkbox'

  const email = ref('')
  const password = ref('')
  const stayLoggedIn = ref(false)
</script>