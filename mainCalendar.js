/**
 * 
 */

var itemListSelected = document.querySelector("#dropBox-year-item-selected");
var itemList = document.querySelector("#dropBox-year-itemList");
var item = document.querySelectorAll(".dropBox-year-item");

itemListSelected.addEventListener('click',showItemList);



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