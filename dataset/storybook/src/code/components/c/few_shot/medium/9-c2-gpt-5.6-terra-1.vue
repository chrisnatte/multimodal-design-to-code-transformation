<template>
  <div class="w-full max-w-[592px] p-6">
    <Tabs v-model:value="activeStep">
      <TabList>
        <Tab value="1">Schritt 1</Tab>
        <Tab value="2">Schritt 2</Tab>
        <Tab value="3">Schritt 3</Tab>
      </TabList>

      <TabPanels>
        <TabPanel value="1">
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

            <div class="mt-3 flex justify-end">
              <Button label="Weiter" severity="success" outlined size="small" @click="activeStep = '2'" />
            </div>
          </div>
        </TabPanel>

        <TabPanel value="2">
          <div class="h-32"></div>
        </TabPanel>

        <TabPanel value="3">
          <div class="h-32"></div>
        </TabPanel>
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

const activeStep = ref('1')
const selectedOption = ref('')
</script>