<template>
  <div class="flex flex-col gap-4 p-6 max-w-4xl mx-auto bg-white font-sans">
    
    <!-- Card 1: Einladung -->
    <div class="border border-gray-200 rounded-xl flex flex-col">
      <!-- Header -->
      <div class="p-4 flex justify-between items-center">
        <div class="flex items-center gap-3">
          <Avatar label="M" shape="circle" class="bg-slate-200 text-slate-600 font-medium w-10 h-10 text-lg" />
          <div class="flex flex-col">
            <span class="text-gray-800 font-medium">Max Mustermann</span>
            <span class="text-gray-500 text-sm">Vor 5 Minuten</span>
          </div>
        </div>
        <Tag value="Einladung" class="bg-sky-100 text-sky-700 px-3 py-1 rounded-md font-semibold text-sm border-none" />
      </div>
      <!-- Body -->
      <div class="px-4 py-5 border-y border-gray-100 text-gray-700">
        Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.
      </div>
      <!-- Footer -->
      <div class="p-4 flex justify-end gap-3">
        <Button label="Ablehnen" class="bg-slate-100 text-slate-700 border-none hover:bg-slate-200 px-4 py-2 font-medium" />
        <Button label="Akzeptieren" class="bg-emerald-500 text-white border-none hover:bg-emerald-600 px-4 py-2 font-medium" />
      </div>
    </div>

    <!-- Card 2: Review -->
    <div class="border border-gray-200 rounded-xl flex flex-col">
      <!-- Header -->
      <div class="p-4 flex justify-between items-center">
        <div class="flex items-center gap-3">
          <Avatar label="A" shape="circle" class="bg-slate-200 text-slate-600 font-medium w-10 h-10 text-lg" />
          <div class="flex flex-col">
            <span class="text-gray-800 font-medium">Anna Schmidt</span>
            <span class="text-gray-500 text-sm">Vor 24 Minuten</span>
          </div>
        </div>
        <Tag value="Review" class="bg-orange-100 text-orange-700 px-3 py-1 rounded-md font-semibold text-sm border-none" />
      </div>
      <!-- Body -->
      <div class="px-4 py-5 border-y border-gray-100 text-gray-700">
        Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.
      </div>
      <!-- Footer -->
      <div class="p-4 flex justify-end gap-3">
        <Button label="Ablehnen" class="bg-slate-100 text-slate-700 border-none hover:bg-slate-200 px-4 py-2 font-medium" />
        <Button label="Akzeptieren" class="bg-emerald-500 text-white border-none hover:bg-emerald-600 px-4 py-2 font-medium" />
      </div>
    </div>

    <!-- Card 3: Zugriff -->
    <div class="border border-gray-200 rounded-xl flex flex-col">
      <!-- Header -->
      <div class="p-4 flex justify-between items-center">
        <div class="flex items-center gap-3">
          <Avatar label="T" shape="circle" class="bg-slate-200 text-slate-600 font-medium w-10 h-10 text-lg" />
          <div class="flex flex-col">
            <span class="text-gray-800 font-medium">Tom Fischer</span>
            <span class="text-gray-500 text-sm">Vor 1 Stunde</span>
          </div>
        </div>
        <Tag value="Zugriff" class="bg-rose-100 text-rose-700 px-3 py-1 rounded-md font-semibold text-sm border-none" />
      </div>
      <!-- Body -->
      <div class="px-4 py-5 border-y border-gray-100 text-gray-700">
        Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.
      </div>
      <!-- Footer -->
      <div class="p-4 flex justify-end gap-3">
        <Button label="Ablehnen" class="bg-slate-100 text-slate-700 border-none hover:bg-slate-200 px-4 py-2 font-medium" />
        <Button label="Akzeptieren" class="bg-emerald-500 text-white border-none hover:bg-emerald-600 px-4 py-2 font-medium" />
      </div>
    </div>

  </div>
</template>

<script setup>
import Avatar from 'primevue/avatar';
import Tag from 'primevue/tag';
import Button from 'primevue/button';
</script>