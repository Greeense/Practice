/**
 * 
 */

var itemListSelected = document.querySelector("#dropBox-year-item-selected");
var itemList = document.querySelector("#dropBox-year-itemList");
var item = document.querySelectorAll(".dropBox-year-item");

itemListSelected.addEventListener('click',showItemList);

var month_button_back = document.querySelector("#month_button_back");
var month_button_next = document.querySelector("#month_button_next");

month_button_back.addEventListener('click',month_button_back_click);
month_button_next.addEventListener('click',month_button_next_click);



function showItemList() {
	console.log("yearItemSelected -- click");
	if(itemList.style.display=="none" || itemList.style.display==""){
		//연도 선택창 팝업 활성화
		itemList.style.display="block";
	}else if(itemList.style.display="block"){
		//연도 선택창 팝업 비활성화
		itemList.style.display="none";
	}
	ItemClick();
	
}

function ItemClick() {
	item.forEach(item=>{
		var innerValue = item.innerHTML;
		function changeValue() {
			itemListSelected.innerHTML = innerValue;
			itemList.style.display="none";	
		}
		item.addEventListener("click",changeValue);
	})
}

function month_button_back_click () {
	console.log("month_button_back  click");
	
}
function month_button_next_click () {
	console.log("month_button_next  click");
	
}
