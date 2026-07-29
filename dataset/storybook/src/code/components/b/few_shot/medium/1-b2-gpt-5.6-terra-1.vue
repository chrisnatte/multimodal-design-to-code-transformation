<template>
  <div class="flex w-[536px] flex-col bg-white p-6">
    <Card
      class="w-full"
      :pt="{
        body: '!p-0 !gap-0',
        content: '!p-0',
      }"
    >
      <template #header>
        <div class="flex h-[172px] flex-col gap-2.5 p-2.5"></div>
      </template>

      <template #content>
        <div class="flex flex-col gap-6 rounded-md p-[17.5px]">
          <div class="flex flex-col gap-[7px]">
            <h1 class="text-[17.5px] font-medium">Anmelden</h1>
            <p class="text-sm">Melde dich mit deiner E-Mail-Adresse und Passwort an.</p>
          </div>

          <div class="flex flex-col gap-3">
            <div class="flex flex-col gap-[7px]">
              <label for="email" class="text-sm">E-Mail-Adresse</label>
              <InputText v-model="email" id="email" type="email" fluid />
            </div>

            <div class="flex flex-col gap-[7px]">
              <label for="password" class="text-sm">Passwort</label>
              <Password
                v-model="password"
                input-id="password"
                :feedback="false"
                toggle-mask
                fluid
              />
            </div>

            <div class="flex items-center gap-2">
              <Checkbox v-model="staySignedIn" input-id="stay-signed-in" binary />
              <label for="stay-signed-in" class="text-sm">Angemeldet bleiben</label>
            </div>
          </div>

          <div class="flex gap-[7px]">
            <Button label="Abbrechen" severity="secondary" rounded />
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