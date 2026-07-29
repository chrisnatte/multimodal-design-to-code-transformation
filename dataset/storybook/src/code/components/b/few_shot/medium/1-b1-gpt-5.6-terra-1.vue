<template>
  <div class="w-[536px] bg-white p-6">
    <Card
      :pt="{
        root: 'w-full overflow-hidden rounded-xl bg-white shadow-none',
        body: '!p-0',
        content: '!p-0',
      }"
    >
      <template #content>
        <div class="flex flex-col gap-[7px]">
          <div class="flex h-[172px] flex-col gap-2.5 p-2.5"></div>

          <div class="flex flex-col gap-6 rounded-md p-[17.5px]">
            <div class="flex flex-col gap-[7px]">
              <h1 class="text-[17.5px] font-medium">Anmelden</h1>
              <span class="text-sm">
                Melde dich mit deiner E-Mail-Adresse und Passwort an.
              </span>
            </div>

            <div class="flex flex-col gap-3">
              <div class="flex flex-col gap-[7px]">
                <label for="email" class="text-sm">E-Mail-Adresse</label>
                <InputText
                  id="email"
                  v-model="email"
                  type="email"
                  class="h-[33px] w-full"
                />
              </div>

              <div class="flex flex-col gap-[7px]">
                <label for="password" class="text-sm">Passwort</label>
                <Password
                  input-id="password"
                  v-model="password"
                  toggle-mask
                  :feedback="false"
                  input-class="h-[33px] w-full"
                  class="w-full"
                />
              </div>

              <div class="flex items-center gap-[7px]">
                <Checkbox
                  id="stay-signed-in"
                  v-model="staySignedIn"
                  binary
                />
                <label for="stay-signed-in" class="text-sm">
                  Angemeldet bleiben
                </label>
              </div>
            </div>

            <div class="flex gap-[7px]">
              <Button
                label="Abbrechen"
                severity="secondary"
                rounded
              />
              <Button
                label="Anmelden"
                icon="pi pi-unlock"
                severity="primary"
                rounded
              />
            </div>
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