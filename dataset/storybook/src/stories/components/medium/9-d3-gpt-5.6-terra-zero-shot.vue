<template>
    <div class="w-[544px] bg-white">
        <Tabs v-model:value="activeTab">
            <TabList class="h-[46px] border-b border-slate-200">
                <Tab value="0" class="h-[46px] px-4 text-sm font-bold">
                    Schritt 1
                </Tab>
                <Tab value="1" class="h-[46px] px-4 text-sm font-bold">
                    Schritt 2
                </Tab>
                <Tab value="2" class="h-[46px] px-4 text-sm font-bold">
                    Schritt 3
                </Tab>
            </TabList>

            <TabPanels class="!p-0">
                <TabPanel value="0" class="!px-4 !pt-3 !pb-4">
                    <div class="flex flex-col gap-6">
                        <div class="flex w-fit flex-col gap-4">
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

                        <div class="flex justify-end">
                            <Button label="Weiter" outlined size="small" @click="activeTab = '1'" />
                        </div>
                    </div>
                </TabPanel>

                <TabPanel value="1" class="!px-4 !pt-3 !pb-4">
                    <div class="flex flex-col gap-6">
                        <div class="px-8 py-4">
                            <Slider v-model="sliderValue" class="w-full" />
                        </div>

                        <div class="flex justify-end">
                            <Button label="Weiter" outlined size="small" @click="activeTab = '2'" />
                        </div>
                    </div>
                </TabPanel>

                <TabPanel value="2" class="!px-4 !pt-3 !pb-4">
                    <div class="flex flex-col gap-6">
                        <div class="px-4 py-4">
                            <Textarea v-model="notes" rows="1" class="h-[33px] w-full resize-none" />
                        </div>

                        <div class="flex justify-end">
                            <Button label="Speichern" size="small" />
                        </div>
                    </div>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import RadioButton from 'primevue/radiobutton'
import Slider from 'primevue/slider'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import Textarea from 'primevue/textarea'

const activeTab = ref('0')
const selectedOption = ref(null)
const sliderValue = ref(0)
const notes = ref('')
</script>