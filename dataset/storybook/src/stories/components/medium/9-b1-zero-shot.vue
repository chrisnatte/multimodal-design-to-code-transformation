<template>
  <div class="flex flex-col">
    <Tabs v-model:value="state.activeTab" class="w-full">
      <TabList class="flex">
        <Tab value="0">Schritt 1</Tab>
        <Tab value="1">Schritt 2</Tab>
        <Tab value="2">Schritt 3</Tab>
      </TabList>

      <TabPanels class="px-4 py-3">
        <TabPanel value="0">
          <div class="flex flex-col gap-6">
            <div class="flex flex-col items-center gap-4">
              <div class="flex items-center gap-2">
                <RadioButton v-model="state.step1Option" inputId="option1" name="step1" value="Option1" />
                <label for="option1">Option1</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton v-model="state.step1Option" inputId="option2" name="step1" value="Option2" />
                <label for="option2">Option2</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton v-model="state.step1Option" inputId="option3" name="step1" value="Option3" />
                <label for="option3">Option3</label>
              </div>
            </div>
            <div class="flex flex-col items-end gap-2.5">
              <Button label="Weiter" outlined @click="state.activeTab = '1'" />
            </div>
          </div>
        </TabPanel>

        <TabPanel value="1">
          <div class="flex flex-col gap-6">
            <div class="flex flex-col justify-between px-8 py-4">
              <Slider v-model="state.sliderValue" />
            </div>
            <div class="flex flex-col items-end gap-2.5">
              <Button label="Weiter" outlined @click="state.activeTab = '2'" />
            </div>
          </div>
        </TabPanel>

        <TabPanel value="2">
          <div class="flex flex-col gap-6">
            <div class="flex flex-col items-center p-4">
              <Textarea v-model="state.notes" placeholder="Placeholder" class="w-full" rows="5" />
            </div>
            <div class="flex flex-col items-end gap-2.5">
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
  step1Option: null,
  sliderValue: 50,
  notes: ''
})
</script>