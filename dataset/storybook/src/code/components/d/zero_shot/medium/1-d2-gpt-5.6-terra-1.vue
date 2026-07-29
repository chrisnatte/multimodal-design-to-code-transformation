<template>
    <main class="flex min-h-screen items-center justify-center bg-white p-6">
        <Card class="w-full max-w-[488px] overflow-hidden rounded-xl border border-surface-200 shadow-sm">
            <template #header>
                <div class="relative h-[172px] overflow-hidden bg-gradient-to-br from-slate-950 via-slate-950 to-emerald-950">
                    <div class="absolute -left-2 -top-8 h-52 w-52 rounded-full bg-gradient-to-br from-emerald-300 via-emerald-700 to-slate-900 opacity-90 shadow-2xl"></div>
                    <div class="absolute -bottom-20 right-7 h-40 w-40 rounded-full bg-gradient-to-br from-emerald-300 via-emerald-700 to-slate-900 opacity-90"></div>
                    <div class="absolute inset-x-0 bottom-0 h-8 bg-[linear-gradient(rgba(16,185,129,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.12)_1px,transparent_1px)] bg-[size:16px_16px] [transform:perspective(160px)_rotateX(55deg)_scale(1.7)]"></div>
                    <div class="absolute left-[105px] top-[44px] flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/20">
                        <i class="pi pi-shield text-5xl text-emerald-300"></i>
                    </div>
                    <div class="absolute bottom-4 right-[86px] flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20">
                        <i class="pi pi-shield text-3xl text-emerald-300"></i>
                    </div>
                </div>
            </template>

            <template #title>
                <span class="text-[17.5px] font-medium text-slate-700">Anmelden</span>
            </template>

            <template #subtitle>
                <span class="text-sm font-normal text-slate-500">Melde dich mit deiner E-Mail-Adresse und Passwort an.</span>
            </template>

            <template #content>
                <div class="flex flex-col gap-3 pt-3">
                    <div class="flex flex-col gap-2">
                        <label for="email" class="text-sm text-slate-700">E-Mail-Adresse</label>
                        <InputText id="email" v-model="email" type="email" fluid />
                    </div>

                    <div class="flex flex-col gap-2">
                        <label for="password" class="text-sm text-slate-700">Passwort</label>
                        <Password
                            inputId="password"
                            v-model="password"
                            :feedback="false"
                            toggleMask
                            fluid
                        />
                    </div>

                    <div class="flex items-center gap-2 pt-0.5">
                        <Checkbox v-model="rememberMe" inputId="remember-me" binary />
                        <label for="remember-me" class="text-sm text-slate-600">Angemeldet bleiben</label>
                    </div>
                </div>
            </template>

            <template #footer>
                <div class="flex gap-2">
                    <Button label="Save" severity="secondary" rounded size="small" />
                    <Button label="Anmelden" icon="pi pi-unlock" rounded size="small" />
                </div>
            </template>
        </Card>
    </main>
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
const rememberMe = ref(false);
</script>