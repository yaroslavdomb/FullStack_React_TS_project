export interface ModalConfig {
  discardChangeLbl: string;
  acceptChangeLbl: string;
  modalTitle: string;
  placeholder: string;
  newValID: string;
  oldValID: string;
  changedValue: string;
  isMultiline?: boolean | undefined;
}

export type EditMode = 'Author' | 'Title' | 'Description' | null;
