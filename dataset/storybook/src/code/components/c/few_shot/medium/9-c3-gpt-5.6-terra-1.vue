<template>
  <div class="w-[592px] p-6">
    <Tabs v-model:value="activeStep">
      <TabList>
        <Tab value="0">Schritt 1</Tab>
        <Tab value="1">Schritt 2</Tab>
        <Tab value="2">Schritt 3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0" class="!px-4 !py-2">
          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-2">
              <RadioButton v-model="selectedOption" input-id="option1" name="option" value="Option1" />
              <label for="option1" class="text-sm">Option1</label>
            </div>
            <div class="flex items-center gap-2">
              <RadioButton v-model="selectedOption" input-id="option2" name="option" value="Option2" />
              <label for="option2" class="text-sm">Option2</label>
            </div>
            <div class="flex items-center gap-2">
              <RadioButton v-model="selectedOption" input-id="option3" name="option" value="Option3" />
              <label for="option3" class="text-sm">Option3</label>
            </div>
          </div>
          <div class="mt-6 flex justify-end">
            <Button label="Weiter" severity="primary" outlined size="small" />
          </div>
        </TabPanel>
        <TabPanel value="1"></TabPanel>
        <TabPanel value="2"></TabPanel>
      </TabPanels>
    </Tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import RadioButton from 'primevue/radiobutton'
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import TabPanel from 'primevue/tabpanel'
import TabPanels from 'primevue/tabpanels'
import Tabs from 'primevue/tabs'

const activeStep = ref('0')
const selectedOption = ref('')
</script>