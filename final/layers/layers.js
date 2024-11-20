var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_BordersofSouthwestFinland_1 = new ol.format.GeoJSON();
var features_BordersofSouthwestFinland_1 = format_BordersofSouthwestFinland_1.readFeatures(json_BordersofSouthwestFinland_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BordersofSouthwestFinland_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BordersofSouthwestFinland_1.addFeatures(features_BordersofSouthwestFinland_1);
var lyr_BordersofSouthwestFinland_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BordersofSouthwestFinland_1, 
                style: style_BordersofSouthwestFinland_1,
                popuplayertitle: "Borders of Southwest Finland",
                interactive: true,
                title: '<img src="styles/legend/BordersofSouthwestFinland_1.png" /> Borders of Southwest Finland'
            });
var lyr_AreaofNetfishingdisturbance_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Area of Net-fishing disturbance ",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/AreaofNetfishingdisturbance_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [2322604.167159, 8315830.883320, 2547476.315960, 8622468.764437]
                            })
                        });
var format_Netfishingareas_3 = new ol.format.GeoJSON();
var features_Netfishingareas_3 = format_Netfishingareas_3.readFeatures(json_Netfishingareas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Netfishingareas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Netfishingareas_3.addFeatures(features_Netfishingareas_3);
var lyr_Netfishingareas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Netfishingareas_3, 
                style: style_Netfishingareas_3,
                popuplayertitle: "Net-fishing areas",
                interactive: true,
                title: '<img src="styles/legend/Netfishingareas_3.png" /> Net-fishing areas'
            });
var lyr_AreaofFykenetdisturbance_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Area of Fyke net disturbance",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/AreaofFykenetdisturbance_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [2322604.167159, 8315830.883320, 2547476.315960, 8622468.764437]
                            })
                        });
var format_Fykenetsites_5 = new ol.format.GeoJSON();
var features_Fykenetsites_5 = format_Fykenetsites_5.readFeatures(json_Fykenetsites_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fykenetsites_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fykenetsites_5.addFeatures(features_Fykenetsites_5);
var lyr_Fykenetsites_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fykenetsites_5, 
                style: style_Fykenetsites_5,
                popuplayertitle: "Fyke net sites",
                interactive: true,
                title: '<img src="styles/legend/Fykenetsites_5.png" /> Fyke net sites'
            });
var lyr_Disturbanceduetoharbours_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "Disturbance due to harbours",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Disturbanceduetoharbours_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [2322604.167159, 8315830.883320, 2547476.315960, 8622468.764437]
                            })
                        });
var format_Commercialports_7 = new ol.format.GeoJSON();
var features_Commercialports_7 = format_Commercialports_7.readFeatures(json_Commercialports_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Commercialports_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Commercialports_7.addFeatures(features_Commercialports_7);
var lyr_Commercialports_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Commercialports_7, 
                style: style_Commercialports_7,
                popuplayertitle: "Commercial ports",
                interactive: true,
                title: '<img src="styles/legend/Commercialports_7.png" /> Commercial ports'
            });
var lyr_Disturbanceduetooilspills_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "Disturbance due to oil spills",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Disturbanceduetooilspills_8.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [2322604.167159, 8315830.883320, 2547476.315960, 8622468.764437]
                            })
                        });
var format_Oilspills19982023_9 = new ol.format.GeoJSON();
var features_Oilspills19982023_9 = format_Oilspills19982023_9.readFeatures(json_Oilspills19982023_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Oilspills19982023_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Oilspills19982023_9.addFeatures(features_Oilspills19982023_9);
var lyr_Oilspills19982023_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Oilspills19982023_9, 
                style: style_Oilspills19982023_9,
                popuplayertitle: "Oil spills 1998-2023",
                interactive: true,
    title: 'Oil spills 1998-2023<br />\
    <img src="styles/legend/Oilspills19982023_9_0.png" /> < 100 litres<br />\
    <img src="styles/legend/Oilspills19982023_9_1.png" /> 100-999 litres<br />\
    <img src="styles/legend/Oilspills19982023_9_2.png" /> 1000-9999 litres<br />\
    <img src="styles/legend/Oilspills19982023_9_3.png" /> 10000-99999 litres<br />\
    <img src="styles/legend/Oilspills19982023_9_4.png" /> > 100000 litres<br />'
        });
var lyr_Disturbancebyroadsandferries_10 = new ol.layer.Image({
                            opacity: 1,
                            title: "Disturbance by roads and ferries",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Disturbancebyroadsandferries_10.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [2322604.167159, 8315830.883320, 2547476.315960, 8622468.764437]
                            })
                        });
var format_Stateownedroadsandferryroutes_11 = new ol.format.GeoJSON();
var features_Stateownedroadsandferryroutes_11 = format_Stateownedroadsandferryroutes_11.readFeatures(json_Stateownedroadsandferryroutes_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stateownedroadsandferryroutes_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stateownedroadsandferryroutes_11.addFeatures(features_Stateownedroadsandferryroutes_11);
var lyr_Stateownedroadsandferryroutes_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Stateownedroadsandferryroutes_11, 
                style: style_Stateownedroadsandferryroutes_11,
                popuplayertitle: "State-owned roads and ferry routes",
                interactive: true,
    title: 'State-owned roads and ferry routes<br />\
    <img src="styles/legend/Stateownedroadsandferryroutes_11_0.png" /> Access road<br />\
    <img src="styles/legend/Stateownedroadsandferryroutes_11_1.png" /> Local road<br />\
    <img src="styles/legend/Stateownedroadsandferryroutes_11_2.png" /> Regional road<br />\
    <img src="styles/legend/Stateownedroadsandferryroutes_11_3.png" /> National road<br />'
        });
var lyr_Disturbanceduetosaaristonrengastie_12 = new ol.layer.Image({
                            opacity: 1,
                            title: "Disturbance due to saariston rengastie",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Disturbanceduetosaaristonrengastie_12.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [2322604.167159, 8315830.883320, 2547476.315960, 8622468.764437]
                            })
                        });
var format_saaristonrengastie_13 = new ol.format.GeoJSON();
var features_saaristonrengastie_13 = format_saaristonrengastie_13.readFeatures(json_saaristonrengastie_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_saaristonrengastie_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_saaristonrengastie_13.addFeatures(features_saaristonrengastie_13);
var lyr_saaristonrengastie_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_saaristonrengastie_13, 
                style: style_saaristonrengastie_13,
                popuplayertitle: "saariston rengastie",
                interactive: true,
                title: '<img src="styles/legend/saaristonrengastie_13.png" /> saariston rengastie'
            });
var lyr_Disturbanceduetowaterways_14 = new ol.layer.Image({
                            opacity: 1,
                            title: "Disturbance due to waterways",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Disturbanceduetowaterways_14.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [2322604.167159, 8315830.883320, 2547476.315960, 8622468.764437]
                            })
                        });
var format_Waterways_15 = new ol.format.GeoJSON();
var features_Waterways_15 = format_Waterways_15.readFeatures(json_Waterways_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Waterways_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waterways_15.addFeatures(features_Waterways_15);
var lyr_Waterways_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Waterways_15, 
                style: style_Waterways_15,
                popuplayertitle: "Waterways",
                interactive: true,
    title: 'Waterways<br />\
    <img src="styles/legend/Waterways_15_0.png" /> Main merchant shipping route<br />\
    <img src="styles/legend/Waterways_15_1.png" /> Secondary merchant shipping route<br />\
    <img src="styles/legend/Waterways_15_2.png" /> Shallow channel for merchant shipping<br />\
    <img src="styles/legend/Waterways_15_3.png" /> Main boating route<br />\
    <img src="styles/legend/Waterways_15_4.png" /> Local boating route<br />\
    <img src="styles/legend/Waterways_15_5.png" /> Boating route<br />'
        });
var format_Eideroberservations_16 = new ol.format.GeoJSON();
var features_Eideroberservations_16 = format_Eideroberservations_16.readFeatures(json_Eideroberservations_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Eideroberservations_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Eideroberservations_16.addFeatures(features_Eideroberservations_16);
var lyr_Eideroberservations_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Eideroberservations_16, 
                style: style_Eideroberservations_16,
                popuplayertitle: "Eider oberservations",
                interactive: true,
    title: 'Eider oberservations<br />\
    <img src="styles/legend/Eideroberservations_16_0.png" /> 1<br />\
    <img src="styles/legend/Eideroberservations_16_1.png" /> 2<br />\
    <img src="styles/legend/Eideroberservations_16_2.png" /> 3<br />\
    <img src="styles/legend/Eideroberservations_16_3.png" /> 4<br />\
    <img src="styles/legend/Eideroberservations_16_4.png" /> 5<br />\
    <img src="styles/legend/Eideroberservations_16_5.png" /> 6<br />\
    <img src="styles/legend/Eideroberservations_16_6.png" /> 7<br />\
    <img src="styles/legend/Eideroberservations_16_7.png" /> <br />'
        });

lyr_GoogleMaps_0.setVisible(true);lyr_BordersofSouthwestFinland_1.setVisible(true);lyr_AreaofNetfishingdisturbance_2.setVisible(true);lyr_Netfishingareas_3.setVisible(true);lyr_AreaofFykenetdisturbance_4.setVisible(true);lyr_Fykenetsites_5.setVisible(true);lyr_Disturbanceduetoharbours_6.setVisible(true);lyr_Commercialports_7.setVisible(true);lyr_Disturbanceduetooilspills_8.setVisible(true);lyr_Oilspills19982023_9.setVisible(true);lyr_Disturbancebyroadsandferries_10.setVisible(true);lyr_Stateownedroadsandferryroutes_11.setVisible(true);lyr_Disturbanceduetosaaristonrengastie_12.setVisible(true);lyr_saaristonrengastie_13.setVisible(true);lyr_Disturbanceduetowaterways_14.setVisible(true);lyr_Waterways_15.setVisible(true);lyr_Eideroberservations_16.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_BordersofSouthwestFinland_1,lyr_AreaofNetfishingdisturbance_2,lyr_Netfishingareas_3,lyr_AreaofFykenetdisturbance_4,lyr_Fykenetsites_5,lyr_Disturbanceduetoharbours_6,lyr_Commercialports_7,lyr_Disturbanceduetooilspills_8,lyr_Oilspills19982023_9,lyr_Disturbancebyroadsandferries_10,lyr_Stateownedroadsandferryroutes_11,lyr_Disturbanceduetosaaristonrengastie_12,lyr_saaristonrengastie_13,lyr_Disturbanceduetowaterways_14,lyr_Waterways_15,lyr_Eideroberservations_16];
lyr_BordersofSouthwestFinland_1.set('fieldAliases', {'id': 'id', });
lyr_Netfishingareas_3.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Fykenetsites_5.set('fieldAliases', {'Pyydysid': 'Pyydysid', 'Lähde': 'Lähde', });
lyr_Commercialports_7.set('fieldAliases', {'port': 'port', 'Country': 'Country', 'LOCodes': 'LOCodes', 'Links': 'Links', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Oilspills19982023_9.set('fieldAliases', {'HELCOM_ID': 'HELCOM_ID', 'Country': 'Country', 'Year': 'Year', 'Spill_ID': 'Spill_ID', 'FlightType': 'FlightType', 'Wind_speed': 'Wind_speed', 'Wind_direc': 'Wind_direc', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Length__km': 'Length__km', 'Width__km_': 'Width__km_', 'Area__km2_': 'Area__km2_', 'Spill_cat': 'Spill_cat', 'EstimVol_m': 'EstimVol_m', 'Vol_Catego': 'Vol_Catego', 'Type_Subst': 'Type_Subst', 'Polluter': 'Polluter', 'Remarks': 'Remarks', 'Date': 'Date', 'Time_UTC': 'Time_UTC', });
lyr_Stateownedroadsandferryroutes_11.set('fieldAliases', {'objectid': 'objectid', 'osoite3': 'osoite3', 'tie': 'tie', 'ajorata': 'ajorata', 'osa': 'osa', 'ely': 'ely', 'ajr_pituus': 'ajr_pituus', 'irrotus_pv': 'irrotus_pv', 'tietyyppi': 'tietyyppi', });
lyr_saaristonrengastie_13.set('fieldAliases', {'internal_i': 'internal_i', 'edellinen_': 'edellinen_', 'luotu': 'luotu', 'lahdejarje': 'lahdejarje', 'paattyen': 'paattyen', 'lahdejarj0': 'lahdejarj0', 'oid': 'oid', 'alkaen': 'alkaen', 'muutoksen_': 'muutoksen_', 'muokattu': 'muokattu', 'alkusijain': 'alkusijain', 'alkusijai0': 'alkusijai0', 'alkusijai1': 'alkusijai1', 'loppusijai': 'loppusijai', 'loppusija0': 'loppusija0', 'loppusija1': 'loppusija1', 'sijainti_t': 'sijainti_t', 'tunnus': 'tunnus', 'nimi': 'nimi', });
lyr_Waterways_15.set('fieldAliases', {'fid': 'fid', 'jnro': 'jnro', 'nimifi': 'nimifi', 'nimisv': 'nimisv', 'luokitusty': 'luokitusty', 'vaylaluokk': 'vaylaluokk', 'vaylaluo_1': 'vaylaluo_1', 'vaylaluo_2': 'vaylaluo_2', 'omistaja': 'omistaja', 'vaylalajik': 'vaylalajik', 'vaylalajif': 'vaylalajif', 'vaylalajis': 'vaylalajis', 'valaistusk': 'valaistusk', 'mitoitussy': 'mitoitussy', 'valaistusf': 'valaistusf', 'valaistuss': 'valaistuss', 'merialuefi': 'merialuefi', 'merialuesv': 'merialuesv', 'alunselost': 'alunselost', 'paatepiste': 'paatepiste', 'irrotus_pv': 'irrotus_pv', });
lyr_Eideroberservations_16.set('fieldAliases', {'recQl': 'recQl', 'collectQl': 'collectQl', 'txnmicOrdr': 'txnmicOrdr', 'fmtTxnNm': 'fmtTxnNm', 'abundVbtm': 'abundVbtm', 'fmtDateTme': 'fmtDateTme', 'country': 'country', 'bioProvI': 'bioProvI', 'locality': 'locality', 'collectNm': 'collectNm', 'documentID': 'documentID', 'team': 'team', 'kategoria': 'kategoria', });
lyr_BordersofSouthwestFinland_1.set('fieldImages', {'id': 'TextEdit', });
lyr_Netfishingareas_3.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Fykenetsites_5.set('fieldImages', {'Pyydysid': 'TextEdit', 'Lähde': 'TextEdit', });
lyr_Commercialports_7.set('fieldImages', {'port': 'TextEdit', 'Country': 'TextEdit', 'LOCodes': 'TextEdit', 'Links': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Oilspills19982023_9.set('fieldImages', {'HELCOM_ID': 'TextEdit', 'Country': 'TextEdit', 'Year': 'TextEdit', 'Spill_ID': 'TextEdit', 'FlightType': 'TextEdit', 'Wind_speed': 'TextEdit', 'Wind_direc': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Length__km': 'TextEdit', 'Width__km_': 'TextEdit', 'Area__km2_': 'TextEdit', 'Spill_cat': 'TextEdit', 'EstimVol_m': 'TextEdit', 'Vol_Catego': 'TextEdit', 'Type_Subst': 'TextEdit', 'Polluter': 'TextEdit', 'Remarks': 'TextEdit', 'Date': 'DateTime', 'Time_UTC': 'DateTime', });
lyr_Stateownedroadsandferryroutes_11.set('fieldImages', {'objectid': 'TextEdit', 'osoite3': 'TextEdit', 'tie': 'TextEdit', 'ajorata': 'TextEdit', 'osa': 'TextEdit', 'ely': 'TextEdit', 'ajr_pituus': 'TextEdit', 'irrotus_pv': 'TextEdit', 'tietyyppi': 'TextEdit', });
lyr_saaristonrengastie_13.set('fieldImages', {'internal_i': '', 'edellinen_': '', 'luotu': '', 'lahdejarje': '', 'paattyen': '', 'lahdejarj0': '', 'oid': '', 'alkaen': '', 'muutoksen_': '', 'muokattu': '', 'alkusijain': '', 'alkusijai0': '', 'alkusijai1': '', 'loppusijai': '', 'loppusija0': '', 'loppusija1': '', 'sijainti_t': '', 'tunnus': '', 'nimi': '', });
lyr_Waterways_15.set('fieldImages', {'fid': 'TextEdit', 'jnro': 'TextEdit', 'nimifi': 'TextEdit', 'nimisv': 'TextEdit', 'luokitusty': 'TextEdit', 'vaylaluokk': 'TextEdit', 'vaylaluo_1': 'TextEdit', 'vaylaluo_2': 'TextEdit', 'omistaja': 'TextEdit', 'vaylalajik': 'TextEdit', 'vaylalajif': 'TextEdit', 'vaylalajis': 'TextEdit', 'valaistusk': 'TextEdit', 'mitoitussy': 'TextEdit', 'valaistusf': 'TextEdit', 'valaistuss': 'TextEdit', 'merialuefi': 'TextEdit', 'merialuesv': 'TextEdit', 'alunselost': 'TextEdit', 'paatepiste': 'TextEdit', 'irrotus_pv': 'TextEdit', });
lyr_Eideroberservations_16.set('fieldImages', {'recQl': 'Hidden', 'collectQl': 'Hidden', 'txnmicOrdr': 'Hidden', 'fmtTxnNm': 'Hidden', 'abundVbtm': 'Hidden', 'fmtDateTme': 'Hidden', 'country': 'Hidden', 'bioProvI': 'Hidden', 'locality': 'Hidden', 'collectNm': 'Hidden', 'documentID': 'Hidden', 'team': 'Hidden', 'kategoria': 'Hidden', });
lyr_BordersofSouthwestFinland_1.set('fieldLabels', {'id': 'no label', });
lyr_Netfishingareas_3.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Fykenetsites_5.set('fieldLabels', {'Pyydysid': 'no label', 'Lähde': 'no label', });
lyr_Commercialports_7.set('fieldLabels', {'port': 'no label', 'Country': 'no label', 'LOCodes': 'no label', 'Links': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Oilspills19982023_9.set('fieldLabels', {'HELCOM_ID': 'no label', 'Country': 'no label', 'Year': 'no label', 'Spill_ID': 'no label', 'FlightType': 'no label', 'Wind_speed': 'no label', 'Wind_direc': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Length__km': 'no label', 'Width__km_': 'no label', 'Area__km2_': 'no label', 'Spill_cat': 'no label', 'EstimVol_m': 'no label', 'Vol_Catego': 'no label', 'Type_Subst': 'no label', 'Polluter': 'no label', 'Remarks': 'no label', 'Date': 'no label', 'Time_UTC': 'no label', });
lyr_Stateownedroadsandferryroutes_11.set('fieldLabels', {'objectid': 'no label', 'osoite3': 'no label', 'tie': 'no label', 'ajorata': 'no label', 'osa': 'no label', 'ely': 'no label', 'ajr_pituus': 'no label', 'irrotus_pv': 'no label', 'tietyyppi': 'no label', });
lyr_saaristonrengastie_13.set('fieldLabels', {'internal_i': 'no label', 'edellinen_': 'no label', 'luotu': 'no label', 'lahdejarje': 'no label', 'paattyen': 'no label', 'lahdejarj0': 'no label', 'oid': 'no label', 'alkaen': 'no label', 'muutoksen_': 'no label', 'muokattu': 'no label', 'alkusijain': 'no label', 'alkusijai0': 'no label', 'alkusijai1': 'no label', 'loppusijai': 'no label', 'loppusija0': 'no label', 'loppusija1': 'no label', 'sijainti_t': 'no label', 'tunnus': 'no label', 'nimi': 'no label', });
lyr_Waterways_15.set('fieldLabels', {'fid': 'no label', 'jnro': 'no label', 'nimifi': 'no label', 'nimisv': 'no label', 'luokitusty': 'no label', 'vaylaluokk': 'no label', 'vaylaluo_1': 'no label', 'vaylaluo_2': 'no label', 'omistaja': 'no label', 'vaylalajik': 'no label', 'vaylalajif': 'no label', 'vaylalajis': 'no label', 'valaistusk': 'no label', 'mitoitussy': 'no label', 'valaistusf': 'no label', 'valaistuss': 'no label', 'merialuefi': 'no label', 'merialuesv': 'no label', 'alunselost': 'no label', 'paatepiste': 'no label', 'irrotus_pv': 'no label', });
lyr_Eideroberservations_16.set('fieldLabels', {});
lyr_Eideroberservations_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});