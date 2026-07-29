<template>
    <div class="w-[560px] bg-white p-6">
        <Tabs v-model:value="activeTab" class="w-full">
            <TabList class="border-b border-slate-200">
                <Tab value="profile" class="gap-2 px-4 py-3.5 text-sm font-bold">
                    <i class="pi pi-user-edit text-sm" aria-hidden="true"></i>
                    <span>Profil &amp; Konto</span>
                </Tab>
                <Tab value="security" class="gap-2 px-4 py-3.5 text-sm font-bold">
                    <i class="pi pi-shield text-sm" aria-hidden="true"></i>
                    <span>Sicherheit &amp; Präferenzen</span>
                </Tab>
            </TabList>

            <TabPanels class="px-4 pb-4 pt-3">
                <TabPanel value="profile" class="m-0">
                    <div class="flex flex-col gap-5 py-3">
                        <div class="w-[216px]">
                            <label for="password" class="mb-1.5 block text-sm">Passwort</label>
                            <Password
                                id="password"
                                v-model="password"
                                :feedback="false"
                                toggle-mask
                                class="w-full"
                                input-class="w-full"
                            />
                            <div class="mt-0.5 border border-slate-200 bg-white px-3 py-3">
                                <div class="flex flex-col gap-2">
                                    <div class="flex flex-col gap-3.5">
                                        <span class="text-sm font-semibold">Passwort wählen</span>
                                        <div class="flex h-2.5 w-full">
                                            <div class="flex-1 rounded-l-md bg-amber-500"></div>
                                            <div class="flex-1 bg-amber-500"></div>
                                            <div class="flex-1 rounded-r-md bg-slate-200"></div>
                                        </div>
                                    </div>
                                    <span class="text-sm">Medium</span>
                                </div>

                                <Divider class="my-3" />

                                <div class="flex flex-col gap-1 text-sm">
                                    <span>Ein Kleinbuchstabe</span>
                                    <span>Ein Großbuchstabe</span>
                                    <span>Eine Zahl</span>
                                    <span>Acht Zeichen</span>
                                </div>
                            </div>
                        </div>

                        <div class="flex items-center gap-3">
                            <ToggleSwitch v-model="twoFactorEnabled" input-id="two-factor" />
                            <label for="two-factor" class="text-sm">Zwei-Faktor-Authentifizierung</label>
                        </div>

                        <div class="flex w-[216px] flex-col gap-3">
                            <div>
                                <label for="session-duration" class="mb-1.5 block text-sm">
                                    Sitzungsdauer (Minuten)
                                </label>
                                <InputNumber
                                    id="session-duration"
                                    v-model="sessionDuration"
                                    :min="0"
                                    :max="120"
                                    :use-grouping="false"
                                    class="w-full"
                                    input-class="w-full"
                                />
                            </div>
                            <Slider v-model="sessionDuration" :min="0" :max="120" class="w-full" />
                        </div>

                        <div class="flex flex-col gap-3">
                            <span class="text-sm">Sicherheitsstufe</span>
                            <div class="flex items-center gap-5">
                                <div class="flex items-center gap-2">
                                    <RadioButton
                                        v-model="securityLevel"
                                        input-id="security-low"
                                        name="security-level"
                                        value="Niedrig"
                                    />
                                    <label for="security-low" class="text-sm">Niedrig</label>
                                </div>
                                <div class="flex items-center gap-2">
                                    <RadioButton
                                        v-model="securityLevel"
                                        input-id="security-medium"
                                        name="security-level"
                                        value="Mittel"
                                    />
                                    <label for="security-medium" class="text-sm">Mittel</label>
                                </div>
                                <div class="flex items-center gap-2">
                                    <RadioButton
                                        v-model="securityLevel"
                                        input-id="security-high"
                                        name="security-level"
                                        value="Hoch"
                                    />
                                    <label for="security-high" class="text-sm">Hoch</label>
                                </div>
                            </div>
                        </div>

                        <Button label="Speichern" disabled class="w-fit" />
                    </div>
                </TabPanel>

                <TabPanel value="security" class="m-0">
                    <div></div>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import InputNumber from 'primevue/inputnumber'
import Password from 'primevue/password'
import RadioButton from 'primevue/radiobutton'
import Slider from 'primevue/slider'
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import TabPanel from 'primevue/tabpanel'
import TabPanels from 'primevue/tabpanels'
import Tabs from 'primevue/tabs'
import ToggleSwitch from 'primevue/toggleswitch'

const activeTab = ref('profile')
const password = ref('********')
const twoFactorEnabled = ref(false)
const sessionDuration = ref(30)
const securityLevel = ref('Hoch')
</script>