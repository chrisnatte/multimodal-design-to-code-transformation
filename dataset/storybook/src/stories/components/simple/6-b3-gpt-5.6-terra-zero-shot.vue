<template>
    <div class="flex w-80 flex-col gap-3">
        <ProgressBar
            :value="uploadProgress"
            :showValue="false"
            class="h-[17.5px] w-full"
            :pt="{
                root: { class: 'h-[17.5px] rounded-md bg-[#e2e8f0]' },
                value: { class: 'flex items-center justify-center rounded-l-md bg-[#10b981]' }
            }"
        >
            <span class="text-[10.5px] font-semibold text-white">{{ uploadProgress }}%</span>
        </ProgressBar>

        <Tag
            :value="uploadStatus"
            severity="info"
            rounded
            class="w-fit bg-[#e0f2fe] px-[7px] py-[3px] text-[12.25px] font-light"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import ProgressBar from 'primevue/progressbar';
import Tag from 'primevue/tag';

const uploadProgress = ref(25);
const uploadStatus = ref('Datei wird hochgeladen...');
</script>