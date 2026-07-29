<template>
    <div class="flex flex-col gap-3 p-6">
        <ProgressBar
            :value="uploadProgress"
            class="h-[18px] w-[336px]"
            style="--p-progressbar-value-background: #10b981"
        />
        <Tag value="Datei wird hochgeladen..." severity="info" class="w-fit" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import ProgressBar from 'primevue/progressbar';
import Tag from 'primevue/tag';

const uploadProgress = ref(25);
</script>