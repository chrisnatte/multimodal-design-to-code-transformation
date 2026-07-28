<template>
  <div class="card">
    <Tabs v-model:value="activeTab">
      <TabList>
        <Tab value="0">Schritt 1</Tab>
        <Tab value="1">Schritt 2</Tab>
        <Tab value="2">Schritt 3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-2">
              <RadioButton v-model="selectedOption" inputId="option1" name="option" value="Option1" />
              <label for="option1" class="cursor-pointer">Option1</label>
            </div>
            <div class="flex items-center gap-2">
              <RadioButton v-model="selectedOption" inputId="option2" name="option" value="Option2" />
              <label for="option2" class="cursor-pointer">Option2</label>
            </div>
            <div class="flex items-center gap-2">
              <RadioButton v-model="selectedOption" inputId="option3" name="option" value="Option3" />
              <label for="option3" class="cursor-pointer">Option3</label>
            </div>
          </div>
          <div class="flex justify-end mt-6">
            <Button label="Weiter" outlined severity="success" />
          </div>
        </TabPanel>
        <TabPanel value="1"></TabPanel>
        <TabPanel value="2"></TabPanel>
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

const activeTab = ref('0');
const selectedOption = ref('');
</script>