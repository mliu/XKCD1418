var all = document.getElementsByTagName("*");

for (var i = 0, max = all.length; i < max; i++) {
	all[i].innerHTML = all[i].innerHTML.split("force").join("horse");
	all[i].innerHTML = all[i].innerHTML.split("Force").join("Horse");
	all[i].innerHTML = all[i].innerHTML.split("Forces").join("Horses");
	all[i].innerHTML = all[i].innerHTML.split("forces").join("horses");
}