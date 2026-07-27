<template>
    <div class="flex w-[488px] flex-col gap-[7px] rounded-xl bg-white">
        <div class="h-[172px] w-full p-[10px]"></div>

        <div class="flex w-full flex-col gap-6 rounded-md p-[17.5px]">
            <div class="flex flex-col gap-[7px]">
                <span class="text-[17.5px] font-medium leading-[21px]">Anmelden</span>
                <span class="text-[14px] leading-[17px]">Melde dich mit deiner E-Mail-Adresse und Passwort an.</span>
            </div>

            <div class="flex flex-col gap-3">
                <div class="flex flex-col gap-[7px]">
                    <label for="email" class="text-[14px] leading-[21px]">E-Mail-Adresse</label>
                    <InputText
                        id="email"
                        v-model="email"
                        type="email"
                        class="h-[33px] w-full !rounded-md !px-[10.5px] !py-[7px]"
                    />
                </div>

                <div class="flex flex-col gap-[7px]">
                    <label for="password" class="text-[14px] leading-[21px]">Passwort</label>
                    <Password
                        input-id="password"
                        v-model="password"
                        :feedback="false"
                        toggle-mask
                        fluid
                        input-class="!h-[33px] !w-full !rounded-md !px-[10.5px] !py-[7px]"
                    />
                </div>

                <div class="flex items-center gap-[7px]">
                    <Checkbox v-model="rememberMe" input-id="remember-me" binary />
                    <label for="remember-me" class="text-[14px] leading-[17px]">Angemeldet bleiben</label>
                </div>
            </div>

            <div class="flex items-center gap-[7px]">
                <Button
                    label="Abbrechen"
                    severity="secondary"
                    rounded
                    class="!h-[33px] !px-[10.5px] !py-[7px] !text-[14px]"
                />
                <Button
                    label="Anmelden"
                    icon="pi pi-unlock"
                    rounded
                    class="!h-[33px] !px-[10.5px] !py-[7px] !text-[14px]"
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