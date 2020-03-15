import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import TitleText from '../texts/TitleText';

const Container = styled.div`
  pointer-events: none;
  inset: 0px;
`;

const Overlay = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.5) none repeat scroll 0% 0%;
  inset: 0px;
  pointer-events: all;
`;

const ModalContainer = styled.div`
  min-height: 48px;
  min-width: 40vw;
  max-height: 100vh;
  max-width: 100vw;
  pointer-events: all;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Modal = ({ children, title, onClose = () => {} }) => {
  const [modalContainer, setModalContainer] = useState();
  if (!process.browser) {
    return null;
  }

  useEffect(() => {
    const portalDom = document.getElementById('portals');
    const dom = document.createElement('div');
    portalDom.appendChild(dom);
    setModalContainer(dom);

    return function cleanup() {
      portalDom.removeChild(dom);
    };
  }, []);

  return modalContainer
    ? createPortal(
        <Container>
          <Overlay onClick={onClose} />
          <ModalContainer className='py-6 px-8 rounded'>
            <div className='flex flex-row items-start'>
              <TitleText>{title}</TitleText>
              <button className='block ml-auto' onClick={onClose}>
                <MdClose className='text-textGray' />
              </button>
            </div>
            {children}
          </ModalContainer>
        </Container>,
        modalContainer
      )
    : null;
};

export default Modal;
