'use client';

import { Button, Label, Modal, ModalBody, ModalHeader, TextInput, Textarea } from 'flowbite-react';
import { useEffect, useRef, useState, useId } from 'react';

interface EditModalProps {
  onClose: () => void;
  currentVal: string;
  onSave: (newValue: string) => void;
  discardChangeLbl: string;
  acceptChangeLbl: string;
  modalTitle: string;
  placeholder: string;
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

  const currentValId = useId();
  const newValId = useId();

  function onCloseModal() {
    setTempValue('');
    onClose();
  }

  function handleAcceptChanges(fieldNewValue: string) {
    onSave(fieldNewValue);
    onCloseModal();
  }

  return (
    <>
      <Modal show={true} size="md" onClose={onCloseModal} popup>
        <ModalHeader> {modalTitle} </ModalHeader>
        <ModalBody>
          <div>
            <Label htmlFor={currentValId}>
              <span className="mb-2 block">Current {changedValue}:</span>
              {isMultiline ? (
                <Textarea id={currentValId} readOnly value={currentVal} rows={6} />
              ) : (
                <TextInput id={currentValId} readOnly value={currentVal} />
              )}
            </Label>
          </div>
          <div>
            <Label htmlFor={newValId}>
              <span className="mb-2 block">New {changedValue}:</span>
              {isMultiline ? (
                <Textarea
                  ref={inputFieldRef as React.RefObject<HTMLTextAreaElement>}
                  value={tempValue}
                  placeholder={placeholder}
                  onChange={(e) => setTempValue(e.target.value)}
                  rows={6}
                  id={newValId}
                />
              ) : (
                <TextInput
                  ref={inputFieldRef as React.RefObject<HTMLInputElement>}
                  value={tempValue}
                  placeholder={placeholder}
                  onChange={(e) => setTempValue(e.target.value)}
                  id={newValId}
                />
              )}
            </Label>
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
            <Button onClick={() => onCloseModal()} className="w-fit bg-blue-500 text-white hover:bg-blue-700">
              {discardChangeLbl}
            </Button>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}

export default EditModal;
