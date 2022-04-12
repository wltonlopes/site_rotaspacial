// import React from "react";
// // import { render } from '@testing-library/react';

// import App from '../App';
// import { Provider } from "react-redux";
// import store from "../redux/store/store";
// import { createStore } from "redux";
// import rootReducer from "../redux/reducers";
// import userEvent from "@testing-library/user-event";

// describe('Testando App',()=>{
//   test('Verifica se a tela inicial é renderizada',()=>{
//     // const {history}=renderWithRouter(
  
//     renderWithRouterAndRedux(
//         <App/>,
//     );
//     const inicialText = screen.getByText(/cadastrod de cliente/i)
//     expect(inicialText).toBeInTheDocument();
//   });
//   test('Verifica la se os dados de login são salvoszada',()=>{
//     // const {history}=renderWithRouter(
  
//     const{ store} = renderWithRouterAndRedux(
//         <App/>,
//         {initialEntreies:['/login']},
//     );
//     const emailInput = screen.getByTestId('input-email');
//     const passwordInput = screen.getByTestId('input-email');
//     const buttonLogin = screen.getByTestId('input-email');

//     userEvent.type(emailInput,'dsjfksjdkf.com');
//     userEvent.type(passwordInput,'12334');

//     userEvent.click(buttonLogin);

//     expect(store.getState().loginReducer.email).toBe('dsjfksjdkf.com');
//     expect(store.getState().loginReducer.senha).toBe('12334');

//   })
//   test('Verifica se usuario se cadastra',()=>{
//     // const {history}=renderWithRouter(
  
//     const{ store} = renderWithRouterAndRedux(
//         <App/>,
//         {
//           initialEntreies:['/register'],
//           initialState:{
//             email:'skadojdksfjksd.com',
//             password:'12345',
//           },
//         },
//     );
//     const nomeInput = screen.getByTestId('input-register-nome');
//     const ageInput = screen.getByTestId('input-register-idade');
//     const emailInput = screen.getByTestId('input-register-email');

//     const btnInput = screen.getByTestRole('button',{name:'tanobotao'});

//     userEvent.type(nomeInput, 'pernaLonga');
//     userEvent.type(ageInput, 12);
//     userEvent.type(emailInput, 'pernaLonga@fksdf.com');
    
//     userEvent.click(btnInput);

//     expect(store.getState().registerReducer[0].name).toBe('pernaLonga');

//   })
// })