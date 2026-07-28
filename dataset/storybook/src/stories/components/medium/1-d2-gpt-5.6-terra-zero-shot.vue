<template>
    <div class="flex min-h-screen items-start justify-center bg-surface-50 p-6">
        <Card
            class="w-full max-w-[488px] overflow-hidden !rounded-xl !border !border-surface-200 !shadow-sm"
            :pt="{
                header: { class: '!p-0' },
                body: { class: '!p-0 !gap-0' },
                content: { class: '!p-0' }
            }"
        >
            <template #header>
                <div class="relative h-[172px] overflow-hidden bg-gradient-to-br from-slate-950 via-slate-950 to-emerald-950">
                    <div class="absolute -left-12 top-[-38px] h-48 w-48 rounded-full border border-emerald-300/25 bg-gradient-to-br from-emerald-400/80 via-emerald-700/45 to-slate-950 shadow-2xl"></div>
                    <div class="absolute left-[62px] top-[20px] flex h-32 w-32 items-center justify-center rounded-full border border-emerald-200/25 bg-slate-950/45 shadow-2xl">
                        <i class="pi pi-shield text-5xl text-emerald-400"></i>
                    </div>
                    <div class="absolute -bottom-20 right-10 h-36 w-36 rounded-full border border-emerald-300/20 bg-gradient-to-br from-emerald-400/80 via-emerald-700/45 to-slate-950"></div>
                    <div class="absolute inset-x-0 bottom-0 h-8 bg-[linear-gradient(rgba(16,185,129,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.08)_1px,transparent_1px)] bg-[size:20px_12px] [transform:perspective(100px)_rotateX(55deg)]"></div>
                </div>
            </template>

            <template #content>
                <form class="flex flex-col gap-6 p-[17.5px]" @submit.prevent>
                    <div class="flex flex-col gap-[7px]">
                        <h1 class="m-0 text-[17.5px] font-medium leading-[21px] text-slate-700">Anmelden</h1>
                        <p class="m-0 text-sm leading-[17px] text-slate-500">Melde dich mit deiner E-Mail-Adresse und Passwort an.</p>
                    </div>

                    <div class="flex flex-col gap-3">
                        <div class="flex flex-col gap-[7px]">
                            <label for="email" class="text-sm leading-[21px] text-slate-700">E-Mail-Adresse</label>
                            <InputText id="email" v-model="email" type="email" fluid class="h-[33px]" />
                        </div>

                        <div class="flex flex-col gap-[7px]">
                            <label for="password" class="text-sm leading-[21px] text-slate-700">Passwort</label>
                            <Password
                                inputId="password"
                                v-model="password"
                                :feedback="false"
                                toggleMask
                                fluid
                                class="w-full"
                                inputClass="w-full h-[33px]"
                            />
                        </div>

                        <div class="flex items-center gap-[7px]">
                            <Checkbox v-model="staySignedIn" inputId="stay-signed-in" binary />
                            <label for="stay-signed-in" class="text-sm leading-[17px] text-slate-600">Angemeldet bleiben</label>
                        </div>
                    </div>

                    <div class="flex items-center gap-[7px]">
                        <Button label="Save" severity="secondary" rounded class="!h-[33px] !bg-slate-100 !px-[10.5px] !py-[7px] !text-sm !text-slate-600 !border-slate-100" />
                        <Button label="Anmelden" icon="pi pi-unlock" rounded class="!h-[33px] !bg-emerald-500 !border-emerald-500 !px-[10.5px] !py-[7px] !text-sm" type="submit" />
                    </div>
                </form>
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