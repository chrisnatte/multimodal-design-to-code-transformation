<template>
  <div class="w-64 min-h-screen bg-slate-200 flex flex-col justify-between p-4">
    <div>
      <h1 class="text-xl font-medium text-slate-700 px-2 mb-4">Emails</h1>

      <div class="flex flex-col gap-1">
        <div
          class="flex items-center gap-2 px-3 py-2 rounded-md bg-slate-300 cursor-pointer"
          @click="activeItem = 'postfach'"
        >
          <i class="pi pi-inbox text-slate-600"></i>
          <span class="text-slate-700">Postfach</span>
        </div>

        <div
          class="flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer hover:bg-slate-300"
          @click="activeItem = 'ordner'"
        >
          <i class="pi pi-folder text-slate-600"></i>
          <span class="text-slate-700">Ordner</span>
        </div>

        <div
          class="flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer hover:bg-slate-300"
          @click="activeItem = 'konto'"
        >
          <i class="pi pi-user text-slate-600"></i>
          <span class="text-slate-700">Konto</span>
        </div>
      </div>
    </div>

    <div>
      <Divider class="!my-2" />
      <div class="flex items-center gap-3 px-2 py-2">
        <Avatar :label="userInitial" shape="circle" style="background-color: #64748b; color: #ffffff" />
        <span class="text-slate-700">{{ userName }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Avatar from 'primevue/avatar';
import Divider from 'primevue/divider';

const activeItem = ref('postfach');
const userName = ref('Benutzername');
const userInitial = ref('B');
</script>