<template>
  <div class="flex flex-col w-full">
    <Tabs v-model:value="state.activeTab" class="w-full">
      <TabList class="flex w-full justify-end">
        <Tab value="0">Schritt 1</Tab>
        <Tab value="1">Schritt 2</Tab>
        <Tab value="2">Schritt 3</Tab>
      </TabList>
      <TabPanels class="flex flex-col w-full px-4 py-3">
        <TabPanel value="0">
          <div class="flex flex-col gap-6 w-full">
            <div class="flex flex-col items-center gap-4">
              <div class="flex items-center gap-2">
                <RadioButton v-model="state.step1Option" inputId="option1" name="step1" value="Option1" />
                <label for="option1">Option1</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton v-model="state.step1Option" inputId="option2" name="step1" value="Option2" />
                <label for="option2">Option2</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton v-model="state.step1Option" inputId="option3" name="step1" value="Option3" />
                <label for="option3">Option3</label>
              </div>
            </div>
            <div class="flex flex-col gap-2">
              <Button label="Weiter" outlined @click="state.activeTab = '1'" />
            </div>
          </div>
        </TabPanel>
        <TabPanel value="1">
          <div class="flex flex-col gap-6 w-full">
            <div class="flex flex-col w-full px-8 py-4">
              <Slider v-model="state.step2Value" />
            </div>
            <div class="flex flex-col gap-2">
              <Button label="Weiter" outlined @click="state.activeTab = '2'" />
            </div>
          </div>
        </TabPanel>
        <TabPanel value="2">
          <div class="flex flex-col gap-6 w-full">
            <div class="flex flex-col items-center w-full p-4">
              <Textarea v-model="state.step3Text" placeholder="Placeholder" rows="5" class="w-full" />
            </div>
            <div class="flex flex-col gap-2">
              <Button label="Speichern" />
            </div>
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import RadioButton from 'primevue/radiobutton';
import Button from 'primevue/button';
import Slider from 'primevue/slider';
import Textarea from 'primevue/textarea';

const state = reactive({
  activeTab: '0',
  step1Option: null,
  step2Value: 0,
  step3Text: ''
});
</script>