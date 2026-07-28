<template>
    <main class="flex min-h-screen items-start justify-center bg-white p-6">
        <Card
            class="w-full max-w-[488px] overflow-hidden rounded-xl border border-surface-200 shadow-sm"
            :pt="{
                body: { class: 'p-0' },
                content: { class: 'p-0' }
            }"
        >
            <template #header>
                <Image
                    :src="bannerImage"
                    alt="Grünes Löwen-Emblem"
                    class="block h-[172px] w-full overflow-hidden"
                    imageClass="h-[172px] w-full object-cover"
                    preview="false"
                />
            </template>

            <div class="flex flex-col gap-5 p-4 pt-5">
                <div class="flex flex-col gap-1">
                    <h1 class="m-0 text-lg font-semibold text-surface-700">Anmelden</h1>
                    <p class="m-0 text-sm text-surface-500">
                        Melde dich mit deiner E-Mail-Adresse und Passwort an.
                    </p>
                </div>

                <div class="flex flex-col gap-3">
                    <div class="flex flex-col gap-2">
                        <label for="email" class="text-sm font-medium text-surface-700">
                            E-Mail-Adresse
                        </label>
                        <InputText
                            id="email"
                            v-model="email"
                            class="w-full"
                            aria-label="E-Mail-Adresse"
                        />
                    </div>

                    <div class="flex flex-col gap-2">
                        <label for="password" class="text-sm font-medium text-surface-700">
                            Passwort
                        </label>
                        <Password
                            input-id="password"
                            v-model="password"
                            class="w-full"
                            input-class="w-full"
                            :feedback="false"
                            toggle-mask
                            aria-label="Passwort"
                        />
                    </div>

                    <div class="flex items-center gap-2">
                        <Checkbox v-model="stayLoggedIn" input-id="stay-logged-in" binary />
                        <label for="stay-logged-in" class="text-sm text-surface-600">
                            Angemeldet bleiben
                        </label>
                    </div>
                </div>

                <div class="flex items-center gap-2">
                    <Button
                        label="Save"
                        severity="secondary"
                        rounded
                        size="small"
                    />
                    <Button
                        label="Anmelden"
                        icon="pi pi-lock"
                        rounded
                        size="small"
                    />
                </div>
            </div>
        </Card>
    </main>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Checkbox from 'primevue/checkbox'
import Image from 'primevue/image'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'

const email = ref('')
const password = ref('')
const stayLoggedIn = ref(false)

const bannerImage = `data:image/svg+xml,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 976 344">
    <defs>
        <radialGradient id="orb" cx="50%" cy="38%" r="65%">
            <stop offset="0%" stop-color="#3bc65a"/>
            <stop offset="45%" stop-color="#14743b"/>
            <stop offset="73%" stop-color="#0d2730"/>
            <stop offset="100%" stop-color="#080c20"/>
        </radialGradient>
        <radialGradient id="orbSmall" cx="48%" cy="35%" r="70%">
            <stop offset="0%" stop-color="#5ee873"/>
            <stop offset="55%" stop-color="#1c7d42"/>
            <stop offset="100%" stop-color="#071226"/>
        </radialGradient>
        <linearGradient id="bg" x1="0" x2="1">
            <stop stop-color="#060a1d"/>
            <stop offset=".55" stop-color="#020d1d"/>
            <stop offset="1" stop-color="#051224"/>
        </linearGradient>
        <filter id="glow">
            <feGaussianBlur stdDeviation="24"/>
        </filter>
    </defs>
    <rect width="976" height="344" fill="url(#bg)"/>
    <ellipse cx="360" cy="35" rx="170" ry="94" fill="#0b913a" opacity=".38" filter="url(#glow)"/>
    <ellipse cx="754" cy="20" rx="140" ry="90" fill="#00b64b" opacity=".2" filter="url(#glow)"/>
    <g stroke="#10213c" stroke-width="2" opacity=".65">
        <path d="M0 283H976M0 309H976M0 335H976"/>
        <path d="M0 344L211 235M90 344L249 235M180 344L287 235M270 344L325 235M360 344L363 235M450 344L401 235M540 344L439 235M630 344L477 235M720 344L515 235M810 344L553 235M900 344L591 235M976 344L625 235"/>
    </g>
    <circle cx="335" cy="174" r="204" fill="url(#orb)" stroke="#31525b" stroke-opacity=".45" stroke-width="2"/>
    <circle cx="714" cy="352" r="95" fill="url(#orbSmall)" stroke="#426c62" stroke-opacity=".5" stroke-width="2"/>
    <g transform="translate(225 65)" stroke="#082d2d" stroke-width="7" stroke-linejoin="round">
        <path d="M53 40L83 10L126 15L148 0L177 18L219 12L219 47L198 65L211 111L190 151L151 180L108 163L91 139L68 130L61 95L40 69Z" fill="#348f60"/>
        <path d="M83 10L126 15L117 53L78 48L53 40Z" fill="#579790"/>
        <path d="M148 0L177 18L170 63L126 15Z" fill="#5f8f93"/>
        <path d="M177 18L219 12L219 47L181 58Z" fill="#4c7c7e"/>
        <path d="M78 48L117 53L133 84L91 91L61 70Z" fill="#55bd76"/>
        <path d="M117 53L170 63L164 95L133 84Z" fill="#2b6d64"/>
        <path d="M170 63L198 65L211 111L177 108L164 95Z" fill="#52b575"/>
        <path d="M91 91L133 84L151 119L108 126L68 102Z" fill="#41a769"/>
        <path d="M133 84L164 95L177 108L151 119Z" fill="#266c60"/>
        <path d="M68 102L108 126L108 163L91 139Z" fill="#247752"/>
        <path d="M108 126L151 119L190 151L151 180L108 163Z" fill="#37a767"/>
        <path d="M151 119L177 108L190 151Z" fill="#298257"/>
    </g>
    <g transform="translate(667 290)" stroke="#082d2d" stroke-width="6" stroke-linejoin="round">
        <path d="M6 16L30 0L58 5L79 0L104 13L101 37L82 57L49 66L20 53Z" fill="#4aac75"/>
        <path d="M30 0L58 5L54 30L11 25Z" fill="#6b9f9c"/>
        <path d="M58 5L79 0L84 31L54 30Z" fill="#477c7d"/>
        <path d="M11 25L54 30L49 66L20 53Z" fill="#38a66e"/>
        <path d="M54 30L84 31L82 57L49 66Z" fill="#24735d"/>
    </g>
</svg>
`)}</script>