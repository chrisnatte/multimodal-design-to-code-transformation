<template>
  <div class="flex justify-center bg-white p-6">
    <Card class="w-full max-w-[488px] overflow-hidden rounded-xl border border-surface-200 shadow-sm">
      <template #header>
        <div class="relative h-[172px] w-full overflow-hidden bg-slate-900">
          <!-- Placeholder for the 3D header image -->
          <div class="absolute inset-0 bg-gradient-to-b from-emerald-900/40 to-slate-900"></div>
        </div>
      </template>
      <template #title>
        <div class="text-lg font-medium text-surface-900">Anmelden</div>
      </template>
      <template #subtitle>
        <div class="mt-1 text-sm text-surface-500">Melde dich mit deiner E-Mail-Adresse und Passwort an.</div>
      </template>
      <template #content>
        <div class="mt-4 flex flex-col gap-6">
          <div class="flex flex-col gap-2">
            <label for="email" class="text-sm text-surface-900">E-Mail-Adresse</label>
            <InputText id="email" v-model="email" class="w-full" />
          </div>
          <div class="flex flex-col gap-2">
            <label for="password" class="text-sm text-surface-900">Passwort</label>
            <Password
              id="password"
              v-model="password"
              toggle-mask
              :feedback="false"
              input-class="w-full"
              class="w-full"
            />
          </div>
          <div class="flex items-center gap-2">
            <Checkbox id="stayLoggedIn" v-model="stayLoggedIn" binary />
            <label for="stayLoggedIn" class="text-sm text-surface-900">Angemeldet bleiben</label>
          </div>
        </div>
      </template>
      <template #footer>
        <div class="mt-2 flex gap-2">
          <Button label="Save" severity="secondary" rounded />
          <Button label="Anmelden" icon="pi pi-unlock" rounded />
        </div>
      </template>
    </Card>
  </div>
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
  const stayLoggedIn = ref(false)
</script>