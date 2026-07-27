<template>
  <div class="flex flex-col w-[544px]">
    <Tabs value="0">
      <TabList class="flex w-full bg-white border border-[#e2e8f0]">
        <Tab value="0">
          <span class="font-bold text-sm font-['Inter']">Schritt 1</span>
        </Tab>
        <Tab value="1">
          <span class="font-bold text-sm font-['Inter']">Schritt 2</span>
        </Tab>
        <Tab value="2">
          <span class="font-bold text-sm font-['Inter']">Schritt 3</span>
        </Tab>
      </TabList>

      <TabPanels class="flex flex-col w-full bg-white pt-[12.25px] pb-[15.75px] px-[15.75px]">
        <TabPanel value="0" class="flex flex-col gap-6 w-full">
          <div class="flex flex-col gap-4 justify-center">
            <div class="flex items-center gap-2">
              <RadioButton v-model="selectedOption" inputId="option1" value="Option1" />
              <label for="option1" class="text-sm font-normal font-['Inter']">Option1</label>
            </div>
            <div class="flex items-center gap-2">
              <RadioButton v-model="selectedOption" inputId="option2" value="Option2" />
              <label for="option2" class="text-sm font-normal font-['Inter']">Option2</label>
            </div>
            <div class="flex items-center gap-2">
              <RadioButton v-model="selectedOption" inputId="option3" value="Option3" />
              <label for="option3" class="text-sm font-normal font-['Inter']">Option3</label>
            </div>
          </div>
          <div class="flex flex-col items-end gap-2.5">
            <Button label="Weiter" outlined />
          </div>
        </TabPanel>

        <TabPanel value="1" class="flex flex-col gap-6 w-full">
          <div class="flex flex-col justify-between py-4 px-8 w-full">
            <Slider v-model="sliderValue" class="w-full" />
          </div>
          <div class="flex flex-col items-end gap-2.5">
            <Button label="Weiter" outlined />
          </div>
        </TabPanel>

        <TabPanel value="2" class="flex flex-col gap-6 w-full">
          <div class="flex flex-col items-center p-4 w-full">
            <Textarea v-model="textValue" class="w-full" rows="1" />
          </div>
          <div class="flex flex-col items-end gap-2.5">
            <Button label="Speichern" style="background-color: #10b981; border-color: #10b981;" />
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import RadioButton from 'primevue/radiobutton';
import Slider from 'primevue/slider';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';

const selectedOption = ref('');
const sliderValue = ref(0);
const textValue = ref('');
</script>