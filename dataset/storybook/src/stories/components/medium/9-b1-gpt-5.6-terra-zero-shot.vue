<template>
  <div class="flex w-[544px] flex-col">
    <Tabs v-model:value="activeTab">
      <TabList class="flex h-[46px] justify-end border-b border-[#e2e8f0] bg-white">
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

      <TabPanels class="bg-white px-[15.75px] pb-[15.75px] pt-[12.25px]">
        <TabPanel value="1" class="p-0">
          <div class="flex flex-col gap-6">
            <div class="flex w-fit flex-col justify-center gap-4">
              <div class="flex items-center gap-[7px]">
                <RadioButton
                  v-model="selectedOption"
                  input-id="option1"
                  name="options"
                  value="Option1"
                />
                <label for="option1" class="text-sm">Option1</label>
              </div>

              <div class="flex items-center gap-[7px]">
                <RadioButton
                  v-model="selectedOption"
                  input-id="option2"
                  name="options"
                  value="Option2"
                />
                <label for="option2" class="text-sm">Option2</label>
              </div>

              <div class="flex items-center gap-[7px]">
                <RadioButton
                  v-model="selectedOption"
                  input-id="option3"
                  name="options"
                  value="Option3"
                />
                <label for="option3" class="text-sm">Option3</label>
              </div>
            </div>

            <div class="flex h-[33px] justify-end">
              <Button label="Weiter" outlined class="h-[33px]" />
            </div>
          </div>
        </TabPanel>

        <TabPanel value="2" class="p-0">
          <div class="flex flex-col gap-6">
            <div class="flex h-12 items-center px-8 py-4">
              <Slider v-model="sliderValue" class="w-full" />
            </div>

            <div class="flex h-[33px] justify-end">
              <Button label="Weiter" outlined class="h-[33px]" />
            </div>
          </div>
        </TabPanel>

        <TabPanel value="3" class="p-0">
          <div class="flex flex-col gap-6">
            <div class="flex h-[65px] items-center px-4 py-4">
              <Textarea
                v-model="comment"
                class="h-[33px] w-full resize-none"
                rows="1"
              />
            </div>

            <div class="flex h-[33px] justify-end">
              <Button label="Speichern" class="h-[33px]" />
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
const comment = ref('')
</script>