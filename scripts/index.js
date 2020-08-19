let editorDocument = document.getElementById("myeditor");

const changeEditor = (itemName, type) => {
  let item = document.getElementById(itemName);
  item.classList.contains("active")
    ? item.classList.remove("active")
    : item.classList.add("active");

  document.execCommand(type, false);
  editorDocument.focus();
};

editorDocument.contentEditable = true;
