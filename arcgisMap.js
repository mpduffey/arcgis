System.register(['angular2/core', 'esri-mods'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, esri_mods_1;
    var MapService, MapComponent;
    function createSymbol(path, color) {
        var markerSymbol = new esri_mods_1.esri.symbol.SimpleMarkerSymbol();
        markerSymbol.setPath(path);
        markerSymbol.setColor(new esri_mods_1.dojo.Color(color));
        markerSymbol.setOutline(null);
        return markerSymbol;
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (esri_mods_1_1) {
                esri_mods_1 = esri_mods_1_1;
            }],
        execute: function() {
            MapService = (function () {
                function MapService() {
                    this.map = null;
                    this.map = new esri_mods_1.Map({
                        basemap: 'streets'
                    });
                }
                return MapService;
            }());
            exports_1("default", MapService);
            MapComponent = (function () {
                function MapComponent(_service, elRef) {
                    this._service = _service;
                    this.elRef = elRef;
                    this.viewCreated = new core_1.EventEmitter();
                    this.view = null;
                }
                MapComponent.prototype.ngOnInit = function () {
                    this.view = new esri_mods_1.MapView({
                        container: this.elRef.nativeElement.firstChild,
                        map: this._service.map,
                        scale: 20000,
                        center: [-89.384145, 43.078725],
                        autoResize: true,
                        height: '400px'
                    });
                    this.viewCreated.next(this.view);
                    this._service.map.on("load", mapLoaded);
                    function mapLoaded() {
                        points = [[-89.384145, 43.078725], [-89.3842, 43.0787], [-89.382, 43.07813]];
                        //var iconPath = "M24.0,2.199C11.9595,2.199,2.199,11.9595,2.199,24.0c0.0,12.0405,9.7605,21.801,21.801,21.801c12.0405,0.0,21.801-9.7605,21.801-21.801C45.801,11.9595,36.0405,2.199,24.0,2.199zM31.0935,11.0625c1.401,0.0,2.532,2.2245,2.532,4.968S32.4915,21.0,31.0935,21.0c-1.398,0.0-2.532-2.2245-2.532-4.968S29.697,11.0625,31.0935,11.0625zM16.656,11.0625c1.398,0.0,2.532,2.2245,2.532,4.968S18.0555,21.0,16.656,21.0s-2.532-2.2245-2.532-4.968S15.258,11.0625,16.656,11.0625zM24.0315,39.0c-4.3095,0.0-8.3445-2.6355-11.8185-7.2165c3.5955,2.346,7.5315,3.654,11.661,3.654c4.3845,0.0,8.5515-1.47,12.3225-4.101C32.649,36.198,28.485,39.0,24.0315,39.0z";
                        initColor = "#ce641d";
                        arrayUtils.forEach(points, function (point) {
                            graphic = new Graphic(new Point(point), _service.createSymbol(iconPath, initColor));
                            this._service.map.graphics.add(graphic);
                        });
                    }
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], MapComponent.prototype, "viewCreated", void 0);
                MapComponent = __decorate([
                    core_1.Component({
                        selector: 'arcgis',
                        template: '<div></div>',
                        providers: [MapService]
                    }), 
                    __metadata('design:paramtypes', [MapService, core_1.ElementRef])
                ], MapComponent);
                return MapComponent;
            }());
            exports_1("MapComponent", MapComponent);
        }
    }
});
//# sourceMappingURL=arcgisMap.js.map