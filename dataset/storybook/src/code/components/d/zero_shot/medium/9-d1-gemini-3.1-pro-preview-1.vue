<template>
  <div class="p-6 bg-white flex flex-col gap-2.5 w-full max-w-[592px]">
    <Tabs value="0">
      <TabList>
        <Tab value="0">Schritt 1</Tab>
        <Tab value="1">Schritt 2</Tab>
        <Tab value="2">Schritt 3</Tab>
      </TabList>
      <TabPanels class="pt-3 pb-4 px-4">
        <!-- Tab 1 -->
        <TabPanel value="0">
          <div class="flex flex-col gap-6">
            <div class="flex flex-col gap-4 items-start">
              <div class="flex items-center gap-2">
                <RadioButton v-model="selectedOption" inputId="option1" name="option" value="Option1" />
                <label for="option1" class="text-sm text-surface-700 font-normal">Option1</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton v-model="selectedOption" inputId="option2" name="option" value="Option2" />
                <label for="option2" class="text-sm text-surface-700 font-normal">Option2</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton v-model="selectedOption" inputId="option3" name="option" value="Option3" />
                <label for="option3" class="text-sm text-surface-700 font-normal">Option3</label>
              </div>
            </div>
            <div class="flex flex-col items-end mt-2">
              <Button label="Weiter" outlined severity="success" />
            </div>
          </div>
        </TabPanel>

        <!-- Tab 2 -->
        <TabPanel value="1">
          <div class="flex flex-col gap-6">
            <div class="py-4 px-8 flex flex-col w-full">
              <Slider v-model="sliderValue" class="w-full" />
            </div>
            <div class="flex flex-col items-end mt-2">
              <Button label="Weiter" outlined severity="success" />
            </div>
          </div>
        </TabPanel>

        <!-- Tab 3 -->
        <TabPanel value="2">
          <div class="flex flex-col gap-6">
            <div class="p-4 flex flex-col w-full">
              <Textarea v-model="textValue" rows="2" class="w-full" />
            </div>
            <div class="flex flex-col items-end mt-2">
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
import Button from 'primevue/button';
import Slider from 'primevue/slider';
import Textarea from 'primevue/textarea';

const selectedOption = ref(null);
const sliderValue = ref(0);
const textValue = ref('');
</script>