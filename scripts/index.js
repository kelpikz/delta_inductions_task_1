let editorDocument = document.getElementById("myeditor");

const changeEditor = (itemName, type, value) => {
  let item = document.getElementById(itemName);
  if (item)
    item.classList.contains("active")
      ? item.classList.remove("active")
      : item.classList.add("active");

  document.execCommand(type, false, value);
  editorDocument.focus();
};

const clearText = () => {
  editorDocument.innerHTML = "";
  editorDocument.focus();
};

editorDocument.contentEditable = true;
