<template>
  <div class="w-[592px] rounded-md bg-white p-6">
    <Tabs value="0">
      <TabList>
        <Tab value="0">Schritt 1</Tab>
        <Tab value="1">Schritt 2</Tab>
        <Tab value="2">Schritt 3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <div class="flex flex-col gap-6">
            <div class="flex flex-col items-center gap-4">
              <div class="flex items-center gap-2">
                <RadioButton v-model="step1Option" input-id="option1" name="step1Option" value="Option1" />
                <label for="option1">Option1</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton v-model="step1Option" input-id="option2" name="step1Option" value="Option2" />
                <label for="option2">Option2</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton v-model="step1Option" input-id="option3" name="step1Option" value="Option3" />
                <label for="option3">Option3</label>
              </div>
            </div>
            <div class="flex justify-end">
              <Button label="Weiter" severity="primary" outlined />
            </div>
          </div>
        </TabPanel>
        <TabPanel value="1">
          <div class="flex flex-col gap-6">
            <div class="flex flex-col items-center justify-between gap-4 px-8 py-4">
              <Slider v-model="sliderValue" class="w-full" />
            </div>
            <div class="flex justify-end">
              <Button label="Weiter" severity="primary" outlined />
            </div>
          </div>
        </TabPanel>
        <TabPanel value="2">
          <div class="flex flex-col gap-6">
            <div class="flex flex-col items-center justify-center gap-4 p-4">
              <Textarea v-model="feedback" placeholder="Placeholder" class="w-full" />
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
  import Slider from 'primevue/slider'
  import Textarea from 'primevue/textarea'
  import Button from 'primevue/button'

  const step1Option = ref('')
  const sliderValue = ref(50)
  const feedback = ref('')
</script>