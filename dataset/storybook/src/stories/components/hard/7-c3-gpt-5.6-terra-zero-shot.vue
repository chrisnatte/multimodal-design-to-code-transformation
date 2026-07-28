<template>
    <main class="w-full p-6">
        <div class="flex w-full flex-col gap-4">
            <Card
                v-for="notification in notifications"
                :key="notification.name"
                class="w-full overflow-hidden rounded-xl !border !border-slate-100 !shadow-sm"
                :pt="{ content: { class: '!p-0' } }"
            >
                <template #content>
                    <div class="flex items-center justify-between px-2.5 py-2.5">
                        <div class="flex items-center gap-3">
                            <Avatar
                                :label="notification.initial"
                                shape="circle"
                                class="!h-7 !w-7 !bg-slate-200 !text-sm !text-slate-600"
                            />
                            <div class="flex flex-col">
                                <span class="text-sm font-medium text-slate-700">{{ notification.name }}</span>
                                <span class="text-[11px] leading-3 text-slate-500">{{ notification.time }}</span>
                            </div>
                        </div>
                        <Tag
                            :value="notification.tag"
                            :severity="notification.tagSeverity"
                            class="!px-2 !py-1 !text-xs"
                        />
                    </div>

                    <Divider class="!my-0" />

                    <div class="px-4 py-4">
                        <p class="m-0 text-sm leading-6 text-slate-700">
                            {{ notification.message }}
                        </p>
                    </div>

                    <Divider class="!my-0" />

                    <div class="flex justify-end gap-2 px-4 py-5">
                        <Button
                            label="Ablehnen"
                            severity="secondary"
                            size="small"
                            @click="notification.response = 'declined'"
                        />
                        <Button
                            label="Akzeptieren"
                            severity="success"
                            size="small"
                            @click="notification.response = 'accepted'"
                        />
                    </div>
                </template>
            </Card>
        </div>
    </main>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Divider from 'primevue/divider'
import Tag from 'primevue/tag'

const notifications = ref([
    {
        initial: 'M',
        name: 'Max Mustermann',
        time: 'Vor 5 Minuten',
        tag: 'Einladung',
        tagSeverity: 'info',
        message: 'Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.',
        response: null
    },
    {
        initial: 'A',
        name: 'Anna Schmidt',
        time: 'Vor 24 Minuten',
        tag: 'Review',
        tagSeverity: 'warn',
        message: 'Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.',
        response: null
    },
    {
        initial: 'T',
        name: 'Tom Fischer',
        time: 'Vor 1 Stunde',
        tag: 'Zugriff',
        tagSeverity: 'danger',
        message: 'Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.',
        response: null
    }
])
</script>