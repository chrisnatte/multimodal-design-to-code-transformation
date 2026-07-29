<template>
  <div class="flex w-[592px] flex-col gap-2.5 bg-white p-6">
    <Tabs v-model:value="activeStep" class="w-full">
      <TabList>
        <Tab value="1">Schritt 1</Tab>
        <Tab value="2">Schritt 2</Tab>
        <Tab value="3">Schritt 3</Tab>
      </TabList>

      <TabPanels>
        <TabPanel value="1">
          <div class="flex min-h-[348px] flex-col justify-between">
            <div class="flex flex-col gap-4">
              <div class="flex items-center gap-2">
                <RadioButton v-model="selectedOption" input-id="option1" name="option" value="Option1" />
                <label for="option1">Option1</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton v-model="selectedOption" input-id="option2" name="option" value="Option2" />
                <label for="option2">Option2</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton v-model="selectedOption" input-id="option3" name="option" value="Option3" />
                <label for="option3">Option3</label>
              </div>
            </div>
            <div class="flex justify-end">
              <Button label="Weiter" outlined @click="activeStep = '2'" />
            </div>
          </div>
        </TabPanel>

        <TabPanel value="2">
          <div class="flex min-h-[348px] flex-col justify-between">
            <div class="px-8 py-4">
              <Slider v-model="sliderValue" />
            </div>
            <div class="flex justify-end">
              <Button label="Weiter" outlined @click="activeStep = '3'" />
            </div>
          </div>
        </TabPanel>

        <TabPanel value="3">
          <div class="flex min-h-[348px] flex-col justify-between">
            <div class="p-4">
              <Textarea v-model="notes" class="w-full" />
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

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import RadioButton from 'primevue/radiobutton'
import Slider from 'primevue/slider'
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import TabPanel from 'primevue/tabpanel'
import TabPanels from 'primevue/tabpanels'
import Tabs from 'primevue/tabs'
import Textarea from 'primevue/textarea'

const activeStep = ref('1')
const selectedOption = ref('')
const sliderValue = ref(0)
const notes = ref('')
</script>