import { Plant1Model, Plant2Model, Plant4Model, Plant5Model, Plant7Model, Stone10Model, Stone11Model, Stone13Model, Stone14Model, Stone15Model, Stone16Model, Stone18Model, Stone20Model, Stone2Model, Stone3Model, Stone4Model, Stone7Model, Stone8Model, Stone9Model, Tree1Model, Tree2Model, Tree3Model, Tree4Model, Tree5Model } from '../../assets/meshes'

export default () => {
  return {
    tree1: {
      name: 'tree1',
      mesh: Tree1Model,
      scaleRatio: 0.169884,
      position: { z: 0, x: 0.245187, y: 5.28928 },
      clones: {
        1: { position: { z: -14.4242, x: -2.83575, y: 5.04581 } },
        2: { position: { z: -7.75535, x: 22.9944, y: 5.04581 } },
        3: { position: { z: -12.2822, x: 16.2127, y: 5.28928 } },
        4: { position: { z: -8.46063, x: -6.61735, y: 5.28498 } },
        5: { position: { z: -13.6783, x: 1.62371, y: 5.28498 } },
        6: { position: { z: -19.0966, x: -0.79713, y: 5.04581 } },
        7: { position: { z: 9.5053, x: 4.13337, y: 5.13622 } },
        8: { position: { z: 3.12103, x: 19.4932, y: 5.09947 } },
        9: { position: { z: 2.10734, x: 12.2868, y: 5.04581 } },
        10: { position: { z: -20.4184, x: 8.35148, y: 5.02793 } },
        11: { position: { z: -2.63256, x: 0.561242, y: 5.28498 } },
        12: { position: { z: -4.46262, x: -2.83575, y: 5.30888 } },
        13: { position: { z: -6.60174, x: -1.06995, y: 5.40437 } },
        14: { position: { z: -8.75323, x: 1.48275, y: 5.40836 } },
        15: { position: { z: 0.48834, x: 4.65396, y: 5.13622 } },
        16: { position: { z: -1.97011, x: -3.9029, y: 5.29553 } },
        17: { position: { z: -3.55991, x: -3.58029, y: 5.30888 } },
        18: { position: { z: -5.62353, x: 0.894694, y: 5.44063 } },
        19: { position: { z: -8.75323, x: 2.66798, y: 5.40836 } },
        20: { position: { z: -6.45164, x: 3.64461, y: 5.40836 } },
        21: { position: { z: -8.54865, x: 4.48584, y: 5.28498 } },
        22: { position: { z: -3.49558, x: -0.999082, y: 5.28498 } },
        23: { position: { z: -2.67399, x: 8.65162, y: 5.28928 } },
        24: { position: { z: -5.01252, x: 8.7734, y: 5.40836 } },
        25: { position: { z: -3.80086, x: -7.50587, y: 5.13622 } }
      }
    },
    tree2: {
      name: 'tree_2',
      mesh: Tree2Model,
      scaleRatio: 0.159311,
      position: { z: 8.25919, x: 9.041, y: 5.02176 },
      clones: {
        1: { position: { z: 5.32306, x: 22.5974, y: 7.27576 } },
        2: { position: { z: -14.4242, x: -3.65443, y: 5.03023 } },
        3: { position: { z: -6.96285, x: 22.789, y: 5.03023 } },
        4: { position: { z: -12.7783, x: 15.5358, y: 5.2737 } },
        5: { position: { z: -13.2723, x: 16.0611, y: 5.2737 } },
        6: { position: { z: -8.48687, x: -5.61599, y: 5.2694 } },
        7: { position: { z: -9.06998, x: -6.04021, y: 5.2694 } },
        8: { position: { z: -14.2877, x: 2.20086, y: 5.2694 } },
        9: { position: { z: -13.7046, x: 2.62507, y: 5.2694 } },
        10: { position: { z: -18.9083, x: -0.000404, y: 5.03023 } },
        11: { position: { z: -9.74449, x: 10.871, y: 5.2694 } },
        12: { position: { z: 10.1355, x: 4.68763, y: 5.12065 } },
        13: { position: { z: 10.5049, x: 4.0683, y: 5.12065 } },
        14: { position: { z: 3.82076, x: 19.0682, y: 5.18993 } },
        15: { position: { z: -10.6682, x: 19.3701, y: 5.2694 } },
        16: { position: { z: 1.55295, x: 11.6844, y: 5.03023 } },
        17: { position: { z: -20.4447, x: 9.35284, y: 5.01235 } },
        18: { position: { z: -21.0278, x: 8.92863, y: 5.01235 } },
        19: { position: { z: -4.46262, x: -3.65443, y: 5.29331 } },
        20: { position: { z: -2.6588, x: 1.56261, y: 5.2694 } },
        21: { position: { z: -7.12347, x: -0.439043, y: 5.38879 } },
        22: { position: { z: -8.41495, x: 0.539893, y: 5.39279 } },
        23: { position: { z: -7.99387, x: 1.12528, y: 5.39279 } },
        24: { position: { z: -8.62789, x: 7.15033, y: 5.2694 } },
        25: { position: { z: -9.78903, x: 5.79724, y: 5.2694 } },
        26: { position: { z: 0.365301, x: 5.64808, y: 5.12065 } },
        27: { position: { z: -0.174014, x: 5.16942, y: 5.12065 } },
        28: { position: { z: -2.17683, x: -3.08946, y: 5.27995 } },
        29: { position: { z: -1.45727, x: -3.04242, y: 5.2694 } },
        30: { position: { z: -3.55991, x: -4.39898, y: 5.29331 } },
        31: { position: { z: -8.14776, x: 6.62365, y: 5.2694 } },
        32: { position: { z: -5.64977, x: 1.89606, y: 5.42506 } },
        33: { position: { z: -6.23288, x: 1.47184, y: 5.42506 } },
        34: { position: { z: -7.99387, x: 2.31051, y: 5.39279 } },
        35: { position: { z: -7.26745, x: 3.84177, y: 5.39279 } },
        36: { position: { z: -6.97295, x: 4.49998, y: 5.39279 } },
        37: { position: { z: -9.11005, x: 5.31544, y: 5.2694 } },
        38: { position: { z: -9.37291, x: 4.64396, y: 5.2694 } },
        39: { position: { z: -0.409929, x: 2.30211, y: 5.2737 } },
        40: { position: { z: -1.54129, x: -0.672402, y: 5.2694 } },
        41: { position: { z: -7.91086, x: 3.26608, y: 5.39279 } },
        42: { position: { z: -1.88589, x: 9.26994, y: 5.2737 } },
        43: { position: { z: -2.57418, x: 9.48496, y: 5.2737 } },
        44: { position: { z: -1.56129, x: -5.24051, y: 5.39279 } },
        45: { position: { z: -1.16093, x: -5.84026, y: 5.23496 } },
        46: { position: { z: -2.21551, x: -7.9317, y: 5.19716 } },
        47: { position: { z: -2.74736, x: -8.41864, y: 5.16691 } },
        48: { position: { z: -2.82017, x: -7.30174, y: 5.12065 } },
        49: { position: { z: -3.34144, x: -6.80348, y: 5.12065 } },
        50: { position: { z: 0.386416, x: 6.86382, y: 5.2694 } }
      }
    },
    tree3: {
      name: 'tree_3',
      mesh: Tree3Model,
      scaleRatio: 0.17195,
      position: { z: 7.99686, x: 7.98744, y: 4.97849 },
      clones: {
        1: { position: { z: -12.2784, x: 14.6196, y: 5.30761 } },
        2: { position: { z: -10.0417, x: -6.42133, y: 5.30331 } },
        3: { position: { z: -7.04531, x: 16.677, y: 5.40544 } },
        4: { position: { z: -7.07231, x: 11.8461, y: 5.42056 } },
        5: { position: { z: 9.8445, x: 5.68997, y: 5.15456 } },
        6: { position: { z: -9.4953, x: 17.2775, y: 5.3649 } },
        7: { position: { z: -10.1245, x: 19.5553, y: 5.30446 } },
        8: { position: { z: 8.74997, x: 8.65154, y: 4.97849 } },
        9: { position: { z: 14.9448, x: 6.57962, y: 7.16097 } },
        10: { position: { z: -5.14208, x: 9.44178, y: 5.42056 } },
        11: { position: { z: -4.21358, x: 0.75727, y: 5.30331 } },
        12: { position: { z: -6.53216, x: 8.39493, y: 5.42056 } },
        13: { position: { z: -3.20182, x: -2.89247, y: 5.30331 } },
        14: { position: { z: -7.38743, x: 6.70025, y: 5.42056 } },
        15: { position: { z: -3.86661, x: 2.18479, y: 5.30761 } },
        16: { position: { z: 0.080851, x: 1.91265, y: 4.97849 } },
        17: { position: { z: -0.672262, x: 1.24856, y: 4.97849 } },
        18: { position: { z: -3.45964, x: 10.0376, y: 5.30761 } },
        19: { position: { z: -1.2737, x: 3.43652, y: 4.97849 } },
        20: { position: { z: -2.02681, x: 2.77243, y: 4.97849 } }
      }
    },
    tree4: {
      name: 'tree_4',
      mesh: Tree4Model,
      scaleRatio: 0.17195,
      position: { z: -4.69189, x: -10.3555, y: 5.05029 },
      clones: {
        1: { position: { z: 6.01407, x: -0.377798, y: 5.05029 } },
        2: { position: { z: -4.00003, x: -0.260216, y: 5.05029 } },
        3: { position: { z: -0.566624, x: -5.17516, y: 5.05029 } },
        4: { position: { z: -4.62879, x: -0.979241, y: 5.33882 } },
        5: { position: { z: -0.315786, x: 6.73594, y: 5.05029 } },
        6: { position: { z: -7.76149, x: 5.51406, y: 5.05029 } },
        7: { position: { z: -1.47758, x: 7.69835, y: 5.33882 } },
        8: { position: { z: -0.848822, x: 8.41737, y: 5.05029 } },
        9: { position: { z: -1.36823, x: -2.13871, y: 5.05029 } },
        10: { position: { z: -3.45423, x: -1.96262, y: 5.05029 } },
        11: { position: { z: 1.18849, x: 5.99988, y: 5.05029 } },
        12: { position: { z: -5.13467, x: -3.50787, y: 5.05029 } }
      }
    },
    tree5: {
      name: 'tree_5',
      mesh: Tree5Model,
      scaleRatio: 0.17195,
      position: { z: 0.881225, x: -2.90709, y: 5.24769 },
      clones: {
        1: { position: { z: -14.9938, x: -2.73745, y: 5.30466 } },
        2: { position: { z: -7.67297, x: 22.4677, y: 5.30466 } },
        3: { position: { z: -17.0878, x: -4.9955, y: 5.11883 } },
        4: { position: { z: -18.5649, x: -1.02383, y: 5.30466 } },
        5: { position: { z: -7.63015, x: 16.9379, y: 5.40249 } },
        6: { position: { z: -6.91834, x: 12.4677, y: 5.4176 } },
        7: { position: { z: -10.8239, x: 11.9876, y: 5.38758 } },
        8: { position: { z: 2.61759, x: 21.7349, y: 5.31189 } },
        9: { position: { z: -6.35852, x: 11.9876, y: 5.38758 } },
        10: { position: { z: 12.4175, x: 0.820755, y: 5.10121 } },
        11: { position: { z: 1.60389, x: 12.4622, y: 5.15127 } },
        12: { position: { z: -3.06955, x: 1.20829, y: 5.24769 } },
        13: { position: { z: -5.03221, x: -2.73745, y: 5.30466 } },
        14: { position: { z: -6.10015, x: -0.782705, y: 5.48141 } },
        15: { position: { z: -6.40735, x: 0.060547, y: 5.31745 } },
        16: { position: { z: 0.124843, x: 8.65976, y: 5.17173 } },
        17: { position: { z: -7.2192, x: 8.15514, y: 5.38758 } },
        18: { position: { z: -6.59781, x: 7.75793, y: 5.4176 } },
        19: { position: { z: -3.06955, x: 1.20829, y: 5.24769 } },
        20: { position: { z: -5.80894, x: 2.18269, y: 5.36767 } },
        21: { position: { z: -1.76015, x: -5.68392, y: 5.24769 } },
        22: { position: { z: -1.79704, x: 0.048798, y: 5.24769 } },
        23: { position: { z: -9.28812, x: 3.82319, y: 5.11883 } },
        24: { position: { z: -2.55948, x: -1.28962, y: 5.24769 } },
        25: { position: { z: -4.23685, x: 8.65976, y: 5.39253 } },
        26: { position: { z: -0.886366, x: 7.8602, y: 5.24238 } },
        27: { position: { z: -1.96333, x: -2.12823, y: 5.24769 } },
        28: { position: { z: -2.4916, x: 2.13183, y: 5.24769 } },
        29: { position: { z: -5.43055, x: -1.69973, y: 5.31189 } },
        30: { position: { z: -2.90101, x: -4.27889, y: 5.24769 } }
      }
    },
    // stone1: {
    //   name: 'stone_1',
    //   mesh: Stone1Model,
    //   scaleRatio: { z: 0.368277, x: 0.899137, y: 0.601664 },
    //   position: { z: 5.45584, x: 22.9282, y: 7.83546 }
    // },
    stone2: {
      name: 'stone_2',
      mesh: Stone2Model,
      scaleRatio: { z: 0.238021, x: -0.283684, y: 0.31826 },
      position: { z: 3.92005, x: -7.60588, y: 5.49078 },
      clones: {
        1: { position: { z: 7.67981, x: 16.5005, y: 5.35362 } }
      }
    },
    stone3: {
      name: 'stone_3',
      mesh: Stone3Model,
      scaleRatio: { z: 0.102608, x: 0.098078, y: 0.098078 },
      position: { z: 2.3694, x: 12.2615, y: 5.26861 },
      clones: {
        1: {
          position: { z: 9.30867, x: 5.61827, y: 5.16569 },
          scaleRatio: { z: 0.102608, x: 0.098078, y: 0.098078 }
        },
        2: {
          position: { z: 1.39796, x: -7.60588, y: 5.23055 },
          scaleRatio: 0.102193
        },
        3: {
          position: { z: -10.9595, x: 11.836, y: 5.54611 },
          scaleRatio: { x: 0.102608, x: 0.098078, y: 0.098078 }
        },
        4: {
          position: { z: 3.82994, x: 19.0167, y: 5.28703 },
          scaleRatio: { x: 0.102608, x: 0.098078, y: 0.098078 }
        },
        5: {
          position: { z: 5.75798, x: 3.428, y: 5.18869 },
          scaleRatio: { z: 0.102608, x: 0.098078, y: 0.098078 }
        },
        6: {
          position: { z: 8.09337, x: 13.8158, y: 5.15412 },
          scaleRatio: { z: 0.102608, x: 0.098078, y: 0.098078 }
        },
        7: {
          position: { z: -1.58812, x: -11.8849, y: 5.16543 },
          scaleRatio: 0.102193
        },
        8: {
          position: { z: 1.026, x: -0.055202, y: 5.38573 },
          scaleRatio: { x: 0.102608, x: 0.098078, y: 0.098078 }
        },
        9: {
          position: { z: 9.47293, x: 5.59626, y: 5.22324 },
          scaleRatio: { x: 0.148575, x: -0.026293, y: 0.150607 }
        }
      }
    },
    stone4: {
      name: 'stone_4',
      mesh: Stone4Model,
      position: { z: -7.14633, x: 22.0889, y: 5.82692 },
      scaleRatio: { z: 0.320087, x: 0.248559, y: 0.626888 },
      clones: {
        1: { position: { z: -16.3062, x: -5.91866, y: 5.82797 } }
      }
    },
    // stone5: {
    //   name: 'stone_5',
    //   mesh: Stone5Model,
    //   position: { z: -7.14633, x: 22.0889, y: 5.82692 },
    //   scaleRatio: { z: 0.337648, x: 0.51932, y: 0.51932 },
    //   clones: {
    //     1: { position: { z: 10.7121, x: -10.0092, y: 5.33664 } }
    //   }
    // },
    stone7: {
      name: 'stone_7',
      mesh: Stone7Model,
      position: { z: 5.23307, x: -7.60588, y: 5.2843 },
      scaleRatio: { z: 0.055071, x: 0.090943, y: 0.090943 },
      clones: {
        1: { position: { z: 10.7121, x: -10.0092, y: 5.33664 } }
      }
    },
    stone8: {
      name: 'stone_8',
      mesh: Stone8Model,
      position: { z: -1.76798, x: -7.60588, y: 5.13782 },
      scaleRatio: { z: 0.055071, x: 0.090943, y: 0.090943 },
      clones: {
        1: { position: { z: 10.7121, x: -10.0092, y: 5.33664 } }
      }
    },
    stone9: {
      name: 'stone_9',
      mesh: Stone9Model,
      position: { z: -16.0439, x: -6.61739, y: 5.74862 },
      scaleRatio: 1.09396,
      clones: {
        1: { position: { z: 10.7121, x: -10.0092, y: 5.33664 } }
      }
    },
    stone10: {
      name: 'stone_10',
      mesh: Stone10Model,
      position: { z: 10.0248, x: 2.94097, y: 5.19036 },
      scaleRatio: 0.102193,
      clones: {
        1: { position: { z: -10.5098, x: 5.54174, y: 5.49306 } }
      }
    },
    stone11: {
      name: 'stone_11',
      mesh: Stone11Model,
      position: { z: 5.43328, x: 16.8967, y: 5.30481 },
      scaleRatio: 0.147857,
      clones: {
        1: { position: { z: 3.80167, x: 19.0978, y: 5.35337 } },
        2: { position: { z: 8.06509, x: 13.8969, y: 5.22046 } },
        3: {
          position: { z: 4.8055, x: 11.2125, y: 5.29432 },
          scaleRatio: 0.193216
        },
        4: { position: { z: 9.3177, x: 5.3755, y: 5.22731 } },
        5: { position: { z: 5.72971, x: 3.50916, y: 5.25503 } }
      }
    },
    // stone12: {
    //   name: 'stone_12',
    //   mesh: Stone12Model,
    //   position: { z: -15.022, x: -4.03129, y: 5.33502 },
    //   scaleRatio: 0.023468,
    //   clones: {
    //     1: { position: { z: -8.93777, x: -8.20821, y: 5.36154 } },
    //     2: { position: { z: -15.022, x: 1.91415, y: 5.40397 } },
    //     3: { position: { z: -7.71811, x: 11.1954, y: 5.61718 } },
    //     4: { position: { z: -19.9322, x: 9.70643, y: 5.2207 } },
    //     5: { position: { z: -16.8139, x: -5.17041, y: 5.25195 } },
    //     6: { position: { z: -15.1198, x: 8.59476, y: 5.48155 } },
    //     7: { position: { z: -19.1108, x: 15.8057, y: 5.30872 } },
    //     8: { position: { z: -14.7665, x: 20.8149, y: 5.37877 } },
    //     9: { position: { z: -9.72364, x: 1.20416, y: 5.54244 } },
    //     10: { position: { z: 4.24432, x: 19.0417, y: 5.31603 } },
    //     11: { position: { z: 0.704491, x: 20.8149, y: 5.37695 } },
    //     12: { position: { z: -1.87108, x: 1.20416, y: 5.6794 } }
    //   }
    // },
    stone13: {
      name: 'stone_13',
      mesh: Stone13Model,
      position: { z: -10.7323, x: 11.8508, y: 5.56381 },
      scaleRatio: { z: -0.061198, x: -0.061198, y: -0.074261 },
      clones: {
        1: { position: { z: -6.54101, x: 13.2194, y: 5.53864 } }
      }
    },
    stone14: {
      name: 'stone_14',
      mesh: Stone14Model,
      position: { z: 9.38241, x: 4.03124, y: 5.2698 },
      scaleRatio: { z: 0.050319, x: 0.022116, y: 0.050319 },
      clones: {
        1: { position: { x: 15.4121, x: 4.12881, y: 7.20769 } }
      }
    },
    stone15: {
      name: 'stone_15',
      mesh: Stone15Model,
      position: { z: -0.768637, x: 1.93423, y: 5.5364 },
      scaleRatio: 0.258065,
      clones: {
        1: { position: { z: 7.90048, x: 8.67311, y: 5.5364 } }
      }
    },
    stone16: {
      name: 'stone_16',
      mesh: Stone16Model,
      position: { z: -5.60227, x: -10.5128, y: 6.11958 },
      scaleRatio: { z: 0.670766, x: 0.122018, y: 0.103105 }
    },
    // stone17: {
    //   name: 'stone_17',
    //   mesh: Stone17Model,
    //   position: { z: -19.3614, x: -2.61345, y: 5.54459 },
    //   scaleRatio: { z: 0.35259, x: 0.352589, y: 0.436105 },
    //   clones: {
    //     1: { position: { z: -11.8608, x: 15.4688, y: 5.7572 } },
    //     2: { position: { z: 10.2666, x: 12.5534, y: 5.37999 } }
    //   }
    // },
    stone18: {
      name: 'stone_18',
      mesh: Stone18Model,
      position: { z: 11.9744, x: 1.44585, y: 5.35816 },
      scaleRatio: { z: 0.156568, x: 0.374697, y: 0.274262 }
    },
    stone20: {
      name: 'stone_20',
      mesh: Stone20Model,
      position: { z: -5.92325, x: -0.852257, y: 5.61889 },
      scaleRatio: { z: 0.068314, x: -0.012089, y: 0.069248 },
      clones: {
        1: { position: { z: -0.704643, x: 10.0705, y: 5.61889 } },
        2: {
          position: { z: 5.70305, x: 3.58778, y: 5.32657 },
          scaleRatio: { z: 0.181871, x: -0.032186, y: 0.184357 }
        },
        3: { position: { z: -19.4338, x: -3.40196, y: 5.61889 } }
      }
    },
    plant1: {
      name: 'plant_1',
      mesh: Plant1Model,
      position: { z: 14.8494, x: 5.88585, y: 7.11967 },
      scaleRatio: 0.028531,
      clones: {
        1: { position: { z: -11.4527, x: -4.57248, y: 5.35307 }}
      }
    },
    plant2: {
      name: 'plant_2',
      mesh: Plant2Model,
      position: { z: 14.8851, x: 5.77976, y: 7.13809 },
      scaleRatio: 0.01266
    },
    plant4: {
      name: 'plant_4',
      mesh: Plant4Model,
      position: { z: -6.29629, x: -7.77645, y: 0.029768 },
      scaleRatio: 0.028531
    },
    plant5: {
      name: 'plant_5',
      mesh: Plant5Model,
      position: { z: -9.19929, x: -7.02459, y: 5.31888 },
      scaleRatio: 0.028531
    },
    // plant6: {
    //   name: 'plant_6',
    //   mesh: Plant6Model,
    //   position: { z: 11.7788, x: 0.694911, y: 5.16277 },
    //   scaleRatio: 0.040252
    // },
    plant7: {
      name: 'plant_7',
      mesh: Plant7Model,
      position: { z: -6.17539, x: -7.97695, y: 5.23934 },
      scaleRatio: 0.029768
    }
  }
}
