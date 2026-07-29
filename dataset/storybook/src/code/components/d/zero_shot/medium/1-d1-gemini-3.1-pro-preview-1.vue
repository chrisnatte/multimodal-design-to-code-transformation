<template>
  <div class="min-h-screen flex items-center justify-center p-6 bg-white">
    <div class="w-full max-w-[488px] bg-white rounded-xl border border-surface-200 shadow-sm overflow-hidden flex flex-col">
      
      <!-- Header Image Area -->
      <div class="h-[172px] w-full bg-surface-900 relative overflow-hidden flex items-center justify-center">
        <!-- Placeholder for the specific graphic in the screenshot -->
        <div class="absolute inset-0 bg-gradient-to-br from-green-900/40 to-surface-900"></div>
        <div class="w-32 h-32 bg-green-500/20 rounded-full blur-2xl absolute -top-10 -left-10"></div>
        <div class="w-24 h-24 bg-green-500/20 rounded-full blur-xl absolute bottom-0 right-10"></div>
      </div>

      <!-- Card Body -->
      <div class="p-6 flex flex-col gap-6">
        
        <!-- Caption -->
        <div class="flex flex-col gap-2">
          <h1 class="text-[17.5px] font-medium text-surface-900 m-0 leading-tight">Anmelden</h1>
          <p class="text-sm text-surface-500 m-0">Melde dich mit deiner E-Mail-Adresse und Passwort an.</p>
        </div>

        <!-- Form Content -->
        <div class="flex flex-col gap-4">
          
          <!-- Email Field -->
          <div class="flex flex-col gap-2">
            <label for="email" class="text-sm text-surface-700">E-Mail-Adresse</label>
            <InputText id="email" v-model="email" class="w-full" />
          </div>

          <!-- Password Field -->
          <div class="flex flex-col gap-2">
            <label for="password" class="text-sm text-surface-700">Passwort</label>
            <Password 
              id="password" 
              v-model="password" 
              :toggleMask="true" 
              :feedback="false" 
              inputClass="w-full" 
              class="w-full [&>input]:w-full" 
            />
          </div>

          <!-- Checkbox -->
          <div class="flex items-center gap-2 mt-1">
            <Checkbox inputId="rememberMe" v-model="rememberMe" :binary="true" />
            <label for="rememberMe" class="text-sm text-surface-700 cursor-pointer select-none">Angemeldet bleiben</label>
          </div>
          
        </div>

        <!-- Footer Buttons -->
        <div class="flex flex-row gap-2 mt-2">
          <Button 
            label="Save" 
            rounded 
            class="!bg-surface-100 !text-surface-700 !border-none hover:!bg-surface-200 px-5 py-2 font-medium text-sm" 
          />
          <Button 
            label="Anmelden" 
            icon="pi pi-lock" 
            rounded 
            class="!bg-[#10b981] !border-none hover:!bg-[#059669] px-5 py-2 font-medium text-sm" 
          />
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';

const email = ref('');
const password = ref('');
const rememberMe = ref(false);
</script>