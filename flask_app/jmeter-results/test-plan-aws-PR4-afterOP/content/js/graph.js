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
        data: {"result": {"minY": 42.0, "minX": 0.0, "maxY": 8582.0, "series": [{"data": [[0.0, 42.0], [0.1, 43.0], [0.2, 62.0], [0.3, 64.0], [0.4, 66.0], [0.5, 80.0], [0.6, 91.0], [0.7, 92.0], [0.8, 117.0], [0.9, 118.0], [1.0, 122.0], [1.1, 123.0], [1.2, 133.0], [1.3, 146.0], [1.4, 147.0], [1.5, 151.0], [1.6, 153.0], [1.7, 172.0], [1.8, 177.0], [1.9, 180.0], [2.0, 181.0], [2.1, 187.0], [2.2, 188.0], [2.3, 198.0], [2.4, 205.0], [2.5, 214.0], [2.6, 218.0], [2.7, 219.0], [2.8, 220.0], [2.9, 223.0], [3.0, 228.0], [3.1, 232.0], [3.2, 234.0], [3.3, 236.0], [3.4, 243.0], [3.5, 252.0], [3.6, 259.0], [3.7, 269.0], [3.8, 276.0], [3.9, 279.0], [4.0, 282.0], [4.1, 287.0], [4.2, 288.0], [4.3, 288.0], [4.4, 290.0], [4.5, 291.0], [4.6, 294.0], [4.7, 295.0], [4.8, 295.0], [4.9, 296.0], [5.0, 296.0], [5.1, 296.0], [5.2, 297.0], [5.3, 298.0], [5.4, 299.0], [5.5, 302.0], [5.6, 302.0], [5.7, 304.0], [5.8, 305.0], [5.9, 306.0], [6.0, 308.0], [6.1, 310.0], [6.2, 310.0], [6.3, 311.0], [6.4, 311.0], [6.5, 312.0], [6.6, 313.0], [6.7, 313.0], [6.8, 315.0], [6.9, 315.0], [7.0, 317.0], [7.1, 317.0], [7.2, 318.0], [7.3, 319.0], [7.4, 320.0], [7.5, 320.0], [7.6, 322.0], [7.7, 322.0], [7.8, 322.0], [7.9, 322.0], [8.0, 323.0], [8.1, 323.0], [8.2, 325.0], [8.3, 325.0], [8.4, 327.0], [8.5, 327.0], [8.6, 328.0], [8.7, 328.0], [8.8, 328.0], [8.9, 329.0], [9.0, 329.0], [9.1, 329.0], [9.2, 330.0], [9.3, 330.0], [9.4, 331.0], [9.5, 331.0], [9.6, 332.0], [9.7, 333.0], [9.8, 333.0], [9.9, 335.0], [10.0, 337.0], [10.1, 338.0], [10.2, 339.0], [10.3, 342.0], [10.4, 346.0], [10.5, 347.0], [10.6, 348.0], [10.7, 352.0], [10.8, 353.0], [10.9, 354.0], [11.0, 355.0], [11.1, 357.0], [11.2, 357.0], [11.3, 357.0], [11.4, 360.0], [11.5, 361.0], [11.6, 361.0], [11.7, 363.0], [11.8, 364.0], [11.9, 366.0], [12.0, 367.0], [12.1, 368.0], [12.2, 370.0], [12.3, 372.0], [12.4, 372.0], [12.5, 374.0], [12.6, 375.0], [12.7, 378.0], [12.8, 379.0], [12.9, 379.0], [13.0, 380.0], [13.1, 381.0], [13.2, 382.0], [13.3, 383.0], [13.4, 384.0], [13.5, 385.0], [13.6, 386.0], [13.7, 387.0], [13.8, 387.0], [13.9, 390.0], [14.0, 392.0], [14.1, 393.0], [14.2, 395.0], [14.3, 395.0], [14.4, 395.0], [14.5, 396.0], [14.6, 396.0], [14.7, 396.0], [14.8, 397.0], [14.9, 397.0], [15.0, 397.0], [15.1, 397.0], [15.2, 397.0], [15.3, 398.0], [15.4, 398.0], [15.5, 400.0], [15.6, 400.0], [15.7, 400.0], [15.8, 401.0], [15.9, 402.0], [16.0, 404.0], [16.1, 405.0], [16.2, 406.0], [16.3, 406.0], [16.4, 407.0], [16.5, 408.0], [16.6, 409.0], [16.7, 409.0], [16.8, 409.0], [16.9, 410.0], [17.0, 410.0], [17.1, 411.0], [17.2, 412.0], [17.3, 412.0], [17.4, 414.0], [17.5, 414.0], [17.6, 414.0], [17.7, 415.0], [17.8, 416.0], [17.9, 417.0], [18.0, 417.0], [18.1, 419.0], [18.2, 420.0], [18.3, 421.0], [18.4, 421.0], [18.5, 422.0], [18.6, 422.0], [18.7, 423.0], [18.8, 424.0], [18.9, 424.0], [19.0, 426.0], [19.1, 427.0], [19.2, 428.0], [19.3, 428.0], [19.4, 428.0], [19.5, 429.0], [19.6, 430.0], [19.7, 430.0], [19.8, 435.0], [19.9, 437.0], [20.0, 440.0], [20.1, 441.0], [20.2, 441.0], [20.3, 442.0], [20.4, 443.0], [20.5, 444.0], [20.6, 444.0], [20.7, 450.0], [20.8, 450.0], [20.9, 454.0], [21.0, 454.0], [21.1, 455.0], [21.2, 458.0], [21.3, 458.0], [21.4, 459.0], [21.5, 460.0], [21.6, 460.0], [21.7, 461.0], [21.8, 462.0], [21.9, 462.0], [22.0, 464.0], [22.1, 466.0], [22.2, 466.0], [22.3, 467.0], [22.4, 467.0], [22.5, 468.0], [22.6, 472.0], [22.7, 474.0], [22.8, 481.0], [22.9, 483.0], [23.0, 487.0], [23.1, 489.0], [23.2, 490.0], [23.3, 491.0], [23.4, 492.0], [23.5, 494.0], [23.6, 495.0], [23.7, 495.0], [23.8, 496.0], [23.9, 498.0], [24.0, 498.0], [24.1, 501.0], [24.2, 502.0], [24.3, 503.0], [24.4, 506.0], [24.5, 513.0], [24.6, 516.0], [24.7, 519.0], [24.8, 521.0], [24.9, 522.0], [25.0, 538.0], [25.1, 541.0], [25.2, 546.0], [25.3, 550.0], [25.4, 551.0], [25.5, 554.0], [25.6, 556.0], [25.7, 557.0], [25.8, 558.0], [25.9, 558.0], [26.0, 571.0], [26.1, 573.0], [26.2, 579.0], [26.3, 586.0], [26.4, 588.0], [26.5, 589.0], [26.6, 590.0], [26.7, 590.0], [26.8, 594.0], [26.9, 594.0], [27.0, 596.0], [27.1, 600.0], [27.2, 600.0], [27.3, 609.0], [27.4, 611.0], [27.5, 613.0], [27.6, 614.0], [27.7, 617.0], [27.8, 619.0], [27.9, 622.0], [28.0, 627.0], [28.1, 635.0], [28.2, 637.0], [28.3, 641.0], [28.4, 642.0], [28.5, 643.0], [28.6, 645.0], [28.7, 646.0], [28.8, 646.0], [28.9, 649.0], [29.0, 653.0], [29.1, 654.0], [29.2, 657.0], [29.3, 658.0], [29.4, 658.0], [29.5, 659.0], [29.6, 659.0], [29.7, 662.0], [29.8, 662.0], [29.9, 665.0], [30.0, 667.0], [30.1, 671.0], [30.2, 673.0], [30.3, 674.0], [30.4, 675.0], [30.5, 677.0], [30.6, 679.0], [30.7, 682.0], [30.8, 683.0], [30.9, 684.0], [31.0, 684.0], [31.1, 685.0], [31.2, 685.0], [31.3, 685.0], [31.4, 686.0], [31.5, 688.0], [31.6, 690.0], [31.7, 694.0], [31.8, 696.0], [31.9, 697.0], [32.0, 701.0], [32.1, 703.0], [32.2, 712.0], [32.3, 720.0], [32.4, 724.0], [32.5, 730.0], [32.6, 732.0], [32.7, 736.0], [32.8, 741.0], [32.9, 743.0], [33.0, 744.0], [33.1, 745.0], [33.2, 746.0], [33.3, 747.0], [33.4, 750.0], [33.5, 750.0], [33.6, 754.0], [33.7, 758.0], [33.8, 761.0], [33.9, 762.0], [34.0, 763.0], [34.1, 767.0], [34.2, 768.0], [34.3, 769.0], [34.4, 769.0], [34.5, 771.0], [34.6, 771.0], [34.7, 771.0], [34.8, 772.0], [34.9, 775.0], [35.0, 776.0], [35.1, 776.0], [35.2, 776.0], [35.3, 778.0], [35.4, 779.0], [35.5, 782.0], [35.6, 786.0], [35.7, 787.0], [35.8, 788.0], [35.9, 790.0], [36.0, 790.0], [36.1, 791.0], [36.2, 792.0], [36.3, 795.0], [36.4, 798.0], [36.5, 799.0], [36.6, 800.0], [36.7, 801.0], [36.8, 802.0], [36.9, 802.0], [37.0, 802.0], [37.1, 802.0], [37.2, 802.0], [37.3, 803.0], [37.4, 803.0], [37.5, 806.0], [37.6, 806.0], [37.7, 807.0], [37.8, 809.0], [37.9, 809.0], [38.0, 811.0], [38.1, 812.0], [38.2, 813.0], [38.3, 813.0], [38.4, 816.0], [38.5, 818.0], [38.6, 819.0], [38.7, 820.0], [38.8, 820.0], [38.9, 821.0], [39.0, 823.0], [39.1, 823.0], [39.2, 823.0], [39.3, 823.0], [39.4, 824.0], [39.5, 825.0], [39.6, 829.0], [39.7, 829.0], [39.8, 829.0], [39.9, 832.0], [40.0, 832.0], [40.1, 832.0], [40.2, 833.0], [40.3, 834.0], [40.4, 835.0], [40.5, 835.0], [40.6, 836.0], [40.7, 837.0], [40.8, 837.0], [40.9, 838.0], [41.0, 838.0], [41.1, 839.0], [41.2, 841.0], [41.3, 841.0], [41.4, 841.0], [41.5, 842.0], [41.6, 842.0], [41.7, 842.0], [41.8, 843.0], [41.9, 844.0], [42.0, 844.0], [42.1, 845.0], [42.2, 846.0], [42.3, 848.0], [42.4, 848.0], [42.5, 849.0], [42.6, 849.0], [42.7, 849.0], [42.8, 850.0], [42.9, 850.0], [43.0, 853.0], [43.1, 853.0], [43.2, 853.0], [43.3, 854.0], [43.4, 854.0], [43.5, 854.0], [43.6, 860.0], [43.7, 860.0], [43.8, 862.0], [43.9, 864.0], [44.0, 865.0], [44.1, 867.0], [44.2, 870.0], [44.3, 872.0], [44.4, 875.0], [44.5, 876.0], [44.6, 878.0], [44.7, 879.0], [44.8, 880.0], [44.9, 881.0], [45.0, 883.0], [45.1, 885.0], [45.2, 887.0], [45.3, 887.0], [45.4, 889.0], [45.5, 894.0], [45.6, 898.0], [45.7, 899.0], [45.8, 902.0], [45.9, 902.0], [46.0, 905.0], [46.1, 908.0], [46.2, 909.0], [46.3, 912.0], [46.4, 914.0], [46.5, 916.0], [46.6, 916.0], [46.7, 920.0], [46.8, 921.0], [46.9, 924.0], [47.0, 927.0], [47.1, 929.0], [47.2, 930.0], [47.3, 931.0], [47.4, 935.0], [47.5, 936.0], [47.6, 937.0], [47.7, 941.0], [47.8, 941.0], [47.9, 943.0], [48.0, 945.0], [48.1, 946.0], [48.2, 946.0], [48.3, 947.0], [48.4, 950.0], [48.5, 953.0], [48.6, 954.0], [48.7, 956.0], [48.8, 958.0], [48.9, 958.0], [49.0, 961.0], [49.1, 963.0], [49.2, 964.0], [49.3, 965.0], [49.4, 967.0], [49.5, 968.0], [49.6, 973.0], [49.7, 973.0], [49.8, 975.0], [49.9, 977.0], [50.0, 979.0], [50.1, 980.0], [50.2, 981.0], [50.3, 982.0], [50.4, 987.0], [50.5, 987.0], [50.6, 988.0], [50.7, 991.0], [50.8, 993.0], [50.9, 995.0], [51.0, 998.0], [51.1, 1007.0], [51.2, 1009.0], [51.3, 1013.0], [51.4, 1016.0], [51.5, 1017.0], [51.6, 1021.0], [51.7, 1022.0], [51.8, 1026.0], [51.9, 1030.0], [52.0, 1032.0], [52.1, 1034.0], [52.2, 1035.0], [52.3, 1036.0], [52.4, 1039.0], [52.5, 1043.0], [52.6, 1049.0], [52.7, 1053.0], [52.8, 1054.0], [52.9, 1055.0], [53.0, 1056.0], [53.1, 1057.0], [53.2, 1058.0], [53.3, 1058.0], [53.4, 1060.0], [53.5, 1060.0], [53.6, 1062.0], [53.7, 1065.0], [53.8, 1069.0], [53.9, 1071.0], [54.0, 1072.0], [54.1, 1082.0], [54.2, 1083.0], [54.3, 1084.0], [54.4, 1086.0], [54.5, 1088.0], [54.6, 1091.0], [54.7, 1092.0], [54.8, 1093.0], [54.9, 1101.0], [55.0, 1105.0], [55.1, 1105.0], [55.2, 1110.0], [55.3, 1113.0], [55.4, 1115.0], [55.5, 1120.0], [55.6, 1125.0], [55.7, 1138.0], [55.8, 1139.0], [55.9, 1140.0], [56.0, 1141.0], [56.1, 1142.0], [56.2, 1144.0], [56.3, 1144.0], [56.4, 1145.0], [56.5, 1156.0], [56.6, 1158.0], [56.7, 1165.0], [56.8, 1169.0], [56.9, 1173.0], [57.0, 1176.0], [57.1, 1186.0], [57.2, 1193.0], [57.3, 1194.0], [57.4, 1208.0], [57.5, 1215.0], [57.6, 1220.0], [57.7, 1226.0], [57.8, 1231.0], [57.9, 1237.0], [58.0, 1245.0], [58.1, 1249.0], [58.2, 1254.0], [58.3, 1258.0], [58.4, 1264.0], [58.5, 1269.0], [58.6, 1274.0], [58.7, 1291.0], [58.8, 1294.0], [58.9, 1298.0], [59.0, 1302.0], [59.1, 1304.0], [59.2, 1315.0], [59.3, 1317.0], [59.4, 1323.0], [59.5, 1331.0], [59.6, 1335.0], [59.7, 1340.0], [59.8, 1342.0], [59.9, 1348.0], [60.0, 1353.0], [60.1, 1359.0], [60.2, 1365.0], [60.3, 1368.0], [60.4, 1370.0], [60.5, 1377.0], [60.6, 1380.0], [60.7, 1381.0], [60.8, 1382.0], [60.9, 1387.0], [61.0, 1388.0], [61.1, 1390.0], [61.2, 1391.0], [61.3, 1391.0], [61.4, 1397.0], [61.5, 1406.0], [61.6, 1411.0], [61.7, 1414.0], [61.8, 1416.0], [61.9, 1425.0], [62.0, 1427.0], [62.1, 1429.0], [62.2, 1430.0], [62.3, 1438.0], [62.4, 1449.0], [62.5, 1460.0], [62.6, 1461.0], [62.7, 1462.0], [62.8, 1467.0], [62.9, 1468.0], [63.0, 1469.0], [63.1, 1475.0], [63.2, 1486.0], [63.3, 1496.0], [63.4, 1504.0], [63.5, 1507.0], [63.6, 1522.0], [63.7, 1526.0], [63.8, 1534.0], [63.9, 1536.0], [64.0, 1537.0], [64.1, 1540.0], [64.2, 1541.0], [64.3, 1544.0], [64.4, 1550.0], [64.5, 1556.0], [64.6, 1563.0], [64.7, 1571.0], [64.8, 1577.0], [64.9, 1582.0], [65.0, 1586.0], [65.1, 1587.0], [65.2, 1589.0], [65.3, 1591.0], [65.4, 1597.0], [65.5, 1597.0], [65.6, 1599.0], [65.7, 1601.0], [65.8, 1602.0], [65.9, 1603.0], [66.0, 1607.0], [66.1, 1607.0], [66.2, 1608.0], [66.3, 1610.0], [66.4, 1614.0], [66.5, 1616.0], [66.6, 1633.0], [66.7, 1639.0], [66.8, 1646.0], [66.9, 1646.0], [67.0, 1648.0], [67.1, 1650.0], [67.2, 1651.0], [67.3, 1652.0], [67.4, 1656.0], [67.5, 1656.0], [67.6, 1658.0], [67.7, 1664.0], [67.8, 1687.0], [67.9, 1689.0], [68.0, 1690.0], [68.1, 1695.0], [68.2, 1701.0], [68.3, 1708.0], [68.4, 1712.0], [68.5, 1712.0], [68.6, 1714.0], [68.7, 1716.0], [68.8, 1718.0], [68.9, 1722.0], [69.0, 1726.0], [69.1, 1738.0], [69.2, 1741.0], [69.3, 1746.0], [69.4, 1749.0], [69.5, 1752.0], [69.6, 1755.0], [69.7, 1763.0], [69.8, 1773.0], [69.9, 1779.0], [70.0, 1783.0], [70.1, 1792.0], [70.2, 1795.0], [70.3, 1797.0], [70.4, 1799.0], [70.5, 1799.0], [70.6, 1800.0], [70.7, 1800.0], [70.8, 1801.0], [70.9, 1801.0], [71.0, 1803.0], [71.1, 1804.0], [71.2, 1805.0], [71.3, 1808.0], [71.4, 1809.0], [71.5, 1815.0], [71.6, 1817.0], [71.7, 1818.0], [71.8, 1818.0], [71.9, 1827.0], [72.0, 1830.0], [72.1, 1835.0], [72.2, 1838.0], [72.3, 1839.0], [72.4, 1843.0], [72.5, 1843.0], [72.6, 1850.0], [72.7, 1851.0], [72.8, 1853.0], [72.9, 1860.0], [73.0, 1864.0], [73.1, 1873.0], [73.2, 1889.0], [73.3, 1890.0], [73.4, 1892.0], [73.5, 1894.0], [73.6, 1896.0], [73.7, 1898.0], [73.8, 1901.0], [73.9, 1903.0], [74.0, 1904.0], [74.1, 1906.0], [74.2, 1908.0], [74.3, 1911.0], [74.4, 1914.0], [74.5, 1914.0], [74.6, 1916.0], [74.7, 1917.0], [74.8, 1917.0], [74.9, 1921.0], [75.0, 1924.0], [75.1, 1928.0], [75.2, 1931.0], [75.3, 1931.0], [75.4, 1932.0], [75.5, 1933.0], [75.6, 1935.0], [75.7, 1939.0], [75.8, 1939.0], [75.9, 1948.0], [76.0, 1949.0], [76.1, 1950.0], [76.2, 1951.0], [76.3, 1954.0], [76.4, 1955.0], [76.5, 1955.0], [76.6, 1956.0], [76.7, 1958.0], [76.8, 1961.0], [76.9, 1962.0], [77.0, 1966.0], [77.1, 1967.0], [77.2, 1971.0], [77.3, 1973.0], [77.4, 1975.0], [77.5, 1981.0], [77.6, 1981.0], [77.7, 1983.0], [77.8, 1984.0], [77.9, 1985.0], [78.0, 1986.0], [78.1, 1987.0], [78.2, 1988.0], [78.3, 1988.0], [78.4, 1989.0], [78.5, 1989.0], [78.6, 1990.0], [78.7, 1991.0], [78.8, 1993.0], [78.9, 1994.0], [79.0, 1994.0], [79.1, 1995.0], [79.2, 1995.0], [79.3, 1998.0], [79.4, 2000.0], [79.5, 2000.0], [79.6, 2002.0], [79.7, 2002.0], [79.8, 2003.0], [79.9, 2004.0], [80.0, 2010.0], [80.1, 2015.0], [80.2, 2016.0], [80.3, 2019.0], [80.4, 2020.0], [80.5, 2021.0], [80.6, 2022.0], [80.7, 2023.0], [80.8, 2024.0], [80.9, 2025.0], [81.0, 2026.0], [81.1, 2030.0], [81.2, 2030.0], [81.3, 2032.0], [81.4, 2033.0], [81.5, 2034.0], [81.6, 2045.0], [81.7, 2047.0], [81.8, 2048.0], [81.9, 2048.0], [82.0, 2048.0], [82.1, 2051.0], [82.2, 2052.0], [82.3, 2053.0], [82.4, 2053.0], [82.5, 2055.0], [82.6, 2055.0], [82.7, 2057.0], [82.8, 2057.0], [82.9, 2058.0], [83.0, 2060.0], [83.1, 2061.0], [83.2, 2076.0], [83.3, 2077.0], [83.4, 2079.0], [83.5, 2081.0], [83.6, 2084.0], [83.7, 2088.0], [83.8, 2089.0], [83.9, 2094.0], [84.0, 2094.0], [84.1, 2103.0], [84.2, 2103.0], [84.3, 2104.0], [84.4, 2108.0], [84.5, 2109.0], [84.6, 2112.0], [84.7, 2113.0], [84.8, 2120.0], [84.9, 2123.0], [85.0, 2127.0], [85.1, 2132.0], [85.2, 2133.0], [85.3, 2165.0], [85.4, 2167.0], [85.5, 2168.0], [85.6, 2169.0], [85.7, 2194.0], [85.8, 2233.0], [85.9, 2236.0], [86.0, 2243.0], [86.1, 2249.0], [86.2, 2257.0], [86.3, 2259.0], [86.4, 2260.0], [86.5, 2265.0], [86.6, 2269.0], [86.7, 2275.0], [86.8, 2288.0], [86.9, 2289.0], [87.0, 2290.0], [87.1, 2292.0], [87.2, 2292.0], [87.3, 2293.0], [87.4, 2295.0], [87.5, 2295.0], [87.6, 2297.0], [87.7, 2298.0], [87.8, 2310.0], [87.9, 2314.0], [88.0, 2342.0], [88.1, 2345.0], [88.2, 2345.0], [88.3, 2345.0], [88.4, 2345.0], [88.5, 2346.0], [88.6, 2346.0], [88.7, 2346.0], [88.8, 2348.0], [88.9, 2348.0], [89.0, 2348.0], [89.1, 2349.0], [89.2, 2350.0], [89.3, 2351.0], [89.4, 2352.0], [89.5, 2400.0], [89.6, 2403.0], [89.7, 2404.0], [89.8, 2407.0], [89.9, 2408.0], [90.0, 2410.0], [90.1, 2410.0], [90.2, 2440.0], [90.3, 2466.0], [90.4, 2717.0], [90.5, 2730.0], [90.6, 2762.0], [90.7, 2796.0], [90.8, 2823.0], [90.9, 2826.0], [91.0, 2828.0], [91.1, 3163.0], [91.2, 3188.0], [91.3, 3255.0], [91.4, 3268.0], [91.5, 3284.0], [91.6, 3287.0], [91.7, 3294.0], [91.8, 3323.0], [91.9, 3355.0], [92.0, 3383.0], [92.1, 3414.0], [92.2, 3431.0], [92.3, 3484.0], [92.4, 3489.0], [92.5, 3506.0], [92.6, 3512.0], [92.7, 3534.0], [92.8, 3544.0], [92.9, 3549.0], [93.0, 3567.0], [93.1, 3608.0], [93.2, 3626.0], [93.3, 3628.0], [93.4, 3633.0], [93.5, 3639.0], [93.6, 3642.0], [93.7, 3670.0], [93.8, 3683.0], [93.9, 3692.0], [94.0, 3698.0], [94.1, 3699.0], [94.2, 3702.0], [94.3, 3708.0], [94.4, 3711.0], [94.5, 3713.0], [94.6, 3721.0], [94.7, 3723.0], [94.8, 3726.0], [94.9, 3728.0], [95.0, 3730.0], [95.1, 3733.0], [95.2, 3734.0], [95.3, 3748.0], [95.4, 3752.0], [95.5, 3752.0], [95.6, 3757.0], [95.7, 3758.0], [95.8, 3759.0], [95.9, 3761.0], [96.0, 3767.0], [96.1, 3769.0], [96.2, 3772.0], [96.3, 3773.0], [96.4, 3785.0], [96.5, 3787.0], [96.6, 3792.0], [96.7, 3798.0], [96.8, 3802.0], [96.9, 3802.0], [97.0, 3810.0], [97.1, 3819.0], [97.2, 3823.0], [97.3, 3824.0], [97.4, 3825.0], [97.5, 3833.0], [97.6, 3834.0], [97.7, 3835.0], [97.8, 3836.0], [97.9, 3840.0], [98.0, 3841.0], [98.1, 3861.0], [98.2, 3862.0], [98.3, 3863.0], [98.4, 3864.0], [98.5, 3867.0], [98.6, 3867.0], [98.7, 3868.0], [98.8, 3870.0], [98.9, 3884.0], [99.0, 3884.0], [99.1, 3885.0], [99.2, 3892.0], [99.3, 3892.0], [99.4, 3903.0], [99.5, 3904.0], [99.6, 3909.0], [99.7, 4842.0], [99.8, 8549.0], [99.9, 8575.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 199.0, "series": [{"data": [[0.0, 14.0], [8500.0, 4.0], [600.0, 97.0], [700.0, 93.0], [800.0, 185.0], [900.0, 105.0], [1000.0, 77.0], [1100.0, 49.0], [1200.0, 32.0], [1300.0, 50.0], [1400.0, 39.0], [1500.0, 45.0], [100.0, 32.0], [1600.0, 51.0], [1700.0, 47.0], [1800.0, 65.0], [1900.0, 112.0], [2000.0, 94.0], [2100.0, 33.0], [2200.0, 41.0], [2300.0, 34.0], [2400.0, 17.0], [2600.0, 1.0], [2700.0, 7.0], [2800.0, 6.0], [3000.0, 1.0], [3100.0, 4.0], [200.0, 64.0], [3200.0, 9.0], [3300.0, 7.0], [3400.0, 7.0], [3500.0, 13.0], [3700.0, 52.0], [3600.0, 21.0], [3800.0, 52.0], [3900.0, 7.0], [300.0, 199.0], [4800.0, 1.0], [400.0, 171.0], [6400.0, 1.0], [500.0, 61.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 480.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 788.0, "series": [{"data": [[0.0, 480.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 788.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 732.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 173.95050000000035, "minX": 1.63779948E12, "maxY": 173.95050000000035, "series": [{"data": [[1.63779948E12, 173.95050000000035]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63779948E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 55.166666666666664, "minX": 2.0, "maxY": 2351.0, "series": [{"data": [[2.0, 55.166666666666664], [3.0, 82.0], [4.0, 64.0], [5.0, 66.0], [6.0, 66.0], [7.0, 62.0], [8.0, 122.0], [9.0, 111.0], [10.0, 124.0], [11.0, 246.0], [12.0, 501.5], [13.0, 194.5], [14.0, 243.0], [17.0, 498.0], [18.0, 436.0], [19.0, 433.6666666666667], [20.0, 397.0], [21.0, 503.0], [22.0, 399.6666666666667], [24.0, 280.0], [26.0, 418.5], [28.0, 405.5], [29.0, 323.0], [30.0, 280.0], [31.0, 325.5], [33.0, 177.0], [32.0, 278.6666666666667], [34.0, 162.5], [37.0, 353.0], [36.0, 324.0], [39.0, 144.0], [38.0, 408.0], [41.0, 415.5], [40.0, 407.0], [43.0, 454.0], [42.0, 450.8], [44.0, 296.0], [45.0, 267.0], [47.0, 408.3333333333333], [49.0, 457.5], [48.0, 406.0], [51.0, 201.0], [50.0, 405.0], [53.0, 423.5], [52.0, 427.0], [55.0, 395.0], [54.0, 398.0], [56.0, 285.0], [57.0, 244.33333333333331], [59.0, 382.75], [61.0, 329.0], [60.0, 342.5], [63.0, 330.0], [62.0, 328.0], [64.0, 272.0], [67.0, 270.8], [65.0, 330.0], [71.0, 286.0], [70.0, 329.0], [69.0, 295.14285714285717], [68.0, 323.0], [72.0, 294.25], [75.0, 219.0], [74.0, 236.0], [73.0, 314.0], [79.0, 172.0], [78.0, 197.0], [76.0, 218.0], [82.0, 178.0], [81.0, 180.0], [80.0, 191.33333333333334], [87.0, 2351.0], [86.0, 2351.0], [85.0, 662.0], [84.0, 147.33333333333334], [90.0, 2345.0], [89.0, 2091.0], [88.0, 1633.0], [94.0, 2257.0], [93.0, 1850.0], [92.0, 2100.3333333333335], [98.0, 2203.0], [97.0, 2100.5], [103.0, 1243.6], [102.0, 2345.0], [101.0, 2204.8], [100.0, 2143.5], [104.0, 1174.0], [105.0, 358.0], [107.0, 2142.75], [106.0, 2165.0], [109.0, 934.0], [110.0, 524.7777777777778], [111.0, 619.4615384615385], [108.0, 1696.0], [112.0, 1539.7777777777778], [114.0, 606.2307692307693], [115.0, 2034.0], [119.0, 1837.0], [118.0, 2292.0], [117.0, 1811.5], [121.0, 1646.5454545454545], [123.0, 2093.6666666666665], [122.0, 2113.0], [120.0, 2292.5], [127.0, 2124.5], [125.0, 1601.6666666666667], [132.0, 1351.5], [133.0, 723.4444444444445], [134.0, 342.7142857142857], [135.0, 447.81818181818187], [131.0, 1965.0], [130.0, 1617.6666666666667], [129.0, 2151.0], [136.0, 1789.2857142857142], [139.0, 1205.75], [143.0, 1610.0000000000002], [142.0, 1178.5], [141.0, 1544.25], [140.0, 1711.0], [138.0, 2138.0], [137.0, 1822.2], [145.0, 1014.2222222222222], [147.0, 567.25], [151.0, 798.6666666666666], [150.0, 660.5], [149.0, 872.0], [148.0, 844.5], [146.0, 724.0], [144.0, 1291.0], [153.0, 585.8333333333334], [159.0, 538.0], [158.0, 600.7272727272727], [157.0, 664.6666666666666], [156.0, 696.0], [155.0, 769.5], [154.0, 764.0], [152.0, 839.0], [163.0, 390.25], [164.0, 326.5], [165.0, 374.625], [166.0, 370.0], [167.0, 374.53846153846155], [162.0, 459.0], [161.0, 477.2], [160.0, 508.0], [168.0, 384.0], [170.0, 671.3636363636364], [175.0, 1145.5], [174.0, 781.25], [173.0, 425.0], [172.0, 402.8], [177.0, 369.0], [179.0, 1227.4], [183.0, 1707.9], [182.0, 1857.8750000000002], [181.0, 1624.0], [180.0, 1757.75], [178.0, 1517.7], [176.0, 395.0], [187.0, 1493.6499999999996], [191.0, 2136.0], [190.0, 1701.4], [189.0, 1634.090909090909], [188.0, 1531.5384615384617], [186.0, 1899.3928571428573], [185.0, 1613.8], [184.0, 1608.0], [193.0, 1449.1666666666665], [194.0, 1439.9069767441863], [199.0, 1312.375], [198.0, 682.5000000000001], [197.0, 853.9130434782609], [196.0, 938.96], [195.0, 972.9166666666667], [192.0, 1737.6666666666663], [200.0, 1610.5149330587042]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[173.94950000000023, 1333.0730000000042]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 200.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 5666.666666666667, "minX": 1.63779948E12, "maxY": 29666.666666666668, "series": [{"data": [[1.63779948E12, 5666.666666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.63779948E12, 29666.666666666668]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63779948E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1333.0730000000042, "minX": 1.63779948E12, "maxY": 1333.0730000000042, "series": [{"data": [[1.63779948E12, 1333.0730000000042]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63779948E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1333.0330000000004, "minX": 1.63779948E12, "maxY": 1333.0330000000004, "series": [{"data": [[1.63779948E12, 1333.0330000000004]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63779948E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 93.76200000000007, "minX": 1.63779948E12, "maxY": 93.76200000000007, "series": [{"data": [[1.63779948E12, 93.76200000000007]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63779948E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 42.0, "minX": 1.63779948E12, "maxY": 8582.0, "series": [{"data": [[1.63779948E12, 8582.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.63779948E12, 2409.9]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.63779948E12, 3884.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.63779948E12, 3729.95]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.63779948E12, 42.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.63779948E12, 979.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63779948E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 148.5, "minX": 4.0, "maxY": 3723.0, "series": [{"data": [[139.0, 329.0], [9.0, 3723.0], [158.0, 2060.0], [10.0, 1961.0], [182.0, 853.5], [47.0, 977.0], [195.0, 383.0], [50.0, 673.5], [229.0, 1119.0], [14.0, 1021.0], [245.0, 3628.0], [241.0, 1607.0], [4.0, 892.0], [18.0, 148.5], [358.0, 1580.0], [101.0, 902.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 358.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 148.0, "minX": 4.0, "maxY": 3723.0, "series": [{"data": [[139.0, 329.0], [9.0, 3723.0], [158.0, 2060.0], [10.0, 1961.0], [182.0, 853.5], [47.0, 977.0], [195.0, 383.0], [50.0, 673.5], [229.0, 1119.0], [14.0, 1021.0], [245.0, 3628.0], [241.0, 1607.0], [4.0, 892.0], [18.0, 148.0], [358.0, 1580.0], [101.0, 902.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 358.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 33.333333333333336, "minX": 1.63779948E12, "maxY": 33.333333333333336, "series": [{"data": [[1.63779948E12, 33.333333333333336]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63779948E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 33.333333333333336, "minX": 1.63779948E12, "maxY": 33.333333333333336, "series": [{"data": [[1.63779948E12, 33.333333333333336]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63779948E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 33.333333333333336, "minX": 1.63779948E12, "maxY": 33.333333333333336, "series": [{"data": [[1.63779948E12, 33.333333333333336]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63779948E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 33.333333333333336, "minX": 1.63779948E12, "maxY": 33.333333333333336, "series": [{"data": [[1.63779948E12, 33.333333333333336]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63779948E12, "title": "Total Transactions Per Second"}},
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

