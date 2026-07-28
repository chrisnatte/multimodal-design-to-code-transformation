<template>
    <main class="flex min-h-screen items-start justify-center bg-white p-6">
        <Card class="w-full max-w-[488px] overflow-hidden rounded-xl border border-surface-200 shadow-sm" :pt="{ body: { class: '!p-0' }, content: { class: '!p-0' } }">
            <template #header>
                <div class="relative h-[171px] overflow-hidden bg-gradient-to-br from-slate-950 via-slate-950 to-emerald-950">
                    <div class="absolute -left-8 bottom-0 h-32 w-[115%] opacity-20 [background-image:linear-gradient(rgba(34,197,94,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,.35)_1px,transparent_1px)] [background-size:20px_20px] [transform:perspective(180px)_rotateX(58deg)]"></div>

                    <div class="absolute -top-7 left-[62px] flex h-[204px] w-[204px] items-center justify-center rounded-full border border-emerald-200/20 bg-[radial-gradient(circle_at_34%_24%,#4ade80_0%,#15803d_26%,#10213a_67%,#020617_100%)] shadow-2xl">
                        <div class="flex h-24 w-24 items-center justify-center rounded-[40%] border-4 border-emerald-950 bg-emerald-500 shadow-xl">
                            <span class="pi pi-shield text-5xl text-slate-800"></span>
                        </div>
                    </div>

                    <div class="absolute -bottom-24 right-[55px] h-[136px] w-[136px] rounded-full border border-emerald-200/20 bg-[radial-gradient(circle_at_35%_22%,#4ade80_0%,#15803d_32%,#071322_78%)]">
                        <div class="absolute left-10 top-8 flex h-16 w-16 items-center justify-center rounded-[40%] border-2 border-emerald-950 bg-emerald-400">
                            <span class="pi pi-shield text-3xl text-slate-800"></span>
                        </div>
                    </div>
                </div>
            </template>

            <template #content>
                <section class="flex flex-col px-4 pb-4 pt-6">
                    <h1 class="m-0 text-lg font-semibold text-slate-700">Anmelden</h1>
                    <p class="mb-6 mt-1 text-sm text-slate-500">Melde dich mit deiner E-Mail-Adresse und Passwort an.</p>

                    <div class="flex flex-col gap-1">
                        <label for="email" class="text-sm text-slate-700">E-Mail-Adresse</label>
                        <InputText id="email" v-model="email" type="email" size="small" fluid />
                    </div>

                    <div class="mt-4 flex flex-col gap-1">
                        <label for="password" class="text-sm text-slate-700">Passwort</label>
                        <Password
                            v-model="password"
                            inputId="password"
                            size="small"
                            :feedback="false"
                            toggleMask
                            fluid
                            inputClass="w-full"
                        />
                    </div>

                    <div class="mt-3 flex items-center gap-2">
                        <Checkbox v-model="staySignedIn" inputId="stay-signed-in" binary size="small" />
                        <label for="stay-signed-in" class="text-sm text-slate-600">Angemeldet bleiben</label>
                    </div>

                    <div class="mt-6 flex items-center gap-2">
                        <Button label="Save" severity="secondary" size="small" rounded />
                        <Button label="Anmelden" icon="pi pi-lock" severity="success" size="small" rounded @click="login" />
                    </div>
                </section>
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
const staySignedIn = ref(false);

const login = () => {
    return {
        email: email.value,
        password: password.value,
        staySignedIn: staySignedIn.value
    };
};
</script>