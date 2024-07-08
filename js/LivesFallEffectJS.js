var timeoutToRunFunction;
 
$(document).ready(function startAnimation(){
		timeoutToRunFunction = setTimeout(flowersAnimation, 5000);		
		});

		function flowersAnimation(){
			$("body").jSnow({
			vSize: 2000, //Размер области
			flakes: 300, //Количество элементов.
			flakeColor: ["yellow", "violet", "red"], // цвет  элементов
			flakeMinSize: 5, //Размер минимальный
			flakeMaxSize: 15, //Размер максимальный
			fallingSpeedMin: -1, //Минимальная скорость
			fallingSpeedMax: -2, //Максимальная скорость
			flakeCode:["&#10048;","&#10048;","&#10047;","&#10046;"] // Форма элементов
			});
		}

//flowers simbols u-code: &#127800; &#x1F338;
