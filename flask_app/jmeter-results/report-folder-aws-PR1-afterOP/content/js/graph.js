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
        data: {"result": {"minY": 59.0, "minX": 0.0, "maxY": 461.0, "series": [{"data": [[0.0, 59.0], [0.1, 59.0], [0.2, 59.0], [0.3, 59.0], [0.4, 59.0], [0.5, 68.0], [0.6, 68.0], [0.7, 68.0], [0.8, 68.0], [0.9, 68.0], [1.0, 70.0], [1.1, 70.0], [1.2, 70.0], [1.3, 70.0], [1.4, 70.0], [1.5, 75.0], [1.6, 75.0], [1.7, 75.0], [1.8, 75.0], [1.9, 75.0], [2.0, 79.0], [2.1, 79.0], [2.2, 79.0], [2.3, 79.0], [2.4, 79.0], [2.5, 82.0], [2.6, 82.0], [2.7, 82.0], [2.8, 82.0], [2.9, 82.0], [3.0, 89.0], [3.1, 89.0], [3.2, 89.0], [3.3, 89.0], [3.4, 89.0], [3.5, 92.0], [3.6, 92.0], [3.7, 92.0], [3.8, 92.0], [3.9, 92.0], [4.0, 108.0], [4.1, 108.0], [4.2, 108.0], [4.3, 108.0], [4.4, 108.0], [4.5, 110.0], [4.6, 110.0], [4.7, 110.0], [4.8, 110.0], [4.9, 110.0], [5.0, 110.0], [5.1, 110.0], [5.2, 110.0], [5.3, 110.0], [5.4, 110.0], [5.5, 116.0], [5.6, 116.0], [5.7, 116.0], [5.8, 116.0], [5.9, 116.0], [6.0, 118.0], [6.1, 118.0], [6.2, 118.0], [6.3, 118.0], [6.4, 118.0], [6.5, 127.0], [6.6, 127.0], [6.7, 127.0], [6.8, 127.0], [6.9, 127.0], [7.0, 128.0], [7.1, 128.0], [7.2, 128.0], [7.3, 128.0], [7.4, 128.0], [7.5, 128.0], [7.6, 128.0], [7.7, 128.0], [7.8, 128.0], [7.9, 128.0], [8.0, 137.0], [8.1, 137.0], [8.2, 137.0], [8.3, 137.0], [8.4, 137.0], [8.5, 138.0], [8.6, 138.0], [8.7, 138.0], [8.8, 138.0], [8.9, 138.0], [9.0, 140.0], [9.1, 140.0], [9.2, 140.0], [9.3, 140.0], [9.4, 140.0], [9.5, 149.0], [9.6, 149.0], [9.7, 149.0], [9.8, 149.0], [9.9, 149.0], [10.0, 156.0], [10.1, 156.0], [10.2, 156.0], [10.3, 156.0], [10.4, 156.0], [10.5, 156.0], [10.6, 156.0], [10.7, 156.0], [10.8, 156.0], [10.9, 156.0], [11.0, 158.0], [11.1, 158.0], [11.2, 158.0], [11.3, 158.0], [11.4, 158.0], [11.5, 159.0], [11.6, 159.0], [11.7, 159.0], [11.8, 159.0], [11.9, 159.0], [12.0, 167.0], [12.1, 167.0], [12.2, 167.0], [12.3, 167.0], [12.4, 167.0], [12.5, 170.0], [12.6, 170.0], [12.7, 170.0], [12.8, 170.0], [12.9, 170.0], [13.0, 172.0], [13.1, 172.0], [13.2, 172.0], [13.3, 172.0], [13.4, 172.0], [13.5, 175.0], [13.6, 175.0], [13.7, 175.0], [13.8, 175.0], [13.9, 175.0], [14.0, 179.0], [14.1, 179.0], [14.2, 179.0], [14.3, 179.0], [14.4, 179.0], [14.5, 181.0], [14.6, 181.0], [14.7, 181.0], [14.8, 181.0], [14.9, 181.0], [15.0, 189.0], [15.1, 189.0], [15.2, 189.0], [15.3, 189.0], [15.4, 189.0], [15.5, 189.0], [15.6, 189.0], [15.7, 189.0], [15.8, 189.0], [15.9, 189.0], [16.0, 194.0], [16.1, 194.0], [16.2, 194.0], [16.3, 194.0], [16.4, 194.0], [16.5, 195.0], [16.6, 195.0], [16.7, 195.0], [16.8, 195.0], [16.9, 195.0], [17.0, 198.0], [17.1, 198.0], [17.2, 198.0], [17.3, 198.0], [17.4, 198.0], [17.5, 199.0], [17.6, 199.0], [17.7, 199.0], [17.8, 199.0], [17.9, 199.0], [18.0, 200.0], [18.1, 200.0], [18.2, 200.0], [18.3, 200.0], [18.4, 200.0], [18.5, 202.0], [18.6, 202.0], [18.7, 202.0], [18.8, 202.0], [18.9, 202.0], [19.0, 204.0], [19.1, 204.0], [19.2, 204.0], [19.3, 204.0], [19.4, 204.0], [19.5, 205.0], [19.6, 205.0], [19.7, 205.0], [19.8, 205.0], [19.9, 205.0], [20.0, 220.0], [20.1, 220.0], [20.2, 220.0], [20.3, 220.0], [20.4, 220.0], [20.5, 221.0], [20.6, 221.0], [20.7, 221.0], [20.8, 221.0], [20.9, 221.0], [21.0, 221.0], [21.1, 221.0], [21.2, 221.0], [21.3, 221.0], [21.4, 221.0], [21.5, 231.0], [21.6, 231.0], [21.7, 231.0], [21.8, 231.0], [21.9, 231.0], [22.0, 232.0], [22.1, 232.0], [22.2, 232.0], [22.3, 232.0], [22.4, 232.0], [22.5, 232.0], [22.6, 232.0], [22.7, 232.0], [22.8, 232.0], [22.9, 232.0], [23.0, 235.0], [23.1, 235.0], [23.2, 235.0], [23.3, 235.0], [23.4, 235.0], [23.5, 236.0], [23.6, 236.0], [23.7, 236.0], [23.8, 236.0], [23.9, 236.0], [24.0, 237.0], [24.1, 237.0], [24.2, 237.0], [24.3, 237.0], [24.4, 237.0], [24.5, 237.0], [24.6, 237.0], [24.7, 237.0], [24.8, 237.0], [24.9, 237.0], [25.0, 257.0], [25.1, 257.0], [25.2, 257.0], [25.3, 257.0], [25.4, 257.0], [25.5, 260.0], [25.6, 260.0], [25.7, 260.0], [25.8, 260.0], [25.9, 260.0], [26.0, 262.0], [26.1, 262.0], [26.2, 262.0], [26.3, 262.0], [26.4, 262.0], [26.5, 262.0], [26.6, 262.0], [26.7, 262.0], [26.8, 262.0], [26.9, 262.0], [27.0, 264.0], [27.1, 264.0], [27.2, 264.0], [27.3, 264.0], [27.4, 264.0], [27.5, 265.0], [27.6, 265.0], [27.7, 265.0], [27.8, 265.0], [27.9, 265.0], [28.0, 267.0], [28.1, 267.0], [28.2, 267.0], [28.3, 267.0], [28.4, 267.0], [28.5, 271.0], [28.6, 271.0], [28.7, 271.0], [28.8, 271.0], [28.9, 271.0], [29.0, 274.0], [29.1, 274.0], [29.2, 274.0], [29.3, 274.0], [29.4, 274.0], [29.5, 275.0], [29.6, 275.0], [29.7, 275.0], [29.8, 275.0], [29.9, 275.0], [30.0, 284.0], [30.1, 284.0], [30.2, 284.0], [30.3, 284.0], [30.4, 284.0], [30.5, 286.0], [30.6, 286.0], [30.7, 286.0], [30.8, 286.0], [30.9, 286.0], [31.0, 287.0], [31.1, 287.0], [31.2, 287.0], [31.3, 287.0], [31.4, 287.0], [31.5, 290.0], [31.6, 290.0], [31.7, 290.0], [31.8, 290.0], [31.9, 290.0], [32.0, 292.0], [32.1, 292.0], [32.2, 292.0], [32.3, 292.0], [32.4, 292.0], [32.5, 292.0], [32.6, 292.0], [32.7, 292.0], [32.8, 292.0], [32.9, 292.0], [33.0, 296.0], [33.1, 296.0], [33.2, 296.0], [33.3, 296.0], [33.4, 296.0], [33.5, 297.0], [33.6, 297.0], [33.7, 297.0], [33.8, 297.0], [33.9, 297.0], [34.0, 304.0], [34.1, 304.0], [34.2, 304.0], [34.3, 304.0], [34.4, 304.0], [34.5, 305.0], [34.6, 305.0], [34.7, 305.0], [34.8, 305.0], [34.9, 305.0], [35.0, 307.0], [35.1, 307.0], [35.2, 307.0], [35.3, 307.0], [35.4, 307.0], [35.5, 307.0], [35.6, 307.0], [35.7, 307.0], [35.8, 307.0], [35.9, 307.0], [36.0, 308.0], [36.1, 308.0], [36.2, 308.0], [36.3, 308.0], [36.4, 308.0], [36.5, 310.0], [36.6, 310.0], [36.7, 310.0], [36.8, 310.0], [36.9, 310.0], [37.0, 311.0], [37.1, 311.0], [37.2, 311.0], [37.3, 311.0], [37.4, 311.0], [37.5, 312.0], [37.6, 312.0], [37.7, 312.0], [37.8, 312.0], [37.9, 312.0], [38.0, 313.0], [38.1, 313.0], [38.2, 313.0], [38.3, 313.0], [38.4, 313.0], [38.5, 313.0], [38.6, 313.0], [38.7, 313.0], [38.8, 313.0], [38.9, 313.0], [39.0, 314.0], [39.1, 314.0], [39.2, 314.0], [39.3, 314.0], [39.4, 314.0], [39.5, 315.0], [39.6, 315.0], [39.7, 315.0], [39.8, 315.0], [39.9, 315.0], [40.0, 317.0], [40.1, 317.0], [40.2, 317.0], [40.3, 317.0], [40.4, 317.0], [40.5, 317.0], [40.6, 317.0], [40.7, 317.0], [40.8, 317.0], [40.9, 317.0], [41.0, 319.0], [41.1, 319.0], [41.2, 319.0], [41.3, 319.0], [41.4, 319.0], [41.5, 323.0], [41.6, 323.0], [41.7, 323.0], [41.8, 323.0], [41.9, 323.0], [42.0, 324.0], [42.1, 324.0], [42.2, 324.0], [42.3, 324.0], [42.4, 324.0], [42.5, 326.0], [42.6, 326.0], [42.7, 326.0], [42.8, 326.0], [42.9, 326.0], [43.0, 328.0], [43.1, 328.0], [43.2, 328.0], [43.3, 328.0], [43.4, 328.0], [43.5, 328.0], [43.6, 328.0], [43.7, 328.0], [43.8, 328.0], [43.9, 328.0], [44.0, 329.0], [44.1, 329.0], [44.2, 329.0], [44.3, 329.0], [44.4, 329.0], [44.5, 330.0], [44.6, 330.0], [44.7, 330.0], [44.8, 330.0], [44.9, 330.0], [45.0, 331.0], [45.1, 331.0], [45.2, 331.0], [45.3, 331.0], [45.4, 331.0], [45.5, 333.0], [45.6, 333.0], [45.7, 333.0], [45.8, 333.0], [45.9, 333.0], [46.0, 333.0], [46.1, 333.0], [46.2, 333.0], [46.3, 333.0], [46.4, 333.0], [46.5, 335.0], [46.6, 335.0], [46.7, 335.0], [46.8, 335.0], [46.9, 335.0], [47.0, 337.0], [47.1, 337.0], [47.2, 337.0], [47.3, 337.0], [47.4, 337.0], [47.5, 351.0], [47.6, 351.0], [47.7, 351.0], [47.8, 351.0], [47.9, 351.0], [48.0, 355.0], [48.1, 355.0], [48.2, 355.0], [48.3, 355.0], [48.4, 355.0], [48.5, 357.0], [48.6, 357.0], [48.7, 357.0], [48.8, 357.0], [48.9, 357.0], [49.0, 358.0], [49.1, 358.0], [49.2, 358.0], [49.3, 358.0], [49.4, 358.0], [49.5, 360.0], [49.6, 360.0], [49.7, 360.0], [49.8, 360.0], [49.9, 360.0], [50.0, 361.0], [50.1, 361.0], [50.2, 361.0], [50.3, 361.0], [50.4, 361.0], [50.5, 363.0], [50.6, 363.0], [50.7, 363.0], [50.8, 363.0], [50.9, 363.0], [51.0, 368.0], [51.1, 368.0], [51.2, 368.0], [51.3, 368.0], [51.4, 368.0], [51.5, 375.0], [51.6, 375.0], [51.7, 375.0], [51.8, 375.0], [51.9, 375.0], [52.0, 378.0], [52.1, 378.0], [52.2, 378.0], [52.3, 378.0], [52.4, 378.0], [52.5, 381.0], [52.6, 381.0], [52.7, 381.0], [52.8, 381.0], [52.9, 381.0], [53.0, 385.0], [53.1, 385.0], [53.2, 385.0], [53.3, 385.0], [53.4, 385.0], [53.5, 388.0], [53.6, 388.0], [53.7, 388.0], [53.8, 388.0], [53.9, 388.0], [54.0, 389.0], [54.1, 389.0], [54.2, 389.0], [54.3, 389.0], [54.4, 389.0], [54.5, 395.0], [54.6, 395.0], [54.7, 395.0], [54.8, 395.0], [54.9, 395.0], [55.0, 396.0], [55.1, 396.0], [55.2, 396.0], [55.3, 396.0], [55.4, 396.0], [55.5, 397.0], [55.6, 397.0], [55.7, 397.0], [55.8, 397.0], [55.9, 397.0], [56.0, 397.0], [56.1, 397.0], [56.2, 397.0], [56.3, 397.0], [56.4, 397.0], [56.5, 398.0], [56.6, 398.0], [56.7, 398.0], [56.8, 398.0], [56.9, 398.0], [57.0, 399.0], [57.1, 399.0], [57.2, 399.0], [57.3, 399.0], [57.4, 399.0], [57.5, 400.0], [57.6, 400.0], [57.7, 400.0], [57.8, 400.0], [57.9, 400.0], [58.0, 400.0], [58.1, 400.0], [58.2, 400.0], [58.3, 400.0], [58.4, 400.0], [58.5, 400.0], [58.6, 400.0], [58.7, 400.0], [58.8, 400.0], [58.9, 400.0], [59.0, 400.0], [59.1, 400.0], [59.2, 400.0], [59.3, 400.0], [59.4, 400.0], [59.5, 400.0], [59.6, 400.0], [59.7, 400.0], [59.8, 400.0], [59.9, 400.0], [60.0, 400.0], [60.1, 400.0], [60.2, 400.0], [60.3, 400.0], [60.4, 400.0], [60.5, 401.0], [60.6, 401.0], [60.7, 401.0], [60.8, 401.0], [60.9, 401.0], [61.0, 401.0], [61.1, 401.0], [61.2, 401.0], [61.3, 401.0], [61.4, 401.0], [61.5, 401.0], [61.6, 401.0], [61.7, 401.0], [61.8, 401.0], [61.9, 401.0], [62.0, 402.0], [62.1, 402.0], [62.2, 402.0], [62.3, 402.0], [62.4, 402.0], [62.5, 402.0], [62.6, 402.0], [62.7, 402.0], [62.8, 402.0], [62.9, 402.0], [63.0, 403.0], [63.1, 403.0], [63.2, 403.0], [63.3, 403.0], [63.4, 403.0], [63.5, 404.0], [63.6, 404.0], [63.7, 404.0], [63.8, 404.0], [63.9, 404.0], [64.0, 404.0], [64.1, 404.0], [64.2, 404.0], [64.3, 404.0], [64.4, 404.0], [64.5, 405.0], [64.6, 405.0], [64.7, 405.0], [64.8, 405.0], [64.9, 405.0], [65.0, 405.0], [65.1, 405.0], [65.2, 405.0], [65.3, 405.0], [65.4, 405.0], [65.5, 405.0], [65.6, 405.0], [65.7, 405.0], [65.8, 405.0], [65.9, 405.0], [66.0, 406.0], [66.1, 406.0], [66.2, 406.0], [66.3, 406.0], [66.4, 406.0], [66.5, 406.0], [66.6, 406.0], [66.7, 406.0], [66.8, 406.0], [66.9, 406.0], [67.0, 408.0], [67.1, 408.0], [67.2, 408.0], [67.3, 408.0], [67.4, 408.0], [67.5, 409.0], [67.6, 409.0], [67.7, 409.0], [67.8, 409.0], [67.9, 409.0], [68.0, 409.0], [68.1, 409.0], [68.2, 409.0], [68.3, 409.0], [68.4, 409.0], [68.5, 409.0], [68.6, 409.0], [68.7, 409.0], [68.8, 409.0], [68.9, 409.0], [69.0, 410.0], [69.1, 410.0], [69.2, 410.0], [69.3, 410.0], [69.4, 410.0], [69.5, 410.0], [69.6, 410.0], [69.7, 410.0], [69.8, 410.0], [69.9, 410.0], [70.0, 412.0], [70.1, 412.0], [70.2, 412.0], [70.3, 412.0], [70.4, 412.0], [70.5, 413.0], [70.6, 413.0], [70.7, 413.0], [70.8, 413.0], [70.9, 413.0], [71.0, 413.0], [71.1, 413.0], [71.2, 413.0], [71.3, 413.0], [71.4, 413.0], [71.5, 416.0], [71.6, 416.0], [71.7, 416.0], [71.8, 416.0], [71.9, 416.0], [72.0, 416.0], [72.1, 416.0], [72.2, 416.0], [72.3, 416.0], [72.4, 416.0], [72.5, 417.0], [72.6, 417.0], [72.7, 417.0], [72.8, 417.0], [72.9, 417.0], [73.0, 417.0], [73.1, 417.0], [73.2, 417.0], [73.3, 417.0], [73.4, 417.0], [73.5, 417.0], [73.6, 417.0], [73.7, 417.0], [73.8, 417.0], [73.9, 417.0], [74.0, 417.0], [74.1, 417.0], [74.2, 417.0], [74.3, 417.0], [74.4, 417.0], [74.5, 418.0], [74.6, 418.0], [74.7, 418.0], [74.8, 418.0], [74.9, 418.0], [75.0, 418.0], [75.1, 418.0], [75.2, 418.0], [75.3, 418.0], [75.4, 418.0], [75.5, 418.0], [75.6, 418.0], [75.7, 418.0], [75.8, 418.0], [75.9, 418.0], [76.0, 418.0], [76.1, 418.0], [76.2, 418.0], [76.3, 418.0], [76.4, 418.0], [76.5, 419.0], [76.6, 419.0], [76.7, 419.0], [76.8, 419.0], [76.9, 419.0], [77.0, 419.0], [77.1, 419.0], [77.2, 419.0], [77.3, 419.0], [77.4, 419.0], [77.5, 419.0], [77.6, 419.0], [77.7, 419.0], [77.8, 419.0], [77.9, 419.0], [78.0, 419.0], [78.1, 419.0], [78.2, 419.0], [78.3, 419.0], [78.4, 419.0], [78.5, 420.0], [78.6, 420.0], [78.7, 420.0], [78.8, 420.0], [78.9, 420.0], [79.0, 420.0], [79.1, 420.0], [79.2, 420.0], [79.3, 420.0], [79.4, 420.0], [79.5, 421.0], [79.6, 421.0], [79.7, 421.0], [79.8, 421.0], [79.9, 421.0], [80.0, 421.0], [80.1, 421.0], [80.2, 421.0], [80.3, 421.0], [80.4, 421.0], [80.5, 423.0], [80.6, 423.0], [80.7, 423.0], [80.8, 423.0], [80.9, 423.0], [81.0, 424.0], [81.1, 424.0], [81.2, 424.0], [81.3, 424.0], [81.4, 424.0], [81.5, 425.0], [81.6, 425.0], [81.7, 425.0], [81.8, 425.0], [81.9, 425.0], [82.0, 426.0], [82.1, 426.0], [82.2, 426.0], [82.3, 426.0], [82.4, 426.0], [82.5, 426.0], [82.6, 426.0], [82.7, 426.0], [82.8, 426.0], [82.9, 426.0], [83.0, 426.0], [83.1, 426.0], [83.2, 426.0], [83.3, 426.0], [83.4, 426.0], [83.5, 427.0], [83.6, 427.0], [83.7, 427.0], [83.8, 427.0], [83.9, 427.0], [84.0, 427.0], [84.1, 427.0], [84.2, 427.0], [84.3, 427.0], [84.4, 427.0], [84.5, 431.0], [84.6, 431.0], [84.7, 431.0], [84.8, 431.0], [84.9, 431.0], [85.0, 431.0], [85.1, 431.0], [85.2, 431.0], [85.3, 431.0], [85.4, 431.0], [85.5, 433.0], [85.6, 433.0], [85.7, 433.0], [85.8, 433.0], [85.9, 433.0], [86.0, 435.0], [86.1, 435.0], [86.2, 435.0], [86.3, 435.0], [86.4, 435.0], [86.5, 436.0], [86.6, 436.0], [86.7, 436.0], [86.8, 436.0], [86.9, 436.0], [87.0, 436.0], [87.1, 436.0], [87.2, 436.0], [87.3, 436.0], [87.4, 436.0], [87.5, 438.0], [87.6, 438.0], [87.7, 438.0], [87.8, 438.0], [87.9, 438.0], [88.0, 438.0], [88.1, 438.0], [88.2, 438.0], [88.3, 438.0], [88.4, 438.0], [88.5, 438.0], [88.6, 438.0], [88.7, 438.0], [88.8, 438.0], [88.9, 438.0], [89.0, 439.0], [89.1, 439.0], [89.2, 439.0], [89.3, 439.0], [89.4, 439.0], [89.5, 439.0], [89.6, 439.0], [89.7, 439.0], [89.8, 439.0], [89.9, 439.0], [90.0, 440.0], [90.1, 440.0], [90.2, 440.0], [90.3, 440.0], [90.4, 440.0], [90.5, 440.0], [90.6, 440.0], [90.7, 440.0], [90.8, 440.0], [90.9, 440.0], [91.0, 440.0], [91.1, 440.0], [91.2, 440.0], [91.3, 440.0], [91.4, 440.0], [91.5, 441.0], [91.6, 441.0], [91.7, 441.0], [91.8, 441.0], [91.9, 441.0], [92.0, 443.0], [92.1, 443.0], [92.2, 443.0], [92.3, 443.0], [92.4, 443.0], [92.5, 443.0], [92.6, 443.0], [92.7, 443.0], [92.8, 443.0], [92.9, 443.0], [93.0, 443.0], [93.1, 443.0], [93.2, 443.0], [93.3, 443.0], [93.4, 443.0], [93.5, 443.0], [93.6, 443.0], [93.7, 443.0], [93.8, 443.0], [93.9, 443.0], [94.0, 443.0], [94.1, 443.0], [94.2, 443.0], [94.3, 443.0], [94.4, 443.0], [94.5, 443.0], [94.6, 443.0], [94.7, 443.0], [94.8, 443.0], [94.9, 443.0], [95.0, 444.0], [95.1, 444.0], [95.2, 444.0], [95.3, 444.0], [95.4, 444.0], [95.5, 444.0], [95.6, 444.0], [95.7, 444.0], [95.8, 444.0], [95.9, 444.0], [96.0, 444.0], [96.1, 444.0], [96.2, 444.0], [96.3, 444.0], [96.4, 444.0], [96.5, 445.0], [96.6, 445.0], [96.7, 445.0], [96.8, 445.0], [96.9, 445.0], [97.0, 447.0], [97.1, 447.0], [97.2, 447.0], [97.3, 447.0], [97.4, 447.0], [97.5, 449.0], [97.6, 449.0], [97.7, 449.0], [97.8, 449.0], [97.9, 449.0], [98.0, 450.0], [98.1, 450.0], [98.2, 450.0], [98.3, 450.0], [98.4, 450.0], [98.5, 450.0], [98.6, 450.0], [98.7, 450.0], [98.8, 450.0], [98.9, 450.0], [99.0, 452.0], [99.1, 452.0], [99.2, 452.0], [99.3, 452.0], [99.4, 452.0], [99.5, 461.0], [99.6, 461.0], [99.7, 461.0], [99.8, 461.0], [99.9, 461.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 8.0, "minX": 0.0, "maxY": 85.0, "series": [{"data": [[0.0, 8.0], [300.0, 47.0], [100.0, 28.0], [200.0, 32.0], [400.0, 85.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 200.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 200.0, "series": [{"data": [[0.0, 200.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 15.51999999999999, "minX": 1.63780908E12, "maxY": 15.51999999999999, "series": [{"data": [[1.63780908E12, 15.51999999999999]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63780908E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 96.75, "minX": 1.0, "maxY": 401.40000000000003, "series": [{"data": [[8.0, 170.5], [2.0, 156.0], [9.0, 170.2], [10.0, 221.0], [11.0, 230.14285714285714], [3.0, 109.5], [12.0, 253.33333333333334], [13.0, 274.3], [14.0, 293.6666666666667], [15.0, 318.07142857142856], [4.0, 111.33333333333333], [16.0, 367.3333333333333], [1.0, 127.0], [17.0, 393.1428571428571], [18.0, 396.25], [19.0, 387.22222222222223], [5.0, 96.75], [20.0, 401.40000000000003], [6.0, 140.75], [7.0, 153.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[15.51999999999999, 326.025]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 566.6666666666666, "minX": 1.63780908E12, "maxY": 2966.6666666666665, "series": [{"data": [[1.63780908E12, 566.6666666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.63780908E12, 2966.6666666666665]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63780908E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 326.025, "minX": 1.63780908E12, "maxY": 326.025, "series": [{"data": [[1.63780908E12, 326.025]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63780908E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 325.9399999999999, "minX": 1.63780908E12, "maxY": 325.9399999999999, "series": [{"data": [[1.63780908E12, 325.9399999999999]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63780908E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 3.815000000000001, "minX": 1.63780908E12, "maxY": 3.815000000000001, "series": [{"data": [[1.63780908E12, 3.815000000000001]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63780908E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 59.0, "minX": 1.63780908E12, "maxY": 461.0, "series": [{"data": [[1.63780908E12, 461.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.63780908E12, 439.9]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.63780908E12, 451.98]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.63780908E12, 443.95]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.63780908E12, 59.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.63780908E12, 360.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63780908E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 128.0, "minX": 28.0, "maxY": 416.0, "series": [{"data": [[47.0, 368.0], [46.0, 387.0], [48.0, 416.0], [28.0, 128.0], [31.0, 262.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 48.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 128.0, "minX": 28.0, "maxY": 416.0, "series": [{"data": [[47.0, 368.0], [46.0, 387.0], [48.0, 416.0], [28.0, 128.0], [31.0, 262.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 48.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.63780908E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.63780908E12, 3.3333333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63780908E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.63780908E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.63780908E12, 3.3333333333333335]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63780908E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.63780908E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.63780908E12, 3.3333333333333335]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63780908E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.63780908E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.63780908E12, 3.3333333333333335]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63780908E12, "title": "Total Transactions Per Second"}},
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

