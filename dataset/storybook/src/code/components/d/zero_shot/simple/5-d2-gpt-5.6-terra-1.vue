<template>
    <form class="flex h-[230.5px] w-[304px] flex-col bg-white p-6" @submit.prevent="submitFeedback">
        <div class="flex w-64 flex-col gap-6">
            <Textarea
                id="feedback"
                v-model="feedback"
                variant="filled"
                rows="3"
                fluid
                placeholder="Feedback eingeben..."
                aria-label="Feedback eingeben"
                class="!h-[84px] !resize-none !rounded-md !border-[#cbd5e1] !bg-[#f8fafc] !px-[10.5px] !py-[7px] !text-sm"
            />

            <div class="flex h-[17.5px] items-center gap-[7px]">
                <Checkbox
                    v-model="sendAnonymously"
                    inputId="anonymous"
                    binary
                    aria-label="Anonym senden"
                    class="!h-[17.5px] !w-[17.5px]"
                    style="--p-checkbox-width: 17.5px; --p-checkbox-height: 17.5px; --p-checkbox-border-radius: 4px; --p-checkbox-border-color: #cbd5e1;"
                />
                <label for="anonymous" class="text-sm font-normal text-slate-600">Anonym senden</label>
            </div>

            <Button
                type="submit"
                label="Absenden"
                icon="pi pi-check"
                iconPos="right"
                class="!h-[33px] !w-fit !border-[#10b981] !bg-[#10b981] !px-3 !py-2 !text-sm !font-medium"
            />
        </div>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import Textarea from 'primevue/textarea';

const feedback = ref('');
const sendAnonymously = ref(false);

const submitFeedback = () => {};
</script>