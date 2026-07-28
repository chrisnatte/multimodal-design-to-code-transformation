<template>
  <Dialog
    v-model:visible="visible"
    modal
    :closable="false"
    :draggable="false"
    :pt="{
      root: { class: 'w-[512px] overflow-hidden rounded-xl border border-slate-200 shadow-2xl' },
      header: { class: 'flex items-center justify-between px-[17.5px] py-[17.5px] pb-[17.5px]' },
      content: { class: 'px-[17.5px] pb-0' },
      footer: { class: 'px-[17.5px] pt-0 pb-[17.5px]' },
      mask: { class: 'bg-black/40' }
    }"
  >
    <template #header>
      <span class="text-[17.5px] font-semibold text-slate-700">Neues Projekt</span>
      <Button
        icon="pi pi-times"
        severity="secondary"
        text
        aria-label="Schließen"
        class="h-7 w-9 text-slate-500"
        @click="visible = false"
      />
    </template>

    <Tabs v-model:value="activeTab" class="w-full">
      <TabList class="border-b border-slate-200">
        <Tab value="1" class="px-4 py-[14px] text-sm font-bold">1 - Allgemein</Tab>
        <Tab value="2" class="px-4 py-[14px] text-sm font-bold">2 - Zeitplan</Tab>
        <Tab value="3" class="px-4 py-[14px] text-sm font-bold">3 - Einstellungen</Tab>
      </TabList>

      <TabPanels class="px-1 pt-[12px] pb-[16px]">
        <TabPanel value="1">
          <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-1.5">
              <label for="projektname" class="text-sm text-slate-700">Projektname</label>
              <InputText
                id="projektname"
                v-model="projectName"
                class="h-[34px] w-full"
              />
            </div>

            <div class="flex flex-col gap-1.5">
              <label for="kategorie" class="text-sm text-slate-700">Kategorie</label>
              <Select
                id="kategorie"
                v-model="category"
                :options="categories"
                class="h-[34px] w-full"
              />
            </div>

            <div class="flex flex-col gap-1.5">
              <label for="verantwortlicher" class="text-sm text-slate-700">Verantwortlicher</label>
              <Select
                id="verantwortlicher"
                v-model="responsible"
                :options="responsiblePeople"
                option-label="name"
                class="h-[34px] w-full"
              >
                <template #value="{ value }">
                  <div v-if="value" class="flex items-center gap-1.5">
                    <Avatar :label="value.initials" shape="circle" class="h-6 w-6 bg-slate-200 text-xs text-slate-600" />
                    <span>{{ value.name }}</span>
                  </div>
                </template>
                <template #option="{ option }">
                  <div class="flex items-center gap-2">
                    <Avatar :label="option.initials" shape="circle" class="h-6 w-6 bg-slate-200 text-xs text-slate-600" />
                    <span>{{ option.name }}</span>
                  </div>
                </template>
              </Select>
            </div>
          </div>
        </TabPanel>

        <TabPanel value="2">
          <div class="min-h-[148px]"></div>
        </TabPanel>

        <TabPanel value="3">
          <div class="flex flex-col gap-4 py-[4px]">
            <div class="flex items-center justify-between px-1">
              <div class="flex flex-col">
                <span class="text-sm font-semibold text-slate-700">Öffentlich sichtbar</span>
                <span class="text-[10px] font-light text-slate-600">Für alle Teammitglieder</span>
              </div>
              <ToggleSwitch v-model="isPublic" />
            </div>

            <div class="flex items-center justify-between px-1">
              <div class="flex flex-col">
                <span class="text-sm font-semibold text-slate-700">Benachrichtigungen</span>
                <span class="text-[10px] font-light text-slate-600">Bei Statusänderungen</span>
              </div>
              <ToggleSwitch v-model="notifications" />
            </div>
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>

    <template #footer>
      <div class="flex justify-end gap-[7px]">
        <Button
          label="Abbrechen"
          severity="secondary"
          class="h-[33px]"
          @click="visible = false"
        />
        <Button
          label="Weiter"
          class="h-[33px]"
          @click="activeTab = activeTab === '1' ? '2' : activeTab === '2' ? '3' : '1'"
        />
      </div>
    </template>
  </Dialog>
</template>

<script setup>
import { ref } from 'vue'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import Avatar from 'primevue/avatar'
import ToggleSwitch from 'primevue/toggleswitch'

const visible = ref(true)
const activeTab = ref('1')
const projectName = ref('')
const categories = ref(['Entwicklung'])
const category = ref('Entwicklung')
const responsiblePeople = ref([
  { name: 'Max Mustmann', initials: 'M' }
])
const responsible = ref(responsiblePeople.value[0])
const isPublic = ref(true)
const notifications = ref(false)
</script>