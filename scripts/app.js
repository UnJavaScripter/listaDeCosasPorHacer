angular
	.module("ListaDeCosasPorHacer-App", [])
		//Esta no es la mejor forma de escribir módulos adicionales, pero la usaremos por ahora para evitar confusiones con referencias a varios archivos
		.controller("Controlador_Principal", function($scope){

			//Una lista temporal que se va a ver en el navegador
			//Para poder ver el estado completado la lista debe contener objetos en vez de strings simples.
			//Cada nuevo objeto contiene un string con el nombre de la tarea (Cosa por hacer) y su estado: completado o no completado como valor booleano (true o false)
			$scope.listaDeCosas = [
				{ tarea: "Hacer diapositivas", completada: false },
				{ tarea: "Comparar pan", completada: true },
				{ tarea: "Pagar Internet", completada: false}
			];

			$scope.agregarCosa = function(){
				//Si hay algo escrito en el campo de texto...
				if($scope.cosaNueva.length > 0){
					//Agregarlo a la lista de cosas y...
						//(Cada cosa nueva debe ser un objeto que sigue el patrón de $scope.listaDeCosa, debe tener las propiedades tarea  y completada)
					$scope.listaDeCosas.push({tarea: $scope.cosaNueva, completada: false});
				}
				//Borrar el contenido del campo de texto
				$scope.cosaNueva = "";
			};

		})