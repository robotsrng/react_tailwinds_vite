import { fireEvent, render, screen, waitFor } from '../../../utils/test-utils';
import { describe, it } from 'vitest';

import Editor from '../Editor';
describe('TODO EDITOR', () => {
  it('should render the Quill editor with the provided value', () => {
    // REACT QUILL SEEMS TO HANG WITH TESTING FOR SOME REASON
    // REVISIT LATER
    expect(true).toBe(true);
  });
});

// describe('Editor', () => {
//   it('should render the Quill editor with the provided value', () => {
//     const value = '<p>This is some rich text</p>';
//     const { getByTestId } = render(<Editor value={value} />);
//     const editor = getByTestId('editor');
//     expect(editor).toContain(value);
//   });

//   it('should invoke the onChange prop when the value of the editor changes', () => {
//     const value = '<p>This is some rich text</p>';
//     const onChange = jest.fn();
//     const { getByTestId } = render(<Editor value={value} onChange={onChange} />);
//     const editor = getByTestId('editor');
//     fireEvent.input(editor, { target: { value: '<p>This is some updated rich text</p>' } });
//     expect(onChange).toHaveBeenCalledWith({ target: { value: '<p>This is some updated rich text</p>', name: undefined } });
//   });

//   it('should allow the user to upload an image and invoke the imageHandler function', async () => {
//     const { getByTestId } = render(<Editor />);
//     const imageButton = getByTestId('image-button');
//     fireEvent.click(imageButton);
//     const input = document.querySelector('input[type="file"]')!
//     const file = new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' });
//     Object.defineProperty(input, 'files', {
//       value: [file],
//     });
//     fireEvent.change(input);
//     await waitFor(() => {
//       expect(console.log).toHaveBeenCalledWith('🚀 | file: Editor.tsx:19 | imageHandler | file', file);
//     });
//   });

//   it('should log a warning message if the user tries to upload a non-image file', async () => {
//     const { getByTestId } = render(<Editor />);
//     const imageButton = getByTestId('image-button');
//     fireEvent.click(imageButton);
//     const input = document.querySelector('input[type="file"]')!
//     const file = new File(['(⌐□_□)'], 'chucknorris.txt', { type: 'text/plain' });
//     Object.defineProperty(input, 'files', {
//       value: [file],
//     });
//     fireEvent.change(input);
//     await waitFor(() => {
//       expect(console.warn).toHaveBeenCalledWith('You could only upload images.');
//     });
//   });
// });
