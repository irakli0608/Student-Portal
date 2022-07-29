if (password.value.match(/[0-9]/)) {
    number.style.color = "green";
  } else {
    number.style.color = "red";
  }

  //validate uppercase
  if (password.value.match(/[A-Z]/)) {
    upper.style.color = "green";
  } else {
    upper.style.color = "red";
  }

  //validate lowercase
  if (password.value.match(/[a-z]/)) {
    lower.style.color = "green";
  } else {
    lower.style.color = "red";
  }

  //validate symbol
  if (password.value.match(/[!\@\#\$\%\^\&\,]/)) {
    symbol.style.color = "green";
  } else {
    symbol.style.color = "red";
  }

  //length

  if (password.value.length < 6) {
    length.style.color = "red";
  } else {
    length.style.color = "green";
  }
