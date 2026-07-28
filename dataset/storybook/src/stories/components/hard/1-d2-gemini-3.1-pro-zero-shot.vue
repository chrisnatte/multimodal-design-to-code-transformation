<template>
  <div class="flex items-center justify-center min-h-screen bg-black/40 p-4">
    <Dialog 
      v-model:visible="visible" 
      modal 
      header="Profil bearbeiten" 
      :style="{ width: '24rem' }" 
      :closable="true"
    >
      <div class="flex flex-col gap-4 py-2">
        <div class="flex flex-col gap-2">
          <label for="name" class="text-sm font-normal text-surface-700">Name</label>
          <InputText id="name" v-model="name" placeholder="Name eingeben" />
        </div>

        <div class="flex flex-col gap-2">
          <label for="role" class="text-sm font-normal text-surface-700">Rolle</label>
          <Select 
            id="role" 
            v-model="selectedRole" 
            :options="roles" 
            class="w-full" 
          />
        </div>

        <div class="flex items-center gap-2 mt-2">
          <Checkbox inputId="isActive" v-model="isActive" binary />
          <label for="isActive" class="text-sm font-normal text-surface-700 cursor-pointer">Ist aktiv</label>
        </div>
      </div>

      <template #footer>
        <div class="flex justify-end items-center gap-2 w-full mt-2">
          <Button 
            label="Abbrechen" 
            variant="text" 
            severity="secondary" 
            @click="visible = false" 
          />
          <Button 
            label="Speichern" 
            @click="visible = false" 
            class="!bg-[#10b981] !border-[#10b981] !text-white hover:!bg-[#0fa070] hover:!border-[#0fa070]"
          />
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'

const visible = ref(true)
const name = ref('Max Mustmann')
const selectedRole = ref('Administrator')
const roles = ref(['Administrator', 'Projektleiter', 'Gast'])
const isActive = ref(false)
</script>