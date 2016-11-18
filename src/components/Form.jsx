import React from 'react';
import Reflux from 'reflux';
import CambioStore from '../stores/CambioStore.js';
import CambioAction from '../actions/CambioAction.js';
import 'react-datetime/css/react-datetime.css';
import moment from 'moment';
//import Checkbox from "react-checkbox-list"


var Form = React.createClass({

   mixins: [Reflux.connect(CambioStore, 'CambioStore')],


  //#region Definicion de propiedades
  getInitialState: function () {
    return {
      idReserva: '',
      Restaurante: '',
      idUsuario: '',
      price: '',
      description: '',
      date: moment(),
      Saldo:0,
      Pago:0,
      Costo:0

    };
  },
  //#endregion

  //#region Metodos
  nameChange: function (e){  
    this.setState({
      idUsuario: e.target.value 
    })
  },

    resChange: function (e){  
    this.setState({
      idReserva: e.target.value 
    })
  },
     RestauranteChange: function (e){  
    this.setState({
      Restaurante: e.target.value 
    })
  },
    PagoChange: function (e){  
    this.setState({
      Pago: e.target.value 
    })
  },
    SaldoChange: function (e){  
    this.setState({
      Saldo: e.target.value 
    })
  },

    CostoChange: function (e){  
    this.setState({
      Costo: e.target.value 
    })
  },


  MenuChange: function(e) {
    this.setState({
      selected : e.target.value
    })
  },
   

  recogedatos:function(){
       CambioAction.enviarDatos();
  },




  guardarClic: function() {
    if(this.state.idUsuario !== '' && this.state.Restaurante !== ''  && this.state.idReserva !== '' && this.state.Pago !== '' && this.state.selected!== undefined && this.state.Costo !== ''&& this.state.Saldo !== ''){
      alert(this.state.date) 
      CambioAction.crearCambio(this.state.idReserva, this.state.date, this.state.lista, this.state.description, this.state.selected); // React Component instance
    }
    else
    {
      alert('Falta por ingresar valores a los campo ')
    } 
  },
  //#endregion 

   
  render: function() {
    return (
      React.createElement('form', {className: 'form-group'},
             React.createElement("label", {className: "label"}, 'Identificacion de Usuario'),
        React.createElement('input', {
          type: 'number',
          className: 'form-control', 
           value:'readonly',    
          onChange: this.nameChange,
        }),
             React.createElement("label", {className: "label"}, 'Restaurante'),
        React.createElement('input', {
          type: 'text',
          value:'',
          className: 'form-control',       
          onChange: this.RestauranteChange,
        }),


        React.createElement("label", {className: "label"}, 'Codigo de la reserva'),
        React.createElement('input', {
          type: 'number',
          value:'readonly',
          className: 'form-control',      
          onChange: this.resChange,
        }),

        React.createElement("label", {className: "label"}, 'Pago Anterior de la reserva'),
        React.createElement("input",{
          type: 'number',
          value:'readonly',
          className:'form-control', 
          onChange:this.PagoChange.bind(this),
        }),

   React.createElement("label", {className: "label"}, 'Menu del Restaurante'),
        React.createElement("select", {
          value:this.state.selected,
          className: 'form-control',
          onChange:this.MenuChange
        },
        //falta cuadrar el menu
          React.createElement("option", { value: 9 }, ""),
          React.createElement("option", { value: 1 }, "Lunes"),
          React.createElement("option", { value: 2 }, "Martes"),
          React.createElement("option", { value: 3 }, "Miercoles"),
          React.createElement("option", { value: 4 }, "Jueves"),
          React.createElement("option", { value: 5 }, "Viernes"),
          React.createElement("option", { value: 6 }, "Sabado"),
          React.createElement("option", { value: 7 }, "Domingo"),
        ),

        React.createElement("label", {className: "label"}, 'Costo del Nuevo Menu'),
        React.createElement("input", {
          className: 'form-control',
          onChange:this.CostoChange
       }),

         React.createElement("label", {className: "label"}, 'Saldo del Cliente'),
        React.createElement("input", {
          className: 'form-control',
          onChange:this.SaldoChange
       }),
      
      

        React.createElement('input', {
          type: 'submit',
          onClick: this.guardarClic,
          className: 'btn-primary',
        }) ,
      )
    )
  },
});

export default Form;