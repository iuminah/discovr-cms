module.exports = {
  ckeditor: {
    enabled: true,
    config:{
      plugin:{
      },
      editor:{
        removePlugins: ['Markdown'],
        toolbar: {
          items: [
            'paragraph',
            'heading2',
            'heading3',
            'heading4',
            '|',
            'bold',
            'italic',
            'fontColor',
            'fontBackgroundColor',
            'underline',
            'fontSize',
            'removeFormat',
            '|',
            'bulletedList',
            'todoList',
            'numberedList',
            '|',
            'alignment',
            'outdent',
            'indent',
            'horizontalLine',
            '|',
            'insertTable',
            'blockQuote',
            'mediaEmbed',
            'link',
            'highlight',
            '|',
            "fullScreen",
            'undo',
            'redo'
          ]
        },
        fontSize: {
          options: [
              9,
              11,
              13,
              'default',
              17,
              19,
              21,
              27,
              35,
          ],
          supportAllValues: false
        },
        fontColor: {
          columns: 5,
          documentColors: 10,
        },
        fontBackgroundColor: {
          columns: 5,
          documentColors: 10,
        },
        image: {
          resizeUnit: "%",
          resizeOptions: [ {
            name: 'resizeImage:original',
            value: null,
            icon: 'original'
          },
          {
            name: 'resizeImage:25',
            value: '25',
            icon: 'small'
          },
          {
            name: 'resizeImage:50',
            value: '50',
            icon: 'medium'
          },
          {
            name: 'resizeImage:75',
            value: '75',
            icon: 'large'
          } ],
          toolbar: [
            'toggleImageCaption',
            'imageTextAlternative',
            'imageStyle:inline',
            'imageStyle:block',
            'imageStyle:side',
            'linkImage',
            'resizeImage:25', 'resizeImage:50', 'resizeImage:75', 'resizeImage:original'
          ]
        },
        // https://ckeditor.com/docs/ckeditor5/latest/features/table.html
        table: {
          contentToolbar: [
            'tableColumn',
            'tableRow',
            'mergeTableCells',
            'tableCellProperties',
            'tableProperties',
            'toggleTableCaption'
          ]
        },
        // https://ckeditor.com/docs/ckeditor5/latest/features/headings.html
        heading: {
          options: [
            { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
            { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
            { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
            { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
            { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
          ]
        },
        // https://ckeditor.com/docs/ckeditor5/latest/features/general-html-support.html
        htmlSupport: {
          allow: [
              {
                name: 'img',
                attributes: {
                    sizes:true,
                    loading:true,
                }
              },
          ]
        },
      }
    }
  },
  graphql: {
    config: {
      playgroundAlways: true,
      apolloServer: {
        introspection: true,
      }
    },
  },
};
