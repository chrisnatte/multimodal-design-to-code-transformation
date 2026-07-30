<template>
  <Dialog
    v-model:visible="profileDialogVisible"
    modal
    :closable="false"
    :dismissableMask="false"
    :draggable="false"
    :style="{ width: '32rem' }"
    class="border border-slate-200 shadow-2xl"
  >
    <template #container>
      <div class="flex h-[563px] flex-col overflow-visible rounded-xl bg-white text-slate-700">
        <header class="flex h-16 items-center justify-between px-[17px]">
          <div class="flex items-center gap-3">
            <Avatar
              label="M"
              shape="circle"
              class="h-7 w-7 !bg-slate-200 !text-sm !text-slate-600"
            />
            <div class="flex flex-col">
              <span class="text-sm leading-[17px] text-slate-700">Max Mustermann</span>
              <span class="text-[10px] font-light leading-3 text-slate-500">Manager</span>
            </div>
          </div>

          <div class="flex items-center gap-4">
            <Tag
              value="Aktiv"
              class="!rounded-md !bg-emerald-100 !px-2 !py-1 !text-xs !font-bold !text-emerald-700"
            />
            <Button
              icon="pi pi-times"
              text
              rounded
              severity="secondary"
              aria-label="Schließen"
              class="!h-7 !w-7 !text-slate-500"
              @click="profileDialogVisible = false"
            />
          </div>
        </header>

        <main class="flex min-h-0 flex-1 flex-col">
          <Tabs v-model:value="activeTab" class="mx-[17px]">
            <TabList>
              <Tab value="personal" class="!px-4 !py-3 !text-sm !font-bold">
                Persönliche Daten
              </Tab>
              <Tab value="settings" class="!px-4 !py-3 !text-sm !font-bold">
                Einstellungen
              </Tab>
            </TabList>
          </Tabs>

          <div class="flex flex-col px-[21px] pt-3">
            <div class="flex flex-col gap-[7px]">
              <label for="name" class="text-sm leading-[21px]">Name</label>
              <InputText
                id="name"
                v-model="name"
                class="h-[33px] w-full !rounded-md !px-[11px] !text-sm"
              />
            </div>

            <div class="mt-4 flex flex-col gap-[7px]">
              <label for="email" class="text-sm leading-[21px]">E-Mail</label>
              <InputText
                id="email"
                v-model="email"
                class="h-[33px] w-full !rounded-md !px-[11px] !text-sm"
              />
            </div>

            <div class="mt-4 flex flex-col gap-[7px]">
              <label for="role" class="text-sm leading-[21px]">Rolle</label>
              <Select
                id="role"
                v-model="role"
                :options="roles"
                optionLabel="label"
                optionValue="value"
                class="h-[33px] w-full !rounded-md !border-emerald-500 !text-sm"
              />

              <Listbox
                v-model="role"
                :options="roles"
                optionLabel="label"
                optionValue="value"
                class="h-[106px] w-full !rounded-md !border-slate-200 !text-sm shadow-md"
              />
            </div>

            <div class="mt-4 flex items-center gap-2">
              <Checkbox v-model="isActive" inputId="active" binary />
              <label for="active" class="text-sm">Ist aktiv</label>
            </div>
          </div>
        </main>

        <footer class="flex h-[67px] items-center justify-end gap-2 px-[17px]">
          <Button
            label="Abbrechen"
            severity="secondary"
            class="!h-[33px] !border-slate-100 !bg-slate-100 !px-[11px] !text-sm !text-slate-600"
            @click="profileDialogVisible = false"
          />
          <Button
            label="Speichern"
            class="!h-[33px] !border-emerald-500 !bg-emerald-500 !px-[11px] !text-sm"
          />
        </footer>
      </div>
    </template>
  </Dialog>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Listbox from 'primevue/listbox'
import Select from 'primevue/select'
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import Tabs from 'primevue/tabs'
import Tag from 'primevue/tag'

const profileDialogVisible = ref(true)
const activeTab = ref('personal')
const name = ref('Max Mustmann')
const email = ref('max@example.com')
const role = ref('manager')
const isActive = ref(true)

const roles = ref([
  { label: 'Manager', value: 'manager' },
  { label: 'Mitarbeiter', value: 'employee' },
  { label: 'Kunde', value: 'customer' }
])
</script>