<template>
  <div class="p-6 bg-white flex flex-col gap-2.5 w-[592px]">
    <Tabs v-model:value="activeTab" class="flex flex-col w-full">
      <TabList class="flex w-full border-b border-slate-200">
        <Tab value="0" class="font-bold text-sm">Schritt 1</Tab>
        <Tab value="1" class="font-bold text-sm">Schritt 2</Tab>
        <Tab value="2" class="font-bold text-sm">Schritt 3</Tab>
      </TabList>
      
      <TabPanels class="flex flex-col pt-3 pb-4 px-4 w-full bg-white">
        <TabPanel value="0" class="flex flex-col gap-6 w-full">
          <div class="flex flex-col gap-4 items-start">
            <div class="flex items-center gap-2">
              <RadioButton v-model="selectedOption" inputId="opt1" value="Option1" />
              <label for="opt1" class="text-sm text-slate-700">Option1</label>
            </div>
            <div class="flex items-center gap-2">
              <RadioButton v-model="selectedOption" inputId="opt2" value="Option2" />
              <label for="opt2" class="text-sm text-slate-700">Option2</label>
            </div>
            <div class="flex items-center gap-2">
              <RadioButton v-model="selectedOption" inputId="opt3" value="Option3" />
              <label for="opt3" class="text-sm text-slate-700">Option3</label>
            </div>
          </div>
          <div class="flex flex-col items-end">
            <Button label="Weiter" outlined @click="nextTab" />
          </div>
        </TabPanel>
        
        <TabPanel value="1" class="flex flex-col gap-6 w-full">
          <div class="flex flex-col py-4 px-8 w-full">
            <Slider v-model="sliderValue" class="w-full" />
          </div>
          <div class="flex flex-col items-end">
            <Button label="Weiter" outlined @click="nextTab" />
          </div>
        </TabPanel>
        
        <TabPanel value="2" class="flex flex-col gap-6 w-full">
          <div class="flex flex-col p-4 w-full">
            <Textarea v-model="textValue" rows="1" class="w-full resize-none" />
          </div>
          <div class="flex flex-col items-end">
            <Button label="Speichern" severity="success" />
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

const activeTab = ref('0');
const selectedOption = ref('');
const sliderValue = ref(0);
const textValue = ref('');

const nextTab = () => {
  const current = parseInt(activeTab.value);
  if (current < 2) {
    activeTab.value = (current + 1).toString();
  }
};
</script>