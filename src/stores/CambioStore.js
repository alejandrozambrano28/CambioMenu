import Reflux from 'reflux';
import $ from 'jquery';
import CambioActions from '../actions/CambioAction';

var CambioStore = Reflux.createStore({

    listenables: [CambioActions],
    lista: [],

   init: function() {
       this.enviarDatos();        
    },

    crearCambio: function(idReserva, date, selected, selected2) {    
      $.ajax({
      	crossDomain: true,
      	cache: false,
      	context: this,
      	url: '/home/estudiantelis/Escritorio/json.html',
  		  method: 'GET',
  		  processData: false,
  		  data: '{\n"restaurant": 1,\n"name":name", \n"date":date ,\n"price": price,\n"description": description"\n}',
		    success: function(data) {
          console.log('fetch complete');
         }
	    });
    },
 enviarDatos: function (){
      $.ajax({
        crossDomain: true,
        cache: false,
        context: this,
        url: 'http://192.168.193.40:8080/ProyectoIngWebService/rest/user/comida',
        method: 'GET',
        processData: false,
        data: '{\n"restaurant": 1,\n"name":name", \n"date":date ,\n"price": price,\n"description": description"\n}',
           success: function(data) {
            alert(data);
          console.log('fetch complete');
          this.lista = data.slice();
          this.trigger(this.lista);    
        }
      });
    }, 
 });
export default CambioStore;
