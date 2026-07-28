<template>
    <div class="flex w-80 flex-col gap-3">
        <ProgressBar
            :value="progressValue"
            :showValue="true"
            aria-label="Upload-Fortschritt"
            class="w-full"
            :pt="{
                root: { class: 'h-[17.5px] rounded-md bg-[#e2e8f0]' },
                value: { class: 'bg-[#10b981]' },
                label: { class: 'text-[10.5px] font-semibold text-white' }
            }"
        />
        <Tag
            value="Datei wird hochgeladen..."
            severity="info"
            rounded
            class="w-fit text-[12.25px] font-light"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import ProgressBar from 'primevue/progressbar';
import Tag from 'primevue/tag';

const progressValue = ref(25);
</script>