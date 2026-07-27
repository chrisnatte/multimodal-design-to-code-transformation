<template>
  <div class="w-full h-full flex items-center justify-center bg-black py-[280px]">
    <Dialog v-model:visible="visible" modal :closable="false" :draggable="false" :style="{ width: '24rem' }">
      <template #header>
        <div class="flex items-center justify-between w-full">
          <span class="font-semibold text-lg">Profil bearbeiten</span>
          <Button icon="pi pi-times" text severity="secondary" rounded @click="visible = false" />
        </div>
      </template>

      <div class="flex flex-col gap-4 px-2">
        <div class="flex flex-col gap-1">
          <label for="name" class="text-sm">Name</label>
          <InputText id="name" v-model="name" class="w-full" placeholder="Name eingeben" />
        </div>

        <div class="flex flex-col gap-1">
          <label for="rolle" class="text-sm">Rolle</label>
          <Select
            id="rolle"
            v-model="rolle"
            :options="rollenOptions"
            optionLabel="label"
            optionValue="value"
            placeholder="Placeholder"
            class="w-full"
          />
        </div>

        <div class="flex items-center gap-2">
          <Checkbox v-model="istAktiv" binary inputId="istAktiv" />
          <label for="istAktiv" class="text-sm">Ist aktiv</label>
        </div>
      </div>

      <template #footer>
        <Button label="Abbrechen" text severity="secondary" @click="visible = false" />
        <Button label="Speichern" severity="success" @click="onSave" />
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import Checkbox from 'primevue/checkbox'

const visible = ref(true)
const name = ref('Max Mustmann')
const rolle = ref('administrator')
const istAktiv = ref(false)

const rollenOptions = ref([
  { label: 'Administator', value: 'administrator' },
  { label: 'Projektleiter', value: 'projektleiter' },
  { label: 'Gast', value: 'gast' }
])

const onSave = () => {
  visible.value = false
}
</script>