<template>
    <div class="w-full bg-white p-6">
        <Card
            class="w-full rounded-xl bg-white shadow-none"
            :pt="{
                body: { class: 'p-0' },
                content: { class: 'p-0' }
            }"
        >
            <template #header>
                <div class="h-[172px] w-full p-2.5"></div>
            </template>

            <template #content>
                <div class="mt-[7px] flex flex-col gap-6 rounded-md p-[17.5px]">
                    <div class="flex flex-col gap-[7px]">
                        <span class="text-[17.5px] font-medium leading-[21px]">Anmelden</span>
                        <span class="text-sm leading-[17px]">
                            Melde dich mit deiner E-Mail-Adresse und Passwort an.
                        </span>
                    </div>

                    <div class="flex flex-col gap-3">
                        <div class="flex flex-col gap-[7px]">
                            <label for="email" class="text-sm leading-[21px]">E-Mail-Adresse</label>
                            <InputText
                                id="email"
                                v-model="email"
                                type="email"
                                class="!h-[33px] !w-full !rounded-md !border-[#cbd5e1] !px-[10.5px] !py-[7px] !text-sm"
                            />
                        </div>

                        <div class="flex flex-col gap-[7px]">
                            <label for="password" class="text-sm leading-[21px]">Passwort</label>
                            <Password
                                inputId="password"
                                v-model="password"
                                :feedback="false"
                                toggleMask
                                fluid
                                inputClass="!h-[33px] !w-full !rounded-md !border-[#cbd5e1] !px-[10.5px] !py-[7px] !text-sm"
                            />
                        </div>

                        <div class="flex items-center gap-[7px]">
                            <Checkbox
                                v-model="staySignedIn"
                                inputId="stay-signed-in"
                                binary
                                :pt="{
                                    box: { class: '!h-[17.5px] !w-[17.5px] !rounded !border-[#cbd5e1]' }
                                }"
                            />
                            <label for="stay-signed-in" class="text-sm leading-[17px]">Angemeldet bleiben</label>
                        </div>
                    </div>

                    <div class="flex items-center gap-[7px]">
                        <Button
                            type="button"
                            label="Abbrechen"
                            severity="secondary"
                            rounded
                            class="!h-[33px] !bg-[#f1f5f9] !px-[10.5px] !py-[7px] !text-sm"
                        />
                        <Button
                            type="button"
                            label="Anmelden"
                            icon="pi pi-unlock"
                            rounded
                            class="!h-[33px] !border-[#10b981] !bg-[#10b981] !px-[10.5px] !py-[7px] !text-sm"
                        />
                    </div>
                </div>
            </template>
        </Card>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Checkbox from 'primevue/checkbox';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';

const email = ref('');
const password = ref('');
const staySignedIn = ref(false);
</script>