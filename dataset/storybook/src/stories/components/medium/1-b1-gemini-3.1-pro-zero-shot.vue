<template>
  <div class="flex flex-col bg-white rounded-xl gap-[7px] w-[488px]">
    <div class="flex flex-col p-[10px] gap-[10px]"></div>
    <div class="flex flex-col p-[17.5px] gap-[24px] rounded-md">
      <div class="flex flex-col gap-[7px]">
        <span class="font-medium text-[17.5px] font-sans">Anmelden</span>
        <span class="font-normal text-[14px] font-sans">Melde dich mit deiner E-Mail-Adresse und Passwort an.</span>
      </div>
      
      <div class="flex flex-col gap-[12px]">
        <div class="flex flex-col gap-1">
          <label for="email" class="font-normal text-[14px] font-sans">E-Mail-Adresse</label>
          <InputText id="email" v-model="email" class="w-full" />
        </div>
        
        <div class="flex flex-col gap-1">
          <label for="password" class="font-normal text-[14px] font-sans">Passwort</label>
          <Password id="password" v-model="password" toggleMask :feedback="false" inputClass="w-full" class="w-full" />
        </div>
        
        <div class="flex flex-row items-center gap-2">
          <Checkbox id="remember" v-model="rememberMe" :binary="true" />
          <label for="remember" class="font-normal text-[14px] font-sans">Angemeldet bleiben</label>
        </div>
      </div>
      
      <div class="flex flex-row gap-[7px]">
        <Button label="Abbrechen" severity="secondary" rounded />
        <Button label="Anmelden" icon="pi pi-unlock" rounded />
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