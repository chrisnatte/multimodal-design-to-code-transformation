<template>
    <main class="min-h-screen bg-white p-6">
        <Card class="w-full max-w-[488px] overflow-hidden border border-surface-200 shadow-sm">
            <template #header>
                <Image
                    :src="bannerSrc"
                    alt="Green lion illustration"
                    imageClass="h-[172px] w-full object-cover"
                />
            </template>

            <template #content>
                <form class="flex flex-col gap-4" @submit.prevent="submitLogin">
                    <div class="flex flex-col gap-1">
                        <h1 class="m-0 text-lg font-semibold text-surface-700">Anmelden</h1>
                        <p class="m-0 text-sm text-surface-500">
                            Melde dich mit deiner E-Mail-Adresse und Passwort an.
                        </p>
                    </div>

                    <div class="flex flex-col gap-2">
                        <label for="email" class="text-sm text-surface-700">E-Mail-Adresse</label>
                        <InputText
                            id="email"
                            v-model="email"
                            type="email"
                            autocomplete="email"
                            fluid
                        />
                    </div>

                    <div class="flex flex-col gap-2">
                        <label for="password" class="text-sm text-surface-700">Passwort</label>
                        <Password
                            inputId="password"
                            v-model="password"
                            :feedback="false"
                            toggleMask
                            fluid
                            inputClass="w-full"
                            autocomplete="current-password"
                        />
                    </div>

                    <div class="flex items-center gap-2">
                        <Checkbox
                            v-model="staySignedIn"
                            inputId="stay-signed-in"
                            binary
                        />
                        <label for="stay-signed-in" class="text-sm text-surface-600">
                            Angemeldet bleiben
                        </label>
                    </div>

                    <div class="flex items-center gap-2 pt-1">
                        <Button
                            type="button"
                            label="Save"
                            severity="secondary"
                            variant="text"
                            rounded
                            @click="saveLogin"
                        />
                        <Button
                            type="submit"
                            label="Anmelden"
                            icon="pi pi-lock"
                            severity="success"
                            rounded
                        />
                    </div>
                </form>
            </template>
        </Card>
    </main>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Checkbox from 'primevue/checkbox';
import Image from 'primevue/image';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';

const email = ref('');
const password = ref('');
const staySignedIn = ref(false);

const bannerSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="976" height="344" viewBox="0 0 976 344">
    <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop stop-color="#02071d"/>
            <stop offset=".56" stop-color="#031124"/>
            <stop offset="1" stop-color="#00120e"/>
        </linearGradient>
        <radialGradient id="orb" cx=".42" cy=".32" r=".66">
            <stop stop-color="#40d75f"/>
            <stop offset=".38" stop-color="#148438"/>
            <stop offset=".74" stop-color="#091d2b"/>
            <stop offset="1" stop-color="#030719"/>
        </radialGradient>
        <radialGradient id="small" cx=".36" cy=".24" r=".75">
            <stop stop-color="#55df6c"/>
            <stop offset=".45" stop-color="#14743a"/>
            <stop offset="1" stop-color="#061423"/>
        </radialGradient>
        <filter id="glow"><feGaussianBlur stdDeviation="14"/></filter>
    </defs>
    <rect width="976" height="344" fill="url(#bg)"/>
    <ellipse cx="321" cy="66" rx="122" ry="45" fill="#17a84a" opacity=".5" filter="url(#glow)"/>
    <ellipse cx="733" cy="22" rx="128" ry="48" fill="#00943e" opacity=".45" filter="url(#glow)"/>
    <circle cx="297" cy="166" r="198" fill="url(#orb)" stroke="#1b2e42" stroke-width="3"/>
    <circle cx="700" cy="345" r="112" fill="url(#small)" stroke="#1d4a47" stroke-width="2"/>
    <g opacity=".27" stroke="#17605a" stroke-width="1">
        <path d="M0 286H976M0 310H976M0 334H976"/>
        <path d="M0 344L182 260M105 344L244 260M210 344L306 260M315 344L369 260M420 344L432 260M525 344L495 260M630 344L558 260M735 344L621 260M840 344L684 260M945 344L747 260"/>
    </g>
    <g transform="translate(218 66)">
        <path d="M70 9l40 0 18 25 29-10 30 12-5 48-18 13 0 50-32 40-54 12-46-30-13-52-20-20-1-47 30-15 29 12z" fill="#45b969" stroke="#093c38" stroke-width="7"/>
        <path d="M70 9l40 0 18 25-22 31-27-10-22 10-25-32z" fill="#637f83" stroke="#173b42" stroke-width="7"/>
        <path d="M36 36l21 29 22-10-8 44-36-13zM128 34l-22 31-27-10 8 44 36-13z" fill="#315b5c" stroke="#173b42" stroke-width="6"/>
        <path d="M22 86l36 13 21 43 22-43 37-13-11 51-26 31-42 0-26-31z" fill="#3aaa63" stroke="#173b42" stroke-width="7"/>
        <path d="M58 142l21 22 22-22-8 45-14 11-14-11z" fill="#277d54"/>
        <path d="M49 108l15 5M99 113l15-5" stroke="#0a3939" stroke-width="6" stroke-linecap="round"/>
    </g>
    <g transform="translate(646 282) scale(.62)">
        <path d="M70 9l40 0 18 25 29-10 30 12-5 48-18 13 0 50-32 40-54 12-46-30-13-52-20-20-1-47 30-15 29 12z" fill="#43b968" stroke="#093c38" stroke-width="7"/>
        <path d="M70 9l40 0 18 25-22 31-27-10-22 10-25-32z" fill="#66848a" stroke="#173b42" stroke-width="7"/>
    </g>
</svg>`;

const bannerSrc = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(bannerSvg)}`;

const saveLogin = () => {
    localStorage.setItem('login-email', email.value);
};

const submitLogin = () => {
    localStorage.setItem('login-email', email.value);
};
</script>