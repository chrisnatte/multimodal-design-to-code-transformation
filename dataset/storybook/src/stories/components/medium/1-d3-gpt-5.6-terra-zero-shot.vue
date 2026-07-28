<template>
    <main class="flex min-h-screen items-start justify-center bg-white p-6">
        <Card
            class="w-full max-w-[488px] overflow-hidden rounded-xl border border-slate-200 shadow-sm"
            :pt="{
                root: { class: 'overflow-hidden' },
                body: { class: '!p-0' },
                content: { class: '!p-0' }
            }"
        >
            <template #header>
                <div class="relative h-[172px] overflow-hidden bg-gradient-to-br from-slate-950 via-slate-950 to-emerald-950">
                    <div class="absolute inset-x-0 bottom-0 h-9 opacity-30 [background-image:linear-gradient(rgba(34,197,94,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.2)_1px,transparent_1px)] [background-size:24px_12px] [transform:perspective(120px)_rotateX(55deg)_scale(1.4)]"></div>
                    <div class="absolute -left-2 -top-12 flex h-52 w-52 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 via-emerald-800 to-slate-950 shadow-[inset_0_0_24px_rgba(255,255,255,0.22)]">
                        <div class="flex h-20 w-20 items-center justify-center rounded-[40%] bg-emerald-500 shadow-lg">
                            <i class="pi pi-shield text-5xl text-slate-700"></i>
                        </div>
                    </div>
                    <div class="absolute -bottom-14 right-14 h-32 w-32 rounded-full bg-gradient-to-br from-emerald-300 via-emerald-700 to-slate-950 shadow-[inset_0_0_18px_rgba(255,255,255,0.25)]"></div>
                </div>
            </template>

            <template #content>
                <form class="flex flex-col gap-6 p-[17.5px]" @submit.prevent>
                    <div class="flex flex-col gap-[7px]">
                        <h1 class="m-0 text-[17.5px] font-medium leading-[21px] text-slate-700">Anmelden</h1>
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
                                class="w-full !h-[33px] !rounded-md !border-slate-300 !px-[10.5px]"
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
                                class="w-full"
                                input-class="w-full !h-[33px] !rounded-md !border-slate-300 !px-[10.5px]"
                                aria-label="Passwort"
                            />
                        </div>

                        <div class="flex items-center gap-[7px]">
                            <Checkbox v-model="staySignedIn" input-id="stay-signed-in" binary />
                            <label for="stay-signed-in" class="text-sm text-slate-600">Angemeldet bleiben</label>
                        </div>
                    </div>

                    <div class="flex items-center gap-[7px]">
                        <Button label="Save" severity="secondary" rounded class="!h-[33px] !bg-slate-100 !px-[12px] !text-sm !text-slate-600" />
                        <Button label="Anmelden" icon="pi pi-unlock" rounded class="!h-[33px] !bg-emerald-500 !px-[12px] !text-sm !border-emerald-500" type="submit" />
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