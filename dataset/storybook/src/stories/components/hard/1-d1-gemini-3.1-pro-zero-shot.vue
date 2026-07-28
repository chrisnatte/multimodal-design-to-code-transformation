<template>
  <div class="min-h-screen bg-black/50 flex items-center justify-center p-4">
    <div class="bg-white rounded-xl border border-[#e2e8f0] w-full max-w-[384px] flex flex-col font-sans">
      
      <!-- Header -->
      <div class="flex items-center justify-between p-[17.5px]">
        <h2 class="m-0 text-[17.5px] font-semibold text-gray-900">Profil bearbeiten</h2>
        <Button 
          icon="pi pi-times" 
          severity="secondary" 
          text 
          rounded 
          aria-label="Close" 
          class="w-7 h-7"
        />
      </div>

      <!-- Content -->
      <div class="flex flex-col gap-4 px-[17.5px] pb-[17.5px]">
        
        <!-- Name Input -->
        <div class="flex flex-col gap-1.5">
          <label for="name" class="text-sm text-gray-700">Name</label>
          <InputText 
            id="name" 
            v-model="name" 
            placeholder="Name eingeben" 
            class="w-full" 
          />
        </div>

        <!-- Role Select -->
        <div class="flex flex-col gap-1.5">
          <label for="role" class="text-sm text-gray-700">Rolle</label>
          <Select 
            id="role" 
            v-model="selectedRole" 
            :options="roles" 
            placeholder="Rolle auswählen" 
            class="w-full"
          />
        </div>

        <!-- Checkbox -->
        <div class="flex items-center gap-2 mt-1">
          <Checkbox 
            inputId="isActive" 
            v-model="isActive" 
            :binary="true" 
          />
          <label for="isActive" class="text-sm tracking-tight text-gray-700 cursor-pointer">Ist aktiv</label>
        </div>

      </div>

      <!-- Footer -->
      <div class="flex items-center justify-end gap-[7px] px-[17.5px] pb-[17.5px]">
        <Button 
          label="Abbrechen" 
          text 
          severity="secondary" 
          class="font-medium text-sm text-gray-600 px-3 py-2"
        />
        <Button 
          label="Speichern" 
          class="font-medium text-sm px-4 py-2 !bg-[#10B981] !border-[#10B981] hover:!bg-[#0D9467]"
        />
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import Checkbox from 'primevue/checkbox'

const name = ref('Max Mustmann')
const selectedRole = ref('Administrator')
const roles = ref([
  'Administrator',
  'Projektleiter',
  'Gast'
])
const isActive = ref(false)
</script>