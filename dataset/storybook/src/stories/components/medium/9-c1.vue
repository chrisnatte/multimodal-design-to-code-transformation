<template>
  <div class="w-full min-h-[260px] bg-white p-6">
    <div class="flex flex-col gap-6">
      <Tabs v-model:value="state.activeTab">
        <TabList>
          <Tab value="1">Schritt 1</Tab>
          <Tab value="2">Schritt 2</Tab>
          <Tab value="3">Schritt 3</Tab>
        </TabList>
      </Tabs>

      <div class="flex flex-col gap-4 pl-1">
        <div class="flex items-center gap-3">
          <RadioButton v-model="state.selectedOption" inputId="option1" name="options" value="Option1" />
          <label for="option1" class="text-slate-700 text-2xl leading-none">Option1</label>
        </div>
        <div class="flex items-center gap-3">
          <RadioButton v-model="state.selectedOption" inputId="option2" name="options" value="Option2" />
          <label for="option2" class="text-slate-700 text-2xl leading-none">Option2</label>
        </div>
        <div class="flex items-center gap-3">
          <RadioButton v-model="state.selectedOption" inputId="option3" name="options" value="Option3" />
          <label for="option3" class="text-slate-700 text-2xl leading-none">Option3</label>
        </div>
      </div>

      <div class="flex justify-end pt-2">
        <Button label="Weiter" outlined severity="success" class="px-6" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import RadioButton from 'primevue/radiobutton'
import Button from 'primevue/button'

const state = reactive({
  activeTab: '1',
  selectedOption: null
})
</script>