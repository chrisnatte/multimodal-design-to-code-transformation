<template>
  <div class="w-[544px] flex flex-col">
    <Tabs v-model:value="activeTab">
      <TabList class="w-full bg-white border-b border-[#e2e8f0]">
        <Tab value="0">Schritt 1</Tab>
        <Tab value="1">Schritt 2</Tab>
        <Tab value="2">Schritt 3</Tab>
      </TabList>
      <TabPanels class="w-full bg-white px-[15.75px] pb-[15.75px] pt-[12.25px]">
        <TabPanel value="0">
          <div class="flex flex-col gap-6 w-full">
            <div class="flex flex-col gap-4 items-start">
              <div class="flex items-center gap-2">
                <RadioButton v-model="radioValue" inputId="opt1" value="Option1" />
                <label for="opt1" class="text-sm font-normal font-['Inter']">Option1</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton v-model="radioValue" inputId="opt2" value="Option2" />
                <label for="opt2" class="text-sm font-normal font-['Inter']">Option2</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton v-model="radioValue" inputId="opt3" value="Option3" />
                <label for="opt3" class="text-sm font-normal font-['Inter']">Option3</label>
              </div>
            </div>
            <div class="flex flex-col items-end gap-[10px]">
              <Button label="Weiter" outlined @click="activeTab = '1'" />
            </div>
          </div>
        </TabPanel>
        <TabPanel value="1">
          <div class="flex flex-col gap-6 w-full">
            <div class="flex flex-col w-full py-4 px-8 justify-between">
              <Slider v-model="sliderValue" class="w-full" />
            </div>
            <div class="flex flex-col items-end gap-[10px]">
              <Button label="Weiter" outlined @click="activeTab = '2'" />
            </div>
          </div>
        </TabPanel>
        <TabPanel value="2">
          <div class="flex flex-col gap-6 w-full">
            <div class="flex flex-col w-full p-4 items-center">
              <Textarea v-model="textValue" class="w-full" rows="1" autoResize />
            </div>
            <div class="flex flex-col items-end gap-[10px]">
              <Button label="Speichern" class="!bg-[#10b981] !border-[#10b981]" />
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
import Button from 'primevue/button'
import Slider from 'primevue/slider'
import Textarea from 'primevue/textarea'

const activeTab = ref('0')
const radioValue = ref('')
const sliderValue = ref(0)
const textValue = ref('')
</script>