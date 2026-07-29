<template>
    <div class="flex min-h-[490.5px] w-[592px] flex-col gap-2.5 bg-white p-6">
        <Tabs v-model:value="activeTab" class="w-full">
            <TabList class="h-[46px]">
                <Tab value="0" class="text-sm font-bold">Schritt 1</Tab>
                <Tab value="1" class="text-sm font-bold">Schritt 2</Tab>
                <Tab value="2" class="text-sm font-bold">Schritt 3</Tab>
            </TabList>

            <TabPanels class="px-4 pb-4 pt-3">
                <TabPanel value="0" class="p-0">
                    <div class="flex flex-col gap-6">
                        <div class="flex w-fit flex-col gap-4">
                            <div class="flex items-center gap-2">
                                <RadioButton v-model="selectedOption" inputId="option1" name="option" value="Option1" />
                                <label for="option1" class="text-sm">Option1</label>
                            </div>
                            <div class="flex items-center gap-2">
                                <RadioButton v-model="selectedOption" inputId="option2" name="option" value="Option2" />
                                <label for="option2" class="text-sm">Option2</label>
                            </div>
                            <div class="flex items-center gap-2">
                                <RadioButton v-model="selectedOption" inputId="option3" name="option" value="Option3" />
                                <label for="option3" class="text-sm">Option3</label>
                            </div>
                        </div>

                        <div class="flex h-[33px] items-end justify-end">
                            <Button label="Weiter" outlined size="small" @click="nextStep" />
                        </div>
                    </div>
                </TabPanel>

                <TabPanel value="1" class="p-0">
                    <div class="flex flex-col gap-6">
                        <div class="flex h-12 items-center px-8">
                            <Slider v-model="sliderValue" :min="0" :max="100" class="w-full" />
                        </div>

                        <div class="flex h-[33px] items-end justify-end">
                            <Button label="Weiter" outlined size="small" @click="nextStep" />
                        </div>
                    </div>
                </TabPanel>

                <TabPanel value="2" class="p-0">
                    <div class="flex flex-col gap-6">
                        <div class="flex items-center px-4 py-4">
                            <Textarea
                                v-model="notes"
                                class="h-[33px] w-full resize-none"
                                aria-label="Notiz"
                            />
                        </div>

                        <div class="flex h-[33px] items-end justify-end">
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

const nextStep = () => {
    if (activeTab.value === '0') {
        activeTab.value = '1'
    } else if (activeTab.value === '1') {
        activeTab.value = '2'
    }
}
</script>