<template>
    <div class="w-full max-w-[592px] px-6 pt-8">
        <Tabs v-model:value="activeTab">
            <TabList>
                <Tab value="step1" class="font-semibold">Schritt 1</Tab>
                <Tab value="step2" class="font-semibold">Schritt 2</Tab>
                <Tab value="step3" class="font-semibold">Schritt 3</Tab>
            </TabList>

            <TabPanels class="pt-3">
                <TabPanel value="step1" class="p-0">
                    <div class="flex flex-col gap-3 pl-4">
                        <div class="flex items-center gap-2">
                            <RadioButton v-model="selectedOption" input-id="option1" name="option" value="Option1" />
                            <label for="option1" class="text-sm text-slate-700">Option1</label>
                        </div>
                        <div class="flex items-center gap-2">
                            <RadioButton v-model="selectedOption" input-id="option2" name="option" value="Option2" />
                            <label for="option2" class="text-sm text-slate-700">Option2</label>
                        </div>
                        <div class="flex items-center gap-2">
                            <RadioButton v-model="selectedOption" input-id="option3" name="option" value="Option3" />
                            <label for="option3" class="text-sm text-slate-700">Option3</label>
                        </div>
                    </div>

                    <div class="flex justify-end pt-6 pr-4">
                        <Button label="Weiter" outlined size="small" @click="activeTab = 'step2'" />
                    </div>
                </TabPanel>

                <TabPanel value="step2" class="p-0">
                    <div class="flex justify-end pt-6 pr-4">
                        <Button label="Weiter" outlined size="small" @click="activeTab = 'step3'" />
                    </div>
                </TabPanel>

                <TabPanel value="step3" class="p-0" />
            </TabPanels>
        </Tabs>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import RadioButton from 'primevue/radiobutton';
import Tab from 'primevue/tab';
import TabList from 'primevue/tablist';
import TabPanel from 'primevue/tabpanel';
import TabPanels from 'primevue/tabpanels';
import Tabs from 'primevue/tabs';

const activeTab = ref('step1');
const selectedOption = ref(null);
</script>