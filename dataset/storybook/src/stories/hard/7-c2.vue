<template>
  <div class="min-h-screen bg-surface-100 p-6">
    <div class="max-w-4xl mx-auto flex flex-col gap-4">
      <Card class="rounded-2xl">
        <template #content>
          <div class="flex flex-col -m-1">
            <div class="flex items-center justify-between px-4 py-3">
              <div class="flex items-center gap-3">
                <Avatar label="M" shape="circle" class="bg-surface-200 text-surface-700" />
                <div class="flex flex-col">
                  <span class="text-surface-800 text-2 font-medium">Max Mustermann</span>
                  <span class="text-surface-500 text-sm">Vor 5 Minuten</span>
                </div>
              </div>
              <Tag value="Einladung" severity="info" rounded />
            </div>

            <Divider class="!my-0" />

            <div class="px-4 py-4 text-surface-700 text-lg">
              Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.
            </div>

            <Divider class="!my-0" />

            <div class="flex justify-end gap-2 px-4 py-4">
              <Button label="Ablehnen" severity="secondary" />
              <Button label="Akzeptieren" severity="success" />
            </div>
          </div>
        </template>
      </Card>

      <Card class="rounded-2xl">
        <template #content>
          <div class="flex flex-col -m-1">
            <div class="flex items-center justify-between px-4 py-3">
              <div class="flex items-center gap-3">
                <Avatar label="A" shape="circle" class="bg-surface-200 text-surface-700" />
                <div class="flex flex-col">
                  <span class="text-surface-800 text-2 font-medium">Anna Schmidt</span>
                  <span class="text-surface-500 text-sm">Vor 24 Minuten</span>
                </div>
              </div>
              <Tag value="Review" severity="warn" rounded />
            </div>

            <Divider class="!my-0" />

            <div class="px-4 py-4 text-surface-700 text-lg">
              Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.
            </div>

            <Divider class="!my-0" />

            <div class="flex justify-end gap-2 px-4 py-4">
              <Button label="Ablehnen" severity="secondary" />
              <Button label="Akzeptieren" severity="success" />
            </div>
          </div>
        </template>
      </Card>

      <Card class="rounded-2xl">
        <template #content>
          <div class="flex flex-col -m-1">
            <div class="flex items-center justify-between px-4 py-3">
              <div class="flex items-center gap-3">
                <Avatar label="T" shape="circle" class="bg-surface-200 text-surface-700" />
                <div class="flex flex-col">
                  <span class="text-surface-800 text-2 font-medium">Tom Fischer</span>
                  <span class="text-surface-500 text-sm">Vor 1 Stunde</span>
                </div>
              </div>
              <Tag value="Zugriff" severity="danger" rounded />
            </div>

            <Divider class="!my-0" />

            <div class="px-4 py-4 text-surface-700 text-lg">
              Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.
            </div>

            <Divider class="!my-0" />

            <div class="flex justify-end gap-2 px-4 py-4">
              <Button label="Ablehnen" severity="secondary" />
              <Button label="Akzeptieren" severity="success" />
            </div>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Divider from 'primevue/divider';
import Tag from 'primevue/tag';

const state = reactive({
  notifications: [
    { id: 1, name: 'Max Mustermann', initial: 'M', time: 'Vor 5 Minuten', type: 'Einladung' },
    { id: 2, name: 'Anna Schmidt', initial: 'A', time: 'Vor 24 Minuten', type: 'Review' },
    { id: 3, name: 'Tom Fischer', initial: 'T', time: 'Vor 1 Stunde', type: 'Zugriff' }
  ]
});
</script>