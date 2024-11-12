var topleft = new Canvas("topleft", [-4,-4,4,4]);
var topright = new Canvas("topright", [-4,-4,4,4]);

var bottommatrix = new Canvas("bottomsliders", [0,0, 2,2]);
var bottomleft = new Canvas("bottomleft", [-4,-4,4,4]);
var bottomright = new Canvas("bottomright", [-4,-4,4,4]);

topleft.margins = [5,5,5,5];
topleft.setUpCoordinates();
topright.margins = [5,5,5,5]
topright.setUpCoordinates();

bottommatrix.margins = [20,5,20,5];
bottommatrix.setUpCoordinates();
bottomleft.margins = [5,5,5,5];
bottomleft.setUpCoordinates();
bottomright.margins = [5,5,5,5]
bottomright.setUpCoordinates();

var dx = 0.05;
var mkslider = function(xr, y, canvas, method, label) {
    var s = new Slider(xr, y, [-2,2], method);
    s.ticks = [-2,1,2]
    s.labels = [-2,1,2]
    s.point.style = "box";
    s.point.fillColor = "blue"
    s.point.size = 4;
    label = new Label(label, [xr[0], y])
    label.offset = [-8,5]
    label.alignment = "rb"
    canvas.addPlotable(label)
    canvas.addPlotable(s);
    canvas.addMoveable(s);
    return s;
}

var topupdate = function() {
    var ma = 1
    var mb = 0
    var mc = -1
    var md = -2
    var det = ma*md - mb*mc;
    var x = v.head[0];
    var y = v.head[1];
    var a1 = [ma, mc];
    var a2 = [mb, md];
    trgrid.a1 = a1;
    trgrid.a2 = a2;
    if (Math.abs(det) < 0.03) {
	trgrid.a2 = trgrid.a1;
    }
    Av.head = [ma*x + mb*y, mc*x + md*y];
    topleft.draw();
    topright.draw()
}

var bottomupdate = function() {
    var ma = ba.coordinate();
    var mb = bb.coordinate();
    var mc = bc.coordinate();
    var md = bd.coordinate();
    var det = ma*md - mb*mc;
    var a1 = [ma, mc];
    var a2 = [mb, md];
    tgrid.a1 = a1;
    tgrid.a2 = a2;
    if (Math.abs(det) < 0.03) {
	tgrid.a2 = tgrid.a1;
    }
    polygon.points = [[0,0], a1, vadd(a1, a2), a2];
    bottommatrix.draw();
    bottomleft.draw();
    bottomright.draw()
}

var ba = mkslider([dx, 1-2*dx], 1.5, bottommatrix, bottomupdate, "a");
var bb = mkslider([1+2*dx, 2-dx], 1.5, bottommatrix, bottomupdate, "b");
var bc = mkslider([dx, 1-2*dx], 0.5, bottommatrix, bottomupdate, "c");
var bd = mkslider([1+2*dx, 2-dx], 0.5, bottommatrix, bottomupdate,"d");
ba.init(1);
bb.init(0);
bc.init(0);
bd.init(1);

var tlgrid = new Grid([-4,1,4], [-4,1,4]);
topleft.addPlotable(tlgrid);

var trgrid = new TGrid([1,0],[0,1])
topright.addPlotable(trgrid)

var blgrid = new Grid([-4,1,4], [-4,1,4]);
bottomleft.addPlotable(blgrid);

var tlaxes = new Axes();
tlaxes.labels = [[-4,1,4], [-4,1,4]]
tlaxes.ticks = [[-4,1,4], [-4,1,4]]
topleft.addPlotable(tlaxes);

var traxes = new Axes();
topright.addPlotable(traxes);
traxes.labels = [[-4,1,4], [-4,1,4]]
traxes.ticks = [[-4,1,4], [-4,1,4]]

var blaxes = new Axes();
blaxes.labels = [[-4,1,4], [-4,1,4]]
blaxes.ticks = [[-4,1,4], [-4,1,4]]
bottomleft.addPlotable(blaxes);

var braxes = new Axes();
braxes.labels = [[-4,1,4], [-4,1,4]]
braxes.ticks = [[-4,1,4], [-4,1,4]]

var v = new Vector([1,0]);
v.move = function(p) {
    v.head = p;
    topupdate();
}
v.fillColor = "red";

var Av = new Vector([1,0]);
Av.fillColor = "gray";
topright.addPlotable(Av);
topleft.addPlotable(v);
topleft.addMoveable(v);

var lrect = new Rectangle([0,0], [1,1]);
lrect.fillColor = "gray";
lrect.strokeColor = "blue";
bottomleft.addPlotable(lrect);

var tgrid = new TGrid([1,0],[0,1]);
bottomright.addPlotable(tgrid);

var polygon = new Polygon([[0,0], [1,0], [1,1], [0,1]]);
polygon.fillColor = "gray";
polygon.strokeColor = "blue";
bottomright.addPlotable(polygon);
bottomright.addPlotable(braxes);

topupdate();
bottomupdate();


