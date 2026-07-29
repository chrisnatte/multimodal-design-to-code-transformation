<template>
  <div class="flex w-[536px] flex-col bg-white p-6">
    <Card
      class="w-full"
      :pt="{
        root: 'overflow-hidden rounded-xl',
        body: '!p-0',
        content: '!p-0',
      }"
    >
      <template #header>
        <div class="mb-[7px] h-[172px] p-2.5"></div>
      </template>

      <template #content>
        <div class="flex flex-col gap-6 rounded-md p-[17.5px]">
          <div class="flex flex-col gap-[7px]">
            <h1 class="text-[17.5px] font-medium leading-[21px]">Anmelden</h1>
            <span class="text-sm leading-[17px]">
              Melde dich mit deiner E-Mail-Adresse und Passwort an.
            </span>
          </div>

          <div class="flex flex-col gap-3">
            <div class="flex flex-col gap-[7px]">
              <label for="email" class="text-sm leading-[21px]">E-Mail-Adresse</label>
              <InputText
                id="email"
                v-model="email"
                type="email"
                class="h-[33px] w-full"
                aria-label="E-Mail-Adresse"
              />
            </div>

            <div class="flex flex-col gap-[7px]">
              <label for="password" class="text-sm leading-[21px]">Passwort</label>
              <Password
                input-id="password"
                v-model="password"
                toggle-mask
                :feedback="false"
                fluid
                input-class="h-[33px] w-full"
                aria-label="Passwort"
              />
            </div>

            <div class="flex items-center gap-[7px]">
              <Checkbox v-model="rememberMe" input-id="remember-me" binary />
              <label for="remember-me" class="text-sm leading-[17px]">Angemeldet bleiben</label>
            </div>
          </div>

          <div class="flex gap-[7px]">
            <Button label="Abbrechen" severity="secondary" rounded @click="resetForm" />
            <Button
              label="Anmelden"
              icon="pi pi-unlock"
              rounded
              class="!bg-[#10b981] !border-[#10b981]"
            />
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
const rememberMe = ref(false)

const resetForm = () => {
  email.value = ''
  password.value = ''
  rememberMe.value = false
}
</script>