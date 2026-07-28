<template>
  <main class="min-h-screen bg-white p-6">
    <section class="mx-auto flex max-w-[640px] flex-col gap-4">
      <Card
        class="overflow-hidden border border-slate-100 shadow-sm"
        :pt="{ body: { class: 'p-0' }, content: { class: 'p-0' } }"
      >
        <template #content>
          <div class="flex h-16 items-center justify-between px-2.5">
            <div class="flex items-center gap-3">
              <Avatar
                label="M"
                shape="circle"
                class="h-7 w-7 bg-slate-200 text-sm text-slate-600"
              />
              <div class="flex flex-col leading-tight">
                <span class="text-sm font-medium text-slate-700">Max Mustermann</span>
                <span class="text-[11px] text-slate-500">Vor 5 Minuten</span>
              </div>
            </div>
            <Tag value="Einladung" severity="info" class="text-xs" />
          </div>

          <Divider class="m-0" />

          <div class="flex h-[50px] items-center px-4 text-sm text-slate-700">
            Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.
          </div>

          <Divider class="m-0" />

          <div class="flex h-[72px] items-center justify-end gap-2 px-4">
            <Button label="Ablehnen" severity="secondary" size="small" />
            <Button label="Akzeptieren" severity="success" size="small" />
          </div>
        </template>
      </Card>

      <Card
        class="overflow-hidden border border-slate-100 shadow-sm"
        :pt="{ body: { class: 'p-0' }, content: { class: 'p-0' } }"
      >
        <template #content>
          <div class="flex h-16 items-center justify-between px-2.5">
            <div class="flex items-center gap-3">
              <Avatar
                label="A"
                shape="circle"
                class="h-7 w-7 bg-slate-200 text-sm text-slate-600"
              />
              <div class="flex flex-col leading-tight">
                <span class="text-sm font-medium text-slate-700">Anna Schmidt</span>
                <span class="text-[11px] text-slate-500">Vor 24 Minuten</span>
              </div>
            </div>
            <Tag value="Review" severity="warn" class="text-xs" />
          </div>

          <Divider class="m-0" />

          <div class="flex h-[50px] items-center px-4 text-sm text-slate-700">
            Bitte um dein Review für den Pull Request #42 – Neue Navigationsstruktur.
          </div>

          <Divider class="m-0" />

          <div class="flex h-[72px] items-center justify-end gap-2 px-4">
            <Button label="Ablehnen" severity="secondary" size="small" />
            <Button label="Akzeptieren" severity="success" size="small" />
          </div>
        </template>
      </Card>

      <Card
        class="overflow-hidden border border-slate-100 shadow-sm"
        :pt="{ body: { class: 'p-0' }, content: { class: 'p-0' } }"
      >
        <template #content>
          <div class="flex h-16 items-center justify-between px-2.5">
            <div class="flex items-center gap-3">
              <Avatar
                label="T"
                shape="circle"
                class="h-7 w-7 bg-slate-200 text-sm text-slate-600"
              />
              <div class="flex flex-col leading-tight">
                <span class="text-sm font-medium text-slate-700">Tom Fischer</span>
                <span class="text-[11px] text-slate-500">Vor 1 Stunde</span>
              </div>
            </div>
            <Tag value="Zugriff" severity="danger" class="text-xs" />
          </div>

          <Divider class="m-0" />

          <div class="flex h-[74px] items-center px-4 text-sm leading-6 text-slate-700">
            Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die
            Berechtigung.
          </div>

          <Divider class="m-0" />

          <div class="flex h-[72px] items-center justify-end gap-2 px-4">
            <Button label="Ablehnen" severity="secondary" size="small" />
            <Button label="Akzeptieren" severity="success" size="small" />
          </div>
        </template>
      </Card>
    </section>
  </main>
</template>

<script setup>
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Divider from 'primevue/divider'
import Tag from 'primevue/tag'
</script>