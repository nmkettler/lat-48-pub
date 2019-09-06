import React, { Component, createContext, useContext, useReducer } from 'react';
import './our-work.css';
import pic from '../../images/tunnel.jpg';
import Modal1 from './modals/modal1';
import { Context } from '../../store';

const OurWork = (props) => {
  const { store, dispatch } = useContext(Context);

  // function openModal (dispatch) {
  //   return {
  //     type: 'open',
  //   }
  //   dispatch({
  //     type: 'open',
  //   });
  // }
  
  // function closeModal() {
  //   dispatch({
  //     type: 'close',
  //   });
  // }
  console.log(props);

  return (
    <React.Fragment>
      <div className='our-work-wrapper'>
        <div className='inner-our-work-div'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-12'>
                <h1 className='text-center our-work-welcome-title sec-title'>Our Work</h1>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-4'>
                <Modal1 {...props} />
                <div className='work-tile' onClick={() => dispatch({ type: 'OPEN', statusHasBeenChanged: true, tileNumber: 0 })}>
                  <img className="img-fluid" src={pic} />
                  <div className='tile-inner-text'>
                    <p>Bacon ipsum dolor amet swine prosciutto pastrami turducken doner.</p>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='work-tile' onClick={() => dispatch({ type: 'OPEN', statusHasBeenChanged: true, tileNumber: 1 })}>
                  <img className="img-fluid" src={pic} />
                  <div className='tile-inner-text'>
                    <p>Bacon ipsum dolor amet swine prosciutto pastrami turducken doner.</p>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='work-tile' onClick={() => dispatch({ type: 'OPEN', statusHasBeenChanged: true, tileNumber: 2 })}>
                  <img className="img-fluid" src={pic} />
                  <div className='tile-inner-text'>
                    <p>Bacon ipsum dolor amet swine prosciutto pastrami turducken doner.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-4'>
                <div className='work-tile' onClick={() => dispatch({ type: 'OPEN', statusHasBeenChanged: true, tileNumber: 3 })}>
                  <img className="img-fluid" src={pic} />
                  <div className='tile-inner-text'>
                    <p>Bacon ipsum dolor amet swine prosciutto pastrami turducken doner.</p>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='work-tile' onClick={() => dispatch({ type: 'OPEN', statusHasBeenChanged: true, tileNumber: 4 })}>
                  <img className="img-fluid" src={pic} />
                  <div className='tile-inner-text'>
                    <p>Bacon ipsum dolor amet swine prosciutto pastrami turducken doner.</p>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='work-tile' onClick={() => dispatch({ type: 'OPEN', statusHasBeenChanged: true, tileNumber: 5 })}>
                  <img className="img-fluid" src={pic} />
                  <div className='tile-inner-text'>
                    <p>Bacon ipsum dolor amet swine prosciutto pastrami turducken doner.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OurWork;

// class OurWork extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       showModal1: false,
//     }

//     this.handleCloseModal1 = this.handleCloseModal1.bind(this)
//   }

//   handleOpenModal1 () {

//     this.setState({
//       showModal1: true,
//     })
//   }

//   handleCloseModal1 () {
//     this.setState({
//       showModal1: false,
//     })
//   }

//   render () {
//     console.log(store)
//     return (
//       <React.Fragment>
//         <div className='our-work-wrapper'>
//           <div className='inner-our-work-div'>
//             <div className='container-fluid'>
//               <div className='row'>
//                 <div className='col-md-12'>
//                   <h1 className='text-center our-work-welcome-title sec-title'>Our Work</h1>
//                 </div>
//               </div>
//               <div className='row'>
//                 <div className='col-md-4' onClick={() => this.handleOpenModal1()}>
//                   <Modal1 {...this.state} handleCloseModal= {this.handleCloseModal1}/>
//                   <div className='work-tile'>
//                     <img className="img-fluid" src={pic} />
//                     <div className='tile-inner-text'>
//                       <p>Bacon ipsum dolor amet swine prosciutto pastrami turducken doner.</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className='col-md-4'>
//                   <div className='work-tile'>
//                     <img className="img-fluid" src={pic} />
//                     <div className='tile-inner-text'>
//                       <p>Bacon ipsum dolor amet swine prosciutto pastrami turducken doner.</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className='col-md-4'>
//                   <div className='work-tile'>
//                     <img className="img-fluid" src={pic} />
//                     <div className='tile-inner-text'>
//                       <p>Bacon ipsum dolor amet swine prosciutto pastrami turducken doner.</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className='row'>
//                 <div className='col-md-4'>
//                   <div className='work-tile'>
//                     <img className="img-fluid" src={pic} />
//                     <div className='tile-inner-text'>
//                       <p>Bacon ipsum dolor amet swine prosciutto pastrami turducken doner.</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className='col-md-4'>
//                   <div className='work-tile'>
//                     <img className="img-fluid" src={pic} />
//                     <div className='tile-inner-text'>
//                       <p>Bacon ipsum dolor amet swine prosciutto pastrami turducken doner.</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className='col-md-4'>
//                   <div className='work-tile'>
//                     <img className="img-fluid" src={pic} />
//                     <div className='tile-inner-text'>
//                       <p>Bacon ipsum dolor amet swine prosciutto pastrami turducken doner.</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </React.Fragment>
//     );
//   }
// }

// export default OurWork;
