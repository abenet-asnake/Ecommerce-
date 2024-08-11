import React from 'react';

const Logo = ({w,h}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={w} height={h} viewBox="0 0 1280 792" version="1.1"><path d="M 151.785 1.551 C 134.455 4.249, 116.788 11.859, 103 22.565 C 95.279 28.561, 17.926 106.529, 14.272 112 C 3.293 128.435, -1.453 147.443, 0.978 165.235 C 4.916 194.053, 21.233 215.973, 47.500 227.733 C 72.165 238.775, 104.607 234.838, 125.542 218.261 C 128.269 216.102, 143.726 201.210, 159.891 185.168 L 189.282 156 353.393 156 L 517.505 156 596.002 78.035 L 674.500 0.071 417.500 0.132 C 206.278 0.183, 158.948 0.435, 151.785 1.551 M 297.750 286.749 L 220 364.505 220 472.596 L 220 580.687 190.384 610.594 C 174.096 627.042, 159.072 642.774, 156.998 645.554 C 152.230 651.943, 147.447 661.386, 145.008 669.223 C 143.669 673.525, 141.874 676.572, 138.881 679.621 C 135.022 683.554, 134.750 684.157, 135.803 686.467 C 137.964 691.211, 140.687 689.781, 153.136 677.365 C 164.379 666.151, 164.765 665.625, 163.794 662.839 C 160.635 653.776, 168.895 644.165, 178.878 645.290 C 182.601 645.709, 184.134 646.562, 187.329 649.987 C 191.060 653.987, 191.213 654.414, 190.784 659.594 C 190.458 663.516, 189.666 665.740, 187.917 667.637 C 184.505 671.337, 179.480 673.256, 175.123 672.523 C 171.533 671.919, 171.347 672.067, 154.750 688.773 C 145.538 698.046, 138 705.970, 138 706.382 C 138 708.687, 140.352 711, 142.696 711 C 144.712 711, 148.172 708.182, 157.588 698.873 C 168.193 688.389, 170.186 686.830, 172.308 687.362 C 173.691 687.710, 175.014 688.945, 175.341 690.195 C 175.824 692.045, 172.861 695.500, 157.460 711.040 C 142.911 725.721, 139 730.225, 139 732.299 C 139 735.484, 142.130 737.553, 144.750 736.100 C 145.712 735.566, 154.136 727.459, 163.469 718.085 L 180.438 701.040 180.469 694.770 C 180.504 687.596, 182.402 684.175, 187.784 681.582 C 194.895 678.156, 202.769 680.995, 206.336 688.272 C 211.210 698.210, 202.368 709.434, 191.088 707.630 L 187.381 707.037 160.559 733.923 C 145.806 748.710, 133.388 761.372, 132.962 762.062 C 131.757 764.012, 134.055 768, 136.384 768 C 137.740 768, 146.521 759.951, 162.021 744.500 C 185.238 721.357, 187.896 719.296, 190.800 722.200 C 193.635 725.035, 191.821 727.703, 177 742.500 C 161.888 757.587, 160.151 760.221, 163.487 762.989 C 164.305 763.668, 165.992 763.962, 167.237 763.642 C 168.482 763.322, 184.688 747.857, 203.250 729.275 C 236.864 695.626, 236.997 695.476, 236.090 692.314 C 234.301 686.077, 237.798 678.242, 243.440 675.848 C 256.363 670.363, 268.361 684.646, 260.521 696.183 C 257.695 700.343, 253.246 702.214, 247.050 701.848 L 242.909 701.604 214.376 730.052 C 198.683 745.698, 185.415 759.575, 184.893 760.890 C 183.834 763.553, 186.054 767, 188.827 767 C 189.661 767, 199.414 758, 210.500 747 C 230.272 727.381, 232.974 725.374, 235.800 728.200 C 238.732 731.132, 236.630 733.784, 211 759.481 C 194.138 776.387, 185 786.261, 185 787.575 C 185 789.992, 186.804 792.006, 188.950 791.983 C 189.802 791.974, 204.511 778.137, 221.635 761.233 L 252.770 730.500 252.264 725.314 C 251.855 721.121, 252.183 719.440, 253.975 716.540 C 259.823 707.078, 273.329 708.057, 278.353 718.307 C 280.807 723.312, 279.877 728.072, 275.517 732.831 C 272.315 736.325, 271.837 736.505, 265.489 736.597 L 258.822 736.695 236.911 758.589 C 215.227 780.256, 213.252 782.852, 216.200 785.800 C 218.899 788.499, 221.664 786.871, 232 776.500 C 237.755 770.725, 242.994 766, 243.642 766 C 244.289 766, 249.337 763.738, 254.860 760.973 C 266.929 754.931, 266.728 755.113, 315.673 706.226 C 346.158 675.777, 353.930 667.452, 358.868 659.956 C 365.408 650.029, 369.886 640.175, 373.310 628.175 L 375.500 620.500 375.765 450 C 375.911 356.225, 375.911 263.636, 375.765 244.247 L 375.500 208.994 297.750 286.749 M 746.242 369.038 L 746.500 425.140 757.637 425.320 L 768.773 425.500 769.191 399.500 C 769.533 378.215, 769.898 372.956, 771.202 370.498 C 773.953 365.314, 776.593 363.656, 782.787 363.223 C 787.556 362.889, 789.079 363.215, 792 365.196 C 797.430 368.878, 797.880 371.495, 797.944 399.750 L 798 425 810 425 L 822 425 822 397.684 C 822 361.456, 820.751 355.223, 811.993 347.726 C 801.804 339.004, 783.306 339.899, 773.936 349.566 C 772.105 351.455, 770.289 353, 769.899 353 C 769.510 353, 769.163 344.113, 769.129 333.250 L 769.068 313.500 757.526 313.218 L 745.983 312.936 746.242 369.038 M 1182 368.939 L 1182 424.879 1193.587 425.189 C 1199.960 425.360, 1205.360 425.313, 1205.587 425.083 C 1205.814 424.854, 1206 419.208, 1206 412.536 L 1206 400.406 1209.792 396.703 C 1211.878 394.666, 1213.827 393, 1214.124 393 C 1214.420 393, 1216.030 395.137, 1217.701 397.750 C 1219.371 400.363, 1223.991 407.563, 1227.968 413.750 L 1235.198 425 1245.599 425.125 C 1251.319 425.194, 1257.237 425.286, 1258.750 425.330 C 1260.312 425.375, 1261.401 424.916, 1261.271 424.267 C 1261.145 423.640, 1256.839 416.685, 1251.703 408.813 C 1233.613 381.088, 1231.010 377.029, 1230.756 376.146 C 1230.615 375.656, 1237.403 367.998, 1245.841 359.128 L 1261.181 343 1247.166 343 L 1233.150 343 1219.825 357.580 L 1206.500 372.160 1206.235 342.580 L 1205.970 313 1193.985 313 L 1182 313 1182 368.939 M 868.389 317.423 C 856.681 320.095, 848.586 326.102, 843.923 335.577 C 841.883 339.724, 841.511 341.919, 841.563 349.500 C 841.637 360.049, 843.405 364.423, 850.008 370.388 C 855.173 375.055, 860.359 377.352, 875 381.459 C 891.584 386.112, 895.746 388.147, 897.563 392.496 C 898.903 395.705, 898.893 396.424, 897.459 399.445 C 895.343 403.904, 891.231 405.507, 882 405.471 C 872.678 405.434, 865.878 403.199, 857.372 397.376 L 850.955 392.982 847.869 396.496 C 846.172 398.429, 843.029 402.215, 840.883 404.909 L 836.983 409.808 840.047 412.386 C 857.361 426.955, 889.738 431.376, 906.629 421.477 C 912.488 418.043, 918.594 410.739, 920.565 404.803 C 922.854 397.913, 922.175 385.107, 919.217 379.376 C 914.998 371.203, 906.192 366.122, 886.465 360.480 C 879.334 358.440, 872.290 356.150, 870.811 355.391 C 861.900 350.819, 863.574 340.604, 873.649 338.067 C 880.844 336.255, 891.896 338.799, 900.744 344.304 C 902.810 345.589, 905.015 346.944, 905.645 347.314 C 906.346 347.727, 909.195 344.476, 912.995 338.928 C 920.111 328.538, 920.406 329.667, 909 323.618 C 896.985 317.245, 880.311 314.702, 868.389 317.423 M 475 329 L 475 340 491.489 340 L 507.979 340 508.239 382.750 C 508.483 422.753, 508.612 425.492, 510.250 425.375 C 511.212 425.306, 516.500 425.194, 522 425.125 L 532 425 532 382.500 L 532 340 548 340 L 564 340 564 329 L 564 318 519.500 318 L 475 318 475 329 M 943.495 323.250 C 943.252 323.938, 943.153 328.663, 943.276 333.751 L 943.500 343.002 938.750 343.001 L 934 343 934 353 L 934 363 938.750 363.003 L 943.500 363.007 943.500 386.253 C 943.500 412.476, 944.271 416.397, 950.505 421.870 C 956.620 427.239, 969.850 428.345, 981.250 424.439 L 986 422.812 986 413.299 C 986 404.639, 985.843 403.849, 984.250 404.486 C 983.288 404.871, 979.970 405.426, 976.877 405.720 C 972.054 406.179, 970.952 405.952, 969.127 404.127 C 967.103 402.103, 967 401.056, 967 382.500 L 967 363 976.500 363 L 986 363 986 353 L 986 343 976.500 343 L 967 343 967 332.500 L 967 322 955.469 322 C 947.146 322, 943.814 322.348, 943.495 323.250 M 594.638 342.128 C 581.968 343.918, 570.720 351.998, 565.211 363.266 C 554.970 384.214, 560.564 408.652, 578.212 420.058 C 586.606 425.484, 590.674 426.500, 604 426.500 C 614.482 426.500, 616.025 426.254, 621.430 423.723 C 628.154 420.574, 636 414.537, 636 412.513 C 636 411.769, 633.204 408.669, 629.786 405.624 L 623.572 400.089 620.286 402.596 C 615.170 406.497, 610.600 408, 603.848 408 C 595.756 408, 590.373 405.428, 586.741 399.827 C 581.431 391.637, 580.236 392, 612.500 392 L 641 392 641 385.549 C 641 356.748, 621.358 338.352, 594.638 342.128 M 1127.992 342.001 C 1108.384 344.435, 1094.238 358.123, 1091.119 377.684 C 1088.121 396.478, 1097.584 414.813, 1114.561 423.108 C 1121.320 426.410, 1121.824 426.498, 1134 426.499 C 1146.030 426.500, 1146.745 426.380, 1153 423.311 C 1156.575 421.557, 1161.287 418.286, 1163.472 416.042 L 1167.443 411.962 1160.719 405.238 C 1154.884 399.402, 1153.764 398.676, 1152.247 399.741 C 1143.973 405.553, 1141.486 406.500, 1134.500 406.500 C 1127.602 406.500, 1124.207 405.147, 1119.366 400.470 C 1114.581 395.847, 1112.500 383.672, 1115.166 375.899 C 1120.168 361.321, 1137.193 357.328, 1149.242 367.908 L 1152.559 370.820 1159.280 363.488 C 1162.976 359.455, 1166 355.717, 1166 355.181 C 1166 353.739, 1159.508 348.300, 1155.107 346.054 C 1148.059 342.459, 1137.284 340.848, 1127.992 342.001 M 684.500 343.351 C 668.451 348.645, 657.493 361.492, 654.928 378.023 C 652.032 396.693, 661.812 415.279, 678.759 423.307 C 685.227 426.371, 686.006 426.500, 698 426.488 C 709.642 426.478, 710.892 426.285, 716.215 423.682 C 719.359 422.145, 724.084 418.925, 726.715 416.526 L 731.500 412.165 724.682 405.380 C 718.916 399.643, 717.604 398.775, 716.182 399.755 C 707.475 405.756, 705.516 406.500, 698.427 406.500 C 692.381 406.500, 690.748 406.100, 687.191 403.745 C 681.300 399.846, 678 392.993, 678 384.655 C 678 370.945, 685.894 362, 697.993 362 C 703.447 362, 711.035 365.163, 714.331 368.810 C 716.147 370.820, 716.214 370.781, 722.831 363.819 C 726.499 359.959, 729.636 356.220, 729.802 355.510 C 730.213 353.753, 722.443 347.538, 716.420 344.807 C 712.412 342.989, 709.369 342.525, 700 342.304 C 692.469 342.126, 687.119 342.487, 684.500 343.351 M 1023.757 343.034 C 1016.644 344.231, 1006 348.004, 1006 349.328 C 1006 349.969, 1007.176 354.025, 1008.614 358.341 C 1010.933 365.304, 1011.468 366.133, 1013.364 365.688 C 1034.855 360.646, 1041.421 360.854, 1047.764 366.779 C 1050.411 369.252, 1052.949 376.384, 1051.645 377.688 C 1051.379 377.954, 1047.967 377.395, 1044.062 376.446 C 1024.483 371.687, 1003.526 379.234, 999.862 392.362 C 995.700 407.277, 1001.843 420.284, 1015.280 425.007 C 1025.721 428.677, 1038.474 427.061, 1046.828 421.010 C 1049.113 419.354, 1051.212 418, 1051.491 418 C 1051.771 418, 1052 419.575, 1052 421.500 L 1052 425 1063 425 L 1074 425 1074 396.682 C 1074 365.154, 1073.521 361.929, 1067.666 354 C 1060.430 344.202, 1042.870 339.816, 1023.757 343.034 M 596 361.136 C 591.256 362.515, 586.388 367.413, 584.628 372.578 C 583.829 374.923, 583.436 377.102, 583.754 377.421 C 584.073 377.739, 591.965 378, 601.292 378 L 618.250 378 617.603 374.766 C 616.718 370.340, 612.590 364.357, 609.220 362.614 C 605.212 360.541, 600.036 359.963, 596 361.136 M 1028 391.178 C 1022.457 394.038, 1020.357 397.868, 1021.615 402.823 C 1022.974 408.173, 1026.894 410.516, 1034.324 410.419 C 1044.650 410.284, 1050.956 405.516, 1051.751 397.242 C 1052.175 392.832, 1051.996 392.319, 1049.663 391.256 C 1048.259 390.617, 1043.824 389.815, 1039.806 389.475 C 1033.396 388.932, 1031.948 389.141, 1028 391.178 M 1000 471.500 L 1000 478 1006.500 478 L 1013 478 1013 471.500 L 1013 465 1006.500 465 L 1000 465 1000 471.500 M 679.500 467.402 C 664.447 472.175, 656.460 482.133, 656.561 496 C 656.616 503.555, 659.606 510.641, 664.479 514.764 C 669.235 518.787, 678.826 522.840, 690.113 525.596 C 711.794 530.891, 718.705 534.932, 719.922 543.027 C 722.303 558.863, 710.519 567.169, 688.941 564.864 C 680.793 563.993, 672.097 560.300, 664.546 554.504 L 659.592 550.702 655.806 554.968 L 652.020 559.235 655.760 562.215 C 666.723 570.951, 677.681 575.019, 692.206 575.744 C 701.451 576.206, 703.849 575.978, 709.780 574.071 C 724.462 569.350, 732.343 559.444, 732.323 545.734 C 732.299 528.677, 723.771 521.738, 693.177 513.883 C 676.447 509.588, 670.920 506.131, 668.923 498.714 C 665.050 484.331, 679.962 473.595, 699.094 476.993 C 705.518 478.134, 718.910 483.982, 721.076 486.591 C 722.022 487.732, 722.871 487.146, 725.764 483.358 L 729.296 478.732 726.898 476.829 C 723.013 473.747, 712.888 468.806, 707.500 467.363 C 701.255 465.690, 684.826 465.713, 679.500 467.402 M 470 520.481 L 470 573.962 472.362 574.555 C 473.661 574.881, 476.248 575.002, 478.112 574.824 L 481.500 574.500 481.759 520.750 L 482.017 467 476.009 467 L 470 467 470 520.481 M 506 472.500 L 506 478 523.990 478 L 541.981 478 542.240 526.250 L 542.500 574.500 545.888 574.824 C 547.752 575.002, 550.339 574.881, 551.638 574.555 L 554 573.962 554 525.981 L 554 478 572 478 L 590 478 590 472.500 L 590 467 548 467 L 506 467 506 472.500 M 776.882 495.381 C 761.288 500.953, 751.054 516.441, 751.033 534.500 C 751.021 544.505, 752.760 551.159, 757.197 558.091 C 761.544 564.882, 766.840 569.562, 773.954 572.899 C 778.925 575.230, 780.698 575.500, 791.052 575.500 C 802.175 575.500, 802.850 575.376, 809.202 572.151 C 812.830 570.310, 817.280 567.274, 819.091 565.406 L 822.383 562.009 819.505 559.005 C 816.023 555.370, 815.328 555.317, 812.055 558.428 C 810.650 559.764, 807.185 562.014, 804.355 563.428 C 797.267 566.971, 785.836 567.068, 778.493 563.649 C 770.358 559.860, 763 549.540, 763 541.917 L 763 539 794.629 539 L 826.258 539 825.550 531.750 C 823.746 513.305, 814.289 499.539, 800.634 495.484 C 794.544 493.675, 781.809 493.620, 776.882 495.381 M 879.479 495.801 C 876.718 496.756, 872.974 498.595, 871.159 499.887 C 867.749 502.315, 860 511.483, 860 513.090 C 860 513.590, 859.550 514, 859 514 C 858.404 514, 858 510.167, 858 504.500 L 858 495 852.489 495 L 846.977 495 847.239 534.750 L 847.500 574.500 850.371 574.828 C 851.950 575.009, 854.312 574.887, 855.621 574.559 L 858 573.962 858.008 557.731 C 858.019 532.940, 859.961 524.477, 867.569 516.055 C 872.208 510.920, 876.731 508.521, 884.465 507.091 C 887.711 506.491, 890.510 506, 890.684 506 C 890.858 506, 891 503.300, 891 500 L 891 494 887.750 494.033 C 885.962 494.051, 882.241 494.847, 879.479 495.801 M 1063.254 495.406 C 1052.866 498.784, 1043.713 507.115, 1038.758 517.703 C 1036.343 522.864, 1035.639 525.933, 1035.232 533.065 C 1034.777 541.042, 1035.015 542.775, 1037.495 549.575 C 1041.117 559.505, 1048.358 567.575, 1057.825 572.232 C 1064.162 575.349, 1064.999 575.500, 1075.984 575.499 C 1085.415 575.498, 1088.268 575.135, 1091.740 573.499 C 1096.383 571.310, 1106.874 563.068, 1106.951 561.548 C 1106.978 561.024, 1105.598 559.149, 1103.884 557.380 L 1100.768 554.166 1095.398 558.540 C 1083.531 568.206, 1068.350 568.342, 1057.599 558.878 C 1051.134 553.188, 1047.806 546.305, 1047.223 537.421 C 1046.354 524.176, 1051.817 513.176, 1062.079 507.504 C 1066.829 504.879, 1068.491 504.508, 1075.500 504.504 C 1084.625 504.499, 1088.355 505.920, 1095.322 512.052 L 1099.692 515.899 1103.596 511.866 L 1107.500 507.833 1103.148 503.940 C 1100.755 501.799, 1096.260 498.807, 1093.161 497.290 C 1088.325 494.924, 1086.105 494.497, 1077.513 494.279 C 1071.054 494.116, 1065.993 494.516, 1063.254 495.406 M 1145.692 495.972 C 1128.444 502.712, 1118.350 521.607, 1121.140 541.935 C 1122.792 553.974, 1129.229 563.986, 1139.500 570.494 C 1146.586 574.983, 1152.218 576.259, 1163.144 575.850 C 1173.893 575.448, 1180.563 572.839, 1188.148 566.068 L 1192.500 562.184 1189.563 559.092 C 1187.948 557.391, 1186.264 556, 1185.822 556 C 1185.379 556, 1182.930 557.593, 1180.378 559.541 C 1173.545 564.757, 1169.785 566, 1160.845 566 C 1151.797 566, 1145.859 563.641, 1140.301 557.839 C 1136.769 554.152, 1133.355 547.136, 1132.836 542.500 L 1132.500 539.500 1163.465 539.235 C 1180.495 539.090, 1194.815 538.585, 1195.286 538.114 C 1196.435 536.965, 1194.389 522.637, 1192.271 517 C 1188.506 506.979, 1180.910 499.379, 1170.967 495.684 C 1164.708 493.359, 1152.010 493.503, 1145.692 495.972 M 1231.139 495.147 C 1220.540 498.198, 1213.998 506.431, 1214.002 516.718 C 1214.005 527.400, 1220.249 533.146, 1237.817 538.634 C 1257.051 544.642, 1260.741 547.438, 1259.698 555.215 C 1258.611 563.317, 1253.155 566.395, 1240.918 565.810 C 1233.175 565.440, 1231.285 564.943, 1224.339 561.446 C 1220.028 559.276, 1216.232 557.373, 1215.904 557.218 C 1215.576 557.063, 1214.133 558.711, 1212.697 560.881 C 1209.683 565.436, 1209.622 565.342, 1218.577 569.876 C 1237.943 579.680, 1258.338 577.548, 1267.030 564.811 C 1270.205 560.158, 1270.500 559.109, 1270.500 552.456 C 1270.500 545.823, 1270.229 544.849, 1267.405 541.343 C 1263.244 536.176, 1258.786 533.799, 1244 528.857 C 1234.505 525.684, 1230.719 523.900, 1228.250 521.440 C 1223.831 517.035, 1223.883 513.189, 1228.425 508.235 L 1231.851 504.500 1241.175 504.500 C 1249.594 504.500, 1251.157 504.811, 1257.266 507.705 L 1264.032 510.910 1266.516 506.975 C 1267.882 504.811, 1269 502.781, 1269 502.465 C 1269 501.467, 1258.748 497.159, 1252.540 495.547 C 1245.951 493.837, 1236.320 493.657, 1231.139 495.147 M 902 495.832 C 902 496.342, 906.547 507.276, 912.104 520.130 C 917.662 532.983, 923.244 545.975, 924.510 549 C 925.775 552.025, 928.469 558.325, 930.496 563 C 932.523 567.675, 934.418 572.288, 934.707 573.250 C 935.124 574.637, 936.358 575, 940.652 575 C 946.070 575, 946.071 574.999, 947.925 570.750 C 961.499 539.637, 979.346 498.105, 979.747 496.699 C 980.208 495.081, 979.630 494.929, 974.075 495.199 L 967.890 495.500 963.617 506 C 961.267 511.775, 955.378 526.288, 950.531 538.250 C 945.684 550.212, 941.444 559.991, 941.109 559.981 C 940.774 559.971, 938.162 554.233, 935.304 547.231 C 932.447 540.229, 926.528 525.725, 922.151 515 L 914.194 495.500 908.097 495.202 C 904.744 495.039, 902 495.322, 902 495.832 M 1000.239 534.720 L 1000.500 574.440 1006 574.470 L 1011.500 574.500 1011.761 534.750 L 1012.023 495 1006 495 L 999.977 495 1000.239 534.720 M 781.881 504.380 C 779.341 505.064, 775.494 507.025, 773.333 508.736 C 768.863 512.276, 764.088 520.922, 763.282 526.935 L 762.737 531 787.809 531 C 804.114 531, 813.107 530.636, 813.526 529.958 C 813.880 529.385, 813.208 525.750, 812.032 521.879 C 809.292 512.858, 803.734 506.889, 795.911 504.566 C 789.736 502.732, 788.076 502.710, 781.881 504.380 M 1151.713 504.384 C 1149.081 505.113, 1145.256 507.052, 1143.213 508.693 C 1139.159 511.951, 1133.209 522.668, 1132.771 527.500 L 1132.500 530.500 1158 530.500 L 1183.500 530.500 1183.178 527 C 1182.719 522, 1178.487 513.182, 1174.904 509.758 C 1169.136 504.245, 1159.924 502.111, 1151.713 504.384 M 173.571 655.571 C 171.484 657.659, 171.584 660.314, 173.829 662.345 C 176.206 664.496, 178.291 664.440, 180.345 662.171 C 184.924 657.111, 178.394 650.749, 173.571 655.571 M 246 685 C 243.731 687.269, 243.565 688.318, 245.035 691.066 C 246.208 693.258, 250.899 693.701, 252.800 691.800 C 254.701 689.899, 254.258 685.208, 252.066 684.035 C 249.318 682.565, 248.269 682.731, 246 685 M 190.750 690.080 C 187.157 692.173, 189.644 699, 194 699 C 196.353 699, 199 696.397, 199 694.084 C 199 692.006, 195.966 688.987, 193.921 689.030 C 193.140 689.047, 191.713 689.519, 190.750 690.080 M 262.750 719.401 C 259.528 721.831, 261.469 729, 265.349 729 C 267.459 729, 271 725.951, 271 724.134 C 271 720.020, 265.849 717.064, 262.750 719.401" stroke="none" fill="#3a71b2" fill-rule="evenodd"/><path d="M 0.103 75.750 C 0.191 141.086, 0.382 150.448, 1.494 143.845 C 3.523 131.791, 7.240 122.527, 14.272 112 C 17.926 106.529, 95.279 28.561, 103 22.565 C 116.788 11.859, 134.455 4.249, 151.785 1.551 C 159.541 0.343, 151.666 0.183, 80.250 0.097 L 0 0 0.103 75.750 M 596.002 78.035 L 517.505 156 353.393 156 L 189.282 156 159.891 185.168 C 143.726 201.210, 128.269 216.102, 125.542 218.261 C 113.317 227.941, 95.503 234, 79.267 234 C 39.956 234, 8.256 207.499, 1.518 169 C 0.420 162.728, 0.188 213.133, 0.103 476.750 L 0 792 93.700 792 C 166.578 792, 187.133 791.733, 186.200 790.800 C 183.247 787.847, 185.326 785.222, 211 759.481 C 236.630 733.784, 238.732 731.132, 235.800 728.200 C 232.974 725.374, 230.272 727.381, 210.500 747 C 199.414 758, 189.661 767, 188.827 767 C 186.054 767, 183.834 763.553, 184.893 760.890 C 185.415 759.575, 198.683 745.698, 214.376 730.052 L 242.909 701.604 247.050 701.848 C 253.246 702.214, 257.695 700.343, 260.521 696.183 C 268.361 684.646, 256.363 670.363, 243.440 675.848 C 237.798 678.242, 234.301 686.077, 236.090 692.314 C 236.997 695.476, 236.864 695.626, 203.250 729.275 C 184.688 747.857, 168.482 763.322, 167.237 763.642 C 165.992 763.962, 164.305 763.668, 163.487 762.989 C 160.151 760.221, 161.888 757.587, 177 742.500 C 191.821 727.703, 193.635 725.035, 190.800 722.200 C 187.896 719.296, 185.238 721.357, 162.021 744.500 C 146.521 759.951, 137.740 768, 136.384 768 C 134.055 768, 131.757 764.012, 132.962 762.062 C 133.388 761.372, 145.806 748.710, 160.559 733.923 L 187.381 707.037 191.088 707.630 C 202.368 709.434, 211.210 698.210, 206.336 688.272 C 202.769 680.995, 194.895 678.156, 187.784 681.582 C 182.402 684.175, 180.504 687.596, 180.469 694.770 L 180.438 701.040 163.469 718.085 C 154.136 727.459, 145.713 735.566, 144.750 736.100 C 142.130 737.553, 139 735.484, 139 732.299 C 139 730.225, 142.911 725.721, 157.460 711.040 C 172.861 695.500, 175.824 692.045, 175.341 690.195 C 175.014 688.945, 173.691 687.710, 172.308 687.362 C 170.186 686.830, 168.193 688.389, 157.588 698.873 C 148.172 708.182, 144.712 711, 142.696 711 C 140.352 711, 138 708.687, 138 706.382 C 138 705.970, 145.537 698.046, 154.750 688.773 C 171.347 672.067, 171.533 671.919, 175.123 672.523 C 179.480 673.256, 184.505 671.337, 187.917 667.637 C 189.666 665.740, 190.458 663.516, 190.784 659.594 C 191.213 654.414, 191.060 653.987, 187.329 649.987 C 184.134 646.562, 182.601 645.709, 178.878 645.290 C 168.895 644.165, 160.635 653.776, 163.794 662.839 C 164.765 665.625, 164.379 666.151, 153.136 677.365 C 140.687 689.781, 137.964 691.211, 135.803 686.467 C 134.750 684.157, 135.022 683.554, 138.881 679.621 C 141.874 676.572, 143.669 673.525, 145.008 669.223 C 147.447 661.386, 152.230 651.943, 156.998 645.554 C 159.072 642.774, 174.096 627.042, 190.384 610.594 L 220 580.687 220 472.591 L 220 364.495 298.010 286.498 L 376.020 208.500 375.760 414.500 L 375.500 620.500 373.310 628.175 C 369.886 640.175, 365.408 650.029, 358.868 659.956 C 353.930 667.452, 346.158 675.777, 315.673 706.226 C 266.728 755.113, 266.929 754.931, 254.860 760.973 C 249.337 763.738, 244.289 766, 243.642 766 C 242.994 766, 237.755 770.725, 232 776.500 C 221.664 786.871, 218.899 788.499, 216.200 785.800 C 213.252 782.852, 215.227 780.256, 236.911 758.589 L 258.822 736.695 265.489 736.597 C 271.837 736.505, 272.315 736.325, 275.517 732.831 C 279.877 728.072, 280.807 723.312, 278.353 718.307 C 273.329 708.057, 259.823 707.078, 253.975 716.540 C 252.183 719.440, 251.855 721.121, 252.264 725.314 L 252.770 730.500 221.635 761.234 L 190.500 791.968 735.500 791.734 L 1280.500 791.500 1280.813 557 C 1280.985 428.025, 1280.817 249.938, 1280.440 161.250 L 1279.754 -0 977.127 0.035 L 674.500 0.071 596.002 78.035 M 0.494 477 C 0.494 650.525, 0.609 721.513, 0.750 634.750 C 0.891 547.988, 0.891 406.013, 0.750 319.250 C 0.609 232.488, 0.494 303.475, 0.494 477 M 746.242 369.038 L 746.500 425.140 757.637 425.320 L 768.773 425.500 769.191 399.500 C 769.533 378.215, 769.898 372.956, 771.202 370.498 C 773.953 365.314, 776.593 363.656, 782.787 363.223 C 787.556 362.889, 789.079 363.215, 792 365.196 C 797.430 368.878, 797.880 371.495, 797.944 399.750 L 798 425 810 425 L 822 425 822 397.684 C 822 361.456, 820.751 355.223, 811.993 347.726 C 801.804 339.004, 783.306 339.899, 773.936 349.566 C 772.105 351.455, 770.289 353, 769.899 353 C 769.510 353, 769.163 344.113, 769.129 333.250 L 769.068 313.500 757.526 313.218 L 745.983 312.936 746.242 369.038 M 1182 368.939 L 1182 424.879 1193.587 425.189 C 1199.960 425.360, 1205.360 425.313, 1205.587 425.083 C 1205.814 424.854, 1206 419.208, 1206 412.536 L 1206 400.406 1209.792 396.703 C 1211.878 394.666, 1213.827 393, 1214.124 393 C 1214.420 393, 1216.030 395.137, 1217.701 397.750 C 1219.371 400.363, 1223.991 407.563, 1227.968 413.750 L 1235.198 425 1245.599 425.125 C 1251.319 425.194, 1257.237 425.286, 1258.750 425.330 C 1260.312 425.375, 1261.401 424.916, 1261.271 424.267 C 1261.145 423.640, 1256.839 416.685, 1251.703 408.813 C 1233.613 381.088, 1231.010 377.029, 1230.756 376.146 C 1230.615 375.656, 1237.403 367.998, 1245.841 359.128 L 1261.181 343 1247.166 343 L 1233.150 343 1219.825 357.580 L 1206.500 372.160 1206.235 342.580 L 1205.970 313 1193.985 313 L 1182 313 1182 368.939 M 868.389 317.423 C 856.681 320.095, 848.586 326.102, 843.923 335.577 C 841.883 339.724, 841.511 341.919, 841.563 349.500 C 841.637 360.049, 843.405 364.423, 850.008 370.388 C 855.173 375.055, 860.359 377.352, 875 381.459 C 891.584 386.112, 895.746 388.147, 897.563 392.496 C 898.903 395.705, 898.893 396.424, 897.459 399.445 C 895.343 403.904, 891.231 405.507, 882 405.471 C 872.678 405.434, 865.878 403.199, 857.372 397.376 L 850.955 392.982 847.869 396.496 C 846.172 398.429, 843.029 402.215, 840.883 404.909 L 836.983 409.808 840.047 412.386 C 857.361 426.955, 889.738 431.376, 906.629 421.477 C 912.488 418.043, 918.594 410.739, 920.565 404.803 C 922.854 397.913, 922.175 385.107, 919.217 379.376 C 914.998 371.203, 906.192 366.122, 886.465 360.480 C 879.334 358.440, 872.290 356.150, 870.811 355.391 C 861.900 350.819, 863.574 340.604, 873.649 338.067 C 880.844 336.255, 891.896 338.799, 900.744 344.304 C 902.810 345.589, 905.015 346.944, 905.645 347.314 C 906.346 347.727, 909.195 344.476, 912.995 338.928 C 920.111 328.538, 920.406 329.667, 909 323.618 C 896.985 317.245, 880.311 314.702, 868.389 317.423 M 475 329 L 475 340 491.489 340 L 507.979 340 508.239 382.750 C 508.483 422.753, 508.612 425.492, 510.250 425.375 C 511.212 425.306, 516.500 425.194, 522 425.125 L 532 425 532 382.500 L 532 340 548 340 L 564 340 564 329 L 564 318 519.500 318 L 475 318 475 329 M 943.495 323.250 C 943.252 323.938, 943.153 328.663, 943.276 333.751 L 943.500 343.002 938.750 343.001 L 934 343 934 353 L 934 363 938.750 363.003 L 943.500 363.007 943.500 386.253 C 943.500 412.476, 944.271 416.397, 950.505 421.870 C 956.620 427.239, 969.850 428.345, 981.250 424.439 L 986 422.812 986 413.299 C 986 404.639, 985.843 403.849, 984.250 404.486 C 983.288 404.871, 979.970 405.426, 976.877 405.720 C 972.054 406.179, 970.952 405.952, 969.127 404.127 C 967.103 402.103, 967 401.056, 967 382.500 L 967 363 976.500 363 L 986 363 986 353 L 986 343 976.500 343 L 967 343 967 332.500 L 967 322 955.469 322 C 947.146 322, 943.814 322.348, 943.495 323.250 M 594.638 342.128 C 581.968 343.918, 570.720 351.998, 565.211 363.266 C 554.970 384.214, 560.564 408.652, 578.212 420.058 C 586.606 425.484, 590.674 426.500, 604 426.500 C 614.482 426.500, 616.025 426.254, 621.430 423.723 C 628.154 420.574, 636 414.537, 636 412.513 C 636 411.769, 633.204 408.669, 629.786 405.624 L 623.572 400.089 620.286 402.596 C 615.170 406.497, 610.600 408, 603.848 408 C 595.756 408, 590.373 405.428, 586.741 399.827 C 581.431 391.637, 580.236 392, 612.500 392 L 641 392 641 385.549 C 641 356.748, 621.358 338.352, 594.638 342.128 M 1127.992 342.001 C 1108.384 344.435, 1094.238 358.123, 1091.119 377.684 C 1088.121 396.478, 1097.584 414.813, 1114.561 423.108 C 1121.320 426.410, 1121.824 426.498, 1134 426.499 C 1146.030 426.500, 1146.745 426.380, 1153 423.311 C 1156.575 421.557, 1161.287 418.286, 1163.472 416.042 L 1167.443 411.962 1160.719 405.238 C 1154.884 399.402, 1153.764 398.676, 1152.247 399.741 C 1143.973 405.553, 1141.486 406.500, 1134.500 406.500 C 1127.602 406.500, 1124.207 405.147, 1119.366 400.470 C 1114.581 395.847, 1112.500 383.672, 1115.166 375.899 C 1120.168 361.321, 1137.193 357.328, 1149.242 367.908 L 1152.559 370.820 1159.280 363.488 C 1162.976 359.455, 1166 355.717, 1166 355.181 C 1166 353.739, 1159.508 348.300, 1155.107 346.054 C 1148.059 342.459, 1137.284 340.848, 1127.992 342.001 M 684.500 343.351 C 668.451 348.645, 657.493 361.492, 654.928 378.023 C 652.032 396.693, 661.812 415.279, 678.759 423.307 C 685.227 426.371, 686.006 426.500, 698 426.488 C 709.642 426.478, 710.892 426.285, 716.215 423.682 C 719.359 422.145, 724.084 418.925, 726.715 416.526 L 731.500 412.165 724.682 405.380 C 718.916 399.643, 717.604 398.775, 716.182 399.755 C 707.475 405.756, 705.516 406.500, 698.427 406.500 C 692.381 406.500, 690.748 406.100, 687.191 403.745 C 681.300 399.846, 678 392.993, 678 384.655 C 678 370.945, 685.894 362, 697.993 362 C 703.447 362, 711.035 365.163, 714.331 368.810 C 716.147 370.820, 716.214 370.781, 722.831 363.819 C 726.499 359.959, 729.636 356.220, 729.802 355.510 C 730.213 353.753, 722.443 347.538, 716.420 344.807 C 712.412 342.989, 709.369 342.525, 700 342.304 C 692.469 342.126, 687.119 342.487, 684.500 343.351 M 1023.757 343.034 C 1016.644 344.231, 1006 348.004, 1006 349.328 C 1006 349.969, 1007.176 354.025, 1008.614 358.341 C 1010.933 365.304, 1011.468 366.133, 1013.364 365.688 C 1034.855 360.646, 1041.421 360.854, 1047.764 366.779 C 1050.411 369.252, 1052.949 376.384, 1051.645 377.688 C 1051.379 377.954, 1047.967 377.395, 1044.062 376.446 C 1024.483 371.687, 1003.526 379.234, 999.862 392.362 C 995.700 407.277, 1001.843 420.284, 1015.280 425.007 C 1025.721 428.677, 1038.474 427.061, 1046.828 421.010 C 1049.113 419.354, 1051.212 418, 1051.491 418 C 1051.771 418, 1052 419.575, 1052 421.500 L 1052 425 1063 425 L 1074 425 1074 396.682 C 1074 365.154, 1073.521 361.929, 1067.666 354 C 1060.430 344.202, 1042.870 339.816, 1023.757 343.034 M 596 361.136 C 591.256 362.515, 586.388 367.413, 584.628 372.578 C 583.829 374.923, 583.436 377.102, 583.754 377.421 C 584.073 377.739, 591.965 378, 601.292 378 L 618.250 378 617.603 374.766 C 616.718 370.340, 612.590 364.357, 609.220 362.614 C 605.212 360.541, 600.036 359.963, 596 361.136 M 1028 391.178 C 1022.457 394.038, 1020.357 397.868, 1021.615 402.823 C 1022.974 408.173, 1026.894 410.516, 1034.324 410.419 C 1044.650 410.284, 1050.956 405.516, 1051.751 397.242 C 1052.175 392.832, 1051.996 392.319, 1049.663 391.256 C 1048.259 390.617, 1043.824 389.815, 1039.806 389.475 C 1033.396 388.932, 1031.948 389.141, 1028 391.178 M 1000 471.500 L 1000 478 1006.500 478 L 1013 478 1013 471.500 L 1013 465 1006.500 465 L 1000 465 1000 471.500 M 679.500 467.402 C 664.447 472.175, 656.460 482.133, 656.561 496 C 656.616 503.555, 659.606 510.641, 664.479 514.764 C 669.235 518.787, 678.826 522.840, 690.113 525.596 C 711.794 530.891, 718.705 534.932, 719.922 543.027 C 722.303 558.863, 710.519 567.169, 688.941 564.864 C 680.793 563.993, 672.097 560.300, 664.546 554.504 L 659.592 550.702 655.806 554.968 L 652.020 559.235 655.760 562.215 C 666.723 570.951, 677.681 575.019, 692.206 575.744 C 701.451 576.206, 703.849 575.978, 709.780 574.071 C 724.462 569.350, 732.343 559.444, 732.323 545.734 C 732.299 528.677, 723.771 521.738, 693.177 513.883 C 676.447 509.588, 670.920 506.131, 668.923 498.714 C 665.050 484.331, 679.962 473.595, 699.094 476.993 C 705.518 478.134, 718.910 483.982, 721.076 486.591 C 722.022 487.732, 722.871 487.146, 725.764 483.358 L 729.296 478.732 726.898 476.829 C 723.013 473.747, 712.888 468.806, 707.500 467.363 C 701.255 465.690, 684.826 465.713, 679.500 467.402 M 470 520.481 L 470 573.962 472.362 574.555 C 473.661 574.881, 476.248 575.002, 478.112 574.824 L 481.500 574.500 481.759 520.750 L 482.017 467 476.009 467 L 470 467 470 520.481 M 506 472.500 L 506 478 523.990 478 L 541.981 478 542.240 526.250 L 542.500 574.500 545.888 574.824 C 547.752 575.002, 550.339 574.881, 551.638 574.555 L 554 573.962 554 525.981 L 554 478 572 478 L 590 478 590 472.500 L 590 467 548 467 L 506 467 506 472.500 M 776.882 495.381 C 761.288 500.953, 751.054 516.441, 751.033 534.500 C 751.021 544.505, 752.760 551.159, 757.197 558.091 C 761.544 564.882, 766.840 569.562, 773.954 572.899 C 778.925 575.230, 780.698 575.500, 791.052 575.500 C 802.175 575.500, 802.850 575.376, 809.202 572.151 C 812.830 570.310, 817.280 567.274, 819.091 565.406 L 822.383 562.009 819.505 559.005 C 816.023 555.370, 815.328 555.317, 812.055 558.428 C 810.650 559.764, 807.185 562.014, 804.355 563.428 C 797.267 566.971, 785.836 567.068, 778.493 563.649 C 770.358 559.860, 763 549.540, 763 541.917 L 763 539 794.629 539 L 826.258 539 825.550 531.750 C 823.746 513.305, 814.289 499.539, 800.634 495.484 C 794.544 493.675, 781.809 493.620, 776.882 495.381 M 879.479 495.801 C 876.718 496.756, 872.974 498.595, 871.159 499.887 C 867.749 502.315, 860 511.483, 860 513.090 C 860 513.590, 859.550 514, 859 514 C 858.404 514, 858 510.167, 858 504.500 L 858 495 852.489 495 L 846.977 495 847.239 534.750 L 847.500 574.500 850.371 574.828 C 851.950 575.009, 854.312 574.887, 855.621 574.559 L 858 573.962 858.008 557.731 C 858.019 532.940, 859.961 524.477, 867.569 516.055 C 872.208 510.920, 876.731 508.521, 884.465 507.091 C 887.711 506.491, 890.510 506, 890.684 506 C 890.858 506, 891 503.300, 891 500 L 891 494 887.750 494.033 C 885.962 494.051, 882.241 494.847, 879.479 495.801 M 1063.254 495.406 C 1052.866 498.784, 1043.713 507.115, 1038.758 517.703 C 1036.343 522.864, 1035.639 525.933, 1035.232 533.065 C 1034.777 541.042, 1035.015 542.775, 1037.495 549.575 C 1041.117 559.505, 1048.358 567.575, 1057.825 572.232 C 1064.162 575.349, 1064.999 575.500, 1075.984 575.499 C 1085.415 575.498, 1088.268 575.135, 1091.740 573.499 C 1096.383 571.310, 1106.874 563.068, 1106.951 561.548 C 1106.978 561.024, 1105.598 559.149, 1103.884 557.380 L 1100.768 554.166 1095.398 558.540 C 1083.531 568.206, 1068.350 568.342, 1057.599 558.878 C 1051.134 553.188, 1047.806 546.305, 1047.223 537.421 C 1046.354 524.176, 1051.817 513.176, 1062.079 507.504 C 1066.829 504.879, 1068.491 504.508, 1075.500 504.504 C 1084.625 504.499, 1088.355 505.920, 1095.322 512.052 L 1099.692 515.899 1103.596 511.866 L 1107.500 507.833 1103.148 503.940 C 1100.755 501.799, 1096.260 498.807, 1093.161 497.290 C 1088.325 494.924, 1086.105 494.497, 1077.513 494.279 C 1071.054 494.116, 1065.993 494.516, 1063.254 495.406 M 1145.692 495.972 C 1128.444 502.712, 1118.350 521.607, 1121.140 541.935 C 1122.792 553.974, 1129.229 563.986, 1139.500 570.494 C 1146.586 574.983, 1152.218 576.259, 1163.144 575.850 C 1173.893 575.448, 1180.563 572.839, 1188.148 566.068 L 1192.500 562.184 1189.563 559.092 C 1187.948 557.391, 1186.264 556, 1185.822 556 C 1185.379 556, 1182.930 557.593, 1180.378 559.541 C 1173.545 564.757, 1169.785 566, 1160.845 566 C 1151.797 566, 1145.859 563.641, 1140.301 557.839 C 1136.769 554.152, 1133.355 547.136, 1132.836 542.500 L 1132.500 539.500 1163.465 539.235 C 1180.495 539.090, 1194.815 538.585, 1195.286 538.114 C 1196.435 536.965, 1194.389 522.637, 1192.271 517 C 1188.506 506.979, 1180.910 499.379, 1170.967 495.684 C 1164.708 493.359, 1152.010 493.503, 1145.692 495.972 M 1231.139 495.147 C 1220.540 498.198, 1213.998 506.431, 1214.002 516.718 C 1214.005 527.400, 1220.249 533.146, 1237.817 538.634 C 1257.051 544.642, 1260.741 547.438, 1259.698 555.215 C 1258.611 563.317, 1253.155 566.395, 1240.918 565.810 C 1233.175 565.440, 1231.285 564.943, 1224.339 561.446 C 1220.028 559.276, 1216.232 557.373, 1215.904 557.218 C 1215.576 557.063, 1214.133 558.711, 1212.697 560.881 C 1209.683 565.436, 1209.622 565.342, 1218.577 569.876 C 1237.943 579.680, 1258.338 577.548, 1267.030 564.811 C 1270.205 560.158, 1270.500 559.109, 1270.500 552.456 C 1270.500 545.823, 1270.229 544.849, 1267.405 541.343 C 1263.244 536.176, 1258.786 533.799, 1244 528.857 C 1234.505 525.684, 1230.719 523.900, 1228.250 521.440 C 1223.831 517.035, 1223.883 513.189, 1228.425 508.235 L 1231.851 504.500 1241.175 504.500 C 1249.594 504.500, 1251.157 504.811, 1257.266 507.705 L 1264.032 510.910 1266.516 506.975 C 1267.882 504.811, 1269 502.781, 1269 502.465 C 1269 501.467, 1258.748 497.159, 1252.540 495.547 C 1245.951 493.837, 1236.320 493.657, 1231.139 495.147 M 902 495.832 C 902 496.342, 906.547 507.276, 912.104 520.130 C 917.662 532.983, 923.244 545.975, 924.510 549 C 925.775 552.025, 928.469 558.325, 930.496 563 C 932.523 567.675, 934.418 572.288, 934.707 573.250 C 935.124 574.637, 936.358 575, 940.652 575 C 946.070 575, 946.071 574.999, 947.925 570.750 C 961.499 539.637, 979.346 498.105, 979.747 496.699 C 980.208 495.081, 979.630 494.929, 974.075 495.199 L 967.890 495.500 963.617 506 C 961.267 511.775, 955.378 526.288, 950.531 538.250 C 945.684 550.212, 941.444 559.991, 941.109 559.981 C 940.774 559.971, 938.162 554.233, 935.304 547.231 C 932.447 540.229, 926.528 525.725, 922.151 515 L 914.194 495.500 908.097 495.202 C 904.744 495.039, 902 495.322, 902 495.832 M 1000.239 534.720 L 1000.500 574.440 1006 574.470 L 1011.500 574.500 1011.761 534.750 L 1012.023 495 1006 495 L 999.977 495 1000.239 534.720 M 781.881 504.380 C 779.341 505.064, 775.494 507.025, 773.333 508.736 C 768.863 512.276, 764.088 520.922, 763.282 526.935 L 762.737 531 787.809 531 C 804.114 531, 813.107 530.636, 813.526 529.958 C 813.880 529.385, 813.208 525.750, 812.032 521.879 C 809.292 512.858, 803.734 506.889, 795.911 504.566 C 789.736 502.732, 788.076 502.710, 781.881 504.380 M 1151.713 504.384 C 1149.081 505.113, 1145.256 507.052, 1143.213 508.693 C 1139.159 511.951, 1133.209 522.668, 1132.771 527.500 L 1132.500 530.500 1158 530.500 L 1183.500 530.500 1183.178 527 C 1182.719 522, 1178.487 513.182, 1174.904 509.758 C 1169.136 504.245, 1159.924 502.111, 1151.713 504.384 M 173.571 655.571 C 171.484 657.659, 171.584 660.314, 173.829 662.345 C 176.206 664.496, 178.291 664.440, 180.345 662.171 C 184.924 657.111, 178.394 650.749, 173.571 655.571 M 246 685 C 243.731 687.269, 243.565 688.318, 245.035 691.066 C 246.208 693.258, 250.899 693.701, 252.800 691.800 C 254.701 689.899, 254.258 685.208, 252.066 684.035 C 249.318 682.565, 248.269 682.731, 246 685 M 190.750 690.080 C 187.157 692.173, 189.644 699, 194 699 C 196.353 699, 199 696.397, 199 694.084 C 199 692.006, 195.966 688.987, 193.921 689.030 C 193.140 689.047, 191.713 689.519, 190.750 690.080 M 262.750 719.401 C 259.528 721.831, 261.469 729, 265.349 729 C 267.459 729, 271 725.951, 271 724.134 C 271 720.020, 265.849 717.064, 262.750 719.401" stroke="none" fill="#fbfbfb" fill-rule="evenodd"/></svg>        
  );
}

export default Logo;