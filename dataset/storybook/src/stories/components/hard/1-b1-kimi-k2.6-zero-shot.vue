<template>
  <div class="flex flex-col justify-center items-center min-h-screen bg-black py-[280px] font-['Inter']">
    <div class="flex flex-col w-[384px] rounded-xl border border-slate-200 bg-white overflow-hidden">
      <div class="flex flex-row justify-between items-center w-full px-[17.5px] py-[17.5px]">
        <span class="text-[17.5px] font-semibold">Profil bearbeiten</span>
        <div class="flex flex-col gap-[7px] w-[35px]">
          <Button icon="pi pi-times" severity="secondary" text aria-label="Schließen" class="w-full h-[28px]" />
        </div>
      </div>
      <div class="flex flex-col items-stretch justify-center gap-4 w-full px-[17.5px] pb-[17.5px]">
        <div class="flex flex-col w-full">
          <label class="text-sm mb-1">Name</label>
          <InputText v-model="name" placeholder="Name eingeben" class="w-full" />
        </div>
        <div class="flex flex-col w-full">
          <label class="text-sm mb-1">Rolle</label>
          <Dropdown v-model="role" :options="roles" optionLabel="label" placeholder="Placeholder" class="w-full" />
        </div>
        <div class="flex items-center gap-2 w-full">
          <Checkbox v-model="isActive" binary inputId="active" />
          <label for="active" class="text-sm cursor-pointer">Ist aktiv</label>
        </div>
      </div>
      <div class="flex flex-row justify-end items-center gap-[7px] w-full px-[17.5px] pb-[17.5px]">
        <Button label="Abbrechen" text />
        <Button label="Speichern" severity="primary" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import Checkbox from 'primevue/checkbox'

const name = ref('Max Mustmann')
const role = ref('Administrator')
const isActive = ref(false)

const roles = ref([
  { label: 'Administrator', value: 'Administrator' },
  { label: 'Projektleiter', value: 'Projektleiter' },
  { label: 'Gast', value: 'Gast' }
])
</script>