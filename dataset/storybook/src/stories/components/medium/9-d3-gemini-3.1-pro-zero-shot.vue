<template>
  <div class="flex flex-col w-[544px]">
    <Tabs value="0">
      <TabList class="bg-white border-b border-gray-200 flex">
        <Tab value="0">
          <span class="font-bold text-sm text-surface-900">Schritt 1</span>
        </Tab>
        <Tab value="1">
          <span class="font-bold text-sm text-surface-900">Schritt 2</span>
        </Tab>
        <Tab value="2">
          <span class="font-bold text-sm text-surface-900">Schritt 3</span>
        </Tab>
      </TabList>
      
      <TabPanels class="bg-white px-[15.75px] pt-[12.25px] pb-[15.75px]">
        <TabPanel value="0" class="flex flex-col gap-6">
          <div class="flex flex-col gap-4 items-start">
            <div class="flex items-center gap-2">
              <RadioButton v-model="step1Options" inputId="opt1" name="option" value="Option1" />
              <label for="opt1" class="text-sm">Option1</label>
            </div>
            <div class="flex items-center gap-2">
              <RadioButton v-model="step1Options" inputId="opt2" name="option" value="Option2" />
              <label for="opt2" class="text-sm">Option2</label>
            </div>
            <div class="flex items-center gap-2">
              <RadioButton v-model="step1Options" inputId="opt3" name="option" value="Option3" />
              <label for="opt3" class="text-sm">Option3</label>
            </div>
          </div>
          <div class="flex flex-col items-end">
            <Button label="Weiter" outlined />
          </div>
        </TabPanel>

        <TabPanel value="1" class="flex flex-col gap-6 hidden">
          <div class="flex flex-col gap-4 py-4 px-8 w-full">
            <Slider v-model="sliderValue" class="w-full" />
          </div>
          <div class="flex flex-col items-end">
            <Button label="Weiter" outlined />
          </div>
        </TabPanel>

        <TabPanel value="2" class="flex flex-col gap-6 hidden">
          <div class="flex flex-col gap-4 p-4 w-full">
            <Textarea v-model="commentValue" rows="1" class="w-full" />
          </div>
          <div class="flex flex-col items-end">
            <Button label="Speichern" class="bg-[#10B981] border-none" />
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
import Button from 'primevue/button';
import Slider from 'primevue/slider';
import Textarea from 'primevue/textarea';

const step1Options = ref('');
const sliderValue = ref(0);
const commentValue = ref('');
</script>