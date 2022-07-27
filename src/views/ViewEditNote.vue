<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { useStoreNotes } from '@/stores/storeNotes';
import AddEditNote from '@/components/Notes/AddEditNote.vue';

const route = useRoute();
const router = useRouter();

const storeNotes = useStoreNotes();
const contentNote = ref('');
contentNote.value = storeNotes.getNote(route.params.id);

const handleUpdateNote = () => {
    storeNotes.updateNote(route.params.id, contentNote.value);
    router.push('/');
}
</script>

<template>
    <div class="edit-note">
        <AddEditNote v-model="contentNote" ref="addEditNoteRef" bgColor="link" placeholder="Edit note..."
            label="Edit note">
            <template #buttons>
                <!-- <RouterLink to="/" class="button is-link is-light mr-2"> Cancel</RouterLink> -->
                <button @click="$router.back()" class="button is-link is-light mr-2">
                    <!-- @click="$router.push('/')" -->
                    Cancel
                </button>
                <button class="button is-link has-background-link" @click="handleUpdateNote" :disabled="!contentNote">
                    Save note</button>
            </template>
        </AddEditNote>
    </div>
</template>