<template>
  <div class="p-6">
    <Tabs value="0">
      <TabList>
        <Tab value="0">Schritt 1</Tab>
        <Tab value="1">Schritt 2</Tab>
        <Tab value="2">Schritt 3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <div class="flex flex-col gap-3 py-4">
            <div class="flex items-center gap-2">
              <RadioButton v-model="selectedOption" inputId="opt1" value="Option1" />
              <label for="opt1">Option1</label>
            </div>
            <div class="flex items-center gap-2">
              <RadioButton v-model="selectedOption" inputId="opt2" value="Option2" />
              <label for="opt2">Option2</label>
            </div>
            <div class="flex items-center gap-2">
              <RadioButton v-model="selectedOption" inputId="opt3" value="Option3" />
              <label for="opt3">Option3</label>
            </div>
          </div>
          <div class="flex justify-end">
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

const selectedOption = ref('');
</script>