<template>
  <Tabs :value="step">
    <TabList>
      <Tab :value="0">Schritt 1</Tab>
      <Tab :value="1">Schritt 2</Tab>
      <Tab :value="2">Schritt 3</Tab>
    </TabList>

    <TabPanels>
      <TabPanel :value="0">
        <div class="flex flex-col gap-6 py-3">
          <div class="flex w-fit flex-col gap-4">
            <div class="flex items-center gap-2">
              <RadioButton input-id="option1" name="group" value="option1" />
              <label for="option1">Option 1</label>
            </div>

            <div class="flex items-center gap-2">
              <RadioButton input-id="option2" name="group" value="option2" />
              <label for="option2">Option 2</label>
            </div>

            <div class="flex items-center gap-2">
              <RadioButton input-id="option3" name="group" value="option3" />
              <label for="option3">Option 3</label>
            </div>
          </div>

          <Button label="Weiter" severity="primary" outlined class="self-end" @click="step++" />
        </div>
      </TabPanel>

      <TabPanel :value="1">
        <div class="flex flex-col gap-6 py-3">
          <Slider orientation="horizontal" />
          <Button label="Weiter" severity="primary" outlined class="self-end" @click="step++" />
        </div>
      </TabPanel>

      <TabPanel :value="2">
        <div class="flex flex-col gap-6 py-3">
          <Textarea class="w-full" />
          <Button label="Speichern" severity="primary" class="self-end" />
        </div>
      </TabPanel>
    </TabPanels>
  </Tabs>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Tab from 'primevue/tab'
  import Tabs from 'primevue/tabs'
  import Slider from 'primevue/slider'
  import Button from 'primevue/button'
  import TabList from 'primevue/tablist'
  import TabPanel from 'primevue/tabpanel'
  import Textarea from 'primevue/textarea'
  import TabPanels from 'primevue/tabpanels'
  import RadioButton from 'primevue/radiobutton'

  const step = ref(0)
</script>
