<template>
  <div class="w-[536px] bg-white p-6">
    <div class="flex flex-col gap-[7px] rounded-xl bg-white">
      <div class="h-[172px] w-full p-2.5"></div>

      <form class="flex w-full flex-col gap-6 rounded-md p-[17.5px]" @submit.prevent>
        <div class="flex flex-col gap-[7px]">
          <span class="text-[17.5px] font-medium leading-[21px]">Anmelden</span>
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
              class="w-full"
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
              class="w-full"
              input-class="w-full"
              aria-label="Passwort"
            />
          </div>

          <div class="flex items-center gap-[7px]">
            <Checkbox
              input-id="stay-signed-in"
              v-model="staySignedIn"
              :binary="true"
            />
            <label for="stay-signed-in" class="text-sm leading-[17px]">
              Angemeldet bleiben
            </label>
          </div>
        </div>

        <div class="flex w-full gap-[7px]">
          <Button
            type="button"
            label="Abbrechen"
            severity="secondary"
            rounded
          />
          <Button
            type="submit"
            label="Anmelden"
            icon="pi pi-unlock"
            rounded
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'

const email = ref('')
const password = ref('')
const staySignedIn = ref(false)
</script>