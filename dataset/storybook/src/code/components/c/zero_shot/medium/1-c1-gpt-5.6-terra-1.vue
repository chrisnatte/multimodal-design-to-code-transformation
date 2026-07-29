<template>
  <main class="min-h-screen bg-white p-6">
    <Card
      class="mx-auto w-full max-w-[488px] overflow-hidden rounded-2xl border border-surface-200 shadow-sm [&_.p-card-body]:p-0 [&_.p-card-content]:p-0"
    >
      <template #header>
        <div class="relative h-[172px] overflow-hidden bg-gradient-to-br from-slate-950 via-slate-950 to-emerald-950">
          <div class="absolute inset-x-0 bottom-0 h-10 opacity-30 [background-image:linear-gradient(rgba(16,185,129,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.18)_1px,transparent_1px)] [background-size:24px_16px]"></div>

          <div class="absolute -top-7 left-16 flex h-52 w-52 items-center justify-center rounded-full border border-emerald-300/30 bg-gradient-to-b from-emerald-500/70 via-emerald-700/40 to-slate-900/70 shadow-[inset_0_0_35px_rgba(34,197,94,0.4)]">
            <Avatar
              icon="pi pi-shield"
              shape="circle"
              class="h-24 w-24 !bg-emerald-500 !text-5xl !text-emerald-950 shadow-lg"
            />
          </div>

          <div class="absolute -bottom-14 right-[72px] flex h-40 w-40 items-center justify-center rounded-full border border-emerald-300/30 bg-gradient-to-b from-emerald-500/70 via-emerald-700/40 to-slate-900/70">
            <Avatar
              icon="pi pi-shield"
              shape="circle"
              class="h-16 w-16 !bg-emerald-400 !text-3xl !text-emerald-950"
            />
          </div>
        </div>
      </template>

      <template #content>
        <form class="flex flex-col px-[17px] pb-[17px] pt-6" @submit.prevent>
          <h1 class="m-0 text-lg font-semibold leading-6 text-slate-700">Anmelden</h1>
          <p class="mb-6 mt-1 text-sm text-slate-500">
            Melde dich mit deiner E-Mail-Adresse und Passwort an.
          </p>

          <div class="flex flex-col gap-2">
            <label for="email" class="text-sm text-slate-700">E-Mail-Adresse</label>
            <InputText id="email" v-model="email" class="w-full" />
          </div>

          <div class="mt-3 flex flex-col gap-2">
            <label for="password" class="text-sm text-slate-700">Passwort</label>
            <Password
              id="password"
              v-model="password"
              toggleMask
              :feedback="false"
              class="w-full"
              inputClass="w-full"
            />
          </div>

          <div class="mt-3 flex items-center gap-2">
            <Checkbox id="stay-signed-in" v-model="staySignedIn" binary />
            <label for="stay-signed-in" class="text-sm text-slate-600">Angemeldet bleiben</label>
          </div>

          <div class="mt-6 flex items-center gap-2">
            <Button type="button" label="Save" severity="secondary" rounded />
            <Button type="submit" label="Anmelden" icon="pi pi-lock" rounded />
          </div>
        </form>
      </template>
    </Card>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Checkbox from 'primevue/checkbox'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'

const email = ref('')
const password = ref('')
const staySignedIn = ref(false)
</script>