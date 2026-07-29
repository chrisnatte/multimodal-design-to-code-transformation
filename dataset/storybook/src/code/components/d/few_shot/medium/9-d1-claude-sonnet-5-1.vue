<template>
  <Tabs value="0" class="w-[592px] p-6">
    <TabList>
      <Tab value="0">Schritt 1</Tab>
      <Tab value="1">Schritt 2</Tab>
      <Tab value="2">Schritt 3</Tab>
    </TabList>
    <TabPanels>
      <TabPanel value="0">
        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-4">
            <div v-for="option in options" :key="option.value" class="flex items-center gap-2">
              <RadioButton v-model="selectedOption" :input-id="option.value" :value="option.value" />
              <label :for="option.value">{{ option.label }}</label>
            </div>
          </div>
          <div class="flex justify-end">
            <Button label="Weiter" severity="primary" outlined />
          </div>
        </div>
      </TabPanel>
      <TabPanel value="1">
        <div class="flex flex-col gap-6">
          <div class="px-8 py-4">
            <Slider v-model="sliderValue" />
          </div>
          <div class="flex justify-end">
            <Button label="Weiter" severity="primary" outlined />
          </div>
        </div>
      </TabPanel>
      <TabPanel value="2">
        <div class="flex flex-col gap-6">
          <div class="p-4">
            <Textarea v-model="feedback" class="w-full" />
          </div>
          <div class="flex justify-end">
            <Button label="Speichern" severity="primary" />
          </div>
        </div>
      </TabPanel>
    </TabPanels>
  </Tabs>
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
  import Slider from 'primevue/slider'
  import Textarea from 'primevue/textarea'

  const options = [
    { label: 'Option1', value: 'option1' },
    { label: 'Option2', value: 'option2' },
    { label: 'Option3', value: 'option3' },
  ]

  const selectedOption = ref('')
  const sliderValue = ref(0)
  const feedback = ref('')
</script>