<template>
    <div class="w-[512px] bg-white">
        <Tabs v-model:value="activeTab">
            <TabList>
                <Tab value="profile" class="gap-2 px-4 py-3 text-sm font-bold">
                    <i class="pi pi-user-edit text-sm"></i>
                    <span>Profil &amp; Konto</span>
                </Tab>
                <Tab value="security" class="gap-2 px-4 py-3 text-sm font-bold">
                    <i class="pi pi-shield text-sm"></i>
                    <span>Sicherheit &amp; Präferenzen</span>
                </Tab>
            </TabList>

            <TabPanels>
                <TabPanel value="profile" class="px-4 py-6">
                    <div class="flex w-[256px] flex-col gap-5">
                        <div class="relative h-14 w-14">
                            <Avatar label="P" class="h-14 w-14 bg-slate-200 text-2xl text-slate-600" />
                            <Button
                                label="Edit"
                                size="small"
                                severity="success"
                                class="absolute -right-6 -top-3 px-2 py-1 text-xs"
                            />
                        </div>

                        <div class="flex flex-col gap-2">
                            <label for="username" class="text-sm text-slate-700">Benutzername</label>
                            <InputText
                                id="username"
                                v-model="username"
                                placeholder="Benutzername eingeben"
                                class="w-full"
                            />
                        </div>

                        <Textarea
                            v-model="about"
                            placeholder="Informationen über dich...."
                            rows="5"
                            class="w-full resize-none"
                        />

                        <div class="flex items-center gap-3">
                            <ToggleSwitch v-model="publicVisible" input-id="public-visible" />
                            <label for="public-visible" class="text-sm text-slate-700">Öffentlich sichtbar</label>
                        </div>

                        <Button label="Speichern" severity="success" class="w-fit" />
                    </div>
                </TabPanel>

                <TabPanel value="security" class="px-4 py-6">
                    <div class="flex w-[216px] flex-col gap-5">
                        <div class="flex flex-col gap-2">
                            <label for="password" class="text-sm text-slate-700">Passwort</label>
                            <Password
                                id="password"
                                v-model="password"
                                toggle-mask
                                :feedback="true"
                                class="w-full"
                                input-class="w-full"
                                prompt-label="Passwort wählen"
                                weak-label="Schwach"
                                medium-label="Medium"
                                strong-label="Stark"
                            >
                                <template #header>
                                    <div class="mb-3 font-semibold">Passwort wählen</div>
                                </template>
                                <template #footer>
                                    <div class="mt-3 border-t border-slate-200 pt-3">
                                        <div class="flex flex-col gap-1 text-sm">
                                            <span>Ein Kleinbuchstabe</span>
                                            <span>Ein Großbuchstabe</span>
                                            <span>Eine Zahl</span>
                                            <span>Acht Zeichen</span>
                                        </div>
                                    </div>
                                </template>
                            </Password>
                        </div>

                        <div class="flex items-center gap-3">
                            <ToggleSwitch v-model="twoFactorEnabled" input-id="two-factor" />
                            <label for="two-factor" class="text-sm text-slate-700">
                                Zwei-Faktor-Authentifizierung
                            </label>
                        </div>

                        <div class="flex flex-col gap-3">
                            <div class="flex flex-col gap-2">
                                <label for="session-duration" class="text-sm text-slate-700">
                                    Sitzungsdauer (Minuten)
                                </label>
                                <InputText
                                    id="session-duration"
                                    v-model="sessionDuration"
                                    class="w-full"
                                />
                            </div>
                            <Slider v-model="sessionSlider" :min="0" :max="120" class="w-full" />
                        </div>

                        <div class="flex flex-col gap-3">
                            <span class="text-sm text-slate-700">Sicherheitsstufe</span>
                            <div class="flex items-center gap-5">
                                <div class="flex items-center gap-2">
                                    <RadioButton v-model="securityLevel" input-id="low" value="Niedrig" />
                                    <label for="low" class="text-sm text-slate-700">Niedrig</label>
                                </div>
                                <div class="flex items-center gap-2">
                                    <RadioButton v-model="securityLevel" input-id="medium" value="Mittel" />
                                    <label for="medium" class="text-sm text-slate-700">Mittel</label>
                                </div>
                                <div class="flex items-center gap-2">
                                    <RadioButton v-model="securityLevel" input-id="high" value="Hoch" />
                                    <label for="high" class="text-sm text-slate-700">Hoch</label>
                                </div>
                            </div>
                        </div>

                        <Button label="Speichern" severity="success" disabled class="w-fit" />
                    </div>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import RadioButton from 'primevue/radiobutton'
import Slider from 'primevue/slider'
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import TabPanel from 'primevue/tabpanel'
import TabPanels from 'primevue/tabpanels'
import Tabs from 'primevue/tabs'
import Textarea from 'primevue/textarea'
import ToggleSwitch from 'primevue/toggleswitch'

const activeTab = ref('profile')
const username = ref('')
const about = ref('')
const publicVisible = ref(false)
const password = ref('********')
const twoFactorEnabled = ref(false)
const sessionDuration = ref('30')
const sessionSlider = ref(30)
const securityLevel = ref('Hoch')
</script>