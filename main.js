import "./style.css";

const sendBtn = document.getElementById("send");
const table = document.getElementById("book-list");
const alert = document.getElementById("alert");
const bookList = [];
const handleClickSend = () => {
  const inputList = document.querySelectorAll("input");

  const book = inputList[0].value;
  const author = inputList[1].value;

  if (book === "" || author === "") return;

  const obj = {
    book,
    author,
  };
  bookList.push(obj);

  addTable();
  inputList[0].value = inputList[1].value = "";
  const num = Math.floor(Math.random() * 10000 + 1);
  alert.innerHTML += `<div id="${num}"><div class="alert alert-success" role="alert">추가에 성공 했습니다.</div></div>`;
  setTimeout(() => {
    document.getElementById(num).remove();
  }, 2000);
};

const addTable = () => {
  let html = "";
  bookList.map(
    (n, i) =>
      (html += `
      <tr>
        <td>${n.book}</td>
        <td>${n.book}</td>
        <td>
          <button class="btn btn-danger delete" id="${i}">삭제</button>
        </td>
      </tr>
    `)
  );
  table.innerHTML = html;
};

const deleteBook = (e) => {
  const key = e.target.id;
  delete bookList[key];
  addTable();
  const num = Math.floor(Math.random() * 10000 + 1);
  alert.innerHTML += `<div id="${num}"><div class="alert alert-success" role="alert">삭제에 성공 했습니다.</div></div>`;
  setTimeout(() => {
    document.getElementById(num).remove();
  }, 2000);
};

table.addEventListener("click", deleteBook);
sendBtn.addEventListener("click", handleClickSend);
