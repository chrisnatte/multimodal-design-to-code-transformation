<template>
    <main class="flex min-h-screen items-start justify-center bg-white p-6">
        <Card class="w-full max-w-[488px] overflow-hidden border border-slate-200 shadow-sm" :pt="{ body: { class: '!p-0' }, content: { class: '!p-0' } }">
            <template #header>
                <div class="relative h-[172px] overflow-hidden bg-gradient-to-br from-slate-950 via-slate-950 to-emerald-950">
                    <div class="absolute -left-4 -top-14 h-52 w-52 rounded-full border border-emerald-300/30 bg-gradient-to-br from-emerald-400/60 via-emerald-700/30 to-slate-950/80 shadow-[inset_0_0_30px_rgba(134,239,172,0.35)]"></div>
                    <div class="absolute -bottom-12 right-10 h-36 w-36 rounded-full border border-emerald-300/30 bg-gradient-to-br from-emerald-400/60 via-emerald-700/30 to-slate-950/80"></div>
                    <div class="absolute inset-x-0 bottom-0 h-8 bg-[linear-gradient(rgba(16,185,129,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.08)_1px,transparent_1px)] bg-[size:20px_12px] [transform:perspective(140px)_rotateX(55deg)_scale(1.25)]"></div>
                    <i class="pi pi-shield absolute left-[calc(50%-22px)] top-[55px] text-5xl text-emerald-400 drop-shadow-lg" aria-hidden="true"></i>
                </div>
            </template>

            <template #content>
                <form class="flex flex-col gap-6 p-[18px]" @submit.prevent>
                    <div class="flex flex-col gap-[7px]">
                        <h1 class="m-0 text-[18px] font-medium leading-[21px] text-slate-700">Anmelden</h1>
                        <p class="m-0 text-sm leading-[17px] text-slate-500">
                            Melde dich mit deiner E-Mail-Adresse und Passwort an.
                        </p>
                    </div>

                    <div class="flex flex-col gap-3">
                        <div class="flex flex-col gap-[7px]">
                            <label for="email" class="text-sm leading-[21px] text-slate-700">E-Mail-Adresse</label>
                            <InputText
                                id="email"
                                v-model="email"
                                type="email"
                                class="h-[34px] w-full !border-slate-300 !px-[11px]"
                                aria-label="E-Mail-Adresse"
                            />
                        </div>

                        <div class="flex flex-col gap-[7px]">
                            <label for="password" class="text-sm leading-[21px] text-slate-700">Passwort</label>
                            <Password
                                input-id="password"
                                v-model="password"
                                :feedback="false"
                                toggle-mask
                                fluid
                                input-class="!h-[34px] !w-full !border-slate-300 !px-[11px]"
                                aria-label="Passwort"
                            />
                        </div>

                        <div class="flex items-center gap-[7px]">
                            <Checkbox v-model="staySignedIn" input-id="stay-signed-in" binary />
                            <label for="stay-signed-in" class="text-sm text-slate-600">Angemeldet bleiben</label>
                        </div>
                    </div>

                    <div class="flex items-center gap-[7px]">
                        <Button label="Save" severity="secondary" rounded size="small" type="button" />
                        <Button label="Anmelden" icon="pi pi-unlock" rounded size="small" type="submit" class="!bg-emerald-500 !border-emerald-500 hover:!bg-emerald-600 hover:!border-emerald-600" />
                    </div>
                </form>
            </template>
        </Card>
    </main>
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