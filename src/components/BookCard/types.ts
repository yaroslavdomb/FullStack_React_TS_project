export interface ModalConfig {
  discardChangeLbl: string;
  acceptChangeLbl: string;
  modalTitle: string;
  placeholder: string;
  changedValue: string;
  isMultiline?: boolean | undefined;
}

export type EditMode = 'Author' | 'Title' | 'Description' | 'Cover' | null;

export const categoryMapper: Record<string, string> = {
  Author: 'author',
  'Book Name': 'title',
  Description: 'description',
  'Book ID': 'id',
};
