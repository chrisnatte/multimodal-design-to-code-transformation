<template>
    <main class="min-h-screen bg-white p-6">
        <Card class="mx-auto w-full max-w-[488px] overflow-hidden shadow-sm">
            <template #header>
                <div class="relative h-[172px] overflow-hidden bg-[#02091d]">
                    <div class="absolute -left-2 -top-16 h-52 w-52 rounded-full bg-gradient-to-br from-green-400 via-green-700 to-slate-900 opacity-90 shadow-2xl"></div>
                    <div class="absolute left-16 top-9 flex h-28 w-28 items-center justify-center rounded-full bg-slate-950/40">
                        <i class="pi pi-shield text-6xl text-emerald-400"></i>
                    </div>
                    <div class="absolute -bottom-14 right-9 h-40 w-40 rounded-full bg-gradient-to-br from-green-300 via-green-700 to-slate-900 opacity-90"></div>
                    <div class="absolute bottom-0 left-0 h-8 w-full opacity-20 [background-image:linear-gradient(#15734f_1px,transparent_1px),linear-gradient(90deg,#15734f_1px,transparent_1px)] [background-size:24px_16px]"></div>
                </div>
            </template>

            <template #content>
                <form class="flex flex-col gap-3" @submit.prevent>
                    <div>
                        <h1 class="m-0 text-lg font-medium text-slate-700">Anmelden</h1>
                        <p class="mb-3 mt-1 text-sm text-slate-500">
                            Melde dich mit deiner E-Mail-Adresse und Passwort an.
                        </p>
                    </div>

                    <div class="flex flex-col gap-1.5">
                        <label for="email" class="text-sm text-slate-700">E-Mail-Adresse</label>
                        <InputText
                            id="email"
                            v-model="email"
                            type="email"
                            size="small"
                            fluid
                            autocomplete="email"
                        />
                    </div>

                    <div class="flex flex-col gap-1.5">
                        <label for="password" class="text-sm text-slate-700">Passwort</label>
                        <Password
                            input-id="password"
                            v-model="password"
                            size="small"
                            fluid
                            :feedback="false"
                            toggle-mask
                            autocomplete="current-password"
                        />
                    </div>

                    <div class="flex items-center gap-2 pt-0.5">
                        <Checkbox v-model="rememberMe" input-id="rememberMe" binary />
                        <label for="rememberMe" class="text-sm text-slate-600">Angemeldet bleiben</label>
                    </div>

                    <div class="mt-3 flex items-center gap-2">
                        <Button label="Save" severity="secondary" size="small" rounded />
                        <Button label="Anmelden" icon="pi pi-lock" severity="success" size="small" rounded type="submit" />
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
const rememberMe = ref(false)
</script>