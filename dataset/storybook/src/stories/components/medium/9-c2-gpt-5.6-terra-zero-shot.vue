<template>
    <div class="min-h-screen bg-white p-6">
        <Tabs v-model:value="activeTab" class="max-w-[544px]">
            <TabList>
                <Tab value="1">Schritt 1</Tab>
                <Tab value="2">Schritt 2</Tab>
                <Tab value="3">Schritt 3</Tab>
            </TabList>

            <TabPanels>
                <TabPanel value="1" class="px-4 pt-3 pb-4">
                    <div class="flex flex-col gap-3">
                        <div class="flex items-center gap-2">
                            <RadioButton v-model="selectedOption" inputId="option1" name="option" value="Option1" />
                            <label for="option1">Option1</label>
                        </div>
                        <div class="flex items-center gap-2">
                            <RadioButton v-model="selectedOption" inputId="option2" name="option" value="Option2" />
                            <label for="option2">Option2</label>
                        </div>
                        <div class="flex items-center gap-2">
                            <RadioButton v-model="selectedOption" inputId="option3" name="option" value="Option3" />
                            <label for="option3">Option3</label>
                        </div>
                    </div>

                    <div class="mt-5 flex justify-end">
                        <Button label="Weiter" outlined @click="activeTab = '2'" />
                    </div>
                </TabPanel>

                <TabPanel value="2" class="p-4">
                    <div class="flex justify-end">
                        <Button label="Weiter" outlined @click="activeTab = '3'" />
                    </div>
                </TabPanel>

                <TabPanel value="3" class="p-4">
                    <div class="flex justify-end">
                        <Button label="Weiter" outlined @click="activeTab = '1'" />
                    </div>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import RadioButton from 'primevue/radiobutton';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';

const activeTab = ref('1');
const selectedOption = ref('');
</script>