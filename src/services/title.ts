
export function changeTitle(newTitle?: string) {
  const title = document.getElementById("title");
  if (title) {
    if (newTitle) {
      title.innerText = newTitle;
    } else {
      title.innerText = "React App";
    }
  }
}
