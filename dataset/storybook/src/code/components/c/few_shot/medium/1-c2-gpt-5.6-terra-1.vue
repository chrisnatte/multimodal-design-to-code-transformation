<template>
  <main class="flex min-h-screen items-center justify-center bg-white p-6">
    <Card
      class="w-full max-w-[488px] overflow-hidden border border-surface-200 shadow-sm"
      :pt="{
        header: 'h-[172px] overflow-hidden',
        body: '!p-4',
        content: '!p-0',
      }"
    >
      <template #header>
        <img :src="'/images/primevue.png'" alt="" class="h-full w-full object-cover" />
      </template>

      <template #content>
        <form class="flex flex-col gap-4" @submit.prevent>
          <div class="flex flex-col gap-1">
            <h1 class="m-0 text-lg font-medium text-surface-700">Anmelden</h1>
            <p class="m-0 text-sm text-surface-500">
              Melde dich mit deiner E-Mail-Adresse und Passwort an.
            </p>
          </div>

          <div class="flex flex-col gap-2">
            <label for="email" class="text-sm text-surface-700">E-Mail-Adresse</label>
            <InputText
              id="email"
              v-model="email"
              type="email"
              fluid
            />
          </div>

          <div class="flex flex-col gap-2">
            <label for="password" class="text-sm text-surface-700">Passwort</label>
            <Password
              input-id="password"
              v-model="password"
              :feedback="false"
              toggle-mask
              fluid
            />
          </div>

          <div class="flex items-center gap-2">
            <Checkbox
              input-id="stay-signed-in"
              v-model="staySignedIn"
              binary
            />
            <label for="stay-signed-in" class="text-sm text-surface-700">
              Angemeldet bleiben
            </label>
          </div>

          <div class="mt-2 flex items-center gap-2">
            <Button
              type="button"
              label="Save"
              severity="secondary"
              rounded
            />
            <Button
              type="submit"
              label="Anmelden"
              icon="pi pi-lock"
              severity="success"
              rounded
            />
          </div>
        </form>
      </template>
    </Card>
  </main>
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