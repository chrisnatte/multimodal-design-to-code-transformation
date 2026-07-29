<template>
  <div class="bg-white p-6 flex justify-center">
    <Card
      class="w-full max-w-[488px] rounded-xl bg-white shadow-md overflow-hidden"
      :pt="{
        body: 'p-[17.5px] flex flex-col gap-6',
        content: 'py-0',
        footer: 'pt-0'
      }"
    >
      <template #header>
        <div class="h-[172px] w-full bg-surface-100 p-2.5"></div>
      </template>
      
      <template #title>
        <h2 class="text-[17.5px] font-medium text-surface-900 m-0">Anmelden</h2>
      </template>
      
      <template #subtitle>
        <p class="text-sm font-normal text-surface-600 m-0 mt-1">
          Melde dich mit deiner E-Mail-Adresse und Passwort an.
        </p>
      </template>
      
      <template #content>
        <div class="flex flex-col gap-3">
          <div class="flex flex-col gap-1.5">
            <label for="email" class="text-sm text-surface-900">E-Mail-Adresse</label>
            <InputText id="email" v-model="email" class="w-full" />
          </div>
          
          <div class="flex flex-col gap-1.5">
            <label for="password" class="text-sm text-surface-900">Passwort</label>
            <Password 
              id="password" 
              v-model="password" 
              toggleMask 
              :feedback="false" 
              inputClass="w-full" 
              class="w-full" 
            />
          </div>
          
          <div class="flex items-center gap-2 mt-1">
            <Checkbox id="remember" v-model="remember" binary />
            <label for="remember" class="text-sm text-surface-900">Angemeldet bleiben</label>
          </div>
        </div>
      </template>
      
      <template #footer>
        <div class="flex flex-row gap-[7px]">
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
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'

const email = ref('')
const password = ref('')
const remember = ref(false)
</script>