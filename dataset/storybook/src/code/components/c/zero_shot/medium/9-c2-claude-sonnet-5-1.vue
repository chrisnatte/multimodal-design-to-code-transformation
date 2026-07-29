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
          <div class="flex flex-col gap-4 pt-4">
            <div class="flex items-center gap-2">
              <RadioButton v-model="selectedOption" inputId="option1" name="option" value="Option1" />
              <label for="option1">Option1</label>
            </div>
            <div class="flex items-center gap-2">
              <RadioButton v-model="selectedOption" inputId="option2" name="option" value="Option2" />
              <label for="option2">Option2</label>
            </div>
            <div class="flex items-center gap-2">
              <RadioButton v-model="selectedOption" inputId="option3" name="option" value="Option3" />
              <label for="option3">Option3</label>
            </div>
          </div>
          <div class="flex justify-end mt-8">
            <Button label="Weiter" outlined />
          </div>
        </TabPanel>
        <TabPanel value="1">
          <p class="m-0">Schritt 2 Inhalt</p>
        </TabPanel>
        <TabPanel value="2">
          <p class="m-0">Schritt 3 Inhalt</p>
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