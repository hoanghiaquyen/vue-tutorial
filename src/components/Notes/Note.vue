<script setup>
import { computed, reactive, ref } from 'vue';
import { useStoreNotes } from '@/stores/storeNotes';

import ModalDeleteNote from './ModalDeleteNote.vue';

const modals = reactive({
    deleteNote: false
})
const noteIdDelete = ref(null);

const storeNotes = useStoreNotes();

const props = defineProps({
    note: {
        type: Object,
        required: true
    }
});

const calculateCharacters = computed(() => {
    const noteLength = props.note.content.length;
    const description = noteLength > 1 ? 'characters' : 'character';
    return `${noteLength} ${description}`;
})

const handleDeleteNote = () => {
    if (!noteIdDelete.value) {
        return;
    }
    storeNotes.deleteNote(noteIdDelete.value);
}

const showConfirm = (id) => {
    noteIdDelete.value = id
    modals.deleteNote = true;
}

const handleResetId = () => {
    noteIdDelete.value = null;
}
</script>

<template>
    <div class="card mb-4">
        <div class="card-content">
            <div class="content">
                {{ note.content }}

                <div class="has-text-right has-text-grey-light mt-2">
                    <small>{{ calculateCharacters }}</small>
                </div>
            </div>
        </div>
        <footer class="card-footer">
            <RouterLink :to="`/edit-note/${note.id}`" class="card-footer-item">Edit</RouterLink>
            <a href="#" class="card-footer-item" @click.prevent="showConfirm(note.id)">Delete</a>
        </footer>

        <ModalDeleteNote v-if="modals.deleteNote" v-model="modals.deleteNote" @handleDelete="handleDeleteNote"
            @resetIdDelete="handleResetId" />
    </div>
</template>