function myfunction() {
var shadowHost = document.getElementById("demo.html");
var shadowRoot = shadowHost.createShadowRoot();
var shadowChild = document.createElement("span");

shadowChild.innerHTML = document.getElementById("news-widget").innerHTML;
shadowRoot.appendChild(shadowChild);
}
