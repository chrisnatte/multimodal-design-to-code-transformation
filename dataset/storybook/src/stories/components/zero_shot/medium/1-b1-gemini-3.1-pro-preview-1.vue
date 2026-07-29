<template>
  <div class="flex flex-col p-6 bg-white w-fit">
    <div class="flex flex-col gap-[7px] rounded-xl bg-white w-[488px]">
      <div class="flex flex-col gap-[10px] p-[10px] w-full h-[172px]">
        <!-- Header placeholder as per Figma -->
      </div>
      
      <div class="flex flex-col gap-6 p-[17.5px] rounded-md w-full">
        <div class="flex flex-col gap-[7px] w-full">
          <span class="font-medium text-[17.5px] font-['Inter'] text-surface-900">
            Anmelden
          </span>
          <span class="font-normal text-[14px] font-['Inter'] text-surface-600">
            Melde dich mit deiner E-Mail-Adresse und Passwort an.
          </span>
        </div>

        <div class="flex flex-col gap-3 w-full">
          <div class="flex flex-col gap-1 w-full">
            <label for="email" class="font-normal text-[14px] font-['Inter'] text-surface-700">
              E-Mail-Adresse
            </label>
            <InputText 
              id="email" 
              v-model="email" 
              class="w-full" 
            />
          </div>

          <div class="flex flex-col gap-1 w-full">
            <label for="password" class="font-normal text-[14px] font-['Inter'] text-surface-700">
              Passwort
            </label>
            <Password 
              id="password" 
              v-model="password" 
              :toggleMask="true" 
              :feedback="false"
              inputClass="w-full"
              class="w-full [&>input]:w-full" 
            />
          </div>

          <div class="flex items-center gap-2 mt-1">
            <Checkbox 
              v-model="rememberMe" 
              inputId="rememberMe" 
              :binary="true" 
            />
            <label for="rememberMe" class="font-normal text-[14px] font-['Inter'] text-surface-700 cursor-pointer">
              Angemeldet bleiben
            </label>
          </div>
        </div>

        <div class="flex flex-row gap-[7px] w-full mt-1">
          <Button 
            label="Abbrechen" 
            severity="secondary" 
            rounded 
            class="font-medium text-[14px] font-['Inter']"
          />
          <Button 
            label="Anmelden" 
            icon="pi pi-unlock" 
            rounded 
            class="font-medium text-[14px] font-['Inter']"
          />
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