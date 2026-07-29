<template>
  <div class="w-full max-w-[536px] p-6">
    <Card
      :pt="{
        root: 'overflow-hidden rounded-xl border border-surface-200 shadow-sm',
        header: 'h-[172px]',
        body: '!p-0',
        content: '!p-0',
      }"
    >
      <template #header>
        <div class="relative h-full overflow-hidden bg-slate-950">
          <div class="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950 to-emerald-950"></div>
          <div class="absolute -top-8 left-16 h-48 w-48 rounded-full border border-emerald-300/30 bg-emerald-500/20 shadow-[inset_0_0_30px_rgba(74,222,128,0.35)]"></div>
          <div class="absolute -bottom-12 right-16 h-28 w-28 rounded-full border border-emerald-300/30 bg-emerald-500/20"></div>
        </div>
      </template>

      <template #content>
        <div class="flex flex-col gap-6 p-[17.5px]">
          <div class="flex flex-col gap-[7px]">
            <h1 class="text-[17.5px] font-medium text-surface-700">Anmelden</h1>
            <p class="text-sm text-surface-500">
              Melde dich mit deiner E-Mail-Adresse und Passwort an.
            </p>
          </div>

          <div class="flex flex-col gap-3">
            <div class="flex flex-col gap-[7px]">
              <label for="email" class="text-sm text-surface-700">E-Mail-Adresse</label>
              <InputText v-model="email" input-id="email" type="email" class="w-full" />
            </div>

            <div class="flex flex-col gap-[7px]">
              <label for="password" class="text-sm text-surface-700">Passwort</label>
              <Password
                v-model="password"
                input-id="password"
                toggle-mask
                :feedback="false"
                input-class="w-full"
                class="w-full"
              />
            </div>

            <div class="flex items-center gap-2">
              <Checkbox v-model="stayLoggedIn" input-id="stay-logged-in" binary />
              <label for="stay-logged-in" class="text-sm text-surface-600">
                Angemeldet bleiben
              </label>
            </div>
          </div>

          <div class="flex items-center gap-[7px]">
            <Button label="Save" severity="secondary" rounded />
            <Button label="Anmelden" icon="pi pi-unlock" severity="primary" rounded />
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Checkbox from 'primevue/checkbox'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'

const email = ref('')
const password = ref('')
const stayLoggedIn = ref(false)
</script>