<template>
  <div class="w-[544px] bg-white">
    <Tabs v-model:value="activeTab">
      <TabList>
        <Tab value="0">Schritt 1</Tab>
        <Tab value="1">Schritt 2</Tab>
        <Tab value="2">Schritt 3</Tab>
      </TabList>
      <TabPanels class="pt-3 px-4 pb-4">
        <TabPanel value="0">
          <div class="flex flex-col gap-6">
            <div class="flex flex-col gap-4">
              <div class="flex items-center gap-2">
                <RadioButton v-model="selectedOption" inputId="opt1" value="Option1" />
                <label for="opt1" class="text-sm text-gray-700 cursor-pointer">Option1</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton v-model="selectedOption" inputId="opt2" value="Option2" />
                <label for="opt2" class="text-sm text-gray-700 cursor-pointer">Option2</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton v-model="selectedOption" inputId="opt3" value="Option3" />
                <label for="opt3" class="text-sm text-gray-700 cursor-pointer">Option3</label>
              </div>
            </div>
            <div class="flex flex-col items-end justify-end gap-2.5">
              <Button label="Weiter" outlined severity="primary" />
            </div>
          </div>
        </TabPanel>

        <TabPanel value="1">
          <div class="flex flex-col gap-6">
            <div class="flex flex-col gap-4 px-8 py-4">
              <Slider v-model="sliderValue" class="w-full" />
            </div>
            <div class="flex flex-col items-end justify-end gap-2.5">
              <Button label="Weiter" outlined severity="primary" />
            </div>
          </div>
        </TabPanel>

        <TabPanel value="2">
          <div class="flex flex-col gap-6">
            <div class="flex flex-col items-center justify-center p-4">
              <Textarea v-model="textareaValue" placeholder="Placeholder" rows="1" class="w-full" />
            </div>
            <div class="flex flex-col items-end justify-end gap-2.5">
              <Button label="Speichern" severity="primary" />
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
const selectedOption = ref('')
const sliderValue = ref(50)
const textareaValue = ref('')
</script>