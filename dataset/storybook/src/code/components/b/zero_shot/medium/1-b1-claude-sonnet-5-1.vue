<template>
  <div class="flex p-6 bg-white">
    <div class="flex flex-col gap-2 rounded-xl bg-white p-0">
      <div class="flex flex-col p-2.5" style="width: 488px;"></div>

      <div class="flex flex-col gap-6 rounded-md p-4" style="width: 488px;">
        <div class="flex flex-col gap-2">
          <span class="text-lg font-medium">Anmelden</span>
          <span class="text-sm font-normal">
            Melde dich mit deiner E-Mail-Adresse und Passwort an.
          </span>
        </div>

        <div class="flex flex-col gap-3">
          <div class="flex flex-col gap-1 w-full">
            <label for="email" class="text-sm font-normal">E-Mail-Adresse</label>
            <InputText
              id="email"
              v-model="email"
              class="w-full"
            />
          </div>

          <div class="flex flex-col gap-1 w-full">
            <label for="password" class="text-sm font-normal">Passwort</label>
            <Password
              id="password"
              v-model="password"
              :feedback="false"
              toggleMask
              class="w-full"
              inputClass="w-full"
            />
          </div>

          <div class="flex items-center gap-2">
            <Checkbox
              v-model="rememberMe"
              inputId="rememberMe"
              binary
            />
            <label for="rememberMe" class="text-sm font-normal">Angemeldet bleiben</label>
          </div>
        </div>

        <div class="flex gap-2">
          <Button
            label="Abbrechen"
            severity="secondary"
            rounded
          />
          <Button
            label="Anmelden"
            severity="success"
            rounded
          >
            <template #icon>
              <i class="pi pi-lock-open mr-2"></i>
            </template>
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'

const email = ref('')
const password = ref('')
const rememberMe = ref(false)
</script>