<template>
  <div class="min-h-screen bg-gray-400/80 flex items-center justify-center p-8">
    <Dialog
      v-model:visible="state.visible"
      modal
      :closable="true"
      :draggable="false"
      :resizable="false"
      :style="{ width: '640px' }"
      :pt="{
        root: { class: 'rounded-xl overflow-hidden' },
        header: { class: 'px-6 pt-6 pb-3' },
        content: { class: 'px-6 pb-6 pt-0' }
      }"
    >
      <template #header>
        <div class="w-full flex items-center justify-between">
          <h2 class="text-3xl font-semibold text-slate-700">Neues Projekt</h2>
        </div>
      </template>

      <div class="flex flex-col gap-5">
        <Tabs value="1">
          <TabList>
            <Tab value="1">1 - Allgemein</Tab>
            <Tab value="2">2 - Zeitplan</Tab>
            <Tab value="3">3 - Einstellungen</Tab>
          </TabList>
        </Tabs>

        <div class="flex flex-col gap-2">
          <label for="projektname" class="text-2xl text-slate-700">Projektname</label>
          <InputText id="projektname" v-model="state.projectName" class="w-full" />
        </div>

        <div class="flex flex-col gap-2">
          <label for="kategorie" class="text-2xl text-slate-700">Kategorie</label>
          <Select
            id="kategorie"
            v-model="state.category"
            :options="state.categories"
            optionLabel="label"
            optionValue="value"
            class="w-full"
          />
        </div>

        <div class="flex flex-col gap-2">
          <label for="verantwortlicher" class="text-2xl text-slate-700">Verantwortlicher</label>
          <Select
            id="verantwortlicher"
            v-model="state.owner"
            :options="state.owners"
            optionLabel="name"
            class="w-full"
          >
            <template #value="{ value, placeholder }">
              <div v-if="value" class="flex items-center gap-2">
                <Avatar :label="value.initials" shape="circle" size="normal" />
                <span>{{ value.name }}</span>
              </div>
              <span v-else>{{ placeholder }}</span>
            </template>
            <template #option="{ option }">
              <div class="flex items-center gap-2">
                <Avatar :label="option.initials" shape="circle" size="normal" />
                <span>{{ option.name }}</span>
              </div>
            </template>
          </Select>
        </div>

        <div class="flex justify-end gap-3 pt-3">
          <Button label="Abbrechen" severity="secondary" text @click="state.visible = false" />
          <Button label="Weiter" />
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Dialog from 'primevue/dialog'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'

const state = reactive({
  visible: true,
  projectName: '',
  category: 'entwicklung',
  categories: [
    { label: 'Entwicklung', value: 'entwicklung' },
    { label: 'Marketing', value: 'marketing' },
    { label: 'Design', value: 'design' }
  ],
  owner: { name: 'Max Mustmann', initials: 'M' },
  owners: [
    { name: 'Max Mustmann', initials: 'M' },
    { name: 'Anna Becker', initials: 'A' },
    { name: 'Lukas Weber', initials: 'L' }
  ]
})
</script>