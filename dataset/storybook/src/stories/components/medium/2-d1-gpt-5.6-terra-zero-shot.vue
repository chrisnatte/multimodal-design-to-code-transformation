<template>
    <main class="w-full max-w-[512px] p-6 font-sans text-sm text-slate-700">
        <Tabs v-model:value="activeTab" class="w-full">
            <TabList class="border-b border-slate-200">
                <Tab value="profile" class="gap-2 px-4 py-3 text-sm font-bold">
                    <i class="pi pi-user-edit text-sm"></i>
                    <span>Profil &amp; Konto</span>
                </Tab>
                <Tab value="security" class="gap-2 px-4 py-3 text-sm font-bold">
                    <i class="pi pi-shield text-sm"></i>
                    <span>Sicherheit &amp; Präferenzen</span>
                </Tab>
            </TabList>

            <TabPanels class="px-4 pb-4 pt-3">
                <TabPanel value="profile">
                    <div class="flex flex-col gap-5 py-3">
                        <div class="relative h-16 w-16">
                            <Avatar label="P" class="h-14 w-14 bg-slate-200 text-2xl text-slate-600" />
                            <Button
                                label="Edit"
                                size="small"
                                class="absolute -right-4 -top-1 px-2 py-1 text-xs"
                            />
                        </div>

                        <div class="flex w-64 flex-col gap-2">
                            <label for="username">Benutzername</label>
                            <InputText
                                id="username"
                                v-model="username"
                                placeholder="Benutzername eingeben"
                                class="w-full"
                            />
                        </div>

                        <Textarea
                            v-model="profileInformation"
                            placeholder="Informationen über dich...."
                            rows="4"
                            class="h-[101px] w-64 resize-none"
                        />

                        <div class="flex items-center gap-3">
                            <ToggleSwitch v-model="publicVisible" input-id="public-visible" />
                            <label for="public-visible">Öffentlich sichtbar</label>
                        </div>

                        <Button label="Speichern" class="w-fit" @click="saveProfile" />
                    </div>
                </TabPanel>

                <TabPanel value="security">
                    <div class="flex w-64 flex-col gap-5 py-3">
                        <Password
                            v-model="securityPassword"
                            input-id="password"
                            toggle-mask
                            :feedback="true"
                            prompt-label="Passwort wählen"
                            weak-label="Weak"
                            medium-label="Medium"
                            strong-label="Strong"
                            class="w-full"
                            input-class="w-full"
                        >
                            <template #footer>
                                <Divider />
                                <ul class="m-0 list-none space-y-1 p-0">
                                    <li>Ein Kleinbuchstabe</li>
                                    <li>Ein Großbuchstabe</li>
                                    <li>Eine Zahl</li>
                                    <li>Acht Zeichen</li>
                                </ul>
                            </template>
                        </Password>

                        <div class="flex items-center gap-3">
                            <ToggleSwitch v-model="twoFactorAuthentication" input-id="two-factor" />
                            <label for="two-factor">Zwei-Faktor-Authentifizierung</label>
                        </div>

                        <div class="flex flex-col gap-3">
                            <div class="flex flex-col gap-2">
                                <label for="session-duration">Sitzungsdauer (Minuten)</label>
                                <InputText
                                    id="session-duration"
                                    v-model="sessionDurationText"
                                    class="w-full"
                                />
                            </div>
                            <Slider v-model="sessionDuration" :min="0" :max="120" class="w-full" />
                        </div>

                        <fieldset class="flex flex-col gap-3 border-0 p-0">
                            <legend class="p-0">Sicherheitsstufe</legend>
                            <div class="flex items-center gap-5">
                                <div class="flex items-center gap-2">
                                    <RadioButton
                                        v-model="securityLevel"
                                        input-id="low"
                                        name="security-level"
                                        value="Niedrig"
                                    />
                                    <label for="low">Niedrig</label>
                                </div>
                                <div class="flex items-center gap-2">
                                    <RadioButton
                                        v-model="securityLevel"
                                        input-id="medium"
                                        name="security-level"
                                        value="Mittel"
                                    />
                                    <label for="medium">Mittel</label>
                                </div>
                                <div class="flex items-center gap-2">
                                    <RadioButton
                                        v-model="securityLevel"
                                        input-id="high"
                                        name="security-level"
                                        value="Hoch"
                                    />
                                    <label for="high">Hoch</label>
                                </div>
                            </div>
                        </fieldset>

                        <Button label="Speichern" disabled class="w-fit" />
                    </div>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </main>
</template>

<script setup>
import { ref, watch } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import RadioButton from 'primevue/radiobutton'
import Slider from 'primevue/slider'
import Tabs from 'primevue/tabs'
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import Textarea from 'primevue/textarea'
import ToggleSwitch from 'primevue/toggleswitch'

const activeTab = ref('profile')
const username = ref('')
const profileInformation = ref('')
const publicVisible = ref(false)
const securityPassword = ref('********')
const twoFactorAuthentication = ref(false)
const sessionDuration = ref(30)
const sessionDurationText = ref('30')
const securityLevel = ref('Hoch')

watch(sessionDuration, (value) => {
    sessionDurationText.value = String(value)
})

watch(sessionDurationText, (value) => {
    const parsedValue = Number(value)
    if (!Number.isNaN(parsedValue)) {
        sessionDuration.value = parsedValue
    }
})

const saveProfile = () => {}
</script>