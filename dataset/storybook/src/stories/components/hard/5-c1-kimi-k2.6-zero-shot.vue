<template>
  <Dialog v-model:visible="visible" header="Neues Projekt" :modal="true" :draggable="false">
    <div class="w-[28rem] flex flex-col gap-5">
      <Steps :model="steps" :activeStep="activeStep" />

      <div class="flex flex-col gap-1.5">
        <label for="projektname" class="text-sm font-medium text-gray-700">Projektname</label>
        <InputText id="projektname" v-model="projektname" class="w-full" />
      </div>

      <div class="flex flex-col gap-1.5">
        <label for="kategorie" class="text-sm font-medium text-gray-700">Kategorie</label>
        <Dropdown id="kategorie" v-model="kategorie" :options="kategorien" optionLabel="label" class="w-full" />
      </div>

      <div class="flex flex-col gap-1.5">
        <label for="verantwortlicher" class="text-sm font-medium text-gray-700">Verantwortlicher</label>
        <Dropdown id="verantwortlicher" v-model="verantwortlicher" :options="verantwortliche" optionLabel="name" class="w-full">
          <template #value="slotProps">
            <div v-if="slotProps.value" class="flex items-center gap-2">
              <Avatar :label="slotProps.value.initials" shape="circle" class="bg-gray-200 text-gray-700 text-xs" />
              <span>{{ slotProps.value.name }}</span>
            </div>
            <span v-else>{{ slotProps.placeholder }}</span>
          </template>
        </Dropdown>
      </div>

      <div class="flex justify-end gap-2 pt-2">
        <Button label="Abbrechen" severity="secondary" @click="visible = false" />
        <Button label="Weiter" severity="success" @click="nextStep" />
      </div>
    </div>
  </Dialog>
</template>

<script setup>
import { ref } from 'vue'
import Dialog from 'primevue/dialog'
import Steps from 'primevue/steps'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import Button from 'primevue/button'
import Avatar from 'primevue/avatar'

const visible = ref(true)
const activeStep = ref(0)

const steps = ref([
  { label: '1 - Allgemein' },
  { label: '2 - Zeitplan' },
  { label: '3 - Einstellungen' }
])

const projektname = ref('')

const kategorien = ref([
  { label: 'Entwicklung', value: 'entwicklung' },
  { label: 'Design', value: 'design' },
  { label: 'Marketing', value: 'marketing' }
])
const kategorie = ref({ label: 'Entwicklung', value: 'entwicklung' })

const verantwortliche = ref([
  { name: 'Max Mustmann', initials: 'M', value: 'max' },
  { name: 'Erika Musterfrau', initials: 'E', value: 'erika' }
])
const verantwortlicher = ref({ name: 'Max Mustmann', initials: 'M', value: 'max' })

const nextStep = () => {
  if (activeStep.value < steps.value.length - 1) {
    activeStep.value++
  }
}
</script>