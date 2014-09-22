//Taken from http://stackoverflow.com/questions/9178174/find-all-text-nodes

function recurse(element)
{
    if (element.childNodes.length > 0) 
        for (var i = 0; i < element.childNodes.length; i++) 
            recurse(element.childNodes[i]);

    if (element.nodeType == Node.TEXT_NODE && /\S/.test(element.nodeValue))
      {
        element.nodeValue = element.nodeValue.split("force").join("horse");
        element.nodeValue = element.nodeValue.split("forces").join("horses");
        element.nodeValue = element.nodeValue.split("Force").join("Horse");
        element.nodeValue = element.nodeValue.split("Forces").join("Horses");
        element.nodeValue = element.nodeValue.split("triforce").join("trihorse");
        element.nodeValue = element.nodeValue.split("Triforce").join("Trihorse");
      }
}
var html = document.getElementsByTagName('html')[0];
recurse(html);