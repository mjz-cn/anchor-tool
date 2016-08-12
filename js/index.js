function union_arrays (x, y) {
  var obj = {};
  for (var i = x.length-1; i >= 0; -- i)
     obj[x[i]] = x[i];
  for (var i = y.length-1; i >= 0; -- i)
     obj[y[i]] = y[i];
  var res = []
  for (var k in obj) {
    if (obj.hasOwnProperty(k))  // <-- optional
      res.push(obj[k]);
  }
  return res;
}

$.jCanvas.extend({
    name: 'drawAnchor',
    type: 'anchor',
    props: {
        layer:true,
        draggable:true,
        fillStyle: 'blue',
        font: "5px serif",
        fontColor: "white",
        radius: 7,
    },
    fn: function(ctx, params) {
        var p = params;
        ctx.beginPath();
        ctx.arc(params.x, params.y, params.radius, 2 * Math.PI, false);
        ctx.fillStyle = params.fillStyle;
        ctx.fill();
        $.jCanvas.closePath(this, ctx, p);

        ctx.fillStyle = params.fontColor;
        ctx.font = params.font;
        ctx.fillText(params.text, params.x - params.radius / 2 - 2, params.y + params.radius / 2 + 1);

        $.jCanvas.detectEvents(this, ctx, p);
    },
});

function round6(f) {
    return Number(f.toFixed(6));
}

function generate_zip() {
    var d = {
        "tips": "" 
    };
}

// (function(){
    // 默认的锚点数据
    var g_datas = {
        68: {
            points: [],
            triangles: [],
        },
        74: {
            points: [1.022717, 0.383899, 1.040382, 0.46326999999999996, 1.035116, 0.58403, 1.004478, 0.698566, 0.945416, 0.8075209999999999, 0.864677, 0.905061, 0.761647, 0.983454, 0.636774, 1.040335, 0.496219, 1.058265, 0.35999, 1.037547, 0.242297, 0.97687, 0.140436, 0.897456, 0.060558, 0.799134, 0.008126, 0.693492, -0.024732, 0.5777410000000001, -0.031357, 0.46168299999999995, -0.024279, 0.38582000000000005, 0.945443, 0.31389100000000003, 0.875832, 0.260537, 0.786767, 0.22821899999999995, 0.690493, 0.23528499999999997, 0.596181, 0.25277099999999997, 0.39668, 0.25209800000000004, 0.316491, 0.23406700000000003, 0.222183, 0.21665800000000002, 0.134211, 0.24033099999999996, 0.085613, 0.29543200000000003, 0.495038, 0.33071399999999995, 0.494658, 0.400648, 0.49451, 0.470268, 0.494224, 0.523961, 0.611186, 0.608521, 0.554776, 0.622528, 0.492907, 0.636201, 0.431619, 0.620093, 0.376719, 0.603432, 0.828123, 0.374089, 0.769211, 0.34064000000000005, 0.696301, 0.33826500000000004, 0.62598, 0.37094400000000005, 0.696898, 0.38368899999999995, 0.768706, 0.38858099999999995, 0.363387, 0.368463, 0.29889, 0.332522, 0.228282, 0.332101, 0.168467, 0.35988600000000004, 0.224989, 0.37688, 0.292684, 0.377912, 0.717597, 0.769393, 0.634649, 0.7243729999999999, 0.556253, 0.702982, 0.495143, 0.7134480000000001, 0.433, 0.7005589999999999, 0.354921, 0.720279, 0.276785, 0.757316, 0.35488, 0.804222, 0.431304, 0.824133, 0.494852, 0.832344, 0.559766, 0.827653, 0.638237, 0.810303, 0.677565, 0.765559, 0.557129, 0.745817, 0.494202, 0.748777, 0.432466, 0.742337, 0.313349, 0.755803, 0.434096, 0.773112, 0.496276, 0.778829, 0.558617, 0.774363, 1.005085, 0.114282, 0.92687, 0.05433500000000002, 0.826798, -0.017867999999999995, 0.192436, -0.030858000000000052, 0.093592, 0.045413999999999954, 0.038988, 0.09354200000000001],
            triangles: [58, 67, 59, 60, 49, 48, 58, 59, 6, 34, 52, 35, 44, 45, 25, 39, 40, 29, 37, 18, 36, 27, 42, 22, 23, 44, 24, 41, 36, 1, 50, 62, 51, 56, 65, 66, 57, 58, 7, 64, 53, 63, 28, 27, 39, 52, 34, 51, 54, 14, 35, 29, 42, 28, 19, 20, 24, 35, 15, 46, 37, 19, 18, 36, 0, 1, 18, 17, 36, 37, 20, 19, 38, 20, 37, 21, 20, 38, 21, 38, 39, 24, 44, 25, 30, 34, 35, 21, 39, 27, 28, 42, 27, 39, 29, 28, 29, 30, 35, 31, 30, 29, 30, 33, 34, 31, 29, 40, 36, 17, 0, 41, 31, 40, 31, 32, 30, 31, 41, 1, 49, 31, 48, 48, 2, 3, 67, 60, 59, 4, 48, 3, 5, 48, 4, 6, 59, 5, 59, 48, 5, 60, 48, 59, 7, 58, 6, 61, 49, 60, 58, 66, 67, 31, 2, 48, 31, 50, 32, 1, 2, 31, 61, 50, 49, 52, 62, 63, 50, 31, 49, 34, 33, 51, 51, 62, 52, 32, 50, 51, 50, 61, 62, 63, 53, 52, 54, 55, 11, 57, 8, 9, 66, 58, 57, 8, 57, 7, 56, 57, 9, 66, 57, 56, 10, 56, 9, 55, 56, 10, 53, 54, 35, 53, 35, 52, 12, 54, 11, 55, 10, 11, 65, 56, 55, 64, 55, 54, 65, 55, 64, 54, 53, 64, 12, 13, 54, 14, 54, 13, 15, 35, 14, 47, 35, 46, 33, 32, 51, 30, 32, 33, 29, 35, 47, 15, 45, 46, 22, 21, 27, 20, 21, 23, 43, 23, 22, 29, 47, 42, 23, 21, 22, 24, 20, 23, 22, 42, 43, 23, 43, 44, 45, 16, 26, 15, 16, 45, 25, 45, 26, 41, 37, 36, 40, 37, 41, 38, 37, 40, 39, 38, 40, 47, 43, 42, 46, 43, 47, 46, 44, 43, 45, 44, 46, 67, 60, 61, 66, 67, 61, 62, 66, 61, 65, 66, 62, 63, 65, 62, 64, 65, 63, 26, 73, 25, 73, 72, 25, 26, 16, 73, 70, 24, 71, 25, 72, 24, 70, 69, 19, 19, 69, 18, 24, 70, 19, 69, 68, 18, 17, 68, 0, 18, 68, 17, 72, 71, 24],
            mirror:{0: 16, 1: 15, 2: 14, 3: 13, 4: 12, 5: 11, 6: 10, 7: 9, 9: 7, 10: 6, 11: 5, 12: 4, 13: 3, 14: 2, 15: 1, 16: 0, 17: 26, 18: 25, 19: 24, 20: 23, 21: 22, 22: 21, 23: 20, 24: 19, 25: 18, 26: 17, 31: 35, 32: 34, 34: 32, 35: 31, 36: 45, 37: 44, 38: 43, 39: 42, 40: 47, 41: 46, 42: 39, 43: 38, 44: 37, 45: 36, 46: 41, 47: 40, 48: 54, 49: 53, 50: 52, 52: 50, 53: 49, 54: 48, 55: 59, 56: 58, 58: 56, 59: 55, 60: 64, 61: 63, 63: 61, 64: 60, 65: 67, 67: 65, 68: 73, 69: 72, 70: 71, 71: 70, 72: 69, 73: 68},            
            middle: [27, 28, 29, 30, 33, 51, 62, 66, 57, 8],
            right: [0,1,2,3,4,5,6,7,17,18,19,20,21,31,32,36,37,38,39,40,41,48,49,50,59,60,61,67,58,68,69,70],
            left: [16, 15, 14, 13, 12, 11, 10, 9, 26, 25, 24, 23, 22, 35, 34, 45, 43, 44, 42, 47, 46, 54, 53, 52, 55, 64, 63, 65, 56, 73, 72, 71],
        },
        75: {
            points: [0.17619400000000002,0.45206,0.181128,0.543207,0.19228299999999993,0.633609,0.21086100000000002,0.71757,0.24608400000000002,0.796165,0.29396199999999995,0.866346,0.35725399999999996,0.921219,0.4210499999999999,0.959052,0.49383999999999995,0.960967,0.5834000000000001,0.956489,0.642363,0.915417,0.704134,0.85941,0.750472,0.788355,0.7806710000000001,0.711981,0.7993340000000001,0.62701,0.8094830000000001,0.538907,0.813361,0.451465,0.19975300000000001,0.412924,0.24584699999999998,0.370113,0.30438199999999993,0.344678,0.36714099999999994,0.351468,0.4284899999999999,0.366742,0.5779510000000001,0.366638,0.6305170000000001,0.35613,0.692293,0.346121,0.7494280000000001,0.36147,0.780475,0.395941,0.49687800000000004,0.44324,0.49704500000000007,0.5005,0.49581200000000003,0.557484,0.49612500000000004,0.615302,0.42519699999999994,0.673321,0.4617689999999999,0.688928,0.4944899999999999,0.70226,0.540081,0.685546,0.5761510000000001,0.669223,0.2965389999999999,0.477585,0.3311299999999999,0.453843,0.37351499999999993,0.452806,0.41401299999999996,0.47721,0.3726719999999999,0.485799,0.3309009999999999,0.488675,0.582079,0.47829,0.6199420000000001,0.452789,0.6609680000000001,0.45315,0.695416,0.4739,0.662393,0.485712,0.6230530000000001,0.485822,0.3753789999999999,0.773632,0.42468399999999995,0.760089,0.4659669999999999,0.746349,0.497601,0.752725,0.5300300000000001,0.745796,0.5707250000000001,0.75978,0.618141,0.777887,0.5690400000000001,0.79372,0.5349350000000002,0.799161,0.499357,0.810239,0.4607319999999999,0.800409,0.42589999999999995,0.795336,0.4043269999999999,0.772616,0.4638399999999999,0.76889,0.497751,0.77461,0.531115,0.768476,0.591118,0.774107,0.5307920000000002,0.773971,0.4971960000000001,0.779943,0.4636159999999999,0.773889,0.20865499999999998,0.278848,0.2717219999999999,0.218615,0.3244179999999999,0.159791,0.6931050000000001,0.156346,0.7550020000000001,0.214622,0.796251,0.262139,0.5008220000000001,0.136162],
            // points: [0.1529689999999999,0.400246,0.1573119999999999,0.487688,0.16867900000000002,0.575791,0.18958199999999992,0.660762,0.22340499999999985,0.737136,0.27530299999999996,0.808191,0.344487,0.864198,0.41052500000000003,0.90527,0.502552,0.909748,0.6043350000000001,0.90527,0.670373,0.864198,0.739557,0.808191,0.791455,0.737136,0.825278,0.660762,0.8461810000000001,0.575791,0.857548,0.487688,0.861891,0.400246,0.1898009999999999,0.344722,0.22457400000000005,0.310251,0.28856499999999996,0.294902,0.357754,0.304911,0.416628,0.315419,0.598232,0.315419,0.657106,0.304911,0.726295,0.294902,0.790286,0.310251,0.825059,0.344722,0.502552,0.429826,0.502552,0.535866,0.502552,0.614802,0.502552,0.678717,0.46132700000000004,0.726541,0.48099400000000003,0.731888,0.502552,0.746163,0.533866,0.731888,0.553533,0.726541,0.27165300000000003,0.431218,0.313893,0.416565,0.359842,0.416204,0.39615199999999995,0.435608,0.35757700000000003,0.454115,0.31229799999999996,0.455225,0.618709,0.435608,0.655018,0.416204,0.700967,0.416565,0.743207,0.431218,0.702563,0.455225,0.6572830000000001,0.454115,0.393567,0.792522,0.435697,0.78539,0.46908000000000005,0.78604,0.502552,0.79053,0.5457799999999999,0.78604,0.579163,0.78539,0.621293,0.792522,0.594349,0.815672,0.553712,0.829649,0.502552,0.841947,0.461148,0.829649,0.42051099999999997,0.815672,0.41041799999999995,0.796059,0.466646,0.80872,0.502552,0.814854,0.548215,0.80872,0.6044419999999999,0.796059,0.549072,0.808118,0.502552,0.815309,0.465788,0.808118,0.17213199999999995,0.21092,0.21833100000000005,0.163403,0.287656,0.105127,0.727204,0.105127,0.796529,0.163403,0.8427280000000001,0.21092,0.502552,0.084943],
            // points: [0.821367,0.45206,0.816433,0.543207,0.805278,0.633609,0.7867,0.71757,0.751477,0.796165,0.703599,0.866346,0.640307,0.921219,0.576511,0.959052,0.503721,0.960967,0.414161,0.956489,0.355198,0.915417,0.293427,0.85941,0.247089,0.788355,0.21689,0.711981,0.198227,0.62701,0.188078,0.538907,0.1842,0.451465,0.797808,0.412924,0.751714,0.370113,0.693179,0.344678,0.63042,0.351468,0.569071,0.366742,0.41961,0.366638,0.367044,0.35613,0.305268,0.346121,0.248133,0.36147,0.217086,0.395941,0.500683,0.44324,0.500516,0.5005,0.501749,0.557484,0.501436,0.615302,0.572364,0.673321,0.535792,0.688928,0.503071,0.70226,0.45748,0.685546,0.42141,0.669223,0.701022,0.477585,0.666431,0.453843,0.624046,0.452806,0.583548,0.47721,0.624889,0.485799,0.66666,0.488675,0.415482,0.47829,0.377619,0.452789,0.336593,0.45315,0.302145,0.4739,0.335168,0.485712,0.374508,0.485822,0.622182,0.773632,0.572877,0.760089,0.531594,0.746349,0.49996,0.752725,0.467531,0.745796,0.426836,0.75978,0.37942,0.777887,0.428521,0.79372,0.462626,0.799161,0.498204,0.810239,0.536829,0.800409,0.571661,0.795336,0.593234,0.772616,0.533721,0.76889,0.49981,0.77461,0.466446,0.768476,0.406443,0.774107,0.466769,0.773971,0.500365,0.779943,0.533945,0.773889,0.788906,0.278848,0.725839,0.218615,0.673143,0.159791,0.304456,0.156346,0.242559,0.214622,0.20131,0.262139,0.496739,0.136162],
            triangles: [58, 67, 59, 60, 49, 48, 58, 59, 6, 34, 52, 35, 44, 45, 25, 39, 40, 29, 37, 18, 36, 27, 42, 22, 23, 44, 24, 41, 36, 1, 50, 62, 51, 56, 65, 66, 57, 58, 7, 64, 53, 63, 28, 27, 39, 52, 34, 51, 54, 14, 35, 29, 42, 28, 35, 15, 46, 37, 19, 18, 36, 0, 1, 18, 17, 36, 37, 20, 19, 38, 20, 37, 21, 20, 38, 21, 38, 39, 24, 44, 25, 30, 34, 35, 21, 39, 27, 28, 42, 27, 39, 29, 28, 29, 30, 35, 31, 30, 29, 30, 33, 34, 31, 29, 40, 36, 17, 0, 41, 31, 40, 31, 32, 30, 31, 41, 1, 49, 31, 48, 48, 2, 3, 67, 60, 59, 4, 48, 3, 5, 48, 4, 6, 59, 5, 59, 48, 5, 60, 48, 59, 7, 58, 6, 61, 49, 60, 58, 66, 67, 31, 2, 48, 31, 50, 32, 1, 2, 31, 61, 50, 49, 52, 62, 63, 50, 31, 49, 34, 33, 51, 51, 62, 52, 32, 50, 51, 50, 61, 62, 63, 53, 52, 54, 55, 11, 57, 8, 9, 66, 58, 57, 8, 57, 7, 56, 57, 9, 66, 57, 56, 10, 56, 9, 55, 56, 10, 53, 54, 35, 53, 35, 52, 12, 54, 11, 55, 10, 11, 65, 56, 55, 64, 55, 54, 65, 55, 64, 54, 53, 64, 12, 13, 54, 14, 54, 13, 15, 35, 14, 47, 35, 46, 33, 32, 51, 30, 32, 33, 29, 35, 47, 15, 45, 46, 22, 21, 27, 43, 23, 22, 29, 47, 42, 22, 42, 43, 23, 43, 44, 45, 16, 26, 15, 16, 45, 25, 45, 26, 41, 37, 36, 40, 37, 41, 38, 37, 40, 39, 38, 40, 47, 43, 42, 46, 43, 47, 46, 44, 43, 45, 44, 46, 67, 60, 61, 66, 67, 61, 62, 66, 61, 65, 66, 62, 63, 65, 62, 64, 65, 63, 26, 73, 25, 73, 72, 25, 26, 16, 73, 25, 72, 24, 70, 69, 19, 19, 69, 18, 69, 68, 18, 17, 68, 0, 18, 68, 17, 72, 71, 24, 20, 70, 19, 70, 20, 74, 20, 21, 74, 22, 74, 21, 23, 74, 22, 24, 74, 23, 71, 74, 24],
            mirror:{0: 16, 1: 15, 2: 14, 3: 13, 4: 12, 5: 11, 6: 10, 7: 9, 9: 7, 10: 6, 11: 5, 12: 4, 13: 3, 14: 2, 15: 1, 16: 0, 17: 26, 18: 25, 19: 24, 20: 23, 21: 22, 22: 21, 23: 20, 24: 19, 25: 18, 26: 17, 31: 35, 32: 34, 34: 32, 35: 31, 36: 45, 37: 44, 38: 43, 39: 42, 40: 47, 41: 46, 42: 39, 43: 38, 44: 37, 45: 36, 46: 41, 47: 40, 48: 54, 49: 53, 50: 52, 52: 50, 53: 49, 54: 48, 55: 59, 56: 58, 58: 56, 59: 55, 60: 64, 61: 63, 63: 61, 64: 60, 65: 67, 67: 65, 68: 73, 69: 72, 70: 71, 71: 70, 72: 69, 73: 68},            
            middle: [27, 28, 29, 30, 33, 51, 62, 66, 57, 8, 74],
            right: [0,1,2,3,4,5,6,7,17,18,19,20,21,31,32,36,37,38,39,40,41,48,49,50,59,60,61,67,58,68,69,70],
            left: [16, 15, 14, 13, 12, 11, 10, 9, 26, 25, 24, 23, 22, 35, 34, 45, 43, 44, 42, 47, 46, 54, 53, 52, 55, 64, 63, 65, 56, 73, 72, 71],
        }
    };
    var g_img = "", g_pointNum = 75;
    var g_width = 0, g_height = 0;
    var g_mirrorType = 3, g_alignMiddle = false;
    var g_scalePercent = 1;
    var g_anchorScale = {x:1, y:1};
    var g_canvas = $("#canvas");
    var g_data = {};
    var g_preAnchorScale = {x:100, y:100};

    reset(g_pointNum);
    function reset(point_num) {
        $("#anchor_scale_h_ipt").val(100);
        $("#anchor_scale_h_ipt").val(100);
        g_preAnchorScale = {x:100, y:100};
        
        g_preZoom = 100;
        g_pointNum = point_num;
        g_data.points = g_datas[g_pointNum].points.slice();
        g_data.triangles = g_datas[g_pointNum].triangles.slice();
        g_data.mirror = g_datas[g_pointNum].mirror;
        g_data.middle = g_datas[g_pointNum].middle;
        g_data.left = g_datas[g_pointNum].left;
        g_data.right = g_datas[g_pointNum].right;
        g_data.lines = [];
        // 初始化lines
        for (var i = 0; i < g_data.points.length / 2; i++) {
            g_data.lines[i] = [];
        }
        for (var i = 0; i < g_data.triangles.length; i += 3) {
            var p1 = g_data.triangles[i], p2 = g_data.triangles[i+1], p3 = g_data.triangles[i+2];
            g_data.lines[p1] = union_arrays(g_data.lines[p1], [p2, p3]);
            g_data.lines[p2] = union_arrays(g_data.lines[p2], [p1, p3]); 
            g_data.lines[p3] = union_arrays(g_data.lines[p3], [p1, p2]); 
        }
    }
    
    function download(data, filename) {
        var a = document.createElement("a");
        var e = document.createEvent('MouseEvents');
        a.href = window.URL.createObjectURL(new Blob([data], {type: 'text/json'}));
        a.download = filename == "" ? "mr" : filename;
        a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        a.dispatchEvent(e);
    }

    $("#img_ipt").change(function(event) {
        var img = new Image();
        img.src = URL.createObjectURL(event.target.files[0]);

        console.log(event.target.files);

        img.onload = function() {
            g_img = img;
            draw();
            $("#name").val(event.target.files[0].name.split('.')[0]);
        };
        var fr = new FileReader();
        fr.onload = function(e) {
            g_data.imgb64 = e.target.result.split('base64,')[1];
        };       
        fr.readAsDataURL(event.target.files[0]);
    });

    $("input[name=point_num]").change(function() {
        $("#anchor_ipt").val("");
        g_pointNum = $("input[name=point_num]:checked").val();
        g_pointNum = parseInt(g_pointNum, 10);
        reset(g_pointNum);
        draw();
    });

    $("#add_line").click(function(){
        var p1 = parseInt($("#num1").val(), 10);
        var p2 = parseInt($("#num2").val(), 10);
        var len = g_data.points.length / 2 | 0;
        if (p1 >= len || p2 >= len) {
            return;
        }
        g_data.lines[p1] = union_arrays(g_data.lines[p1], [p2]);
        g_data.lines[p2] = union_arrays(g_data.lines[p2], [p1]);
        if (p1 > p2) {
            temp = p1;
            p1 = p2;
            p2 = temp;
        }
        g_canvas.drawLine({
            strokeStyle: "red",
            strokeWidth: 1,
            name: "line-" + p1 + "-" + p2,
            x1: getAnchor(p1)[0], y1: getAnchor(p1)[1],
            x2: getAnchor(p2)[0], y2: getAnchor(p2)[1]
        });
    });
    $("#delete_line").click(function(){
        var p1 = parseInt($("#num1").val(), 10);
        var p2 = parseInt($("#num2").val(), 10);
        var len = g_data.points.length / 2 | 0;
        if (p1 >= len || p2 >= len) {
            return;
        }
        var p1s = g_data.lines[p1];
        var p2s = g_data.lines[p2];
        for (var i = 0; i < p1s.length; i++) {
            if (p2 == p1s[i]) {
                p1s.splice(i, 1);
                break;
            }
        }
        for (var i = 0; i < p2s.length; i++) {
            if (p1 == p2s[i]) {
                p2s.splice(i, 1);
                break;
            }
        }
        if (p1 > p2) {
            temp = p1;
            p1 = p2;
            p2 = temp;
        }
        g_canvas.removeLayer("line-" + p1 + "-" + p2);
    });

    function anchor() {
        var val = "";
        if ($("input[name=data_format]:checked").val() == 0) {
            val = JSON.stringify(g_data.points)
        } else {
            var val = 'mvertex = new double[]{';
            for (var i = 0; i < g_data.points.length - 1; i++ ){
                val += g_data.points[i].toFixed(6) + 'd,';
            }
            val +=  g_data.points[g_data.points.length - 1].toFixed(6) + 'd};'            
        }
        download(val, $("#name").val() + "_anchors.txt");
    };

    function str(p1, p2, p3) {
        var pp1, pp2, pp3;
        if (p1 > p2) {
            temp = p2;
            p2 = p1;
            p1 = temp;
        }
        if (p1 > p3) {
            temp = p1;
            p1 = p3;
            p3 = temp;
        }
        if (p2 > p3) {
            temp = p2;
            p2 = p3;
            p3 = temp;
        }
        return p1 + '-' + p2 + '-' + p3;
    }

    function isTriangle(p1, p2, p3) {
        var p1s = g_data.lines[p1];
        var p2s = g_data.lines[p2];
        var p3s = g_data.lines[p3];
        if (p1s.indexOf(p2) == -1 || p1s.indexOf(p3) == -1) {
            return false;
        }
        if (p2s.indexOf(p1) == -1 || p2s.indexOf(p3) == -1 ) {
            return false;
        }
        if (p3s.indexOf(p1) == -1 || p3s.indexOf(p2) == -1) {
            return false;
        }
        return true;
    }

    function orderTriangle(p1, p2, p3) {
        var p1x = g_data.points[p1 * 2], p1y = g_data.points[p1 * 2 + 1],
            p2x = g_data.points[p2 * 2], p2y = g_data.points[p2 * 2 + 1],
            p3x = g_data.points[p3 * 2], p3y = g_data.points[p3 * 2 + 1];
        var pp1 = {x:p1x, y: p1y, num: p1}, 
            pp2 = {x:p2x, y: p2y, num: p2}
            pp3 = {x:p3x, y: p3y, num: p3};
        console.log(pp1, pp2, pp3);

        if (pp1.x > pp2.x || (pp1.x == pp2.x && pp1.y < pp2.y)) {
            temp = pp1; pp1 = pp2; pp2 = temp;
        }
        if (pp1.x > pp3.x || (pp1.x == pp3.x && pp1.y < pp3.y)) {
            temp = pp1; pp1 = pp3; pp3 = temp;
        }
        // if (pp2.y < pp3.y || (pp2.y == pp3.y && pp2.x < pp3.x)) {
        //     temp = pp2; pp2 = pp3; pp3 = temp;
        // }
        console.log(pp1, pp2, pp3);
        if (! ((pp2.x > pp3.x && pp2.y >= pp3.y) || (pp2.y > pp3.y && pp2.x <= pp3.x))) {
            temp = pp2; pp2 = pp3; pp3 = temp;
        }
        return [pp1.num, pp2.num, pp3.num];
    }
 
    // 一定要记得进行坐标系转换，画布是一个坐标系，锚点是另外一个坐标系
    function draw() {
        g_canvas.removeLayers();
        var width = 820;
        var height = g_img.height / g_img.width * width;

        g_width = width * g_scalePercent;
        g_height = height * g_scalePercent;
        g_moveX = (width - g_width)/2
        g_moveY = (height - g_height)/2;
        g_canvas.attr("width", width);
        g_canvas.attr("height", height);
        g_canvas.drawLine({
            strokeDash: [2, 5],
            strokeStyle: 'black',
            fillStyle: 'transparent',
            strokeWidth: 1,
            x1: g_moveX, y1: g_moveY,
            x2: g_moveX, y2: g_height + g_moveY,
            x3: g_moveX + g_width, y3: g_height + g_moveY,
            x4: g_moveX + g_width, y4: g_moveY,
            x5: g_moveX, y5: g_moveY
        });
        g_canvas.drawLine({
            strokeDash: [2, 5],
            strokeStyle: 'black',
            fillStyle: 'transparent',
            strokeWidth: 1,
            x1: g_moveX + g_width / 2, y1: g_moveY,
            x2: g_moveX + g_width / 2, y2: g_height + g_moveY,
        });
        g_canvas.drawImage({
            draggable: false,
            source: g_img.src,
            x: g_moveX, y: g_moveY,
            width:g_width, height:g_height,
            fromCenter: false
        });

        var map = {};
        for (var i = 0; i < g_data.points.length / 2; i++ ) {
            for (var j = 0; j < g_data.lines[i].length; j ++) {
                var p1 = i;
                var p2 = g_data.lines[i][j];
                if (p1 > p2) {
                    temp = p1;
                    p1 = p2;
                    p2 = temp;
                }
                if (map["line-" + p1 + "-" + p2] != undefined) {
                    continue;
                }
                g_canvas.drawLine({
                    groups: ["lines"],
                    draggable: false,
                    strokeStyle: "red",
                    strokeWidth: 1,
                    name: "line-" + p1 + "-" + p2,
                    x1: getAnchor(p1)[0], y1: getAnchor(p1)[1],
                    x2: getAnchor(p2)[0], y2: getAnchor(p2)[1]
                });
                map["line-" + p1 + "-" + p2] = true;
            }
        }

        for (var i = 0; i < g_data.points.length; i += 2) {
            var arr = g_data.points;
            var x = (Number(arr[i])) * g_width + g_moveX, y = Number(arr[i+1]) * g_height + g_moveY;
            g_canvas.drawAnchor({
                groups: ["anchors"],
                x: x, y: y,
                preX: x, preY: y,
                text: i/2 | 0,
                name: 'anchor-' + i/2,
                isTarget: false,
                dragstart: function(layer) {
                    layer.preX = layer.x;
                    layer.preY = layer.y;
                },
                drag: function(layer) {
                    // redraw lines
                    var p1 = layer.text;
                    g_data.points[p1 * 2] = Number(((layer.x - g_moveX) / g_width).toFixed(6));
                    g_data.points[p1 * 2 + 1] = Number(((layer.y - g_moveY) / g_height).toFixed(6));
                    for(var i = 0; i < g_data.lines[p1].length; i++) {
                        var p2 = g_data.lines[p1][i];
                        if (p1 < p2) {
                            g_canvas.getLayer("line-" + p1 + "-" + p2).x1 = layer.x;
                            g_canvas.getLayer("line-" + p1 + "-" + p2).y1 = layer.y;
                        } else {
                            g_canvas.getLayer("line-" + p2 + "-" + p1).x2 = layer.x;
                            g_canvas.getLayer("line-" + p2 + "-" + p1).y2 = layer.y;
                        }
                    }
                    if (layer.isTarget) {
                        return;
                    }
                    // 镜像功能
                    if (g_mirrorType != 0 && g_data.mirror[layer.text] != undefined) {
                        if (layer.relativeLayer == undefined) {
                            layer.relativeLayer = g_canvas.getLayer('anchor-' + g_data.mirror[layer.text]);
                        }
                        layer.relativeLayer.isTarget = true;
                        var dx = layer.x - layer.preX, dy = layer.y - layer.preY;
                        if (g_mirrorType == 1) {
                            dy = 0;
                        } 
                        if (g_mirrorType == 2) {
                            dx = 0;
                        }
                        layer.relativeLayer.x -= dx;
                        layer.relativeLayer.y += dy;
                        g_canvas.triggerLayerEvent(layer.relativeLayer.name, 'drag');
                        layer.preX = layer.x;
                        layer.preY = layer.y;
                    } 
                    // 中轴线功能
                    if (g_alignMiddle && g_data.middle.indexOf(Number(layer.text)) != -1) {
                        for( var i = 0; i < g_data.middle.length; i++) {
                            var p = g_data.middle[i];
                            if (p == layer.text) {continue;}
                            var l = g_canvas.getLayer("anchor-" + p);
                            l.isTarget = true;
                            l.x = layer.x;
                            g_canvas.triggerLayerEvent(l.name, 'drag');
                        }
                    }
                },
                dragstop: function(layer) {
                    if (layer.relativeLayer != undefined) {
                        layer.relativeLayer.isTarget = false;
                    }
                     if (g_data.middle.indexOf(Number(layer.text)) != -1 && g_alignMiddle) {
                        for( var i = 0; i < g_data.middle.length; i++) {
                            var p = g_data.middle[i];
                            if (p == layer.text) {continue;}
                            var l = g_canvas.getLayer("anchor-" + p);
                            l.isTarget = false;
                        }
                    }
                }
            });
        }
    }

    function getAnchor(point) {
        var p = point * 2;
        var x = g_data.points[p], y = g_data.points[p+1];
        return [x * g_width + + g_moveX, y * g_height + + g_moveY];
    }

    $("#reset").click(function() {
        reset(g_pointNum);
        draw();
    });

    $("#anchor_ipt").change(function(event) {
        file = event.target.files[0];
        fr = new FileReader();
        fr.onload = function() {
            var data = fr.result.split(',');
            var points = [];
            for (var i = 0; i < data.length; i++) {
                if (data[i].trim() == '') {
                    continue;
                }
                var re = /^[^\d-]*(-?\d+\.\d+)[^\d]*$/g;
                var num = parseFloat(re.exec(data[i])[1]).toFixed(6);
                points.push(Number(num));
            }
            g_pointNum = points.length/2 | 0;
            $("input[name=point_num][value=" + g_pointNum + "]").attr("checked", true);
            reset(g_pointNum);
            g_data.points = points;
            draw();
        }
        fr.readAsText(file);
    });

    $("#move_up").click(function(){
        var unit = parseInt($("#move_unit").val());
        for (var i = 1; i < g_data.points.length; i += 2) {
            g_data.points[i] -= Number((unit/g_height).toFixed(6));
        }
        draw();
    });
    $("#move_down").click(function(){
        var unit = parseInt($("#move_unit").val());
        for (var i = 1; i < g_data.points.length; i += 2) {
            g_data.points[i] += Number((unit/g_height).toFixed(6));
        }
        draw();
    });
    $("#move_left").click(function(){
        var unit = parseInt($("#move_unit").val());
        for (var i = 0; i < g_data.points.length; i += 2) {
            g_data.points[i] -= Number((unit/g_width).toFixed(6));
        }
        draw();
    });
    $("#move_right").click(function(){
        var unit = parseInt($("#move_unit").val());
        for (var i = 0; i < g_data.points.length; i += 2) {
            g_data.points[i] += Number((unit/g_width).toFixed(6));
        }
        draw();
    });

    $("#mirror").change(function() {
        if($(this).is(":checked")) {
            g_mirrorEnable = true;
        } else {
            g_mirrorEnable = false;
        }
    });
    $("#align_middle").change(function() {
        if($(this).is(":checked")) {
            g_alignMiddle = true;
            var base = g_data.middle[0];
            for (var i = 0; i < g_data.middle.length; i++) {
                var p = g_data.middle[i];
                g_data.points[p * 2] = Number(g_data.points[base * 2]);
            }
        } else {
            g_alignMiddle = false;
        }
        draw();
    });

    $(".align").click(function(){
        var ps = [];
        if($(this).hasClass("left")) {
            ps = g_data.left;
        } else {
            ps = g_data.right;
        }
        var mX = g_data.points[g_data.middle[0] * 2];
        for (var i = 0; i < ps.length; i++) {
            var p1 = ps[i], p2 = g_data.mirror[p1];
            g_data.points[p2 * 2] = 2 * mX - g_data.points[p1 * 2];
            g_data.points[p2 * 2 + 1] = g_data.points[p1 * 2 + 1];
        }
        draw();
    });
    $("#hide_anchor").click(function(){
        var ans = g_canvas.getLayerGroup("anchors");
        var ls = g_canvas.getLayerGroup("lines");
        var visible = false;
        if ($(this).hasClass("show")) {
            $(this).removeClass("show");
            $(this).text("显示锚点");
            visible = false;
        } else {
            $(this).addClass("show");
            $(this).text("隐藏锚点");
            visible = true;
        }
        for (var i = 0; i < ans.length; i++) {
            ans[i].visible = visible;
        }
        for (var i = 0; i < ls.length; i++) {
            ls[i].visible = visible;
        }
        g_canvas.restoreCanvas();
    });

    $("#scale_percent").keydown(function() {
        var keyCode = (event.keyCode ? event.keyCode : event.which); 
        if (keyCode == 13) {
            g_scalePercent = Number($(this).val()) / 100;
            draw();
        }
    });
    function anchorScale() {
        var relativeX = 0.5, relativeY = 0.5; // 围绕某个点进行缩放
        var percentX = parseInt($("#anchor_scale_h_ipt").val());
        var percentY = parseInt($("#anchor_scale_v_ipt").val());
        var scale = {};
        scale.x = percentX / g_preAnchorScale.x;
        scale.y = percentY / g_preAnchorScale.y;
        g_preAnchorScale.x = percentX;
        g_preAnchorScale.y = percentY;
        for (var i = 0; i < g_data.points.length; i += 2) {
            var x = g_data.points[i], y = g_data.points[i + 1];
            g_data.points[i] = (x - relativeX) * scale.x + relativeX;
            g_data.points[i + 1] = (y - relativeY) * scale.y + relativeY;
        }
        draw();
    }
    $("#anchor_scale_h_ipt, #anchor_scale_v_ipt").keydown(function() {
        var keyCode = (event.keyCode ? event.keyCode : event.which); 
        if (keyCode == 13) {
            anchorScale();
        }
    });
    $("#anchor_scale_btn").click(anchorScale);

    $("input[name=mirror]").change(function() {
        g_mirrorType = Number($("input[name=mirror]:checked").val());
    });

    $("#2d_view").click(function() {
        $("#2d").toggle();
        $("#2dtip").toggle();
        var text = $(this).text();
        $(this).text(text == "展示2D操作" ? "隐藏2D操作" : "展示2D操作");
    });


    function jsonData() {
        var name = $("#name").val();
        var d = {tips:''};
        d.title = name;
        var items = {};
        items.type = '2d';
        items.level = 1;
        items.transparent = 1.0;
        items.point_num = g_pointNum; 
        items.mask_img = name + ".png";
        items.shapes = g_data.triangles;
        items.tex_coord = g_data.points;
        
        d.items = {top:[items]};
        return d;
    }

    function json(){
        var name = $("#name").val();
        download(JSON.stringify(jsonData()), name + ".json");
    };

    function zip() {
        var name = $("#name").val();
        var d = jsonData();
        var zip = new JSZip();
        // var f = zip.folder(name);
        zip.file("params.json", JSON.stringify(d));
        // var img = zip.folder("images");
        zip.file(name + ".png", g_data.imgb64, {base64: true});
        zip.generateAsync({type:"blob"})
        .then(function(content) {
            // see FileSaver.js
            download(content, name + ".zip");
        });
    };

    function triangle() {
        var trans = [];
        var map = {};
        for (var i = 0; i < g_data.lines.length; i++) {
            var p1 = i;
            for (var j = 0; j < g_data.lines[i].length - 1; j++) {
                var p2 = g_data.lines[i][j];
                for (var k = j + 1; k < g_data.lines[i].length; k++) {
                    var p3 = g_data.lines[i][k];
                    var key = str(p1, p2, p3);
                    if (map[key] == undefined && isTriangle(p1, p2, p3)) {
                        trans.push(...orderTriangle(p1, p2, p3));
                    }
                    map[key] = true;                    
                }
            }
        }
        g_data.triangles = trans;
        var val = "";
        if ($("input[name=data_format]:checked").val() == 0) {
            val = JSON.stringify(g_data.triangles);
        } else {
            val = 'mShapes = new short[]{';
            for(var i = 0; i < g_data.triangles.length - 1; i++) {
                val += '(short)' + g_data.triangles[i]+ ',';
            }
            val +=  '(short)' + g_data.triangles[g_data.triangles.length - 1] + '};'
        }
        download(val,  $("#name").val() + "_triangles");
    };

    $("#output").click(function() {
        var op = $("input[name=data_format]:checked").val();
        switch (op) {
            case "anchor":
                anchor();break;
            case "zip":
                zip(); break;
            case "triangle":
                triangle(); break;
            case "json":
                json();break;
        }

    });

    var img = new Image();
    img.src = "images/baozi-2.png";
    reset(75);
    img.onload = function() {
        g_img = img;
        draw();
    };
// }());
