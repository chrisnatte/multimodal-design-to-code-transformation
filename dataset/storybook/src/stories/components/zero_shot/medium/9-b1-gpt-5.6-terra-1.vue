<template>
  <div class="flex w-[592px] flex-col gap-2.5 bg-white p-6">
    <div class="flex w-full flex-col">
      <Tabs v-model:value="activeStep" class="w-full">
        <TabList class="h-[46px] border-b border-[#e2e8f0] bg-white">
          <Tab value="0" class="text-sm font-bold">Schritt 1</Tab>
          <Tab value="1" class="text-sm font-bold">Schritt 2</Tab>
          <Tab value="2" class="text-sm font-bold">Schritt 3</Tab>
        </TabList>

        <TabPanels class="bg-white px-[15.75px] pb-[15.75px] pt-[12.25px]">
          <TabPanel value="0">
            <div class="flex flex-col gap-6">
              <div class="flex w-fit flex-col justify-center gap-4">
                <div class="flex items-center gap-2">
                  <RadioButton v-model="selectedOption" input-id="option1" name="option" value="Option1" />
                  <label for="option1" class="text-sm">Option1</label>
                </div>

                <div class="flex items-center gap-2">
                  <RadioButton v-model="selectedOption" input-id="option2" name="option" value="Option2" />
                  <label for="option2" class="text-sm">Option2</label>
                </div>

                <div class="flex items-center gap-2">
                  <RadioButton v-model="selectedOption" input-id="option3" name="option" value="Option3" />
                  <label for="option3" class="text-sm">Option3</label>
                </div>
              </div>

              <div class="flex h-[33px] justify-end">
                <Button label="Weiter" outlined @click="activeStep = '1'" />
              </div>
            </div>
          </TabPanel>

          <TabPanel value="1">
            <div class="flex flex-col gap-6">
              <div class="flex h-12 flex-col justify-between px-8 py-4">
                <Slider v-model="sliderValue" :min="0" :max="100" class="w-full" />
              </div>

              <div class="flex h-[33px] justify-end">
                <Button label="Weiter" outlined @click="activeStep = '2'" />
              </div>
            </div>
          </TabPanel>

          <TabPanel value="2">
            <div class="flex flex-col gap-6">
              <div class="flex flex-col justify-center px-4 py-4">
                <Textarea v-model="comment" rows="1" class="h-[33px] w-full resize-none" />
              </div>

              <div class="flex h-[33px] justify-end">
                <Button label="Speichern" class="!border-[#10b981] !bg-[#10b981] !text-white" />
              </div>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
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

const activeStep = ref('0')
const selectedOption = ref(null)
const sliderValue = ref(0)
const comment = ref('')
</script>