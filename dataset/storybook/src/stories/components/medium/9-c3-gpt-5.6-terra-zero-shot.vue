<template>
    <main class="w-[592px] min-h-[264px] bg-white px-6 pt-9">
        <Tabs v-model:value="activeTab" class="w-full">
            <TabList>
                <Tab value="1" class="px-4">Schritt 1</Tab>
                <Tab value="2" class="px-4">Schritt 2</Tab>
                <Tab value="3" class="px-4">Schritt 3</Tab>
            </TabList>

            <TabPanels class="p-0">
                <TabPanel value="1" class="px-4 pt-3 pb-0">
                    <div class="flex flex-col gap-3">
                        <div class="flex items-center gap-2">
                            <RadioButton v-model="selectedOption" input-id="option1" name="options" value="Option1" />
                            <label for="option1" class="text-sm text-slate-700">Option1</label>
                        </div>

                        <div class="flex items-center gap-2">
                            <RadioButton v-model="selectedOption" input-id="option2" name="options" value="Option2" />
                            <label for="option2" class="text-sm text-slate-700">Option2</label>
                        </div>

                        <div class="flex items-center gap-2">
                            <RadioButton v-model="selectedOption" input-id="option3" name="options" value="Option3" />
                            <label for="option3" class="text-sm text-slate-700">Option3</label>
                        </div>

                        <div class="flex justify-end pt-3">
                            <Button label="Weiter" outlined size="small" />
                        </div>
                    </div>
                </TabPanel>

                <TabPanel value="2" class="p-0"></TabPanel>
                <TabPanel value="3" class="p-0"></TabPanel>
            </TabPanels>
        </Tabs>
    </main>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import RadioButton from 'primevue/radiobutton'
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import TabPanel from 'primevue/tabpanel'
import TabPanels from 'primevue/tabpanels'
import Tabs from 'primevue/tabs'

const activeTab = ref('1')
const selectedOption = ref(null)
</script>