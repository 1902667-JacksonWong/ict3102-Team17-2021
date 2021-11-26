/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 48.0, "minX": 0.0, "maxY": 6266.0, "series": [{"data": [[0.0, 48.0], [0.1, 83.0], [0.2, 86.0], [0.3, 91.0], [0.4, 94.0], [0.5, 94.0], [0.6, 95.0], [0.7, 96.0], [0.8, 99.0], [0.9, 102.0], [1.0, 121.0], [1.1, 123.0], [1.2, 127.0], [1.3, 131.0], [1.4, 133.0], [1.5, 135.0], [1.6, 160.0], [1.7, 160.0], [1.8, 171.0], [1.9, 175.0], [2.0, 181.0], [2.1, 185.0], [2.2, 186.0], [2.3, 191.0], [2.4, 200.0], [2.5, 202.0], [2.6, 205.0], [2.7, 213.0], [2.8, 222.0], [2.9, 222.0], [3.0, 225.0], [3.1, 226.0], [3.2, 227.0], [3.3, 228.0], [3.4, 228.0], [3.5, 230.0], [3.6, 234.0], [3.7, 236.0], [3.8, 238.0], [3.9, 239.0], [4.0, 241.0], [4.1, 245.0], [4.2, 248.0], [4.3, 250.0], [4.4, 254.0], [4.5, 255.0], [4.6, 255.0], [4.7, 259.0], [4.8, 260.0], [4.9, 267.0], [5.0, 268.0], [5.1, 270.0], [5.2, 271.0], [5.3, 276.0], [5.4, 278.0], [5.5, 288.0], [5.6, 288.0], [5.7, 290.0], [5.8, 292.0], [5.9, 293.0], [6.0, 298.0], [6.1, 307.0], [6.2, 318.0], [6.3, 322.0], [6.4, 326.0], [6.5, 326.0], [6.6, 329.0], [6.7, 334.0], [6.8, 334.0], [6.9, 343.0], [7.0, 344.0], [7.1, 349.0], [7.2, 349.0], [7.3, 352.0], [7.4, 357.0], [7.5, 358.0], [7.6, 360.0], [7.7, 362.0], [7.8, 367.0], [7.9, 374.0], [8.0, 376.0], [8.1, 377.0], [8.2, 381.0], [8.3, 382.0], [8.4, 384.0], [8.5, 385.0], [8.6, 388.0], [8.7, 388.0], [8.8, 391.0], [8.9, 394.0], [9.0, 395.0], [9.1, 397.0], [9.2, 401.0], [9.3, 402.0], [9.4, 403.0], [9.5, 404.0], [9.6, 408.0], [9.7, 418.0], [9.8, 421.0], [9.9, 421.0], [10.0, 422.0], [10.1, 426.0], [10.2, 426.0], [10.3, 430.0], [10.4, 431.0], [10.5, 433.0], [10.6, 435.0], [10.7, 436.0], [10.8, 437.0], [10.9, 438.0], [11.0, 438.0], [11.1, 444.0], [11.2, 446.0], [11.3, 447.0], [11.4, 448.0], [11.5, 450.0], [11.6, 452.0], [11.7, 455.0], [11.8, 457.0], [11.9, 458.0], [12.0, 459.0], [12.1, 465.0], [12.2, 466.0], [12.3, 466.0], [12.4, 467.0], [12.5, 467.0], [12.6, 469.0], [12.7, 470.0], [12.8, 471.0], [12.9, 472.0], [13.0, 472.0], [13.1, 473.0], [13.2, 474.0], [13.3, 476.0], [13.4, 477.0], [13.5, 477.0], [13.6, 478.0], [13.7, 478.0], [13.8, 479.0], [13.9, 480.0], [14.0, 482.0], [14.1, 483.0], [14.2, 483.0], [14.3, 486.0], [14.4, 487.0], [14.5, 488.0], [14.6, 488.0], [14.7, 489.0], [14.8, 490.0], [14.9, 490.0], [15.0, 490.0], [15.1, 491.0], [15.2, 491.0], [15.3, 492.0], [15.4, 493.0], [15.5, 493.0], [15.6, 493.0], [15.7, 494.0], [15.8, 495.0], [15.9, 496.0], [16.0, 497.0], [16.1, 499.0], [16.2, 501.0], [16.3, 502.0], [16.4, 502.0], [16.5, 503.0], [16.6, 504.0], [16.7, 504.0], [16.8, 506.0], [16.9, 507.0], [17.0, 507.0], [17.1, 507.0], [17.2, 508.0], [17.3, 508.0], [17.4, 509.0], [17.5, 509.0], [17.6, 510.0], [17.7, 510.0], [17.8, 512.0], [17.9, 512.0], [18.0, 512.0], [18.1, 513.0], [18.2, 514.0], [18.3, 514.0], [18.4, 514.0], [18.5, 515.0], [18.6, 515.0], [18.7, 516.0], [18.8, 518.0], [18.9, 518.0], [19.0, 519.0], [19.1, 521.0], [19.2, 522.0], [19.3, 523.0], [19.4, 524.0], [19.5, 525.0], [19.6, 526.0], [19.7, 526.0], [19.8, 526.0], [19.9, 527.0], [20.0, 530.0], [20.1, 531.0], [20.2, 534.0], [20.3, 537.0], [20.4, 539.0], [20.5, 540.0], [20.6, 541.0], [20.7, 544.0], [20.8, 549.0], [20.9, 552.0], [21.0, 556.0], [21.1, 557.0], [21.2, 559.0], [21.3, 560.0], [21.4, 561.0], [21.5, 563.0], [21.6, 565.0], [21.7, 568.0], [21.8, 573.0], [21.9, 573.0], [22.0, 574.0], [22.1, 576.0], [22.2, 580.0], [22.3, 582.0], [22.4, 584.0], [22.5, 593.0], [22.6, 595.0], [22.7, 597.0], [22.8, 599.0], [22.9, 608.0], [23.0, 612.0], [23.1, 613.0], [23.2, 613.0], [23.3, 617.0], [23.4, 624.0], [23.5, 625.0], [23.6, 627.0], [23.7, 630.0], [23.8, 634.0], [23.9, 641.0], [24.0, 644.0], [24.1, 654.0], [24.2, 655.0], [24.3, 656.0], [24.4, 656.0], [24.5, 656.0], [24.6, 657.0], [24.7, 658.0], [24.8, 660.0], [24.9, 665.0], [25.0, 666.0], [25.1, 672.0], [25.2, 672.0], [25.3, 678.0], [25.4, 679.0], [25.5, 684.0], [25.6, 685.0], [25.7, 687.0], [25.8, 689.0], [25.9, 690.0], [26.0, 693.0], [26.1, 696.0], [26.2, 701.0], [26.3, 706.0], [26.4, 708.0], [26.5, 710.0], [26.6, 713.0], [26.7, 714.0], [26.8, 714.0], [26.9, 715.0], [27.0, 717.0], [27.1, 717.0], [27.2, 717.0], [27.3, 718.0], [27.4, 719.0], [27.5, 721.0], [27.6, 724.0], [27.7, 727.0], [27.8, 728.0], [27.9, 729.0], [28.0, 730.0], [28.1, 730.0], [28.2, 732.0], [28.3, 735.0], [28.4, 738.0], [28.5, 739.0], [28.6, 740.0], [28.7, 742.0], [28.8, 747.0], [28.9, 750.0], [29.0, 751.0], [29.1, 751.0], [29.2, 752.0], [29.3, 752.0], [29.4, 752.0], [29.5, 753.0], [29.6, 754.0], [29.7, 755.0], [29.8, 758.0], [29.9, 760.0], [30.0, 762.0], [30.1, 763.0], [30.2, 766.0], [30.3, 766.0], [30.4, 767.0], [30.5, 768.0], [30.6, 769.0], [30.7, 770.0], [30.8, 772.0], [30.9, 777.0], [31.0, 779.0], [31.1, 780.0], [31.2, 780.0], [31.3, 781.0], [31.4, 782.0], [31.5, 782.0], [31.6, 783.0], [31.7, 785.0], [31.8, 786.0], [31.9, 787.0], [32.0, 787.0], [32.1, 788.0], [32.2, 789.0], [32.3, 790.0], [32.4, 791.0], [32.5, 791.0], [32.6, 792.0], [32.7, 794.0], [32.8, 795.0], [32.9, 795.0], [33.0, 796.0], [33.1, 798.0], [33.2, 798.0], [33.3, 799.0], [33.4, 800.0], [33.5, 801.0], [33.6, 801.0], [33.7, 802.0], [33.8, 804.0], [33.9, 805.0], [34.0, 806.0], [34.1, 807.0], [34.2, 808.0], [34.3, 809.0], [34.4, 809.0], [34.5, 810.0], [34.6, 811.0], [34.7, 811.0], [34.8, 813.0], [34.9, 815.0], [35.0, 815.0], [35.1, 815.0], [35.2, 816.0], [35.3, 817.0], [35.4, 818.0], [35.5, 818.0], [35.6, 819.0], [35.7, 820.0], [35.8, 821.0], [35.9, 822.0], [36.0, 823.0], [36.1, 823.0], [36.2, 824.0], [36.3, 825.0], [36.4, 827.0], [36.5, 828.0], [36.6, 828.0], [36.7, 830.0], [36.8, 832.0], [36.9, 832.0], [37.0, 834.0], [37.1, 834.0], [37.2, 835.0], [37.3, 836.0], [37.4, 836.0], [37.5, 836.0], [37.6, 837.0], [37.7, 838.0], [37.8, 839.0], [37.9, 839.0], [38.0, 839.0], [38.1, 840.0], [38.2, 840.0], [38.3, 841.0], [38.4, 842.0], [38.5, 842.0], [38.6, 843.0], [38.7, 844.0], [38.8, 847.0], [38.9, 849.0], [39.0, 850.0], [39.1, 851.0], [39.2, 852.0], [39.3, 853.0], [39.4, 853.0], [39.5, 854.0], [39.6, 854.0], [39.7, 855.0], [39.8, 855.0], [39.9, 856.0], [40.0, 857.0], [40.1, 858.0], [40.2, 858.0], [40.3, 859.0], [40.4, 860.0], [40.5, 860.0], [40.6, 860.0], [40.7, 862.0], [40.8, 862.0], [40.9, 862.0], [41.0, 863.0], [41.1, 863.0], [41.2, 864.0], [41.3, 864.0], [41.4, 864.0], [41.5, 864.0], [41.6, 865.0], [41.7, 866.0], [41.8, 866.0], [41.9, 866.0], [42.0, 867.0], [42.1, 867.0], [42.2, 869.0], [42.3, 870.0], [42.4, 871.0], [42.5, 871.0], [42.6, 874.0], [42.7, 874.0], [42.8, 876.0], [42.9, 876.0], [43.0, 877.0], [43.1, 878.0], [43.2, 878.0], [43.3, 879.0], [43.4, 879.0], [43.5, 880.0], [43.6, 880.0], [43.7, 880.0], [43.8, 880.0], [43.9, 880.0], [44.0, 881.0], [44.1, 881.0], [44.2, 882.0], [44.3, 883.0], [44.4, 884.0], [44.5, 884.0], [44.6, 885.0], [44.7, 885.0], [44.8, 886.0], [44.9, 887.0], [45.0, 888.0], [45.1, 889.0], [45.2, 890.0], [45.3, 891.0], [45.4, 892.0], [45.5, 893.0], [45.6, 893.0], [45.7, 893.0], [45.8, 893.0], [45.9, 893.0], [46.0, 894.0], [46.1, 894.0], [46.2, 895.0], [46.3, 896.0], [46.4, 896.0], [46.5, 897.0], [46.6, 897.0], [46.7, 898.0], [46.8, 901.0], [46.9, 901.0], [47.0, 901.0], [47.1, 902.0], [47.2, 902.0], [47.3, 903.0], [47.4, 903.0], [47.5, 903.0], [47.6, 904.0], [47.7, 904.0], [47.8, 904.0], [47.9, 904.0], [48.0, 904.0], [48.1, 905.0], [48.2, 905.0], [48.3, 906.0], [48.4, 906.0], [48.5, 907.0], [48.6, 907.0], [48.7, 908.0], [48.8, 910.0], [48.9, 913.0], [49.0, 915.0], [49.1, 916.0], [49.2, 917.0], [49.3, 917.0], [49.4, 919.0], [49.5, 921.0], [49.6, 922.0], [49.7, 923.0], [49.8, 924.0], [49.9, 925.0], [50.0, 928.0], [50.1, 929.0], [50.2, 930.0], [50.3, 931.0], [50.4, 931.0], [50.5, 931.0], [50.6, 932.0], [50.7, 936.0], [50.8, 938.0], [50.9, 939.0], [51.0, 940.0], [51.1, 941.0], [51.2, 942.0], [51.3, 944.0], [51.4, 949.0], [51.5, 951.0], [51.6, 951.0], [51.7, 952.0], [51.8, 954.0], [51.9, 954.0], [52.0, 956.0], [52.1, 956.0], [52.2, 957.0], [52.3, 957.0], [52.4, 957.0], [52.5, 959.0], [52.6, 960.0], [52.7, 962.0], [52.8, 962.0], [52.9, 968.0], [53.0, 968.0], [53.1, 971.0], [53.2, 972.0], [53.3, 973.0], [53.4, 975.0], [53.5, 977.0], [53.6, 979.0], [53.7, 981.0], [53.8, 985.0], [53.9, 986.0], [54.0, 988.0], [54.1, 988.0], [54.2, 991.0], [54.3, 994.0], [54.4, 995.0], [54.5, 995.0], [54.6, 996.0], [54.7, 998.0], [54.8, 1000.0], [54.9, 1001.0], [55.0, 1005.0], [55.1, 1005.0], [55.2, 1008.0], [55.3, 1014.0], [55.4, 1016.0], [55.5, 1017.0], [55.6, 1023.0], [55.7, 1024.0], [55.8, 1026.0], [55.9, 1027.0], [56.0, 1027.0], [56.1, 1027.0], [56.2, 1027.0], [56.3, 1028.0], [56.4, 1029.0], [56.5, 1030.0], [56.6, 1030.0], [56.7, 1031.0], [56.8, 1032.0], [56.9, 1033.0], [57.0, 1034.0], [57.1, 1036.0], [57.2, 1036.0], [57.3, 1036.0], [57.4, 1037.0], [57.5, 1040.0], [57.6, 1041.0], [57.7, 1043.0], [57.8, 1044.0], [57.9, 1046.0], [58.0, 1047.0], [58.1, 1050.0], [58.2, 1053.0], [58.3, 1053.0], [58.4, 1053.0], [58.5, 1054.0], [58.6, 1055.0], [58.7, 1057.0], [58.8, 1059.0], [58.9, 1060.0], [59.0, 1061.0], [59.1, 1063.0], [59.2, 1065.0], [59.3, 1066.0], [59.4, 1066.0], [59.5, 1067.0], [59.6, 1068.0], [59.7, 1070.0], [59.8, 1070.0], [59.9, 1070.0], [60.0, 1070.0], [60.1, 1071.0], [60.2, 1072.0], [60.3, 1072.0], [60.4, 1077.0], [60.5, 1080.0], [60.6, 1085.0], [60.7, 1087.0], [60.8, 1092.0], [60.9, 1092.0], [61.0, 1093.0], [61.1, 1094.0], [61.2, 1095.0], [61.3, 1098.0], [61.4, 1098.0], [61.5, 1099.0], [61.6, 1100.0], [61.7, 1101.0], [61.8, 1101.0], [61.9, 1101.0], [62.0, 1102.0], [62.1, 1103.0], [62.2, 1103.0], [62.3, 1105.0], [62.4, 1106.0], [62.5, 1106.0], [62.6, 1107.0], [62.7, 1107.0], [62.8, 1107.0], [62.9, 1110.0], [63.0, 1112.0], [63.1, 1119.0], [63.2, 1122.0], [63.3, 1126.0], [63.4, 1127.0], [63.5, 1129.0], [63.6, 1129.0], [63.7, 1130.0], [63.8, 1132.0], [63.9, 1132.0], [64.0, 1132.0], [64.1, 1133.0], [64.2, 1133.0], [64.3, 1135.0], [64.4, 1137.0], [64.5, 1140.0], [64.6, 1142.0], [64.7, 1143.0], [64.8, 1145.0], [64.9, 1145.0], [65.0, 1152.0], [65.1, 1156.0], [65.2, 1157.0], [65.3, 1158.0], [65.4, 1158.0], [65.5, 1161.0], [65.6, 1161.0], [65.7, 1162.0], [65.8, 1163.0], [65.9, 1163.0], [66.0, 1165.0], [66.1, 1166.0], [66.2, 1167.0], [66.3, 1171.0], [66.4, 1172.0], [66.5, 1173.0], [66.6, 1175.0], [66.7, 1178.0], [66.8, 1178.0], [66.9, 1181.0], [67.0, 1187.0], [67.1, 1191.0], [67.2, 1195.0], [67.3, 1196.0], [67.4, 1198.0], [67.5, 1201.0], [67.6, 1204.0], [67.7, 1205.0], [67.8, 1207.0], [67.9, 1210.0], [68.0, 1211.0], [68.1, 1213.0], [68.2, 1223.0], [68.3, 1226.0], [68.4, 1227.0], [68.5, 1232.0], [68.6, 1239.0], [68.7, 1244.0], [68.8, 1250.0], [68.9, 1252.0], [69.0, 1255.0], [69.1, 1259.0], [69.2, 1262.0], [69.3, 1266.0], [69.4, 1268.0], [69.5, 1271.0], [69.6, 1284.0], [69.7, 1291.0], [69.8, 1296.0], [69.9, 1298.0], [70.0, 1299.0], [70.1, 1319.0], [70.2, 1321.0], [70.3, 1328.0], [70.4, 1340.0], [70.5, 1345.0], [70.6, 1359.0], [70.7, 1386.0], [70.8, 1414.0], [70.9, 1426.0], [71.0, 1446.0], [71.1, 1456.0], [71.2, 1469.0], [71.3, 1473.0], [71.4, 1474.0], [71.5, 1477.0], [71.6, 1486.0], [71.7, 1494.0], [71.8, 1507.0], [71.9, 1511.0], [72.0, 1516.0], [72.1, 1528.0], [72.2, 1541.0], [72.3, 1549.0], [72.4, 1550.0], [72.5, 1557.0], [72.6, 1563.0], [72.7, 1564.0], [72.8, 1572.0], [72.9, 1579.0], [73.0, 1580.0], [73.1, 1581.0], [73.2, 1591.0], [73.3, 1594.0], [73.4, 1602.0], [73.5, 1611.0], [73.6, 1615.0], [73.7, 1624.0], [73.8, 1639.0], [73.9, 1647.0], [74.0, 1658.0], [74.1, 1660.0], [74.2, 1662.0], [74.3, 1665.0], [74.4, 1677.0], [74.5, 1677.0], [74.6, 1678.0], [74.7, 1680.0], [74.8, 1682.0], [74.9, 1684.0], [75.0, 1693.0], [75.1, 1694.0], [75.2, 1696.0], [75.3, 1698.0], [75.4, 1699.0], [75.5, 1704.0], [75.6, 1706.0], [75.7, 1712.0], [75.8, 1714.0], [75.9, 1715.0], [76.0, 1716.0], [76.1, 1717.0], [76.2, 1719.0], [76.3, 1722.0], [76.4, 1729.0], [76.5, 1731.0], [76.6, 1731.0], [76.7, 1733.0], [76.8, 1733.0], [76.9, 1735.0], [77.0, 1736.0], [77.1, 1736.0], [77.2, 1737.0], [77.3, 1742.0], [77.4, 1747.0], [77.5, 1749.0], [77.6, 1754.0], [77.7, 1754.0], [77.8, 1754.0], [77.9, 1755.0], [78.0, 1755.0], [78.1, 1758.0], [78.2, 1758.0], [78.3, 1760.0], [78.4, 1761.0], [78.5, 1762.0], [78.6, 1763.0], [78.7, 1764.0], [78.8, 1765.0], [78.9, 1767.0], [79.0, 1770.0], [79.1, 1771.0], [79.2, 1774.0], [79.3, 1776.0], [79.4, 1778.0], [79.5, 1779.0], [79.6, 1781.0], [79.7, 1782.0], [79.8, 1783.0], [79.9, 1783.0], [80.0, 1783.0], [80.1, 1785.0], [80.2, 1785.0], [80.3, 1785.0], [80.4, 1786.0], [80.5, 1787.0], [80.6, 1787.0], [80.7, 1787.0], [80.8, 1788.0], [80.9, 1789.0], [81.0, 1790.0], [81.1, 1791.0], [81.2, 1794.0], [81.3, 1802.0], [81.4, 1802.0], [81.5, 1803.0], [81.6, 1804.0], [81.7, 1805.0], [81.8, 1806.0], [81.9, 1808.0], [82.0, 1808.0], [82.1, 1809.0], [82.2, 1810.0], [82.3, 1818.0], [82.4, 1821.0], [82.5, 1822.0], [82.6, 1823.0], [82.7, 1825.0], [82.8, 1826.0], [82.9, 1826.0], [83.0, 1828.0], [83.1, 1828.0], [83.2, 1831.0], [83.3, 1832.0], [83.4, 1839.0], [83.5, 1841.0], [83.6, 1843.0], [83.7, 1844.0], [83.8, 1846.0], [83.9, 1846.0], [84.0, 1852.0], [84.1, 1858.0], [84.2, 1861.0], [84.3, 1863.0], [84.4, 1864.0], [84.5, 1864.0], [84.6, 1866.0], [84.7, 1873.0], [84.8, 1876.0], [84.9, 1884.0], [85.0, 1885.0], [85.1, 1886.0], [85.2, 1888.0], [85.3, 1897.0], [85.4, 1899.0], [85.5, 1908.0], [85.6, 1912.0], [85.7, 1913.0], [85.8, 1915.0], [85.9, 1918.0], [86.0, 1920.0], [86.1, 1933.0], [86.2, 1935.0], [86.3, 1936.0], [86.4, 1936.0], [86.5, 1937.0], [86.6, 1938.0], [86.7, 1938.0], [86.8, 1939.0], [86.9, 1941.0], [87.0, 1957.0], [87.1, 1959.0], [87.2, 1959.0], [87.3, 1960.0], [87.4, 1960.0], [87.5, 1962.0], [87.6, 1974.0], [87.7, 1980.0], [87.8, 1980.0], [87.9, 1986.0], [88.0, 1991.0], [88.1, 2005.0], [88.2, 2183.0], [88.3, 2265.0], [88.4, 2395.0], [88.5, 2401.0], [88.6, 2431.0], [88.7, 2462.0], [88.8, 2471.0], [88.9, 2479.0], [89.0, 2494.0], [89.1, 2495.0], [89.2, 2508.0], [89.3, 2513.0], [89.4, 2537.0], [89.5, 2543.0], [89.6, 2552.0], [89.7, 2554.0], [89.8, 2555.0], [89.9, 2556.0], [90.0, 2593.0], [90.1, 2594.0], [90.2, 2595.0], [90.3, 2597.0], [90.4, 2600.0], [90.5, 2603.0], [90.6, 2611.0], [90.7, 2704.0], [90.8, 2736.0], [90.9, 2737.0], [91.0, 2767.0], [91.1, 2787.0], [91.2, 2854.0], [91.3, 2871.0], [91.4, 2894.0], [91.5, 3014.0], [91.6, 3106.0], [91.7, 3640.0], [91.8, 3656.0], [91.9, 3666.0], [92.0, 3670.0], [92.1, 3675.0], [92.2, 3694.0], [92.3, 3968.0], [92.4, 4579.0], [92.5, 4620.0], [92.6, 4635.0], [92.7, 4641.0], [92.8, 4675.0], [92.9, 4682.0], [93.0, 4683.0], [93.1, 4689.0], [93.2, 4710.0], [93.3, 4722.0], [93.4, 4723.0], [93.5, 4746.0], [93.6, 4775.0], [93.7, 4777.0], [93.8, 4781.0], [93.9, 4787.0], [94.0, 4809.0], [94.1, 4830.0], [94.2, 4838.0], [94.3, 4845.0], [94.4, 4858.0], [94.5, 4878.0], [94.6, 4906.0], [94.7, 4921.0], [94.8, 4936.0], [94.9, 4936.0], [95.0, 4948.0], [95.1, 4956.0], [95.2, 4958.0], [95.3, 4959.0], [95.4, 4965.0], [95.5, 4973.0], [95.6, 4974.0], [95.7, 4986.0], [95.8, 4988.0], [95.9, 4989.0], [96.0, 4994.0], [96.1, 4999.0], [96.2, 5001.0], [96.3, 5004.0], [96.4, 5005.0], [96.5, 5006.0], [96.6, 5016.0], [96.7, 5026.0], [96.8, 5032.0], [96.9, 5039.0], [97.0, 5044.0], [97.1, 5053.0], [97.2, 5054.0], [97.3, 5054.0], [97.4, 5056.0], [97.5, 5058.0], [97.6, 5060.0], [97.7, 5067.0], [97.8, 5077.0], [97.9, 5080.0], [98.0, 5081.0], [98.1, 5085.0], [98.2, 5089.0], [98.3, 5091.0], [98.4, 5100.0], [98.5, 6136.0], [98.6, 6164.0], [98.7, 6172.0], [98.8, 6176.0], [98.9, 6185.0], [99.0, 6200.0], [99.1, 6202.0], [99.2, 6216.0], [99.3, 6241.0], [99.4, 6243.0], [99.5, 6250.0], [99.6, 6252.0], [99.7, 6253.0], [99.8, 6257.0], [99.9, 6265.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 267.0, "series": [{"data": [[0.0, 16.0], [600.0, 67.0], [700.0, 144.0], [800.0, 267.0], [900.0, 160.0], [1000.0, 138.0], [1100.0, 118.0], [1200.0, 51.0], [1300.0, 14.0], [1400.0, 20.0], [1500.0, 33.0], [100.0, 31.0], [1600.0, 41.0], [1700.0, 117.0], [1800.0, 83.0], [1900.0, 52.0], [2000.0, 3.0], [2100.0, 2.0], [2300.0, 1.0], [2200.0, 2.0], [2400.0, 14.0], [2500.0, 25.0], [2600.0, 6.0], [2700.0, 9.0], [2800.0, 6.0], [2900.0, 1.0], [3000.0, 2.0], [3100.0, 1.0], [200.0, 74.0], [3400.0, 1.0], [3600.0, 11.0], [3700.0, 1.0], [3900.0, 1.0], [4000.0, 1.0], [4600.0, 14.0], [4500.0, 2.0], [300.0, 63.0], [4800.0, 11.0], [4700.0, 16.0], [5000.0, 45.0], [4900.0, 32.0], [5100.0, 1.0], [6100.0, 11.0], [6200.0, 20.0], [400.0, 138.0], [500.0, 134.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6200.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 322.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1113.0, "series": [{"data": [[0.0, 322.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1113.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 565.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 150.77360774818402, "minX": 1.63779954E12, "maxY": 191.54770017035756, "series": [{"data": [[1.63779954E12, 191.54770017035756], [1.6377996E12, 150.77360774818402]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6377996E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 48.0, "minX": 1.0, "maxY": 4549.55, "series": [{"data": [[2.0, 131.0], [3.0, 130.0], [4.0, 108.0], [5.0, 124.0], [6.0, 121.0], [7.0, 122.0], [8.0, 99.0], [9.0, 98.0], [10.0, 102.0], [11.0, 101.0], [12.0, 87.0], [13.0, 91.0], [14.0, 83.0], [15.0, 86.0], [17.0, 171.0], [18.0, 228.0], [21.0, 452.0], [22.0, 684.8], [23.0, 250.0], [25.0, 867.0], [27.0, 786.75], [29.0, 457.0], [30.0, 418.0], [32.0, 438.0], [34.0, 659.0], [36.0, 639.0], [39.0, 707.0], [38.0, 897.0], [40.0, 92.875], [41.0, 601.0], [43.0, 374.5], [46.0, 307.0], [47.0, 714.0], [48.0, 289.42857142857144], [49.0, 478.0], [50.0, 487.0], [53.0, 390.0], [55.0, 319.0], [54.0, 783.0], [56.0, 572.0], [58.0, 180.0], [59.0, 185.0], [61.0, 444.0], [60.0, 657.5], [63.0, 752.0], [62.0, 535.6666666666666], [67.0, 684.0], [66.0, 686.5], [65.0, 714.0], [64.0, 738.0], [70.0, 282.8], [71.0, 321.375], [69.0, 656.0], [68.0, 658.0], [72.0, 404.1666666666667], [73.0, 403.1818181818182], [74.0, 193.0], [75.0, 530.25], [76.0, 181.0], [79.0, 573.0], [78.0, 541.8], [77.0, 544.5], [80.0, 200.66666666666666], [83.0, 525.5], [81.0, 544.0], [85.0, 367.25], [86.0, 435.83333333333337], [87.0, 539.25], [89.0, 241.0], [90.0, 378.5], [91.0, 360.0], [88.0, 522.6666666666666], [95.0, 521.75], [92.0, 513.5], [96.0, 425.6666666666667], [97.0, 334.66666666666663], [99.0, 508.0], [98.0, 493.0], [103.0, 308.0], [102.0, 431.0], [101.0, 432.0], [100.0, 493.0], [107.0, 743.6666666666666], [106.0, 671.0], [105.0, 397.0], [104.0, 402.0], [109.0, 475.4], [111.0, 776.0], [110.0, 763.0], [108.0, 725.0], [114.0, 312.5], [113.0, 867.0], [112.0, 792.0], [119.0, 753.25], [116.0, 837.7142857142857], [120.0, 334.0], [123.0, 1026.6666666666667], [122.0, 1018.0], [121.0, 831.7142857142857], [125.0, 358.0], [126.0, 353.0], [127.0, 953.5], [132.0, 837.3333333333334], [133.0, 712.6], [135.0, 780.0], [134.0, 1101.0], [131.0, 1105.0], [130.0, 1102.0], [129.0, 1102.0], [128.0, 1069.6000000000001], [138.0, 695.0], [139.0, 807.2], [140.0, 824.6666666666666], [143.0, 1007.4], [142.0, 730.0], [141.0, 923.0], [137.0, 1014.5], [147.0, 770.125], [151.0, 976.0000000000001], [150.0, 930.8333333333334], [148.0, 918.0], [146.0, 928.5], [145.0, 1001.9333333333333], [155.0, 472.1818181818182], [159.0, 591.5], [158.0, 458.0], [157.0, 464.6], [156.0, 490.0], [154.0, 618.5], [153.0, 669.0], [152.0, 762.25], [163.0, 649.0], [167.0, 856.2307692307693], [166.0, 714.8], [164.0, 690.5], [162.0, 851.6666666666667], [160.0, 617.7142857142857], [173.0, 813.181818181818], [174.0, 903.2800000000001], [175.0, 898.0], [172.0, 890.125], [171.0, 928.6999999999999], [170.0, 947.1818181818181], [169.0, 832.0], [168.0, 701.0], [183.0, 885.5454545454546], [182.0, 881.0], [181.0, 873.2857142857143], [180.0, 918.0], [179.0, 893.6428571428572], [178.0, 926.0], [177.0, 900.25], [176.0, 873.4285714285714], [187.0, 658.3333333333334], [188.0, 794.625], [191.0, 377.5], [190.0, 704.3333333333334], [186.0, 855.3333333333334], [185.0, 863.5714285714284], [184.0, 853.2], [199.0, 4147.292929292929], [198.0, 4241.0], [197.0, 2513.0], [196.0, 4496.5], [195.0, 4018.2500000000005], [194.0, 4217.647058823531], [193.0, 4549.55], [192.0, 3640.2142857142853], [200.0, 1163.2298642533938], [1.0, 48.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[174.70799999999977, 1356.0269999999982]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 200.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 2340.3333333333335, "minX": 1.63779954E12, "maxY": 17414.333333333332, "series": [{"data": [[1.63779954E12, 3326.3333333333335], [1.6377996E12, 2340.3333333333335]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.63779954E12, 17414.333333333332], [1.6377996E12, 12252.333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6377996E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 1050.7632027257223, "minX": 1.63779954E12, "maxY": 1789.9007263922501, "series": [{"data": [[1.63779954E12, 1050.7632027257223], [1.6377996E12, 1789.9007263922501]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6377996E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 1050.71209540034, "minX": 1.63779954E12, "maxY": 1789.864406779661, "series": [{"data": [[1.63779954E12, 1050.71209540034], [1.6377996E12, 1789.864406779661]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6377996E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 59.95996592844969, "minX": 1.63779954E12, "maxY": 123.80145278450377, "series": [{"data": [[1.63779954E12, 59.95996592844969], [1.6377996E12, 123.80145278450377]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6377996E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 48.0, "minX": 1.63779954E12, "maxY": 6266.0, "series": [{"data": [[1.63779954E12, 2006.0], [1.6377996E12, 6266.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.63779954E12, 1809.5], [1.6377996E12, 4989.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.63779954E12, 1968.0], [1.6377996E12, 6251.46]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.63779954E12, 1886.25], [1.6377996E12, 5080.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.63779954E12, 81.0], [1.6377996E12, 48.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.63779954E12, 935.5], [1.6377996E12, 924.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6377996E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 125.0, "minX": 3.0, "maxY": 4936.0, "series": [{"data": [[39.0, 2767.0], [158.0, 959.5], [10.0, 3060.0], [190.0, 894.0], [3.0, 1770.0], [211.0, 922.0], [222.0, 726.5], [237.0, 1787.0], [61.0, 818.0], [267.0, 1519.0], [277.0, 938.0], [87.0, 521.0], [88.0, 4936.0], [94.0, 247.0], [27.0, 526.0], [29.0, 125.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 277.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 125.0, "minX": 3.0, "maxY": 4936.0, "series": [{"data": [[39.0, 2767.0], [158.0, 959.5], [10.0, 3060.0], [190.0, 894.0], [3.0, 1770.0], [211.0, 922.0], [222.0, 726.5], [237.0, 1787.0], [61.0, 818.0], [267.0, 1519.0], [277.0, 938.0], [87.0, 521.0], [88.0, 4936.0], [94.0, 247.0], [27.0, 526.0], [29.0, 125.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 277.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 10.433333333333334, "minX": 1.63779954E12, "maxY": 22.9, "series": [{"data": [[1.63779954E12, 22.9], [1.6377996E12, 10.433333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6377996E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 13.766666666666667, "minX": 1.63779954E12, "maxY": 19.566666666666666, "series": [{"data": [[1.63779954E12, 19.566666666666666], [1.6377996E12, 13.766666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6377996E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 13.766666666666667, "minX": 1.63779954E12, "maxY": 19.566666666666666, "series": [{"data": [[1.63779954E12, 19.566666666666666], [1.6377996E12, 13.766666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6377996E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 13.766666666666667, "minX": 1.63779954E12, "maxY": 19.566666666666666, "series": [{"data": [[1.63779954E12, 19.566666666666666], [1.6377996E12, 13.766666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6377996E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

