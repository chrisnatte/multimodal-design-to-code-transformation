import SimpleComponentFileUploadStatus from './6.vue'
import SimpleComponentFileUploadStatusMethodA from './6-a.vue'
import SimpleComponentFileUploadStatusMethodB1 from './6-b1.vue'
import SimpleComponentFileUploadStatusMethodB2 from './6-b2.vue'
import SimpleComponentFileUploadStatusMethodB3 from './6-b3.vue'

export default {
  title: 'Simple/6-File-Upload-Status',
  component: SimpleComponentFileUploadStatus,
}

export const Default = {}

export const MethodA = {
  render: () => ({
    components: { SimpleComponentFileUploadStatusMethodA },
    template: '<SimpleComponentFileUploadStatusMethodA />',
  }),
}

export const MethodB1 = {
  render: () => ({
    components: { SimpleComponentFileUploadStatusMethodB1 },
    template: '<SimpleComponentFileUploadStatusMethodB1 />',
  }),
}

export const MethodB2 = {
  render: () => ({
    components: { SimpleComponentFileUploadStatusMethodB2 },
    template: '<SimpleComponentFileUploadStatusMethodB2 />',
  }),
}

export const MethodB3 = {
  render: () => ({
    components: { SimpleComponentFileUploadStatusMethodB3 },
    template: '<SimpleComponentFileUploadStatusMethodB3 />',
  }),
}

