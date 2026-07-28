<template>
  <main class="flex min-h-screen items-start justify-center bg-white p-6">
    <section class="w-full max-w-[488px] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <header
        class="relative h-[172px] overflow-hidden bg-[radial-gradient(circle_at_32%_20%,#0b8e37_0%,#003b25_20%,transparent_40%),radial-gradient(circle_at_82%_8%,#006b37_0%,transparent_31%),linear-gradient(135deg,#02081b_0%,#061127_58%,#01101a_100%)]"
      >
        <div class="absolute inset-x-0 bottom-0 h-9 bg-[linear-gradient(rgba(20,74,96,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(20,74,96,0.18)_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:linear-gradient(to_top,black,transparent)]"></div>

        <div class="absolute -left-2 -top-5 flex h-[205px] w-[205px] items-center justify-center rounded-full border border-emerald-200/20 bg-[radial-gradient(circle_at_36%_22%,#2ac65f_0%,#116a35_35%,#071327_72%)] shadow-[inset_-14px_-20px_30px_rgba(0,0,0,0.55),0_8px_30px_rgba(0,0,0,0.35)]">
          <i class="pi pi-shield text-[78px] text-emerald-400 drop-shadow-[0_4px_1px_rgba(0,0,0,0.45)]"></i>
        </div>

        <div class="absolute -bottom-[68px] right-[72px] flex h-[116px] w-[116px] items-start justify-center rounded-full border border-emerald-200/20 bg-[radial-gradient(circle_at_38%_18%,#2dc85e_0%,#126a35_35%,#071327_74%)] shadow-[inset_-10px_-15px_24px_rgba(0,0,0,0.55)]">
          <i class="pi pi-shield mt-8 text-[46px] text-emerald-300"></i>
        </div>
      </header>

      <form class="flex flex-col gap-6 p-[17.5px]" @submit.prevent>
        <div class="flex flex-col gap-[7px]">
          <h1 class="text-[17.5px] font-medium leading-[21px] text-slate-700">Anmelden</h1>
          <p class="text-sm leading-[17px] text-slate-500">
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
              class="h-[33px] w-full text-sm"
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
              input-class="h-[33px] w-full text-sm"
              aria-label="Passwort"
            />
          </div>

          <div class="flex items-center gap-[7px]">
            <Checkbox v-model="rememberMe" input-id="remember-me" :binary="true" />
            <label for="remember-me" class="text-sm leading-[17px] text-slate-600">
              Angemeldet bleiben
            </label>
          </div>
        </div>

        <footer class="flex items-center gap-[7px]">
          <Button label="Save" severity="secondary" rounded size="small" type="button" />
          <Button
            label="Anmelden"
            icon="pi pi-unlock"
            rounded
            size="small"
            type="submit"
            class="!border-emerald-500 !bg-emerald-500 hover:!border-emerald-600 hover:!bg-emerald-600"
          />
        </footer>
      </form>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'

const email = ref('')
const password = ref('')
const rememberMe = ref(false)
</script>