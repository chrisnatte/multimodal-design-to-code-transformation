<template>
  <div class="w-full max-w-[600px] bg-white p-6">
    <Tabs v-model:value="state.activeTab">
      <TabList class="border-b border-slate-200">
        <Tab value="0">Schritt 1</Tab>
        <Tab value="1">Schritt 2</Tab>
        <Tab value="2">Schritt 3</Tab>
      </TabList>

      <TabPanels class="pt-3 px-4 pb-4">
        <TabPanel value="0">
          <div class="flex flex-col gap-6 min-h-[160px]">
            <div class="flex flex-col gap-4">
              <div class="flex items-center gap-2">
                <RadioButton v-model="state.selectedOption" inputId="opt1" name="options" value="Option1" />
                <label for="opt1" class="text-slate-700">Option1</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton v-model="state.selectedOption" inputId="opt2" name="options" value="Option2" />
                <label for="opt2" class="text-slate-700">Option2</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton v-model="state.selectedOption" inputId="opt3" name="options" value="Option3" />
                <label for="opt3" class="text-slate-700">Option3</label>
              </div>
            </div>

            <div class="flex justify-end mt-auto">
              <Button label="Weiter" outlined />
            </div>
          </div>
        </TabPanel>

        <TabPanel value="1">
          <div class="flex flex-col gap-6 min-h-[160px]">
            <Slider v-model="state.sliderValue" class="w-full" />
            <div class="flex justify-end mt-auto">
              <Button label="Weiter" outlined />
            </div>
          </div>
        </TabPanel>

        <TabPanel value="2">
          <div class="flex flex-col gap-6 min-h-[160px]">
            <Textarea v-model="state.notes" rows="5" class="w-full" placeholder="Placeholder" />
            <div class="flex justify-end mt-auto">
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
  sliderValue: 25,
  notes: ''
})
</script>