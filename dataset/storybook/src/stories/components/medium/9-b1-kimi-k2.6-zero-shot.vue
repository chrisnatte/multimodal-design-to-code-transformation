<template>
  <div class="w-[544px] flex flex-col">
    <Tabs v-model:value="activeTab" class="w-full">
      <TabList class="flex w-full bg-white border-b border-slate-200">
        <Tab value="0" class="font-bold text-sm">Schritt 1</Tab>
        <Tab value="1" class="font-bold text-sm">Schritt 2</Tab>
        <Tab value="2" class="font-bold text-sm">Schritt 3</Tab>
      </TabList>
      <TabPanels class="w-full bg-white pt-3 px-4 pb-4">
        <TabPanel value="0">
          <div class="flex flex-col gap-6">
            <div class="flex flex-col gap-4 w-fit">
              <div class="flex items-center gap-2">
                <RadioButton v-model="selectedOption" name="optionGroup" inputId="opt1" value="Option1" />
                <label for="opt1" class="text-sm">Option1</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton v-model="selectedOption" name="optionGroup" inputId="opt2" value="Option2" />
                <label for="opt2" class="text-sm">Option2</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton v-model="selectedOption" name="optionGroup" inputId="opt3" value="Option3" />
                <label for="opt3" class="text-sm">Option3</label>
              </div>
            </div>
            <div class="flex flex-col items-end">
              <Button label="Weiter" outlined severity="primary" />
            </div>
          </div>
        </TabPanel>
        <TabPanel value="1">
          <div class="flex flex-col gap-6">
            <div class="w-full p-4">
              <Slider v-model="sliderValue" class="w-full" />
            </div>
            <div class="flex flex-col items-end">
              <Button label="Weiter" outlined severity="primary" />
            </div>
          </div>
        </TabPanel>
        <TabPanel value="2">
          <div class="flex flex-col gap-6">
            <div class="flex flex-col p-4 w-full">
              <Textarea v-model="textareaValue" placeholder="Placeholder" class="w-full rounded-md" />
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
const selectedOption = ref('');
const sliderValue = ref(0);
const textareaValue = ref('');
</script>