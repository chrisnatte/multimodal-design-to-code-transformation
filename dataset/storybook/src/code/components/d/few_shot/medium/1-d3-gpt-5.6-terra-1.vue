<template>
  <div class="p-6">
    <Card
      class="w-full max-w-[488px] overflow-hidden rounded-xl border border-slate-200 shadow-sm"
      :pt="{
        header: 'overflow-hidden',
        body: '!p-0',
        content: '!p-0',
        footer: '!p-0',
      }"
    >
      <template #header>
        <div class="relative h-[172px] overflow-hidden bg-gradient-to-br from-slate-950 via-slate-950 to-emerald-950">
          <div class="absolute -top-20 left-16 h-52 w-52 rounded-full bg-emerald-500/50 blur-sm"></div>
          <div class="absolute -bottom-16 right-12 h-32 w-32 rounded-full bg-emerald-400/45 blur-sm"></div>
          <div
            class="absolute inset-x-0 bottom-0 h-8 opacity-30"
            style="background-image: linear-gradient(#2563eb33 1px, transparent 1px), linear-gradient(90deg, #2563eb33 1px, transparent 1px); background-size: 16px 16px;"
          ></div>
        </div>
      </template>

      <template #content>
        <div class="flex flex-col gap-6 p-[17.5px]">
          <div class="flex flex-col gap-[7px]">
            <span class="text-[17.5px] font-medium text-slate-700">Anmelden</span>
            <span class="text-sm text-slate-500">Melde dich mit deiner E-Mail-Adresse und Passwort an.</span>
          </div>

          <div class="flex flex-col gap-3">
            <div class="flex flex-col gap-[7px]">
              <label for="email" class="text-sm text-slate-700">E-Mail-Adresse</label>
              <InputText v-model="email" input-id="email" type="email" fluid />
            </div>

            <div class="flex flex-col gap-[7px]">
              <label for="password" class="text-sm text-slate-700">Passwort</label>
              <Password
                v-model="password"
                input-id="password"
                :feedback="false"
                toggle-mask
                fluid
                input-class="w-full"
              />
            </div>

            <div class="flex items-center gap-2">
              <Checkbox v-model="staySignedIn" input-id="stay-signed-in" binary />
              <label for="stay-signed-in" class="text-sm text-slate-600">Angemeldet bleiben</label>
            </div>
          </div>

          <div class="flex gap-[7px]">
            <Button label="Save" severity="secondary" rounded />
            <Button label="Anmelden" icon="pi pi-unlock" rounded />
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
const staySignedIn = ref(false)
</script>