<template>
  <div class="p-6 bg-slate-100 min-h-screen">
    <Card class="max-w-4xl shadow-sm">
      <template #content>
        <div class="flex flex-col">
          <div class="flex items-center px-4 py-3 border-b border-slate-200 text-slate-700 font-semibold">
            <div class="flex-1">Nutzer</div>
            <div class="w-28">Status</div>
            <div class="w-64">Fortschritt</div>
            <div class="w-20 text-center">Aktion</div>
          </div>

          <div
            v-for="(user, index) in state.users"
            :key="user.id"
            class="flex items-center px-4 py-3 border-b border-slate-200"
          >
            <div class="flex-1 flex items-center gap-4">
              <Avatar :label="user.initials" shape="circle" class="bg-slate-200 text-slate-600" />
              <span class="text-slate-700 text-xl/none sm:text-[26px] md:text-[26px] lg:text-[26px] xl:text-[26px]" style="font-size: 28px; line-height: 1;">{{ user.name }}</span>
            </div>

            <div class="w-28">
              <Tag
                :value="user.status"
                :severity="user.statusSeverity"
                rounded
              />
            </div>

            <div class="w-64 flex flex-col gap-1">
              <span class="text-xs text-slate-600">{{ user.phase }}</span>
              <div class="flex items-center gap-3">
                <ProgressBar :value="user.progress" :showValue="false" class="flex-1 h-2" />
                <span class="text-sm text-slate-600 w-10 text-right">{{ user.progress }} %</span>
              </div>
            </div>

            <div class="w-20 flex justify-center relative">
              <Button
                icon="pi pi-ellipsis-h"
                text
                rounded
                severity="secondary"
                @click="toggleMenu(index)"
              />
              <Popover :visible="state.openMenuIndex === index" class="w-64">
                <div class="flex flex-col gap-2 p-1">
                  <Button label="Profil bearbeiten" icon="pi pi-pencil" outlined class="justify-start" />
                  <Button label="Status ändern" icon="pi pi-flag" outlined class="justify-start" />
                  <Button label="Duplizieren" icon="pi pi-copy" outlined class="justify-start" />
                  <Button label="Deaktivieren" icon="pi pi-trash" outlined class="justify-start" />
                </div>
              </Popover>
            </div>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Card from 'primevue/card'
import Avatar from 'primevue/avatar'
import Tag from 'primevue/tag'
import ProgressBar from 'primevue/progressbar'
import Button from 'primevue/button'
import Popover from 'primevue/popover'

const state = reactive({
  openMenuIndex: 2,
  users: [
    { id: 1, initials: 'M', name: 'Max Mustermann', status: 'In Prüfung', statusSeverity: 'danger', phase: 'Zertifizierung', progress: 45 },
    { id: 2, initials: 'A', name: 'Anna Schmidt', status: 'Aktiv', statusSeverity: 'success', phase: 'Onboarding', progress: 87 },
    { id: 3, initials: 'L', name: 'Lisa Weber', status: 'Inaktiv', statusSeverity: 'warn', phase: 'Onboarding', progress: 4 },
    { id: 4, initials: 'P', name: 'Paul Müller', status: 'Inaktiv', statusSeverity: 'warn', phase: 'Onboarding', progress: 11 }
  ]
})

const toggleMenu = (index) => {
  state.openMenuIndex = state.openMenuIndex === index ? null : index
}
</script>