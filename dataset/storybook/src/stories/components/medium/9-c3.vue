<template>
  <div class="w-full min-h-[260px] bg-white p-6">
    <Tabs v-model:value="state.activeTab" class="w-full">
      <TabList>
        <Tab value="0">Schritt 1</Tab>
        <Tab value="1">Schritt 2</Tab>
        <Tab value="2">Schritt 3</Tab>
      </TabList>

      <TabPanels>
        <TabPanel value="0">
          <div class="flex flex-col gap-4 pt-4">
            <div class="flex items-center">
              <RadioButton v-model="state.selectedOption" inputId="option1" name="options" value="Option1" />
              <label for="option1" class="ml-3 text-slate-700">Option1</label>
            </div>

            <div class="flex items-center">
              <RadioButton v-model="state.selectedOption" inputId="option2" name="options" value="Option2" />
              <label for="option2" class="ml-3 text-slate-700">Option2</label>
            </div>

            <div class="flex items-center">
              <RadioButton v-model="state.selectedOption" inputId="option3" name="options" value="Option3" />
              <label for="option3" class="ml-3 text-slate-700">Option3</label>
            </div>

            <div class="flex justify-end pt-4">
              <Button
                label="Weiter"
                outlined
                severity="success"
                @click="goNext"
              />
            </div>
          </div>
        </TabPanel>

        <TabPanel value="1">
          <div class="pt-4 text-slate-600"> </div>
        </TabPanel>

        <TabPanel value="2">
          <div class="pt-4 text-slate-600"> </div>
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

const state = reactive({
  activeTab: '0',
  selectedOption: null
});

const goNext = () => {
  if (state.activeTab === '0') state.activeTab = '1';
  else if (state.activeTab === '1') state.activeTab = '2';
};
</script>