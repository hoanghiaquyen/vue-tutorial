<script setup>
import { ref } from 'vue';

import { useStoreNotes } from '@/stores/storeNotes';
import { useWatchCharacter } from '@/use/useWatchCharacter';

import Note from '@/components/Notes/Note.vue';
import AddEditNote from '@/components/Notes/AddEditNote.vue';

const storeNotes = useStoreNotes();

const contentNote = ref('');
const addEditNoteRef = ref(null);

const addNewNote = () => {
    storeNotes.addNote(contentNote.value);
    contentNote.value = '';
    addEditNoteRef.value.focusTextarea();
};

// const deleteNote = (id) => {
//     storeNotes.notes = storeNotes.notes.filter(note => note.id !== id);
// }

useWatchCharacter(contentNote);
</script>

<template>
    <div class="notes">
        <AddEditNote v-model="contentNote" ref="addEditNoteRef" placeholder="Add a new note...">
            <!-- <template v-slot:buttons> -->
            <template #buttons>
                <button class="button is-link has-background-success" @click="addNewNote" :disabled="!contentNote">
                    Add new note</button>
            </template>
        </AddEditNote>
        <!-- <div class="container has-background-success-dark mb-5 p-4">
            <div class="field">
                <div class="control">
                    <textarea class="textarea" placeholder="Add a new note" v-model="contentNote" />
                </div>
            </div>

            <div class="field is-grouped is-grouped-right">
                <div class="control">
                    <button class="button is-link has-background-success" @click="addNewNote"
                        :disabled="!contentNote">Add new note</button>
                </div>
            </div>
        </div> -->
        <!-- <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" @handleDeleteNote="deleteNote" /> -->
        <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
    </div>
</template>