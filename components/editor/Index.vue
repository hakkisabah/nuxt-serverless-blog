<template>
  <div v-if="editor" class="editor">
    <menu-bar class="editor__header" :editor="editor" />
    <editor-content class="editor__content" :editor="editor" />
  </div>
</template>

<script>
import MenuBar from '@/components/editor/MenuBar'
import { Editor, EditorContent } from '@tiptap/vue-2'
import StarterKit from '@tiptap/starter-kit'
export default {
  name: 'Index',
  components: {
    EditorContent,
    MenuBar,
  },
  data() {
    return {
      editor: null,
      editorData: null,
      extensions: null,
    }
  },
  mounted() {
    this.extensions = [StarterKit]
    this.editor = new Editor({
      extensions: [...this.extensions],
      content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
      // triggered on every change
      onUpdate: ({ editor }) => {
        this.editorData = editor.getJSON()
      },
    })
    // TODO : get from mongo db instead getJSON
    this.editorData = this.editor.getJSON()
    // eslint-disable-next-line no-console
    console.log(this.editorData)
    this.setContent()
  },
  beforeDestroy() {
    this.editor.destroy()
  },
  methods: {
    setContent() {
      // eslint-disable-next-line no-console
      setTimeout(() => {
        // eslint-disable-next-line no-console
        console.log(this.editor.commands.setContent(`test`))
      }, 3000)
    },
  },
}
</script>

<style lang="scss">
.editor {
  display: flex;
  flex-direction: column;
  max-height: 26rem;
  color: #0d0d0d;
  background-color: #fff;
  border: 3px solid #0d0d0d;
  border-radius: 0.75rem;

  &__header {
    display: flex;
    align-items: center;
    flex: 0 0 auto;
    flex-wrap: wrap;
    padding: 0.25rem;
    border-bottom: 3px solid #0d0d0d;
  }

  &__content {
    padding: 1.25rem 1rem;
    flex: 1 1 auto;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }

  &__footer {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    white-space: nowrap;
    border-top: 3px solid #0d0d0d;
    font-size: 12px;
    font-weight: 600;
    color: #0d0d0d;
    white-space: nowrap;
    padding: 0.25rem 0.75rem;
  }

  /* Some information about the status */
  &__status {
    display: flex;
    align-items: center;
    border-radius: 5px;

    &::before {
      content: ' ';
      flex: 0 0 auto;
      display: inline-block;
      width: 0.5rem;
      height: 0.5rem;
      background: rgba(#0d0d0d, 0.5);
      border-radius: 50%;
      margin-right: 0.5rem;
    }

    &--connecting::before {
      background: #616161;
    }

    &--connected::before {
      background: #b9f18d;
    }
  }

  &__name {
    button {
      background: none;
      border: none;
      font: inherit;
      font-size: 12px;
      font-weight: 600;
      color: #0d0d0d;
      border-radius: 0.4rem;
      padding: 0.25rem 0.5rem;

      &:hover {
        color: #fff;
        background-color: #0d0d0d;
      }
    }
  }
}
</style>
