import { type EditMode, type ModalConfig } from './types';

export const STATIC_MODAL_CONFIG: Record<Exclude<Exclude<EditMode, null>, 'Id'>, ModalConfig> = {
  Author: {
    discardChangeLbl: 'Discard changes',
    acceptChangeLbl: 'Accept changes',
    modalTitle: 'Change author name',
    placeholder: 'Enter new author name',
    changedValue: 'author name',
  },
  Title: {
    discardChangeLbl: 'Discard changes',
    acceptChangeLbl: 'Accept changes',
    modalTitle: 'Change book title',
    placeholder: 'Enter new book title',
    changedValue: 'book title',
  },
  Description: {
    discardChangeLbl: 'Discard changes',
    acceptChangeLbl: 'Accept changes',
    modalTitle: 'Change book description',
    placeholder: 'Enter new book description',
    changedValue: 'book description',
    isMultiline: true,
  },
  Cover: {
    discardChangeLbl: 'Discard changes',
    acceptChangeLbl: 'Accept changes',
    modalTitle: 'Change book cover',
    placeholder: 'Enter new book cover URL',
    changedValue: 'book cover',
  },
};
