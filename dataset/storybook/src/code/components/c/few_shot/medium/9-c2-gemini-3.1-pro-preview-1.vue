<template>
  <div class="w-full max-w-2xl p-6">
    <Tabs value="0">
      <TabList>
        <Tab value="0">Schritt 1</Tab>
        <Tab value="1">Schritt 2</Tab>
        <Tab value="2">Schritt 3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <div class="flex flex-col gap-4 py-4">
            <div class="flex items-center gap-2">
              <RadioButton v-model="selectedOption" inputId="option1" name="option" value="Option1" />
              <label for="option1" class="text-slate-700">Option1</label>
            </div>
            <div class="flex items-center gap-2">
              <RadioButton v-model="selectedOption" inputId="option2" name="option" value="Option2" />
              <label for="option2" class="text-slate-700">Option2</label>
            </div>
            <div class="flex items-center gap-2">
              <RadioButton v-model="selectedOption" inputId="option3" name="option" value="Option3" />
              <label for="option3" class="text-slate-700">Option3</label>
            </div>
          </div>
          <div class="mt-8 flex justify-end">
            <Button label="Weiter" outlined severity="success" />
          </div>
        </TabPanel>
        <TabPanel value="1">
          <!-- Content for Schritt 2 -->
        </TabPanel>
        <TabPanel value="2">
          <!-- Content for Schritt 3 -->
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

const selectedOption = ref(null);
</script>