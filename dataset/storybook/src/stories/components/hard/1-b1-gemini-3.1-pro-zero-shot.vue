<template>
  <div class="flex flex-col items-center bg-black py-[280px] min-h-screen w-full">
    <div class="flex flex-col bg-white rounded-[12px] border border-[#e2e8f0] w-[384px]">
      
      <!-- Header -->
      <div class="flex flex-row justify-between items-center p-[17.5px]">
        <span class="font-semibold text-[17.5px] font-sans text-gray-900">Profil bearbeiten</span>
        <div class="flex flex-col gap-[7px]">
          <Button icon="pi pi-times" severity="secondary" text rounded aria-label="Close" />
        </div>
      </div>

      <!-- Content -->
      <div class="flex flex-col gap-4 px-[17.5px] pb-[17.5px]">
        
        <!-- Name Input -->
        <div class="flex flex-col gap-1">
          <label for="name" class="text-sm font-normal font-sans text-gray-700">Name</label>
          <InputText id="name" v-model="name" placeholder="Name eingeben" class="w-full" />
        </div>

        <!-- Role Select -->
        <div class="flex flex-col gap-1">
          <label for="role" class="text-sm font-normal font-sans text-gray-700">Rolle</label>
          <Select id="role" v-model="role" :options="roles" placeholder="Placeholder" class="w-full" />
        </div>

        <!-- Is Active Checkbox -->
        <div class="flex flex-row items-center gap-2 mt-1">
          <Checkbox v-model="isActive" inputId="isActive" :binary="true" />
          <label for="isActive" class="text-sm font-normal font-sans text-gray-700 cursor-pointer">Ist aktiv</label>
        </div>

      </div>

      <!-- Footer -->
      <div class="flex flex-row justify-end items-center gap-[7px] px-[17.5px] pb-[17.5px]">
        <Button label="Abbrechen" severity="secondary" text plain />
        <Button label="Speichern" severity="primary" />
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
const role = ref('Administrator')
const roles = ref(['Administrator', 'Projektleiter', 'Gast'])
const isActive = ref(false)
</script>