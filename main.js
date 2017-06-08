var formData = [
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current website url",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

var form = document.querySelector(".form");
console.log(form);
var input_array = [];

for (var i = 0; i < formData.length; i++){
  //Filter for select boxes, text areas, and everything else
  if(formData[i].type === "select"){
    // console.log("This is a select box!");
    var element = document.createElement("select");
    for(var j = 0; j < Data)
  }
  else if (formData[i].type === "textarea") {
    // console.log("This is a text area!");
    var element = document.createElement("textarea");
  }
  else {
    // console.log("This is an input!");
    var element = document.createElement("input");
    element.type = formData[i].type;
    element.placeholder = formData[i].label;
    element.id = formData[i].id;
  }
  input_array.push(element);
}

console.log(input_array);

for(var i = 0; i < input_array.length; i++){
  form.appendChild(input_array[i]);
  form.appendChild(document.createElement("br"));
}
