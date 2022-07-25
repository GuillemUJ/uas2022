app.loadJSONObject({
  "type": "scene",
  "properties": {
    "baseExtent": {
      "cx": 401875.7669762701,
      "cy": 5755891.590468442,
      "width": 516.1175736719742,
      "height": 516.1175736719742,
      "rotation": 0
    },
    "origin": {
      "x": 401875.7669762701,
      "y": 5755891.590468442,
      "z": 0.0
    },
    "zScale": 1.0,
    "light": "directional"
  },
  "layers": [
    {
      "type": "layer",
      "id": 0,
      "properties": {
        "name": "ept_cloud92d564295bd39479",
        "clickable": true,
        "visible": true,
        "type": "pc",
        "url": "https://geo-uas-web.uni-muenster.de/data/zoohigh/lidars/terra_las/ept_cloud92d564295bd39479/ept.json",
        "opacity": 1.0,
        "colorType": "HEIGHT",
        "boxVisible": true
      }
    }
  ]
}); window.setTimeout(function () { app.dispatchEvent({type: "sceneLoaded"}); }, 0);