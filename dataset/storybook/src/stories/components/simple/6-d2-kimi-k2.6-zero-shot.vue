<template>
    <div class="flex flex-col gap-3 w-80">
        <ProgressBar :value="progressValue" :pt="progressPt">
            25%
        </ProgressBar>
        <Tag value="Datei wird hochgeladen..." severity="info" rounded class="self-start" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import ProgressBar from 'primevue/progressbar';
import Tag from 'primevue/tag';

const progressValue = ref(25);

const progressPt = {
    root: {
        style: {
            height: '17.5px',
            borderRadius: '6px',
            backgroundColor: 'rgb(226, 232, 240)'
        }
    },
    value: {
        style: {
            backgroundColor: 'rgb(16, 185, 129)'
        }
    }
};
</script>