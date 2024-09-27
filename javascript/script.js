  const name = document.getElementById("user_name");
  const title = document.getElementById("user_title");
  const email = document.getElementById("user_email");
  const form = document.getElementById("email_form");
  const output = document.getElementById("signature");
  const holiday = document.getElementById("holiday");

  output.classList.add('pre-gen');
  holiday.classList.add('hide-note');

  form.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("outputBtn").click();
  }
});

  function showInput() {
      document.getElementById('name_output').innerHTML = name.value;
      document.getElementById('title_output').innerHTML = title.value;
      document.getElementById('email_output').innerHTML = email.value;
      document.getElementById('email_output').href = "mailto:" + email.value;
      output.classList.remove('pre-gen');
  }

  /**
    See details https://stackoverflow.com/questions/2044616/select-a-complete-table-with-javascript-to-be-copied-to-clipboard
  **/
  function copyToClipboard() {
        var el = document.getElementById('signature');
        var body = document.body, range, sel;
        if (document.createRange && window.getSelection) {
            range = document.createRange();
            sel = window.getSelection();
            sel.removeAllRanges();
            try {
                range.selectNodeContents(el);
                sel.addRange(range);
            } catch (e) {
                range.selectNode(el);
                sel.addRange(range);
            }
            document.execCommand("copy");
            // clear selection
            if (sel) {
                if (sel.removeAllRanges) {
                    sel.removeAllRanges();
                } else if (sel.empty) {
                    sel.empty();
                }
            }
        } else if (body.createTextRange) {
            range = body.createTextRange();
            range.moveToElementText(el);
            range.select();
            range.execCommand("Copy");
        }
    }
  /**
    See details https://www.w3schools.com/howto/howto_js_autocomplete.asp
  **/
  function autocomplete(inp, arr) {
    var currentFocus;
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);
        let matchFound = false; 
        for (i = 0; i < arr.length; i++) {
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            matchFound = true;
            b = document.createElement("DIV");
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            b.addEventListener("click", function(e) {
                inp.value = this.getElementsByTagName("input")[0].value;
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
        if (!matchFound) { // Hide dropdown when empty
          a.style.display = "none";
        }
    });
    inp.addEventListener("keydown", function(e) {
        var inputId = this.id;
        var x = document.getElementById(inputId + "autocomplete-list");
        var dropdown = document.getElementById(inputId + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          currentFocus++;
          addActive(x);
        } else if (e.keyCode == 38) { 
          currentFocus--;
          addActive(x);
          /*Only disable ENTER key form submissing when dropdown is active*/
        } else if (e.keyCode == 13 && !!dropdown == true) {
          if (!!dropdown.firstChild == true) {
            e.preventDefault();
            if (currentFocus > -1) {
              if (x) x[currentFocus].click();
            }
          }
        }
    });
    function addActive(x) {
      if (!x) return false;
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
  }
  
  /* var employeeEmails = []*/

  /*initiate the autocomplete function*/
  autocomplete(document.getElementById("user_email"), employeeEmails);
  autocomplete(document.getElementById("user_name"), employeeName);