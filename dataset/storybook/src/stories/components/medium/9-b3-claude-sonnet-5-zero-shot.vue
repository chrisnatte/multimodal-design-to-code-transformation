<template>
  <div class="flex flex-col w-full">
    <Tabs v-model:value="activeTab">
      <TabList>
        <Tab value="0">Schritt 1</Tab>
        <Tab value="1">Schritt 2</Tab>
        <Tab value="2">Schritt 3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <div class="flex flex-col gap-6 p-4">
            <div class="flex flex-col gap-4 items-center">
              <div class="flex items-center gap-2">
                <RadioButton v-model="option1" inputId="opt1" name="options1" value="Option1" />
                <label for="opt1">Option1</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton v-model="option1" inputId="opt2" name="options1" value="Option2" />
                <label for="opt2">Option2</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton v-model="option1" inputId="opt3" name="options1" value="Option3" />
                <label for="opt3">Option3</label>
              </div>
            </div>
            <div class="flex justify-end">
              <Button label="Weiter" outlined />
            </div>
          </div>
        </TabPanel>
        <TabPanel value="1">
          <div class="flex flex-col gap-6 p-4">
            <div class="flex flex-col gap-4 py-4 px-8">
              <Slider v-model="sliderValue" class="w-full" />
            </div>
            <div class="flex justify-end">
              <Button label="Weiter" outlined />
            </div>
          </div>
        </TabPanel>
        <TabPanel value="2">
          <div class="flex flex-col gap-6 p-4">
            <div class="flex flex-col p-4">
              <Textarea v-model="textareaValue" class="w-full" rows="3" placeholder="Placeholder" />
            </div>
            <div class="flex justify-end">
              <Button label="Speichern" severity="success" />
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
const option1 = ref(null);
const sliderValue = ref(0);
const textareaValue = ref('');
</script>