<template>
  <div class="min-h-screen">
    <Dialog
      v-model:visible="visible"
      modal
      :draggable="false"
      class="w-[32rem]"
    >
      <template #header>
        <span class="text-lg font-semibold text-slate-700">Neues Projekt</span>
      </template>

      <div class="flex flex-col gap-4">
        <TabMenu v-model:activeIndex="activeStep" :model="steps" />

        <div class="flex flex-col gap-4 px-1">
          <div class="flex flex-col gap-2">
            <label for="project-name" class="text-sm text-slate-700">Projektname</label>
            <InputText id="project-name" v-model="projectName" />
          </div>

          <div class="flex flex-col gap-2">
            <label for="category" class="text-sm text-slate-700">Kategorie</label>
            <Select
              id="category"
              v-model="category"
              :options="categories"
              optionLabel="label"
              class="w-full"
            />
          </div>

          <div class="flex flex-col gap-2">
            <label for="owner" class="text-sm text-slate-700">Verantwortlicher</label>
            <Select
              id="owner"
              v-model="owner"
              :options="owners"
              optionLabel="name"
              class="w-full"
            >
              <template #value="{ value }">
                <div v-if="value" class="flex items-center gap-2">
                  <Avatar :label="value.initials" shape="circle" class="bg-slate-200 text-slate-600" />
                  <span>{{ value.name }}</span>
                </div>
              </template>
              <template #option="{ option }">
                <div class="flex items-center gap-2">
                  <Avatar :label="option.initials" shape="circle" class="bg-slate-200 text-slate-600" />
                  <span>{{ option.name }}</span>
                </div>
              </template>
            </Select>
          </div>
        </div>
      </div>

      <template #footer>
        <div class="flex justify-end gap-2 pt-4">
          <Button label="Abbrechen" severity="secondary" @click="visible = false" />
          <Button label="Weiter" severity="success" @click="activeStep = 1" />
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Dialog from 'primevue/dialog'
import TabMenu from 'primevue/tabmenu'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'

const visible = ref(true)
const activeStep = ref(0)
const projectName = ref('')

const steps = ref([
  { label: '1 - Allgemein' },
  { label: '2 - Zeitplan' },
  { label: '3 - Einstellungen' }
])

const categories = ref([
  { label: 'Entwicklung' },
  { label: 'Marketing' },
  { label: 'Design' }
])

const owners = ref([
  { name: 'Max Mustmann', initials: 'M' },
  { name: 'Anna Schmidt', initials: 'A' }
])

const category = ref(categories.value[0])
const owner = ref(owners.value[0])
</script>