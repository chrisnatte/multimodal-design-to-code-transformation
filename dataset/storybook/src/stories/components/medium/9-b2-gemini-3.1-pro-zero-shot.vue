<template>
  <div class="w-[544px] flex flex-col">
    <Tabs v-model:value="activeTab">
      <TabList>
        <Tab value="0">Schritt 1</Tab>
        <Tab value="1">Schritt 2</Tab>
        <Tab value="2">Schritt 3</Tab>
      </TabList>
      
      <TabPanels class="bg-white pt-[12.25px] px-[15.75px] pb-[15.75px]">
        <TabPanel value="0">
          <div class="flex flex-col gap-6">
            <div class="flex flex-col gap-4">
              <div class="flex items-center gap-2">
                <RadioButton v-model="radioValue" inputId="option1" value="Option1" />
                <label for="option1" class="text-sm font-normal font-sans text-surface-700">Option1</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton v-model="radioValue" inputId="option2" value="Option2" />
                <label for="option2" class="text-sm font-normal font-sans text-surface-700">Option2</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton v-model="radioValue" inputId="option3" value="Option3" />
                <label for="option3" class="text-sm font-normal font-sans text-surface-700">Option3</label>
              </div>
            </div>
            <div class="flex flex-col items-end gap-[10px]">
              <Button label="Weiter" outlined @click="activeTab = '1'" />
            </div>
          </div>
        </TabPanel>
        
        <TabPanel value="1">
          <div class="flex flex-col gap-6">
            <div class="flex flex-col justify-between px-8 py-4">
              <Slider v-model="sliderValue" class="w-full" />
            </div>
            <div class="flex flex-col items-end gap-[10px]">
              <Button label="Weiter" outlined @click="activeTab = '2'" />
            </div>
          </div>
        </TabPanel>
        
        <TabPanel value="2">
          <div class="flex flex-col gap-6">
            <div class="flex flex-col justify-center p-4">
              <Textarea v-model="textValue" rows="3" class="w-full" />
            </div>
            <div class="flex flex-col items-end gap-[10px]">
              <Button label="Speichern" />
            </div>
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
const radioValue = ref('')
const sliderValue = ref(0)
const textValue = ref('')
</script>