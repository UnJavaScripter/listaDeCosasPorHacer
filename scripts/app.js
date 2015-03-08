angular
	.module("ListaDeCosasPorHacer-App", [])
		//Esta no es la mejor forma de escribir módulos adicionales, pero la usaremos por ahora para evitar confusiones con referencias a varios archivos
		.controller("Controlador_Principal", function($scope){

			//Una lista temporal que se va a ver en el navegador
			$scope.listaDeCosas = ["Hacer diapositivas", "Comparar pan", "Pagar Internet"];

			$scope.agregarCosa = function(){
				//Si hay algo escrito en el campo de texto...
				if($scope.cosaNueva.length > 0){
					//Agregarlo a la lista de cosas y...
					$scope.listaDeCosas.push($scope.cosaNueva);
				}
				//Borrar el contenido del campo de texto
				$scope.cosaNueva = "";
			};

		})