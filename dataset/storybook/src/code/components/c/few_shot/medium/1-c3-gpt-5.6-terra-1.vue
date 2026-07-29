<template>
  <main class="flex min-h-screen items-start justify-center bg-white p-6">
    <Card
      class="w-full max-w-[488px] overflow-hidden"
      :pt="{
        body: { class: '!p-0' },
        content: { class: '!p-0' },
      }"
    >
      <template #header>
        <Image
          :src="bannerSrc"
          alt="Grüne geometrische Löwenillustration"
          class="block h-[172px] w-full overflow-hidden"
          image-class="h-[172px] w-full object-cover"
        />
      </template>

      <template #content>
        <form class="flex flex-col gap-3 p-4" @submit.prevent="submitLogin">
          <div class="flex flex-col gap-1">
            <h1 class="m-0 text-lg font-medium text-slate-700">Anmelden</h1>
            <p class="m-0 text-sm text-slate-500">
              Melde dich mit deiner E-Mail-Adresse und Passwort an.
            </p>
          </div>

          <div class="mt-3 flex flex-col gap-2">
            <label for="email" class="text-sm text-slate-700">E-Mail-Adresse</label>
            <InputText v-model="email" input-id="email" type="email" fluid />
          </div>

          <div class="flex flex-col gap-2">
            <label for="password" class="text-sm text-slate-700">Passwort</label>
            <Password
              v-model="password"
              input-id="password"
              :feedback="false"
              toggle-mask
              fluid
              input-class="w-full"
            />
          </div>

          <div class="flex items-center gap-2">
            <Checkbox v-model="stayLoggedIn" input-id="stay-logged-in" binary />
            <label for="stay-logged-in" class="text-sm text-slate-600">Angemeldet bleiben</label>
          </div>

          <div class="mt-3 flex items-center gap-2">
            <Button label="Save" severity="secondary" rounded size="small" type="button" />
            <Button
              label="Anmelden"
              icon="pi pi-lock"
              rounded
              size="small"
              type="submit"
            />
          </div>
        </form>
      </template>
    </Card>
  </main>
</template>

<script setup lang="ts">
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

const bannerSrc = ref(
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='976' height='344' viewBox='0 0 976 344'%3E%3Cdefs%3E%3CradialGradient id='a' cx='35%25' cy='18%25' r='55%25'%3E%3Cstop stop-color='%23158734'/%3E%3Cstop offset='.62' stop-color='%23030c20'/%3E%3Cstop offset='1' stop-color='%23030a1b'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' x1='0' x2='1'%3E%3Cstop stop-color='%23030a1b'/%3E%3Cstop offset='.55' stop-color='%23040e22'/%3E%3Cstop offset='1' stop-color='%23020a19'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='976' height='344' fill='url(%23b)'/%3E%3Ccircle cx='332' cy='145' r='162' fill='url(%23a)' stroke='%23435b79' stroke-width='4'/%3E%3Ccircle cx='733' cy='342' r='96' fill='%23157d3d' stroke='%23435b79' stroke-width='3'/%3E%3Cpath d='M0 286H976M0 316H976M0 286L130 344M130 286L260 344M260 286L390 344M390 286L520 344M520 286L650 344M650 286L780 344M780 286L910 344M976 286L846 344M846 286L716 344M716 286L586 344M586 286L456 344M456 286L326 344M326 286L196 344M196 286L66 344' stroke='%23091b38' stroke-width='2'/%3E%3Cpath d='M255 100l42-23 54 8 43-7 35 35-19 55-24 39-54 34-53-35-22-48-25-22z' fill='%2337a968' stroke='%230c442f' stroke-width='7'/%3E%3Cpath d='M285 90l29-20 19 25 28-29 35 18-11 35-37 8-36-5z' fill='%2354767c' stroke='%23152f38' stroke-width='7'/%3E%3Cpath d='M254 103l31 4 21 30-18 28-34-11-18-33zM408 103l-28 7-20 31 17 27 35-12 16-34z' fill='%2352bd78' stroke='%23102f2c' stroke-width='6'/%3E%3Cpath d='M304 151l28 17 31-17 23 18-10 39-43 29-40-27-11-40z' fill='%232f8d58' stroke='%23102f2c' stroke-width='6'/%3E%3C/svg%3E"
)

function submitLogin() {
  void email.value
  void password.value
  void stayLoggedIn.value
}
</script>