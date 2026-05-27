<template>
  <div class="flex flex-col">
    <Tabs v-model:value="state.activeTab">
      <TabList class="flex">
        <Tab value="0">Schritt 1</Tab>
        <Tab value="1">Schritt 2</Tab>
        <Tab value="2">Schritt 3</Tab>
      </TabList>
      <TabPanels class="pt-3 px-4 pb-4">
        <TabPanel value="0">
          <div class="flex flex-col gap-6">
            <div class="flex flex-col items-center gap-4">
              <div class="flex items-center gap-2">
                <RadioButton v-model="state.selectedOption" inputId="option1" name="options" value="Option1" />
                <label for="option1">Option1</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton v-model="state.selectedOption" inputId="option2" name="options" value="Option2" />
                <label for="option2">Option2</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton v-model="state.selectedOption" inputId="option3" name="options" value="Option3" />
                <label for="option3">Option3</label>
              </div>
            </div>
            <div class="flex flex-col items-end gap-2.5">
              <Button label="Weiter" outlined />
            </div>
          </div>
        </TabPanel>
        <TabPanel value="1">
          <div class="flex flex-col gap-6">
            <div class="flex flex-col justify-between p-4 px-8">
              <Slider v-model="state.sliderValue" />
            </div>
            <div class="flex flex-col items-end gap-2.5">
              <Button label="Weiter" outlined />
            </div>
          </div>
        </TabPanel>
        <TabPanel value="2">
          <div class="flex flex-col gap-6">
            <div class="flex flex-col items-center p-4">
              <Textarea v-model="state.textValue" placeholder="Placeholder" autoResize />
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
  selectedOption: null,
  sliderValue: 50,
  textValue: ''
})
</script>