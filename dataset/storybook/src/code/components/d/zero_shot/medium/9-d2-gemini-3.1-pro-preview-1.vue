<template>
  <div class="p-6 bg-white w-fit">
    <Tabs value="0" class="w-[544px]">
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
                <RadioButton v-model="selectedOption" inputId="opt1" name="option" value="Option1" />
                <label for="opt1" class="text-sm font-normal text-surface-700">Option1</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton v-model="selectedOption" inputId="opt2" name="option" value="Option2" />
                <label for="opt2" class="text-sm font-normal text-surface-700">Option2</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton v-model="selectedOption" inputId="opt3" name="option" value="Option3" />
                <label for="opt3" class="text-sm font-normal text-surface-700">Option3</label>
              </div>
            </div>
            <div class="flex flex-col items-end">
              <Button label="Weiter" outlined severity="primary" />
            </div>
          </div>
        </TabPanel>
        
        <TabPanel value="1">
          <div class="flex flex-col gap-6">
            <div class="py-4 px-8 flex flex-col justify-between">
              <Slider v-model="sliderValue" class="w-full" />
            </div>
            <div class="flex flex-col items-end">
              <Button label="Weiter" outlined severity="primary" />
            </div>
          </div>
        </TabPanel>
        
        <TabPanel value="2">
          <div class="flex flex-col gap-6">
            <div class="p-4 flex flex-col items-center">
              <Textarea v-model="textValue" rows="2" class="w-full" />
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
import Button from 'primevue/button';
import Slider from 'primevue/slider';
import Textarea from 'primevue/textarea';

const selectedOption = ref();
const sliderValue = ref(0);
const textValue = ref('');
</script>