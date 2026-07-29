<template>
    <div class="flex w-[536px] flex-col bg-white p-6 font-[Inter]">
        <Card unstyled class="w-full rounded-xl bg-white">
            <template #header>
                <div class="flex h-[172px] flex-col gap-[10px] p-[10px]"></div>
            </template>

            <template #content>
                <form class="flex flex-col gap-6 rounded-md p-[17.5px]" @submit.prevent>
                    <div class="flex flex-col gap-[7px]">
                        <span class="text-[17.5px] font-medium leading-[21px]">Anmelden</span>
                        <span class="text-sm font-normal leading-[17px]">
                            Melde dich mit deiner E-Mail-Adresse und Passwort an.
                        </span>
                    </div>

                    <div class="flex flex-col gap-3">
                        <div class="flex flex-col gap-[7px]">
                            <label for="email" class="text-sm font-normal leading-[21px]">E-Mail-Adresse</label>
                            <InputText
                                id="email"
                                v-model="email"
                                type="email"
                                class="w-full"
                                input-class="!h-[33px] !rounded-md !border-[#cbd5e1] !px-[10.5px] !py-[7px]"
                            />
                        </div>

                        <div class="flex flex-col gap-[7px]">
                            <label for="password" class="text-sm font-normal leading-[21px]">Passwort</label>
                            <Password
                                input-id="password"
                                v-model="password"
                                :feedback="false"
                                toggle-mask
                                fluid
                                class="w-full"
                                input-class="!h-[33px] !rounded-md !border-[#cbd5e1] !px-[10.5px] !py-[7px]"
                            />
                        </div>

                        <div class="flex items-center gap-[7px]">
                            <Checkbox v-model="staySignedIn" input-id="stay-signed-in" binary class="h-[17.5px] w-[17.5px]" />
                            <label for="stay-signed-in" class="text-sm font-normal leading-[17px]">
                                Angemeldet bleiben
                            </label>
                        </div>
                    </div>

                    <div class="flex gap-[7px]">
                        <Button
                            label="Abbrechen"
                            severity="secondary"
                            rounded
                            type="button"
                            class="!h-[33px] !w-[97px] !px-[10.5px] !py-[7px] !text-sm"
                        />
                        <Button
                            label="Anmelden"
                            icon="pi pi-unlock"
                            rounded
                            type="submit"
                            class="!h-[33px] !w-[112px] !px-[10.5px] !py-[7px] !text-sm"
                        />
                    </div>
                </form>
            </template>
        </Card>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Checkbox from 'primevue/checkbox'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'

const email = ref('')
const password = ref('')
const staySignedIn = ref(false)
</script>