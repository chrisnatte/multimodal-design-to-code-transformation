<template>
  <div class="flex flex-col bg-white p-6">
    <Tabs v-model:value="activeTab" class="flex w-[544px] flex-col">
      <TabList>
        <Tab value="0">Schritt 1</Tab>
        <Tab value="1">Schritt 2</Tab>
        <Tab value="2">Schritt 3</Tab>
      </TabList>
      <TabPanels class="flex flex-col bg-white px-4 py-3">
        <TabPanel value="0" class="flex flex-col gap-6">
          <div class="flex flex-col items-start gap-4">
            <div class="flex items-center gap-2">
              <RadioButton v-model="selectedOption" inputId="opt1" value="Option1" />
              <label for="opt1" class="text-sm">Option1</label>
            </div>
            <div class="flex items-center gap-2">
              <RadioButton v-model="selectedOption" inputId="opt2" value="Option2" />
              <label for="opt2" class="text-sm">Option2</label>
            </div>
            <div class="flex items-center gap-2">
              <RadioButton v-model="selectedOption" inputId="opt3" value="Option3" />
              <label for="opt3" class="text-sm">Option3</label>
            </div>
          </div>
          <div class="flex flex-col items-end">
            <Button label="Weiter" outlined @click="activeTab = '1'" />
          </div>
        </TabPanel>
        
        <TabPanel value="1" class="flex flex-col gap-6">
          <div class="flex flex-col px-8 py-4">
            <Slider v-model="sliderValue" class="w-full" />
          </div>
          <div class="flex flex-col items-end">
            <Button label="Weiter" outlined @click="activeTab = '2'" />
          </div>
        </TabPanel>
        
        <TabPanel value="2" class="flex flex-col gap-6">
          <div class="flex flex-col p-4">
            <Textarea v-model="textValue" class="w-full" rows="2" />
          </div>
          <div class="flex flex-col items-end">
            <Button label="Speichern" severity="primary" />
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import RadioButton from 'primevue/radiobutton'
import Slider from 'primevue/slider'
import Textarea from 'primevue/textarea'
import Button from 'primevue/button'

const activeTab = ref('0')
const selectedOption = ref('Option1')
const sliderValue = ref(50)
const textValue = ref('')
</script>