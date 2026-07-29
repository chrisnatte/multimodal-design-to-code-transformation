<template>
  <div class="p-4 max-w-2xl mx-auto">
    <Tabs value="0">
      <TabList>
        <Tab value="0" class="text-emerald-500 font-semibold border-b-2 border-emerald-500">Schritt 1</Tab>
        <Tab value="1" class="text-slate-500 font-semibold">Schritt 2</Tab>
        <Tab value="2" class="text-slate-500 font-semibold">Schritt 3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <div class="flex flex-col gap-4 mt-4">
            <div class="flex items-center gap-2">
              <RadioButton v-model="selectedOption" inputId="option1" name="option" value="Option1" />
              <label for="option1" class="text-slate-600">Option1</label>
            </div>
            <div class="flex items-center gap-2">
              <RadioButton v-model="selectedOption" inputId="option2" name="option" value="Option2" />
              <label for="option2" class="text-slate-600">Option2</label>
            </div>
            <div class="flex items-center gap-2">
              <RadioButton v-model="selectedOption" inputId="option3" name="option" value="Option3" />
              <label for="option3" class="text-slate-600">Option3</label>
            </div>
          </div>
          <div class="flex justify-end mt-8">
            <Button label="Weiter" outlined class="text-emerald-500 border-emerald-200 hover:bg-emerald-50" />
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