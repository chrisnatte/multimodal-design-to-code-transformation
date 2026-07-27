<template>
  <div class="flex flex-col gap-2 p-2 bg-white rounded-xl w-[488px]">
    <!-- header -->
    <div class="flex flex-col gap-2.5 p-2.5 w-full"></div>

    <!-- body -->
    <div class="flex flex-col gap-6 p-4 rounded-md w-full">
      <!-- caption -->
      <div class="flex flex-col gap-2 w-full">
        <span class="text-lg font-medium">Anmelden</span>
        <span class="text-sm font-normal">
          Melde dich mit deiner E-Mail-Adresse und Passwort an.
        </span>
      </div>

      <!-- content -->
      <div class="flex flex-col gap-3 w-full">
        <div class="flex flex-col gap-1 w-full">
          <label for="email" class="text-sm">E-Mail-Adresse</label>
          <InputText
            id="email"
            v-model="email"
            class="w-full"
          />
        </div>

        <div class="flex flex-col gap-1 w-full">
          <label for="password" class="text-sm">Passwort</label>
          <Password
            id="password"
            v-model="password"
            toggleMask
            :feedback="false"
            class="w-full"
            inputClass="w-full"
          />
        </div>

        <div class="flex items-center gap-2">
          <Checkbox
            v-model="rememberMe"
            binary
            inputId="rememberMe"
          />
          <label for="rememberMe" class="text-sm">Angemeldet bleiben</label>
        </div>
      </div>

      <!-- footer -->
      <div class="flex gap-2 w-full">
        <Button
          label="Abbrechen"
          severity="secondary"
          rounded
          class="flex-1"
        />
        <Button
          label="Anmelden"
          severity="primary"
          rounded
          icon="pi pi-lock-open"
          class="flex-1"
        />
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