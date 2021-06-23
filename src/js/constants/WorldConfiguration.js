import { AltarModel, ArchModel, BoatModel, CatStatueModel, Column1Model, Column2Model, Column3Model, Column4Model, DoorLeftModel, DoorOutsideModel, DoorRightModel, KioskCommonModel, KioskLumaModel, LakeModel, OceanModel, OwlStatueModel, PierModel, Plant1Model, Plant2Model, Plant4Model, Plant5Model, Plant6Model, Plant7Model, SteleModel, Stone10Model, Stone11Model, Stone12Model, Stone13Model, Stone14Model, Stone15Model, Stone16Model, Stone17Model, Stone18Model, Stone1Model, Stone20Model, Stone2Model, Stone3Model, Stone4Model, Stone5Model, Stone7Model, Stone8Model, Tree1Model, Tree2Model, Tree3Model, Tree4Model, Tree5Model } from '../../assets/meshes'
import { DiffuseColumn3 } from '../../assets/textures'

export default () => {
  return {
    tree1: {
      name: 'tree1',
      mesh: Tree1Model,
      scaleRatio: 0.169884,
      position: { z: 0, x: 0.245187, y: 0 },
      rotation: { z: 0, x: 0, y: (0 + 90) },
      clones: {
        1: {
          position: { z: -14.4242, x: -2.83575, y: 0 },
          rotation: { z: 0, x: 0, y: (0 + 90) }
        },
        2: {
          position: { z: -7.75535, x: 22.9944, y: 0 },
          rotation: { z: 0, x: 0, y: (75.4702 + 90) }
        },
        3: {
          position: { z: -12.2822, x: 16.2127, y: 0 },
          rotation: { z: 0, x: 0, y: (-90.3195 + 90) }
        },
        4: {
          position: { z: -8.46063, x: -6.61735, y: 0 },
          rotation: { z: 0, x: 0, y: (-187.525 + 90) }
        },
        5: {
          position: { z: -13.6783, x: 1.62371, y: 0 },
          rotation: { z: 0, x: 0, y: (-374.897 + 90) }
        },
        6: {
          position: { z: -19.0966, x: -0.79713, y: 0 },
          rotation: { z: 0, x: 0, y: (-193.301 + 90) }
        },
        7: {
          position: { z: 9.5053, x: 4.13337, y: 0 },
          rotation: { z: 0, x: 0, y: (-282.75 + 90) }
        },
        8: {
          position: { z: 3.12103, x: 19.4932, y: 0 },
          rotation: { z: 0, x: 0, y: (58.7264 + 90) }
        },
        9: {
          position: { z: 2.10734, x: 12.2868, y: 0 },
          rotation: { z: 0, x: 0, y: (-42.623 + 90) }
        },
        10: {
          position: { z: -20.4184, x: 8.35148, y: 0 },
          rotation: { z: 0, x: 0, y: (-187.525 + 90) }
        },
        11: {
          position: { z: -2.63256, x: 0.561242, y: 0 },
          rotation: { z: 0, x: 0, y: (-187.525 + 90) }
        },
        12: {
          position: { z: -4.46262, x: -2.83575, y: 0 }
        },
        13: {
          position: { z: -6.60174, x: -1.06995, y: 0 },
          rotation: { z: 0, x: 0, y: (-140.41 + 90) }
        },
        14: {
          position: { z: -8.75323, x: 1.48275, y: 0 },
          rotation: { z: 0, x: 0, y: (-536.66 + 90) }
        },
        15: {
          position: { z: 0.48834, x: 4.65396, y: 0 },
          rotation: { z: 0, x: 0, y: (-181.97 + 90) }
        },
        16: {
          position: { z: -1.97011, x: -3.9029, y: 0 },
          rotation: { z: 0, x: 0, y: (-219.82 + 90) }
        },
        17: {
          position: { z: -3.55991, x: -3.58029, y: 0 },
          rotation: { z: 0, x: 0, y: (36.3526 + 90) }
        },
        18: {
          position: { z: -5.62353, x: 0.894694, y: 0 },
          rotation: { z: 0, x: 0, y: (-374.897 + 90) }
        },
        19: {
          position: { z: -8.75323, x: 2.66798, y: 0 },
          rotation: { z: 0, x: 0, y: (-536.66 + 90) }
        },
        20: {
          position: { z: -6.45164, x: 3.64461, y: 0 },
          rotation: { z: 0, x: 0, y: (-345.038 + 90) }
        },
        21: {
          position: { z: -8.54865, x: 4.48584, y: 0 },
          rotation: { z: 0, x: 0, y: (-342.311 + 90) }
        },
        22: {
          position: { z: -3.49558, x: -0.999082, y: 0 },
          rotation: { z: 0, x: 0, y: (-173.245 + 90) }
        },
        23: {
          position: { z: -2.67399, x: 8.65162, y: 0 },
          rotation: { z: 0, x: 0, y: (-240.909 + 90) }
        },
        24: {
          position: { z: -5.01252, x: 8.7734, y: 0 },
          rotation: { z: 0, x: 0, y: (-345.038 + 90) }
        },
        25: {
          position: { z: -3.80086, x: -7.50587, y: 0 },
          rotation: { z: 0, x: 0, y: (-267.267 + 90) }
        },
        26: {
          position: { z: -16.7838, x: 19.601, y: 0 },
          rotation: { z: 0, x: 0, y: (-401.652 + 90) }
        },
        27: {
          position: { z: -18.6242, x: 17.3964, y: 0 },
          rotation: { z: 0, x: 0, y: (-431.511 + 90) }
        },
        28: {
          position: { z: -1.51976, x: 14.4053, y: 0 },
          rotation: { z: 0, x: 0, y: (-181.97 + 90) }
        }
      }
    },
    tree2: {
      name: 'tree_2',
      mesh: Tree2Model,
      scaleRatio: 0.159311,
      position: { z: 8.25919, x: 9.041, y: 0 },
      rotation: { z: 0, x: 0, y: (-33.8834 + 90) },
      clones: {
        1: {
          position: { z: 5.32306, x: 22.5974, y: 2 },
          rotation: { z: 0, x: 0, y: (0 + 90) }
        },
        2: {
          position: { z: -14.4242, x: -3.65443, y: 0 },
          rotation: { z: 0, x: 0, y: (0 + 90) }
        },
        3: {
          position: { z: -6.96285, x: 22.789, y: 0 },
          rotation: { z: 0, x: 0, y: (75.4702 + 90) }
        },
        4: {
          position: { z: -12.7783, x: 15.5358, y: 0 },
          rotation: { z: 0, x: 0, y: (67.6845 + 90) }
        },
        5: {
          position: { z: -13.2723, x: 16.0611, y: 0 },
          rotation: { z: 0, x: 0, y: (67.6845 + 90) }
        },
        6: {
          position: { z: -8.48687, x: -5.61599, y: 0 },
          rotation: { z: 0, x: 0, y: (-29.5207 + 90) }
        },
        7: {
          position: { z: -9.06998, x: -6.04021, y: 0 },
          rotation: { z: 0, x: 0, y: (-29.5207 + 90) }
        },
        8: {
          position: { z: -14.2877, x: 2.20086, y: 0 },
          rotation: { z: 0, x: 0, y: (-29.5207 + 90) }
        },
        9: {
          position: { z: -13.7046, x: 2.62507, y: 0 },
          rotation: { z: 0, x: 0, y: (62.1045 + 90) }
        },
        10: {
          position: { z: -18.9083, x: -0.000404, y: 0 },
          rotation: { z: 0, x: 0, y: (-193.301 + 90) }
        },
        11: {
          position: { z: -9.74449, x: 10.871, y: 0 },
          rotation: { z: 0, x: 0, y: (-29.5207 + 90) }
        },
        12: {
          position: { z: 10.1355, x: 4.68763, y: 0 },
          rotation: { z: 0, x: 0, y: (-124.746 + 90) }
        },
        13: {
          position: { z: 10.5049, x: 4.0683, y: 0 },
          rotation: { z: 0, x: 0, y: (-124.746 + 90) }
        },
        14: {
          position: { z: 3.82076, x: 19.0682, y: 0 },
          rotation: { z: 0, x: 0, y: (58.7264 + 90) }
        },
        15: {
          position: { z: -10.6682, x: 19.3701, y: 0 },
          rotation: { z: 0, x: 0, y: (-29.5207 + 90) }
        },
        16: {
          position: { z: 1.55295, x: 11.6844, y: 0 },
          rotation: { z: 0, x: 0, y: (-42.623 + 90) }
        },
        17: {
          position: { z: -20.4447, x: 9.35284, y: 0 },
          rotation: { z: 0, x: 0, y: (-29.5207 + 90) }
        },
        18: {
          position: { z: -21.0278, x: 8.92863, y: 0 },
          rotation: { z: 0, x: 0, y: (-29.5207 + 90) }
        },
        19: {
          position: { z: -4.46262, x: -3.65443, y: 0 },
          rotation: { z: 0, x: 0, y: (0 + 90) }
        },
        20: {
          position: { z: -2.6588, x: 1.56261, y: 0 },
          rotation: { z: 0, x: 0, y: (-29.5207 + 90) }
        },
        21: {
          position: { z: -7.12347, x: -0.439043, y: 0 },
          rotation: { z: 0, x: 0, y: (-140.41 + 90) }
        },
        22: {
          position: { z: -8.41495, x: 0.539893, y: 0 },
          rotation: { z: 0, x: 0, y: (-99.6592 + 90) }
        },
        23: {
          position: { z: -7.99387, x: 1.12528, y: 0 },
          rotation: { z: 0, x: 0, y: (-191.284 + 90) }
        },
        24: {
          position: { z: -8.62789, x: 7.15033, y: 0 },
          rotation: { z: 0, x: 0, y: (-29.5207 + 90) }
        },
        25: {
          position: { z: -9.78903, x: 5.79724, y: 0 },
          rotation: { z: 0, x: 0, y: (62.1045 + 90) }
        },
        26: {
          position: { z: 0.365301, x: 5.64808, y: 0 },
          rotation: { z: 0, x: 0, y: (-23.9663 + 90) }
        },
        27: {
          position: { z: -0.174014, x: 5.16942, y: 0 },
          rotation: { z: 0, x: 0, y: (-23.9663 + 90) }
        },
        28: {
          position: { z: -2.17683, x: -3.08946, y: 0 },
          rotation: { z: 0, x: 0, y: (-61.8163 + 90) }
        },
        29: {
          position: { z: -1.45727, x: -3.04242, y: 0 },
          rotation: { z: 0, x: 0, y: (-61.8163 + 90) }
        },
        30: {
          position: { z: -3.55991, x: -4.39898, y: 0 },
          rotation: { z: 0, x: 0, y: (-93.0843 + 90) }
        },
        31: {
          position: { z: -8.14776, x: 6.62365, y: 0 },
          rotation: { z: 0, x: 0, y: (-98.8888 + 90) }
        },
        32: {
          position: { z: -5.64977, x: 1.89606, y: 0 },
          rotation: { z: 0, x: 0, y: (62.1045 + 90) }
        },
        33: {
          position: { z: -6.23288, x: 1.47184, y: 0 },
          rotation: { z: 0, x: 0, y: (-29.5207 + 90) }
        },
        34: {
          position: { z: -7.99387, x: 2.31051, y: 0 },
          rotation: { z: 0, x: 0, y: (-191.284 + 90) }
        },
        35: {
          position: { z: -7.26745, x: 3.84177, y: 0 },
          rotation: { z: 0, x: 0, y: (0.33838 + 90) }
        },
        36: {
          position: { z: -6.97295, x: 4.49998, y: 0 },
          rotation: { z: 0, x: 0, y: (91.9636 + 90) }
        },
        37: {
          position: { z: -9.11005, x: 5.31544, y: 0 },
          rotation: { z: 0, x: 0, y: (94.6904 + 90) }
        },
        38: {
          position: { z: -9.37291, x: 4.64396, y: 0 },
          rotation: { z: 0, x: 0, y: (3.06516 + 90) }
        },
        39: {
          position: { z: -0.409929, x: 2.30211, y: 0 },
          rotation: { z: 0, x: 0, y: (-33.8834 + 90) }
        },
        40: {
          position: { z: -1.54129, x: -0.672402, y: 0 },
          rotation: { z: 0, x: 0, y: (-29.5207 + 90) }
        },
        41: {
          position: { z: -7.91086, x: 3.26608, y: 0 },
          rotation: { z: 0, x: 0, y: (0.33838 + 90) }
        },
        42: {
          position: { z: -1.88589, x: 9.26994, y: 0 },
          rotation: { z: 0, x: 0, y: (-82.905 + 90) }
        },
        43: {
          position: { z: -2.57418, x: 9.48496, y: 0 },
          rotation: { z: 0, x: 0, y: (-82.905 + 90) }
        },
        44: {
          position: { z: -1.56129, x: -5.24051, y: 0 },
          rotation: { z: 0, x: 0, y: (-121.832 + 90) }
        },
        45: {
          position: { z: -1.16093, x: -5.84026, y: 0 },
          rotation: { z: 0, x: 0, y: (-30.2069 + 90) }
        },
        46: {
          position: { z: -2.21551, x: -7.9317, y: 0 },
          rotation: { z: 0, x: 0, y: (-203.081 + 90) }
        },
        47: {
          position: { z: -2.74736, x: -8.41864, y: 0 },
          rotation: { z: 0, x: 0, y: (-111.456 + 90) }
        },
        48: {
          position: { z: -2.82017, x: -7.30174, y: 0 },
          rotation: { z: 0, x: 0, y: (-109.263 + 90) }
        },
        49: {
          position: { z: -3.34144, x: -6.80348, y: 0 },
          rotation: { z: 0, x: 0, y: (-109.263 + 90) }
        },
        50: {
          position: { z: 0.386416, x: 6.86382, y: 0 },
          rotation: { z: 0, x: 0, y: (-29.5207 + 90) }
        },
        51: {
          position: { z: -16.3564, x: 20.507, y: 0 },
          rotation: { z: 0, x: 0, y: (35.349 + 90) }
        },
        52: {
          position: { z: -18.4776, x: 18.2227, y: 0 },
          rotation: { z: 0, x: 0, y: (-86.1352 + 90) }
        },
        53: {
          position: { z: -17.8025, x: 17.9693, y: 0 },
          rotation: { z: 0, x: 0, y: (5.48994 + 90) }
        },
        54: {
          position: { z: -2.18211, x: 14.9208, y: 0 },
          rotation: { z: 0, x: 0, y: (-23.9663 + 90) }
        },
        55: {
          position: { z: -1.6428, x: 15.3994, y: 0 },
          rotation: { z: 0, x: 0, y: (-23.9663 + 90) }
        }
      }
    },
    tree3: {
      name: 'tree_3',
      mesh: Tree3Model,
      scaleRatio: 0.17195,
      position: { z: 7.99686, x: 7.98744, y: 0 },
      rotation: { z: 0, x: 0, y: (41.3413 + 90) },
      clones: {
        1: {
          position: { z: -12.2784, x: 14.6196, y: 0 },
          rotation: { z: 0, x: 0, y: (165.429 + 90) }
        },
        2: {
          position: { z: -10.0417, x: -6.42133, y: 0 },
          rotation: { z: 0, x: 0, y: (68.2236 + 90) }
        },
        3: {
          position: { z: -7.04531, x: 16.677, y: 0 },
          rotation: { z: 0, x: 0, y: (-44.0397 + 90) }
        },
        4: {
          position: { z: -7.07231, x: 11.8461, y: 0 },
          rotation: { z: 0, x: 0, y: (-123.915 + 90) }
        },
        5: {
          position: { z: 9.8445, x: 5.68997, y: 0 },
          rotation: { z: 0, x: 0, y: (-27.0016 + 90) }
        },
        6: {
          position: { z: -9.4953, x: 17.2775, y: 0 },
          rotation: { z: 0, x: 0, y: (1.96973 + 90) }
        },
        7: {
          position: { z: -10.1245, x: 19.5553, y: 0 },
          rotation: { z: 0, x: 0, y: (1.96973 + 90) }
        },
        8: {
          position: { z: 8.74997, x: 8.65154, y: 0 },
          rotation: { z: 0, x: 0, y: (72.9042 + 90) }
        },
        9: {
          position: { z: 14.9448, x: 6.57962, y: 2 },
          rotation: { z: 0, x: 0, y: (138.756 + 90) }
        },
        10: {
          position: { z: -5.14208, x: 9.44178, y: 0 },
          rotation: { z: 0, x: 0, y: (-151.967 + 90) }
        },
        11: {
          position: { z: -4.21358, x: 0.75727, y: 0 },
          rotation: { z: 0, x: 0, y: (68.2236 + 90) }
        },
        12: {
          position: { z: -6.53216, x: 8.39493, y: 0 },
          rotation: { z: 0, x: 0, y: (-295.888 + 90) }
        },
        13: {
          position: { z: -3.20182, x: -2.89247, y: 0 },
          rotation: { z: 0, x: 0, y: (35.9279 + 90) }
        },
        14: {
          position: { z: -7.38743, x: 6.70025, y: 0 },
          rotation: { z: 0, x: 0, y: (-242.404 + 90) }
        },
        15: {
          position: { z: -3.86661, x: 2.18479, y: 0 },
          rotation: { z: 0, x: 0, y: (159.948 + 90) }
        },
        16: {
          position: { z: 0.080851, x: 1.91265, y: 0 },
          rotation: { z: 0, x: 0, y: (72.9042 + 90) }
        },
        17: {
          position: { z: -0.672262, x: 1.24856, y: 0 },
          rotation: { z: 0, x: 0, y: (41.3413 + 90) }
        },
        18: {
          position: { z: -3.45964, x: 10.0376, y: 0 },
          rotation: { z: 0, x: 0, y: (14.8392 + 90) }
        },
        19: {
          position: { z: -1.2737, x: 3.43652, y: 0 },
          rotation: { z: 0, x: 0, y: (72.9042 + 90) }
        },
        20: {
          position: { z: -2.02681, x: 2.77243, y: 0 },
          rotation: { z: 0, x: 0, y: (41.3413 + 90) }
        }
      }
    },
    tree4: {
      name: 'tree_4',
      mesh: Tree4Model,
      scaleRatio: 0.17195,
      position: { z: -4.69189, x: -10.3555, y: 0 },
      rotation: { z: 0, x: 0, y: (98.571 + 90) },
      clones: {
        1: {
          position: { z: 6.01407, x: -0.377798, y: 0 },
          rotation: { z: 0, x: 0, y: (179.808 + 90) }
        },
        2: {
          position: { z: -4.00003, x: -0.260216, y: 0 },
          rotation: { z: 0, x: 0, y: (179.808 + 90) }
        },
        3: {
          position: { z: -0.566624, x: -5.17516, y: 0 },
          rotation: { z: 0, x: 0, y: (145.295 + 90) }
        },
        4: {
          position: { z: -4.62879, x: -0.979241, y: 0 },
          rotation: { z: 0, x: 0, y: (109.136 + 90) }
        },
        5: {
          position: { z: -0.315786, x: 6.73594, y: 0 },
          rotation: { z: 0, x: 0, y: (179.808 + 90) }
        },
        6: {
          position: { z: -7.76149, x: 5.51406, y: 0 },
          rotation: { z: 0, x: 0, y: (179.808 + 90) }
        },
        7: {
          position: { z: -1.47758, x: 7.69835, y: 0 },
          rotation: { z: 0, x: 0, y: (109.136 + 90) }
        },
        8: {
          position: { z: -0.848822, x: 8.41737, y: 0 },
          rotation: { z: 0, x: 0, y: (179.808 + 90) }
        },
        9: {
          position: { z: -1.36823, x: -2.13871, y: 0 },
          rotation: { z: 0, x: 0, y: (215.626 + 90) }
        },
        10: {
          position: { z: -3.45423, x: -1.96262, y: 0 },
          rotation: { z: 0, x: 0, y: (179.808 + 90) }
        },
        11: {
          position: { z: 1.18849, x: 5.99988, y: 0 },
          rotation: { z: 0, x: 0, y: (136.51 + 90) }
        },
        12: {
          position: { z: -5.13467, x: -3.50787, y: 0 },
          rotation: { z: 0, x: 0, y: (179.808 + 90) }
        },
        13: {
          position: { z: -0.819611, x: 15.5034, y: 0 },
          rotation: { z: 0, x: 0, y: (136.51 + 90) }
        }
      }
    },
    tree5: {
      name: 'tree_5',
      mesh: Tree5Model,
      scaleRatio: 0.17195,
      position: { z: 0.881225, x: -2.90709, y: 0 },
      rotation: { z: 0, x: 0, y: (-59.6308 + 90) },
      clones: {
        1: {
          position: { z: -14.9938, x: -2.73745, y: 0 },
          rotation: { z: 0, x: 0, y: 0 }
        },
        2: {
          position: { z: -7.67297, x: 22.4677, y: 0 },
          rotation: { z: 0, x: 0, y: (75.4702 + 90) }
        },
        3: {
          position: { z: -17.0878, x: -4.9955, y: 0 },
          rotation: { z: 0, x: 0, y: (-82.3927 + 90) }
        },
        4: {
          position: { z: -18.5649, x: -1.02383, y: 0 },
          rotation: { z: 0, x: 0, y: (-193.301 + 90) }
        },
        5: {
          position: { z: -7.63015, x: 16.9379, y: 0 },
          rotation: { z: 0, x: 0, y: (-119.264 + 90) }
        },
        6: {
          position: { z: -6.91834, x: 12.4677, y: 0 },
          rotation: { z: 0, x: 0, y: (-199.14 + 90) }
        },
        7: {
          position: { z: -10.8239, x: 11.9876, y: 0 },
          rotation: { z: 0, x: 0, y: (-44.7261 + 90) }
        },
        8: {
          position: { z: 2.61759, x: 21.7349, y: 0 },
          rotation: { z: 13.3351, x: -24.56, y: (86.0978 + 90) }
        },
        9: {
          position: { z: -6.35852, x: 11.9876, y: 0 },
          rotation: { z: 0, x: 0, y: (229.951 + 90) }
        },
        10: {
          position: { z: 12.4175, x: 0.820755, y: 0 },
          rotation: { z: 0, x: 0, y: (0 + 90) }
        },
        11: {
          position: { z: 1.60389, x: 12.4622, y: 0 },
          rotation: { z: 0, x: 0, y: (-42.623 + 90) }
        },
        12: {
          position: { z: -3.06955, x: 1.20829, y: 0 },
          rotation: { z: 0, x: 0, y: (0 + 90) }
        },
        13: {
          position: { z: -5.03221, x: -2.73745, y: 0 },
          rotation: { z: 0, x: 0, y: (0 + 90) }
        },
        14: {
          position: { z: -6.10015, x: -0.782705, y: 0 },
          rotation: { z: 0, x: 0, y: (-140.41 + 90) }
        },
        15: {
          position: { z: -6.40735, x: 0.060547, y: 0 },
          rotation: { z: 0, x: 0, y: (-82.3927 + 90) }
        },
        16: {
          position: { z: 0.124843, x: 8.65976, y: 0 },
          rotation: { z: 13.3351, x: -24.56, y: (86.0978 + 90) }
        },
        17: {
          position: { z: -7.2192, x: 8.15514, y: 0 },
          rotation: { z: 0, x: 0, y: (57.9788 + 90) }
        },
        18: {
          position: { z: -6.59781, x: 7.75793, y: 0 },
          rotation: { z: 0, x: 0, y: (-371.112 + 90) }
        },
        19: {
          position: { z: -3.06955, x: 1.20829, y: 0 },
          rotation: { z: 0, x: 0, y: (0 + 90) }
        },
        20: {
          position: { z: -5.80894, x: 2.18269, y: 0 },
          rotation: { z: 0, x: 0, y: (0 + 90) }
        },
        21: {
          position: { z: -1.76015, x: -5.68392, y: 0 },
          rotation: { z: 0, x: 0, y: (93.8378 + 90) }
        },
        22: {
          position: { z: -1.79704, x: 0.048798, y: 0 },
          rotation: { z: 0, x: 0, y: (0 + 90) }
        },
        23: {
          position: { z: -9.28812, x: 3.82319, y: 0 },
          rotation: { z: 0, x: 0, y: (-82.3927 + 90) }
        },
        24: {
          position: { z: -2.55948, x: -1.28962, y: 0 },
          rotation: { z: 0, x: 0, y: (14.2793 + 90) }
        },
        25: {
          position: { z: -4.23685, x: 8.65976, y: 0 },
          rotation: { z: 9.19447, x: -5.47384, y: (168.652 + 90) }
        },
        26: {
          position: { z: -0.886366, x: 7.8602, y: 0 },
          rotation: { z: 13.3351, x: -24.56, y: (143.979 + 90) }
        },
        27: {
          position: { z: -1.96333, x: -2.12823, y: 0 },
          rotation: { z: 0, x: 0, y: (0 + 90) }
        },
        28: {
          position: { z: -2.4916, x: 2.13183, y: 0 },
          rotation: { z: 0, x: 0, y: (0 + 90) }
        },
        29: {
          position: { z: -5.43055, x: -1.69973, y: 0 },
          rotation: { z: 13.3351, x: -24.56, y: (167.563 + 90) }
        },
        30: {
          position: { z: -2.90101, x: -4.27889, y: 0 },
          rotation: { z: 0, x: 0, y: (-111.204 + 90) }
        },
        31: {
          position: { z: -17.6508, x: 18.2599, y: 0 },
          rotation: { z: 0, x: 0, y: (-56.6146 + 90) }
        }
      }
    },
    stone1: {
      name: 'stone_1',
      mesh: Stone1Model,
      scaleRatio: 1,
      position: { z: 5.45584, x: 22.9282, y: 2.25 },
      rotation: { z: 0, x: 0, y: (-116.946 + 90) }
    },
    stone2: {
      name: 'stone_2',
      mesh: Stone2Model,
      scaleRatio: 1,
      position: { z: 3.92005, x: -7.60588, y: 0 },
      rotation: { z: 0, x: 0, y: (0 + 90) },
      clones: {
        1: {
          position: { z: 7.67981, x: 16.5005, y: 0 },
          rotation: { z: 0, x: 0, y: (-48.8297 + 90) }
        }
      }
    },
    stone3: {
      name: 'stone_3',
      mesh: Stone3Model,
      scaleRatio: 1,
      position: { z: 2.3694, x: 12.2615, y: 0 },
      rotation: { z: 0, x: 0, y: (188.622 + 90) },
      clones: {
        1: {
          position: { z: 9.30867, x: 5.61827, y: 0 },
          rotation: { z: 0, x: 0, y: (-91.5315 + 90) }
        },
        2: {
          position: { z: 1.39796, x: -7.60588, y: 0 },
          rotation: { z: 0, x: 0, y: (-48.8297 + 90) }
        },
        3: {
          position: { z: -10.9595, x: 11.836, y: 0 },
          rotation: { z: 0, x: 0, y: (51.408 + 90) }
        },
        4: {
          position: { z: 3.82994, x: 19.0167, y: 0 },
          rotation: { z: 0, x: 0, y: (171.903 + 90) }
        },
        5: {
          position: { z: 5.75798, x: 3.428, y: 0 },
          rotation: { z: 0, x: 0, y: (171.903 + 90) }
        },
        6: {
          position: { z: 8.09337, x: 13.8158, y: 0 },
          rotation: { z: 0, x: 0, y: (171.903 + 90) }
        },
        7: {
          position: { z: -1.58812, x: -11.8849, y: 0 },
          rotation: { z: 0, x: 0, y: (-7.7 + 90) }
        },
        8: {
          position: { z: 1.026, x: -0.055202, y: 0 },
          rotation: { z: 0, x: 0, y: (-74.9349 + 90) }
        },
        9: {
          position: { z: 9.47293, x: 5.59626, y: 0 },
          rotation: { z: 0, x: 0, y: (-253.409 + 90) }
        },
        10: {
          position: { z: -16.0439, x: -6.61739, y: 0 },
          rotation: { z: 90, x: 0, y: (-27.5392 + 90) }
        }
      }
    },
    stone4: {
      name: 'stone_4',
      mesh: Stone4Model,
      scaleRatio: 1,
      position: { z: -7.14633, x: 22.0889, y: 0 },
      rotation: { z: 0, x: 0, y: (-120.545 + 90) },
      clones: {
        1: {
          position: { z: -16.3062, x: -5.91866, y: 0 },
          rotation: { z: 0, x: 0, y: (-27.7798 + 90) }
        }
      }
    },
    stone5: {
      name: 'stone_5',
      mesh: Stone5Model,
      scaleRatio: 1,
      position: { z: 10.7121, x: -10.0092, y: 0 },
      rotation: { z: 0, x: 0, y: (198.723 + 90) }
    },
    stone7: {
      name: 'stone_7',
      mesh: Stone7Model,
      scaleRatio: 1,
      position: { z: 5.23307, x: -7.60588, y: 0 },
      rotation: { z: 0, x: 0, y: (0 + 90) },
      clones: {
        1: {
          position: { z: 10.7121, x: -10.0092, y: 0 },
          rotation: { z: 0, x: 0, y: (0 + 90) }
        }
      }
    },
    stone8: {
      name: 'stone_8',
      mesh: Stone8Model,
      scaleRatio: 1,
      position: { z: -1.76798, x: -7.60588, y: 0 },
      rotation: { z: 0, x: 0, y: (0 + 90) }
    },
    stone10: {
      name: 'stone_10',
      mesh: Stone10Model,
      scaleRatio: 1,
      position: { z: 10.0248, x: 2.94097, y: 0 },
      rotation: { z: 0, x: 0, y: (0 + 90) },
      clones: {
        1: {
          position: { z: -10.5098, x: 5.54174, y: 0 },
          rotation: { z: 0, x: 0, y: (0 + 90) }
        }
      }
    },
    stone11: {
      name: 'stone_11',
      mesh: Stone11Model,
      scaleRatio: 1,
      position: { z: 5.43328, x: 16.8967, y: 0 },
      rotation: { z: 0.17335, x: 3.61907, y: (136.834 + 90) },
      clones: {
        1: {
          position: { z: 3.80167, x: 19.0978, y: 0 },
          rotation: { z: 0, x: 0, y: (105.196 + 90) }
        },
        2: {
          position: { z: 8.06509, x: 13.8969, y: 0 },
          rotation: { z: 0, x: 0, y: (105.196 + 90) }
        },
        3: {
          position: { z: 4.8055, x: 11.2125, y: 0 },
          rotation: { z: 0, x: 0, y: (105.196 + 90) }
        },
        4: {
          position: { z: 9.3177, x: 5.3755, y: 0 },
          rotation: { z: 0, x: 0, y: (-35.9362 + 90) }
        },
        5: {
          position: { z: 5.72971, x: 3.50916, y: 0 },
          rotation: { z: 0, x: 0, y: (105.196 + 90) }
        }
      }
    },
    stone12: {
      name: 'stone_12',
      mesh: Stone12Model,
      scaleRatio: 1,
      position: { z: -15.022, x: -4.03129, y: 0 },
      rotation: { z: -417.055, x: 9.41001, y: (5.57067 + 90) },
      clones: {
        1: {
          position: { z: -8.93777, x: -8.20821, y: 0 },
          rotation: { z: -417.055, x: 9.41001, y: (5.57067 + 90) }
        },
        2: {
          position: { z: -15.022, x: 1.91415, y: 0 },
          rotation: { z: -417.055, x: 9.41001, y: (5.57067 + 90) }
        },
        3: {
          position: { z: -7.71811, x: 11.1954, y: 0 },
          rotation: { z: -417.055, x: 9.41001, y: (5.57067 + 90) }
        },
        4: {
          position: { z: -19.9322, x: 9.70643, y: 0 },
          rotation: { z: -417.055, x: 9.41001, y: (5.57067 + 90) }
        },
        5: {
          position: { z: -16.8139, x: -5.17041, y: 0 },
          rotation: { z: -417.055, x: 9.41001, y: (5.57067 + 90) }
        },
        6: {
          position: { z: -15.1198, x: 8.59476, y: 0 },
          rotation: { z: -417.055, x: 9.41001, y: (5.57067 + 90) }
        },
        7: {
          position: { z: -19.1108, x: 15.8057, y: 0 },
          rotation: { z: -417.055, x: 9.41001, y: (5.57067 + 90) }
        },
        8: {
          position: { z: -14.7665, x: 20.8149, y: 0 },
          rotation: { z: -417.055, x: 9.41001, y: (5.57067 + 90) }
        },
        9: {
          position: { z: -9.72364, x: 1.20416, y: 0 },
          rotation: { z: -417.055, x: 9.41001, y: (5.57067 + 90) }
        },
        10: {
          position: { z: 4.24432, x: 19.0417, y: 0 },
          rotation: { z: -417.055, x: 9.41001, y: (5.57067 + 90) }
        },
        11: {
          position: { z: 0.704491, x: 20.8149, y: 0 },
          rotation: { z: -417.055, x: 9.41001, y: (5.57067 + 90) }
        },
        12: {
          position: { z: -1.87108, x: 1.20416, y: 0 },
          rotation: { z: -417.055, x: 9.41001, y: (5.57067 + 90) }
        }
      }
    },
    stone13: {
      name: 'stone_13',
      mesh: Stone13Model,
      scaleRatio: 1,
      position: { z: -10.7323, x: 11.8508, y: 0 },
      rotation: { z: 0, x: -37.0571, y: (-63.6003 + 90) },
      clones: {
        1: {
          position: { z: -6.54101, x: 13.2194, y: 0 },
          rotation: { z: 0, x: -37.0571, y: (0 + 90) }
        }
      }
    },
    stone14: {
      name: 'stone_14',
      mesh: Stone14Model,
      scaleRatio: 1,
      position: { z: 9.38241, x: 4.03124, y: 0 },
      rotation: { z: 0, x: 0, y: (152.077 + 90) },
      clones: {
        1: {
          position: { z: 15.4121, x: 4.12881, y: 2 },
          rotation: { z: 0, x: 0, y: (108.321 + 90) }
        }
      }
    },
    stone15: {
      name: 'stone_15',
      mesh: Stone15Model,
      scaleRatio: 1,
      position: { z: -0.768637, x: 1.93423, y: 0 },
      rotation: { z: 0, x: 0, y: (66.6915 + 90) },
      clones: {
        1: {
          position: { z: 7.90048, x: 8.67311, y: 0 },
          rotation: { z: 0, x: 0, y: (66.6915 + 90) }
        }
      }
    },
    stone16: {
      name: 'stone_16',
      mesh: Stone16Model,
      scaleRatio: 1,
      position: { z: -5.60227, x: -10.5128, y: 0 },
      rotation: { z: 0, x: 0, y: (26.1387 + 90) }
    },
    stone17: {
      name: 'stone_17',
      mesh: Stone17Model,
      scaleRatio: 1,
      position: { z: -19.3614, x: -2.61345, y: 0 },
      rotation: { z: 0, x: 0, y: (-127.902 + 90) },
      clones: {
        1: {
          position: { z: -11.8608, x: 15.4688, y: 0 },
          rotation: { z: 0, x: 0, y: (-93.4858 + 90) }
        },
        2: {
          position: { z: 10.2666, x: 12.5534, y: 0 },
          rotation: { z: 0, x: 0, y: (-344.2 + 90) }
        }
      }
    },
    stone18: {
      name: 'stone_18',
      mesh: Stone18Model,
      scaleRatio: 1,
      position: { z: 11.9744, x: 1.44585, y: 0 },
      rotation: { z: 0, x: 0, y: (-13.286 + 90) }
    },
    stone20: {
      name: 'stone_20',
      mesh: Stone20Model,
      scaleRatio: 1,
      position: { z: -5.92325, x: -0.852257, y: 0 },
      rotation: { z: 0, x: 0, y: (-193.357 + 90) },
      clones: {
        1: {
          position: { z: -0.704643, x: 10.0705, y: 0 },
          rotation: { z: 0, x: 0, y: (-193.357 + 90) }
        },
        2: {
          position: { z: 5.70305, x: 3.58778, y: 0 },
          rotation: { z: 0, x: 0, y: (-193.357 + 90) }
        },
        3: {
          position: { z: -19.4338, x: -3.40196, y: 0 },
          rotation: { z: 0, x: 0, y: (-193.357 + 90) }
        }
      }
    },
    plant1: {
      name: 'plant_1',
      mesh: Plant1Model,
      scaleRatio: 1,
      position: { z: 14.8494, x: 5.88585, y: 2 },
      rotation: { z: 128.599, x: 143.72, y: (59.067 + 90) },
      clones: {
        1: {
          position: { z: -11.4527, x: -4.57248, y: 0 },
          rotation: { z: 116.338, x: 150.775, y: (52.4035 + 90) }
        },
        2: {
          position: { z: -11.4309, x: -4.66688, y: 0 },
          rotation: { z: 119.255, x: 163.941, y: (104.434 + 90) }
        },
        3: {
          position: { z: -6.57218, x: 14.281, y: 0 },
          rotation: { z: 103.518, x: 160.725, y: (47.0996 + 90) }
        },
        4: {
          position: { z: -11.4527, x: -4.57248, y: 0 },
          rotation: { z: 116.338, x: 150.775, y: (52.4035 + 90) }
        },
        5: {
          position: { z: 6.11274, x: 22.3415, y: 2 },
          rotation: { z: 103.518, x: 160.725, y: (38.7125 + 90) }
        },
        6: {
          position: { z: -11.4309, x: -4.66688, y: 0 },
          rotation: { z: 119.255, x: 163.941, y: (104.434 + 90) }
        },
        7: {
          position: { z: 6.18425, x: 22.4071, y: 0 },
          rotation: { z: 103.518, x: 160.725, y: (-13.8172 + 90) }
        },
        8: {
          position: { z: -4.48154, x: 18.3417, y: 0 },
          rotation: { z: 114.333, x: 152.156, y: (51.4454 + 90) }
        },
        9: {
          position: { z: -4.45954, x: 18.2473, y: 0 },
          rotation: { z: 116.993, x: 163.395, y: (103.798 + 90) }
        },
        10: {
          position: { z: 3.07768, x: 19.3504, y: 0 },
          rotation: { z: 131.635, x: 167.389, y: (107.512 + 90) }
        },
        11: {
          position: { z: 3.0577, x: 19.4448, y: 0 },
          rotation: { z: 128.599, x: 143.72, y: (59.067 + 90) }
        },
        12: {
          position: { z: -9.26696, x: -7.01495, y: 0 },
          rotation: { z: 127.938, x: 144.042, y: (58.6779 + 90) }
        },
        13: {
          position: { z: -9.24686, x: -7.10935, y: 0 },
          rotation: { z: 131.026, x: 167.202, y: (107.378 + 90) }
        },
        14: {
          position: { z: 5.67226, x: 13.3922, y: 0 },
          rotation: { z: 124.482, x: 165.305, y: (108.3 + 90) }
        },
        15: {
          position: { z: 5.64704, x: 13.4856, y: 0 },
          rotation: { z: 121.232, x: 147.679, y: (57.3876 + 90) }
        },
        16: {
          position: { z: -19.107, x: 2.12242, y: 0 },
          rotation: { z: 103.518, x: 160.725, y: (136.054 + 90) }
        },
        17: {
          position: { z: -19.1812, x: 2.18496, y: 0 },
          rotation: { z: 103.518, x: 160.725, y: (83.5246 + 90) }
        },
        18: {
          position: { z: 0.117828, x: -9.37785, y: 0 },
          rotation: { z: 130.407, x: 167.014, y: (107.24 + 90) }
        },
        19: {
          position: { z: 0.097614, x: -9.28345, y: 0 },
          rotation: { z: 127.274, x: 144.372, y: (58.2893 + 90) }
        },
        20: {
          position: { z: -1.05345, x: 16.7053, y: 0 },
          rotation: { z: 132.746, x: 141.837, y: (61.5769 + 90) }
        },
        21: {
          position: { z: -1.03421, x: 16.6109, y: 0 },
          rotation: { z: 135.334, x: 168.557, y: (108.283 + 90) }
        },
        22: {
          position: { z: -6.54959, x: 14.1866, y: 0 },
          rotation: { z: 103.518, x: 160.725, y: (99.6293 + 90) }
        },
        23: {
          position: { z: 3.07768, x: 19.3504, y: 0 },
          rotation: { z: 131.635, x: 167.389, y: (107.512 + 90) }
        },
        24: {
          position: { z: 3.0577, x: 19.4448, y: 0 },
          rotation: { z: 128.599, x: 143.72, y: (59.067 + 90) }
        },
        25: {
          position: { z: 14.8694, x: 5.79145, y: 2 },
          rotation: { z: 131.635, x: 167.389, y: (107.512 + 90) }
        }
      }
    },
    plant2: {
      name: 'plant_2',
      mesh: Plant2Model,
      scaleRatio: 1,
      position: { z: 14.8851, x: 5.77976, y: 0 },
      rotation: { z: -24.1779, x: 31.1843, y: (-239.118 + 90) },
      clones: {
        1: {
          position: { z: -9.23114, x: -7.03104, y: 0 },
          rotation: { z: -6.88394, x: 17.9766, y: (-245.283 + 90) }
        },
        2: {
          position: { z: 5.68536, x: 13.4711, y: 0 },
          rotation: { z: -19.6358, x: 22.942, y: (-247.283 + 90) }
        },
        3: {
          position: { z: 5.68926, x: 13.3812, y: 0 },
          rotation: { z: -17.1727, x: 27.2699, y: (-233.215 + 90) }
        },
        4: {
          position: { z: -19.1394, x: 2.19582, y: 0 },
          rotation: { z: 0.267936, x: 14.6651, y: (-206.845 + 90) }
        },
        5: {
          position: { z: -19.0859, x: 2.1234, y: 0 },
          rotation: { z: 0.267936, x: 14.6651, y: (-192.946 + 90) }
        },
        6: {
          position: { z: 0.133625, x: -9.29954, y: 0 },
          rotation: { z: -25.8443, x: 24.8959, y: (-252.28 + 90) }
        },
        7: {
          position: { z: 0.133625, x: -9.38955, y: 0 },
          rotation: { z: -22.9274, x: 30.5341, y: (-238.477 + 90) }
        },
        8: {
          position: { z: -1.01913, x: 16.5992, y: 0 },
          rotation: { z: -28.0713, x: 33.0769, y: (-241.19 + 90) }
        },
        9: {
          position: { z: -1.01913, x: 16.6892, y: 0 },
          rotation: { z: -31.2195, x: 26.338, y: (-254.606 + 90) }
        },
        10: {
          position: { z: -18.9341, x: -3.36966, y: 0 },
          rotation: { z: 0.267936, x: 14.6651, y: (-149.4 + 90) }
        },
        11: {
          position: { z: -12.572, x: 0.347565, y: 0 },
          rotation: { z: 0.267936, x: 14.6651, y: (-149.4 + 90) }
        },
        12: {
          position: { z: -11.4432, x: -8.60558, y: 0 },
          rotation: { z: 0.267936, x: 14.6651, y: (-149.4 + 90) }
        },
        13: {
          position: { z: -12.572, x: 0.347565, y: 0 },
          rotation: { z: 0.267936, x: 14.6651, y: (-149.4 + 90) }
        },
        14: {
          position: { z: -9.23114, x: -7.08547, y: 0 },
          rotation: { z: -5.86173, x: 19.5396, y: (-75.5499 + 90) }
        },
        15: {
          position: { z: 3.09332, x: 19.3387, y: 0 },
          rotation: { z: -24.1779, x: 31.1843, y: (-239.118 + 90) }
        },
        16: {
          position: { z: -11.4139, x: -4.67857, y: 0 },
          rotation: { z: -12.444, x: 24.2484, y: (-233.636 + 90) }
        },
        17: {
          position: { z: 3.09332, x: 19.4287, y: 0 },
          rotation: { z: -27.1664, x: 25.2721, y: (-252.841 + 90) }
        },
        18: {
          position: { z: -4.44241, x: 18.3256, y: 0 },
          rotation: { z: -12.1791, x: 20.1907, y: (-247.016 + 90) }
        },
        19: {
          position: { z: -4.44241, x: 18.2356, y: 0 },
          rotation: { z: -10.4876, x: 22.909, y: (-232.853 + 90) }
        },
        20: {
          position: { z: 6.11102, x: 22.3205, y: 2 },
          rotation: { z: 0.267936, x: 14.6651, y: (-290.288 + 90) }
        },
        21: {
          position: { z: -11.4139, x: -4.58857, y: 0 },
          rotation: { z: -14.3869, x: 21.0507, y: (-247.793 + 90) }
        },
        22: {
          position: { z: 6.18968, x: 22.3643, y: 2 },
          rotation: { z: 0.267936, x: 14.6651, y: (-304.187 + 90) }
        },
        23: {
          position: { z: -6.53208, x: 14.1749, y: 0 },
          rotation: { z: 0.267936, x: 14.6651, y: (-229.371 + 90) }
        },
        24: {
          position: { z: -11.4139, x: -4.58857, y: 0 },
          rotation: { z: -14.3869, x: 21.0507, y: (-247.793 + 90) }
        },
        25: {
          position: { z: -6.53208, x: 14.265, y: 0 },
          rotation: { z: 0.267936, x: 14.6651, y: (-243.27 + 90) }
        },
        26: {
          position: { z: -11.4139, x: -4.67857, y: 0 },
          rotation: { z: -12.444, x: 24.2484, y: (-233.636 + 90) }
        },
        27: {
          position: { z: 3.09332, x: 19.4287, y: 0 },
          rotation: { z: -27.1664, x: 25.2721, y: (-252.841 + 90) }
        },
        28: {
          position: { z: 3.09332, x: 19.3387, y: 0 },
          rotation: { z: -24.1779, x: 31.1843, y: (-239.118 + 90) }
        },
        29: {
          position: { z: 14.8851, x: 5.86976, y: 2 },
          rotation: { z: -27.1664, x: 25.2721, y: (-252.841 + 90) }
        }
      }
    },
    plant4: {
      name: 'plant_4',
      mesh: Plant4Model,
      scaleRatio: 1,
      position: { z: -6.29629, x: -7.77645, y: 0 },
      rotation: { z: 17.2106, x: 33.7018, y: (-156.818 + 90) },
      clones: {
        1: {
          position: { z: -6.17539, x: -7.7916, y: 0 },
          rotation: { z: 17.2106, x: 33.7018, y: (-131.06 + 90) }
        }
      }
    },
    plant5: {
      name: 'plant_5',
      mesh: Plant5Model,
      scaleRatio: 1,
      position: { z: -9.19929, x: -7.02459, y: 0 },
      rotation: { z: 176.095, x: 155.559, y: (-382.115 + 90) },
      clones: {
        1: {
          position: { z: 0.165398, x: -9.29309, y: 0 },
          rotation: { z: 151.625, x: 127.19, y: (-387.07 + 90) }
        },
        2: {
          position: { z: -11.3843, x: -4.58212, y: 0 },
          rotation: { z: 163.84, x: 134.571, y: (-389.094 + 90) }
        },
        3: {
          position: { z: -4.41333, x: 18.3321, y: 0 },
          rotation: { z: 165.339, x: 136.537, y: (-388.044 + 90) }
        },
        4: {
          position: { z: -17.2771, x: 15.0382, y: 0 },
          rotation: { z: 172.526, x: 148.337, y: (-242.161 + 90) }
        },
        5: {
          position: { z: -9.44106, x: 20.7075, y: 2 },
          rotation: { z: 69.1148, x: 6.39995, y: (-197.45 + 90) }
        },
        6: {
          position: { z: 11.2353, x: 18.7043, y: 2 },
          rotation: { z: 69.1148, x: 6.39995, y: (-63.7407 + 90) }
        },
        7: {
          position: { z: -11.1121, x: 16.1346, y: 0 },
          rotation: { z: 172.526, x: 148.337, y: (-229.146 + 90) }
        },
        8: {
          position: { z: -0.986809, x: 16.6956, y: 0 },
          rotation: { z: 148.567, x: 121.161, y: (-401.261 + 90) }
        },
        9: {
          position: { z: -9.14764, x: 10.8633, y: 0 },
          rotation: { z: 172.526, x: 148.337, y: (-291.491 + 90) }
        },
        10: {
          position: { z: -11.8576, x: 15.0382, y: 0 },
          rotation: { z: 172.526, x: 148.337, y: (-291.491 + 90) }
        },
        11: {
          position: { z: -12.2113, x: 15.0382, y: 0 },
          rotation: { z: 172.526, x: 148.337, y: (-291.491 + 90) }
        },
        12: {
          position: { z: -12.0513, x: 15.0382, y: 0 },
          rotation: { z: 172.526, x: 148.337, y: (-291.491 + 90) }
        },
        13: {
          position: { z: -12.2113, x: 15.0382, y: 0 },
          rotation: { z: 172.526, x: 148.337, y: (-291.491 + 90) }
        },
        14: {
          position: { z: -11.8576, x: 15.0382, y: 0 },
          rotation: { z: 172.526, x: 148.337, y: (-291.491 + 90) }
        },
        15: {
          position: { z: -12.0513, x: 15.0382, y: 0 },
          rotation: { z: 172.526, x: 148.337, y: (-291.491 + 90) }
        },
        16: {
          position: { z: -19.1231, x: 2.21583, y: 0 },
          rotation: { z: 172.526, x: 148.337, y: (-347.211 + 90) }
        },
        17: {
          position: { z: 5.71583, x: 13.4789, y: 0 },
          rotation: { z: 159.899, x: 130.073, y: (-389.533 + 90) }
        },
        18: {
          position: { z: 3.12524, x: 19.4352, y: 0 },
          rotation: { z: 153.04, x: 124.101, y: (-397.492 + 90) }
        },
        19: {
          position: { z: 6.20744, x: 22.3456, y: 0 },
          rotation: { z: 172.526, x: 148.337, y: (-444.553 + 90) }
        },
        20: {
          position: { z: -11.3843, x: -4.58212, y: 0 },
          rotation: { z: 163.84, x: 134.571, y: (-389.094 + 90) }
        },
        21: {
          position: { z: -6.50714, x: 14.2714, y: 0 },
          rotation: { z: 172.526, x: 148.337, y: (-383.636 + 90) }
        },
        22: {
          position: { z: 3.12524, x: 19.4352, y: 0 },
          rotation: { z: 153.04, x: 124.101, y: (-397.492 + 90) }
        },
        23: {
          position: { z: 14.917, x: 5.8762, y: 2 },
          rotation: { z: 153.04, x: 124.101, y: (-397.492 + 90) }
        },
        24: {
          position: { z: -11.0139, x: 16.1346, y: 0 },
          rotation: { z: 172.526, x: 148.337, y: (-437.467 + 90) }
        },
        25: {
          position: { z: -12.0513, x: 15.0382, y: 0 },
          rotation: { z: 172.526, x: 148.337, y: (-291.491 + 90) }
        }
      }
    },
    plant6: {
      name: 'plant_6',
      mesh: Plant6Model,
      scaleRatio: 1,
      position: { z: 11.7788, x: 0.694911, y: 0 },
      rotation: { z: 55.9873, x: 49.5779, y: (17.3245 + 90) },
      clones: {
        1: {
          position: { z: 11.9206, x: 0.576876, y: 0 },
          rotation: { z: 55.9873, x: 49.5779, y: (18.1983 + 90) }
        },
        2: {
          position: { z: 11.8229, x: 0.842912, y: 0 },
          rotation: { z: 55.9873, x: 49.5779, y: (-16.7298 + 90) }
        },
        3: {
          position: { z: 12.053, x: 0.692395, y: 0 },
          rotation: { z: 55.9873, x: 49.5779, y: (-64.739 + 90) }
        },
        4: {
          position: { z: 11.9009, x: 0.714642, y: 0 },
          rotation: { z: 55.9873, x: 49.5779, y: (-71.4787 + 90) }
        }
      }
    },
    plant7: {
      name: 'plant_7',
      mesh: Plant7Model,
      scaleRatio: 1,
      position: { z: -6.17539, x: -7.97695, y: 0 },
      rotation: { z: 17.2106, x: 33.7018, y: (-156.818 + 90) },
      clones: {
        1: {
          position: { z: 4.17222, x: -7.60644, y: 0 },
          rotation: { z: 0, x: 0, y: (-117.252 + 90) }
        },
        2: {
          position: { z: 11.8894, x: 0.83318, y: 0 },
          rotation: { z: 55.9873, x: 49.5779, y: (-46.1709 + 90) }
        }
      }
    },
    lake: {
      name: 'lake',
      mesh: LakeModel,
      scaleRatio: 1,
      position: { z: -8.87839, x: 14.0986, y: -0.5 },
      rotation: { z: 0, x: 0, y: (0 + 90) }
    },
    ocean: {
      name: 'ocean',
      mesh: OceanModel,
      scaleRatio: 1,
      position: { z: -10.8158, x: -0.655412, y: -1.75 },
      rotation: { z: 0, x: 0, y: (44.5566 + 90) },
      clones: {
        1: {
          position: { z: 6.17156, x: -4.52184, y: -1.75 },
          rotation: { z: 0, x: 0, y: (132.278 + 90) }
        },
        2: {
          position: { z: -19.179, x: 19.8061, y: -1.75 },
          rotation: { z: 0, x: 0, y: (132.278 + 90) }
        },
        3: {
          position: { z: -0.269232, x: 27.7425, y: -1.75 },
          rotation: { z: 0, x: 0, y: (88.5633 + 90) }
        },
        4: {
          position: { z: -3.48184, x: -14.7299, y: -1.75 },
          rotation: { z: 0, x: 0, y: (88.7471 + 90) }
        }
      }
    },
    altar: {
      name: 'altar',
      mesh: AltarModel,
      scaleRatio: 1,
      position: { z: -3.3115, x: 0.375552, y: 0 },
      rotation: { z: 0, x: 0, y: (0 + 90) },
      clones: {
        1: {
          position: { z: -13.7714, x: -3.32996, y: 0 },
          rotation: { z: 0, x: 0, y: (0 + 90) }
        },
        2: {
          position: { z: 1.078, x: 12.2193, y: 0 },
          rotation: { z: 0, x: 0, y: (0 + 90) }
        },
        3: {
          position: { z: 9.29341, x: 5.013, y: 0 },
          rotation: { z: 0, x: 0, y: (0 + 90) }
        },
        4: {
          position: { z: -17.2499, x: 12.6885, y: 0 },
          rotation: { z: 0, x: 0, y: (0 + 90) }
        },
        5: {
          position: { z: 8.61542, x: 9.59333, y: 0 },
          rotation: { z: 0, x: 0, y: (0 + 90) }
        },
        6: {
          position: { z: -19.8692, x: -0.096465, y: 0 },
          rotation: { z: 0, x: 0, y: (0 + 90) }
        },
        7: {
          position: { z: -6.1493, x: -9.8262, y: 0 },
          rotation: { z: 0, x: 0, y: (0 + 90) }
        },
        8: {
          position: { z: -6.5384, x: 11.4497, y: 0 },
          rotation: { z: 0, x: 0, y: (0 + 90) }
        },
        9: {
          position: { z: 0.524298, x: 23.1124, y: 0 },
          rotation: { z: 0, x: 0, y: (0 + 90) }
        }
      }
    },
    kioskCommon: {
      name: 'kiosk_common',
      mesh: KioskCommonModel,
      scaleRatio: 1,
      position: { z: -3.76736, x: 5.62048, y: 0 },
      rotation: { z: 0.630218, x: -0.000001, y: (-180 + 90) }
    },
    kiosk: {
      name: 'kiosk',
      mesh: KioskLumaModel,
      scaleRatio: 1,
      position: { z: 2.56307, x: -10.4196, y: 0 },
      rotation: { z: 0, x: 0, y: (0 + 90) },
      clones: {
        1: {
          position: { z: -19.4397, x: 9.15446, y: 0 },
          rotation: { z: 0, x: 0, y: (0 + 90) }
        },
        2: {
          position: { z: 8.80571, x: -0.500739, y: 0 },
          rotation: { z: 0, x: 0, y: (0 + 90) }
        },
        3: {
          position: { z: 4.40256, x: 6.65597, y: 0 },
          rotation: { z: 0, x: 0, y: (0 + 90) }
        }
      }
    },
    stele: {
      name: 'stele',
      mesh: SteleModel,
      scaleRatio: 1,
      position: { z: 1.546, x: -2.61429, y: 0 },
      rotation: { z: 0, x: 0, y: (-28.8208 + 90) },
      clones: {
        1: {
          position: { z: -8.10159, x: -8.64215, y: 0 },
          rotation: { z: 0, x: 0, y: (67.2422 + 90) }
        },
        2: {
          position: { z: 1.546, x: 10.8387, y: 0 },
          rotation: { z: 0, x: 0, y: (-87.9207 + 90) }
        },
        3: {
          position: { z: -13.1192, x: 10.8387, y: 0 },
          rotation: { z: 0, x: 0, y: (-16.8301 + 90) }
        },
        4: {
          position: { z: 1.28997, x: 4.41635, y: 0 },
          rotation: { z: 0, x: 0, y: (-29.697 + 90) }
        },
        5: {
          position: { z: -17.7415, x: -0.094192, y: 0 },
          rotation: { z: 0, x: 0, y: (-3.19065 + 90) }
        },
        6: {
          position: { z: 10.7251, x: 0.491271, y: 0 },
          rotation: { z: 0, x: 0, y: (14.4456 + 90) }
        },
        7: {
          position: { z: -6.0827, x: -1.44495, y: 0 },
          rotation: { z: 0, x: 0, y: (121.065 + 90) }
        },
        8: {
          position: { z: -18.0923, x: 19.1122, y: 0 },
          rotation: { z: 0, x: 0, y: (112.651 + 90) }
        },
        9: {
          position: { z: -4.16514, x: 22.8879, y: 0 },
          rotation: { z: 0, x: 0, y: (80.6625 + 90) }
        }
      }
    },
    column1: {
      name: 'column_1',
      mesh: Column1Model,
      scaleRatio: 1,
      position: { z: 0, x: 0, y: 0 },
      rotation: { z: 0, x: 0, y: (0 + 90) },
      clones: {
        1: {
          position: { z: -18.693, x: 6.21746, y: 0 },
          rotation: { z: 0, x: 0, y: (0 + 90) }
        },
        2: {
          position: { z: -11.1752, x: 20.1559, y: 0 },
          rotation: { z: 0, x: 0, y: (0 + 90) }
        }
      }
    },
    column2: {
      name: 'column_2',
      mesh: Column2Model,
      scaleRatio: 1,
      position: { z: -8.09141, x: 7.28786, y: 0 },
      rotation: { z: 0, x: 0, y: (0 + 90) },
      clones: {
        1: {
          position: { z: -0.556638, x: -5.94739, y: 0 },
          rotation: { z: 0, x: 0, y: (0 + 90) }
        },
        2: {
          position: { z: -0.557315, x: 19.5952, y: 0 },
          rotation: { z: 0, x: 0, y: (0 + 90) }
        }
      }
    },
    column3: {
      name: 'column_3',
      mesh: Column3Model,
      texture: DiffuseColumn3,
      scaleRatio: 1,
      position: { z: -13.3975, x: -0.776054, y: 0 },
      rotation: { z: 0, x: 0, y: (0 + 90) },
      clones: {
        1: {
          position: { z: 7.77021, x: -4.01629, y: 0 },
          rotation: { z: 0, x: 0, y: (0 + 90) }
        },
        2: {
          position: { z: 7.47721, x: -4.46735, y: 0 },
          rotation: { z: 0, x: 0, y: (0 + 90) }
        }
      }
    },
    column4: {
      name: 'column_4',
      mesh: Column4Model,
      scaleRatio: 1,
      position: { z: 3.47905, x: 0, y: 0 },
      rotation: { z: 0, x: 0, y: (0 + 90) },
      clones: {
        1: {
          position: { z: -19.9719, x: 4.12014, y: 0 },
          rotation: { z: 0, x: 0, y: (0 + 90) }
        },
        2: {
          position: { z: -18.6122, x: 14.4862, y: 0 },
          rotation: { z: 0, x: 0, y: (0 + 90) }
        }
      }
    },
    doorLeft: {
      name: 'door_left',
      mesh: DoorLeftModel,
      scaleRatio: 1,
      position: { z: -2.03023, x: 18.788, y: 0 },
      rotation: { z: 90, x: 0, y: (0 + 90) }
    },
    doorOutside: {
      name: 'door_outside',
      mesh: DoorOutsideModel,
      scaleRatio: 1,
      position: { z: -2.03023, x: 18.788, y: 0 },
      rotation: { z: 90, x: 0, y: (0 + 90) }
    },
    doorRight: {
      name: 'door_outside',
      mesh: DoorRightModel,
      scaleRatio: 1,
      position: { z: -2.03023, x: 18.788, y: 0 },
      rotation: { z: 90, x: 0, y: (0 + 90) }
    },
    owlStatue: {
      name: 'owl_statue_part',
      mesh: OwlStatueModel,
      scaleRatio: 1,
      position: { z: -9.6036, x: 18.788, y: 0 },
      rotation: { z: 0, x: 0, y: (0 + 90) }
      // clones: {
      //   1: { position: { z: -9.48802, x: -5.34351, y: 0 } },
      //   2: { position: { z: -9.46352, x: -5.56963, y: 0 } },
      //   3: { position: { z: -9.324, x: -5.4285, y: 0 } },
      //   4: { position: { z: -9.62576, x: -5.70375, y: 0 } }
      // }
    },
    catStatue: {
      name: 'cat_statue_part',
      mesh: CatStatueModel,
      scaleRatio: 1,
      position: { z: -12.2942, x: 7.10393, y: 0 },
      rotation: { z: 0, x: 0, y: (0 + 90) }
      // clones: {
      //   1: { position: { z: -12.1787, x: 7.25148, y: 0 } },
      //   2: { position: { z: -12.1542, x: 7.02536, y: 0 } },
      //   3: { position: { z: -12.0147, x: 7.16649, y: 0 } },
      //   4: { position: { z: -12.3164, x: 6.89124, y: 0 } },
      //   5: { position: { z: -12.4061, x: 7.25148, y: 0 } }
      // }
    },
    eagleStatue: {
      name: 'eagle_statue_part',
      mesh: CatStatueModel,
      scaleRatio: 1,
      position: { z: -7.27648, x: 2.00783, y: 0 },
      rotation: { z: 0, x: 0, y: (0 + 90) }
      // clones: {
      //   1: { position: { z: -7.38838, x: 2.15538, y: 0 } },
      //   2: { position: { z: -7.29864, x: 1.79513, y: 0 } },
      //   3: { position: { z: -6.99689, x: 2.07039, y: 0 } },
      //   4: { position: { z: -7.1364, x: 1.92925, y: 0 } },
      //   5: { position: { z: -7.1609, x: 2.15538, y: 0 } },
      //   6: { position: { z: -7.693, x: 1.82196, y: 0 } },
      //   7: { position: { z: -7.02923, x: 1.82196, y: 0 } }
      // }
    },
    boat: {
      name: 'boat',
      mesh: BoatModel,
      scaleRatio: 1,
      position: { z: 10.1659, x: -4.76008, y: -0.5 },
      rotation: { z: 0, x: 0, y: (-44.2346 + 90) }
    },
    arch: {
      name: 'arch',
      mesh: ArchModel,
      scaleRatio: 1,
      position: { z: -7.40124, x: -2.23076, y: 0 },
      rotation: { z: 0, x: 0, y: -51.9134 },
      clones: {
        1: {
          position: { z: -8.46461, x: -2.98167, y: 0 },
          rotation: { z: 0, x: 0, y: (-51.9134 + 90) }
        },
        2: {
          position: { z: -5.47352, x: -7.2117, y: 0 },
          rotation: { z: 0, x: 0, y: (-51.0519 + 90) }
        },
        3: {
          position: { z: -4.42156, x: -6.44488, y: 0 },
          rotation: { z: 0, x: 0, y: (-51.0519 + 90) }
        },
        4: {
          position: { z: -15.3647, x: 3.79359, y: 0 },
          rotation: { z: 0.331597, x: -1.14914, y: (-19.5539 + 90) }
        },
        5: {
          position: { z: -14.9984, x: 4.95798, y: 0 },
          rotation: { z: 1.05213, x: -2.39491, y: (-18.1504 + 90) }
        },
        6: {
          position: { z: 3.20016, x: -4.10814, y: 0 },
          rotation: { z: 0, x: 0, y: (15.3636 + 90) }
        },
        7: {
          position: { z: -15.1811, x: 12.1407, y: 0 },
          rotation: { z: 0, x: 0, y: (78.0385 + 90) }
        },
        8: {
          position: { z: 3.90104, x: 15.8449, y: 0 },
          rotation: { z: 0, x: 0, y: (112.383 + 90) }
        }
      }
    },
    pier: {
      name: 'pier',
      mesh: PierModel,
      scaleRatio: 1,
      position: { z: 8.38487, x: -4.41869, y: 0 },
      rotation: { z: 0, x: 0, y: (58.2024 + 90) },
      clones: {
        1: {
          position: { z: -11.3189, x: 14.3556, y: 0 },
          rotation: { z: 0, x: 0, y: (89.985 + 90) }
        }
      }
    }
  }
}
