import { ChangeEvent } from 'react';
import { ReactQuillProps } from 'react-quill';

export interface EditorProps extends Omit<ReactQuillProps, 'onChange'> {
  className?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
