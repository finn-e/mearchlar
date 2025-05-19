function _bottom_case_walls_extrude_6_6_outline_fn(){
    return new CSG.Path2D([[89.5501974,-91.2460759],[90.1001974,-57.9160759]]).appendPoint([90.1099205,-57.3268575]).appendArc([90.3951423,-56.8835548],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([118.7131773,-43.418519]).appendArc([118.990871,-43.0537907],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([119.7024193,-39.0183995]).appendArc([120.2291599,-38.6064039],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([145.075329,-40.316714]).appendArc([145.5926286,-39.947304],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([145.6986882,-39.5514844]).appendPoint([145.9443167,-38.6334227]).appendArc([146.5567371,-38.27969],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([147.4741874,-38.5255201]).appendPoint([163.9470863,-42.9394201]).appendPoint([164.865236,-43.1854375]).appendArc([165.2187894,-43.79781],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([164.9730506,-44.7149193]).appendPoint([164.7812648,-45.4306738]).appendArc([164.9521449,-45.9507293],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([189.4162926,-65.4948644]).appendArc([189.5573637,-66.0968195],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([189.167585,-66.9327025]).appendArc([189.4094298,-67.5971655],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([225.6427088,-84.4930211]).appendArc([225.8845536,-85.1574841],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([202.8751521,-134.5013049]).appendArc([202.948285,-135.037551],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([205.1372984,-137.5976509]).appendArc([205.0440656,-138.3321639],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([182.0287951,-154.4476297]).appendArc([181.3324309,-154.3248419],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([171.6535763,-140.5020049]).appendArc([171.5569474,-140.3988391],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([170.3708654,-139.4469811]).appendArc([170.2094432,-139.3604477],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([89.8984752,-113.8212623]).appendArc([89.55,-113.3447749],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([89.55,-91.2580371]).appendPoint([89.5501974,-91.2460759]).close().innerToCAG()
.subtract(
    new CSG.Path2D([[90.750034,-91.2658751],[91.300034,-57.9358751]]).appendPoint([91.3025927,-57.7808177]).appendPoint([119.7874656,-44.2364515]).appendArc([120.0651594,-43.8717232],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([120.7358149,-40.0682468]).appendPoint([120.7748606,-39.8468074]).appendPoint([145.9786981,-41.5817379]).appendArc([146.4959978,-41.2123278],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([146.9226432,-39.6200656]).appendPoint([147.1641247,-39.6847704]).appendPoint([163.6370237,-44.0986703]).appendPoint([163.8785051,-44.1633751]).appendPoint([163.4189953,-45.8782893]).appendArc([163.5898754,-46.3983448],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([188.2370845,-66.0887254]).appendPoint([187.5728737,-67.51313]).appendArc([187.8147185,-68.177593],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([224.2745745,-85.179103]).appendPoint([224.5011514,-85.2847576]).appendPoint([201.520021,-134.567951]).appendPoint([201.1746633,-134.809773]).appendPoint([203.7241473,-137.7914511]).appendPoint([181.9139099,-153.0631437]).appendPoint([172.5382806,-139.6733574]).appendArc([172.4416517,-139.5701916],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([170.9475777,-138.3711629]).appendArc([170.7861554,-138.2846295],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([90.75,-112.8328355]).appendPoint([90.75,-91.2679374]).appendPoint([90.750034,-91.2658751]).close().innerToCAG()
).extrude({ offset: [0, 0, 6.6] });
}


function _mcu_wall_cutout_extrude_2_2_outline_fn(){
    return new CSG.Path2D([[181.9586903,-95.938731],[189.2091526,-99.3196771]]).appendPoint([207.3394761,-60.439073]).appendPoint([200.0890138,-57.0581269]).appendPoint([181.9586903,-95.938731]).close().innerToCAG()
.extrude({ offset: [0, 0, 2.2] });
}


function _bottom_case_outer_outline_extrude_1_outline_fn(){
    return new CSG.Path2D([[89.5501974,-91.2460759],[90.1001974,-57.9160759]]).appendPoint([90.1099205,-57.3268575]).appendArc([90.3951423,-56.8835548],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([118.7131773,-43.418519]).appendArc([118.990871,-43.0537907],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([119.7024193,-39.0183995]).appendArc([120.2291599,-38.6064039],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([145.075329,-40.316714]).appendArc([145.5926286,-39.947304],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([145.6986882,-39.5514844]).appendPoint([145.9443167,-38.6334227]).appendArc([146.5567371,-38.27969],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([147.4741874,-38.5255201]).appendPoint([163.9470863,-42.9394201]).appendPoint([164.865236,-43.1854375]).appendArc([165.2187894,-43.79781],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([164.9730506,-44.7149193]).appendPoint([164.7812648,-45.4306738]).appendArc([164.9521449,-45.9507293],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([189.4162926,-65.4948644]).appendArc([189.5573637,-66.0968195],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([189.167585,-66.9327025]).appendArc([189.4094298,-67.5971655],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([225.6427088,-84.4930211]).appendArc([225.8845536,-85.1574841],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([202.8751521,-134.5013049]).appendArc([202.948285,-135.037551],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([205.1372984,-137.5976509]).appendArc([205.0440656,-138.3321639],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([182.0287951,-154.4476297]).appendArc([181.3324309,-154.3248419],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([171.6535763,-140.5020049]).appendArc([171.5569474,-140.3988391],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([170.3708654,-139.4469811]).appendArc([170.2094432,-139.3604477],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([89.8984752,-113.8212623]).appendArc([89.55,-113.3447749],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([89.55,-91.2580371]).appendPoint([89.5501974,-91.2460759]).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}


function _screws_extrude_1_outline_fn(){
    return CAG.circle({"center":[181.6365035,-129.4303074],"radius":1.1})
.union(
    CAG.circle({"center":[173.4287515,-140.9712334],"radius":1.1})
).union(
    CAG.circle({"center":[165.4265565,-72.6841789],"radius":1.1})
).union(
    CAG.circle({"center":[114.6127397,-73.0663005],"radius":1.1})
).union(
    CAG.circle({"center":[117.5647587,-56.3245687],"radius":1.1})
).extrude({ offset: [0, 0, 1] });
}




                function mearchlar_bottom_tray_case_fn() {
                    

                // creating part 0 of case mearchlar_bottom_tray
                let mearchlar_bottom_tray__part_0 = _bottom_case_walls_extrude_6_6_outline_fn();

                // make sure that rotations are relative
                let mearchlar_bottom_tray__part_0_bounds = mearchlar_bottom_tray__part_0.getBounds();
                let mearchlar_bottom_tray__part_0_x = mearchlar_bottom_tray__part_0_bounds[0].x + (mearchlar_bottom_tray__part_0_bounds[1].x - mearchlar_bottom_tray__part_0_bounds[0].x) / 2
                let mearchlar_bottom_tray__part_0_y = mearchlar_bottom_tray__part_0_bounds[0].y + (mearchlar_bottom_tray__part_0_bounds[1].y - mearchlar_bottom_tray__part_0_bounds[0].y) / 2
                mearchlar_bottom_tray__part_0 = translate([-mearchlar_bottom_tray__part_0_x, -mearchlar_bottom_tray__part_0_y, 0], mearchlar_bottom_tray__part_0);
                mearchlar_bottom_tray__part_0 = rotate([0,0,0], mearchlar_bottom_tray__part_0);
                mearchlar_bottom_tray__part_0 = translate([mearchlar_bottom_tray__part_0_x, mearchlar_bottom_tray__part_0_y, 0], mearchlar_bottom_tray__part_0);

                mearchlar_bottom_tray__part_0 = translate([-75,0,0], mearchlar_bottom_tray__part_0);
                let result = mearchlar_bottom_tray__part_0;
                
            

                // creating part 1 of case mearchlar_bottom_tray
                let mearchlar_bottom_tray__part_1 = _mcu_wall_cutout_extrude_2_2_outline_fn();

                // make sure that rotations are relative
                let mearchlar_bottom_tray__part_1_bounds = mearchlar_bottom_tray__part_1.getBounds();
                let mearchlar_bottom_tray__part_1_x = mearchlar_bottom_tray__part_1_bounds[0].x + (mearchlar_bottom_tray__part_1_bounds[1].x - mearchlar_bottom_tray__part_1_bounds[0].x) / 2
                let mearchlar_bottom_tray__part_1_y = mearchlar_bottom_tray__part_1_bounds[0].y + (mearchlar_bottom_tray__part_1_bounds[1].y - mearchlar_bottom_tray__part_1_bounds[0].y) / 2
                mearchlar_bottom_tray__part_1 = translate([-mearchlar_bottom_tray__part_1_x, -mearchlar_bottom_tray__part_1_y, 0], mearchlar_bottom_tray__part_1);
                mearchlar_bottom_tray__part_1 = rotate([0,0,0], mearchlar_bottom_tray__part_1);
                mearchlar_bottom_tray__part_1 = translate([mearchlar_bottom_tray__part_1_x, mearchlar_bottom_tray__part_1_y, 0], mearchlar_bottom_tray__part_1);

                mearchlar_bottom_tray__part_1 = translate([-75,0,1], mearchlar_bottom_tray__part_1);
                result = result.subtract(mearchlar_bottom_tray__part_1);
                
            

                // creating part 2 of case mearchlar_bottom_tray
                let mearchlar_bottom_tray__part_2 = _bottom_case_outer_outline_extrude_1_outline_fn();

                // make sure that rotations are relative
                let mearchlar_bottom_tray__part_2_bounds = mearchlar_bottom_tray__part_2.getBounds();
                let mearchlar_bottom_tray__part_2_x = mearchlar_bottom_tray__part_2_bounds[0].x + (mearchlar_bottom_tray__part_2_bounds[1].x - mearchlar_bottom_tray__part_2_bounds[0].x) / 2
                let mearchlar_bottom_tray__part_2_y = mearchlar_bottom_tray__part_2_bounds[0].y + (mearchlar_bottom_tray__part_2_bounds[1].y - mearchlar_bottom_tray__part_2_bounds[0].y) / 2
                mearchlar_bottom_tray__part_2 = translate([-mearchlar_bottom_tray__part_2_x, -mearchlar_bottom_tray__part_2_y, 0], mearchlar_bottom_tray__part_2);
                mearchlar_bottom_tray__part_2 = rotate([0,0,0], mearchlar_bottom_tray__part_2);
                mearchlar_bottom_tray__part_2 = translate([mearchlar_bottom_tray__part_2_x, mearchlar_bottom_tray__part_2_y, 0], mearchlar_bottom_tray__part_2);

                mearchlar_bottom_tray__part_2 = translate([-75,0,0], mearchlar_bottom_tray__part_2);
                result = result.union(mearchlar_bottom_tray__part_2);
                
            

                // creating part 3 of case mearchlar_bottom_tray
                let mearchlar_bottom_tray__part_3 = _screws_extrude_1_outline_fn();

                // make sure that rotations are relative
                let mearchlar_bottom_tray__part_3_bounds = mearchlar_bottom_tray__part_3.getBounds();
                let mearchlar_bottom_tray__part_3_x = mearchlar_bottom_tray__part_3_bounds[0].x + (mearchlar_bottom_tray__part_3_bounds[1].x - mearchlar_bottom_tray__part_3_bounds[0].x) / 2
                let mearchlar_bottom_tray__part_3_y = mearchlar_bottom_tray__part_3_bounds[0].y + (mearchlar_bottom_tray__part_3_bounds[1].y - mearchlar_bottom_tray__part_3_bounds[0].y) / 2
                mearchlar_bottom_tray__part_3 = translate([-mearchlar_bottom_tray__part_3_x, -mearchlar_bottom_tray__part_3_y, 0], mearchlar_bottom_tray__part_3);
                mearchlar_bottom_tray__part_3 = rotate([0,0,0], mearchlar_bottom_tray__part_3);
                mearchlar_bottom_tray__part_3 = translate([mearchlar_bottom_tray__part_3_x, mearchlar_bottom_tray__part_3_y, 0], mearchlar_bottom_tray__part_3);

                mearchlar_bottom_tray__part_3 = translate([-75,0,0], mearchlar_bottom_tray__part_3);
                result = result.subtract(mearchlar_bottom_tray__part_3);
                
            
                    return result;
                }
            
            
        
            function main() {
                return mearchlar_bottom_tray_case_fn();
            }

        