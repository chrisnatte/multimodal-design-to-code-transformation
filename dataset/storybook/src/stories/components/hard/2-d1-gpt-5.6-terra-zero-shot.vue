<template>
  <div class="w-full max-w-[716px] bg-white font-sans text-sm text-slate-700">
    <div class="grid h-[39px] grid-cols-[384px_224px_108px] border-b border-slate-200">
      <div class="flex items-center px-3.5 font-semibold">Nutzer</div>
      <div class="flex items-center px-3.5 font-semibold">Rolle</div>
      <div class="flex items-center justify-center px-3.5 font-semibold">Aktiv</div>
    </div>

    <div
      v-for="user in users"
      :key="user.name"
      class="grid h-[50px] grid-cols-[384px_224px_108px] border-b border-slate-200"
    >
      <div class="flex items-center gap-3 px-3.5">
        <Avatar
          :label="user.initial"
          shape="circle"
          class="!h-7 !w-7 !bg-slate-200 !text-sm !text-slate-600"
        />
        <span>{{ user.name }}</span>
      </div>

      <div class="flex items-center px-3.5">
        <Tag
          :value="user.role"
          :severity="user.severity"
          class="!px-1.5 !py-0.5 !text-[12px] !font-bold"
        />
      </div>

      <div class="flex items-center justify-center px-3.5">
        <Checkbox v-model="user.active" :binary="true" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Checkbox from 'primevue/checkbox'
import Tag from 'primevue/tag'

const users = ref([
  {
    initial: 'M',
    name: 'Max Mustermann',
    role: 'Administrator',
    severity: 'danger',
    active: true
  },
  {
    initial: 'A',
    name: 'Anna Schmidt',
    role: 'Projektleiter',
    severity: 'info',
    active: true
  },
  {
    initial: 'L',
    name: 'Lisa Weber',
    role: 'Gast',
    severity: 'warn',
    active: false
  },
  {
    initial: 'P',
    name: 'Paul Müller',
    role: 'Gast',
    severity: 'warn',
    active: true
  }
])
</script>