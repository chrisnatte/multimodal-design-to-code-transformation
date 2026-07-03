<template>
  <div class="w-[592px] h-[263px] bg-white p-6">
    <Tabs v-model:value="state.activeTab" class="flex flex-col">
      <TabList class="border-b border-slate-200">
        <Tab value="0" class="font-bold">Schritt 1</Tab>
        <Tab value="1" class="font-bold">Schritt 2</Tab>
        <Tab value="2" class="font-bold">Schritt 3</Tab>
      </TabList>

      <TabPanels class="pt-3 px-4 pb-4">
        <TabPanel value="0">
          <div class="flex flex-col gap-6 min-h-[150px]">
            <div class="flex flex-col gap-4">
              <div class="flex items-center">
                <RadioButton v-model="state.option" inputId="opt1" name="options" value="Option1" />
                <label for="opt1" class="ml-2 text-slate-700">Option1</label>
              </div>
              <div class="flex items-center">
                <RadioButton v-model="state.option" inputId="opt2" name="options" value="Option2" />
                <label for="opt2" class="ml-2 text-slate-700">Option2</label>
              </div>
              <div class="flex items-center">
                <RadioButton v-model="state.option" inputId="opt3" name="options" value="Option3" />
                <label for="opt3" class="ml-2 text-slate-700">Option3</label>
              </div>
            </div>
            <div class="flex justify-end">
              <Button label="Weiter" outlined @click="state.activeTab = '1'" />
            </div>
          </div>
        </TabPanel>

        <TabPanel value="1">
          <div class="flex flex-col gap-6 min-h-[150px]">
            <div class="px-8 py-4">
              <Slider v-model="state.sliderValue" />
            </div>
            <div class="flex justify-end">
              <Button label="Weiter" outlined @click="state.activeTab = '2'" />
            </div>
          </div>
        </TabPanel>

        <TabPanel value="2">
          <div class="flex flex-col gap-6 min-h-[150px]">
            <div class="p-4">
              <Textarea v-model="state.notes" rows="4" class="w-full" placeholder="Placeholder" />
            </div>
            <div class="flex justify-end">
              <Button label="Speichern" />
            </div>
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import RadioButton from 'primevue/radiobutton'
import Button from 'primevue/button'
import Slider from 'primevue/slider'
import Textarea from 'primevue/textarea'

const state = reactive({
  activeTab: '0',
  option: null,
  sliderValue: 30,
  notes: ''
})
</script>