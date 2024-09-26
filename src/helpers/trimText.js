export function trimText(text, maxLength) {
  let result;
  if (text.length > maxLength) {
    result = text.slice(0, maxLength) + '...';
  } else {
    result = text;
  }
  return result;
}
