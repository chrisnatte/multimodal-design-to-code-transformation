<template>
  <div class="flex flex-col w-[716px] bg-white">
    <div class="flex h-[39px] border-b border-slate-200">
      <div class="flex items-center px-3.5 w-96 font-semibold text-sm text-slate-700">
        Nutzer
      </div>
      <div class="flex items-center px-3.5 w-56 font-semibold text-sm text-slate-700">
        Rolle
      </div>
      <div class="flex items-center justify-center px-3.5 w-[108px] font-semibold text-sm text-slate-700">
        Aktiv
      </div>
    </div>
    <div class="flex flex-col">
      <div
        v-for="user in users"
        :key="user.id"
        class="flex h-[50px] border-b border-slate-200"
      >
        <div class="flex items-center px-3.5 py-[10.5px] w-96">
          <div class="flex items-center gap-3">
            <Avatar
              :label="user.initial"
              shape="circle"
              class="bg-slate-200 text-slate-700 w-7 h-7 text-sm"
            />
            <span class="text-sm text-slate-700">{{ user.name }}</span>
          </div>
        </div>
        <div class="flex items-center px-3.5 py-[10.5px] w-56">
          <Tag
            :value="user.role"
            :severity="user.severity"
            class="text-xs font-bold"
          />
        </div>
        <div class="flex items-center justify-center px-3.5 py-[10.5px] w-[108px]">
          <Checkbox v-model="user.active" binary />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Tag from 'primevue/tag'
import Checkbox from 'primevue/checkbox'

const users = ref([
  { id: 1, name: 'Max Mustermann', initial: 'M', role: 'Administrator', severity: 'danger', active: true },
  { id: 2, name: 'Anna Schmidt', initial: 'A', role: 'Projektleiter', severity: 'info', active: true },
  { id: 3, name: 'Lisa Weber', initial: 'L', role: 'Gast', severity: 'warn', active: false },
  { id: 4, name: 'Paul Müller', initial: 'P', role: 'Gast', severity: 'warn', active: true }
])
</script>