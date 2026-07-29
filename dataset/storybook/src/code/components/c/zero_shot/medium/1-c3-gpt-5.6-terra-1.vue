<template>
    <main class="flex min-h-screen items-start justify-center bg-white p-6">
        <Card class="w-full max-w-[488px] overflow-hidden rounded-xl border border-slate-100 shadow-sm">
            <template #header>
                <div class="relative h-[171px] overflow-hidden bg-gradient-to-br from-slate-950 via-slate-950 to-emerald-950">
                    <div class="absolute inset-x-0 bottom-0 h-8 opacity-30 [background-image:linear-gradient(rgba(34,197,94,.25)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,.25)_1px,transparent_1px)] [background-size:18px_18px] [transform:perspective(130px)_rotateX(55deg)_scale(1.7)]"></div>

                    <div class="absolute -top-3 left-[62px] flex h-[203px] w-[203px] items-center justify-center rounded-full border border-emerald-300/30 bg-gradient-to-br from-emerald-400/80 via-emerald-900/60 to-slate-950 shadow-[inset_-14px_-18px_25px_rgba(2,6,23,.8),0_16px_25px_rgba(0,0,0,.35)]">
                        <div class="flex h-24 w-24 items-center justify-center rounded-full bg-emerald-500/30 shadow-inner">
                            <i class="pi pi-shield text-6xl text-emerald-300 drop-shadow-lg"></i>
                        </div>
                    </div>

                    <div class="absolute -bottom-14 right-[57px] flex h-[110px] w-[110px] items-start justify-center rounded-full border border-emerald-300/30 bg-gradient-to-br from-emerald-400/90 via-emerald-900/70 to-slate-950 pt-7 shadow-[inset_-10px_-12px_20px_rgba(2,6,23,.8)]">
                        <i class="pi pi-shield text-4xl text-emerald-200"></i>
                    </div>
                </div>
            </template>

            <template #title>
                <h1 class="m-0 text-lg font-semibold text-slate-700">Anmelden</h1>
            </template>

            <template #subtitle>
                <p class="m-0 text-sm font-normal text-slate-500">Melde dich mit deiner E-Mail-Adresse und Passwort an.</p>
            </template>

            <template #content>
                <form class="mt-6 flex flex-col gap-4" @submit.prevent>
                    <div class="flex flex-col gap-2">
                        <label for="email" class="text-sm font-medium text-slate-700">E-Mail-Adresse</label>
                        <InputText id="email" v-model="email" type="email" fluid />
                    </div>

                    <div class="flex flex-col gap-2">
                        <label for="password" class="text-sm font-medium text-slate-700">Passwort</label>
                        <Password
                            input-id="password"
                            v-model="password"
                            :feedback="false"
                            toggle-mask
                            fluid
                            input-class="w-full"
                        />
                    </div>

                    <div class="flex items-center gap-2">
                        <Checkbox input-id="stay-signed-in" v-model="staySignedIn" binary />
                        <label for="stay-signed-in" class="text-sm text-slate-600">Angemeldet bleiben</label>
                    </div>
                </form>
            </template>

            <template #footer>
                <div class="mt-2 flex items-center gap-2">
                    <Button
                        label="Save"
                        severity="secondary"
                        rounded
                        class="!border-0 !bg-slate-100 !px-3 !py-2 !text-sm !font-medium !text-slate-600"
                    />
                    <Button label="Anmelden" icon="pi pi-lock" rounded class="!px-3 !py-2 !text-sm" />
                </div>
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