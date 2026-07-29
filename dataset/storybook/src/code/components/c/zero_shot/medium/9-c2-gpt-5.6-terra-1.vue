<template>
    <main class="min-h-screen bg-white px-6 pt-6">
        <Tabs v-model:value="activeTab">
            <TabList>
                <Tab value="1">Schritt 1</Tab>
                <Tab value="2">Schritt 2</Tab>
                <Tab value="3">Schritt 3</Tab>
            </TabList>

            <TabPanels>
                <TabPanel value="1">
                    <div class="flex flex-col gap-3">
                        <div v-for="option in options" :key="option" class="flex items-center gap-2">
                            <RadioButton v-model="selectedOption" name="option" :input-id="option" :value="option" />
                            <label :for="option">{{ option }}</label>
                        </div>
                    </div>

                    <div class="mt-5 flex justify-end">
                        <Button label="Weiter" outlined />
                    </div>
                </TabPanel>

                <TabPanel value="2" />
                <TabPanel value="3" />
            </TabPanels>
        </Tabs>
    </main>
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
const options = ref(['Option1', 'Option2', 'Option3']);
</script>