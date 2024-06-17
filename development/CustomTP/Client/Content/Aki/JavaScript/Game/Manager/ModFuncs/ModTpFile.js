'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.ModTpFile = void 0);
const puerts_1 = require('puerts'),
  UE = require('ue'),
  Info_1 = require('../../../Core/Common/Info'),
  Log_1 = require('../../../Core/Common/Log'),
  ModManager_1 = require('../ModManager'),
  ModCustomTp_1 = require('./ModCustomTp');

const { VoidThunderFarm } = require('./function/c4-void-thunder');
const { C4SupportFarm } = require('./function/c4-support-farm');
const { C3VoidThunderFarm } = require('./function/c3-void-thunder');
const { C3MoonlightFarm } = require('./function/c3-moonlight-farm');
const { ResonanceBeacon, ResonanceNexus } = require('./data/waypoint');

class ModTpFile {
  static C4_VoidThunderLoop50 = VoidThunderFarm(50);
  static C4_SupportLoop50 = C4SupportFarm(50);
  static C3_VoidThunderFarm = C3VoidThunderFarm();
  static C3_MoonlightFarm = C3MoonlightFarm();
  static ResonanceBeacon = ResonanceBeacon;
  static ResonanceNexus = ResonanceNexus;

  static CustomTpList = [
    this.C4_VoidThunderLoop50,
    this.C4_SupportLoop50,
    this.C3_VoidThunderFarm,
    this.C3_MoonlightFarm,
    this.ResonanceBeacon,
    this.ResonanceNexus,
  ];
}
exports.ModTpFile = ModTpFile;
