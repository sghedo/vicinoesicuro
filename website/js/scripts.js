/******************
    MAP SETTINGS
******************/

var storeLocatorConfig = {
  "theme": {
    "primary_color": "#D81A60"
  },
  "datasource": {
    "api_key": "woos-9aa31a07-fc32-392e-a112-bd5d7350a7e0",
    "max_responses": 150,
    "max_distance": 20000,
    "use_distance_matrix": false
  },
  "recommendation": {
    "useRecommendation": false
  },
  "internationalization": {
    "lang": "it",
    "unitSystem": 0,
    "customTranslations": {
      "it": {
        "filters": {
          "filters": "Scegli una categoria"
        }
      },
      "en": {
        "filters": {
          "filters": "Choose a category"
        }
      }
    }
  },
  "maps": {
    "provider": "google",
    "api_key": "AIzaSyBN8I1KsGyHdCkDEHY0G4-m6wZBzVwVVr0",
    "geocoder": { "region": "it" },
    "disableDirections": true,
    "places": {
      "types": ["geocode"],
      "componentRestrictions": { "country": "it" }
    }
  },
  "woosmapview": {
    "initialCenter": {
      "lat": 41.902782,
      "lng": 12.496366
    },
    "initialZoom": 6,
    "tileStyle": {
      "color": "#D81A60",
      "size": 11,
      "minSize": 5,
    },
    "baseMapStyle": [
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#d3d3d3"
          }
        ]
      },
      {
        "featureType": "transit",
        "stylers": [
          {
            "color": "#808080"
          },
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "color": "#b3b3b3"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "color": "#ffffff"
          },
          {
            "weight": 1.8
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#d7d7d7"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "color": "#ebebeb"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#a7a7a7"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "color": "#efefef"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#696969"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "color": "#737373"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#d6d6d6"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {},
      {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#dadada"
          }
        ]
      }
    ],
    "breakPoint": 10,
    "style": {
      "rules": [
        {
          "type": "altro",
          "icon": {
            "url": "https://s3.eu-central-1.amazonaws.com/webapp-conf.woosmap.com/woos-0c78592f-13ea-362b-aa07-ba4ba9ea3dae/default.svg",
            "scaledSize": {
              "width": 24,
              "height": 24
            },
            "anchor": {
              "x": 16,
              "y": 16
            }
          },
          "selectedIcon": {
            "url": "https://s3.eu-central-1.amazonaws.com/webapp-conf.woosmap.com/woos-0c78592f-13ea-362b-aa07-ba4ba9ea3dae/selected.svg",
            "scaledSize": {
              "width": 32,
              "height": 32
            },
            "anchor": {
              "x": 21,
              "y": 21
            }
          },
          "numberedIcon": {
            "url": "https://s3.eu-central-1.amazonaws.com/webapp-conf.woosmap.com/woos-0c78592f-13ea-362b-aa07-ba4ba9ea3dae/default.svg",
            "scaledSize": {
              "width": 32,
              "height": 32
            },
            "anchor": {
              "x": 21,
              "y": 21
            }
          }
        }
      ],
      "default": {
        "icon": {
          "url": "https://s3.eu-central-1.amazonaws.com/webapp-conf.woosmap.com/woos-0c78592f-13ea-362b-aa07-ba4ba9ea3dae/default.svg",
          "scaledSize": {
            "width": 24,
            "height": 24
          },
          "anchor": {
            "x": 16,
            "y": 16
          }
        },
        "selectedIcon": {
          "url": "https://s3.eu-central-1.amazonaws.com/webapp-conf.woosmap.com/woos-0c78592f-13ea-362b-aa07-ba4ba9ea3dae/selected.svg",
          "scaledSize": {
            "width": 32,
            "height": 32
          },
          "anchor": {
            "x": 21,
            "y": 21
          }
        }
      }
    }
  },

  // List of filters to be displayed on UI

  "filters": {
    "filters": [
      {
        "propertyType": "tag",
        "title": {
          "it": ""
        },
        "choices": [
          { "key": "abbigliamento", "it": "Abbigliamento" },
          { "key": "bar_gelateria", "it": "Bar / Gelateria" },
          { "key": "edicola_cartoleria", "it": "Edicola / Cartoleria" },
          { "key": "elettronica_telefonia", "it": "Elettronica / Telefonia" },
          { "key": "farmacia_erboristeria", "it": "Farmacia / Erboristeria" },
          { "key": "fiorista", "it": "Fiorista" },
          { "key": "forno", "it": "Forno" },
          { "key": "generi_alimentari", "it": "Generi alimentari" },
          { "key": "hobby_e_tempo_libero", "it": "Hobby e tempo libero" },
          { "key": "igiene_e_bellezza", "it": "Igiene e Bellezza" },
          { "key": "lavanderia", "it": "Lavanderia" },
          { "key": "ottico", "it": "Ottico" },
          { "key": "per_gli_animali", "it": "Per gli animali" },
          { "key": "per_il_bambino", "it": "Per il bambino" },
          { "key": "per_la_casa", "it": "Per la casa" },
          { "key": "ristorazione", "it": "Ristorazione" },
          { "key": "supermercato", "it": "Supermercato" },
          { "key": "altro", "it": "Altro" }
        ],
        "innerOperator": "or"
      }
    ],
    "outerOperator": "and"
  }
}

/******************

GET STORE DETAIL INFO FOR DIFFERENT VIEWS

******************/


// Name
const getName = function (store) {
  const name = store.properties.name;
  return '<header><h4>' + name + '</h4></header>';
};

// Address
const getAddress = function (store) {
  const address = store.properties.address.lines;
  return '<p class="storeInfo getAddress"><strong>Indirizzo</strong><br />' + address + '</p>';
};

const getAddressNoTitle = function (store) {
  const address = store.properties.address.lines;
  return '<p class="storeInfo getAddressNoTitle">' + address + '</p>';
};

// Website and email
const getContacts = function (store) {
  const phone = store.properties.contact.phone;
  const email = store.properties.contact.email;
  const website = store.properties.contact.website;
  const phone_2 = store.properties.user_properties.phone_2;
  const html = "";
  // html += getPhone(store);
  if (phone) html += '<a href="tel:' + phone + '" class="btn">Effettua telefonata</a>';
  if (phone_2) html += '<a href="tel:' + phone_2 + '" class="btn">Telefono secondario</a>';
  if (email) html += '<a href="mailto:' + email + '" class="btn">Invia email</a>';
  if (website) html += '<a href="http://' + website + '" class="btn">Visita sito web</a>';
  return '<div class="">' + html + '</div><br>';
};

// Zones
const getShipsToWhere = function (store) {
  let where = store.properties.user_properties.where;
  if (where) {
    return '<p class="storeInfo getShipsToWhere"><strong>Quali zone ti rendi disponibile a servire</strong><br />' + where.replace('\n', '<br/>') + '</p>';
  }
};

// Costs
const getShipsToCost = function (store) {
  let cost = store.properties.user_properties.cost;
  if (cost) return '<p class="storeInfo getShipsToCost"><strong>Costo</strong><br />' + cost.replace('\n', '<br>') + '</p>';
};

// Tags
const tagLabels = {
  "abbigliamento": "Abbigliamento",
  "bar_gelateria": "Bar / Gelateria",
  "edicola_cartoleria": "Edicola / Cartoleria",
  "elettronica_telefonia": "Elettronica / Telefonia",
  "farmacia_erboristeria": "Farmacia / Erboristeria",
  "fiorista": "Fiorista",
  "forno": "Forno",
  "generi_alimentari": "Generi alimentari",
  "hobby_e_tempo_libero": "Hobby e tempo libero",
  "igiene_e_bellezza": "Igiene e Bellezza",
  "lavanderia": "Lavanderia",
  "ottico": "Ottico",
  "per_gli_animali": "Per gli animali",
  "per_il_bambino": "Per il bambino",
  "per_la_casa": "Per la casa",
  "ristorazione": "Ristorazione",
  "supermercato": "Supermercato",
  "altro": "Altro"
};

const getTags = function (store) {
  let tagsHTMLList = '';
  if (store.properties && store.properties.tags.length > 0) {
    tagsHTMLList = '<p class="storeInfo getTags"><strong>Categorie merceologiche</strong><br />';
    for (let tag in store.properties.tags) {
      if (tagLabels[store.properties.tags[tag]]) {
        tagsHTMLList += '<span>' + tagLabels[store.properties.tags[tag]] + '</span><br>';
      }
    }
    tagsHTMLList += '&nbsp;</p>';
  }
  return tagsHTMLList;
};

// Detail sidebar title
const getTagsNoTitle = function (store) {
  let tagsHTMLList = '';
  if (store.properties && store.properties.tags.length > 0) {
    tagsHTMLList = '<p class="storeInfo getTagsNoTitle">';
    for (let tag in store.properties.tags) {
      if (tagLabels[store.properties.tags[tag]]) {
        tagsHTMLList += '<span>' + tagLabels[store.properties.tags[tag]] + '</span><br>';
      }
    }
    tagsHTMLList += '&nbsp;<br>';
    tagsHTMLList += '<span class="btn">Vedi maggiori informazioni</span></p>';
  }
  return tagsHTMLList;
};

// Categories
const getCategories = function (store) {
  const getCategories = store.properties.types[0];
  const getOtherCats = store.properties.user_properties.other_cats;
  if (getCategories == 'Altro') {
    return '<p class="storeInfo getCategories"><strong>Categoria merceologica</strong><br />' + getCategories + ': ' + getOtherCats + '</p>';
  } else {
    return '<p class="storeInfo getCategories"><strong>Categoria merceologica</strong><br />' + getCategories + '</p>';
  }
};

// Categories without prefix
const getCategoriesNoTitle = function (store) {
  const getCategories = store.properties.types[0];
  const getOtherCats = store.properties.user_properties.other_cats;
  // if (getOtherCats) other_cats = '<strong>:</strong> ' + getOtherCats;
  // return '<p class="storeInfo getCategories">'+getCategories+'</p>'; */
  if (getCategories == 'Altro') {
    return '<p class="storeInfo getCategoriesNoTitle"><i>' + getCategories + ': ' + getOtherCats + '</i></p><p class="storeInfo getCategoriesNoTitleBtn"><i>Info &raquo;</i></p>';
  } else {
    return '<p class="storeInfo getCategoriesNoTitle"><i>' + getCategories + '</i></p><p class="storeInfo getCategoriesNoTitleBtn"><i>Info &raquo;</i></p>';
  }
};

// Services
const getServices = function (store) {
  const services = store.properties.user_properties.services;
  if (services) return '<p class="storeInfo getServices"><strong>Quali servizi offri oltre alla consegna a domicilio</strong><br />' + services + '</p>';
};

// Services without prefix
const getServicesNoTitle = function (store) {
  const services = store.properties.user_properties.services;
  if (services) return '<p class="storeInfo getServicesNoTitle">' + services + '</p>';
};

// Source
const getFonte = function (store) {
  const fonte = store.properties.user_properties.fonte;
  // return '<p class="storeInfo getServicesNoTitle">ciao</p>';
  if (fonte === "comune_milano") {
    return '<p class="storeInfo getFonte"><strong>Fonte</strong><br />Comune di Milano (<a href="https://www.comune.milano.it/aree-tematiche/servizi-sociali/milanoaiuta/spesa-a-domicilio" target="_blank">link</a>)</p>';
  }
  return '';
};

// Distance
const getDistance = function (store) {
  let distance = "";
  if (store.properties.distance < 1000) {
    distance = Math.round(store.properties.distance) + " mt";
  } else {
    distance = (store.properties.distance / 1000).toFixed(1) + " km";
  }
  return '<p class="storeInfo getDistance">' + distance + '</p>';
};

/******************
    MAP LOADER
******************/

var loadStoreLocator = function () {
  var webapp = new WebApp('store-locator', 'woos-9aa31a07-fc32-392e-a112-bd5d7350a7e0');
  var isMobile = document.querySelector('body').clientWidth < 750;

  webapp.setConf(storeLocatorConfig);
  webapp.render(isMobile);

  webapp.setFullStoreRenderer(function (store) {
    let myCustomContent = document.createElement('ul');
    myCustomContent.id = "myCustomContentID";
    
    let html = [];
    //html.push(getName(store));
    html.push(getCategories(store));
    html.push(getAddress(store));
    // html.push(getDistance(store));
    html.push(getServices(store));
    html.push(getShipsToWhere(store));
    html.push(getShipsToCost(store));
    html.push(getContacts(store));
    html.push(getFonte(store));

    myCustomContent.innerHTML = html.join("");
    return myCustomContent;
  });

  webapp.setSummaryStoreRenderer(function (store) {
    let mySummaryContent = document.createElement('div');
    mySummaryContent.className = "store-summary";
    
    let html = [];
    html.push(getName(store));
    html.push(getAddressNoTitle(store));
    // html.push(getDistance(store));
    html.push(getCategoriesNoTitle(store));
    // html.push(getTagsNoTitle(store));

    mySummaryContent.innerHTML = html.join("");
    mySummaryContent.onclick = function () {
      console.log('Click Event: ' + store.properties.name);
    };
    
    return mySummaryContent;
  });
};

if (document.readyState === "complete") {
  loadStoreLocator();
}

if (document.addEventListener) {
  document.addEventListener("DOMContentLoaded", loadStoreLocator, false);
}

if (window.addEventListener) {
  window.addEventListener("load", loadStoreLocator, false);
} else if (window.attachEvent) {
  window.attachEvent("onload", loadStoreLocator);
}

function openMenu() {
  $('.dropdown-btn').on('click', function () {
    $(this).toggleClass('active');
    $('.header-menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
};
openMenu();

function changeLang() {
  $('.lang').on('click', function () {
    $('.lang').not($(this)).removeClass('active');
    $(this).addClass('active');
  })
};
changeLang();

function changeHeaderMenu() {
  $('.header-menu > li').on('click', function () {
    $('.header-menu > li').not($(this)).removeClass('active');
    $(this).addClass('active');
  })
};
changeHeaderMenu();

function fixedMenu() {
  if (window.scrollY > 10 && window.innerWidth < 767) {
    $('#header').css({ "position": "fixed", "padding-top": "25px", "padding-bottom": "10px", "background-color": "#333333", })
  } else {
    $('#header').css({ "height": "", "position": "", "padding-top": "", "padding-bottom": "", "background-color": "", })
  }
};
fixedMenu();
