import React, {useState, useEffect} from 'react';
import { useSession } from  'react-use-session';


const useSessionModal = ()=> {
    const session = useSession('test');
    const [showModal, setShowModal] = useState(false);
    const hideModal = ()=>{
        const modalKey = "modalSession";
        localStorage.setItem(modalKey, session);
        setShowModal(false);
    }
    useEffect(()=> {
        const modalKey = "modalSession";
        const modalSession = localStorage.getItem(modalKey);
        setShowModal(modalSession!==session);
    });
    return [showModal, hideModal];
}

const Modal = () => {
    const [showModal, hideModal] = useSessionModal();
  return (
    <>
      {showModal ? (
        <div>
            <h1>IMPORTANT</h1>
            <button onClick={hideModal}>X</button>
        </div>
      ) : null}
    </>
  );
};

export default Modal;