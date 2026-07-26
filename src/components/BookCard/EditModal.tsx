'use client';

import {
  Button,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  TextInput,
  Textarea,
} from 'flowbite-react';
import { useEffect, useRef, useState } from 'react';

interface EditModalProps {
  onClose: () => void;
  currentVal: string;
  onSave: (newValue: string) => void;
  discardChangeLbl: string;
  acceptChangeLbl: string;
  modalTitle: string;
  placeholder: string;
  newValID: string;
  oldValID: string;
  changedValue: string;
  isMultiline?: boolean;
}

function EditModal({
  onClose,
  currentVal,
  onSave,
  discardChangeLbl,
  acceptChangeLbl,
  modalTitle,
  placeholder,
  newValID,
  oldValID,
  changedValue,
  isMultiline = false,
}: EditModalProps) {
  const [tempValue, setTempValue] = useState('');
  const inputFieldRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      inputFieldRef.current?.focus();
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  function onCloseModal() {
    setTempValue('');
    onClose();
  }

  function handleAcceptChanges(name: string) {
    onSave(name);
    onCloseModal();
  }

  return (
    <>
      <Modal show={true} size="md" onClose={onCloseModal} popup>
        <ModalHeader> {modalTitle} </ModalHeader>
        <ModalBody>
          <div>
            <Label htmlFor={oldValID}>Current {changedValue}:</Label>
            {isMultiline ? (
              <Textarea id={oldValID} readOnly value={currentVal} rows={6} />
            ) : (
              <TextInput id={oldValID} readOnly value={currentVal} />
            )}
          </div>
          <div>
            <Label htmlFor={newValID}>New {changedValue}:</Label>
            {isMultiline ? (
              <Textarea
                ref={inputFieldRef as React.RefObject<HTMLTextAreaElement>}
                id={newValID}
                value={tempValue}
                placeholder={placeholder}
                onChange={(e) => setTempValue(e.target.value)}
                rows={6}
              />
            ) : (
              <TextInput
                ref={inputFieldRef as React.RefObject<HTMLInputElement>}
                id={newValID}
                value={tempValue}
                placeholder={placeholder}
                onChange={(e) => setTempValue(e.target.value)}
              />
            )}
          </div>
          <div className="flex justify-end gap-2 mt-4">
            {tempValue.trim() && (
              <Button
                onClick={() => handleAcceptChanges(tempValue.trim())}
                className="w-fit bg-blue-500 text-white hover:bg-blue-700"
              >
                {acceptChangeLbl}
              </Button>
            )}
            <Button
              onClick={() => onCloseModal()}
              className="w-fit bg-blue-500 text-white hover:bg-blue-700"
            >
              {discardChangeLbl}
            </Button>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}

export default EditModal;
