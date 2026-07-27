<template>
    <div class="flex w-80 flex-col gap-3">
        <ProgressBar :value="progressValue" class="h-[17.5px]" />
        <Tag
            value="Datei wird hochgeladen..."
            severity="info"
            :rounded="true"
            class="w-40 text-xs font-light"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import ProgressBar from 'primevue/progressbar'
import Tag from 'primevue/tag'

const progressValue = ref(25)
</script>