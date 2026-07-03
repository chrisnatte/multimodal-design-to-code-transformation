<template>
  <div class="flex flex-col gap-2.5 p-6">
    <Tabs value="0">
      <TabList>
        <Tab value="0">Schritt 1</Tab>
        <Tab value="1">Schritt 2</Tab>
        <Tab value="2">Schritt 3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <div class="flex flex-col gap-4 justify-center">
            <RadioButton v-model="_state.n18_2895" value="option1" />
            <RadioButton v-model="_state.n18_2899" value="option1" />
            <RadioButton v-model="_state.n18_2903" value="option1" />
          </div>
          <div class="flex flex-col gap-2.5 items-end justify-end">
            <Button label="Weiter" variant="outlined" />
          </div>
        </TabPanel>
        <TabPanel value="1">
          <div class="flex flex-col gap-4 px-8 py-4 justify-between">
            <Slider v-model="_state.n18_2953" />
          </div>
          <div class="flex flex-col gap-2.5 items-end justify-end">
            <Button label="Weiter" variant="outlined" />
          </div>
        </TabPanel>
        <TabPanel value="2">
          <div class="flex flex-col p-4 justify-center">
            <Textarea
              placeholder="Placeholder"
              v-model="_state.n18_2971"
              rows="4"
             />
          </div>
          <div class="flex flex-col gap-2.5 items-end justify-end">
            <Button label="Speichern" />
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import RadioButton from 'primevue/radiobutton'
import Slider from 'primevue/slider'
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import TabPanel from 'primevue/tabpanel'
import TabPanels from 'primevue/tabpanels'
import Tabs from 'primevue/tabs'
import Textarea from 'primevue/textarea'

const _state = reactive({ n18_2895: null, n18_2899: null, n18_2903: null, n18_2953: null, n18_2971: null })
</script>
