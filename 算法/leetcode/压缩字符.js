function compress(chars) {
  if (chars.length < 2) return chars.length;

  var write = 1, count = 1;
  for (var read = 1; read <= chars.length; read++) {
    if (chars[read] === chars[read - 1]) {
      count++;
      continue;
    }
    count += '';
    for (var i = 0; i < count.length; i++) {
      chars[write++] = count[i];
    }
    if (chars[read] !== void 0) {
      chars[write++] = chars[read];
    }
    count = 1;
  }
  chars.length = write;
  console.log(chars)
  return chars.length;
}

console.log(compress(["a"]))
console.log(compress(["a", "a", "b", "b", "b", "c", "c", "c", "c", "c", "c"]))
console.log(compress(["a", "b", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c"]))
console.log(compress(["a", "b", "c"]))
console.log(compress([
  "x", "7", "7", "2", "2", "2", "f", "'", "'", "'", "'", "}", "=", "l", "l", "+", "_", "_", ":", ":", ":", "o", "u", "u", "l", "X", "4", "n", "n", "n", "y", "y", "Z", "'", "g", "q", ",",
  ",", "Y", ":", "w", ".", "q", ")", ")", "0", "0", "0", "0", "{", "E", "E", "E", "E", ";", ">", "{", "{", "]", "]", "h", "b", "A", "A", "A", "H", "t", "6", "6", "6", "6", "E", "E", "i", "V", "V", "V", "V", "X", "F", ",",
  "/", "/", "X", "2", "2", "Z", "Z", "z", "z", "o", "x", "x", "F", "F", "F", "v", "v", "v", "v", "v", "v", "/", "/", "/", "8", "8", "8", "8", "U", "y", "y", "y", "y", "y", "%", "X", "%", "%", "%", "@", "@", "@", "-", ")", "I", "4", "4", "^", "{", "7", "h", "@", "/",
  "/", "^", "^", "V", "9", "9", "9", "9", "9", "J", "A", "A", "{", "{", "B", "B", "B", "B", "B", "c", "b", "b", "R", "R", "b", "b", "^", "8", "'", "'", "'", ")", ")", "n", "n", "/", "e", "/", "/", "S", "Z", "M", "0", "0", "0", "0", "0", "T", "T",
  "T", ")", ")", "^", "^", "n", "n", ";", "1", "X", "X", "X", "`", "`", "`", "H", "H", "-", "-", "-", "-", "J", "J", "a", "&", "F", "X", "p", "F", "G", "Y", "|", "v", "v", "=", "H", "G", "G", "G", ";", "m", "m", "m", "m", "h", "h", "h", "h", "M", "*", "*", "h", "K", "k", "k", "k",
  "k", "(", "(", "(", "B", "B", "B", "c", "c", "c", "c", "w", "3", "3", "3", "3", "3", "3", "B", "B", "}", "p", "p", "G", "x", "x", "=", "-", "<", "<", "<", "Q", "Q", "&", "&", "J", "J", "J", "t", "]", "X", "d", "z", "z", "r", ";", ";", ";", "7", "7", "7", "f", "l", "e", "e", "e", "+", "+", "@", "@", "@" 
]))

