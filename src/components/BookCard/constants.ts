import { type EditMode, type ModalConfig } from './types';

export const STATIC_MODAL_CONFIG: Record<
  Exclude<EditMode, null>,
  ModalConfig
> = {
  Author: {
    discardChangeLbl: 'Discard changes',
    acceptChangeLbl: 'Accept changes',
    modalTitle: 'Change author name',
    placeholder: 'Enter new author name',
    newValID: 'new-author-id',
    oldValID: 'old-author-id',
    changedValue: 'author name',
  },
  Title: {
    discardChangeLbl: 'Discard changes',
    acceptChangeLbl: 'Accept changes',
    modalTitle: 'Change book title',
    placeholder: 'Enter new book title',
    newValID: 'new-book-title-id',
    oldValID: 'old-book-title-id',
    changedValue: 'book title',
  },
  Description: {
    discardChangeLbl: 'Discard changes',
    acceptChangeLbl: 'Accept changes',
    modalTitle: 'Change book description',
    placeholder: 'Enter new book description',
    newValID: 'new-book-description-id',
    oldValID: 'old-book-description-id',
    changedValue: 'book description',
    isMultiline: true,
  },
};
