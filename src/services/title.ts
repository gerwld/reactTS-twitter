export function changeTitle(newTitle?: string) {
  if (newTitle) {
    document.title = newTitle;
  } else {
    document.title = "React App";
  }
}
