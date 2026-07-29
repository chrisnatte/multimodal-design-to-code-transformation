<template>
  <div class="w-[592px] bg-white p-6">
    <Tabs value="0">
      <TabList>
        <Tab value="0">Schritt 1</Tab>
        <Tab value="1">Schritt 2</Tab>
        <Tab value="2">Schritt 3</Tab>
      </TabList>
      <TabPanels class="!p-4">
        <TabPanel value="0">
          <div class="flex flex-col gap-6">
            <div class="flex flex-col gap-4">
              <div class="flex items-center gap-2">
                <RadioButton v-model="selectedOption" input-id="option1" value="Option1" />
                <label for="option1" class="text-sm text-surface-700">Option1</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton v-model="selectedOption" input-id="option2" value="Option2" />
                <label for="option2" class="text-sm text-surface-700">Option2</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton v-model="selectedOption" input-id="option3" value="Option3" />
                <label for="option3" class="text-sm text-surface-700">Option3</label>
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
              <Slider v-model="sliderValue" class="w-full" />
            </div>
            <div class="flex justify-end">
              <Button label="Weiter" severity="primary" outlined />
            </div>
          </div>
        </TabPanel>
        <TabPanel value="2">
          <div class="flex flex-col gap-6">
            <div class="p-4">
              <Textarea v-model="textValue" class="w-full" rows="2" />
            </div>
            <div class="flex justify-end">
              <Button label="Speichern" severity="primary" />
            </div>
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>
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
  import Slider from 'primevue/slider'
  import Textarea from 'primevue/textarea'

  const selectedOption = ref('')
  const sliderValue = ref(0)
  const textValue = ref('')
</script>