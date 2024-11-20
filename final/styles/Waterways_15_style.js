var size = 0;
var placement = 'point';
function categories_Waterways_15(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'VL1: Kauppamerenkulun pääväylä':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(68,1,84,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.14}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'VL2: Kauppamerenkulun 2-lk väylä':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(82,87,172,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.14}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'VL3: Hyötyliikenteen matalaväylä':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(31,120,180,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.14}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'VL4: Veneilyn runkoväylä':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(1,208,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.76}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'VL5: Paikallisveneväylä':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(33,243,226,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.76}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'VL6: Venereitti':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(161,250,241,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.76}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Waterways_15 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("vaylaluo_1");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_Waterways_15(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
