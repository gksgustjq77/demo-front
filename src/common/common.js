function objectToParam(obj, deleteEmpty) {
  let param = "?";
  for (let key in obj) {
    if (isEmpty(obj[key]) && deleteEmpty) continue;
    if (param != "?") {
      param += "&";
    }
    param += key + "=" + obj[key];
  }
  return param === "?" ? "" : param;
}
function isEmpty(obj) {
  if (obj == null) return true;
  else if (typeof obj === "number") return obj === 0;
  else if (typeof obj === "string") return obj === "";
  else if (Array.isArray(obj)) return obj.length === 0;
  else if (obj instanceof Date) return false;
  else return Object.keys(obj).length === 0;
}
