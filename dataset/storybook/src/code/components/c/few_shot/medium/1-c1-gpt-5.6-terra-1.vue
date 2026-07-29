<template>
  <Card
    :pt="{
      root: 'w-full max-w-[488px] overflow-hidden border border-surface-200 shadow-sm',
      header: 'overflow-hidden',
      body: '!p-0',
      content: '!p-0',
    }"
  >
    <template #header>
      <Image
        src="/images/login-hero.png"
        alt=""
        image-class="block h-[172px] w-full object-cover"
      />
    </template>

    <template #content>
      <form class="flex flex-col gap-4 px-4 py-5" @submit.prevent="submitLogin">
        <div class="flex flex-col gap-1">
          <h1 class="text-base font-medium text-surface-700">Anmelden</h1>
          <p class="text-sm text-surface-500">
            Melde dich mit deiner E-Mail-Adresse und Passwort an.
          </p>
        </div>

        <div class="flex flex-col gap-1.5">
          <label for="email" class="text-sm text-surface-700">E-Mail-Adresse</label>
          <InputText v-model="email" input-id="email" type="email" />
        </div>

        <div class="flex flex-col gap-1.5">
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

        <div class="mt-1 flex items-center gap-2">
          <Button label="Save" severity="secondary" text rounded type="button" />
          <Button label="Anmelden" icon="pi pi-lock" rounded type="submit" />
        </div>
      </form>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Checkbox from 'primevue/checkbox'
import Image from 'primevue/image'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'

const email = ref('')
const password = ref('')
const stayLoggedIn = ref(false)

function submitLogin() {}
</script>