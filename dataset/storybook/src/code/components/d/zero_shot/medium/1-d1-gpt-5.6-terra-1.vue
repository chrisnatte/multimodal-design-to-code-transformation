<template>
  <main class="flex min-h-screen items-start justify-center bg-white p-6">
    <Card class="w-full max-w-[488px] overflow-hidden rounded-xl border border-surface-200 shadow-sm [&_.p-card-body]:p-0 [&_.p-card-content]:p-0">
      <template #content>
        <div class="relative h-[172px] overflow-hidden bg-gradient-to-br from-slate-950 via-slate-950 to-emerald-950">
          <div class="absolute -left-7 -top-14 h-[180px] w-[180px] rounded-full border border-emerald-300/20 bg-[radial-gradient(circle_at_38%_26%,#4ade80_0%,#166534_36%,#111827_70%)] shadow-[0_12px_24px_rgba(0,0,0,0.45)]"></div>
          <div class="absolute -bottom-16 right-[70px] h-[112px] w-[112px] rounded-full border border-emerald-300/20 bg-[radial-gradient(circle_at_42%_22%,#4ade80_0%,#166534_40%,#111827_74%)]"></div>
          <div class="absolute inset-x-0 bottom-0 h-8 bg-[linear-gradient(135deg,transparent_49%,rgba(16,185,129,0.09)_50%,transparent_51%),linear-gradient(45deg,transparent_49%,rgba(16,185,129,0.09)_50%,transparent_51%)] bg-[size:22px_22px]"></div>
          <Avatar icon="pi pi-shield" shape="circle" class="absolute left-[108px] top-[43px] !h-[74px] !w-[74px] !bg-emerald-600 !text-[42px] !text-emerald-100 shadow-lg" />
          <Avatar icon="pi pi-shield" shape="circle" class="absolute bottom-[-6px] right-[99px] !h-[49px] !w-[49px] !bg-emerald-600 !text-[27px] !text-emerald-100 shadow-lg" />
        </div>

        <form class="flex flex-col gap-6 p-[17.5px]" @submit.prevent="submitLogin">
          <div class="flex flex-col gap-[7px]">
            <h1 class="m-0 text-[17.5px] font-medium leading-[21px] text-slate-700">Anmelden</h1>
            <p class="m-0 text-sm leading-[17px] text-slate-500">Melde dich mit deiner E-Mail-Adresse und Passwort an.</p>
          </div>

          <div class="flex flex-col gap-3">
            <div class="flex flex-col gap-[7px]">
              <label for="email" class="text-sm leading-[21px] text-slate-700">E-Mail-Adresse</label>
              <InputText
                id="email"
                v-model="email"
                type="email"
                class="h-[33px] w-full !rounded-md !border-slate-300 !px-[10.5px] !py-[7px]"
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
                input-class="h-[33px] w-full !rounded-md !border-slate-300 !px-[10.5px] !py-[7px]"
              />
            </div>

            <div class="flex items-center gap-[7px]">
              <Checkbox v-model="rememberMe" input-id="remember" :binary="true" />
              <label for="remember" class="text-sm text-slate-600">Angemeldet bleiben</label>
            </div>
          </div>

          <div class="flex items-center gap-[7px]">
            <Button label="Save" severity="secondary" rounded size="small" type="button" @click="saveLogin" />
            <Button label="Anmelden" icon="pi pi-unlock" severity="success" rounded size="small" type="submit" />
          </div>
        </form>
      </template>
    </Card>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Checkbox from 'primevue/checkbox'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'

const email = ref('')
const password = ref('')
const rememberMe = ref(false)

const saveLogin = () => {}
const submitLogin = () => {}
</script>