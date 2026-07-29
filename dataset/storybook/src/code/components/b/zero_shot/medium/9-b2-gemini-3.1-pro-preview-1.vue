<template>
  <div class="p-6 bg-white flex flex-col gap-2.5 w-[592px]">
    <Tabs v-model:value="activeTab" class="flex flex-col w-[544px]">
      <TabList>
        <Tab value="0">Schritt 1</Tab>
        <Tab value="1">Schritt 2</Tab>
        <Tab value="2">Schritt 3</Tab>
      </TabList>
      <TabPanels class="p-4">
        <TabPanel value="0">
          <div class="flex flex-col gap-6">
            <div class="flex flex-col gap-4 items-start">
              <div class="flex items-center gap-2">
                <RadioButton v-model="radioValue" inputId="option1" value="Option1" />
                <label for="option1" class="text-sm font-normal font-sans">Option1</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton v-model="radioValue" inputId="option2" value="Option2" />
                <label for="option2" class="text-sm font-normal font-sans">Option2</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton v-model="radioValue" inputId="option3" value="Option3" />
                <label for="option3" class="text-sm font-normal font-sans">Option3</label>
              </div>
            </div>
            <div class="flex flex-col items-end">
              <Button label="Weiter" outlined @click="activeTab = '1'" />
            </div>
          </div>
        </TabPanel>
        <TabPanel value="1">
          <div class="flex flex-col gap-6">
            <div class="flex flex-col px-8 py-4 w-full">
              <Slider v-model="sliderValue" class="w-full" />
            </div>
            <div class="flex flex-col items-end">
              <Button label="Weiter" outlined @click="activeTab = '2'" />
            </div>
          </div>
        </TabPanel>
        <TabPanel value="2">
          <div class="flex flex-col gap-6">
            <div class="flex flex-col p-4 items-center w-full">
              <Textarea v-model="textValue" class="w-full" rows="3" />
            </div>
            <div class="flex flex-col items-end">
              <Button label="Speichern" severity="primary" />
            </div>
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

const activeTab = ref('0');
const radioValue = ref('');
const sliderValue = ref(0);
const textValue = ref('');
</script>