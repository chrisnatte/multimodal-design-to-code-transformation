<template>
    <div class="p-6 max-w-2xl bg-white">
        <Tabs value="0">
            <TabList>
                <Tab value="0">Schritt 1</Tab>
                <Tab value="1">Schritt 2</Tab>
                <Tab value="2">Schritt 3</Tab>
            </TabList>
            <TabPanels>
                <TabPanel value="0">
                    <div class="flex flex-col gap-4 pt-4 pb-8">
                        <div class="flex items-center gap-3">
                            <RadioButton v-model="selectedOption" inputId="option1" name="option" value="Option1" />
                            <label for="option1" class="text-gray-700">Option1</label>
                        </div>
                        <div class="flex items-center gap-3">
                            <RadioButton v-model="selectedOption" inputId="option2" name="option" value="Option2" />
                            <label for="option2" class="text-gray-700">Option2</label>
                        </div>
                        <div class="flex items-center gap-3">
                            <RadioButton v-model="selectedOption" inputId="option3" name="option" value="Option3" />
                            <label for="option3" class="text-gray-700">Option3</label>
                        </div>
                    </div>
                    <div class="flex justify-end mt-4">
                        <Button label="Weiter" outlined class="!text-emerald-500 !border-emerald-200 hover:!bg-emerald-50" />
                    </div>
                </TabPanel>
                <TabPanel value="1">
                </TabPanel>
                <TabPanel value="2">
                </TabPanel>
            </TabPanels>
        </Tabs>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import RadioButton from 'primevue/radiobutton';
import Button from 'primevue/button';

const selectedOption = ref(null);
</script>