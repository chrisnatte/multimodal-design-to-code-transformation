<template>
  <Dialog v-model:visible="_state.n106_7264Visible" :modal="true">
    <template #header>
      <div class="flex gap-4 p-[18px] items-center">
        <div class="flex gap-16 items-center justify-between">
          <div class="flex gap-3 items-center">
            <Avatar label="M" shape="circle" />
            <div class="flex flex-col">
              <span class="text-sm">Max Mustermann</span>
              <span>Manager</span>
            </div>
          </div>
          <Tag value="Aktiv" />
        </div>
        <div class="flex flex-col gap-[7px]">
          <Button severity="secondary" variant="text" />
        </div>
      </div>
    </template>
    <div
      class="flex flex-col gap-[7px] px-[18px] pb-[18px] justify-center"
    >
      <Tabs value="0">
        <TabList>
          <Tab value="0">Persönliche Daten</Tab>
          <Tab value="1">Einstellungen</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <InputText placeholder="Placeholder" v-model="_state.n106_7428" />
            <InputText placeholder="Placeholder" v-model="_state.n106_7429" />
            <div class="flex flex-col gap-2">
              <label>Rolle</label>
              <Select
                v-model="_state.n106_7430"
                :options="_options_n106_7430"
                placeholder="Placeholder"
               />
            </div>
            <Checkbox v-model="_state.n106_7439" binary />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
    <template #footer>
      <div class="flex gap-[7px] px-[18px] pb-[18px] justify-end">
        <Button label="Abbrechen" severity="secondary" />
        <Button label="Speichern" />
      </div>
    </template>
  </Dialog>
</template>

<script setup>
import { reactive } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import TabPanel from 'primevue/tabpanel'
import TabPanels from 'primevue/tabpanels'
import Tabs from 'primevue/tabs'
import Tag from 'primevue/tag'

const _state = reactive({ n106_7264Visible: null, n106_7428: null, n106_7429: null, n106_7430: null, n106_7439: null })
</script>
