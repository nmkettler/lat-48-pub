import React, { useContext } from 'react';
import '../our-work.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Context } from '../../../store';
const ReactModal = require('react-modal');

export default (props) => {
  const { store, dispatch } = useContext(Context);

  return (
    <React.Fragment>
      <ReactModal
        isOpen={store.showModal1}
        onRequestClose={store.showModal1}
        className="Modal"
        overlayClassName="Overlay">
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <p className='text-right close-modal' onClick={() => dispatch({ type: 'CLOSE', statusHasBeenChanged: false, tileNumber: store.tileNumber })}><FontAwesomeIcon icon={faTimes} /></p>
              <h1>{props.workTile[store.tileNumber].name}</h1>
              {props.workTile[store.tileNumber].description}
            </div>
          </div>
        </div>
      </ReactModal>
    </React.Fragment>
  );
};
