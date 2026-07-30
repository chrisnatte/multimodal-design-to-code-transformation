<template>
  <div class="min-h-screen">
    <Dialog
      v-model:visible="dialogVisible"
      modal
      :draggable="false"
      :closable="false"
      :dismissableMask="false"
      class="w-[32rem] overflow-hidden rounded-xl"
      :pt="{
        header: { class: 'p-0' },
        content: { class: 'p-0' },
        footer: { class: 'p-0' }
      }"
    >
      <template #header>
        <div class="flex w-full items-center gap-4 px-[17px] py-[17px]">
          <div class="flex min-w-0 flex-1 items-center justify-between gap-4">
            <div class="flex items-center gap-3">
              <Avatar
                label="M"
                shape="circle"
                class="h-7 w-7 !bg-slate-200 !text-xs !text-slate-600"
              />
              <div class="flex flex-col leading-none">
                <span class="text-sm text-slate-700">Max Mustermann</span>
                <span class="mt-0.5 text-[10px] font-light text-slate-500">Manager</span>
              </div>
            </div>
            <Tag
              value="Aktiv"
              class="!bg-emerald-100 !px-2 !py-0.5 !text-xs !font-bold !text-emerald-600"
            />
          </div>
          <Button
            icon="pi pi-times"
            severity="secondary"
            text
            rounded
            aria-label="Schließen"
            class="!h-7 !w-7 !text-slate-500"
            @click="dialogVisible = false"
          />
        </div>
      </template>

      <div class="flex flex-col px-[17px] pb-[17px]">
        <Tabs v-model:value="activeTab" class="w-full">
          <TabList class="border-b border-slate-200">
            <Tab
              value="personal"
              class="!px-4 !py-[14px] !text-sm !font-bold data-[p-active=true]:!border-emerald-400 data-[p-active=true]:!text-emerald-500"
            >
              Persönliche Daten
            </Tab>
            <Tab
              value="settings"
              class="!px-4 !py-[14px] !text-sm !font-bold !text-slate-500"
            >
              Einstellungen
            </Tab>
          </TabList>

          <TabPanels class="!p-0">
            <TabPanel value="personal" class="!px-1 !pb-4 !pt-3">
              <div class="flex flex-col gap-4">
                <div class="flex flex-col gap-1.5">
                  <label for="name" class="text-sm text-slate-600">Name</label>
                  <InputText
                    id="name"
                    v-model="name"
                    class="h-[33px] w-full !rounded-md !border-slate-300 !px-3 !text-sm !text-slate-600"
                  />
                </div>

                <div class="flex flex-col gap-1.5">
                  <label for="email" class="text-sm text-slate-600">E-Mail</label>
                  <InputText
                    id="email"
                    v-model="email"
                    class="h-[33px] w-full !rounded-md !border-slate-300 !px-3 !text-sm !text-slate-600"
                  />
                </div>

                <div class="flex flex-col gap-0.5">
                  <label for="role" class="text-sm text-slate-600">Rolle</label>
                  <Select
                    id="role"
                    v-model="role"
                    :options="roles"
                    optionLabel="label"
                    optionValue="value"
                    class="h-[33px] w-full !rounded-md !border-emerald-500 !text-sm"
                    :pt="{
                      label: { class: '!py-[6px] !pl-3 !text-sm !text-slate-600' },
                      dropdown: { class: '!w-9 !text-slate-400' }
                    }"
                  />
                  <Listbox
                    v-model="role"
                    :options="roles"
                    optionLabel="label"
                    optionValue="value"
                    class="mt-0.5 w-full overflow-hidden rounded-md border border-slate-200 shadow-md"
                    :pt="{
                      root: { class: '!border-0 !p-[3px]' },
                      list: { class: '!p-0' },
                      option: {
                        class: '!mb-0.5 !h-[31px] !rounded-sm !px-3 !py-[7px] !text-sm !text-slate-600 hover:!bg-emerald-50 data-[p-selected=true]:!bg-emerald-50 data-[p-selected=true]:!text-emerald-600'
                      }
                    }"
                  />
                </div>

                <div class="flex items-center gap-2">
                  <Checkbox
                    v-model="active"
                    inputId="active"
                    binary
                    class="!h-[18px] !w-[18px]"
                  />
                  <label for="active" class="text-sm text-slate-600">Ist aktiv</label>
                </div>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>

      <template #footer>
        <div class="flex justify-end gap-2 px-[17px] pb-[17px]">
          <Button
            label="Abbrechen"
            severity="secondary"
            class="!h-[33px] !border-0 !bg-slate-100 !px-3 !text-sm !text-slate-600"
            @click="dialogVisible = false"
          />
          <Button
            label="Speichern"
            class="!h-[33px] !border-0 !bg-emerald-500 !px-3 !text-sm !text-white"
            @click="dialogVisible = false"
          />
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Dialog from 'primevue/dialog'
import Avatar from 'primevue/avatar'
import Tag from 'primevue/tag'
import Button from 'primevue/button'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import Listbox from 'primevue/listbox'
import Checkbox from 'primevue/checkbox'

const dialogVisible = ref(true)
const activeTab = ref('personal')
const name = ref('Max Mustmann')
const email = ref('max@example.com')
const role = ref('Manager')
const active = ref(true)

const roles = [
  { label: 'Manager', value: 'Manager' },
  { label: 'Mitarbeiter', value: 'Mitarbeiter' },
  { label: 'Kunde', value: 'Kunde' }
]
</script>