<template>
  <div class="h-screen w-screen bg-white">
    <Dialog
      v-model:visible="dialogVisible"
      modal
      appendTo="self"
      :draggable="false"
      :dismissableMask="false"
      class="w-[512px] overflow-hidden rounded-xl border border-slate-200 shadow-2xl"
      :pt="{
        mask: { class: '!bg-black/40' },
        header: { class: 'px-[18px] pt-[18px] pb-[17px]' },
        title: { class: 'text-[18px] font-semibold text-slate-700' },
        content: { class: 'px-[18px] py-0' },
        footer: { class: 'px-[18px] pt-0 pb-[18px]' }
      }"
    >
      <template #header>
        <span>Neues Projekt</span>
      </template>

      <Tabs
        v-model:value="activeTab"
        class="w-full [&_.p-tablist]:border-b [&_.p-tablist]:border-slate-200 [&_.p-tablist-active-bar]:!bg-emerald-500 [&_.p-tab]:px-4 [&_.p-tab]:py-[14px] [&_.p-tab]:text-sm [&_.p-tab]:font-bold [&_.p-tab]:text-slate-500 [&_.p-tab-active]:!text-emerald-500 [&_.p-tabpanels]:p-0"
      >
        <TabList>
          <Tab value="general">1 - Allgemein</Tab>
          <Tab value="schedule">2 - Zeitplan</Tab>
          <Tab value="settings">3 - Einstellungen</Tab>
        </TabList>

        <TabPanels>
          <TabPanel value="general" class="px-1 pt-4 pb-8">
            <div class="flex flex-col gap-4">
              <div class="flex flex-col gap-2">
                <label for="project-name" class="text-sm text-slate-700">Projektname</label>
                <InputText
                  id="project-name"
                  v-model="projectName"
                  class="h-[34px] w-full"
                />
              </div>

              <div class="flex flex-col gap-2">
                <label for="category" class="text-sm text-slate-700">Kategorie</label>
                <Select
                  id="category"
                  v-model="selectedCategory"
                  :options="categories"
                  optionLabel="label"
                  class="h-[34px] w-full"
                />
              </div>

              <div class="flex flex-col gap-2">
                <label for="responsible" class="text-sm text-slate-700">Verantwortlicher</label>
                <Select
                  id="responsible"
                  v-model="selectedResponsible"
                  :options="responsiblePeople"
                  optionLabel="name"
                  class="h-[34px] w-full"
                >
                  <template #value="{ value }">
                    <div v-if="value" class="flex items-center gap-2">
                      <Avatar
                        :label="value.initials"
                        shape="circle"
                        class="h-6 w-6 !bg-slate-200 !text-xs !text-slate-600"
                      />
                      <span>{{ value.name }}</span>
                    </div>
                  </template>
                  <template #option="{ option }">
                    <div class="flex items-center gap-2">
                      <Avatar
                        :label="option.initials"
                        shape="circle"
                        class="h-6 w-6 !bg-slate-200 !text-xs !text-slate-600"
                      />
                      <span>{{ option.name }}</span>
                    </div>
                  </template>
                </Select>
              </div>
            </div>
          </TabPanel>

          <TabPanel value="schedule" class="px-1 pt-4 pb-8">
            <div class="min-h-[178px]"></div>
          </TabPanel>

          <TabPanel value="settings" class="px-1 pt-4 pb-8">
            <div class="flex flex-col gap-4">
              <div class="flex items-center justify-between px-1">
                <div class="flex flex-col">
                  <span class="text-sm font-semibold text-slate-700">Öffentlich sichtbar</span>
                  <span class="text-[10px] font-light text-slate-600">Für alle Teammitglieder</span>
                </div>
                <ToggleSwitch v-model="publicVisible" />
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
        <div class="flex justify-end gap-2">
          <Button
            label="Abbrechen"
            severity="secondary"
            class="h-[34px] !border-slate-100 !bg-slate-100 !px-3 !text-sm !text-slate-600"
            @click="dialogVisible = false"
          />
          <Button
            label="Weiter"
            class="h-[34px] !border-emerald-500 !bg-emerald-500 !px-3 !text-sm"
          />
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import TabPanel from 'primevue/tabpanel'
import TabPanels from 'primevue/tabpanels'
import Tabs from 'primevue/tabs'
import ToggleSwitch from 'primevue/toggleswitch'

const dialogVisible = ref(true)
const activeTab = ref('general')
const projectName = ref('')
const categories = ref([
  { label: 'Entwicklung' }
])
const selectedCategory = ref(categories.value[0])
const responsiblePeople = ref([
  { name: 'Max Mustmann', initials: 'M' }
])
const selectedResponsible = ref(responsiblePeople.value[0])
const publicVisible = ref(true)
const notifications = ref(false)
</script>