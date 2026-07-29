<template>
  <div class="w-xl p-6">
    <Tabs value="0">
      <TabList>
        <Tab value="0">Schritt 1</Tab>
        <Tab value="1">Schritt 2</Tab>
        <Tab value="2">Schritt 3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <div class="flex flex-col gap-3 pt-4">
            <div v-for="option in options" :key="option.value" class="flex items-center gap-2">
              <RadioButton v-model="selectedOption" :input-id="option.value" :value="option.value" name="option" />
              <label :for="option.value">{{ option.label }}</label>
            </div>
          </div>
        </TabPanel>
        <TabPanel value="1">
          <p class="m-0 pt-4">Inhalt für Schritt 2</p>
        </TabPanel>
        <TabPanel value="2">
          <p class="m-0 pt-4">Inhalt für Schritt 3</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
    <div class="mt-6 flex justify-end">
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

  const selectedOption = ref('')
  const options = [
    { label: 'Option1', value: 'option1' },
    { label: 'Option2', value: 'option2' },
    { label: 'Option3', value: 'option3' },
  ]
</script>