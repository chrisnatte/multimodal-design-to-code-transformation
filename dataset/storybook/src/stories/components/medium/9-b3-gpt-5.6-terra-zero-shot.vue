<template>
    <div class="flex w-[544px] flex-col">
        <Tabs v-model:value="activeTab">
            <TabList class="flex h-[46px] w-full items-end border-b border-[#e2e8f0] bg-white">
                <Tab value="0" class="h-[46px] text-sm font-bold">Schritt 1</Tab>
                <Tab value="1" class="h-[46px] text-sm font-bold">Schritt 2</Tab>
                <Tab value="2" class="h-[46px] text-sm font-bold">Schritt 3</Tab>
            </TabList>

            <TabPanels class="bg-white">
                <TabPanel value="0" class="p-[15.75px] pt-[12.25px]">
                    <div class="flex flex-col gap-6">
                        <div class="flex w-fit flex-col gap-4">
                            <div class="flex items-center gap-2">
                                <RadioButton v-model="selectedOption" input-id="option1" name="option" value="Option1" />
                                <label for="option1" class="text-sm">Option1</label>
                            </div>
                            <div class="flex items-center gap-2">
                                <RadioButton v-model="selectedOption" input-id="option2" name="option" value="Option2" />
                                <label for="option2" class="text-sm">Option2</label>
                            </div>
                            <div class="flex items-center gap-2">
                                <RadioButton v-model="selectedOption" input-id="option3" name="option" value="Option3" />
                                <label for="option3" class="text-sm">Option3</label>
                            </div>
                        </div>

                        <div class="flex h-[33px] justify-end">
                            <Button label="Weiter" outlined class="h-[33px]" />
                        </div>
                    </div>
                </TabPanel>

                <TabPanel value="1" class="p-[15.75px] pt-[12.25px]">
                    <div class="flex flex-col gap-6">
                        <div class="flex h-[48px] w-full items-center px-8 py-4">
                            <Slider v-model="sliderValue" class="w-full" />
                        </div>

                        <div class="flex h-[33px] justify-end">
                            <Button label="Weiter" outlined class="h-[33px]" />
                        </div>
                    </div>
                </TabPanel>

                <TabPanel value="2" class="p-[15.75px] pt-[12.25px]">
                    <div class="flex flex-col gap-6">
                        <div class="flex w-full items-center p-4">
                            <InputTextarea v-model="message" class="h-[33px] w-full resize-none" rows="1" />
                        </div>

                        <div class="flex h-[33px] justify-end">
                            <Button label="Speichern" class="h-[33px]" />
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
import InputTextarea from 'primevue/inputtextarea'
import RadioButton from 'primevue/radiobutton'
import Slider from 'primevue/slider'
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import TabPanel from 'primevue/tabpanel'
import TabPanels from 'primevue/tabpanels'
import Tabs from 'primevue/tabs'

const activeTab = ref('0')
const selectedOption = ref(null)
const sliderValue = ref(0)
const message = ref('')
</script>