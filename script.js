//your JS code here. If required.
window.onload = function(){
	let sizeInfo = document.getElementById("sizeInfo");
	let width,height;

	function updateSizeInfo()
		{
			width = window.innerwidth;
			height = window.innerheight;
			sizeInfo.textContent = "width: "+ width + " and Height: " + height
		}
	updateSizeInfo();
	window.addEventListener("resize" , updateSizeInfo);
		};
