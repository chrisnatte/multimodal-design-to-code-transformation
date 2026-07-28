<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-50 p-4">
    <Card class="w-full max-w-md shadow-lg overflow-hidden">
      <template #header>
        <div class="h-48 w-full bg-gray-900 overflow-hidden relative">
          <img
            src="https://placehold.co/600x200/0a1f0a/0a1f0a?text=+"
            alt="Header"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-32 h-32 rounded-full bg-green-500/20 flex items-center justify-center">
              <i class="pi pi-shield text-5xl text-green-400"></i>
            </div>
          </div>
        </div>
      </template>
      <template #content>
        <div class="flex flex-col gap-6 p-2">
          <div class="flex flex-col gap-1">
            <h2 class="text-xl font-semibold text-gray-800">Anmelden</h2>
            <p class="text-sm text-gray-500">
              Melde dich mit deiner E-Mail-Adresse und Passwort an.
            </p>
          </div>

          <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-2">
              <label for="email" class="text-sm font-medium text-gray-700">
                E-Mail-Adresse
              </label>
              <InputText
                id="email"
                v-model="email"
                type="email"
                class="w-full"
                placeholder=""
              />
            </div>

            <div class="flex flex-col gap-2">
              <label for="password" class="text-sm font-medium text-gray-700">
                Passwort
              </label>
              <div class="relative">
                <InputText
                  id="password"
                  v-model="password"
                  :type="showPassword ? 'text' : 'password'"
                  class="w-full pr-10"
                  placeholder=""
                />
                <button
                  type="button"
                  @click="showPassword = !showPassword"
                  class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                >
                  <i :class="showPassword ? 'pi pi-eye-slash' : 'pi pi-eye'"></i>
                </button>
              </div>
            </div>

            <div class="flex items-center gap-2">
              <Checkbox
                id="remember"
                v-model="rememberMe"
                :binary="true"
              />
              <label for="remember" class="text-sm text-gray-700 cursor-pointer">
                Angemeldet bleiben
              </label>
            </div>
          </div>

          <div class="flex items-center gap-3 pt-2">
            <Button
              label="Save"
              severity="secondary"
              class="px-4 py-2"
            />
            <Button
              label="Anmelden"
              icon="pi pi-lock"
              severity="success"
              class="px-6 py-2"
            />
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'

const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const showPassword = ref(false)
</script>