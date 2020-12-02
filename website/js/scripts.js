<<<<<<< HEAD

/*******************************
    SETTINGS AND TRANSLATIONS
    Customize your website by adding required key or text.
    Email info@vicinoesicuro.it if you need some help.

********************************/

var woosmap_basecolor = "#D81A60"; // Remind to set your base color also on css/style.css
var woosmap_woosmapKey = "woos-9aa31a07-fc32-392e-a112-bd5d7350a7e0";
var woosmap_googleMapsKey = "AIzaSyBN8I1KsGyHdCkDEHY0G4-m6wZBzVwVVr0";
var woosmap_translation_address = "Address";
var woosmap_translation_callByPhone = "Call by phone";
var woosmap_translation_secondaryPhone = "Seconday phone";
var woosmap_translation_sendEmail = "Send email";
var woosmap_translation_visitWebsite = "Visit website";
var woosmap_translation_deliveryZones = "Which areas are you willing to serve";
var woosmap_translation_cost = "Cost";
var woosmap_translation_categories = "Categories";
var woosmap_translation_categoriesSingular = "Category";
var woosmap_translation_info = "Info";
var woosmap_translation_infoExt = "View more info";
var woosmap_translation_services = "Which services do you offer besides home delivery";
var woosmap_intialZoom = 6;
var woosmap_intialLat = 41.902782;
var woosmap_intialLong = 12.496366;

/*******************************
    MAP CONFIGURATOR
********************************/

var storeLocatorConfig = {
    "theme": {
        "primary_color": woosmap_basecolor
    },
    "datasource": {
        "api_key": woosmap_woosmapKey,
        "max_responses": 150,
        "max_distance": 20000,
        "use_distance_matrix": false
=======
import "./settings.js";

/******************
    MAP SETTINGS
******************/

const storeLocatorConfig = {
  "theme": {
    "primary_color": common_basecolor
  },
  "datasource": {
    "api_key": woosmap_woosmapKey,
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
    "api_key": woosmap_googleMapsKey,
    "geocoder": { "region": "it" },
    "disableDirections": true,
    "places": {
      "types": ["geocode"],
      "componentRestrictions": { "country": "it" }
    }
  },
  "woosmapview": {
    "initialCenter": {
      "lat": woosmap_lat,
      "lng": woosmap_lng
    },
    "initialZoom": 6,
    "tileStyle": {
      "color": common_basecolor,
      "size": 11,
      "minSize": 5,
>>>>>>> 889f8faf7b9f7dead6cff2a0760af664bc47dbfb
    },
    "recommendation": {
        "useRecommendation": false
    },
    "internationalization": {
        "lang": "en",
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
        "api_key": woosmap_googleMapsKey,
        "geocoder": {
            "region": "it"
        },
        "disableDirections": true,
        "places": {
            "types": ["geocode"],
            "componentRestrictions": {
                "country": "it"
            }
        }
    },
    "woosmapview": {
        "initialCenter": {
            "lat": woosmap_intialLat,
            "lng": woosmap_intialLong
        },
        "initialZoom": woosmap_intialZoom,
        "tileStyle": {
            "color": woosmap_basecolor,
            "size": 11,
            "minSize": 5
        },
        "baseMapStyle": [{
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#d3d3d3"
                }]
            },
            {
                "featureType": "transit",
                "stylers": [{
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
                "stylers": [{
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
                "stylers": [{
                    "color": "#ffffff"
                }]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry.fill",
                "stylers": [{
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
                "stylers": [{
                    "color": "#d7d7d7"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "geometry.fill",
                "stylers": [{
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
                "stylers": [{
                    "color": "#a7a7a7"
                }]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ffffff"
                }]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ffffff"
                }]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry.fill",
                "stylers": [{
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
                "stylers": [{
                    "color": "#696969"
                }]
            },
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [{
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
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#d6d6d6"
                }]
            },
            {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {},
            {
                "featureType": "poi",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#dadada"
                }]
            }
        ],
        "breakPoint": 10,
        "style": {
            "rules": [{
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
            }],
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

    /*******************************
        FILTERS DEFINITION
    ********************************/

<<<<<<< HEAD
    "filters": {
        "filters": [{
            "propertyType": "tag",
            "title": {
                "it": "",
                "en": ""
            },
            "choices": [{
                    "key": "abbigliamento",
                    "it": "Abbigliamento",
                    "en": "Clothing"
                },
                {
                    "key": "bar_gelateria",
                    "it": "Bar / Gelateria",
                    "en": "Bar / Ice cream shop"
                },
                {
                    "key": "edicola_cartoleria",
                    "it": "Edicola / Cartoleria",
                    "en": "Newsstand / Stationery"
                },
                {
                    "key": "elettronica_telefonia",
                    "it": "Elettronica / Telefonia",
                    "en": "Electronics"
                },
                {
                    "key": "farmacia_erboristeria",
                    "it": "Farmacia",
                    "en": "Pharmacy"
                },
                {
                    "key": "fiorista",
                    "it": "Fiorista",
                    "en": "Florist"
                },
                {
                    "key": "forno",
                    "it": "Forno",
                    "en": "Bakery"
                },
                {
                    "key": "generi_alimentari",
                    "it": "Generi alimentari",
                    "en": "Foodstuffs"
                },
                {
                    "key": "hobby_e_tempo_libero",
                    "it": "Hobby e tempo libero",
                    "en": "Hobbies"
                },
                {
                    "key": "igiene_e_bellezza",
                    "it": "Igiene e Bellezza",
                    "en": "Hygien and Beauty"
                },
                {
                    "key": "lavanderia",
                    "it": "Lavanderia",
                    "en": "Laundry"
                },
                {
                    "key": "ottico",
                    "it": "Ottico",
                    "en": "Optica"
                },
                {
                    "key": "per_gli_animali",
                    "it": "Per gli animali",
                    "en": "For Pets"
                },
                {
                    "key": "per_il_bambino",
                    "it": "Per il bambino",
                    "en": "For Babies"
                },
                {
                    "key": "per_la_casa",
                    "it": "Per la casa",
                    "en": "Furniture"
                },
                {
                    "key": "ristorazione",
                    "it": "Ristorazione",
                    "en": "Restaurants"
                },
                {
                    "key": "supermercato",
                    "it": "Supermercato",
                    "en": "Supermarket"
                },
                {
                    "key": "altro",
                    "it": "Altro",
                    "en": "Other"
                }
            ],
            "innerOperator": "or"
        }],
        "outerOperator": "and"
    }
}

/*******************************
    GET STORE DETAIL INFO
    FOR DIFFERENT VIEWS
********************************/

// Store name

const getName = function(store) {
    let name = store.properties.name;
    return '<header><h4>' + name + '</h4></header>';
};

// Store address

const getAddress = function(store) {
    let address = store.properties.address.lines;
    return '<p class="storeInfo getAddress"><strong>'+ woosmap_translation_address +'</strong><br />' + address + '</p>';
};

const getAddressNoTitle = function(store) {
    let address = store.properties.address.lines;
    return '<p class="storeInfo getAddressNoTitle">' + address + '</p>';
=======
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
};

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
  return '<p class="storeInfo getAddress"><strong>' + woosmap_translation_address + '</strong><br />' + address + '</p>';
>>>>>>> 889f8faf7b9f7dead6cff2a0760af664bc47dbfb
};

// Store website and contacts

const getContacts = function(store) {
    let phone = store.properties.contact.phone;
    let email = store.properties.contact.email;
    let website = store.properties.contact.website;
    let phone_2 = store.properties.user_properties.phone_2;
    let html = "";
    // html += getPhone(store);
    if (phone) html += '<a href="tel:' + phone + '" class="btn">' + woosmap_translation_callByPhone + '</a>';
    if (phone_2) html += '<a href="tel:' + phone_2 + '" class="btn">' + woosmap_translation_secondaryPhone + '</a>';
    if (email) html += '<a href="mailto:' + email + '" class="btn">' + woosmap_translation_sendEmail +'</a>';
    if (website) html += '<a href="http://' + website + '" class="btn">' + woosmap_translation_visitWebsite + '</a>';
    return '<div class="">' + html + '</div><br>';
};

<<<<<<< HEAD
// Services

const getServices = function(store) {
    const services = store.properties.user_properties.services;
    if (services) return '<p class="storeInfo getServices"><strong>' + woosmap_translation_services + '</strong><br />' + services + '</p>';
};

const getServicesNoTitle = function(store) {
    const services = store.properties.user_properties.services;
    if (services) return '<p class="storeInfo getServicesNoTitle">' + services + '</p>';
=======
// Website and email
const getContacts = function (store) {
  const phone = store.properties.contact.phone;
  const email = store.properties.contact.email;
  const website = store.properties.contact.website;
  const phone_2 = store.properties.user_properties.phone_2;
  const html = "";
  // html += getPhone(store);
  if (phone) html += '<a href="tel:' + phone + '" class="btn">' + woosmap_translation_callByPhone + '</a>';
  if (phone_2) html += '<a href="tel:' + phone_2 + '" class="btn">' + woosmap_translation_secondaryPhone + '</a>';
  if (email) html += '<a href="mailto:' + email + '" class="btn">' + woosmap_translation_sendEmail + '</a>';
  if (website) html += '<a href="http://' + website + '" class="btn">' + woosmap_translation_visitWebsite + '</a>';
  return '<div class="">' + html + '</div><br>';
};

// Zones
const getShipsToWhere = function (store) {
  let where = store.properties.user_properties.where;
  if (where) {
    return '<p class="storeInfo getShipsToWhere"><strong>' + woosmap_translation_deliveryZones + '</strong><br />' + where.replace('\n', '<br/>') + '</p>';
  }
};

// Costs
const getShipsToCost = function (store) {
  let cost = store.properties.user_properties.cost;
  if (cost) return '<p class="storeInfo getShipsToCost"><strong>' + woosmap_translation_cost + '</strong><br />' + cost.replace('\n', '<br>') + '</p>';
>>>>>>> 889f8faf7b9f7dead6cff2a0760af664bc47dbfb
};

// Service costs

<<<<<<< HEAD
const getShipsToCost = function(store) {
    let cost = store.properties.user_properties.cost;
    if (cost) return '<p class="storeInfo getShipsToCost"><strong>' + woosmap_translation_cost +'</strong><br />' + cost.replace('\n', '<br>') + '</p>';
};

// Served zones

const getShipsToWhere = function(store) {
    let where = store.properties.user_properties.where;
    if (where) return '<p class="storeInfo getShipsToWhere"><strong>' + woosmap_translation_deliveryZones + '</strong><br />' + where.replace('\n', '<br>') + '</p>';
};

// Store categories

const getCategories = function(store) {
    const getCategories = store.properties.types[0];
    const getOtherCats = store.properties.user_properties.other_cats;
    return '<p class="storeInfo getCategories"><strong>' + woosmap_translation_categoriesSingular + '</strong><br />' + getCategories + '</p>';
=======
const getTags = function (store) {
  let tagsHTMLList = '';
  if (store.properties && store.properties.tags.length > 0) {
    tagsHTMLList = '<p class="storeInfo getTags"><strong>' + woosmap_translation_categories + '</strong><br />';
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
    tagsHTMLList += '<span class="btn">' + woosmap_translation_infoExt + '</span></p>';
  }
  return tagsHTMLList;
};

// Categories
const getCategories = function (store) {
  const getCategories = store.properties.types[0];
  const getOtherCats = store.properties.user_properties.other_cats;
  if (getCategories == 'Altro') {
    return '<p class="storeInfo getCategories"><strong>' + woosmap_translation_categoriesSingular + '</strong><br />' + getCategories + ': ' + getOtherCats + '</p>';
  } else {
    return '<p class="storeInfo getCategories"><strong>' + woosmap_translation_categoriesSingular + '</strong><br />' + getCategories + '</p>';
  }
};

// Categories without prefix
const getCategoriesNoTitle = function (store) {
  const getCategories = store.properties.types[0];
  const getOtherCats = store.properties.user_properties.other_cats;
  // if (getOtherCats) other_cats = '<strong>:</strong> ' + getOtherCats;
  // return '<p class="storeInfo getCategories">'+getCategories+'</p>'; */
  if (getCategories == 'Altro') {
    return '<p class="storeInfo getCategoriesNoTitle"><i>' + getCategories + ': ' + getOtherCats + '</i></p><p class="storeInfo getCategoriesNoTitleBtn"><i>' + woosmap_translation_info + ' &raquo;</i></p>';
  } else {
    return '<p class="storeInfo getCategoriesNoTitle"><i>' + getCategories + '</i></p><p class="storeInfo getCategoriesNoTitleBtn"><i>' + woosmap_translation_info + ' &raquo;</i></p>';
  }
};

// Services
const getServices = function (store) {
  const services = store.properties.user_properties.services;
  if (services) return '<p class="storeInfo getServices"><strong>' + woosmap_translation_services + '</strong><br />' + services + '</p>';
>>>>>>> 889f8faf7b9f7dead6cff2a0760af664bc47dbfb
};

const getCategoriesNoTitle = function(store) {
    const getCategories = store.properties.types[0];
    const getOtherCats = store.properties.user_properties.other_cats;
    // if (getOtherCats) other_cats = '<strong>:</strong> ' + getOtherCats;
    // return '<p class="storeInfo getCategories">'+getCategories+'</p>'; */
    if (getCategories == 'Altro') {
        return '<p class="storeInfo getCategoriesNoTitle"><i>' + getCategories + ': ' + getOtherCats + '</i></p><p class="storeInfo getCategoriesNoTitleBtn"><i>' + woosmap_translation_info + ' &raquo;</i></p>';
    } else {
        return '<p class="storeInfo getCategoriesNoTitle"><i>' + getCategories + '</i></p><p class="storeInfo getCategoriesNoTitleBtn"><i>' + woosmap_translation_info + ' &raquo;</i></p>';
    }
};

// Distance from user

const getDistance = function(store) {
    let distance = "";
    if (store.properties.distance < 1000) distance = Math.round(store.properties.distance) + " mt";
    else distance = (store.properties.distance / 1000).toFixed(1) + " km"
    return '<p class="storeInfo getDistance">' + distance + '</p>';
};

<<<<<<< HEAD
/*******************************
    LOAD MAP
********************************/

var loadStoreLocator = function() {
    var webapp = new WebApp('store-locator', 'woos-9aa31a07-fc32-392e-a112-bd5d7350a7e0');
    var isMobile = document.querySelector('body').clientWidth < 750;

    webapp.setConf(storeLocatorConfig);


    webapp.render(isMobile);

    webapp.setFullStoreRenderer(function(store) {
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

        myCustomContent.innerHTML = html.join("");
        return myCustomContent;
    });

    webapp.setSummaryStoreRenderer(function(store) {
        let mySummaryContent = document.createElement('div');
        mySummaryContent.className = "store-summary";
        let html = [];

        html.push(getName(store));
        html.push(getAddressNoTitle(store));
        // html.push(getDistance(store));
        html.push(getCategoriesNoTitle(store));

        mySummaryContent.innerHTML = html.join("");
        mySummaryContent.onclick = function() {
            console.log('Click Event: ' + store.properties.name);
        };
        return mySummaryContent;
    });
=======
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
>>>>>>> 889f8faf7b9f7dead6cff2a0760af664bc47dbfb
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
    $('.dropdown-btn').on('click', function() {
        $(this).toggleClass('active');
        $('.header-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
};
openMenu()

function changeLang() {
    $('.lang').on('click', function() {
        $('.lang').not($(this)).removeClass('active');
        $(this).addClass('active');
    })
};
changeLang()

function changeHeaderMenu() {
    $('.header-menu > li').on('click', function() {
        $('.header-menu > li').not($(this)).removeClass('active');
        $(this).addClass('active');
    })
};
changeHeaderMenu();

function fixedMenu() {
    if (window.scrollY > 10 && window.innerWidth < 767) {
        $('#header').css({
            "position": "fixed",
            "padding-top": "25px",
            "padding-bottom": "10px",
            "background-color": "#333333",
        })
    } else {
        $('#header').css({
            "height": "",
            "position": "",
            "padding-top": "",
            "padding-bottom": "",
            "background-color": "",
        })
    }
};
fixedMenu()