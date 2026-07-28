<template>
  <div class="w-full">
    <Tabs v-model:value="activeTab">
      <TabList>
        <Tab value="0">Schritt 1</Tab>
        <Tab value="1">Schritt 2</Tab>
        <Tab value="2">Schritt 3</Tab>
      </TabList>
      <TabPanels class="p-4 pt-3">
        <TabPanel value="0">
          <div class="flex flex-col gap-6">
            <div class="flex flex-col gap-4">
              <div class="flex items-center gap-2">
                <RadioButton v-model="selectedOption" inputId="option1" name="option" value="Option1" />
                <label for="option1" class="text-sm">Option1</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton v-model="selectedOption" inputId="option2" name="option" value="Option2" />
                <label for="option2" class="text-sm">Option2</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton v-model="selectedOption" inputId="option3" name="option" value="Option3" />
                <label for="option3" class="text-sm">Option3</label>
              </div>
            </div>
            <div class="flex justify-end">
              <Button label="Weiter" variant="outlined" severity="primary" />
            </div>
          </div>
        </TabPanel>
        <TabPanel value="1">
          <div class="flex flex-col gap-6">
            <div class="flex flex-col gap-4 py-4 px-8 justify-between">
              <Slider v-model="sliderValue" class="w-full" />
            </div>
            <div class="flex justify-end">
              <Button label="Weiter" variant="outlined" severity="primary" />
            </div>
          </div>
        </TabPanel>
        <TabPanel value="2">
          <div class="flex flex-col gap-6">
            <div class="p-4 flex flex-col justify-center">
              <Textarea v-model="textareaValue" rows="2" class="w-full" />
            </div>
            <div class="flex justify-end">
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

const activeTab = ref('0');
const selectedOption = ref('');
const sliderValue = ref(50);
const textareaValue = ref('');
</script>