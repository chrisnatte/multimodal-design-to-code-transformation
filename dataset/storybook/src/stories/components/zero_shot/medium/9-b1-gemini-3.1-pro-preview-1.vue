<template>
  <div class="flex flex-col p-6 gap-2.5 bg-white w-[592px]">
    <Tabs v-model:value="activeTab" class="flex flex-col w-[544px]">
      <TabList class="flex flex-row w-full border-b border-[#e2e8f0] bg-white">
        <Tab value="0" class="font-bold text-sm">Schritt 1</Tab>
        <Tab value="1" class="font-bold text-sm">Schritt 2</Tab>
        <Tab value="2" class="font-bold text-sm">Schritt 3</Tab>
      </TabList>
      
      <TabPanels class="flex flex-col w-full px-[15.75px] pb-[15.75px] pt-[12.25px] bg-white">
        <TabPanel value="0" class="flex flex-col gap-6 w-full">
          <div class="flex flex-col gap-4 items-start">
            <div class="flex items-center gap-2">
              <RadioButton v-model="selectedOption" inputId="option1" name="option" value="Option1" />
              <label for="option1" class="text-sm font-normal text-gray-900">Option1</label>
            </div>
            <div class="flex items-center gap-2">
              <RadioButton v-model="selectedOption" inputId="option2" name="option" value="Option2" />
              <label for="option2" class="text-sm font-normal text-gray-900">Option2</label>
            </div>
            <div class="flex items-center gap-2">
              <RadioButton v-model="selectedOption" inputId="option3" name="option" value="Option3" />
              <label for="option3" class="text-sm font-normal text-gray-900">Option3</label>
            </div>
          </div>
          <div class="flex flex-col items-end w-full gap-2.5">
            <Button label="Weiter" outlined @click="activeTab = '1'" />
          </div>
        </TabPanel>
        
        <TabPanel value="1" class="flex flex-col gap-6 w-full">
          <div class="flex flex-col py-4 px-8 w-full justify-between gap-4">
            <Slider v-model="sliderValue" class="w-full" />
          </div>
          <div class="flex flex-col items-end w-full gap-2.5">
            <Button label="Weiter" outlined @click="activeTab = '2'" />
          </div>
        </TabPanel>
        
        <TabPanel value="2" class="flex flex-col gap-6 w-full">
          <div class="flex flex-col p-4 w-full items-center">
            <Textarea v-model="textValue" rows="1" class="w-full" />
          </div>
          <div class="flex flex-col items-end w-full gap-2.5">
            <Button label="Speichern" severity="primary" />
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
</template>

<script setup>
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
const selectedOption = ref('')
const sliderValue = ref(0)
const textValue = ref('')
</script>