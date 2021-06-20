import { AltarModel, ArchModel, BoatModel, CatStatueModel, Column1Model, Column2Model, Column3Model, Column4Model, DoorLeftModel, DoorOutsideModel, DoorRightModel, KioskCommonModel, KioskLumaModel, LakeModel, OceanModel, OwlStatueModel, PierModel, Plant1Model, Plant2Model, Plant4Model, Plant5Model, Plant6Model, Plant7Model, SteleModel, Stone10Model, Stone11Model, Stone12Model, Stone13Model, Stone14Model, Stone15Model, Stone16Model, Stone17Model, Stone18Model, Stone1Model, Stone20Model, Stone2Model, Stone3Model, Stone4Model, Stone5Model, Stone7Model, Stone8Model, Stone9Model, Tree1Model, Tree2Model, Tree3Model, Tree4Model, Tree5Model } from '../../assets/meshes'
import { DiffuseColumn3 } from '../../assets/textures'

export default () => {
  return {
    tree1: {
      name: 'tree1',
      mesh: Tree1Model,
      scaleRatio: 0.169884,
      position: { z: 0, x: 0.245187, y: 0 },
      clones: {
        1: { position: { z: -14.4242, x: -2.83575, y: 0 } },
        2: { position: { z: -7.75535, x: 22.9944, y: 0 } },
        3: { position: { z: -12.2822, x: 16.2127, y: 0 } },
        4: { position: { z: -8.46063, x: -6.61735, y: 0 } },
        5: { position: { z: -13.6783, x: 1.62371, y: 0 } },
        6: { position: { z: -19.0966, x: -0.79713, y: 0 } },
        7: { position: { z: 9.5053, x: 4.13337, y: 0 } },
        8: { position: { z: 3.12103, x: 19.4932, y: 0 } },
        9: { position: { z: 2.10734, x: 12.2868, y: 0 } },
        10: { position: { z: -20.4184, x: 8.35148, y: 0 } },
        11: { position: { z: -2.63256, x: 0.561242, y: 0 } },
        12: { position: { z: -4.46262, x: -2.83575, y: 0 } },
        13: { position: { z: -6.60174, x: -1.06995, y: 0 } },
        14: { position: { z: -8.75323, x: 1.48275, y: 0 } },
        15: { position: { z: 0.48834, x: 4.65396, y: 0 } },
        16: { position: { z: -1.97011, x: -3.9029, y: 0 } },
        17: { position: { z: -3.55991, x: -3.58029, y: 0 } },
        18: { position: { z: -5.62353, x: 0.894694, y: 0 } },
        19: { position: { z: -8.75323, x: 2.66798, y: 0 } },
        20: { position: { z: -6.45164, x: 3.64461, y: 0 } },
        21: { position: { z: -8.54865, x: 4.48584, y: 0 } },
        22: { position: { z: -3.49558, x: -0.999082, y: 0 } },
        23: { position: { z: -2.67399, x: 8.65162, y: 0 } },
        24: { position: { z: -5.01252, x: 8.7734, y: 0 } },
        25: { position: { z: -3.80086, x: -7.50587, y: 0 } },
        26: { position: { z: -16.7838, x: 19.601, y: 0 } },
        27: { position: { z: -18.6242, x: 17.3964, y: 0 } },
        28: { position: { z: -1.51976, x: 14.4053, y: 0 } }
      }
    },
    tree2: {
      name: 'tree_2',
      mesh: Tree2Model,
      scaleRatio: 0.159311,
      position: { z: 8.25919, x: 9.041, y: 0 },
      clones: {
        1: { position: { z: 5.32306, x: 22.5974, y: 0 } },
        2: { position: { z: -14.4242, x: -3.65443, y: 0 } },
        3: { position: { z: -6.96285, x: 22.789, y: 0 } },
        4: { position: { z: -12.7783, x: 15.5358, y: 0 } },
        5: { position: { z: -13.2723, x: 16.0611, y: 0 } },
        6: { position: { z: -8.48687, x: -5.61599, y: 0 } },
        7: { position: { z: -9.06998, x: -6.04021, y: 0 } },
        8: { position: { z: -14.2877, x: 2.20086, y: 0 } },
        9: { position: { z: -13.7046, x: 2.62507, y: 0 } },
        10: { position: { z: -18.9083, x: -0.000404, y: 0 } },
        11: { position: { z: -9.74449, x: 10.871, y: 0 } },
        12: { position: { z: 10.1355, x: 4.68763, y: 0 } },
        13: { position: { z: 10.5049, x: 4.0683, y: 0 } },
        14: { position: { z: 3.82076, x: 19.0682, y: 0 } },
        15: { position: { z: -10.6682, x: 19.3701, y: 0 } },
        16: { position: { z: 1.55295, x: 11.6844, y: 0 } },
        17: { position: { z: -20.4447, x: 9.35284, y: 0 } },
        18: { position: { z: -21.0278, x: 8.92863, y: 0 } },
        19: { position: { z: -4.46262, x: -3.65443, y: 0 } },
        20: { position: { z: -2.6588, x: 1.56261, y: 0 } },
        21: { position: { z: -7.12347, x: -0.439043, y: 0 } },
        22: { position: { z: -8.41495, x: 0.539893, y: 0 } },
        23: { position: { z: -7.99387, x: 1.12528, y: 0 } },
        24: { position: { z: -8.62789, x: 7.15033, y: 0 } },
        25: { position: { z: -9.78903, x: 5.79724, y: 0 } },
        26: { position: { z: 0.365301, x: 5.64808, y: 0 } },
        27: { position: { z: -0.174014, x: 5.16942, y: 0 } },
        28: { position: { z: -2.17683, x: -3.08946, y: 0 } },
        29: { position: { z: -1.45727, x: -3.04242, y: 0 } },
        30: { position: { z: -3.55991, x: -4.39898, y: 0 } },
        31: { position: { z: -8.14776, x: 6.62365, y: 0 } },
        32: { position: { z: -5.64977, x: 1.89606, y: 0 } },
        33: { position: { z: -6.23288, x: 1.47184, y: 0 } },
        34: { position: { z: -7.99387, x: 2.31051, y: 0 } },
        35: { position: { z: -7.26745, x: 3.84177, y: 0 } },
        36: { position: { z: -6.97295, x: 4.49998, y: 0 } },
        37: { position: { z: -9.11005, x: 5.31544, y: 0 } },
        38: { position: { z: -9.37291, x: 4.64396, y: 0 } },
        39: { position: { z: -0.409929, x: 2.30211, y: 0 } },
        40: { position: { z: -1.54129, x: -0.672402, y: 0 } },
        41: { position: { z: -7.91086, x: 3.26608, y: 0 } },
        42: { position: { z: -1.88589, x: 9.26994, y: 0 } },
        43: { position: { z: -2.57418, x: 9.48496, y: 0 } },
        44: { position: { z: -1.56129, x: -5.24051, y: 0 } },
        45: { position: { z: -1.16093, x: -5.84026, y: 0 } },
        46: { position: { z: -2.21551, x: -7.9317, y: 0 } },
        47: { position: { z: -2.74736, x: -8.41864, y: 0 } },
        48: { position: { z: -2.82017, x: -7.30174, y: 0 } },
        49: { position: { z: -3.34144, x: -6.80348, y: 0 } },
        50: { position: { z: 0.386416, x: 6.86382, y: 0 } },
        51: { position: { z: -16.3564, x: 20.507, y: 0 } },
        52: { position: { z: -18.4776, x: 18.2227, y: 0 } },
        53: { position: { z: -17.8025, x: 17.9693, y: 0 } },
        54: { position: { z: -2.18211, x: 14.9208, y: 0 } },
        55: { position: { z: -1.6428, x: 15.3994, y: 0 } }
      }
    },
    tree3: {
      name: 'tree_3',
      mesh: Tree3Model,
      scaleRatio: 0.17195,
      position: { z: 7.99686, x: 7.98744, y: 0 },
      clones: {
        1: { position: { z: -12.2784, x: 14.6196, y: 0 } },
        2: { position: { z: -10.0417, x: -6.42133, y: 0 } },
        3: { position: { z: -7.04531, x: 16.677, y: 0 } },
        4: { position: { z: -7.07231, x: 11.8461, y: 0 } },
        5: { position: { z: 9.8445, x: 5.68997, y: 0 } },
        6: { position: { z: -9.4953, x: 17.2775, y: 0 } },
        7: { position: { z: -10.1245, x: 19.5553, y: 0 } },
        8: { position: { z: 8.74997, x: 8.65154, y: 0 } },
        9: { position: { z: 14.9448, x: 6.57962, y: 0 } },
        10: { position: { z: -5.14208, x: 9.44178, y: 0 } },
        11: { position: { z: -4.21358, x: 0.75727, y: 0 } },
        12: { position: { z: -6.53216, x: 8.39493, y: 0 } },
        13: { position: { z: -3.20182, x: -2.89247, y: 0 } },
        14: { position: { z: -7.38743, x: 6.70025, y: 0 } },
        15: { position: { z: -3.86661, x: 2.18479, y: 0 } },
        16: { position: { z: 0.080851, x: 1.91265, y: 0 } },
        17: { position: { z: -0.672262, x: 1.24856, y: 0 } },
        18: { position: { z: -3.45964, x: 10.0376, y: 0 } },
        19: { position: { z: -1.2737, x: 3.43652, y: 0 } },
        20: { position: { z: -2.02681, x: 2.77243, y: 0 } }
      }
    },
    tree4: {
      name: 'tree_4',
      mesh: Tree4Model,
      scaleRatio: 0.17195,
      position: { z: -4.69189, x: -10.3555, y: 0 },
      clones: {
        1: { position: { z: 6.01407, x: -0.377798, y: 0 } },
        2: { position: { z: -4.00003, x: -0.260216, y: 0 } },
        3: { position: { z: -0.566624, x: -5.17516, y: 0 } },
        4: { position: { z: -4.62879, x: -0.979241, y: 0 } },
        5: { position: { z: -0.315786, x: 6.73594, y: 0 } },
        6: { position: { z: -7.76149, x: 5.51406, y: 0 } },
        7: { position: { z: -1.47758, x: 7.69835, y: 0 } },
        8: { position: { z: -0.848822, x: 8.41737, y: 0 } },
        9: { position: { z: -1.36823, x: -2.13871, y: 0 } },
        10: { position: { z: -3.45423, x: -1.96262, y: 0 } },
        11: { position: { z: 1.18849, x: 5.99988, y: 0 } },
        12: { position: { z: -5.13467, x: -3.50787, y: 0 } },
        13: { position: { z: -0.819611, x: 15.5034, y: 0 } }
      }
    },
    tree5: {
      name: 'tree_5',
      mesh: Tree5Model,
      scaleRatio: 0.17195,
      position: { z: 0.881225, x: -2.90709, y: 0 },
      clones: {
        1: { position: { z: -14.9938, x: -2.73745, y: 0 } },
        2: { position: { z: -7.67297, x: 22.4677, y: 0 } },
        3: { position: { z: -17.0878, x: -4.9955, y: 0 } },
        4: { position: { z: -18.5649, x: -1.02383, y: 0 } },
        5: { position: { z: -7.63015, x: 16.9379, y: 0 } },
        6: { position: { z: -6.91834, x: 12.4677, y: 0 } },
        7: { position: { z: -10.8239, x: 11.9876, y: 0 } },
        8: { position: { z: 2.61759, x: 21.7349, y: 0 } },
        9: { position: { z: -6.35852, x: 11.9876, y: 0 } },
        10: { position: { z: 12.4175, x: 0.820755, y: 0 } },
        11: { position: { z: 1.60389, x: 12.4622, y: 0 } },
        12: { position: { z: -3.06955, x: 1.20829, y: 0 } },
        13: { position: { z: -5.03221, x: -2.73745, y: 0 } },
        14: { position: { z: -6.10015, x: -0.782705, y: 0 } },
        15: { position: { z: -6.40735, x: 0.060547, y: 0 } },
        16: { position: { z: 0.124843, x: 8.65976, y: 0 } },
        17: { position: { z: -7.2192, x: 8.15514, y: 0 } },
        18: { position: { z: -6.59781, x: 7.75793, y: 0 } },
        19: { position: { z: -3.06955, x: 1.20829, y: 0 } },
        20: { position: { z: -5.80894, x: 2.18269, y: 0 } },
        21: { position: { z: -1.76015, x: -5.68392, y: 0 } },
        22: { position: { z: -1.79704, x: 0.048798, y: 0 } },
        23: { position: { z: -9.28812, x: 3.82319, y: 0 } },
        24: { position: { z: -2.55948, x: -1.28962, y: 0 } },
        25: { position: { z: -4.23685, x: 8.65976, y: 0 } },
        26: { position: { z: -0.886366, x: 7.8602, y: 0 } },
        27: { position: { z: -1.96333, x: -2.12823, y: 0 } },
        28: { position: { z: -2.4916, x: 2.13183, y: 0 } },
        29: { position: { z: -5.43055, x: -1.69973, y: 0 } },
        30: { position: { z: -2.90101, x: -4.27889, y: 0 } },
        31: { position: { z: -17.6508, x: 18.2599, y: 0 } }
      }
    },
    stone1: {
      name: 'stone_1',
      mesh: Stone1Model,
      scaleRatio: 1,
      position: { z: 5.45584, x: 22.9282, y: 0 }
    },
    stone2: {
      name: 'stone_2',
      mesh: Stone2Model,
      scaleRatio: 1,
      position: { z: 3.92005, x: -7.60588, y: 0 },
      clones: {
        1: { position: { z: 7.67981, x: 16.5005, y: 0 } }
      }
    },
    stone3: {
      name: 'stone_3',
      mesh: Stone3Model,
      scaleRatio: 1,
      position: { z: 2.3694, x: 12.2615, y: 0 },
      clones: {
        1: { position: { z: 9.30867, x: 5.61827, y: 0 } },
        2: { position: { z: 1.39796, x: -7.60588, y: 0 } },
        3: { position: { z: -10.9595, x: 11.836, y: 0 } },
        4: { position: { z: 3.82994, x: 19.0167, y: 0 } },
        5: { position: { z: 5.75798, x: 3.428, y: 0 } },
        6: { position: { z: 8.09337, x: 13.8158, y: 0 } },
        7: { position: { z: -1.58812, x: -11.8849, y: 0 } },
        8: { position: { z: 1.026, x: -0.055202, y: 0 } },
        9: { position: { z: 9.47293, x: 5.59626, y: 0 } }
      }
    },
    stone4: {
      name: 'stone_4',
      mesh: Stone4Model,
      scaleRatio: 1,
      position: { z: -7.14633, x: 22.0889, y: 0 },
      clones: {
        1: { position: { z: -16.3062, x: -5.91866, y: 0 } }
      }
    },
    stone5: {
      name: 'stone_5',
      mesh: Stone5Model,
      scaleRatio: 1,
      position: { z: 10.7121, x: -10.0092, y: 0 }
    },
    stone7: {
      name: 'stone_7',
      mesh: Stone7Model,
      scaleRatio: 1,
      position: { z: 5.23307, x: -7.60588, y: 0 },
      clones: {
        1: { position: { z: 10.7121, x: -10.0092, y: 0 } }
      }
    },
    stone8: {
      name: 'stone_8',
      mesh: Stone8Model,
      scaleRatio: 1,
      position: { z: -1.76798, x: -7.60588, y: 0 }
    },
    stone9: {
      name: 'stone_9',
      mesh: Stone9Model,
      scaleRatio: 1,
      position: { z: -16.0439, x: -6.61739, y: 0 }
    },
    stone10: {
      name: 'stone_10',
      mesh: Stone10Model,
      scaleRatio: 1,
      position: { z: 10.0248, x: 2.94097, y: 0 },
      clones: {
        1: { position: { z: -10.5098, x: 5.54174, y: 0 } }
      }
    },
    stone11: {
      name: 'stone_11',
      mesh: Stone11Model,
      scaleRatio: 1,
      position: { z: 5.43328, x: 16.8967, y: 0 },
      clones: {
        1: { position: { z: 3.80167, x: 19.0978, y: 0 } },
        2: { position: { z: 8.06509, x: 13.8969, y: 0 } },
        3: { position: { z: 4.8055, x: 11.2125, y: 0 } },
        4: { position: { z: 9.3177, x: 5.3755, y: 0 } },
        5: { position: { z: 5.72971, x: 3.50916, y: 0 } }
      }
    },
    stone12: {
      name: 'stone_12',
      mesh: Stone12Model,
      scaleRatio: 1,
      position: { z: -15.022, x: -4.03129, y: 0 },
      clones: {
        1: { position: { z: -8.93777, x: -8.20821, y: 0 } },
        2: { position: { z: -15.022, x: 1.91415, y: 0 } },
        3: { position: { z: -7.71811, x: 11.1954, y: 0 } },
        4: { position: { z: -19.9322, x: 9.70643, y: 0} },
        5: { position: { z: -16.8139, x: -5.17041, y: 0 } },
        6: { position: { z: -15.1198, x: 8.59476, y: 0 } },
        7: { position: { z: -19.1108, x: 15.8057, y: 0 } },
        8: { position: { z: -14.7665, x: 20.8149, y: 0 } },
        9: { position: { z: -9.72364, x: 1.20416, y: 0 } },
        10: { position: { z: 4.24432, x: 19.0417, y: 0 } },
        11: { position: { z: 0.704491, x: 20.8149, y: 0 } },
        12: { position: { z: -1.87108, x: 1.20416, y: 0 } }
      }
    },
    stone13: {
      name: 'stone_13',
      mesh: Stone13Model,
      scaleRatio: 1,
      position: { z: -10.7323, x: 11.8508, y: 0 },
      clones: {
        1: { position: { z: -6.54101, x: 13.2194, y: 0 } }
      }
    },
    stone14: {
      name: 'stone_14',
      mesh: Stone14Model,
      scaleRatio: 1,
      position: { z: 9.38241, x: 4.03124, y: 0},
      clones: {
        1: { position: { z: 15.4121, x: 4.12881, y: 0 } }
      }
    },
    stone15: {
      name: 'stone_15',
      mesh: Stone15Model,
      scaleRatio: 1,
      position: { z: -0.768637, x: 1.93423, y: 0},
      clones: {
        1: { position: { z: 7.90048, x: 8.67311, y: 0} }
      }
    },
    stone16: {
      name: 'stone_16',
      mesh: Stone16Model,
      scaleRatio: 1,
      position: { z: -5.60227, x: -10.5128, y: 0 },
    },
    stone17: {
      name: 'stone_17',
      mesh: Stone17Model,
      scaleRatio: 1,
      position: { z: -19.3614, x: -2.61345, y: 0 },
      clones: {
        1: { position: { z: -11.8608, x: 15.4688, y: 0} },
        2: { position: { z: 10.2666, x: 12.5534, y: 0 } }
      }
    },
    stone18: {
      name: 'stone_18',
      mesh: Stone18Model,
      scaleRatio: 1,
      position: { z: 11.9744, x: 1.44585, y: 0 }
    },
    stone20: {
      name: 'stone_20',
      mesh: Stone20Model,
      scaleRatio: 1,
      position: { z: -5.92325, x: -0.852257, y: 0 },
      clones: {
        1: { position: { z: -0.704643, x: 10.0705, y: 0 } },
        2: { position: { z: 5.70305, x: 3.58778, y: 0 } },
        3: { position: { z: -19.4338, x: -3.40196, y: 0 } }
      }
    },
    plant1: {
      name: 'plant_1',
      mesh: Plant1Model,
      scaleRatio: 1,
      position: { z: 14.8494, x: 5.88585, y: 0 },
      clones: {
        1: { position: { z: -11.4527, x: -4.57248, y: 0 } },
        2: { position: { z: -11.4309, x: -4.66688, y: 0 } },
        3: { position: { z: -6.57218, x: 14.281, y: 0 } },
        4: { position: { z: -11.4527, x: -4.57248, y: 0 } },
        5: { position: { z: 6.11274, x: 22.3415, y: 0 } },
        6: { position: { z: -11.4309, x: -4.66688, y: 0 } },
        7: { position: { z: 6.18425, x: 22.4071, y: 0 } },
        8: { position: { z: -4.48154, x: 18.3417, y: 0 } },
        9: { position: { z: -4.45954, x: 18.2473, y: 0 } },
        10: { position: { z: 3.07768, x: 19.3504, y: 0 } },
        11: { position: { z: 3.0577, x: 19.4448, y: 0 } },
        12: { position: { z: -9.26696, x: -7.01495, y: 0 } },
        13: { position: { z: -9.24686, x: -7.10935, y: 0 } },
        14: { position: { z: 5.67226, x: 13.3922, y: 0 } },
        15: { position: { z: 5.64704, x: 13.4856, y: 0 } },
        16: { position: { z: -19.107, x: 2.12242, y: 0 } },
        17: { position: { z: -19.1812, x: 2.18496, y: 0 } },
        18: { position: { z: 0.117828, x: -9.37785, y: 0 } },
        19: { position: { z: 0.097614, x: -9.28345, y: 0 } },
        20: { position: { z: -1.05345, x: 16.7053, y: 0 } },
        21: { position: { z: -1.03421, x: 16.6109, y: 0 } },
        22: { position: { z: -6.54959, x: 14.1866, y: 0 } },
        23: { position: { z: 3.07768, x: 19.3504, y: 0 } },
        24: { position: { z: 3.0577, x: 19.4448, y: 0 } }
      }
    },
    plant2: {
      name: 'plant_2',
      mesh: Plant2Model,
      scaleRatio: 1,
      position: { z: 14.8851, x: 5.77976, y: 0 },
      clones: {
        1: { position: { z: -9.23114, x: -7.03104, y: 0 } },
        2: { position: { z: 5.68536, x: 13.4711, y: 0 } },
        3: { position: { z: 5.68926, x: 13.3812, y: 0 } },
        4: { position: { z: -19.1394, x: 2.19582, y: 0 } },
        5: { position: { z: -19.0859, x: 2.1234, y: 0 } },
        6: { position: { z: 0.133625, x: -9.29954, y: 0 } },
        7: { position: { z: 0.133625, x: -9.38955, y: 0 } },
        8: { position: { z: -1.01913, x: 16.5992, y: 0 } },
        9: { position: { z: -1.01913, x: 16.6892, y: 0 } },
        10: { position: { z: -18.9341, x: -3.36966, y: 0 } },
        11: { position: { z: -12.572, x: 0.347565, y: 0 } },
        12: { position: { z: -11.4432, x: -8.60558, y: 0 } },
        13: { position: { z: -12.572, x: 0.347565, y: 0 } },
        14: { position: { z: -9.23114, x: -7.08547, y: 0 } },
        15: { position: { z: 3.09332, x: 19.3387, y: 0 } },
        16: { position: { z: -11.4139, x: -4.67857, y: 0 } },
        17: { position: { z: 3.09332, x: 19.4287, y: 0 } },
        18: { position: { z: -4.44241, x: 18.3256, y: 0 } },
        19: { position: { z: -4.44241, x: 18.2356, y: 0 } },
        20: { position: { z: 6.11102, x: 22.3205, y: 0 } },
        21: { position: { z: -11.4139, x: -4.58857, y: 0 } },
        22: { position: { z: 6.18968, x: 22.3643, y: 0 } },
        23: { position: { z: -6.53208, x: 14.1749, y: 0 } },
        24: { position: { z: -11.4139, x: -4.58857, y: 0 } },
        25: { position: { z: -6.53208, x: 14.265, y: 0 } },
        26: { position: { z: -11.4139, x: -4.67857, y: 0 } },
        27: { position: { z: 3.09332, x: 19.4287, y: 0 } },
        28: { position: { z: 3.09332, x: 19.3387, y: 0 } },
        29: { position: { z: 14.8851, x: 5.86976, y: 0 } }
      }
    },
    plant4: {
      name: 'plant_4',
      mesh: Plant4Model,
      scaleRatio: 1,
      position: { z: -6.29629, x: -7.77645, y: 0 },
      clones: {
        1: { position: { z: -6.17539, x: -7.7916, y: 0 } }
      }
    },
    plant5: {
      name: 'plant_5',
      mesh: Plant5Model,
      scaleRatio: 1,
      position: { z: -9.19929, x: -7.02459, y: 0 }
    },
    plant6: {
      name: 'plant_6',
      mesh: Plant6Model,
      scaleRatio: 1,
      position: { z: 11.7788, x: 0.694911, y: 0 },
      clones: {
        1: { position: { z: 11.9206, x: 0.576876, y: 0 } },
        2: { position: { z: 11.8229, x: 0.842912, y: 0 } },
        3: { position: { z: 12.053, x: 0.692395, y: 0 } },
        4: { position: { z: 11.9009, x: 0.714642, y: 0 } }
      }
    },
    plant7: {
      name: 'plant_7',
      mesh: Plant7Model,
      scaleRatio: 1,
      position: { z: -6.17539, x: -7.97695, y: 0 },
      clones: {
        1: { position: { z: 4.17222, x: -7.60644, y: 0 } },
        2: { position: { z: 11.8894, x: 0.83318, y: 0 } }
      }
    },
    lake: {
      name: 'lake',
      mesh: LakeModel,
      scaleRatio: 1,
      position: { z: -8.87839, x: 14.0986, y: -0.5 }
      // position: { z: -11, x: 2, y: -0.5 }
    },
    // ocean: {
    //   name: 'ocean',
    //   mesh: OceanModel,
    //   scaleRatio: 1,
    //   rotation: { z: 0, x: 0, y: 44.5566 },
    //   position: { z: 7, x: -5, y: -1.75 },
    //   clones: {
    //     1: {
    //       rotation: { z: 0, x: 0, y: 89.75 },
    //       position: { z: 20, x: 8.5, y: -1.75 }
    //     },
    //     2: {
    //       rotation: { z: 0, x: 0, y: 100 },
    //       position: { z: 10, x: 22, y: -1.75 }
    //     },
    //     3: {
    //       rotation: { z: 0, x: 0, y: 100 },
    //       position: { z: -10, x: -10, y: -1.75 }
    //     },
    //     4: {
    //       rotation: { z: 0, x: 0, y: 1.562 },
    //       position: { z: -18, x: 3.3, y: -1.75 }
    //     }
    //   }
    // },
    altar: {
      name: 'altar',
      mesh: AltarModel,
      scaleRatio: 1,
      position: { z: -3.3115, x: 0.375552, y: 0 },
      clones: {
        1: { position: { z: -13.7714, x: -3.32996, y: 0 } },
        2: { position: { z: 1.078, x: 12.2193, y: 0 } },
        3: { position: { z: 9.29341, x: 5.013, y: 0 } },
        4: { position: { z: -17.2499, x: 12.6885, y: 0 } },
        5: { position: { z: 8.61542, x: 9.59333, y: 0 } },
        6: { position: { z: -19.8692, x: -0.096465, y: 0 } },
        7: { position: { z: -6.1493, x: -9.8262, y: 0 } },
        8: { position: { z: -6.5384, x: 11.4497, y: 0 } },
        9: { position: { z: 0.524298, x: 23.1124, y: 0 } }
      }
    },
    kioskCommon: {
      name: 'kiosk_common',
      mesh: KioskCommonModel,
      scaleRatio: 1,
      position: { z: -3.76736, x: 5.62048, y: 0 }
    },
    kiosk: {
      name: 'kiosk',
      mesh: KioskLumaModel,
      scaleRatio: 1,
      position: { z: 2.56307, x: -10.4196, y: 0 },
      clones: {
        1: { position: { z: -19.4397, x: 9.15446, y: 0 } },
        2: { position: { z: 8.80571, x: -0.500739, y: 0 } },
        3: { position: { z: 4.40256, x: 6.65597, y: 0 } }
      }
    },
    stele: {
      name: 'stele',
      mesh: SteleModel,
      scaleRatio: 1,
      position: { z: 1.546, x: -2.61429, y: 0 },
      clones: {
        1: { position: { z: -8.10159, x: -8.64215, y: 0 } },
        2: { position: { z: 1.546, x: 10.8387, y: 0 } },
        3: { position: { z: -13.1192, x: 10.8387, y: 0 } },
        4: { position: { z: 1.28997, x: 4.41635, y: 0 } },
        5: { position: { z: -17.7415, x: -0.094192, y: 0 } },
        6: { position: { z: 10.7251, x: 0.491271, y: 0 } },
        7: { position: { z: -6.0827, x: -1.44495, y: 0 } },
        8: { position: { z: -18.0923, x: 19.1122, y: 0 } },
        9: { position: { z: -4.16514, x: 22.8879, y: 0 } }
      }
    },
    column1: {
      name: 'column_1',
      mesh: Column1Model,
      scaleRatio: 1,
      position: { z: 0, x: 0, y: 0 },
      clones: {
        1: { position: { z: -18.693, x: 6.21746, y: 0 } },
        2: { position: { z: -11.1752, x: 20.1559, y: 0 } }
      }
    },
    column2: {
      name: 'column_2',
      mesh: Column2Model,
      scaleRatio: 1,
      position: { z: -8.09141, x: 7.28786, y: 0 },
      clones: {
        1: { position: { z: -0.556638, x: -5.94739, y: 0 } },
        2: { position: { z: -0.557315, x: 19.5952, y: 0 } }
      }
    },
    column3: {
      name: 'column_3',
      mesh: Column3Model,
      texture: DiffuseColumn3,
      scaleRatio: 1,
      position: { z: -13.3975, x: -0.776054, y: 0 },
      clones: {
        1: { position: { z: 7.77021, x: -4.01629, y: 0 } },
        2: { position: { z: 7.47721, x: -4.46735, y: 0 } }
      }
    },
    column4: {
      name: 'column_4',
      mesh: Column4Model,
      scaleRatio: 1,
      position: { z: 3.47905, x: 0, y: 0 },
      clones: {
        1: { position: { z: -19.9719, x: 4.12014, y: 0 } },
        2: { position: { z: -18.6122, x: 14.4862, y: 0 } }
      }
    },
    doorLeft: {
      name: 'door_left',
      mesh: DoorLeftModel,
      scaleRatio: 1,
      position: { z: -2.03023, x: 18.788, y: 0 }
    },
    doorOutside: {
      name: 'door_outside',
      mesh: DoorOutsideModel,
      scaleRatio: 1,
      position: { z: -2.03023, x: 18.788, y: 0 }
    },
    doorRight: {
      name: 'door_outside',
      mesh: DoorRightModel,
      scaleRatio: 1,
      position: { z: -2.03023, x: 18.788, y: 0 }
    },
    owlStatue: {
      name: 'owl_statue_part',
      mesh: OwlStatueModel,
      scaleRatio: 1,
      position: { z: -9.6036, x: 18.788, y: 0 },
      clones: {
        1: { position: { z: -9.48802, x: -5.34351, y: 0 } },
        2: { position: { z: -9.46352, x: -5.56963, y: 0 } },
        3: { position: { z: -9.324, x: -5.4285, y: 0 } },
        4: { position: { z: -9.62576, x: -5.70375, y: 0 } }
      }
    },
    catStatue: {
      name: 'cat_statue_part',
      mesh: CatStatueModel,
      scaleRatio: 1,
      position: { z: -12.2942, x: 7.10393, y: 0 },
      clones: {
        1: { position: { z: -12.1787, x: 7.25148, y: 0 } },
        2: { position: { z: -12.1542, x: 7.02536, y: 0 } },
        3: { position: { z: -12.0147, x: 7.16649, y: 0 } },
        4: { position: { z: -12.3164, x: 6.89124, y: 0 } },
        5: { position: { z: -12.4061, x: 7.25148, y: 0 } }
      }
    },
    eagleStatue: {
      name: 'eagle_statue_part',
      mesh: CatStatueModel,
      scaleRatio: 1,
      position: { z: -7.27648, x: 2.00783, y: 0 },
      clones: {
        1: { position: { z: -7.38838, x: 2.15538, y: 0 } },
        2: { position: { z: -7.29864, x: 1.79513, y: 0 } },
        3: { position: { z: -6.99689, x: 2.07039, y: 0 } },
        4: { position: { z: -7.1364, x: 1.92925, y: 0 } },
        5: { position: { z: -7.1609, x: 2.15538, y: 0 } },
        6: { position: { z: -7.693, x: 1.82196, y: 0 } },
        7: { position: { z: -7.02923, x: 1.82196, y: 0 } }
      }
    },
    boat: {
      name: 'boat',
      mesh: BoatModel,
      scaleRatio: 1,
      position: { z: 10.1659, x: -4.76008, y: 0 }
    },
    arch: {
      name: 'arch',
      mesh: ArchModel,
      scaleRatio: 1,
      position: { z: -7.40124, x: -2.23076, y: 0 },
      clones: {
        1: { position: { z: -8.46461, x: -2.98167, y: 0 } },
        2: { position: { z: -5.47352, x: -7.2117, y: 0 } },
        3: { position: { z: -4.42156, x: -6.44488, y: 0 } },
        4: { position: { z: -15.3647, x: 3.79359, y: 0 } },
        5: { position: { z: -14.9984, x: 4.95798, y: 0 } },
        6: { position: { z: 3.20016, x: -4.10814, y: 0 } },
        7: { position: { z: -15.1811, x: 12.1407, y: 0 } },
        8: { position: { z: 3.90104, x: 15.8449, y: 0 } }
      }
    },
    pier: {
      name: 'pier',
      mesh: PierModel,
      scaleRatio: 0.5,
      position: { z: 8.38487, x: -4.41869, y: 0 },
      clones: {
        1: {
          position: { z: -11.3189, x: 14.3556, y: 0 },
          rotation: { z: 0, x: 0, y: 89.985 }
        }
      }
    }
  }
}
