import {Component, ElementRef, Output, EventEmitter} from 'angular2/core';
import {MapView, Map, esri, dojo} from 'esri-mods';

export default class MapService {
	map: null;
	constructor() {
		this.map = new Map({
			basemap: 'streets'
		});
	}
	function createSymbol(path, color){
		var markerSymbol = new esri.symbol.SimpleMarkerSymbol();
		markerSymbol.setPath(path);
		markerSymbol.setColor(new dojo.Color(color));
		markerSymbol.setOutline(null);
		return markerSymbol;
	}
}

@Component({
	selector:		'arcgis',
	template:		'<div></div>',
	providers:	[MapService]
})
export class MapComponent {
	@Output() viewCreated = new EventEmitter();
	view: null;

	constructor(private _service: MapService, private elRef:ElementRef) {}

	ngOnInit() {
		this.view = new MapView({
			container:	this.elRef.nativeElement.firstChild,
			map: 				this._service.map,
			scale: 			20000,
			center: 		[-89.384145, 43.078725],
			autoResize:	true,
			height: 		'400px'
		});
		this.viewCreated.next(this.view);
		this._service.map.on("load", mapLoaded);
      
		function mapLoaded(){
			points = [[-89.384145, 43.078725],[-89.3842, 43.0787],[-89.382, 43.07813]];
			//var iconPath = "M24.0,2.199C11.9595,2.199,2.199,11.9595,2.199,24.0c0.0,12.0405,9.7605,21.801,21.801,21.801c12.0405,0.0,21.801-9.7605,21.801-21.801C45.801,11.9595,36.0405,2.199,24.0,2.199zM31.0935,11.0625c1.401,0.0,2.532,2.2245,2.532,4.968S32.4915,21.0,31.0935,21.0c-1.398,0.0-2.532-2.2245-2.532-4.968S29.697,11.0625,31.0935,11.0625zM16.656,11.0625c1.398,0.0,2.532,2.2245,2.532,4.968S18.0555,21.0,16.656,21.0s-2.532-2.2245-2.532-4.968S15.258,11.0625,16.656,11.0625zM24.0315,39.0c-4.3095,0.0-8.3445-2.6355-11.8185-7.2165c3.5955,2.346,7.5315,3.654,11.661,3.654c4.3845,0.0,8.5515-1.47,12.3225-4.101C32.649,36.198,28.485,39.0,24.0315,39.0z";
			initColor = "#ce641d";
			arrayUtils.forEach(points, function(point) {
				graphic = new Graphic(new Point(point), _service.createSymbol(iconPath, initColor));
				this._service.map.graphics.add(graphic);
			});
		}
	}
}