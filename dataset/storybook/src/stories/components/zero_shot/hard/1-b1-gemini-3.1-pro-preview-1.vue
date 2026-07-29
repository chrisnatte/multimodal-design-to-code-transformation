<template>
  <div class="flex flex-col items-center justify-center w-full h-full bg-black py-[280px]">
    <div class="flex flex-col w-[384px] bg-white rounded-xl border border-[#e2e8f0]">
      <div class="flex flex-row items-center justify-between w-full p-[17.5px]">
        <span class="font-inter font-semibold text-[17.5px] text-black">Profil bearbeiten</span>
        <div class="flex flex-col gap-[7px]">
          <Button icon="pi pi-times" severity="secondary" text rounded />
        </div>
      </div>

      <div class="flex flex-col items-center w-full p-[17.5px] gap-4">
        <div class="flex flex-col w-full gap-1">
          <label class="font-inter font-normal text-sm text-black">Name</label>
          <InputText v-model="name" placeholder="Name eingeben" class="w-full" />
        </div>

        <div class="flex flex-col w-full gap-1">
          <label class="font-inter font-normal text-sm text-black">Rolle</label>
          <Select v-model="role" :options="roles" optionLabel="label" placeholder="Placeholder" class="w-full" />
        </div>

        <div class="flex flex-row items-center w-full gap-2">
          <Checkbox v-model="isActive" :binary="true" inputId="isActive" />
          <label for="isActive" class="font-inter font-normal text-sm text-black">Ist aktiv</label>
        </div>
      </div>

      <div class="flex flex-row justify-end w-full p-[17.5px] gap-[7px]">
        <Button label="Abbrechen" severity="secondary" text />
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
const role = ref({ label: 'Administrator', value: 'admin' })
const isActive = ref(false)

const roles = ref([
  { label: 'Administrator', value: 'admin' },
  { label: 'Projektleiter', value: 'pm' },
  { label: 'Gast', value: 'guest' }
])
</script>