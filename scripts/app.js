angular
	.module("ListaDeCosasPorHacer-App", [])
		//Esta no es la mejor forma de escribir módulos adicionales, pero la usaremos por ahora para evitar confusiones con referencias a varios archivos
		.controller("Controlador_Principal", function($scope){

			//Una lista temporal que se va a ver en el navegador
			$scope.listaDeCosas = ["Hacer diapositivas", "Comparar pan", "Pagar Internet"];

		})