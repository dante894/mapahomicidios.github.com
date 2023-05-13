var wms_layers = [];

var format_homicidios_0 = new ol.format.GeoJSON();
var features_homicidios_0 = format_homicidios_0.readFeatures(json_homicidios_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_homicidios_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_homicidios_0.addFeatures(features_homicidios_0);
var lyr_homicidios_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_homicidios_0, 
                style: style_homicidios_0,
                interactive: true,
    title: 'homicidios<br />\
    <img src="styles/legend/homicidios_0_0.png" /> 0<br />\
    <img src="styles/legend/homicidios_0_1.png" /> 1<br />\
    <img src="styles/legend/homicidios_0_2.png" /> 2<br />\
    <img src="styles/legend/homicidios_0_3.png" /> 3<br />\
    <img src="styles/legend/homicidios_0_4.png" /> 4<br />\
    <img src="styles/legend/homicidios_0_5.png" /> <br />'
        });

lyr_homicidios_0.setVisible(true);
var layersList = [lyr_homicidios_0];
lyr_homicidios_0.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'cantidadHomicidios': 'cantidadHomicidios', });
lyr_homicidios_0.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Hidden', 'drawOrder': 'Range', 'icon': 'TextEdit', 'cantidadHomicidios': 'RelationReference', });
lyr_homicidios_0.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'cantidadHomicidios': 'inline label', });
lyr_homicidios_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});