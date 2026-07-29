<template>
  <Dialog
    v-model:visible="visible"
    header="Neues Projekt"
    modal
    :style="{ width: '32rem' }"
    :pt="{
      content: 'flex flex-col gap-6 pt-2',
      footer: 'pt-4'
    }"
  >
    <TabMenu :model="tabs" v-model:activeIndex="activeTab" />

    <div class="flex flex-col gap-5">
      <div class="flex flex-col gap-2">
        <label for="projectName" class="text-sm text-surface-700">Projektname</label>
        <InputText id="projectName" v-model="projectName" />
      </div>

      <div class="flex flex-col gap-2">
        <label for="category" class="text-sm text-surface-700">Kategorie</label>
        <Select
          id="category"
          v-model="selectedCategory"
          :options="categories"
          optionLabel="name"
          class="w-full"
        />
      </div>

      <div class="flex flex-col gap-2">
        <label for="responsible" class="text-sm text-surface-700">Verantwortlicher</label>
        <Select
          id="responsible"
          v-model="selectedResponsible"
          :options="responsibles"
          optionLabel="name"
          class="w-full"
        >
          <template #value="slotProps">
            <div v-if="slotProps.value" class="flex items-center gap-2">
              <Avatar
                :label="slotProps.value.initial"
                shape="circle"
                class="w-6 h-6 text-xs bg-slate-100 text-slate-600"
              />
              <span>{{ slotProps.value.name }}</span>
            </div>
            <span v-else>
              {{ slotProps.placeholder }}
            </span>
          </template>
          <template #option="slotProps">
            <div class="flex items-center gap-2">
              <Avatar
                :label="slotProps.option.initial"
                shape="circle"
                class="w-6 h-6 text-xs bg-slate-100 text-slate-600"
              />
              <span>{{ slotProps.option.name }}</span>
            </div>
          </template>
        </Select>
      </div>
    </div>

    <template #footer>
      <div class="flex justify-end gap-3">
        <Button label="Abbrechen" severity="secondary" />
        <Button label="Weiter" severity="primary" />
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Dialog from 'primevue/dialog'
import TabMenu from 'primevue/tabmenu'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import Button from 'primevue/button'
import Avatar from 'primevue/avatar'

const visible = ref(true)
const activeTab = ref(0)

const tabs = ref([
  { label: '1 - Allgemein' },
  { label: '2 - Zeitplan' },
  { label: '3 - Einstellungen' }
])

const projectName = ref('')

const selectedCategory = ref({ name: 'Entwicklung', code: 'DEV' })
const categories = ref([
  { name: 'Entwicklung', code: 'DEV' },
  { name: 'Design', code: 'DES' },
  { name: 'Marketing', code: 'MAR' }
])

const selectedResponsible = ref({ name: 'Max Mustmann', initial: 'M' })
const responsibles = ref([
  { name: 'Max Mustmann', initial: 'M' },
  { name: 'Erika Musterfrau', initial: 'E' }
])
</script>