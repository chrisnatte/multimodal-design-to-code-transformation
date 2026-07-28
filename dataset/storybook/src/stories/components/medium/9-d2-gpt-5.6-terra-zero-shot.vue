<template>
    <main class="min-h-screen bg-white p-6">
        <Tabs v-model:value="activeTab" class="w-full max-w-[544px]">
            <TabList>
                <Tab value="1">Schritt 1</Tab>
                <Tab value="2">Schritt 2</Tab>
                <Tab value="3">Schritt 3</Tab>
            </TabList>

            <TabPanels class="px-4 pt-3 pb-4">
                <TabPanel value="1" class="p-0">
                    <div class="flex flex-col gap-6">
                        <div class="flex flex-col gap-4">
                            <div class="flex items-center gap-2">
                                <RadioButton v-model="selectedOption" input-id="option1" name="options" value="Option1" />
                                <label for="option1" class="text-sm">Option1</label>
                            </div>

                            <div class="flex items-center gap-2">
                                <RadioButton v-model="selectedOption" input-id="option2" name="options" value="Option2" />
                                <label for="option2" class="text-sm">Option2</label>
                            </div>

                            <div class="flex items-center gap-2">
                                <RadioButton v-model="selectedOption" input-id="option3" name="options" value="Option3" />
                                <label for="option3" class="text-sm">Option3</label>
                            </div>
                        </div>

                        <div class="flex justify-end">
                            <Button label="Weiter" outlined size="small" @click="activeTab = '2'" />
                        </div>
                    </div>
                </TabPanel>

                <TabPanel value="2" class="p-0">
                    <div class="flex flex-col gap-6">
                        <div class="px-8 py-4">
                            <Slider v-model="sliderValue" class="w-full" />
                        </div>

                        <div class="flex justify-end">
                            <Button label="Weiter" outlined size="small" @click="activeTab = '3'" />
                        </div>
                    </div>
                </TabPanel>

                <TabPanel value="3" class="p-0">
                    <div class="flex flex-col gap-6">
                        <div class="px-4 py-4">
                            <Textarea v-model="message" class="h-8 w-full resize-none" rows="1" />
                        </div>

                        <div class="flex justify-end">
                            <Button label="Speichern" size="small" />
                        </div>
                    </div>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </main>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import RadioButton from 'primevue/radiobutton';
import Slider from 'primevue/slider';
import Tabs from 'primevue/tabs';
import Tab from 'primevue/tab';
import TabList from 'primevue/tablist';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import Textarea from 'primevue/textarea';

const activeTab = ref('1');
const selectedOption = ref(null);
const sliderValue = ref(0);
const message = ref('');
</script>