import React, { useMemo } from 'react';
import { EditorProps } from './types';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Editor = React.forwardRef<ReactQuill, EditorProps>(({ children, className, onChange, ...rest }, ref) => {
  // TODO - Fix image upload so that the image is stored locally, then sent to the server on save, and the
  // urls are updated in the richtext

  // TODO Move this to a helper
  const imageHandler = async () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();
    input.onchange = () => {
      const file = input?.files?.[0];

      // file type is only image.
      if (file && /^image\//.test(file.type)) {
        // saveToServer(file);
      } else {
        console.warn('You could only upload images.');
      }
    };
  };
  const handleChange = (value: string) => {
    onChange?.({ target: { value, name } });
  };
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, false] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
          ['link', 'image'],
          ['clean'],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    }),
    []
  );
  return <ReactQuill ref={ref} modules={modules} onChange={handleChange} {...rest} />;
});

export default Editor;
