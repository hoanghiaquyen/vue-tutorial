import { defineStore } from "pinia";

export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes: [
        {
          id: "id1",
          content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid exercitationem eveniet, veritatis
                    nesciunt facere aliquam. Quidem, inventore doloribus veniam repudiandae sint ipsum deleniti et
                    facere rerum architecto voluptate. Similique, quas.`,
        },
        {
          id: "id2",
          content: `Note 2`,
        },
      ],
    };
  },
  actions: {
    addNote(content) {
      this.notes.unshift({
        id: Date.now(),
        content,
      });
    },
    deleteNote(id) {
      this.notes = this.notes.filter((note) => note.id !== id);
    },
    updateNote(id, content) {
      this.notes = this.notes.map((note) => {
        if (note.id === id) {
          note.content = content;
        }
        return note;
      });
    },
  },
  getters: {
    getNote(state) {
      return (id) => {
        return state.notes.find((note) => note.id === id)?.content ?? "";
      };
    },
    totalNote: (state) => state.notes.length,
    totalCharacters: (state) => {
      return state.notes.reduce((total, note) => {
        return total + note.content.length;
      }, 0);
    },
  },
});
