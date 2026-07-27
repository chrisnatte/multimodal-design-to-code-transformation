<template>
    <div class="flex w-[488px] flex-col gap-[7px] rounded-xl bg-white">
        <div class="h-[172px] w-full p-2.5"></div>

        <div class="flex w-full flex-col gap-6 rounded-md p-[17.5px]">
            <div class="flex flex-col gap-[7px]">
                <span class="text-[17.5px] font-medium leading-[21px]">Anmelden</span>
                <span class="text-sm leading-[17px]">Melde dich mit deiner E-Mail-Adresse und Passwort an.</span>
            </div>

            <div class="flex flex-col gap-3">
                <div class="flex flex-col gap-[7px]">
                    <label for="email" class="text-sm leading-[21px]">E-Mail-Adresse</label>
                    <InputText
                        id="email"
                        v-model="email"
                        type="email"
                        aria-label="E-Mail-Adresse"
                        class="h-[33px] w-full"
                    />
                </div>

                <div class="flex flex-col gap-[7px]">
                    <label for="password" class="text-sm leading-[21px]">Passwort</label>
                    <Password
                        v-model="password"
                        inputId="password"
                        aria-label="Passwort"
                        :feedback="false"
                        toggleMask
                        fluid
                        class="w-full"
                        inputClass="!h-[33px] !w-full"
                    />
                </div>

                <div class="flex items-center gap-[7px]">
                    <Checkbox
                        v-model="rememberMe"
                        inputId="remember-me"
                        name="rememberMe"
                        binary
                        aria-label="Angemeldet bleiben"
                    />
                    <label for="remember-me" class="text-sm leading-[17px]">Angemeldet bleiben</label>
                </div>
            </div>

            <div class="flex items-center gap-[7px]">
                <Button
                    type="button"
                    label="Abbrechen"
                    severity="secondary"
                    rounded
                    class="!h-[33px] !px-[10.5px] !py-[7px] !text-sm"
                />
                <Button
                    type="button"
                    label="Anmelden"
                    icon="pi pi-unlock"
                    rounded
                    class="!h-[33px] !px-[10.5px] !py-[7px] !text-sm"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';

const email = ref('');
const password = ref('');
const rememberMe = ref(false);
</script>