<template>
  <Tabs v-model:value="activeTab" class="w-[34rem]">
    <TabList>
      <Tab value="0">Schritt 1</Tab>
      <Tab value="1">Schritt 2</Tab>
      <Tab value="2">Schritt 3</Tab>
    </TabList>
    <TabPanels class="bg-white px-4 pt-3 pb-4">
      <TabPanel value="0">
        <div class="flex flex-col gap-6">
          <div class="flex flex-col gap-4">
            <div class="flex items-center gap-2">
              <RadioButton v-model="selectedOption" name="option" value="Option1" inputId="opt1" />
              <label for="opt1">Option1</label>
            </div>
            <div class="flex items-center gap-2">
              <RadioButton v-model="selectedOption" name="option" value="Option2" inputId="opt2" />
              <label for="opt2">Option2</label>
            </div>
            <div class="flex items-center gap-2">
              <RadioButton v-model="selectedOption" name="option" value="Option3" inputId="opt3" />
              <label for="opt3">Option3</label>
            </div>
          </div>
          <div class="w-full flex flex-col items-end justify-end">
            <Button label="Weiter" outlined />
          </div>
        </div>
      </TabPanel>
      <TabPanel value="1">
        <div class="flex flex-col gap-6">
          <div class="flex flex-col justify-between px-8 py-4 w-full">
            <Slider v-model="sliderValue" class="w-full" />
          </div>
          <div class="w-full flex flex-col items-end justify-end">
            <Button label="Weiter" outlined />
          </div>
        </div>
      </TabPanel>
      <TabPanel value="2">
        <div class="flex flex-col gap-6">
          <div class="flex flex-col justify-center p-4 w-full">
            <Textarea v-model="textareaValue" class="w-full" rows="2" />
          </div>
          <div class="w-full flex flex-col items-end justify-end">
            <Button label="Speichern" />
          </div>
        </div>
      </TabPanel>
    </TabPanels>
  </Tabs>
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
const selectedOption = ref('');
const sliderValue = ref(50);
const textareaValue = ref('');
</script>