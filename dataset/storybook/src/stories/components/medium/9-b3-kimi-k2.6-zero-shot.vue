<template>
  <div class="flex flex-col">
    <Tabs v-model:value="activeTab">
      <TabList>
        <Tab value="0">Schritt 1</Tab>
        <Tab value="1">Schritt 2</Tab>
        <Tab value="2">Schritt 3</Tab>
      </TabList>
      <TabPanels class="p-4">
        <TabPanel value="0">
          <div class="flex flex-col gap-6">
            <div class="flex flex-col gap-4">
              <div class="flex items-center gap-2">
                <RadioButton v-model="selectedOption" value="Option1" inputId="opt1" />
                <label for="opt1">Option1</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton v-model="selectedOption" value="Option2" inputId="opt2" />
                <label for="opt2">Option2</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton v-model="selectedOption" value="Option3" inputId="opt3" />
                <label for="opt3">Option3</label>
              </div>
            </div>
            <div class="flex justify-end">
              <Button label="Weiter" outlined />
            </div>
          </div>
        </TabPanel>
        <TabPanel value="1">
          <div class="flex flex-col gap-6">
            <div class="px-8 py-4">
              <Slider v-model="sliderValue" class="w-full" />
            </div>
            <div class="flex justify-end">
              <Button label="Weiter" outlined />
            </div>
          </div>
        </TabPanel>
        <TabPanel value="2">
          <div class="flex flex-col gap-6">
            <div class="p-4">
              <Textarea v-model="textValue" rows="3" class="w-full" placeholder="Placeholder" />
            </div>
            <div class="flex justify-end">
              <Button label="Speichern" />
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
const sliderValue = ref(50);
const textValue = ref('');
</script>