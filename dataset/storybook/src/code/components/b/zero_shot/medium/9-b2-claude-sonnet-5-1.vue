<template>
  <div class="p-6 bg-white inline-flex flex-col gap-2.5">
    <Tabs v-model:value="activeTab" class="w-[544px]">
      <TabList>
        <Tab value="0">Schritt 1</Tab>
        <Tab value="1">Schritt 2</Tab>
        <Tab value="2">Schritt 3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <div class="flex flex-col gap-6">
            <div class="flex flex-col gap-4 items-center">
              <div class="flex items-center gap-2">
                <RadioButton v-model="step1Option" inputId="option1" name="step1" value="Option1" />
                <label for="option1">Option1</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton v-model="step1Option" inputId="option2" name="step1" value="Option2" />
                <label for="option2">Option2</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton v-model="step1Option" inputId="option3" name="step1" value="Option3" />
                <label for="option3">Option3</label>
              </div>
            </div>
            <div class="flex flex-col items-end gap-2.5">
              <Button label="Weiter" outlined />
            </div>
          </div>
        </TabPanel>
        <TabPanel value="1">
          <div class="flex flex-col gap-6">
            <div class="flex flex-col gap-4 px-8 py-4 justify-between">
              <Slider v-model="sliderValue" class="w-full" />
            </div>
            <div class="flex flex-col items-end gap-2.5">
              <Button label="Weiter" outlined />
            </div>
          </div>
        </TabPanel>
        <TabPanel value="2">
          <div class="flex flex-col gap-6">
            <div class="flex flex-col p-4 justify-center">
              <Textarea v-model="textareaValue" class="w-full" placeholder="Placeholder" />
            </div>
            <div class="flex flex-col items-end gap-2.5">
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
const step1Option = ref('');
const sliderValue = ref(0);
const textareaValue = ref('');
</script>