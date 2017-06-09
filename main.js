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
//This is a hard code of Unicode translations for Font-awesome icons.  It's static. I'm sorry :(
var iconUni = ["&#xf007;","&#xf007;","&#xf0e0;","&#xf0ac;","","&#xf086;","&#xf10b;","&#xf095;"]


function createFormElements(formData){
  var input_array = [];

  for (var i = 0; i < formData.length; i++){
    //Filter for select boxes, text areas, and everything else
    // element.placeholder = buildFaIcon(formData[i].icon, formData[i].label);
    if(formData[i].type === "select"){
      var element = document.createElement("select");
      var initOpt = document.createElement("option");
      initOpt.value = "";
      initOpt.textContent = "Select Language...";
      element.appendChild(initOpt);
    }
    else if (formData[i].type === "textarea") {
      var element = document.createElement("textarea");
    }
    else {
      var element = document.createElement("input");
    }
    element.type = formData[i].type;
    //TODO: implement the font-awesome icons in placeholder
    element.placeholder = formData[i].label;
    element.id = formData[i].id;
    for(var j = 0; j < formData[i].options.length; j++){
      var opt = document.createElement("option");
      opt.value = formData[i].options[j].value;
      opt.textContent = formData[i].options[j].label;
      element.appendChild(opt);
    }
    input_array.push(element);
  }
  return input_array;
}
function addFormElements(input_array){
  var form = document.querySelector(".form");
  for(var i = 0; i < input_array.length; i++){
    //Create and append the FontAwesome icon
    if(formData[i].icon){
      console.log("Creating icon", formData[i].label);
      var icon = document.createElement("i");
      icon.classList.add("fa",formData[i].icon);
      console.log(icon);
      form.appendChild(icon);
    }
    form.appendChild(input_array[i]);
    form.appendChild(document.createElement("br"));
  }
}


var inputs = createFormElements(formData);
addFormElements(inputs);

//FIXME
function buildFaIcon(icon, label){
  return '<i class="fa '+icon+'"></i> '+label;
}
