<template>
  <Dialog
    v-model:visible="profileDialogVisible"
    modal
    :closable="false"
    :draggable="false"
    :pt="{
      root: 'w-full max-w-[32rem]',
      header: '!p-4',
      content: '!px-4 !pb-4',
      footer: '!px-4 !pb-4',
    }"
  >
    <template #header>
      <div class="flex w-full items-center justify-between">
        <div class="flex items-center gap-3">
          <Avatar label="M" shape="circle" />
          <div class="flex flex-col">
            <span class="text-sm font-medium">Max Mustermann</span>
            <span class="text-xs text-surface-500">Manager</span>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <Tag value="Aktiv" severity="success" />
          <Button
            icon="pi pi-times"
            severity="secondary"
            text
            rounded
            aria-label="Schließen"
            @click="profileDialogVisible = false"
          />
        </div>
      </div>
    </template>

    <TabView>
      <TabPanel header="Persönliche Daten">
        <div class="flex flex-col gap-4 pt-3">
          <div class="flex flex-col gap-2">
            <label for="name" class="text-sm">Name</label>
            <InputText id="name" v-model="name" class="w-full" />
          </div>

          <div class="flex flex-col gap-2">
            <label for="email" class="text-sm">E-Mail</label>
            <InputText id="email" v-model="email" type="email" class="w-full" />
          </div>

          <div class="flex flex-col gap-2">
            <label for="role" class="text-sm">Rolle</label>
            <Select
              id="role"
              v-model="role"
              :options="roles"
              class="w-full"
              aria-label="Rolle"
            />
            <Listbox v-model="role" :options="roles" class="w-full" />
          </div>

          <div class="flex items-center gap-2">
            <Checkbox v-model="active" input-id="active" binary />
            <label for="active" class="text-sm">Ist aktiv</label>
          </div>
        </div>
      </TabPanel>

      <TabPanel header="Einstellungen">
        <div class="pt-3"></div>
      </TabPanel>
    </TabView>

    <template #footer>
      <div class="flex justify-end gap-2">
        <Button
          label="Abbrechen"
          severity="secondary"
          @click="profileDialogVisible = false"
        />
        <Button label="Speichern" severity="primary" />
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Listbox from 'primevue/listbox'
import Select from 'primevue/select'
import TabPanel from 'primevue/tabpanel'
import TabView from 'primevue/tabview'
import Tag from 'primevue/tag'

const profileDialogVisible = ref(true)
const name = ref('Max Mustermann')
const email = ref('max@example.com')
const role = ref('Manager')
const active = ref(true)
const roles = ref(['Manager', 'Mitarbeiter', 'Kunde'])
</script>