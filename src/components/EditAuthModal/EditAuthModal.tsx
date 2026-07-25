'use client';

import {
  Button,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  TextInput,
} from 'flowbite-react';
import { useEffect, useRef, useState } from 'react';

interface EditAuthModalProps {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
  currentVal: string;
  onSave: (newValue: string) => void;
  discardChangeLbl: string;
  acceptChangeLbl: string;
  modalTitle: string;
  placeholder: string;
  newValID: string;
  oldValID: string;
  changedValue: string;
}

function EditAuthModal({
  isOpen,
  setIsOpen,
  currentVal,
  onSave,
  discardChangeLbl,
  acceptChangeLbl,
  modalTitle,
  placeholder,
  newValID,
  oldValID,
  changedValue,
}: EditAuthModalProps) {
  const [tempValue, setTempValue] = useState('');
  const inputFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        inputFieldRef.current?.focus();
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  function onCloseModal() {
    setIsOpen(false);
    setTempValue('');
  }

  function handleAcceptChanges(name: string) {
    onSave(name);
    onCloseModal();
  }

  return (
    <>
      <Modal show={isOpen} size="md" onClose={onCloseModal} popup>
        <ModalHeader> {modalTitle} </ModalHeader>
        <ModalBody>
          <div>
            <Label htmlFor={oldValID}>Current {changedValue}:</Label>
            <TextInput id={oldValID} readOnly value={currentVal} />
          </div>
          <div>
            <Label htmlFor={newValID}>New {changedValue}:</Label>
            <TextInput
              ref={inputFieldRef}
              id={newValID}
              value={tempValue}
              placeholder={placeholder}
              onChange={(e) => setTempValue(e.target.value)}
            ></TextInput>
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

export default EditAuthModal;
