<template>
  <Card
    :pt="{
      root: 'w-lg overflow-hidden',
      header: '!m-0',
      body: '!gap-4',
    }"
  >
    <template #header>
      <div
        class="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950"
      >
        <div
          class="absolute -bottom-10 right-0 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-emerald-600 to-emerald-900 shadow-lg"
        >
          <i class="pi pi-box text-3xl text-emerald-300" />
        </div>
        <div
          class="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-900 shadow-xl"
        >
          <i class="pi pi-box text-4xl text-emerald-200" />
        </div>
      </div>
    </template>
    <template #title>
      <span class="text-lg font-medium">Anmelden</span>
    </template>
    <template #subtitle>
      <span class="text-sm">Melde dich mit deiner E-Mail-Adresse und Passwort an.</span>
    </template>
    <template #content>
      <div class="flex flex-col gap-1.5">
        <label for="email-input" class="text-sm">E-Mail-Adresse</label>
        <InputText v-model="email" type="email" input-id="email-input" class="w-full" />
      </div>
      <div class="flex flex-col gap-1.5">
        <label for="password-input" class="text-sm">Passwort</label>
        <Password
          v-model="password"
          input-id="password-input"
          toggle-mask
          :feedback="false"
          input-class="w-full"
          class="w-full"
        />
      </div>
      <div class="flex items-center gap-2">
        <Checkbox v-model="staySignedIn" input-id="stay-signed-in" binary />
        <label for="stay-signed-in" class="text-sm">Angemeldet bleiben</label>
      </div>
    </template>
    <template #footer>
      <div class="flex justify-end gap-2">
        <Button label="Save" severity="secondary" rounded />
        <Button label="Anmelden" icon="pi pi-lock-open" severity="primary" rounded />
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Card from 'primevue/card'
  import InputText from 'primevue/inputtext'
  import Password from 'primevue/password'
  import Checkbox from 'primevue/checkbox'
  import Button from 'primevue/button'

  const email = ref('')
  const password = ref('')
  const staySignedIn = ref(false)
</script>