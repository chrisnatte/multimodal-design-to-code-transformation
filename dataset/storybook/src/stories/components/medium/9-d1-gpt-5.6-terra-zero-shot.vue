<template>
  <div class="w-[544px] bg-white">
    <Tabs v-model:value="activeTab" class="w-full">
      <TabList class="h-[46px] border-b border-slate-200">
        <Tab value="1" class="h-[46px] px-4 text-sm font-bold">
          Schritt 1
        </Tab>
        <Tab value="2" class="h-[46px] px-4 text-sm font-bold">
          Schritt 2
        </Tab>
        <Tab value="3" class="h-[46px] px-4 text-sm font-bold">
          Schritt 3
        </Tab>
      </TabList>

      <TabPanels class="px-4 pb-4 pt-3">
        <TabPanel value="1" class="p-0">
          <div class="flex flex-col gap-6">
            <div class="flex w-fit flex-col gap-4">
              <div class="flex items-center gap-2">
                <RadioButton v-model="selectedOption" input-id="option1" name="option" value="Option1" />
                <label for="option1" class="text-sm text-slate-700">Option1</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton v-model="selectedOption" input-id="option2" name="option" value="Option2" />
                <label for="option2" class="text-sm text-slate-700">Option2</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton v-model="selectedOption" input-id="option3" name="option" value="Option3" />
                <label for="option3" class="text-sm text-slate-700">Option3</label>
              </div>
            </div>

            <div class="flex h-[33px] justify-end">
              <Button label="Weiter" outlined class="h-[33px] px-3 text-sm" />
            </div>
          </div>
        </TabPanel>

        <TabPanel value="2" class="p-0">
          <div class="flex flex-col gap-6">
            <div class="flex h-12 items-center px-8 py-4">
              <Slider v-model="sliderValue" class="w-full" />
            </div>

            <div class="flex h-[33px] justify-end">
              <Button label="Weiter" outlined class="h-[33px] px-3 text-sm" />
            </div>
          </div>
        </TabPanel>

        <TabPanel value="3" class="p-0">
          <div class="flex flex-col gap-6">
            <div class="px-4 py-4">
              <Textarea
                v-model="message"
                aria-label="Nachricht"
                class="h-[33px] w-full resize-none"
              />
            </div>

            <div class="flex h-[33px] justify-end">
              <Button label="Speichern" class="h-[33px] px-3 text-sm" />
            </div>
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import RadioButton from 'primevue/radiobutton'
import Slider from 'primevue/slider'
import Tabs from 'primevue/tabs'
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import Textarea from 'primevue/textarea'

const activeTab = ref('1')
const selectedOption = ref(null)
const sliderValue = ref(0)
const message = ref('')
</script>