<template>
  <div class="flex flex-col gap-6 p-6">
    <Tabs v-model:value="activeTab">
      <TabList>
        <Tab value="0">Schritt 1</Tab>
        <Tab value="1">Schritt 2</Tab>
        <Tab value="2">Schritt 3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <div class="flex flex-col gap-3 py-4">
            <div class="flex items-center gap-2">
              <RadioButton v-model="selectedOption" input-id="option1" name="option" value="Option1" />
              <label for="option1">Option1</label>
            </div>
            <div class="flex items-center gap-2">
              <RadioButton v-model="selectedOption" input-id="option2" name="option" value="Option2" />
              <label for="option2">Option2</label>
            </div>
            <div class="flex items-center gap-2">
              <RadioButton v-model="selectedOption" input-id="option3" name="option" value="Option3" />
              <label for="option3">Option3</label>
            </div>
          </div>
        </TabPanel>
        <TabPanel value="1">
          <div class="py-4"></div>
        </TabPanel>
        <TabPanel value="2">
          <div class="py-4"></div>
        </TabPanel>
      </TabPanels>
    </Tabs>
    <div class="flex justify-end">
      <Button label="Weiter" severity="success" outlined />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Tabs from 'primevue/tabs'
  import TabList from 'primevue/tablist'
  import Tab from 'primevue/tab'
  import TabPanels from 'primevue/tabpanels'
  import TabPanel from 'primevue/tabpanel'
  import RadioButton from 'primevue/radiobutton'
  import Button from 'primevue/button'

  const activeTab = ref('0')
  const selectedOption = ref('')
</script>