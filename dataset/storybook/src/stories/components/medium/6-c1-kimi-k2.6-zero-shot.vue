<template>
  <div class="flex justify-center p-8 bg-gray-50 min-h-screen">
    <Card class="w-full max-w-md shadow-sm">
      <template #content>
        <div class="flex flex-col items-center gap-4 pt-2">
          <Avatar label="B" class="bg-slate-200 text-slate-700 text-2xl font-medium rounded-lg" style="width: 80px; height: 80px;" />

          <h2 class="text-xl font-medium text-gray-900">Benutzername</h2>

          <TabMenu v-model="activeIndex" :model="items" class="w-full mt-2" />

          <div class="text-gray-600 text-sm leading-relaxed mt-2 px-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Card from 'primevue/card'
import Avatar from 'primevue/avatar'
import TabMenu from 'primevue/tabmenu'

const activeIndex = ref(1)

const items = ref([
  { label: 'Profil' },
  { label: 'Informationen' },
  { label: 'Sicherheit' },
  { label: 'Aktivität' }
])
</script>