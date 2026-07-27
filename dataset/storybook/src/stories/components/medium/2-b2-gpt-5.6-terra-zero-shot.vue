<template>
    <div class="flex w-[512px] flex-col bg-white">
        <Tabs v-model:value="activeTab" class="w-full">
            <TabList class="border-b border-slate-200 bg-white">
                <Tab value="0" class="flex items-center gap-[7px] px-[15.75px] py-[14px] text-sm font-bold">
                    <i class="pi pi-user-edit text-sm" />
                    <span>Profil &amp; Konto</span>
                </Tab>
                <Tab value="1" class="flex items-center gap-[7px] px-[15.75px] py-[14px] text-sm font-bold">
                    <i class="pi pi-shield text-sm" />
                    <span>Sicherheit &amp; Präferenzen</span>
                </Tab>
            </TabList>

            <TabPanels class="bg-white px-[15.75px] pb-[15.75px] pt-[12.25px]">
                <TabPanel value="0" class="px-0 py-3">
                    <div class="flex flex-col gap-5">
                        <div class="flex w-[216px] flex-col">
                            <label for="password" class="mb-[7px] text-sm">Passwort</label>
                            <Password
                                id="password"
                                v-model="password"
                                toggleMask
                                :feedback="false"
                                class="w-full"
                                inputClass="w-full"
                            />

                            <div class="mt-0 w-full bg-white px-[10.5px] py-[11.5px]">
                                <div class="flex flex-col gap-[7px]">
                                    <div class="flex flex-col gap-[14px]">
                                        <span class="text-sm font-semibold">Passwort wählen</span>
                                        <div class="flex h-[10px] w-full overflow-hidden rounded-md">
                                            <div class="flex-1 bg-amber-500" />
                                            <div class="flex-1 bg-amber-500" />
                                            <div class="flex-1 bg-slate-200" />
                                        </div>
                                    </div>
                                    <span class="text-sm">Medium</span>
                                </div>

                                <Divider class="my-[14px]" />

                                <div class="flex flex-col gap-[3.5px] text-sm">
                                    <span>Ein Kleinbuchstabe</span>
                                    <span>Ein Großbuchstabe</span>
                                    <span>Eine Zahl</span>
                                    <span>Acht Zeichen</span>
                                </div>
                            </div>
                        </div>

                        <div class="flex items-center gap-3">
                            <ToggleSwitch v-model="twoFactorEnabled" inputId="two-factor" />
                            <label for="two-factor" class="text-sm">Zwei-Faktor-Authentifizierung</label>
                        </div>

                        <div class="flex w-[216px] flex-col gap-[14px]">
                            <div class="flex flex-col">
                                <label for="session-duration" class="mb-[7px] text-sm">Sitzungsdauer (Minuten)</label>
                                <InputText
                                    id="session-duration"
                                    :modelValue="sessionDuration"
                                    class="w-full"
                                    @update:modelValue="sessionDuration = Number($event)"
                                />
                            </div>
                            <Slider v-model="sessionDuration" :min="0" :max="120" class="w-full" />
                        </div>

                        <div class="flex flex-col gap-3">
                            <span class="text-sm">Sicherheitsstufe</span>
                            <div class="flex items-center gap-5">
                                <div class="flex items-center gap-[7px]">
                                    <RadioButton v-model="securityLevel" inputId="security-low" value="low" />
                                    <label for="security-low" class="text-sm">Niedrig</label>
                                </div>
                                <div class="flex items-center gap-[7px]">
                                    <RadioButton v-model="securityLevel" inputId="security-medium" value="medium" />
                                    <label for="security-medium" class="text-sm">Mittel</label>
                                </div>
                                <div class="flex items-center gap-[7px]">
                                    <RadioButton v-model="securityLevel" inputId="security-high" value="high" />
                                    <label for="security-high" class="text-sm">Hoch</label>
                                </div>
                            </div>
                        </div>

                        <Button label="Speichern" disabled class="w-fit" />
                    </div>
                </TabPanel>

                <TabPanel value="1" class="px-0 py-3">
                    <div />
                </TabPanel>
            </TabPanels>
        </Tabs>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import RadioButton from 'primevue/radiobutton';
import Slider from 'primevue/slider';
import Tab from 'primevue/tab';
import TabList from 'primevue/tablist';
import TabPanel from 'primevue/tabpanel';
import TabPanels from 'primevue/tabpanels';
import Tabs from 'primevue/tabs';
import ToggleSwitch from 'primevue/toggleswitch';

const activeTab = ref('0');
const password = ref('********');
const twoFactorEnabled = ref(false);
const sessionDuration = ref(30);
const securityLevel = ref('high');
</script>