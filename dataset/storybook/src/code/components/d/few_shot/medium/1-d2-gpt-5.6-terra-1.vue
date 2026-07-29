<template>
  <div class="w-[536px] p-6">
    <Card
      class="w-full overflow-hidden"
      :pt="{
        header: 'h-[172px] p-2.5',
        body: '!p-0',
        content: '!p-0',
      }"
    >
      <template #header>
        <div class="h-full w-full"></div>
      </template>

      <template #content>
        <div class="flex flex-col gap-6 p-[17.5px]">
          <div class="flex flex-col gap-[7px]">
            <h1 class="text-[17.5px] font-medium">Anmelden</h1>
            <p class="text-sm">Melde dich mit deiner E-Mail-Adresse und Passwort an.</p>
          </div>

          <div class="flex flex-col gap-3">
            <div class="flex flex-col gap-2">
              <label for="email">E-Mail-Adresse</label>
              <InputText v-model="email" id="email" type="email" fluid />
            </div>

            <div class="flex flex-col gap-2">
              <label for="password">Passwort</label>
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
              <label for="stay-signed-in">Angemeldet bleiben</label>
            </div>
          </div>

          <div class="flex items-center gap-[7px]">
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